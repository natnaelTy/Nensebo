"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "./index.css";

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
            <h1 className="text-4xl text-white font-bold uppercase md:text-6xl z-10">
              Nensebo <span className="text-green-800 font-bold">coffee</span>{" "}
              Farm
            </h1>
            <h2 className="text-2xl text-white font-semibold z-10 md:text-3xl">
              Speciality coffee from the land of origin.
            </h2>
            <p className="text-white text-sm md:text-lg mt-3 z-10">
              We source premium coffee beans directly from our farm in
              Ethiopia’s coffee-producing regions, focusing on global
              distribution.
            </p>
            <button className="bg-white border-2 border-white px-4 py-2 text-md rounded-full uppercase font-semibold mt-8 hover:bg-transparent hover:text-white z-10">
              <Link href="/contact">Contact Us</Link>
            </button>
          </motion.div>
          
          <div className="relative
          max-w-md w-full h-auto z-10">
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
