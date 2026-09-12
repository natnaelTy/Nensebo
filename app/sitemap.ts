import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import OurSite from "./(allroutes)/oursites/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Canonical indexable pages only.
  // Section components (homepage, shortAbout, oursite, whychooseus, WhatWeOffer)
  // render on "/" and are excluded — they are blocked in robots.txt.
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1, changeFrequency: "weekly", lastModified },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: "monthly", lastModified },
    { url: `${SITE_URL}/oursites`, priority: 0.9, changeFrequency: "weekly", lastModified },
    { url: `${SITE_URL}/gallary`, priority: 0.6, changeFrequency: "monthly", lastModified },
    { url: `${SITE_URL}/contact`, priority: 0.7, changeFrequency: "monthly", lastModified },
    { url: `${SITE_URL}/FAQ`, priority: 0.5, changeFrequency: "monthly", lastModified },
  ];

  // One page per coffee site (ids "0"–"10").
  const sitePages: MetadataRoute.Sitemap = OurSite.map((site) => ({
    url: `${SITE_URL}/oursites/${site.id}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified,
  }));

  return [...staticPages, ...sitePages];
}
