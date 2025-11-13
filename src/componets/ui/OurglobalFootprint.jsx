import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
function OurglobalFootprint() {
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
                Our Global Footprint
              </span>
            </motion.h1>
            {/* Alternative Shorter Introduction */}

            <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
              Explore a curated collection of our landmark projects. Each one is
              a testament to the scale, innovation, and uncompromising quality
              we deliver, setting new standards in every market we enter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Content Column - spans 2 of 5 columns on desktop (40%) */}
            <div className="flex flex-col justify-start space-y-6 lg:col-span-2">
              <div className=" my-0">
                <div className="text-start">
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide leading-tight text-black">
                      INDIA
                    </span>
                  </motion.h1>
                </div>
              </div>

              {/* Optional description text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <p className="text-black text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] leading-relaxed">
                  Get in touch with us for more information about our services
                  and offerings.
                </p>
              </motion.div>
            </div>

       <div className="relative lg:col-span-3 h-64 md:h-80 lg:h-96"> {/* Parent needs height */}
  <div className="absolute inset-0">
    <Image
      src="/innerpage-construction/family.jpg"
      alt="Construction & Engineering"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurglobalFootprint;
