import React, { useRef, useState } from "react";

import { motion } from "framer-motion";

function Blog() {
  return (
    <div>
      {" "}
      <section className="py-8 md:py-20 lg:py-20 bg-gray-100">
        <div className=" mx-auto px-4 sm:px-6 lg:px-16">
          {/* Optional Section Heading */}
          <div className="text-start mb-4 md:mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full"
            >
              <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black ">
                Our Next Chapter
              </span>
            </motion.h1>
            {/* Alternative Shorter Introduction */}

            <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
              Building on three decades of global excellence, we are now shaping
              the future of development. Explore our pioneering projects in
              construction, sustainable agriculture, and strategic trading—where
              innovation meets legacy, and new standards are born.
            </p>
          </div>

          {/* Swiper Container */}
          <div className="relative"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Image 1 */}
            <div className="h-100 md:h-150">
              {" "}
              {/* Fixed height */}
              <img
                src="/apartments/apartment6.jpg"
                alt="Description 1"
                className="w-full h-full object-cover "
              />
            </div>

            {/* Image 2 */}
            <div className="h-100 md:h-150">
              {" "}
              {/* Same fixed height */}
              <img
                src="/apartments/apartment4.jpg"
                alt="Description 2"
                className="w-full h-full object-cover "
              />
            </div>

            {/* Image 3 */}
            <div className="h-100 md:h-150">
              {" "}
              {/* Same fixed height */}
              <img
                src="/apartments/apartment3.jpg"
                alt="Description 3"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
          {/* Optional Navigation Buttons */}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 lg:gap-6 justify-center items-center"
        >
          <button
            className="
            bg-black
    border-1
    border-black
    text-white 
            px-2 
            xl:px-2
            py-2 
            rounded-full 
            transition-all 
            duration-300 
            text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x]
            relative
            overflow-hidden
            group
            hover:-translate-y-0.5
            flex
            items-center
            justify-center
            min-w-[120px]
            xl:min-w-[130px]
           
          "
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              View All
            </span>
            <span
              className="
              absolute
              right-4
              top-1.5
              opacity-0
              -translate-x-2
              group-hover:opacity-100
              group-hover:translate-x-0
              transition-all
              duration-300
              font-bold
            "
            >
              →
            </span>
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default Blog;
