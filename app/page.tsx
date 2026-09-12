import HomePage from "./homepage/Hero";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import ShortAbout from "./shortAbout/ShortAbout";
import WhyChooseUs from "./whychooseus/WhyChooseUs";
import OurSites from "./oursite/OurSitesPreview";
import "./globals.css";

export default function Home() {
  return (
        <>
          <HomePage/>
          <ShortAbout/>
          <OurSites/>
          <WhyChooseUs/>
          <WhatWeOffer/>
        </>
  );
}
