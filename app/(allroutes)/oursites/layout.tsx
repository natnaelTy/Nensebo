import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Coffee Sites — Origins from West Arsi, Oromia",
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
