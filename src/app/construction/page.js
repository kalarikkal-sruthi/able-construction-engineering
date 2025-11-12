"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function page() {
  return (
    <main className="pt-16">
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/innerpage-construction/construction-innerpage.jpg"
            alt="Construction & Engineering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl">
            <div className="relative z-30 tex-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
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
                  <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    Construction And Engineering
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
      <section className="flex py-8 md:py-20 lg:py-20">
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
                <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide leading-tight">
                  A dynamic time-lapse video of a construction site, switching
                  between scenes from a high-rise in Uganda, a bridge in India,
                  and a massive infrastructure project in the UAE.
                </span>
              </div>
            </motion.h1>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-20 lg:py-20 ">
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
                Get in touch with us for more information about our services and
                offerings.
              </p>
            </motion.div>
          </div>

          {/* Form Column - spans 3 of 5 columns on desktop (60%) */}
          <div className="relative lg:col-span-3">
              <div className="absolute inset-0">
          <Image
            src="/innerpage-construction/construction-innerpage.jpg"
            alt="Construction & Engineering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
         
          </div>
        </div>
        </div>
        
      </section>
      
    
      
    
    </main>
  );
}
