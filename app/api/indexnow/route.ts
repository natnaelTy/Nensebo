import { NextRequest, NextResponse } from "next/server";
import { SITE_URL, INDEXNOW_KEY, INDEXNOW_ENDPOINT } from "@/lib/site";

/**
 * IndexNow submission endpoint.
 *
 * POST /api/indexnow
 * Body: { "urls": ["/", "/oursites/0", ...] }          (paths or absolute URLs)
 * Omit "urls" to submit the whole sitemap.
 *
 * Search engines verify ownership by fetching https://<host>/<key>.txt,
 * which is already served from public/.
 */
export async function POST(request: NextRequest) {
  let paths: string[] | undefined;

  try {
    const body = (await request.json()) as { urls?: string[] };
    if (Array.isArray(body?.urls)) {
      paths = body.urls;
    }
  } catch {
    // No/invalid body → fall through to sitemap-wide submission
  }

  let urls: string[];
  if (paths?.length) {
    urls = paths.map((p) => (p.startsWith("http") ? p : `${SITE_URL}${p}`));
  } else {
    const res = await fetch(`${SITE_URL}/sitemap.xml`, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Could not fetch sitemap" },
        { status: 502 }
      );
    }
    const xml = await res.text();
    urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) =>
      m[1].trim()
    );
  }

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: new URL(SITE_URL).host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
      cache: "no-store",
    });

    // 200/202 = accepted; 400 bad key; 403 key file mismatch; 422 urls not owned
    return NextResponse.json({ status: res.status, submitted: urls.length });
  } catch {
    return NextResponse.json(
      { error: "IndexNow request failed" },
      { status: 502 }
    );
  }
}
