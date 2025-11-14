import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Building,
  Route, // Changed from Road to Route
  Warehouse,
} from "lucide-react";
import Image from "next/image";

function KeyServices() {
  const services = [
    {
      icon: Truck,
      title: "Earthworks & Infrastructure",
      description:
        "Mass excavation, embankment filling, and site development for any scale, powered by our fleet of CAT and Komatsu equipment.",
      shade: "bg-gray-900", // First box - black
      backgroundImage:"/innerpage-construction/earth-work.jpg",
    }
,
    {
      icon: Warehouse,
      title: "RCC & Civil Structures",
      description:
        "Specialists in complex structures including bridges, box culverts, sewage treatment plants, water tanks, and airport infrastructures.",
      shade: "bg-gray-800", // Second box - less shade
       backgroundImage:"/innerpage-construction/rcc.jpg"
    },
    {
      icon: Route,
      title: "Road Works",
      description:
        "Building and improving highways and carriageways, from sub-base preparation to final surface finishing, often in joint ventures with top asphalt specialists.",
      shade: "bg-gray-700", // Third box - less than less shade
      backgroundImage:"/innerpage-construction/road-work.jpg"
    },
    {
      icon: Building,
      title: "Building Construction",
      description:
        "Constructing robust and modern apartments, commercial buildings, and government facilities, with a strong ongoing presence in Uganda and India.",
      shade: "bg-gray-600", // Fourth box - least shade
       backgroundImage:"/innerpage-construction/building-construction.jpg"
    },
  ];
  return (
    <div>
      <section className="py-8 md:py-20 lg:py-20  ">
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
                Our Key Services
              </span>
            </motion.h1>
            {/* Alternative Shorter Introduction */}

            <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
              Explore a curated collection of our landmark projects. Each one is
              a testament to the scale, innovation, and uncompromising quality
              we deliver, setting new standards in every market we enter.
            </p>
          </div>
          {/* 
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 items-start"> */}
          {/* Content Column - spans 2 of 5 columns on desktop (40%) */}
          <div className="flex flex-col justify-start space-y-6 lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
<div
  key={index}
  className="relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:-translate-y-2 text-white h-full"
>
  {/* Background Image with Gradient */}
  <div className="absolute inset-0">
    <Image
      src={service.backgroundImage}
      alt={service.title}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-black/70 group-hover:from-gray-900/70 group-hover:via-gray-900/50 group-hover:to-black/60 transition-all duration-300"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-8 py-6 sm:py-10 lg:py-14 xl:py-14 flex flex-col items-center text-center h-full justify-center">
    <div className="w-12 sm:w-14 lg:w-16 xl:w-16 h-12 sm:h-14 lg:h-16 xl:h-16 bg-black bg-opacity-20 rounded-full flex items-center justify-center mb-4 group-hover:bg-black group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300">
      <service.icon className="w-6 sm:w-7 lg:w-8 xl:w-8 h-6 sm:h-7 lg:h-8 xl:h-8 text-white" />
    </div>

    <h3 className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-semibold text-white mb-3">
      {service.title}
    </h3>

    <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] text-white text-opacity-90 leading-relaxed">
      {service.description}
    </p>
  </div>
</div>
              ))}
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

export default KeyServices;
