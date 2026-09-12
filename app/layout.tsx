import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

// Base image for OpenGraph/Twitter social previews
const ogImage = {
  url: `${SITE_URL}/images/headerimage.jpg`,
  width: 1200,
  height: 630,
  alt: "Tade Coffee — specialty coffee from West Arsi, Ethiopia",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Specialty Coffee from Ethiopia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Ethiopian coffee",
    "specialty coffee",
    "single origin coffee",
    "West Arsi coffee",
    "Oromia coffee",
    "traceable coffee",
    "farm to cup",
    "Tade Coffee",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_NAME} — Specialty Coffee from Ethiopia`,
    description: SITE_DESCRIPTION,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Specialty Coffee from Ethiopia`,
    description: SITE_DESCRIPTION,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Search engine ownership verification.
  // Fill in after verifying via DNS/meta-tag method in each dashboard:
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

const sourceSerif = Source_Serif_4({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
export { sourceSerif };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
