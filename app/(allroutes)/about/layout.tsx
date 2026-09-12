import type { Metadata } from "next";
import { SITE_KEYWORDS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Our Story & Coffee Origins",
  keywords: [
    ...SITE_KEYWORDS,
    "Ethiopian coffee farm story",
    "sustainable coffee farming Ethiopia",
    "direct trade coffee Ethiopia",
    "coffee farming families West Arsi",
  ],
  description:
    "The story of Tade Coffee: sustainable farming partnerships across the West Arsi highlands of Oromia, Ethiopia, and our mission of traceable, farm-to-cup specialty coffee.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tade Coffee — Ethiopian Coffee Exporter",
    description:
      "Sustainable farming partnerships in the West Arsi highlands of Ethiopia. Traceable, farm-to-cup specialty coffee.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
