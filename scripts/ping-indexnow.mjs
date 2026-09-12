/**
 * Post-deploy IndexNow ping.
 *
 * Usage: node scripts/ping-indexnow.mjs [paths...]
 *   node scripts/ping-indexnow.mjs                 → submits every URL in sitemap.xml
 *   node scripts/ping-indexnow.mjs /about /oursites → submits only those paths
 *
 * Requires INDEXNOW_KEY (and NEXT_PUBLIC_SITE_URL for non-default domains).
 * Run it after each deployment (locally or in CI) to notify search engines
 * of changed content.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://tadecoffee.com").replace(/\/$/, "");
const KEY = process.env.INDEXNOW_KEY || "a63bac60851f6dc504d21102c01cf17e";
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function main() {
  const pathArgs = process.argv.slice(2);

  let urlList;
  if (pathArgs.length) {
    urlList = pathArgs.map((p) => (p.startsWith("http") ? p : `${SITE_URL}${p}`));
  } else {
    console.log(`Fetching sitemap from ${SITE_URL}/sitemap.xml ...`);
    const res = await fetch(`${SITE_URL}/sitemap.xml`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
    const xml = await res.text();
    urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  }

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow...`);

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: KEY,
      keyLocation: `${SITE_URL}/${KEY}.txt`,
      urlList,
    }),
  });

  // 200 = OK, 202 = accepted (still counts — engines will crawl later)
  if (res.ok || res.status === 202) {
    console.log(`✓ IndexNow accepted submission (HTTP ${res.status})`);
    urlList.forEach((u) => console.log(`  - ${u}`));
  } else {
    const body = await res.text().catch(() => "");
    throw new Error(`IndexNow returned HTTP ${res.status}: ${body}`);
  }
}

main().catch((err) => {
  console.error("✗ IndexNow ping failed:", err.message);
  process.exit(1);
});
