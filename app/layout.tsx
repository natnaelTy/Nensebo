import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/page";
import favicon from "../public/images/tadecoffeelogo-no-bg.png";

export const metadata: Metadata = {
  title: "Tade Coffee",
  description:
    "Premium single-origin specialty coffee from the West Arsi highlands of Oromia, Ethiopia — traceable from farm to cup.",
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
        <link rel="icon" type="image/png" href={favicon.src} key={favicon.src} />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
