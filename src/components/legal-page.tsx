import Link from "next/link";
import type { ReactNode } from "react";
import { LEGAL } from "@/content/legal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function LegalPage({ title, intro, children }: { title: string; intro: ReactNode; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="bg-faint px-4 py-14 sm:px-6 sm:py-20">
        <article className="mx-auto max-w-3xl rounded-3xl border border-border bg-white px-5 py-10 shadow-sm sm:px-12 sm:py-14">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-slate">
            Version {LEGAL.version} · Effective {LEGAL.effective}
          </p>
          <div className="mt-6 space-y-4 leading-relaxed text-charcoal">{intro}</div>
          <div className="mt-4">{children}</div>
          <p className="mt-12 border-t border-border pt-6 text-sm text-slate">
            See also our{" "}
            <Link href="/privacy" className="font-medium text-hospital-blue underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="font-medium text-hospital-blue underline underline-offset-2">
              Terms of Use
            </Link>
            .
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight text-hospital-blue">{title}</h2>
      <div className="mt-3 space-y-4 leading-relaxed text-charcoal">{children}</div>
    </section>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-sky-blue">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function Numbered({ items }: { items: ReactNode[] }) {
  return (
    <ol className="list-decimal space-y-2 pl-5 marker:text-slate">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <thead className="bg-ash text-charcoal">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Mail() {
  return (
    <a href={`mailto:${LEGAL.email}`} className="font-medium text-hospital-blue underline underline-offset-2">
      {LEGAL.email}
    </a>
  );
}
