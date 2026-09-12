/**
 * Central SEO/site config — single source of truth for sitemap, robots,
 * canonical URLs, OpenGraph and IndexNow.
 *
 * Override the production URL with NEXT_PUBLIC_SITE_URL (see .env.example).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://tadecoffee.com"
).replace(/\/$/, "");

export const SITE_NAME = "Tade Coffee";

export const SITE_DESCRIPTION =
  "Premium single-origin specialty coffee from the West Arsi highlands of Oromia, Ethiopia — traceable from farm to cup.";

/**
 * IndexNow key. Public by design (IndexNow spec): it must match the file at
 * public/<key>.txt so search engines can verify submission ownership.
 */
export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || "a63bac60851f6dc504d21102c01cf17e";

export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
