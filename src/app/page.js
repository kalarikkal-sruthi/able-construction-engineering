"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import QualityServices from "@/componets/ui/QualityServices";
import { MdDesignServices } from "react-icons/md"; // Design Development
import { FiCalendar } from "react-icons/fi"; // Project Planning
import { GiSofa } from "react-icons/gi"; // Interior Design

export default function Home() {
  return (
    <main>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.mp4" type="video/webm" />

          <Image
            src="/main-banner-video-image.png"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </video>

        <div className="absolute top-0 left-0  h-full bg-black  z-20"></div>

        {/* Centered Text Content */}
        <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto pt-16 sm:pt-20 lg:pt-24">
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
            <div className="mb-3 sm:mb-4 lg:mb-6">
              <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-none-2">
                WHERE GLOBAL LEGACY MEETS UGANDA&apos;S FUTURE
              </span>
            </div>
            {/* <div className="relative inline-block">
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-mono text-white relative block">
                Able Group
                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70 rounded-full"></div>
              </span>
            </div> */}
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed sm:leading-loose opacity-90 max-w-3xl mx-auto px-2"
          >
            Building a New Standard in Ugandan Real Estate PY Able Construction
            – A Legacy of Excellence, Now Building Your Future in Uganda.
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center"
          >
            <button
              className="
    bg-transparent
    border
    border-white
    text-white 
    px-2 
    xl:px-2
    py-2 
    rounded-full 
    transition-all 
    duration-300 
    text-sm 
    xl:text-base
    relative
    overflow-hidden
    group
    hover:-translate-y-0.5
    flex
    items-center
    justify-center
    min-w-[135px]
    xl:min-w-[135px]
    hover:bg-white/20
  "
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-2">
                Get In Touch
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
        </div>
      </section>
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            backgroundImage: "url('/second-banner.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 sm:p-8 lg:p-16 w-[95%] max-w-8xl mx-auto"
          >

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
            <div className="mb-3 sm:mb-4 lg:mb-6 text-center">
              <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-none-2 text-white ">
                WHERE GLOBAL LEGACY MEETS UGANDA&apos;S FUTURE
              </span>
               <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl block text-yellow-500 mb-3 mt-3 sm:mb-3 font-thin">
              Our story begins in 1992 with the founding of the Able Group. What started as a single venture has exploded into an international network of companies across India, UAE, Qatar, and Oman. Our reputation wasn't built on promises; it was forged on the ground of some of the world's most ambitious projects.
              </span>
            </div>
            {/* <div className="relative inline-block">
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-mono text-white relative block">
                Able Group
                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70 rounded-full"></div>
              </span>
            </div> */}
            
          </motion.h1>

           
           
          </motion.div>
        </div>
      </section>
      <QualityServices />


    </main>
  );
}
