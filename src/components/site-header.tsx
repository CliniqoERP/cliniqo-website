import Link from "next/link";

const LINKS = [
  { href: "/#modules", label: "Modules" },
  { href: "/#security", label: "Security" },
  { href: "/#deployment", label: "Deployment" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" aria-label="Cliniqo ERP home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimisation */}
          <img src="/branding/cliniqo-logo.svg" alt="Cliniqo" width={148} height={38} className="h-8 w-auto" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium text-slate md:flex">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-hospital-blue">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#demo"
          className="rounded-lg bg-hospital-blue px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-blue"
        >
          Book a demo
        </Link>
      </div>
    </header>
  );
}
