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

function QualityServices() {
  return (
    <section className="py-10 md:py-24 lg:py-20 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-16">
        {/* Optional Section Heading */}
        <div className="text-start mb-8 md:mb-10">
          <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black ">
            Our Core Competencies
          </span>

          {/* Alternative Shorter Introduction */}

          <p className="text-05xl sm:text-1xl lg:text-1xl xl:text-1xl block  mb-3 mt-3 sm:mb-3 text-black ">
            Pioneering construction innovation with comprehensive
            engineering—from earthworks to bridges. We deliver precision,
            reliability, and quality to transform visions into enduring
            realities.
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
              delay: 2000,
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
                slidesPerView: 4,
                spaceBetween: 14,
              },
            }}
            modules={[FreeMode, Pagination,Autoplay]}
            className="services-swiper pb-12"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/expertise/jcb.jpg"
                    alt="Site Excavation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 "
                  />
                </div>
                {/* Transparent Text Overlay */}
                <div className="text-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                    EARTHWORKS
                  </h3>
                  <p className="text-xs md:text-sm opacity-90 leading-relaxed text">
                    Transforming Terrain with Surgical Precision.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
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
    xl:text-sm
    relative
    overflow-hidden
    group
    hover:-translate-y-0.5
    flex
    items-center
    justify-center
    min-w-[130px]
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
              <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/expertise/rcc.jpg"
                    alt="Land Grading"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Transparent Text Overlay */}
                <div className="text-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                    RCC STRUCTURES
                  </h3>
                  <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                    Creating Possibility from Raw Land.
                  </p>
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                   className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
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
    xl:text-sm
    relative
    overflow-hidden
    group
    hover:-translate-y-0.5
    flex
    items-center
    justify-center
    min-w-[130px]
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

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/expertise/road.jpg"
                    alt="Erosion Control"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Transparent Text Overlay */}
                <div className="text-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                    ROAD CONSTRUCTION
                  </h3>
                  <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                    The Architecture of Strength and Permanence.
                  </p>
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
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
    xl:text-sm
    relative
    overflow-hidden
    group
    hover:-translate-y-0.5
    flex
    items-center
    justify-center
    min-w-[130px]
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

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/expertise/pipeline.jpg"
                    alt="Final Preparation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Transparent Text Overlay */}
                <div className="text-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                    PIPELINE SYSTEMS
                  </h3>
                  <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                    Ready-to-build surfaces for construction projects
                  </p>
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                 className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
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
    xl:text-sm
    relative
    overflow-hidden
    group
    hover:-translate-y-0.5
    flex
    items-center
    justify-center
    min-w-[130px]
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

            <SwiperSlide>
              <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/expertise/drainage.jpg"
                    alt="Additional Service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Transparent Text Overlay */}
                <div className="text-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                    DRAINAGE SYSTEMS
                  </h3>
                  <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                    Mastering the Flow, Taming the Elements.
                  </p>
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
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
    xl:text-sm
    relative
    overflow-hidden
    group
    hover:-translate-y-0.5
    flex
    items-center
    justify-center
    min-w-[130px]
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
            <SwiperSlide>
              <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/expertise/bridge.jpg"
                    alt="Additional Service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Transparent Text Overlay */}
                <div className="text-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                    {" "}
                    BRIDGE WORKS
                  </h3>
                  <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                    Connecting Destinies, Overcoming Nature's Challenges.
                  </p>
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-start items-start"
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
    xl:text-sm
    relative
    overflow-hidden
    group
    hover:-translate-y-0.5
    flex
    items-center
    justify-center
    min-w-[130px]
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
            {/* Add more slides as needed */}
          </Swiper>

          {/* Custom Pagination */}
          <div
            className="swiper-pagination flex justify-center items-center gap-3 !relative !mt-8 "

          ></div>
        </div>

        {/* Optional Navigation Buttons */}
      </div>
    </section>
  );
}

export default QualityServices;
