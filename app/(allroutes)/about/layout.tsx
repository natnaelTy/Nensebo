import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Story & Coffee Origins",
  description:
    "The story of Tade Coffee: sustainable farming partnerships across the West Arsi highlands of Oromia, Ethiopia, and our mission of traceable, farm-to-cup specialty coffee.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tade Coffee — Our Story",
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
