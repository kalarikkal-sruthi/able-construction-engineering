"use client";
import { motion } from "framer-motion";
import ProjectsTabs from "@/componets/ui/ProjectsTabs";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="h-[70vh]  min-h-[500px] lg:min-h-[600px] bg-black flex items-center justify-center px-6 lg:px-24 ">
        <div className="grid grid-cols-5 lg:grid-cols-5  items-center justify-center  ">
          <div className="col-span-5 lg:col-span-2 bg-gray-900 my-6 p-3 lg:p-6 text-white  w-full h-full flex items-center ">
            <div className="w-full">
              <div className="text-start mb-0 md:mb-8">
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
                  <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-white ">
                    Our Premier Developments
                  </span>
                </motion.h1>
                {/* Alternative Shorter Introduction */}

                <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-white ">
                  Explore a curated collection of our landmark projects. Each
                  one is a testament to the scale, innovation, and
                  uncompromising quality we deliver, setting new standards in
                  every market we enter.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-5 lg:col-span-3 overflow-hidden bg-gray-800 h-full min-h-[200px] lg:min-h-[450px] ">
            <div className="relative w-full h-full  overflow-hidden">
              <Image
                src="/gallery/gallery-banner.jpg"
                alt="Special Projects Construction"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <ProjectsTabs />
    </div>
  );
}

export default page;
