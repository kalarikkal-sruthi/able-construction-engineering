"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
function OurCoreTradingDivisions() {
  const divisions = [
    {
      id: 1,
      title: "Safety Products",
      description:
        "Comprehensive personal protective equipment (PPE) from Bodyguard and Timco Safety",
      imageUrl: "/innerpage-trading/safety-products.webp",
    },
    {
      id: 2,
      title: "Fasteners",
      description:
        "A full range of TIMCO and PATTA® fasteners, adhesives, and general hardware",
      imageUrl: "/innerpage-trading/fasteners.webp",
    },
    {
      id: 3,
      title: "Sanitary Ware",
      description: "Elegant and durable solutions from Acsent",
      imageUrl: "/innerpage-trading/sanitery-wares.webp",
    },
    {
      id: 4,
      title: "Painting Tools",
      description: "Brushes, rollers, and accessories from National and ZIO",
      imageUrl: "/innerpage-trading/painting-tools.webp",
    },
    {
      id: 5,
      title: "Durable Hand & Power Tools",
      description: "Professional-grade tools from Patta and TIMCO",
      imageUrl: "/innerpage-trading/powertools.webp",
    },
    {
      id: 6,
      title: "Adhesives",
      description:
        "High-quality adhesives for construction and industrial applications",
      imageUrl: "/innerpage-trading/adhesives.webp",
    },
    {
      id: 7,
      title: "Hardware & Building Materials",
      description: "Comprehensive range of hardware and construction materials",
      imageUrl: "/innerpage-trading/hardware-building-meterial.webp",
    },
    {
      id: 8,
      title: "Electricals",
      description: "From wiring and conduits to geotextiles and tarpaulins",
      imageUrl: "/innerpage-trading/electricals.webp",
    },
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((division) => (
            <div
              key={division.id}
              className="group relative  overflow-hidden cursor-pointer  transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={division.imageUrl}
                  alt={division.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/30 transition-all duration-500"></div>

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
                  <div className="bg-black/40  mx-16 w-full  min-h-[150px] flex flex-col items-center justify-center">
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-bold mb-0 text-center">
                      {division.title}
                    </h3>

                    <p className="text-white/90 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] leading-relaxed text-center">
                      {division.description}
                    </p>
                  </div>
                </motion.div>

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
