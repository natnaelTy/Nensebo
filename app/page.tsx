import HomePage from "./homepage/page";
import WhatWeOffer from "./WhatWeOffer/page";
import ShortAbout from "./shortAbout/page";
import WhyChooseUs from "./whychooseus/page";
import OurSites from "./oursites/page";

export default function Home() {
  return (
        <>
          <HomePage/>
          <ShortAbout/>
          <WhyChooseUs/>
          <WhatWeOffer/>
          <OurSites/>
        </>
  );
}
