"use client";
import "./index.css";
import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Image from "next/image";


function About() {
  return (
    <>
      {/* common banner photo */}
        <div className="bannerContainer">
          <div className="nestedBannerContainer">
            <Link href={"/"} className="hover:text-green-800">
              <h2>Home</h2>
            </Link>
            <h2>
              <RiArrowRightDoubleFill />
            </h2>
            <h2>About</h2>
          </div>
        </div>

      <div className="flex flex-col items-center justify-center gap-16 p-4">
         {/* title */}
       <h1 className="text-4xl text-center text-green-700 font-bold mt-10 mb-10">
        About <span className="text-gray-900 font-extralight">Us</span>
        <div className="underlineForTitle"></div>
      </h1>
        
        <div className="max-w-[1200px] w-full">
          <Image
            src="/images/homepic.jpg"
            alt="coffee"
            width={1200}
            height={300}
            className="w-full h-[170px] md:h-[300px] object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col items-start justify-center p-4 md:p-8 gap-5 max-w-[1200px] w-full inset-shadow-2xs shadow-lg rounded-lg bg-gray-50">
          <p className="text-2xl mb-6 md:text-4xl lg:text-5xl font-bold text-green-800 uppercase">
            About our company
          </p>
          <h3 className="h3Title">
            INTRODUCTION
          </h3>
          <p className="aboutDescription">
            Nensebo speciality Coffee Export is a green Arabica coffee exporter
            company based in <span className="underline decoration-sky-500">Ethiopia</span> specializing in the export of   
            <span className="underline decoration-pink-500"> premium Arabica</span> coffee beans. We work directly with local farmers to source
            the best quality beans, ensuring fair prices and sustainable
            practices. Our team is passionate about coffee and dedicated to show
            casing the unique flavors and characteristics of Arabica beans to
            coffee lovers around the world honestly.
          </p>
          <h3 className="h3Title">
            OUR VISION
          </h3>
          <p className="aboutDescription">
            Our vision is to become a leading exporter of Arabica coffee from
            Ethiopia, known for our commitment to quality, sustainability, and
            community development. We dream of a future where nensebo speciality
            Coffee Export is known everywhere for <span className="underline decoration-indigo-500">trust and quality.</span> We want to
            bring positive changes to the coffee industry, both locally and
            globally. By being innovative, ethical, and focusing on you, we hope
            to create a sustainable and successful future for our company and
            the communities we work with. We aim to build long term
            <span className="underline decoration-pink-500"> relationships</span> with our clients and partners, while also making a
            positive impact on the lives of local farmers and communities.
            Ultimately, we strive to be a trusted source for premium Arabica
            coffee beans that are enjoyed by coffee enthusiasts worldwide.
          </p>
          <h3 className="h3Title">OUR MISSION</h3>
          <p className="aboutDescription">
            To be a leader worldwide in sharing the amazing products from
            Ethiopia. We want to support local communities, be good to the
            environment, and offer you a <span className="underline decoration-sky-500">variety of excellent goods.</span> We aim to
            do business responsibly, making a positive impact in the coffee and
            agriculture sectors while making sure {`you're`} happy with what we
            provide. To promote and export {`high-quality`} Arabica coffee beans
            from Ethiopia to <span className="underline decoration-indigo-500">international markets</span>, while supporting local
            farmers and communities in orphan school aid and other in the
            region.
          </p>
          <div>
              <h3 className="h3Title">CORE VALUES</h3>
              <ul className="list-disc px-8 py-4 flex flex-col items-start gap-5">
                <li className="aboutDescription"><span className="aboutSpan">Excellence:</span> We will be committed to meeting the highest quality standards while always challenging ourselves to the highest levels of learning and performance.</li>

                <li className="aboutDescription"><span className="aboutSpan">Accountability:</span> We accept individual and team responsibilities and follow through on our commitments. In all of our decisions and actions, we accept responsibility for our performance.</li>

                <li className="aboutDescription"><span className="aboutSpan">Quality:</span> We are committed to producing the highest quality product in the industry.</li>

                <li className="aboutDescription"><span className="aboutSpan">Professionalism:</span> Throughout, we strive to fulfill our responsibilities to the highest possible standards.</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
