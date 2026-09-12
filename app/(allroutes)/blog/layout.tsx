import type { Metadata } from "next";
import { SITE_KEYWORDS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Notes on Ethiopian Specialty Coffee",
  keywords: [
    ...SITE_KEYWORDS,
    "coffee processing guide",
    "washed vs natural coffee",
    "anaerobic coffee fermentation",
    "Ethiopian coffee tasting notes",
  ],
  description:
    "Guides and field notes from Tade Coffee: Ethiopian specialty coffee origins, washed vs natural vs anaerobic processing, traceability and farm-to-cup stories from West Arsi.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Notes on Ethiopian Specialty Coffee",
    description:
      "Processing guides, origin stories and traceability notes from our coffee sites in West Arsi, Ethiopia.",
    url: "/blog",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
