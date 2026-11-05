# Cliniqo ERP website

The public site at `cliniqoerp.com`. Next.js exported to plain static files (`out/`) and hosted on Netlify.

```bash
yarn install
yarn dev        # http://localhost:3002
yarn build      # writes out/
yarn lint && npx next typegen && yarn typecheck
```

## Where things are

| Path | What |
| --- | --- |
| `src/app/page.tsx` | The home page: one section per component in `src/components/`. |
| `src/content/plans.ts` | Prices and what each plan includes. Copied from the backend (`shared/plans/plans.ts`, `settings-modules.ts`); update it when those change. |
| `src/components/demo-form.tsx` | The "Book a demo" form, handled by Netlify Forms. It posts to `public/__forms.html`, the static copy Netlify detects; keep their fields the same. |
| `src/app/thanks/` | Where the form lands after sending. |
| `netlify.toml` | Build settings and security headers. |

The colours match the apps (`tenant-app/src/app/globals.css`), and the logos are copies of `tenant-app/public/branding/`.

## Netlify

1. **Connect the repo:** Add new site → Import from GitHub, and pick this repository. `netlify.toml` already sets the build command (`yarn build`), the publish folder (`out`) and Node 24.
2. **Domains:** Domain management → add `cliniqoerp.com` and `www.cliniqoerp.com`. In Cloudflare DNS:
   - set `@` and `www` to the targets Netlify shows;
   - mark both **DNS only** (grey cloud);
   - leave `*`, `admin` and `ssh` pointing at the tunnel.
3. **Forms:** under **Forms**, select **Enable form detection** (new sites have it off), then redeploy. Demo requests appear under **Forms → demo**. Under Forms → Form notifications, add an email notification so each request reaches the sales inbox.

The page content only describes features the product has. Check `src/content/plans.ts` and the section texts whenever a feature or plan changes.
