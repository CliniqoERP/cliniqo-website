"use client";

import { Activity, ClipboardList, FlaskConical, HeartPulse, Pill, ReceiptText, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";

/** Evenly around the centre: x and y as percentages of the stage, which matches the SVG's 520 × 310 box. */
const DEPARTMENTS = [
  { label: "Reception", icon: ClipboardList, x: 20, y: 18 },
  { label: "Clinical care", icon: HeartPulse, x: 80, y: 18 },
  { label: "Laboratory", icon: FlaskConical, x: 88, y: 50 },
  { label: "Pharmacy", icon: Pill, x: 80, y: 82 },
  { label: "Billing", icon: ReceiptText, x: 20, y: 82 },
  { label: "HR & payroll", icon: UsersRound, x: 12, y: 50 },
] as const;

type Department = (typeof DEPARTMENTS)[number]["label"];

const ACTIVITY: { label: string; from: Department; to: Department; icon: typeof Activity; tone: string }[] = [
  {
    label: "New patient checked in",
    from: "Reception",
    to: "Clinical care",
    icon: ClipboardList,
    tone: "text-sky-blue",
  },
  { label: "Lab result ready", from: "Laboratory", to: "Clinical care", icon: FlaskConical, tone: "text-[#63d7b3]" },
  { label: "Prescription dispensed", from: "Pharmacy", to: "Billing", icon: Pill, tone: "text-amber" },
  { label: "Invoice paid", from: "Billing", to: "Reception", icon: ReceiptText, tone: "text-[#63d7b3]" },
  { label: "Roster published", from: "HR & payroll", to: "Clinical care", icon: UsersRound, tone: "text-[#b59afa]" },
];

const CENTRE = { x: 260, y: 155 };
const point = (x: number, y: number) => ({ x: (x / 100) * 520, y: (y / 100) * 310 });
/** A gentle curve from the centre out to a department. */
const pathTo = (x: number, y: number) => {
  const end = point(x, y);
  const bend = { x: (CENTRE.x + end.x) / 2, y: CENTRE.y + (end.y - CENTRE.y) * 0.25 };
  return `M${CENTRE.x} ${CENTRE.y} Q${bend.x} ${bend.y} ${end.x} ${end.y}`;
};

const EVERY_MS = 2800;

/** An animated map of a visit moving between departments, for the hero. */
export function ProductPreview() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setTick((value) => value + 1), EVERY_MS);
    return () => window.clearInterval(timer);
  }, []);

  const event = ACTIVITY[tick % ACTIVITY.length];
  const EventIcon = event.icon;
  const active = (label: Department) => label === event.from || label === event.to;

  return (
    <div
      role="img"
      aria-label="Illustration of patient activity flowing between hospital departments"
      className="care-map relative isolate overflow-hidden rounded-3xl p-5 sm:p-6"
    >
      <div aria-hidden="true" className="care-map-glow absolute inset-0 -z-10" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">One connected hospital</p>
          <p className="mt-1 text-xs text-mist">Every team, working from the same patient record</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-teal-green/30 bg-teal-green/10 px-2.5 py-1 text-[11px] font-medium text-[#63d7b3]">
          <span className="care-live-dot size-1.5 rounded-full bg-[#63d7b3]" />
          Live
        </span>
      </div>

      <div className="relative mx-auto mt-4 aspect-[520/310] w-full max-w-[520px]">
        <svg aria-hidden="true" viewBox="0 0 520 310" className="absolute inset-0 size-full overflow-visible">
          <defs>
            <radialGradient id="care-map-halo">
              <stop offset="0%" stopColor="#2e86c1" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#2e86c1" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={CENTRE.x} cy={CENTRE.y} r="120" fill="url(#care-map-halo)" />
          {DEPARTMENTS.map(({ label, x, y }) => (
            <path
              key={label}
              d={pathTo(x, y)}
              className={`care-flow-line ${active(label) ? "care-flow-line-active" : ""}`}
            />
          ))}
          {DEPARTMENTS.map(({ label, x, y }, index) => (
            <circle key={label} r="3" className={`care-flow-dot ${active(label) ? "care-flow-dot-active" : ""}`}>
              <animateMotion
                dur={`${3.2 + index * 0.4}s`}
                begin={`${index * -0.7}s`}
                repeatCount="indefinite"
                path={pathTo(x, y)}
              />
            </circle>
          ))}
          <circle cx={CENTRE.x} cy={CENTRE.y} r="52" className="care-map-orbit" />
          <circle cx={CENTRE.x} cy={CENTRE.y} r="40" className="care-map-orbit care-map-orbit-inner" />
        </svg>

        {DEPARTMENTS.map(({ label, icon: Icon, x, y }) => (
          <div
            key={label}
            className={`care-map-node ${active(label) ? "care-map-node-active" : ""}`}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Icon className="size-3.5 shrink-0" />
            <span>{label}</span>
          </div>
        ))}

        <div className="care-map-center absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl sm:size-[72px]">
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny static brand icon */}
          <img
            src="/branding/cliniqo-icon.png"
            width={42}
            height={42}
            alt=""
            className="size-10 rounded-xl sm:size-11"
          />
        </div>
      </div>

      <div className="relative mt-4 flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <span
          key={`icon-${tick}`}
          className="care-activity-icon grid size-9 shrink-0 place-items-center rounded-xl bg-white/[0.06]"
        >
          <EventIcon className={`size-4 ${event.tone}`} />
        </span>
        <div key={`text-${tick}`} className="care-activity-text min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">{event.label}</p>
          <p className="mt-0.5 truncate text-[11px] text-mist">
            {event.from} → {event.to}
          </p>
        </div>
        <span className="shrink-0 text-[11px] text-mist">Just now</span>
        <span
          key={`bar-${tick}`}
          aria-hidden="true"
          className="care-activity-bar"
          style={{ animationDuration: `${EVERY_MS}ms` }}
        />
      </div>
    </div>
  );
}
