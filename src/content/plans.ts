/**
 * Plan contents, with the prices and staff limits they had when the site was built. The live prices
 * are edited in the admin app and loaded when the page opens (live-prices.ts); these show until then,
 * or if they can't be loaded. What each plan includes follows backend/src/shared/plans/settings-modules.ts.
 */
export type PlanKey = "STANDARD" | "PROFESSIONAL" | "ENTERPRISE";
export type Plan = {
  key: PlanKey;
  name: string;
  summary: string;
  monthly: number;
  annual: number;
  /** Null means unlimited. */
  maxUsers: number | null;
  intro: string;
  features: string[];
  highlight?: boolean;
};

export const PLANS: Plan[] = [
  {
    key: "STANDARD",
    name: "Standard",
    summary: "The full patient journey for a clinic or small hospital.",
    monthly: 150_000,
    annual: 1_500_000,
    maxUsers: 10,
    intro: "Includes",
    features: [
      "Reception, walk-in check-in and patient records",
      "Triage, patient queue and consultations (SOAP notes)",
      "Laboratory and radiology",
      "Pharmacy, billing, payments and cash-up",
      "Admissions and bed management",
      "Departments, roles and permissions",
      "Import patients and stock from your old system",
      "Network Access: sign-in only from your premises",
    ],
  },
  {
    key: "PROFESSIONAL",
    name: "Professional",
    summary: "For hospitals that bill HMOs and run a full staff.",
    monthly: 300_000,
    annual: 3_300_000,
    maxUsers: 50,
    intro: "Everything in Standard, plus",
    features: [
      "HMO management and claims",
      "Payroll and wage structures",
      "Leave and request approvals",
      "Staff rosters",
      "Suppliers and purchasing",
      "Audit log of every change",
      "Broadcast messages to staff",
    ],
    highlight: true,
  },
  {
    key: "ENTERPRISE",
    name: "Enterprise",
    summary: "For large and multi-department hospitals.",
    monthly: 500_000,
    annual: 5_500_000,
    maxUsers: null,
    intro: "Everything in Professional, plus",
    features: [
      "Reports and analytics: clinical, financial and lab",
      "Your own approval chains",
      "Department shift planning",
      "Your hospital's colours and logo",
      "Staff chat (coming soon)",
    ],
  },
];

export const naira = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

export const staffAccounts = (maxUsers: number | null) =>
  maxUsers === null ? "Unlimited staff accounts" : `Up to ${maxUsers.toLocaleString("en-NG")} staff accounts`;
