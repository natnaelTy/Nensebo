import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/page";
import favicon from "../public/images/tadecoffeelogo.png";

export const metadata: Metadata = {
  title: "Tade Coffee",
  description:
    "Premium single-origin specialty coffee from the West Arsi highlands of Oromia, Ethiopia — traceable from farm to cup.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: favicon.src, type: "image/png" },
    ],
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
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" key="favicon-static" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
