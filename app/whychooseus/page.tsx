"use client";
import { PiCertificate } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { ImEarth } from "react-icons/im";


function WhyChooseUs() {
  return (
    <div>
      <div className="max-w-full h-auto relative">
        <img
          src="./images/coffeebag.jpg"
          alt="image"
          className="w-full h-[1100px] md:h-[1350px] lg:h-[650px] object-cover"
        />
           <h1 className="whyChooseUsTitle">
            Why Choose Us?
          </h1>

        <div className="absolute top-50 w-full">
          <div className="whyChooseUsContainer">
            <div className="whyChooseUsCard">
              <PiCertificate className="text-8xl md:text-9xl text-white bg-yellow-500 rounded-full p-5" />
              <h1 className="whyChooseUsH1">Quality Assurance</h1>
              <p className="whyChooseUs_P">Strict quality control measures to ensure every bean meets the highest standards of taste and consistency</p>
            </div>
            <div className="whyChooseUsCard">
              <FaRegHandshake className="text-8xl md:text-9xl text-white bg-red-500 rounded-full p-5"/>
              <h1 className="whyChooseUsH1">Ethical Business Practices</h1>
              <p className="whyChooseUs_P">We value fair trade, transparency, and sustainability in every step of the process.</p>
            </div>
            <div className="whyChooseUsCard">
              <ImEarth className="text-8xl md:text-9xl text-white bg-blue-500 rounded-full p-5"/>
              <h1 className="whyChooseUsH1">Global Reach</h1>
              <p className="whyChooseUs_P">Seamless exports to clients across continents, bridging the gap between farmers and markets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
