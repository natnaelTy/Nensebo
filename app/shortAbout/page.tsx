"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LiaShipSolid } from "react-icons/lia";
import { PiCoffeeBeanLight } from "react-icons/pi";
import { GiEarthAmerica } from "react-icons/gi";
import { PiPhoneIncomingThin } from "react-icons/pi";

function ShortAbout() {
  return (
    <>
      <div className="relative">
        <div className="md:flex flex-cols items-center justify-around gap-4 p-4 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 130 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <img
              src="./images/coffee-farm.png"
              alt=""  
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="paragraph flex flex-col items-start justify-center gap-5"
          >
            <p className="aboutCompanyP">
              About Company
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl">
              Mastering Nurture In Coffee
              Production
            </h1>
            <p className="max-w-xl text-gray-700 text-md">
              At Nensebo, we are dedicated to sharing the rich, distinctive
              flavors of our <br />
              coffee with the world. Nestled in fertile soil and blessed with an
              ideal climate, our farm produces beans known for their quality,
              mainly from it’s washing and drying station located in Oromia
              Region.
            </p>

            <div className="flex items-start flex-wrap gap-8 justify-between w-full mb-5">
              <div className="aboutUsCard">
                <PiCoffeeBeanLight className="aboutUsIcon" />
                <h1 className="aboutUsH1Tag">
                  Premium Coffee <br />
                  Beans
                </h1>
              </div>

              <div className="aboutUsCard">
                <LiaShipSolid className="aboutUsIcon" />
                <h1 className="aboutUsH1Tag">
                  Reliable Export <br />
                  Solutions
                </h1>
              </div>

              <div className="aboutUsCard">
                <GiEarthAmerica className="aboutUsIcon" />
                <h1 className="aboutUsH1Tag">
                  Global <br />
                  Partnerships
                </h1>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-around gap-5 md:gap-8 ">
              <button className="learnMoreBtn">
                <Link href={"/aboutUs"}>Learn More</Link>
              </button>
              <div className="flex items-center justify-center gap-3">
                  <PiPhoneIncomingThin className="aboutUsIcon"/>
                  <div className="aboutUsCard">
                      <p className="text-gray-500 text-sm md:text-base font-medium">Phone : </p>
                      <h2 className="text-base md:text-xl font-bold">+251 911828573</h2>
                  </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ShortAbout;
