import type { Metadata } from "next";
import { SITE_KEYWORDS } from "@/lib/site";
import faqData from "./FAQ";

// FAQPage structured data for rich results (Google, Bing).
// Google requires each mainEntity to be a real, unique Q&A visible on the
// page — keep this in sync with the accordion data in FAQ.ts.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item: { question: string; answer: string }) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  keywords: [
    ...SITE_KEYWORDS,
    "how to import coffee from Ethiopia",
    "Ethiopian coffee shipping",
    "coffee export process Ethiopia",
    "minimum order green coffee",
  ],
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
