import { useEffect, useState } from "react";
import { PLANS, type Plan } from "./plans";

/** The admin app's public copy of the price list (admin-app/src/app/api/public/plans). */
export const PRICES_URL = process.env.NEXT_PUBLIC_PRICES_URL ?? "https://admin.cliniqoerp.com/api/public/plans";

type Terms = { monthly: number; annual: number; maxUsers: number | null };

const amount = (value: unknown) => typeof value === "number" && Number.isInteger(value) && value > 0;
const sound = (terms: unknown): terms is Terms => {
  const value = terms as Partial<Terms> | null;
  return (
    !!value && amount(value.monthly) && amount(value.annual) && (value.maxUsers === null || amount(value.maxUsers))
  );
};

/** The plans with today's prices. Shows the built-in prices until the live ones arrive, and keeps them if they don't. */
export function useLivePlans(): Plan[] {
  const [plans, setPlans] = useState(PLANS);
  useEffect(() => {
    const controller = new AbortController();
    fetch(PRICES_URL, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((body: { data?: Record<string, unknown> } | null) => {
        const live = body?.data;
        if (!live || !PLANS.every((plan) => sound(live[plan.key]))) return;
        setPlans(
          PLANS.map((plan) => {
            const { monthly, annual, maxUsers } = live[plan.key] as Terms;
            return { ...plan, monthly, annual, maxUsers };
          }),
        );
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);
  return plans;
}
