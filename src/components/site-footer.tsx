import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-darkest text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimisation */}
          <img src="/branding/cliniqo-logo-white.svg" alt="Cliniqo" width={148} height={38} className="h-8 w-auto" />
          <p className="mt-4 text-sm leading-relaxed">
            Hospital management software for reception, clinical care, diagnostics, billing, HR and reporting.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          <Link href="/#modules" className="hover:text-white">
            Modules
          </Link>
          <Link href="/#pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/#security" className="hover:text-white">
            Security
          </Link>
          <Link href="/#faq" className="hover:text-white">
            FAQ
          </Link>
          <Link href="/#deployment" className="hover:text-white">
            Deployment
          </Link>
          <Link href="/#demo" className="hover:text-white">
            Book a demo
          </Link>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Cliniqo. All rights reserved.</p>
          <p className="text-mist/75">Powered by <span className="font-semibold text-white">Chan-Tech</span></p>
        </div>
      </div>
    </footer>
  );
}
