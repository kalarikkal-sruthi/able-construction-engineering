"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function OurAgriculturalDivisions() {
  return (
    <div>
      <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col  items-start justify-start">
          <Image
            src="/innerpage-farming/able-farm-logo.webp"
            alt="Able Farm Logo"
            width={200}
            height={100}
            className="w-30 md:w-40 lg:w-40 xl:w-60 flex-shrink-0"
            priority
          />
        </div>
        <div className="text-start mt-4 mb-4 md:mb-8">
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
              Our Agricultural Divisions
            </span>
          </motion.h1>
        </div>
<div className="relative py-16 md:py-24 lg:py-32 overflow-hidden w-full left-1/2 -translate-x-1/2">
  {/* Background Image with Split Overlay */}
  <div className="absolute inset-0 z-0 w-screen left-1/2 -translate-x-1/2">
    <Image
      src="/innerpage-farming/farming.jpg"
      alt="Background"
      fill
      className="object-cover"
      priority
    />
    {/* Split overlay - dark left, lighter right */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
  </div>

  {/* Text on Black Background Area */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Text on Dark Background */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        <h2 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-white">
         Integrated Farming <br /> & Food Production
        </h2>
        <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-white">
    Nestled in the biodiverse hills of Kerala, Able Farms Pvt. Ltd. is a model of integrated, sustainable agriculture. We focus on creating a synergistic ecosystem that delivers fresh, high-quality produce to the local and regional market. </p>
  
      </motion.div>

      {/* Right Side - Your Existing Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Your existing speech bubble content */}
      </motion.div>
    </div>
  </div>
</div>
        <div className="pt-8 md:pt-20 lg:pt-20 ">
          {/* Mobile: Horizontal Scroll */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            <div className="flex-none w-65 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Reduced image height for mobile */}
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/animal-husbandry.jpg"
                  alt="Animal Husbandry"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Fixed height content section */}
              <div className="bg-black px-4 md:px-6 py-4 h-35 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {" "}
                  <h2 className="text-white text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-0">
                    Animal Husbandry
                  </h2>
                </motion.div>
                <p className="text-white text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Ethical rearing of poultry (hens, ducks) for eggs and meat,
                  and buffalo for dairy production.
                </p>
              </div>
            </div>

            <div className="flex-none w-65 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/vegetable-cultivation.jpg"
                  alt="Organic Vegetable Cultivation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black px-4 md:px-6 py-4 h-35 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {" "}
                  <h2 className="text-white text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-0">
                    Organic Vegetable Cultivation
                  </h2>
                </motion.div>
                <p className="text-white text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Cultivating rice and other staple crops, supporting local food
                  sovereignty and celebrating traditional Kerala farming
                  heritage.
                </p>
              </div>
            </div>

            <div className="flex-none w-65 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/crop-production.jpg"
                  alt="Staple Crop Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black px-4 md:px-6 py-4 h-35 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {" "}
                  <h2 className="text-white text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-0">
                    Staple Crop Production
                  </h2>
                </motion.div>
                <p className="text-white text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Ethical rearing of poultry (hens, ducks) for eggs and meat,
                  and buffalo for dairy production.
                </p>
              </div>
            </div>
          </div>

          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .line-clamp-4 {
              display: -webkit-box;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}</style>
        </div>
      </section>
      <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" lg:text-left"
          >
            <div className="mb-3 sm:mb-4 lg:mb-6">
              <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black">
                Premium Coffee
                <br></br>
                Cultivation & Export
              </span>
            </div>

            <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
              Through our newly incorporated entity, P.Y Able Construction &
              Engineering Co. Ltd, we are leveraging Uganda&apos;s ideal
              equatorial climate and rich volcanic soil to enter the global
              coffee market. Our focus is on establishing a large-scale,
              professionally managed coffee plantation.
            </p>
          </motion.div>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-64 lg:h-96 overflow-hidden"
          >
            <Image
              src="/innerpage-farming/coffee-cultivation.jpg"
              alt="Coffee Cultivation"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <div className="pt-8 md:pt-20 lg:pt-20 ">
          {/* Mobile: Horizontal Scroll */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            <div className="flex-none w-65 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Reduced image height for mobile */}
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/focus-quality.jpg"
                  alt="Animal Husbandry"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Fixed height content section */}
              <div className="bg-black px-4 md:px-6 py-4 h-35 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-white text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-0">
                    Focus on Quality
                  </h2>
                </motion.div>

                <p className="text-white text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Dedicated to cultivating high-yield, high-quality Arabica and
                  Robusta beans suitable for the international export market.
                </p>
              </div>
            </div>

            <div className="flex-none w-65 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/sustainable-and-ethical-practice.jpg"
                  alt="Organic Vegetable Cultivation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black px-4 md:px-6 py-4 h-35 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {" "}
                  <h2 className="text-white text-[14px] sm:text-[12px] lg:text-[16px] xl:text-[16px] font-semibold mb-0">
                    Sustainable & Ethical Practices
                  </h2>
                </motion.div>
                <p className="text-white text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Committed to sustainable land management, fair labor
                  practices, and contributing positively to the local Ugandan
                  economy.
                </p>
              </div>
            </div>

            <div className="flex-none w-65 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/export-oriented.jpg"
                  alt="Staple Crop Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black px-4 md:px-6 py-4 h-35 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {" "}
                  <h2 className="text-white text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-0">
                    Export-Oriented
                  </h2>
                </motion.div>
                <p className="text-white text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Our core mission is to become a reliable source of premium
                  Ugandan coffee for international buyers.
                </p>
              </div>
            </div>
          </div>

          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .line-clamp-4 {
              display: -webkit-box;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}</style>
        </div>
      </section>

      <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" lg:text-left"
          >
            <div className="mb-3 sm:mb-4 lg:mb-6">
              <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black">
                Our Philosophy
                <br></br>& Commitment
              </span>
            </div>

            <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
              We operate on the principle that responsible business and
              environmental stewardship go hand-in-hand. Our farms are managed
              to enhance biodiversity, conserve water, and ensure the well-being
              of the communities we operate in. We are committed to delivering
              not just produce, but trust and quality from our lands to your
              hands.
            </p>
          </motion.div>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-64 lg:h-96 overflow-hidden"
          >
            <Image
              src="/innerpage-farming/philosophy-commitment.jpg"
              alt="Coffee Cultivation"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>
      {/* <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16 ">
        <div className="relative py-16 md:py-24 lg:py-32 overflow-hidden w-full left-1/2 -translate-x-1/2 ">
          <div className="absolute inset-0 z-0 w-screen left-1/2 -translate-x-1/2">
            <Image
              src="/innerpage-farming/philosophy-commitment.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <div className="mb-3 sm:mb-4 lg:mb-6">
                <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight text-white">
                  Our Philosophy & Commitment
                </span>
              </div>

              <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block   mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-white">
                We operate on the principle that responsible business and
                environmental stewardship go hand-in-hand. Our farms are managed
                to enhance biodiversity, conserve water, and ensure the
                well-being of the communities we operate in. We are committed to
                delivering not just produce, but trust and quality from our
                lands to your hands.
              </p>
            </motion.div>
          </div>


        </div>
      </section> */}
    </div>
  );
}

export default OurAgriculturalDivisions;
