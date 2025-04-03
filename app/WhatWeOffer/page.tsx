"use client";
import { motion } from "framer-motion";
import data from "./data";
import Image from "next/image";

export default function WhatWeOffer() {

  return (
    <>
      <div className="mb-20 p-1 lg:p-4 bg-gray-100 relative">
        
      <div className="max-w-sm h-auto absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
        <Image width={400} height={400} src="/images/coffeeplant.png" alt="" className="w-full h-full object-cover"/>
      </div>
      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h1 className="text-center text-2xl sm:text-2xl lg:text-4xl font-semibold mt-16">
            What we offer
          </h1>
          <div className="underlineForTitle"></div>
        </motion.div>

        <div className="flex justify-around flex-col md:flex-wrap lg:flex-row w-full gap-10 md:gap-3 h-full mt-10 p-4">
          {data.length > 0 &&
            data.map((card, index) => (
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: index * 0.3 }} // Stagger animation
                viewport={{ once: true }}
                className="WhatWeOfferCard"
                key={card.id}
              >
                <Image
                  src={card.imageUrl}
                  alt="image"
                  width={500}
                  height={300}
                  className="WhatWeOfferCardImage"
                />
                <h2 className="WhatWeOfferTitle">{card.title}</h2>
                <p className="WhatWeOfferDescription">{card.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
}
