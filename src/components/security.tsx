import { History, KeyRound, LockKeyhole, ShieldCheck, Wifi } from "lucide-react";

const POINTS = [
  {
    title: "Access by role",
    text: "Eleven built-in roles, and permissions you can tune. A receptionist never sees a payslip; a lab scientist never sees an invoice.",
    icon: KeyRound,
  },
  {
    title: "Only from your premises",
    text: "Network Access limits sign-in to your hospital's own internet connections, so records can't be opened from home.",
    icon: Wifi,
  },
  {
    title: "A record of every change",
    text: "Who did what, when and from where, kept in an audit log that can't be edited.",
    icon: History,
  },
  {
    title: "Encrypted and signed",
    text: "Encrypted connections end to end, and every request between our servers is signed, so the system can't be reached around its front door.",
    icon: LockKeyhole,
  },
  {
    title: "Sessions that expire",
    text: "Short-lived sign-ins, account lockout after repeated wrong passwords, and a deactivated user is signed out everywhere at once.",
    icon: ShieldCheck,
  },
];

export function Security() {
  return (
    <section id="security" className="security-section relative isolate overflow-hidden bg-darkest text-white">
      <div aria-hidden="true" className="security-glow pointer-events-none absolute -right-24 -top-32 size-[34rem] rounded-full bg-sky-blue/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-mist">
            <span className="size-1.5 rounded-full bg-teal-green" /> Security
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Patient records, kept where they belong</h2>
          <p className="mt-4 leading-relaxed text-mist">
            Each hospital&apos;s data is kept apart from every other hospital&apos;s, and you decide where it lives: in
            our cloud, or on servers in your own building.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-mist">
            <span className="grid size-9 place-items-center rounded-lg bg-teal-green/15 text-[#63d7b3]">
              <LockKeyhole className="size-4" />
            </span>
            <span>
              <strong className="block font-semibold text-white">Privacy by design</strong>
              <span className="text-xs">Built around hospital workflows</span>
            </span>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {POINTS.map(({ title, text, icon: Icon }) => (
            <li key={title} className="security-card group rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:last:col-span-2">
              <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-sky-blue transition-colors group-hover:border-teal-green/25 group-hover:bg-teal-green/10 group-hover:text-[#63d7b3]">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
