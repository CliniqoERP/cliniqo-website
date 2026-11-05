import { ArrowUpRight, Cloud, Network, Server } from "lucide-react";

const OPTIONS = [
  {
    title: "Cloud",
    caption: "Managed by Cliniqo",
    text: "We run everything. Your staff sign in at your own address, such as your-hospital.cliniqoerp.com. Updates arrive without anyone lifting a finger.",
    icon: Cloud,
  },
  {
    title: "Hybrid",
    caption: "A shared approach",
    text: "Your records stay in a database at your hospital, reached securely from our servers. The data is yours; the running of it is ours.",
    icon: Network,
  },
  {
    title: "On-premise",
    caption: "Run it locally",
    text: "The whole system on your own server, under a licence from Cliniqo, with a one-off installation fee. It keeps working on your local network if the internet goes down.",
    icon: Server,
  },
];

export function Deployment() {
  return (
    <section id="deployment" className="deployment-section mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-sky-blue">
          <span className="size-1.5 rounded-full bg-teal-green" /> Deployment
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Your data, where you want it</h2>
        <p className="mt-3 text-slate">
          The same Cliniqo ERP in all three, on the same plans. On-premise adds a one-off installation fee.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {OPTIONS.map(({ title, text, caption, icon: Icon }, index) => (
          <article
            key={title}
            className="deployment-card lift-card group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-faint p-6 sm:p-7"
          >
            <div className="flex items-start justify-between">
              <span className="deployment-icon grid size-12 place-items-center rounded-2xl bg-ice-blue text-hospital-blue">
                <Icon className="size-5" />
              </span>
              <span className="font-mono text-xs text-slate/70">0{index + 1}</span>
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-teal-green">{caption}</p>
            <div className="mt-1 flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{title}</h3>
              <ArrowUpRight className="size-4 text-sky-blue opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
