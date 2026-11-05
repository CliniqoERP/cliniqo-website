import Link from "next/link";
import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Thank you", robots: { index: false } };

export default function ThanksPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[65vh] items-center justify-center bg-faint px-4 py-20 text-center">
        <div className="thanks-card max-w-xl rounded-3xl border border-border bg-white px-8 py-12 shadow-xl shadow-hospital-blue/5 sm:px-14">
          <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-mint text-teal-green"><CircleCheck className="size-9" /></span>
          <p className="mt-6 text-sm font-semibold text-teal-green">Demo request received</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Thank you. We&apos;ve got your request.</h1>
          <p className="mt-3 text-slate">We&apos;ll be in touch soon to arrange your demo.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-hospital-blue transition-colors hover:bg-faint"
        >
          Back to the home page
        </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
