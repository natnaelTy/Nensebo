import type { Metadata } from "next";
import OurSite from "../data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ oursitesId: string }>;
}): Promise<Metadata> {
  const { oursitesId } = await params;
  const site = OurSite.find((s) => s.id === oursitesId);
  if (!site) return {};

  const title = `${site.siteName} — Coffee Site in ${site.location}`;
  const description =
    site.shortDescription ||
    `${site.siteName}: ${site.Altitude} altitude ${site.Process} in ${site.Region}. ${site.Variety} ${site.Species}.`;

  return {
    title,
    description,
    alternates: { canonical: `/oursites/${oursitesId}` },
    openGraph: {
      title,
      description,
      url: `/oursites/${oursitesId}`,
      images: [{ url: site.imageUrl }],
      type: "article",
    },
  };
}

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
