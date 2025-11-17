"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

function BannerSlider() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        className="h-full w-full"
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="relative h-screen w-full flex items-center justify-center">
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

            <div className="absolute top-0 left-0 h-full bg-black z-20"></div>

            {/* Centered Text Content */}
            <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
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
                  <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    Global Construction Excellence
                  </span>
                </div>
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <span className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    Building Futures Across India, Uganda, Qatar, UAE & Oman
                  </span>
                </div>
              </motion.h1>
              <Link href="/construction" className="">
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
                  <button className="bg-transparent border border-white text-white px-2 xl:px-2 py-2 rounded-full transition-all duration-300 text-sm xl:text-base relative overflow-hidden group hover:-translate-y-0.5 flex items-center justify-center min-w-[135px] xl:min-w-[135px] hover:bg-white/20">
                    <span className="transition-transform duration-300 group-hover:-translate-x-2">
                      Explore Now
                    </span>
                    <span className="absolute right-4 top-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold">
                      →
                    </span>
                  </button>
                </motion.div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-full flex items-center justify-center">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            >
              <source src="/hero2.mp4" type="video/mp4" />
              <source src="/hero2.mp4" type="video/webm" />
              <Image
                src="/main-banner-video-image.png"
                alt="Hero Background"
                fill
                className="object-cover"
              />
            </video>

            <div className="absolute top-0 left-0 h-full bg-black z-20"></div>

            {/* Centered Text Content */}
            <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
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
                  <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    Strategic Trading & Supply
                  </span>
                </div>

                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <span className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    Premium Hardware & Building Materials Across the GCC
                  </span>
                </div>
              </motion.h1>
              <Link href="/trading" className="">
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
                  <button className="bg-transparent border border-white text-white px-2 xl:px-2 py-2 rounded-full transition-all duration-300 text-sm xl:text-base relative overflow-hidden group hover:-translate-y-0.5 flex items-center justify-center min-w-[135px] xl:min-w-[135px] hover:bg-white/20">
                    <span className="transition-transform duration-300 group-hover:-translate-x-2">
                      Explore Now
                    </span>
                    <span className="absolute right-4 top-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold">
                      →
                    </span>
                  </button>
                </motion.div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen w-full flex items-center justify-center">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            >
              <source src="/hero3.mp4" type="video/mp4" />
              <source src="/hero3.mp4" type="video/webm" />
              <Image
                src="/main-banner-video-image.png"
                alt="Hero Background"
                fill
                className="object-cover"
              />
            </video>

            <div className="absolute top-0 left-0 h-full bg-black z-20"></div>

            {/* Centered Text Content */}
            <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
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
                  <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    Sustainable Farming Ventures
                  </span>
                </div>
              </motion.h1>

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
                <button className="bg-transparent border border-white text-white px-2 xl:px-2 py-2 rounded-full transition-all duration-300 text-sm xl:text-base relative overflow-hidden group hover:-translate-y-0.5 flex items-center justify-center min-w-[135px] xl:min-w-[135px] hover:bg-white/20">
                  <span className="transition-transform duration-300 group-hover:-translate-x-2">
                    Explore Now
                  </span>
                  <span className="absolute right-4 top-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold">
                    →
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
            <div className="relative h-screen w-full flex items-center justify-center">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
              >
                <source src="/hero4.mp4" type="video/mp4" />
                <source src="/hero4.mp4" type="video/webm" />
                <Image
                  src="/main-banner-video-image.png"
                  alt="Hero Background"
                  fill
                  className="object-cover"
                />
              </video>

              <div className="absolute top-0 left-0 h-full bg-black z-20"></div>

            
              <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
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
                    <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                      Where Every Journey Becomes Great Story
                    </span>
                  </div>
                </motion.h1>

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
                  <span className="text-1xl sm:text-1xl lg:text-1xl xl:text-1xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    Launching Soon...
                  </span>
                </motion.div>
              </div>
            </div>
          </SwiperSlide> */}
        {/* <SwiperSlide>
            <div className="relative h-screen w-full flex items-center justify-center">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
              >
                <source src="/hero5.mp4" type="video/mp4" />
                <source src="/hero5.mp4" type="video/webm" />
                <Image
                  src="/main-banner-video-image.png"
                  alt="Hero Background"
                  fill
                  className="object-cover"
                />
              </video>

              <div className="absolute top-0 left-0 h-full bg-black z-20"></div>

              <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
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
                    <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                      Heavy Construction Equipment Rental Services
                    </span>
                  </div>
                </motion.h1>

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
                  <span className="text-1xl sm:text-1xl lg:text-1xl xl:text-1xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    Launching Soon...
                  </span>
                </motion.div>
              </div>
            </div>
          </SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default BannerSlider;
