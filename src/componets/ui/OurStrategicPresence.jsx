"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function OurStrategicPresence() {

  const handleViewProfileQatar = () => {
    const pdfUrl = '/documents/ABLE GROUP QATAR TRADING.pdf';
    window.open(pdfUrl, '_blank');
  };

  const handleViewProfileSaudiArabia = () => {
    const pdfUrl = '/documents/ABLE GROUP SAUDI ARABIA TRADING.pdf';
    window.open(pdfUrl, '_blank');
  };
  return (
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
              Our Strategic Presence
            </span>
          </motion.h1>
          <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
            Explore a curated collection of our landmark projects. Each one is a
            testament to the scale, innovation, and uncompromising quality we
            deliver, setting new standards in every market we enter.
          </p>
        </div>
        <div className="bg-white shadow-2xl overflow-hidden border border-gray-100 mb-4 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Text Panel - Executive Dark Theme */}
            <div className="lg:col-span-1 p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-gray-900 to-gray-800">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="h-full flex flex-col justify-center"
              >
                <div className="mb-6 sm:mb-8 lg:mb-10">
                  <div className="text-white text-xs font-semibold tracking-widest uppercase mb-3 opacity-80">
                    Construction Supply Excellence
                  </div>
                  <h3 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light text-white mb-4">
                    QATAR
                  </h3>
                  <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-white to-gray-300"></div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] font-light">
                  For over two decades, Able Group W.L.L. has been a cornerstone
                  of Qatar&apos;s construction supply industry. Our showrooms
                  are hubs for contractors and businesses seeking
                  quality-assured products, backed by a reputation built on
                  reliability and an extensive, branded product range.
                </p>

                <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 lg:mb-10">
                  <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                    <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                      Main Office
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Barwa Commercial
                      </span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                    <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                      Showroom Location
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Barwa Village
                      </span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                    <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                      Years of Excellence
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Since 1996
                      </span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:py-4">
                    <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                      Product Range
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Extensive Brands
                      </span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-center items-center"
                  >
                      <button onClick={handleViewProfileQatar}
                      
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
                min-w-[200px]
                xl:min-w-[200px]
                text-center
                no-underline
              "
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        View Our Profile
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
                  {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-center items-center"
                  >
                    <a
                      href="https://www.ablegroupqatar.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border border-white text-white px-2 xl:px-2 py-2 rounded-full transition-all duration-300 text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] relative overflow-hidden group hover:-translate-y-0.5 flex items-center justify-center min-w-[135px] xl:min-w-[135px] hover:bg-white/20 no-underline"
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        Explore Now
                      </span>
                      <span className="absolute right-4 top-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold">
                        →
                      </span>
                    </a>
                  </motion.div> */}
                </div>
              </motion.div>
            </div>

            {/* Image Panel with Overlay Stats */}
            <div className="lg:col-span-2 relative h-64 sm:h-72 md:h-80 lg:h-auto min-h-[300px]">
              <Image
                src="/innerpage-trading/qatar.jpg"
                alt="Construction Supply and Showroom in Qatar - Able Group W.L.L."
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent lg:bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>

              {/* Floating Stats Grid */}
              <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#0000006b] p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                  <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                    25+
                  </div>
                  <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                    Years Experience
                  </div>
                </div>
                <div className="bg-[#0000006b]  p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                  <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                    1000+
                  </div>
                  <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                    Products Available
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-16 sm:bottom-16 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white">
                <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-80 font-light">
                  Your One-Stop Destination Since 1996
                </div>
                <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-light mt-1 sm:mt-2">
                  Quality Construction Supplies
                </div>
              </div>

              {/* Website Link Overlay */}
<div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-auto lg:right-8">
  <a
    href="https://www.ablegroupqatar.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 backdrop-blur-sm text-sm border border-white/30"
  >
    <span>ablegroupqatar.com</span>
    <svg
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
</div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-2xl overflow-hidden border border-gray-100 mb-4 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Text Panel - Executive Dark Theme */}
            <div className="lg:col-span-1 p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-gray-900 to-gray-800">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="h-full flex flex-col justify-center"
              >
                <div className="mb-6 sm:mb-8 lg:mb-10">
                  <div className="text-white text-xs font-semibold tracking-widest uppercase mb-3 opacity-80">
                    Expanding Legacy of Excellence
                  </div>
                  <h3 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light text-white mb-4">
                    SAUDI ARABIA
                  </h3>
                  <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-white to-gray-300"></div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] font-light">
                  Building on our foundational success, we have established Able
                  Middle East Trading Company in the Kingdom&apos;s industrial
                  heartland. We are poised to serve the booming Saudi market
                  with the same commitment to quality, innovation, and service
                  that defines the Able Group name.
                </p>

                <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 lg:mb-10">
                  <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                    <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                      Company Location
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Dammam
                      </span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                    <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                      Industrial Zone
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Al Khalidiyah
                      </span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                    <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                      Market Focus
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Saudi Market
                      </span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:py-4">
                    <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                      Service Commitment
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Quality & Innovation
                      </span>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-center items-center"
                  >
                    <button
                    onClick={handleViewProfileSaudiArabia}
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
                min-w-[200px]
                xl:min-w-[200px]
                text-center
                no-underline
              "
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        View Our Profile
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
                  {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-center items-center"
                  >
                    <a
                      href="https://www.ablemiddleeast.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border border-white text-white px-2 xl:px-2 py-2 rounded-full transition-all duration-300 text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] relative overflow-hidden group hover:-translate-y-0.5 flex items-center justify-center min-w-[135px] xl:min-w-[135px] hover:bg-white/20 no-underline"
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        Explore Now
                      </span>
                      <span className="absolute right-4 top-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold">
                        →
                      </span>
                    </a>
                  </motion.div> */}
                </div>
              </motion.div>
            </div>

            {/* Image Panel with Overlay Stats */}
            <div className="lg:col-span-2 relative h-64 sm:h-72 md:h-80 lg:h-auto min-h-[300px]">
              <Image
                src="/innerpage-trading/soudi-arabia.jpg"
                alt="Able Middle East Trading Company - Expanding Excellence in Saudi Arabia"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent lg:bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>

              {/* Floating Stats Grid */}
              <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#0000006b] p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                  <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                    New
                  </div>
                  <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                    Market Entry
                  </div>
                </div>
                <div className="bg-[#0000006b] p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                  <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                    100%
                  </div>
                  <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                    Quality Commitment
                  </div>
                </div>
              </div>

           {/* Bottom Content */}
<div className="absolute bottom-16 sm:bottom-16 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white">
  <div className="text-xs sm:text-sm lg:text-sm xl:text-sm opacity-80 font-light">
    Expanding Legacy of Excellence
  </div>
  <div className="text-sm sm:text-base lg:text-base xl:text-base font-light mt-1 sm:mt-2">
    Able Middle East Trading Company
  </div>
</div>

{/* Address Overlay - Commented out as per your code */}
{/* <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 max-w-xs">
  <div className="bg-[#0000006b] p-3 sm:p-4 rounded-lg border border-white/10 backdrop-blur-sm">
    <div className="text-xs sm:text-sm lg:text-sm xl:text-sm text-white font-medium mb-1">
      Dammam Headquarters
    </div>
    <div className="text-xs sm:text-xs text-gray-300 leading-tight">
      Building No: 3325, Street: Al Afadila, Secondary No:8853, Al
      Khalidiyah Ash Shamaliyah Dist.
    </div>
  </div>
</div> */}

{/* Website Link Overlay */}
<div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-4 lg:left-auto lg:right-8">
  <a
    href="https://www.ablemiddleeast.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-3 sm:py-2 sm:px-4 rounded-full transition-all duration-300 backdrop-blur-sm text-xs sm:text-sm border border-white/30"
  >
    <span>ablemiddleeast.com</span>
    <svg
      className="w-3 h-3 sm:w-3 sm:h-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStrategicPresence;
