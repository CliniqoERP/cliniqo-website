const field =
  "mt-1.5 block w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-charcoal placeholder:text-slate/70 focus:border-sky-blue focus:outline-none focus:ring-2 focus:ring-sky-blue/20";

/**
 * Demo requests go to Netlify Forms (Site → Forms in Netlify). The form is plain HTML, so it works
 * without JavaScript; Netlify finds it in the built page by its data-netlify attribute.
 */
export function DemoForm() {
  return (
    <section id="demo" className="bg-gradient-to-br from-deep to-hospital-blue">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-white">
          <p className="text-sm font-semibold text-mist">Book a demo</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">See Cliniqo ERP with your own workflow</h2>
          <p className="mt-4 leading-relaxed text-mist">
            Tell us about your hospital. We&apos;ll walk you through a patient&apos;s visit from check-in to billing,
            and answer your questions about setup, your records and pricing.
          </p>
        </div>
        <form
          name="demo"
          method="POST"
          action="/thanks/"
          data-netlify="true"
          netlify-honeypot="company-website"
          className="grid gap-4 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-2"
        >
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
            className="rounded-lg bg-hospital-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-blue sm:col-span-2"
          >
            Request a demo
          </button>
        </form>
      </div>
    </section>
  );
}
