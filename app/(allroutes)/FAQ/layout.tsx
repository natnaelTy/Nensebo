import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Answers to common questions about Tade Coffee: our sites, processes, orders, shipping and working with us in West Arsi, Ethiopia.",
  alternates: { canonical: "/FAQ" },
  openGraph: {
    title: "FAQ — Tade Coffee",
    description:
      "Common questions about our coffee sites, processes, orders and shipping — answered.",
    url: "/FAQ",
  },
};

export default function FAQLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
