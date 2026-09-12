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
  "Ethiopian specialty coffee exporter of premium single-origin green coffee beans from the West Arsi highlands, Oromia — traceable from farm to cup.";

/**
 * Baseline keyword set — used by the root metadata and composed into
 * page-specific keyword lists. Commercial-intent terms (exporter, green
 * coffee beans, wholesale) target B2B buyers searching for suppliers.
 */
export const SITE_KEYWORDS = [
  "Ethiopian coffee exporter",
  "specialty green coffee beans",
  "wholesale coffee beans",
  "Ethiopian specialty coffee",
  "single origin coffee",
  "West Arsi coffee",
  "Nensebo coffee",
  "Oromia coffee",
  "washed natural anaerobic coffee",
  "traceable coffee",
  "farm to cup",
  "direct trade coffee",
  "coffee supplier for roasters",
  "Tade Coffee",
];

/**
 * IndexNow key. Public by design (IndexNow spec): it must match the file at
 * public/<key>.txt so search engines can verify submission ownership.
 */
export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || "a63bac60851f6dc504d21102c01cf17e";

export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
