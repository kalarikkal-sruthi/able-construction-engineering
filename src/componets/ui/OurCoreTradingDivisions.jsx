"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
function OurCoreTradingDivisions() {
const divisions = [
  {
    id: 1,
    title: "Safety Products",
    description: "Comprehensive personal protective equipment (PPE) ensuring workplace safety and compliance",
    imageUrl: "/innerpage-trading/safety-products.jpg",
  },
  {
    id: 2,
    title: "Fasteners",
    description: "Complete range of TIMCO and PATTA® fasteners for secure and reliable construction solutions",
    imageUrl: "/innerpage-trading/fasteners.jpg",
  },
  {
    id: 3,
    title: "Sanitary Ware",
    description: "Elegant Acsent solutions combining modern design with exceptional durability",
    imageUrl: "/innerpage-trading/sanitery-wares.jpg",
  },
  {
    id: 4,
    title: "Painting Tools",
    description: "Premium National and ZIO brushes and rollers for professional painting results",
    imageUrl: "/innerpage-trading/painting-tools.jpg",
  },
  {
    id: 5,
    title: "Durable Hand & Power Tools",
    description: "Professional-grade Patta and TIMCO tools built for performance and longevity",
    imageUrl: "/innerpage-trading/powertools.jpg",
  },
  {
    id: 6,
    title: "Adhesives",
    description: "High-quality bonding solutions for construction and industrial applications",
    imageUrl: "/innerpage-trading/adhesives.jpg",
  },
  {
    id: 7,
    title: "Hardware & Building Materials",
    description: "Comprehensive selection of essential construction components and materials",
    imageUrl: "/innerpage-trading/hardware-building-meterial.jpg",
  },
  {
    id: 8,
    title: "Electricals",
    description: "Complete electrical supplies from basic wiring to advanced conduits and geotextiles",
    imageUrl: "/innerpage-trading/electricals.jpg",
  }
];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-8 md:py-20 lg:py-20 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Heading */}
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
            <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none-2 text-black ">
              Our Core Trading Divisions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black"
          >
            We are a master distributor and retailer for a comprehensive
            portfolio of leading international brands, offering everything a
            project needs from ground-breaking to finishing touches.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {divisions.map((division) => (
            <div
              key={division.id}
              className="group relative  overflow-hidden cursor-pointer  transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={division.imageUrl}
                  alt={division.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Light Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/30 transition-all duration-500"></div>
                {/* Content with Black Background - Appears on Scroll */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-4 lg:px-6 xl:px-6 py-6 sm:py-10 lg:py-14 xl:py-14 text-white"
                >
                  {/* Black Background Container */}
                  <div className="bg-black/40 px-4 sm:px-6 lg:px-6 xl:px-6 py-6 sm:py-10 lg:py-14 xl:py-14 w-full max-w-xs mx-auto ">
                    {/* Title */}
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold mb-0 text-center">
                      {division.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] leading-relaxed text-center">
                      {division.description}
                    </p>
                  </div>
                </motion.div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurCoreTradingDivisions;
