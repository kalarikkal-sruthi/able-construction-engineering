import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Building,
  Route, // Changed from Road to Route
  Warehouse,
} from "lucide-react";

function KeyServices() {
  const services = [
    {
      icon: Truck,
      title: "Earthworks & Infrastructure",
      description:
        "Mass excavation, embankment filling, and site development for any scale, powered by our fleet of CAT and Komatsu equipment.",
      shade: "bg-gray-900", // First box - black
    },
    {
      icon: Warehouse,
      title: "RCC & Civil Structures",
      description:
        "Specialists in complex structures including bridges, box culverts, sewage treatment plants, water tanks, and airport infrastructures.",
      shade: "bg-gray-800", // Second box - less shade
    },
    {
      icon: Route,
      title: "Road Works",
      description:
        "Building and improving highways and carriageways, from sub-base preparation to final surface finishing, often in joint ventures with top asphalt specialists.",
      shade: "bg-gray-700", // Third box - less than less shade
    },
    {
      icon: Building,
      title: "Building Construction",
      description:
        "Constructing robust and modern apartments, commercial buildings, and government facilities, with a strong ongoing presence in Uganda and India.",
      shade: "bg-gray-600", // Fourth box - least shade
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
                  className={`${service.shade} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm-px-6 lg-px-12 xl:px-12    py-6 sm-py-10 lg-py-20 xl:py-20  group hover:transform hover:-translate-y-2 text-white h-full`}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-8 sm-w-12 lg-w-16 xl:w-16  h-8 sm-h-12 lg-h-16 xl:h-16   bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:bg-opacity-30 transition-colors duration-300">
                      <service.icon className="w-4 sm-w-6 lg-w-8 xl:w-8  h-4 sm-h-6 lg-h-8 xl:h-8 text-black" />
                    </div>

                    <h3 className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18x] font-semibold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] text-white text-opacity-90 leading-relaxed">
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
