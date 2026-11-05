import { ArrowRight, ClipboardList, CreditCard, FlaskConical, HeartPulse, Pill, Stethoscope } from "lucide-react";

const STEPS = [
  { title: "Check-in", text: "Register or find the patient; a visit opens.", icon: ClipboardList },
  { title: "Triage", text: "Vitals and priority, so emergencies go first.", icon: HeartPulse },
  { title: "Consultation", text: "The doctor's queue and SOAP notes.", icon: Stethoscope },
  { title: "Lab & radiology", text: "Orders arrive in the department's work queue.", icon: FlaskConical },
  { title: "Pharmacy", text: "Prescriptions dispensed against stock.", icon: Pill },
  { title: "Billing", text: "One invoice, paid by cash, transfer or HMO.", icon: CreditCard },
];

export function Journey() {
  return (
    <section className="journey-section border-b border-border bg-faint">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-sky-blue"><span className="size-1.5 rounded-full bg-teal-green" /> One visit, every department</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal">
            The patient moves. The paperwork doesn&apos;t.
          </h2>
          <p className="mt-3 text-slate">
            Each step hands the visit to the next. Nobody re-enters details, and every screen updates as soon as
            something changes.
          </p>
        </div>
        <ol aria-label="A patient's visit through the hospital" className="journey-steps relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {STEPS.map(({ title, text, icon: Icon }, index) => (
            <li key={title} className="journey-step lift-card relative rounded-2xl border border-border bg-white p-5">
              <div className="flex items-center gap-2">
                <span className="journey-icon grid size-10 place-items-center rounded-xl bg-ice-blue text-hospital-blue">
                  <Icon className="size-4" />
                </span>
                <span className="ml-auto font-mono text-[11px] font-semibold tracking-wider text-sky-blue/70">0{index + 1}</span>
              </div>
              <h3 className="mt-3 font-semibold text-charcoal">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate">{text}</p>
              {index < STEPS.length - 1 && <ArrowRight aria-hidden="true" className="journey-next hidden size-4 text-sky-blue/60 lg:block" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
