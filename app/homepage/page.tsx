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
        <div className="md:flex flex-cols items-center gap-8 justify-around w-full h-screen p-4">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start justify-center p-3 gap-3 text-center md:text-left"
          >
            <h1 className="max-w-xl text-4xl text-white font-bold uppercase md:text-5xl z-10">
              Nensebo <span className="text-green-600 font-extrabold">coffee </span>
              Supply
            </h1>
            <h2 className={`${nunitoSans.className}text-xl text-white font-semibold z-10 md:text-2xl`}>
              Speciality coffee from the land of origin.
            </h2>
            <p className="text-white text-sm md:text-md mt-3 z-10 max-w-xl">
              We source premium coffee beans directly from our farm in
              Ethiopia’s coffee-producing regions, focusing on global
              distribution.
            </p>
            <button className="bg-white border-2 border-white px-4 py-3 text-sm rounded-lg uppercase font-semibold mt-8 hover:bg-transparent hover:text-white z-10">
              <Link href="/contact">Contact Us</Link>
            </button>
          </motion.div>
          
          <div className="relative
          max-w-sm w-full h-auto z-10">
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
