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
            width={300}
            height={100}
            className="w-48 md:w-64 lg:w-80 xl:w-96 flex-shrink-0"
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
          {/* Background Image */}
          <div className="absolute inset-0 z-0 w-screen left-1/2 -translate-x-1/2">
            <Image
              src="/innerpage-farming/farming.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Geometric Shapes */}
          <div className="absolute inset-0 z-5 overflow-hidden">
            {/* Floating Circles */}
            <div className="absolute top-10 left-10 w-20 h-20 lg:w-32 lg:h-32 bg-green-500/20 rounded-full blur-sm animate-float"></div>
            <div className="absolute bottom-20 right-16 w-16 h-16 lg:w-24 lg:h-24 bg-yellow-500/15 rounded-full blur-sm animate-float-delayed"></div>

            {/* Diagonal Lines Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 scale-150"></div>
            </div>

            {/* Hexagon Grid */}
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
              <div className="w-full h-full bg-hexagon-pattern bg-cover"></div>
            </div>
          </div>

          {/* Main Content Container with Shape Background */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
             initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Speech Bubble Shape */}
              <div className="relative bg-white/10  rounded-3xl p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-green-400 rounded-tl-lg"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-green-400 rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-green-400 rounded-bl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-green-400 rounded-br-lg"></div>

                {/* Pointer Arrow */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/20"></div>

                <div className="text-center relative z-20">
                  {/* Title with decorative lines */}
                  <div className="flex items-center justify-center ">
                    <div className="w-12 h-px bg-green-400/60 mr-4"></div>

                    <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight text-white">
                      Integrated Farming & Food Production
                    </span>

                    <div className="w-12 h-px bg-green-400/60 ml-4"></div>
                  </div>

                  {/* Description in rounded badge style */}
                  <div className="inline-block     ">
                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg font-light mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-white leading-relaxed">
                      Nestled in the biodiverse hills of Kerala, Able Farms Pvt.
                      Ltd. is a model of integrated, sustainable agriculture. We
                      focus on creating a synergistic ecosystem that delivers
                      fresh, high-quality produce to the local and regional
                      market.
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  {/* <div className="flex justify-center space-x-3 mt-8">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse delay-150"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse delay-300"></div>
          </div> */}
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-xl">🍃</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pt-8 md:pt-20 lg:pt-20 ">
          {/* Mobile: Horizontal Scroll */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            <div className="flex-none w-50 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Reduced image height for mobile */}
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/animal-husbandry.jpg"
                  alt="Animal Husbandry"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Fixed height content section */}
              <div className="bg-black px-4 md:px-6 py-4 h-30 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-4"
            >     <h2 className="text-white text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-2">
                  Animal Husbandry
                </h2></motion.div>
                <p className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Ethical rearing of poultry (hens, ducks) for eggs and meat,
                  and buffalo for dairy production.
                </p>
              </div>
            </div>

            <div className="flex-none w-50 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/vegetable-cultivation.jpg"
                  alt="Organic Vegetable Cultivation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black px-4 md:px-6 py-4 h-30 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-4"
            >     <h2 className="text-white text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-2">
                  Organic Vegetable Cultivation
                </h2></motion.div>
                <p className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Cultivating rice and other staple crops, supporting local food
                  sovereignty and celebrating traditional Keralan farming
                  heritage.
                </p>
              </div>
            </div>

            <div className="flex-none w-50 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/crop-production.jpg"
                  alt="Staple Crop Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black px-4 md:px-6 py-4 h-30 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                  <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-4"
            >   <h2 className="text-white text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-2">
                  Staple Crop Production
                </h2>
                </motion.div>
                <p className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
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
        <div className="relative py-16 md:py-24 lg:py-32 overflow-hidden w-full left-1/2 -translate-x-1/2 ">
          <div className="absolute inset-0 z-0 w-screen left-1/2 -translate-x-1/2">
            <Image
              src="/innerpage-farming/coffee-cultivation.jpg"
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
                  Premium Coffee Cultivation & Export
                </span>
              </div>

              <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block   mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-white">
                Through our newly incorporated entity, P.Y Able Construction &
                Engineering Co. Ltd, we are leveraging Uganda&apos;s ideal
                equatorial climate and rich volcanic soil to enter the global
                coffee market. Our focus is on establishing a large-scale,
                professionally managed coffee plantation.
              </p>
            </motion.div>
          </div>
        </div>


     <div className="pt-8 md:pt-20 lg:pt-20 ">
          {/* Mobile: Horizontal Scroll */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            <div className="flex-none w-50 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Reduced image height for mobile */}
              <div className="relative h-48 md:h-64 w-full">
                <img
                 src="/innerpage-farming/focus-quality.jpg"
                  alt="Animal Husbandry"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Fixed height content section */}
              <div className="bg-black px-4 md:px-6 py-4 h-30 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
               <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-4"
            >
               <h2 className="text-white text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-2">
                  Focus on Quality
                </h2>
              </motion.div>
               
                <p className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Dedicated to cultivating high-yield, high-quality Arabica and
                Robusta beans suitable for the international export market.
                </p>
              </div>
            </div>

            <div className="flex-none w-50 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/sustainable-and-ethical-practice.jpg"
                  alt="Organic Vegetable Cultivation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black px-4 md:px-6 py-4 h-30 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
              
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-4"
            >  <h2 className="text-white text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-2">
                  Sustainable & Ethical Practices
                </h2>
                </motion.div>
                <p className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
                  Committed to sustainable land management, fair labor practices,
                and contributing positively to the local Ugandan economy.
                </p>
              </div>
            </div>

            <div className="flex-none w-50 md:w-auto md:flex-1 bg-white overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="/innerpage-farming/export-oriented.jpg"
                  alt="Staple Crop Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black px-4 md:px-6 py-4 h-30 sm:h-40 md:h-60 lg:h-auto flex flex-col justify-center">
                 <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-4"
            >    <h2 className="text-white text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[16px] font-semibold mb-2">
                  Export-Oriented
                </h2>
                </motion.div>
                <p className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] opacity-90 leading-relaxed line-clamp-4">
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
      </section>
    </div>
  );
}

export default OurAgriculturalDivisions;
