import { Activity, BedDouble, FlaskConical, Stethoscope, Users } from "lucide-react";

/** A drawing of the patient queue screen, for the hero. Names and numbers are illustrative. */
const QUEUE = [
  {
    name: "Adaeze Okafor",
    mrn: "MRN-K7Q4-X92P",
    stage: "With doctor",
    tone: "bg-ice-blue text-hospital-blue",
    wait: "12 min",
  },
  { name: "Tunde Bakare", mrn: "MRN-3HF8-QW2L", stage: "Triage", tone: "bg-cream text-[#7d6608]", wait: "4 min" },
  { name: "Ngozi Eze", mrn: "MRN-P2ZD-71KC", stage: "Laboratory", tone: "bg-mint text-[#0e6655]", wait: "25 min" },
  { name: "Musa Ibrahim", mrn: "MRN-W9RT-4JNA", stage: "Emergency", tone: "bg-blush text-[#922b21]", wait: "now" },
];

const STATS = [
  { label: "In the queue", value: "18", icon: Users },
  { label: "Seen today", value: "64", icon: Stethoscope },
  { label: "Lab results due", value: "7", icon: FlaskConical },
  { label: "Beds free", value: "11", icon: BedDouble },
];

export function ProductPreview() {
  return (
    <div
      aria-hidden="true"
      className="relative rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-darkest/40 ring-1 ring-white/10"
    >
      <div className="overflow-hidden rounded-xl bg-white text-charcoal">
        <div className="flex items-center justify-between border-b border-border bg-faint px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-crimson/70" />
            <span className="size-2.5 rounded-full bg-amber/70" />
            <span className="size-2.5 rounded-full bg-teal-green/70" />
          </div>
          <p className="text-xs font-medium text-slate">lagos-general.cliniqoerp.com</p>
          <span className="flex items-center gap-1 text-[11px] font-medium text-teal-green">
            <Activity className="size-3" /> Live
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4">
          {STATS.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-lg border border-border p-2.5">
              <Icon className="mb-1.5 size-4 text-sky-blue" />
              <p className="text-lg font-semibold leading-none">{value}</p>
              <p className="mt-1 text-[11px] text-slate">{label}</p>
            </div>
          ))}
        </div>

        <div className="px-3 pb-3">
          <div className="rounded-lg border border-border">
            <div className="flex items-center justify-between border-b border-border px-3 py-2">
              <p className="text-sm font-semibold">Patient queue</p>
              <p className="text-[11px] text-slate">Outpatients · today</p>
            </div>
            <ul className="divide-y divide-border">
              {QUEUE.map((patient) => (
                <li key={patient.mrn} className="flex items-center gap-3 px-3 py-2.5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ash text-xs font-semibold text-hospital-blue">
                    {patient.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{patient.name}</p>
                    <p className="font-mono text-[11px] text-slate">{patient.mrn}</p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${patient.tone}`}>
                    {patient.stage}
                  </span>
                  <span className="hidden w-12 text-right text-[11px] text-slate sm:block">{patient.wait}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
