"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


function TradingBanner() {
  return (
        <div>
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/innerpage-construction/construction-work.jpg"
              alt="Construction & Engineering"
              fill
              className="object-cover scale-110 parallax-zoom"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        {/* Rest of your content remains the same */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl">
            <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full text-center"
              >
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                   Trading
                  </span>
                </div>
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <span className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                  The Backbone of Construction and Industry
                  </span>
                </div>
              </motion.h1>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="flex py-8 md:py-20 lg:py-20 bg-gray-100">
        <div className=" mx-auto mx-auto px-4 sm:px-6 lg:px-16 w-full">
          <div className="relative z-30 tex-center text-black px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full text-center"
            >
              <div className="mb-3 sm:mb-4 lg:mb-6">
                <span className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18x] font-light font-sans tracking-wide leading-tight">
                 Able Group's trading divisions are the vital link in the supply chain, ensuring a seamless flow of essential materials and resources. From the specialized tools in a craftsman&apos;s hands to the diesel powering industrial growth, we are a trusted partner for quality and reliability.
                </span>
              </div>
            </motion.h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TradingBanner