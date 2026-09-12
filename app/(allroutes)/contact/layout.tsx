import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Inquiries & Wholesale",
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
