import type { Metadata } from "next";
import { SITE_KEYWORDS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Coffee Sites — Origins from West Arsi, Oromia",
  keywords: [
    ...SITE_KEYWORDS,
    "Ethiopian coffee washing station",
    "coffee drying beds Ethiopia",
    "Nensebo Woreda coffee",
    "coffee altitude 2000m Ethiopia",
    "Ethiopian heirloom coffee varieties",
  ],
  description:
    "Explore Tade Coffee's washing and drying stations across West Arsi, Oromia — altitude, varieties, processes and harvest details for every origin we work with.",
  alternates: { canonical: "/oursites" },
  openGraph: {
    title: "Our Coffee Sites — Origins from West Arsi",
    description:
      "Altitude, varieties, processes and harvest details for every coffee origin we work with in West Arsi, Ethiopia.",
    url: "/oursites",
  },
};

export default function OurSitesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
