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
      <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
        <CircleCheck className="size-12 text-teal-green" />
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">Thank you. We&apos;ve got your request.</h1>
        <p className="mt-3 text-slate">We&apos;ll be in touch soon to arrange your demo.</p>
        <Link
          href="/"
          className="mt-8 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-hospital-blue hover:bg-faint"
        >
          Back to the home page
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
