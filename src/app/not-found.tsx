import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
        <p className="text-sm font-semibold text-sky-blue">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">This page doesn&apos;t exist</h1>
        <p className="mt-3 text-slate">
          Looking for your hospital&apos;s Cliniqo? Use your own address, such as your-hospital.cliniqoerp.com.
        </p>
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
