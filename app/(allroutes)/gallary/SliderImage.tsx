import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import images from "./Image";
import { LiaTimesSolid } from "react-icons/lia";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

 interface SlideImageProps {
  currentSlide: number,
  setCurrentSlide: (index: number) => void,
  toggleShowImage: boolean,
  showFullImage: () => void
}

const SliderImage: React.FC<SlideImageProps> = ({
  currentSlide,
  setCurrentSlide,
  toggleShowImage,
  showFullImage,
}) => {

  // back to previous image
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
   // go next image
  function handleNextSlide() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  
   // Swipe handlers
   const handlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevious,
    trackMouse: false,
  });

  return (
    <div
      className={
        toggleShowImage
          ? "flex items-center justify-center h-full bg-[#000000e5] fixed top-0 left-0 bottom-0 right-0 z-50"
          : "hidden"
      }
    >
     
      <div {...handlers} className="relative flex items-center justify-center">
        <div className="flex items-center justify-center">
          {images && images.length
            ? images.map((imageList, index) => (
                <div
                  className={
                    currentSlide === index ? "w-full h-[300px] md:h-[400px] lg:h-[530px]" : "hidden"
                  }
                  key={imageList.id}
                >
                  <Image
                    src={imageList.image}
                    width={500}
                    height={400}
                    loading="lazy"
                    alt="image"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in"
                  />
                </div>
              ))
            : null}
        </div>
      </div>

      {/* circle indicators */}
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                onClick={() => setCurrentSlide(index)}
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator hide-indicator"
                }
              ></button>
            ))
          : null}
      </span>

      {/* arrows */}
      <button
        onClick={handleNextSlide}
        className="arrow arrowRight hidden md:flex"
      >
      <MdOutlineArrowForwardIos />
      </button>
      <button
        onClick={handlePrevious}
        className="arrow arrowLeft hidden md:flex"
      >
        <MdOutlineArrowBackIosNew />
      </button> 

      {/* close icon */}
      <LiaTimesSolid
        onClick={showFullImage}
        className="cursor-pointer absolute top-5 right-5 z-30 text-white text-3xl md:text-4xl"
      />

    </div>
  );
}

export default SliderImage;
