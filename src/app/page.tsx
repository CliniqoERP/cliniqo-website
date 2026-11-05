import { DemoForm } from "@/components/demo-form";
import { Deployment } from "@/components/deployment";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Modules } from "@/components/modules";
import { Pricing } from "@/components/pricing";
import { Security } from "@/components/security";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Journey />
        <Modules />
        <Security />
        <Deployment />
        <Pricing />
        <Faq />
        <DemoForm />
      </main>
      <SiteFooter />
    </>
  );
}
