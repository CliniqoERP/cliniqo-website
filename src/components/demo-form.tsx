import { ArrowRight, Check } from "lucide-react";

const field =
  "mt-1.5 block w-full rounded-xl border border-border bg-faint/70 px-3.5 py-3 text-sm text-charcoal placeholder:text-slate/70 transition focus:border-sky-blue focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-blue/10";

/**
 * Demo requests go to Netlify Forms (Site → Forms in Netlify). The form is plain HTML, so it works
 * without JavaScript; Netlify finds it in the built page by its data-netlify attribute.
 */
export function DemoForm() {
  return (
    <section id="demo" className="demo-section relative isolate overflow-hidden bg-gradient-to-br from-deep to-hospital-blue">
      <div aria-hidden="true" className="demo-glow pointer-events-none absolute -bottom-40 -left-24 size-[30rem] rounded-full bg-sky-blue/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <div className="text-white">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-mist"><span className="size-1.5 rounded-full bg-teal-green" /> Book a demo</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">See Cliniqo ERP with your own workflow</h2>
          <p className="mt-4 leading-relaxed text-mist">
            Tell us about your hospital. We&apos;ll walk you through a patient&apos;s visit from check-in to billing,
            and answer your questions about setup, your records and pricing.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-mist">
            {["Walk through a patient visit", "Compare cloud and on-premise setup", "Discuss your existing records"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-teal-green/20 text-[#63d7b3]"><Check className="size-3.5" /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <form
          name="demo"
          method="POST"
          action="/thanks/"
          data-netlify="true"
          netlify-honeypot="company-website"
          className="demo-form grid gap-4 rounded-2xl border border-white/50 bg-white p-6 shadow-2xl shadow-darkest/20 sm:grid-cols-2 sm:p-8"
        >
          <div className="sm:col-span-2">
            <p className="text-lg font-semibold text-charcoal">Tell us about your hospital</p>
            <p className="mt-1 text-sm text-slate">We&apos;ll use this to tailor your walkthrough.</p>
          </div>
          <input type="hidden" name="form-name" value="demo" />
          <p className="hidden">
            <label>
              Leave this empty <input name="company-website" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <label className="text-sm font-medium">
            Your name
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="text-sm font-medium">
            Role
            <input name="role" placeholder="e.g. Medical Director" className={field} />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Hospital or clinic
            <input name="hospital" required autoComplete="organization" className={field} />
          </label>
          <label className="text-sm font-medium">
            Work email
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
          <label className="text-sm font-medium">
            Phone
            <input name="phone" type="tel" autoComplete="tel" placeholder="0803 123 4567" className={field} />
          </label>
          <label className="text-sm font-medium">
            Staff who will use it
            <select name="staff" defaultValue="" className={field}>
              <option value="" disabled>
                Choose one
              </option>
              <option>Up to 10</option>
              <option>11 to 50</option>
              <option>More than 50</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            State
            <input name="state" placeholder="e.g. Lagos" className={field} />
          </label>
          <label className="text-sm font-medium sm:col-span-2">
            Anything we should know?
            <textarea name="message" rows={3} className={field} />
          </label>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-hospital-blue px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-blue sm:col-span-2"
          >
            Request a demo <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
