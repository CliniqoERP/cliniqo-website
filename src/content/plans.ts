/**
 * Prices and plan contents. The backend decides them (backend/src/shared/plans/plans.ts and
 * settings-modules.ts); keep this in step when they change.
 */
export type Plan = {
  name: string;
  summary: string;
  monthly: number;
  annual: number;
  users: string;
  intro: string;
  features: string[];
  highlight?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Standard",
    summary: "The full patient journey for a clinic or small hospital.",
    monthly: 150_000,
    annual: 1_500_000,
    users: "Up to 10 staff accounts",
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
    name: "Professional",
    summary: "For hospitals that bill HMOs and run a full staff.",
    monthly: 300_000,
    annual: 3_300_000,
    users: "Up to 50 staff accounts",
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
    name: "Enterprise",
    summary: "For large and multi-department hospitals.",
    monthly: 500_000,
    annual: 5_500_000,
    users: "Unlimited staff accounts",
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
