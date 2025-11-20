import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";

function OurBranches() {
  const branches = [
    {
      id: 1,
      image: "/branches/able-group-logo-1.webp",
      name: "Dubai Main Branch",
      location: "Dubai, UAE"
    },
    {
      id: 2,
      image: "/branches/able-group-logo-2.webp",
      name: "Abu Dhabi Office",
      location: "Abu Dhabi, UAE"
    },
    {
      id: 3,
      image: "/branches/able-group-logo-3.webp",
      name: "Doha Center",
      location: "Doha, Qatar"
    },
    {
      id: 4,
      image: "/branches/able-group-logo-4.webp",
      name: "Riyadh Branch",
      location: "Riyadh, KSA"
    },
    {
      id: 5,
      image: "/branches/able-group-logo-5.webp",
      name: "Muscat Office",
      location: "Muscat, Oman"
    },
    {
      id: 6,
      image: "/branches/able-group-logo-6.webp",
      name: "Manama Center",
      location: "Manama, Bahrain"
    },
    {
      id: 7,
      image: "/branches/able-group-logo-7.webp",
      name: "Kuwait City",
      location: "Kuwait City, Kuwait"
    },
    // Adding more branches to have at least 8 for preview
    {
      id: 8,
      image: "/branches/able-group-logo-1.webp",
      name: "Sharjah Office",
      location: "Sharjah, UAE"
    },
    {
      id: 9,
      image: "/branches/able-group-logo-2.webp",
      name: "Al Ain Branch",
      location: "Al Ain, UAE"
    },
    {
      id: 10,
      image: "/branches/able-group-logo-3.webp",
      name: "Fujairah Center",
      location: "Fujairah, UAE"
    },
  ];

  return (
    <section className="py-8 md:py-20 lg:py-20 bg-gray-100">
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
               Our Branches Network
              </span>
            </motion.h1>

            <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
              Building on three decades of global excellence, we are now shaping the future of development. 
              Explore our pioneering projects in construction, sustainable agriculture, and strategic trading—where innovation meets legacy, and new standards are born.
            </p>
          </div>

        {/* Full Width Horizontal Scrolling Swiper */}
        <div className="relative w-full">
          <Swiper
            slidesPerView={6} // Show 8 slides in preview
            spaceBetween={20}
            loop={true}
            speed={5000} // Adjusted speed for better visibility of 8 slides
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 1,
              momentumVelocityRatio: 1,
              sticky: true,
            }}
            centeredSlides={false}
            modules={[Autoplay, FreeMode]}
            className="branches-swiper"
            breakpoints={{
              320: {
                slidesPerView: 3, // 2 slides on mobile
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3, // 3 slides on small tablets
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 5, // 4 slides on tablets
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 5, // 5 slides on larger tablets
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6, // 6 slides on small desktop
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 6, // 8 slides on desktop
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 6, // Maintain 8 slides on large screens
                spaceBetween: 25,
              },
            }}
          >
            {branches.map((branch) => (
              <SwiperSlide key={branch.id}>
                <div className="relative overflow-hidden  shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Branch Info Overlay - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0  to-transparent p-4 text-black">
                    {/* <h3 className="text-sm font-bold mb-1 line-clamp-1">
                      {branch.name}
                    </h3> */}
                    <p className="text-xs opacity-90 flex items-center gap-1">
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

          {/* Gradient Overlays for Better Visual Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

export default OurBranches;