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
              src="./images/coffee farm.png"
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
            <p className="text-sm md:text-lg font-semibold text-green-700 bg-green-100 px-6 py-2 rounded-full">
              About Company
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl">
              Mastering Nurture In <span className="undeline">Coffee</span>{" "}
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

            <div className="flex items-start flex-col md:flex-row gap-8 justify-between w-full mb-5">
              <div className="flex flex-col items-start">
                <PiCoffeeBeanLight className="text-green-800 text-5xl mb-2 bg-green-100 rounded-full p-2" />
                <h1 className="text-lg md:text-xl font-bold max-w-xs">
                  Premium Coffee <br />
                  Beans
                </h1>
              </div>

              <div className="flex flex-col items-start">
                <LiaShipSolid className="text-green-800 text-5xl mb-2 bg-green-100 rounded-full p-2" />
                <h1 className="text-lg md:text-xl font-bold max-w-xs">
                  Reliable Export <br />
                  Solutions
                </h1>
              </div>

              <div className="flex flex-col items-start">
                <GiEarthAmerica className="text-green-800 text-5xl mb-2 bg-green-100 rounded-full p-2" />
                <h1 className="text-lg md:text-xl font-bold max-w-xs">
                  Global <br />
                  Partnerships
                </h1>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-around gap-5 md:gap-8 ">
              <button className="px-4 font-semibold py-3 bg-green-800 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in">
                <Link href={"/aboutUs"}>Learn More</Link>
              </button>
              <div className="flex items-center justify-center gap-3">
                  <PiPhoneIncomingThin className="text-5xl text-green-800 bg-green-100 rounded-full p-2"/>
                  <div className="flex flex-col items-start">
                      <p className="text-gray-500 text-lg font-medium">Phone : </p>
                      <h2 className="text-xl md:text-2xl font-bold">+251 975329588</h2>
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
