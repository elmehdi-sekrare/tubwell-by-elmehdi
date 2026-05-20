# Tubwell by El Mehdi

Website for a dog & cat grooming studio: grooming menu with prices by size, a multi-step booking request, a pickup shop
with a bag drawer, a studio page with a drawn floor plan, and page transitions.

**Live:** https://tubwell-by-elmehdi.netlify.app

## Run it

```bash
npm start        # http://localhost:5332
```

Node 18+. No install step: `scripts/serve.mjs` serves `site/` like Netlify does (`/x` → `/x/`, 404 page).

## Deploy (Netlify)

`netlify.toml` publishes `site/` as it is (no build) and sends the booking and bag forms to
`netlify/functions/request.mjs`, which answers like the original backend (demo mode: nothing is stored or sent).

## Structure

```
site/                    pages (21) + theme assets, fonts, images
netlify/functions/       form endpoint
scripts/serve.mjs        local preview
netlify.toml             publish dir, form route, headers
```

## Contact

El Mehdi Sekrare · [LinkedIn](https://www.linkedin.com/in/el-mehdi-sekrare-77000629b) · [GitHub](https://github.com/elmehdi-sekrare)

---

Based on the Tubwell template by Visuvate.
