import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

function PremierDevelopments() {
  return (
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
              Our Premier Developments
            </span>
          </motion.h1>
          {/* Alternative Shorter Introduction */}

          <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
            Explore a curated collection of our landmark projects. Each one is a
            testament to the scale, innovation, and uncompromising quality we
            deliver, setting new standards in every market we enter.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            // freeMode={true}
            loop={true} // Enable infinite loop
            speed={800} // Transition speed in milliseconds
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            breakpoints={{
              // Mobile first approach
              480: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              // Tablet
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              // Small desktop
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // Large desktop
              1280: {
                slidesPerView: 3,
                spaceBetween: 14,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="services-swiper pb-12"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="group relative overflow-hidden  transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/modern developments/Yas Island, Abudhabi.jpg"
                    alt="Site Excavation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 "
                  />
                </div>
                {/* Transparent Text Overlay */}
                <div className=" text-start right-0 mt-3 text-black">
                  <h3 className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-semibold mb-0">
                    Yas Island, Abudhabi
                  </h3>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Able Middle East : </strong> Earthworks, Stormwater
                    Drainage, Mechanical Services, Transportation of Materials
                  </p>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Project Name : </strong> Project K race Track
                    (Formula one Grand Prix)
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
                  >
                    <button
                      className="
    bg-white
    border-1
    border-black
    text-black 
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
    hover:bg-white/20
  "
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        Read More
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
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="group relative overflow-hidden  transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/modern developments/waterpark.jpg"
                    alt="Land Grading"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className=" text-start right-0 mt-3 text-black">
                  <h3 className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-semibold mb-0">
                    Water Theme Park in Yas Island, Abudhabi
                  </h3>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Able Middle East : </strong> Enabling Works & Bulk
                    Filling
                  </p>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Project Name : </strong> Project ‘N’ – Water Park at
                    Yas Island
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
                  >
                    <button
                      className="
    bg-white
    border-1
    border-black
    text-black 
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
    hover:bg-white/20
  "
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        Read More
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
                {/* Transparent Text Overlay */}
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
             <SwiperSlide>
              <div className="group relative overflow-hidden  transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/modern developments/sewageplant.jpg"
                    alt="Land Grading"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className=" text-start right-0 mt-3 text-black">
                  <h3 className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-semibold mb-0">
                   Sewage Treatment Plant, Jebal Ali
                  </h3>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Able Middle East : </strong> RCC structures –Final settlement Tanks &
Activated Sludge Tanks, Laying & Testing of
Irrigation main and Sewage Main
                  </p>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Project Name : </strong> DS 150 – sewage treatment plant
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
                  >
                    <button
                      className="
    bg-white
    border-1
    border-black
    text-black 
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
    hover:bg-white/20
  "
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        Read More
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
                {/* Transparent Text Overlay */}
              </div>
            </SwiperSlide>
              <SwiperSlide>
              <div className="group relative overflow-hidden  transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/modern developments/airport.jpg"
                    alt="Land Grading"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className=" text-start right-0 mt-3 text-black">
                  <h3 className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-semibold mb-0">
                 New Doha International Airport Project Doha
                  </h3>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Able Middle East : </strong> Construction of Jet Blast deflectors,
Construction of box culverts, Laying and
testing of Grp pipelines for storm water,
Drainage and construction of chambers.
                  </p>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Project Name : </strong>New Doha International Airport Project
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
                  >
                    <button
                      className="
    bg-white
    border-1
    border-black
    text-black 
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
    hover:bg-white/20
  "
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        Read More
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
                {/* Transparent Text Overlay */}
              </div>
            </SwiperSlide>
   <SwiperSlide>
              <div className="group relative overflow-hidden  transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/modern developments/hamadport.jpg"
                    alt="Land Grading"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className=" text-start right-0 mt-3 text-black">
                  <h3 className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-semibold mb-0">
                   Hamad Port
                  </h3>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Able Middle East : </strong> Laying and testing of Grp pipelines for storm
water, Drainage and construction of
chambers, Enabling Works & Bulk Filling
                  </p>
                  <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] opacity-90 leading-relaxed text">
                    <strong>Project Name : </strong> Hamad Port
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
                  >
                    <button
                      className="
    bg-white
    border-1
    border-black
    text-black 
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
    hover:bg-white/20
  "
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        Read More
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
                {/* Transparent Text Overlay */}
              </div>
            </SwiperSlide>
         
               
            {/* Add more slides as needed */}
          </Swiper>

          {/* Custom Pagination */}
          <div className="swiper-pagination flex justify-center items-center gap-3 !relative !mt-8 "></div>
        </div>
    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-center items-center"
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
    min-w-[200px]
    xl:min-w-[200px]
  
  "
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                       View All Developments
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
        {/* Optional Navigation Buttons */}
      </div>
    </section>
  );
}

export default PremierDevelopments;
