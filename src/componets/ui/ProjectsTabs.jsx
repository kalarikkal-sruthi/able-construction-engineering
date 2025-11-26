"use client"
import { useState } from 'react';
import { motion } from "framer-motion";
export default function ProjectsTabs() { // Changed to uppercase P
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'UAE', content: 'UAE Projects...' },
    { name: 'Qatar', content: 'Qatar Projects...' },
    { name: 'Oman', content: 'Oman Projects...' },
    { name: 'India', content: 'India Projects...' },
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
      <div className="flex space-x-1 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-3 px-6 font-medium text-sm rounded-t-lg transition-all duration-200 ${
              activeTab === index
                ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-white rounded-b-lg shadow">
        {tabs[activeTab].content}
      </div>
    </div>
    </div>
    </section>
  );
}