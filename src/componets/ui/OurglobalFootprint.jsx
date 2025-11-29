import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
function OurglobalFootprint() {
  const handleViewProfile = () => {
    const pdfUrl = "/documents/ABLE GROUP CONSTRUCTION.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <div>
      {" "}
      <section className="py-8 md:py-20 lg:py-20 bg-gray-100">
        <div className=" mx-auto px-4 sm:px-6 lg:px-16">
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
            <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
              Explore a curated collection of our landmark projects. Each one is
              a testament to the scale, innovation, and uncompromising quality
              we deliver, setting new standards in every market we enter.
            </p>
          </div>
          <div className="bg-white   overflow-hidden border border-gray-100 mb-4 md:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3">
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
                      Strategic Operations
                    </div>
                    <h3 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light text-white mb-4">
                      INDIA
                    </h3>
                    <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-white to-gray-300"></div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] font-light">
                    Pioneering infrastructure excellence with sustainable
                    engineering solutions that drive economic growth and
                    community development across the nation.
                  </p>

                  <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 lg:mb-10">
                    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Public Works
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                          45+ Projects
                        </span>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Bridge Engineering
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                          28+ Structures
                        </span>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Tourism Infrastructure
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                          15+ Sites
                        </span>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 sm:py-4">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Harbour Development
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                          8+ Ports
                        </span>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-2 relative h-64 sm:h-72 md:h-80 lg:h-auto min-h-[300px]">
                <Image
                  src="/innerpage-construction/india.jpg"
                  alt="Strategic Infrastructure Development in India"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent lg:bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>

                <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#0000006b]  p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                    <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                      25+
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-[#0000006b]   p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                    <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                      96+
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                      Projects Completed
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white">
                  <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-80 font-light">
                    Transforming Infrastructure Since 1998
                  </div>
                  <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-light mt-1 sm:mt-2">
                    Excellence in Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl overflow-hidden border border-gray-100 mb-4 md:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3">
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
                      Strategic Operations
                    </div>
                    <h3 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light text-white mb-4">
                      UGANDA
                    </h3>
                    <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-white to-gray-300"></div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] font-light">
                    Driving Uganda&apos;s urban transformation with sustainable
                    construction solutions that foster economic growth and
                    enhance community living standards across the nation.
                  </p>

                  <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 lg:mb-10">
                    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Residential Construction
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Commercial Development
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Urban Infrastructure
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 sm:py-4">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Road Construction
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-2 relative h-64 sm:h-72 md:h-80 lg:h-auto min-h-[300px]">
                <Image
                  src="/innerpage-construction/unganda.jpg"
                  alt="Urban Development and Construction in Uganda"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent lg:bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>

                <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#0000006b] p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                    <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                      20+
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-[#0000006b]  p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                    <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                      138+
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                      Projects Completed
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white">
                  <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-80 font-light">
                    Building Uganda&apos;s Future Since 2003
                  </div>
                  <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-light mt-1 sm:mt-2">
                    Excellence in Construction
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl overflow-hidden border border-gray-100 mb-4 md:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3">
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
                      Strategic Mega-Projects
                    </div>
                    <h3 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light text-white mb-4">
                      MIDDLE EAST
                    </h3>
                    <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-white to-gray-300"></div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] font-light">
                    Engineering the future with world-class airports, Formula 1
                    circuits, and strategic infrastructure that redefine global
                    standards across Qatar, UAE, and Oman.
                  </p>

                  <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 lg:mb-10">
                    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Airport Mega-Projects
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                          12+ Terminals
                        </span>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Formula 1 Circuits
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                          5+ Venues
                        </span>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-700">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Strategic Ports
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                          8+ Hubs
                        </span>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 sm:py-4">
                      <span className="text-white font-medium text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                        Smart Cities
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                          6+ Developments
                        </span>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-2 relative h-64 sm:h-72 md:h-80 lg:h-auto min-h-[300px]">
                <Image
                  src="/innerpage-construction/middle-east.jpg"
                  alt="Mega-Projects in Middle East: Airports, Formula 1 Tracks, and Strategic Infrastructure"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent lg:bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>

                <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#0000006b] p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                    <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                      25+
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-[#0000006b]   p-3 sm:p-4 text-center border border-white/10 min-w-[60px] sm:min-w-[100px]">
                    <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold text-white">
                      31+
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-gray-300">
                      Mega-Projects
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white">
                  <div className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-80 font-light">
                    Qatar • UAE • Oman
                  </div>
                  <div className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-light mt-1 sm:mt-2">
                    Redefining Global Infrastructure
                  </div>
                </div>
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
                onClick={handleViewProfile}
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurglobalFootprint;
