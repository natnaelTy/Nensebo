import type { Metadata } from "next";
import { SITE_KEYWORDS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Inquiries & Wholesale",
  keywords: [
    ...SITE_KEYWORDS,
    "coffee export inquiry",
    "green coffee wholesale price",
    "buy Ethiopian coffee beans",
    "coffee importer contacts Ethiopia",
    "specialty coffee supplier contact",
  ],
  description:
    "Get in touch with Tade Coffee for orders, wholesale and export inquiries, or to visit our washing and drying stations in West Arsi, Oromia, Ethiopia.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Tade Coffee",
    description:
      "Orders, wholesale and export inquiries — or visit our coffee sites in West Arsi, Ethiopia.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
