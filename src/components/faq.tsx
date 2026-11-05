import { ChevronDown } from "lucide-react";

const QUESTIONS = [
  {
    q: "Can we bring our existing patient records?",
    a: "Yes. Upload a spreadsheet of patients, and of opening stock, and Cliniqo checks every row first: what will be added, what's a duplicate, and what needs fixing. Up to 50,000 rows a file. Old MRNs are kept, so a returning patient can still be found by the number on their card.",
  },
  {
    q: "Do we need an internet connection?",
    a: "In the cloud, yes: staff use Cliniqo in the browser. If your connection isn't reliable, the on-premise option runs on a server in your hospital and keeps working on your own network.",
  },
  {
    q: "Can we stop staff signing in from home?",
    a: "Yes. Network Access, on every plan, limits sign-in to your hospital's own internet connections. Anyone elsewhere is turned away, even with the right password.",
  },
  {
    q: "Does it work with HMOs?",
    a: "Yes, on the Professional and Enterprise plans: set up each HMO and its plans, record patients' cover, split invoices between the HMO and the patient's co-pay, and manage claims.",
  },
  {
    q: "What counts as a user?",
    a: "Each staff member who can sign in. Standard includes 10, Professional 50 and Enterprise has no limit. Deactivated accounts don't count.",
  },
  {
    q: "Who owns the data?",
    a: "You do. Each hospital's records are kept separately, and with the hybrid and on-premise options they never leave your building.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold text-sky-blue">FAQ</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">Questions hospitals ask us</h2>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border">
        {QUESTIONS.map(({ q, a }) => (
          <details key={q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {q}
              <ChevronDown className="size-4 shrink-0 text-slate transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
