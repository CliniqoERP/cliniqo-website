import { ArrowRight, Check } from "lucide-react";
import { ProductPreview } from "./product-preview";

const POINTS = ["Cloud, hybrid or on your own servers", "Priced in naira", "Bring your existing records"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-darkest via-deep to-hospital-blue text-white">
      <div
        aria-hidden="true"
        className="animate-glow-drift pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-sky-blue/25 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div className="hero-copy">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-mist">
            Hospital management software for Nigeria
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Run your whole hospital on one system.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
            Cliniqo ERP connects reception, triage, consultations, laboratory, radiology, pharmacy, billing, HR and
            reporting. Every department sees the same patient, in real time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-hospital-blue shadow-sm transition-colors hover:bg-ice-blue"
            >
              Book a demo <ArrowRight className="size-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See pricing
            </a>
          </div>
          <ul className="mt-8 flex flex-col gap-2 text-sm text-mist sm:flex-row sm:flex-wrap sm:gap-x-6">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <Check className="size-4 text-teal-green" /> {point}
              </li>
            ))}
          </ul>
        </div>
        <ProductPreview />
      </div>
    </section>
  );
}
