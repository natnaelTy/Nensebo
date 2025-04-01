"use client"
import { useState } from "react";
import images from "./Image";
import SliderImage from "./SliderImage";
import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";



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
       <h1 className="text-4xl text-center text-green-700 font-bold mt-10 mb-10">
         <span className="text-gray-900 font-extralight"> Our</span>  Gallary
         <div className="underlineForTitle"></div>
        </h1>
      
      <div
        className="flex flex-wrap items-center justify-center gap-4 w-full h-full p-4">
        {images.length > 0 &&
          images.map((img, index) => (
            <div
              onClick={() => setCurrentSlide(index)}
              key={img.id}
              className="max-w-sm h-[250px] relative cursor-pointer">
    
              <img
                onClick={showFullImage}
                src={img.image}
                alt="image"
                className="w-full h-full object-cover hover:scale-110 transition-all ease-in"
                loading="lazy"
              />
            </div>
          ))}
      </div>
      
      <SliderImage setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} toggleShowImage={toggleShowImage}  showFullImage={showFullImage}/>
    </>
  );
}

export default Gallary;