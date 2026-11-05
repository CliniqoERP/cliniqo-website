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
    area: "Patient journey",
    text: "Registration, walk-in check-in, appointments and a complete record for every patient.",
    icon: UserRoundPlus,
  },
  {
    title: "Clinical care",
    area: "Care delivery",
    text: "Triage, patient queue, consultations with SOAP notes, admissions and bed management.",
    icon: BriefcaseMedical,
  },
  {
    title: "Diagnostics",
    area: "Care delivery",
    text: "Laboratory and radiology work queues, results back to the doctor, critical results flagged.",
    icon: Microscope,
  },
  {
    title: "Billing & HMO",
    area: "Operations",
    text: "Invoices, payments, refunds, end-of-day cash-up, and HMO cover with claims.",
    icon: ReceiptText,
  },
  {
    title: "Pharmacy & inventory",
    area: "Operations",
    text: "Dispensing against stock, stock levels and movements, suppliers and purchasing.",
    icon: Boxes,
  },
  {
    title: "HR & payroll",
    area: "People",
    text: "Staff profiles, rosters, leave with approvals, wage structures and payslips.",
    icon: UsersRound,
  },
  {
    title: "Reports & dashboard",
    area: "Insights",
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
    <section
      id="modules"
      className="modules-section relative isolate overflow-hidden border-y border-border/70 bg-gradient-to-b from-faint via-white to-faint"
    >
      <div aria-hidden="true" className="modules-orb pointer-events-none absolute -right-32 top-24 size-[28rem] rounded-full bg-ice-blue/40 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-blue/15 bg-white px-3 py-1 text-sm font-semibold text-sky-blue shadow-sm">
            <span className="size-1.5 rounded-full bg-teal-green" /> Modules
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">From the front desk to the finance office</h2>
          <p className="mt-3 text-slate">
            One login per staff member, and each role sees only what it needs: from receptionist and nurse to pharmacist,
            lab scientist, billing officer and HR manager.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map(({ title, text, area, icon: Icon }, index) => (
            <article
              key={title}
              className={`module-card lift-card group relative overflow-hidden rounded-2xl border border-border bg-white/90 p-5 sm:p-6 ${
                index === MODULES.length - 1 ? "lg:last:col-span-2 lg:flex lg:items-center lg:justify-between lg:gap-8" : ""
              }`}
            >
              <div className="relative z-10 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <span className="module-icon grid size-11 place-items-center rounded-xl bg-hospital-blue text-white shadow-sm shadow-hospital-blue/15 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full bg-ash px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate">
                    {area}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-charcoal">{title}</h3>
                <p className="mt-2 max-w-[34rem] text-sm leading-relaxed text-slate">{text}</p>
              </div>
              {index === MODULES.length - 1 && (
                <div
                  aria-hidden="true"
                  className="reports-visual relative mt-6 flex h-28 min-w-52 flex-1 items-end gap-2 overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br from-faint to-ice-blue/40 p-4 lg:mt-0 lg:max-w-[17rem]"
                >
                  <div className="absolute left-4 top-3 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-teal-green" />
                    <span className="text-[10px] font-medium text-slate">Hospital activity</span>
                  </div>
                  {[34, 52, 42, 72, 58, 88, 67, 100, 76, 92].map((height, bar) => (
                    <span
                      key={bar}
                      className="report-bar relative z-10 flex-1 rounded-t-sm bg-hospital-blue/80"
                      style={{ height: `${height}%`, animationDelay: `${bar * 55}ms` }}
                    />
                  ))}
                  <span className="absolute inset-x-4 bottom-4 border-t border-dashed border-sky-blue/25" />
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {EXTRAS.map(({ title, text, icon: Icon }) => (
            <div key={title} className="module-extra group flex gap-4 rounded-2xl border border-border/70 bg-white/70 p-5 transition-colors hover:border-teal-green/25 hover:bg-white">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-mint text-teal-green transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
