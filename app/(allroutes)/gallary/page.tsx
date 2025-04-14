"use client"
import { useState } from "react";
import images from "./Image";
import SliderImage from "./SliderImage";
import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Image from "next/image";
import { motion } from "framer-motion";


function Gallary() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [toggleShowImage, setToggleShowImage] = useState(false);
  
    function showFullImage() {
      setToggleShowImage(!toggleShowImage);
    }

  return (
    <>
     
      {/* common banner photo */}
      <div className="bannerContainer">
          <div className="nestedBannerContainer">
            <Link href={"/about"} className="hover:text-green-800">
              <h2>About</h2>
            </Link>
            <h2>
              <RiArrowRightDoubleFill />
            </h2>
            <h2>Gallary</h2>
          </div>
        </div>

       {/* title */}
       <h1 className="text-2xl lg:text-3xl text-center text-green-900 font-bold mt-10 mb-10">
         <span className="text-slate-950 font-extralight"> Our</span>  Gallary
         <div className="underlineForTitle"></div>
        </h1>
      
      <div
        className="grid grid-cols-3 lg:grid-cols-4 items-center justify-center gap-2 w-full h-full p-4">
        {images.length > 0 &&
          images.map((img, index) => (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: index * 0.3 }} // Stagger animation
                viewport={{ once: true }}
              onClick={() => setCurrentSlide(index)}
              key={img.id}
              className="max-w-lg h-[100px] lg:h-[200px] cursor-pointer">
    
              <Image
                onClick={showFullImage}
                src={img.image}
                alt="image"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-all ease-in"
                loading="lazy"
              />
            </motion.div>
          ))}
      </div>
      
      <SliderImage setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} toggleShowImage={toggleShowImage}  showFullImage={showFullImage}/>
    </>
  );
}

export default Gallary;