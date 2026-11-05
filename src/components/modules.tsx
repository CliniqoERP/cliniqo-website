import {
  BarChart3,
  Boxes,
  BriefcaseMedical,
  FileSpreadsheet,
  Microscope,
  Palette,
  Radio,
  ReceiptText,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";

const MODULES = [
  {
    title: "Reception & patients",
    text: "Registration, walk-in check-in, appointments and a complete record for every patient.",
    icon: UserRoundPlus,
  },
  {
    title: "Clinical care",
    text: "Triage, patient queue, consultations with SOAP notes, admissions and bed management.",
    icon: BriefcaseMedical,
  },
  {
    title: "Diagnostics",
    text: "Laboratory and radiology work queues, results back to the doctor, critical results flagged.",
    icon: Microscope,
  },
  {
    title: "Billing & HMO",
    text: "Invoices, payments, refunds, end-of-day cash-up, and HMO cover with claims.",
    icon: ReceiptText,
  },
  {
    title: "Pharmacy & inventory",
    text: "Dispensing against stock, stock levels and movements, suppliers and purchasing.",
    icon: Boxes,
  },
  {
    title: "HR & payroll",
    text: "Staff profiles, rosters, leave with approvals, wage structures and payslips.",
    icon: UsersRound,
  },
  {
    title: "Reports & dashboard",
    text: "Today at a glance, plus clinical, financial and lab reports, sent on a schedule if you like.",
    icon: BarChart3,
  },
];

const EXTRAS = [
  {
    title: "Live, not refreshed",
    text: "Queues, results and invoices update on every screen the moment they change.",
    icon: Radio,
  },
  {
    title: "Bring your records",
    text: "Import patients and opening stock from a spreadsheet: up to 50,000 rows, checked before anything is saved.",
    icon: FileSpreadsheet,
  },
  {
    title: "Your hospital, your look",
    text: "Your logo and colours on every screen your staff use (Enterprise).",
    icon: Palette,
  },
];

export function Modules() {
  return (
    <section id="modules" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-sky-blue">Modules</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">From the front desk to the finance office</h2>
        <p className="mt-3 text-slate">
          One login per staff member, and each role sees only what it needs: from receptionist and nurse to pharmacist,
          lab scientist, billing officer and HR manager.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MODULES.map(({ title, text, icon: Icon }) => (
          <article
            key={title}
            className="rounded-xl border border-border p-5 transition-shadow hover:shadow-lg hover:shadow-hospital-blue/5 lg:last:col-span-2"
          >
            <span className="grid size-10 place-items-center rounded-lg bg-hospital-blue text-white">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {EXTRAS.map(({ title, text, icon: Icon }) => (
          <div key={title} className="flex gap-4 rounded-xl bg-ash p-5">
            <Icon className="mt-0.5 size-5 shrink-0 text-teal-green" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
