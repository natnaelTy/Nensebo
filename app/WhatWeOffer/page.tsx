"use client";
import { motion } from "framer-motion";
import data from "./data";

export default function WhatWeOffer() {

  return (
    <>
      <div className="mb-20 p-1 lg:p-16 bg-gray-100">
       
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

        <div className="flex justify-center flex-wrap gap-8 w-full h-full mt-10 p-4">
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
                <img
                  src={card.imageUrl}
                  alt=""
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
