"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function OurAgriculturalDivisions() {
  return (
    <div>
      <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-start ">
          <Image
            src="/innerpage-farming/able-farm-logo.webp"
            alt="Able Farm Logo"
            width={300}
            height={100}
            className="flex-shrink-0"
            priority
          />
          {/* <div className=" ">
          <div className="">
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
              <span className=" ps-8 md:ps-10 lg:ps-10 text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black ">
                Our Agricultural Divisions:
              </span>
            </motion.h1>
          </div>
          <div></div>
        </div> */}
        </div>
        <div className="text-start mt-4 mb-4 md:mb-8">
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
              Our Agricultural Divisions
            </span>
          </motion.h1>
          {/* <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
                    Explore a curated collection of our landmark projects. Each one is
                    a testament to the scale, innovation, and uncompromising quality
                    we deliver, setting new standards in every market we enter.
                  </p> */}
        </div>
        <div className="relative py-16 md:py-24 lg:py-32 overflow-hidden w-full left-1/2 -translate-x-1/2">
        {/* Background Image Container - Full Width */}
        <div className="absolute inset-0 z-0 w-screen left-1/2 -translate-x-1/2">
          <Image
            src="/innerpage-farming/farming.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content - Still Centered */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
             <div className="mb-3 sm:mb-4 lg:mb-6">
                  <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight text-white">
                   Integrated Farming & Food Production
                  </span>
                </div>
           
            <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block   mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-white">
              Nestled in the biodiverse hills of Kerala, Able Farms Pvt. Ltd. is a model of integrated, sustainable agriculture. We focus on creating a synergistic ecosystem that delivers fresh, high-quality produce to the local and regional market.
            </p>
          </motion.div>
        </div>
      </div>
      </section>
      
    </div>
  );
}

export default OurAgriculturalDivisions;
