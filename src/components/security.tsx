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
    <section id="security" className="bg-darkest text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold text-mist">Security</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Patient records, kept where they belong</h2>
          <p className="mt-4 leading-relaxed text-mist">
            Each hospital&apos;s data is kept apart from every other hospital&apos;s, and you decide where it lives: in
            our cloud, or on servers in your own building.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {POINTS.map(({ title, text, icon: Icon }) => (
            <li key={title} className="rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:last:col-span-2">
              <Icon className="size-5 text-sky-blue" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
