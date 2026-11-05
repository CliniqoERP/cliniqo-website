import { Cloud, Network, Server } from "lucide-react";

const OPTIONS = [
  {
    title: "Cloud",
    text: "We run everything. Your staff sign in at your own address, such as your-hospital.cliniqoerp.com. Updates arrive without anyone lifting a finger.",
    icon: Cloud,
  },
  {
    title: "Hybrid",
    text: "Your records stay in a database at your hospital, reached securely from our servers. The data is yours; the running of it is ours.",
    icon: Network,
  },
  {
    title: "On-premise",
    text: "The whole system on your own server, under a licence from Cliniqo. It keeps working on your local network if the internet goes down.",
    icon: Server,
  },
];

export function Deployment() {
  return (
    <section id="deployment" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-sky-blue">Deployment</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Your data, where you want it</h2>
        <p className="mt-3 text-slate">The same Cliniqo ERP in all three. The price is the same too.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {OPTIONS.map(({ title, text, icon: Icon }) => (
          <article key={title} className="rounded-xl border border-border bg-gradient-to-b from-faint to-white p-6">
            <span className="grid size-11 place-items-center rounded-xl bg-ice-blue text-hospital-blue">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
