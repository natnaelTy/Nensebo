"use client"
import { useEffect, useState } from "react";
import './index.css';
import Link from  "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import images from "./Image";

function About(){

   const [currentSlide, setCurrentSlide] = useState(0);
    
   function handlePrevious(){
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
   }

   function handleNextSlide(){
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
   }

   console.log(images, currentSlide);

    return(
      <>
      {/* common header photo */}
      <div className="relative">
        <div className="absolute inset-x-1/2 inset-y-2/4 z-10">
           <div className="flex items-center justify-around text-white text-xl lg:text-2xl gap-2">
               <Link href={'/'} className="hover:text-green-800"><h2>Home</h2></Link>
               <h2><IoIosArrowForward/></h2>
               <h2>About</h2>
           </div>
        </div>
       </div>

        <div> 
            <div className="flex flex-col items-center justify-around p-4 gap-4">
               <div className="paragraph flex flex-col items-center justify-center text-center gap-4 mb-6">
                   <p className="text-xl uppercase text-orange-700 font-medium">about</p>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl text-green-800 font-bold uppercase max-w-3xl">Mastering nurture in coffee production</h1>
                    <p className="text-gray-800 text-center text-gray-700 text-sm md:text-base max-w-2xl">At Nensebo, we are dedicated to sharing the rich, distinctive flavors of our coffee with the world. Nestled in fertile soil and blessed with an ideal climate, our farm produces beans known for their quality, mainly from it’s washing and drying station located in Oromia and Southern Ethiopia Region. Our team combines traditional farming methods with sustainable practices, ensuring that every batch we export meets the highest standards. From the hands of skilled farmers to the final cup</p>
               </div>
                 <div className="flex items-center justify-center relative">
                  <div onClick={handlePrevious} className="arrow arrowLeft"><MdOutlineArrowBackIosNew/></div>
                    {
                     images && images.length ? 
                     images.map((imageList, index) => (
                     <div className={currentSlide === index ? "container" : "hidden"} key={imageList.id}>
                        <img src={imageList.image} alt="" className='currentImage'/>
                     </div>
                     ))
                     : null
                    }
                    <div onClick={handleNextSlide} className="arrow arrowRight"><MdOutlineArrowForwardIos/></div>
                    <span className="circle-indicator">
                      {
                        images && images.length ? 
                        images.map((_, index) => (
                           <button onClick={() => setCurrentSlide(index)} key={index} className={currentSlide === index ? 'current-indicator' : 'current-indicator hide-indicator'}></button>
                        ))
                        : null
                      }
                    </span>
               </div>
            </div>
        </div>
        </>
    )
}

export default About;