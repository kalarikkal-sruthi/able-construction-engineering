import React, { useRef, useState } from "react";

import { motion } from "framer-motion";

function Blog() {
  return (
    <div>    <section className="py-8 md:py-20 lg:py-20 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-16">
        {/* Optional Section Heading */}
        <div className="text-start mb-4 md:mb-8">
<motion.h1   initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full">


          <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black ">
            Uganda's Emerging Conversations
          </span>
</motion.h1>
          {/* Alternative Shorter Introduction */}

          <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
          Explore a curated collection of our landmark projects. Each one is a testament to the scale, innovation, and uncompromising quality we deliver, setting new standards in every market we enter.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">


         
        </div>

        {/* Optional Navigation Buttons */}
      </div>
    </section></div>
  )
}

export default Blog