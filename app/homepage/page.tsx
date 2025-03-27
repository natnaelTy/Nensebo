"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./index.css";
import { Nunito } from "next/font/google";

export const nunitoSans = Nunito({
  variable: "--font-nunito-mono",
  subsets: ["latin"],
})

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch images from public/imgSlide.json
  useEffect(() => {
    fetch("/LandingPageImages.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);



  return (
    <>
      <div className="home relative">
        <div className="md:flex flex-cols items-center justify-around gap-4 min-h-screen pt-30 md:pt-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start justify-center p-3 gap-4 text-center md:text-left"
          >
            <h1 className="max-w-xl text-4xl text-white font-bold md:text-6xl z-10">
              Sidama Nensebo <span className="text-green-700 font-extrabold">Coffee </span>
              Supply
            </h1>
            <h2 className={`${nunitoSans.className}text-2xl text-white font-semibold z-10 md:text-3xl`}>
              Speciality coffee from the land of origin.
            </h2>
            <p className="text-white text-md mt-3 z-10 max-w-xl">
              We source premium coffee beans directly from our farm in
              Ethiopia’s coffee-producing regions, focusing on global
              distribution.
            </p>
            <button className="bg-transparent text-white font-bold border-2 border-white px-4 py-3 text-sm rounded-lg uppercase mt-8 hover:bg-white hover:text-black z-10 transition duration-300 ease-in">
              <Link href="/contact">Contact Us</Link>
            </button>
          </motion.div>
          
          <div className="relative
         max-w-xs md:max-w-sm w-full h-auto z-10">
            <img src="/images/banner_coffee_bag.png" alt="" className="object-cover w-full h-full" />
          </div>
          {images.length > 0 &&
            images.map((img, index) => (
              <img
                key={index}
                src={img.images}
                alt={`Slide ${index + 1}`}
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
