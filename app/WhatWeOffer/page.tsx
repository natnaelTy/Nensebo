"use client";
import { motion } from "framer-motion";
import data from "./data";

export default function WhatWeOffer() {

  return (
    <>
      <div className="mb-20 relative">
        <div className="max-w-xs h-auto absolute top-0 right-16 opacity-20 z-[-1] transalte origin-bottom -rotate-32">
           <img src="./images/coffeeplant.png" alt="" className="w-full h-full object-cover"/>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-normal mt-16">
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
