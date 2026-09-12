# SEO Setup Guide — Tade Coffee

Everything below the line is already implemented in this repo. This guide covers
the one-time dashboard steps you must do externally to "connect" the services.

## What's implemented

| Requirement | Status | File |
|---|---|---|
| Meta title & description | ✅ Root + per page | `app/layout.tsx`, `app/(allroutes)/*/layout.tsx` |
| Sitemap | ✅ Auto-generated at `/sitemap.xml` | `app/sitemap.ts` |
| Robots.txt | ✅ Auto-generated at `/robots.txt` | `app/robots.ts` |
| IndexNow | ✅ Key file, API route, ping script | `public/<key>.txt`, `app/api/indexnow/route.ts`, `scripts/ping-indexnow.mjs` |
| Search Console / Bing verification | ⚙️ Wired via env vars | `app/layout.tsx` + `.env.example` |

---

## 1. Google Search Console

1. Go to <https://search.google.com/search-console> and click **Add property**.
2. Choose **URL prefix** and enter `https://tadecoffee.com`.
3. Pick the **HTML tag** verification method. Copy the `content="..."` value
   from the generated meta tag.
4. Put it in `.env.local` (and your hosting provider's env vars):
   ```
   GOOGLE_SITE_VERIFICATION=paste-value-here
   ```
5. Deploy, then click **Verify** in Search Console.
6. After verification: **Sitemaps → Add a new sitemap** → enter `sitemap.xml` → Submit.

## 2. Bing Webmaster Tools

**Easiest path — import from Google:**
1. Go to <https://www.bing.com/webmasters> and sign in.
2. Choose **Import from Google Search Console** — this copies your site,
   sitemap and verification automatically.

**Manual path:**
1. Add site `https://tadecoffee.com`.
2. Choose **Meta tag** verification and copy the `content="..."` value.
3. Put it in `.env.local` / hosting env vars:
   ```
   BING_SITE_VERIFICATION=paste-value-here
   ```
4. Deploy, then click **Verify**.
5. Submit the sitemap: **Sitemaps → Submit sitemap** → `https://tadecoffee.com/sitemap.xml`.

## 3. Sitemap

Nothing to do — `app/sitemap.ts` regenerates `/sitemap.xml` on every build
including all 11 dynamic `/oursites/[id]` pages. Once submitted in GSC/Bing
(steps above), engines pick up changes automatically.

## 4. IndexNow

The key file is already live at `public/a63bac60851f6dc504d21102c01cf17e.txt`
→ served at `https://tadecoffee.com/<key>.txt`.

Two ways to submit URLs:

**A. Ping after each deploy (recommended):**
```bash
npm run ping:indexnow              # submits every URL from the live sitemap
npm run ping:indexnow /about /oursites/3   # or only changed pages
```
Optionally add it to your deploy pipeline, e.g. on Vercel in
`package.json` postbuild or via a GitHub Action step after deploy.

**B. On-demand API route:**
```bash
curl -X POST https://tadecoffee.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["/", "/oursites/0"]}'
```
Omit the body to submit the whole sitemap. IndexNow notifies Google, Bing,
Yandex, Seznam and Naver simultaneously.

> IndexNow has no dashboard — success is an HTTP 200/202 from the endpoint.
> Engines crawl your pages at their own pace afterwards (usually within days).

## 5. Environment variables summary

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for sitemap/robots/OG (default `https://tadecoffee.com`) |
| `GOOGLE_SITE_VERIFICATION` | GSC meta-tag verification |
| `BING_SITE_VERIFICATION` | Bing meta-tag verification |
| `INDEXNOW_KEY` | IndexNow key (matches `public/<key>.txt`) |

## 6. Duplicate routes — resolved

Section components (`/homepage`, `/shortAbout`, `/oursite`, `/whychooseus`,
`/WhatWeOffer`, `/components/footer`) used to be `page.tsx` files, creating
accidental standalone routes that duplicated homepage content. They have since
been renamed to regular component files (`Hero.tsx`, `ShortAbout.tsx`,
`OurSitesPreview.tsx`, `WhyChooseUs.tsx`, `WhatWeOffer.tsx`, `Footer.tsx`), so
those routes no longer exist — no robots.txt blocking needed.
