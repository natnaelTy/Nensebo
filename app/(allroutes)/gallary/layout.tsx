import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Our Coffee Sites & Process",
  description:
    "A visual journey through Tade Coffee's washing stations, drying beds and highland landscapes in West Arsi, Oromia, Ethiopia.",
  alternates: { canonical: "/gallary" },
  openGraph: {
    title: "Gallery — Tade Coffee",
    description:
      "Washing stations, drying beds and highland landscapes from our coffee sites in West Arsi, Ethiopia.",
    url: "/gallary",
  },
};

export default function GalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
