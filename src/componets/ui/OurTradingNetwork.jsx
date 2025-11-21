"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";

function OurTradingNetwork() {
  const branches = [
    {
      id: 1,
      image: "/branches/able-group-logo-1.webp",
      name: "Dubai Main Branch",
      location: "Qatar",
    },
    {
      id: 2,
      image: "/branches/able-group-logo-2.webp",
      name: "Abu Dhabi Office",
      location: "Qatar",
    },
    {
      id: 3,
      image: "/branches/able-group-logo-3.webp",
      name: "Doha Center",
      location: "Qatar",
    },
    {
      id: 4,
      image: "/branches/able-group-logo-4.webp",
      name: "Riyadh Branch",
      location: "UAE",
    },
    {
      id: 5,
      image: "/branches/able-group-logo-5.webp",
      name: "Muscat Office",
      location: "Saudi Arabia",
    },
  ];

  return (
    <section className="py-8 md:py-20 lg:py-20 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
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
            <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none-2 text-black">
              Our Trading Network
            </span>
          </motion.h1>

          <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
            Building on three decades of global excellence, we are now shaping
            the future of development. Explore our pioneering projects in
            construction, sustainable agriculture, and strategic trading—where
            innovation meets legacy, and new standards are born.
          </p>
        </div>

        {/* Full Width Horizontal Scrolling Swiper */}
        <div className="relative w-full ">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            speed={3000} // Reduced speed
            autoplay={{
              delay: 1, // Small delay
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            freeMode={false} // Disable free mode
            centeredSlides={false}
            modules={[Autoplay]} // Remove FreeMode
            className="branches-swiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
            }}
          >
            {branches.map((branch) => (
              <SwiperSlide key={branch.id} className="border-1">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Branch Info Overlay - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 to-transparent p-2 text-black">
                    <p className="text-[10px] sm:text-[10px] lg:text-[12px] xl:text-[12x] opacity-90 flex items-center gap-1">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {branch.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OurTradingNetwork;
