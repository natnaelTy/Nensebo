import type { Metadata } from "next";
import { Montserrat, Nunito_Sans, } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/page";
import Head from 'next/head';

export const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
})
export const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Nensebo coffee",
  description: "Sidama Nensebo is a coffee export company based in ethiopia",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 


{
  return (
    <html lang="en">
    <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <body
        className={montserrat.className}>

        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
