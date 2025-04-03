"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function OurSites() {
  return (
    <div className="text-center mb-8 p-4 relative">
      {/* description */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">{`Our site's`}</h1>
      {/* description underline */}
      <div className="underlineForTitle"></div>

      <div className="imageContainer">
        <div className="contentContainer">
          <div className="flex text-center gap-6 items-center justify-center w-full flex-col">
            <h1 className="text-3xl font-semibold">Discover Our Coffee Source</h1>
            <p className="">
              Kerchanshe sources coffee from nine different regions in Ethiopia
              - Sidamo, Guji, Yirgacheffe, Limmu, Bale, Harar, Jimma, Nekemte,
              Kaffa.
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 w-full">
            <div className="flex flex-col items-start justify-center text-left gap-2">
              <Image
                src="/images/tade-7.jpg"
                alt="image"
                width={250}
                height={250}
                className="rounded-md"
              />
              <h1 className="siteName">Mendoyu</h1>
              <p className="siteDescription">This site located about {`2400`} altitude at one of the tropical regions in oromia region.</p>
              <button className="primarybtn">Read More</button>
            </div>
            <div className="flex flex-col items-start justify-center text-left gap-2">
              <Image
                src="/images/tade-7.jpg"
                alt="image"
                width={250}
                height={250}
                className="rounded-md"
              />
              <h1 className="siteName">Mendoyu</h1>
              <p className="siteDescription">This site located about {`2400`} altitude at one of the tropical regions in oromia region.</p>
              <button className="primarybtn">Read More</button>
            </div>
            <div className="flex flex-col items-start justify-center text-left gap-2">
              <Image
                src="/images/tade-7.jpg"
                alt="image"
                width={250}
                height={250}
                className="rounded-md"
              />
              <h1 className="siteName">Mendoyu</h1>
              <p className="siteDescription">This site located about {`2400`} altitude at one of the tropical regions in oromia region.</p>
              <button className="primarybtn">Read More</button>
            </div>
            <div className="flex flex-col items-start justify-center text-left gap-2">
              <Image
                src="/images/tade-7.jpg"
                alt="image"
                width={250}
                height={250}
                className="rounded-md"
              />
              <h1 className="siteName">Mendoyu</h1>
              <p className="siteDescription">This site located about {`2400`} altitude at one of the tropical regions in oromia region.</p>
              <button className="primarybtn">Read More</button>
            </div>
          
          </div>
        </div>
        
        <Image
          src="/images/homepic.jpg"
          alt="coffee"
          width={1200}
          height={700}
          className="w-full h-[900px] object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default OurSites;
