"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./index.css";
import data from "./ImagesData";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);


  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []); 



  return (
    <>
      <div className="home relative">
        <div className="flex flex-col md:flex-row items-center md:justify-around justify-center gap-12 min-h-screen pt-30 md:pt-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start justify-center p-3 gap-4 text-center md:text-left"
          >
            <h1 className="antialiased max-w-xl text-4xl text-white font-bold md:text-6xl z-10">
              Direct From Farm, <span className="text-green-700 font-extrabold">Pure </span>
             In Flavor
            </h1>

            <p className="text-white text-sm md:text-base z-10 max-w-xl">
              We source premium coffee beans directly from our farm in
              Ethiopia’s coffee-producing regions, focusing on global
              distribution.
            </p>
            <button className="primarybtn">
              <Link href="/contact">Contact Us</Link>
            </button>
          </motion.div>
          
          <div className="relative
         max-w-[230px] md:max-w-sm w-full h-auto z-10">
            <Image src="/images/banner_coffee_bag.png" width={230} height={230} alt="coffee bag" className="w-full h-full object-cover" />
          </div>
          {data.length > 0 &&
            data.map((img, index) => (
              <Image
                key={index}
                src={img.imageUrl}
                alt="image"
                quality={100}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  position: "absolute"
                }}
                className={`showCurrentSlide ${
                  currentSlide === index ? "" : "hide"
                }`}
              />
            ))}
        </div>
      </div>
    </>
  );
}
