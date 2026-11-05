"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { naira, PLANS } from "@/content/plans";

type Cycle = "monthly" | "annual";

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("annual");

  return (
    <section id="pricing" className="border-y border-border bg-faint">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-sky-blue">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">One price for the whole hospital</h2>
          <p className="mt-3 text-slate">
            Priced per hospital, not per patient. The same in the cloud or on your own servers.
          </p>
          <div
            role="radiogroup"
            aria-label="Billing cycle"
            className="mt-8 inline-flex rounded-lg border border-border bg-white p-1"
          >
            {(["monthly", "annual"] as const).map((option) => (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={cycle === option}
                onClick={() => setCycle(option)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  cycle === option ? "bg-hospital-blue text-white shadow-sm" : "text-slate hover:text-charcoal"
                }`}
              >
                {option === "monthly" ? "Monthly" : "Annual"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = cycle === "annual" ? plan.annual : plan.monthly;
            const saving = plan.monthly * 12 - plan.annual;
            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl bg-white p-6 ${
                  plan.highlight
                    ? "border-2 border-hospital-blue shadow-xl shadow-hospital-blue/10"
                    : "border border-border"
                }`}
              >
                {plan.highlight && (
                  <p className="absolute -top-3 left-6 rounded-full bg-hospital-blue px-3 py-1 text-xs font-semibold text-white">
                    For most hospitals
                  </p>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 min-h-10 text-sm text-slate">{plan.summary}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight">{naira(price)}</span>
                  <span className="text-sm text-slate">/ {cycle === "annual" ? "year" : "month"}</span>
                </p>
                <p className="mt-1 h-5 text-sm font-medium text-teal-green">
                  {cycle === "annual" && saving > 0 ? `Save ${naira(saving)} a year` : ""}
                </p>
                <p className="mt-4 rounded-lg bg-ash px-3 py-2 text-sm font-medium">{plan.users}</p>
                <p className="mt-6 text-sm font-semibold">{plan.intro}</p>
                <ul className="mt-3 flex-1 space-y-2.5 text-sm text-slate">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className={`mt-8 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-hospital-blue text-white hover:bg-primary-hover"
                      : "border border-border text-hospital-blue hover:bg-faint"
                  }`}
                >
                  Book a demo
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
