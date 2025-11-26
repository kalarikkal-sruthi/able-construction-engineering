"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function ProjectsTabs() {
  // Changed to uppercase P
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "UAE", content: "" },
    { name: "Qatar", content: "" },
    { name: "Oman", content: "" },
    { name: "India", content: "" },
  ];

  return (
    <section className="py-8 md:py-20 lg:py-20 ">
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
              Our Premier Developments
            </span>
          </motion.h1>
          {/* Alternative Shorter Introduction */}

          <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
            Explore a curated collection of our landmark projects. Each one is a
            testament to the scale, innovation, and uncompromising quality we
            deliver, setting new standards in every market we enter.
          </p>
        </div>
        <div className="w-full">
          {/* Tab Headers */}
          <div className="flex flex-wrap  space-x-1  ">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-1 px-6 lg:py-2 lg:px-8 mb-2 font-medium text-[12px]  rounded-full transition-all duration-200 ${
                  activeTab === index
                    ? "bg-black text-white border-2 border-black-600"
                    : "text-gray-600 hover:text-gray-900  border-2 border-black"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 flex gap-6 ">
            {tabs[activeTab].content}

            <div className="bg-black rounded-2xl shadow-xl overflow-hidden max-w-sm w-full p-4">
              {/* Image Section */}
              <div className="w-full h-56 bg-gray-200 relative">
                <img
                  src="/modern developments/Yas Island, Abudhabi.jpg" // Replace with your actual image path
                  alt="Real Estate"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="">
                <div className="border-t border-gray-200 my-6"></div>
                <div className="text-start mb-8 flex justify-between">
                  <div className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block   text-white">
                    Real Estate
                  </div>
                  <div className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block   text-white">
                    Riyadh
                  </div>
                  <div className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block   text-white">
                    {" "}
                    917 million SAR
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* KAPSARC Section */}
                <div className="text-start">
                  <div className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide  leading-none-2 text-white">
                    KAPSARC
                  </div>
                  <div className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-white">
                    School of Public Policy
                  </div>
                </div>
              </div>
            </div>
              <div className="bg-black rounded-2xl shadow-xl overflow-hidden max-w-sm w-full p-4">
              {/* Image Section */}
              <div className="w-full h-56 bg-gray-200 relative">
                <img
                  src="/modern developments/Yas Island, Abudhabi.jpg" // Replace with your actual image path
                  alt="Real Estate"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="">
                <div className="border-t border-gray-200 my-6"></div>
                <div className="text-start mb-8 flex justify-between">
                  <div className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block   text-white">
                    Real Estate
                  </div>
                  <div className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block   text-white">
                    Riyadh
                  </div>
                  <div className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block   text-white">
                    {" "}
                    917 million SAR
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* KAPSARC Section */}
                <div className="text-start">
                  <div className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide  leading-none-2 text-white">
                    KAPSARC
                  </div>
                  <div className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-white">
                    School of Public Policy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
