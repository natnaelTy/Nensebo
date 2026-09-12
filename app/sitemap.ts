import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import OurSite from "./(allroutes)/oursites/data";
import { posts as blogPosts } from "./(allroutes)/blog/data";

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
    { url: `${SITE_URL}/blog`, priority: 0.8, changeFrequency: "weekly", lastModified },
  ];

  // One page per coffee site (ids "0"–"10").
  const sitePages: MetadataRoute.Sitemap = OurSite.map((site) => ({
    url: `${SITE_URL}/oursites/${site.id}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified,
  }));

  // Blog articles — use each post's publish date as lastModified.
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...sitePages, ...blogPages];
}
