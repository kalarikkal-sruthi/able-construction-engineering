"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Construction",
      projects: [
        {
          title: "Project K Race Project K race Track (Formula one Grand Prix)",

          location: "UNITED ARAB EMIRATES",

          image: "/modern developments/Yas Island, Abudhabi.webp",
        },
        {
          title: "Project ‘N’ – Water Park at Yas Island",

          location: "UNITED ARAB EMIRATES",

          image: "/gallery/water-park.webp",
        },
        {
          title: "DS 150 – sewage treatment plant",

          location: "UNITED ARAB EMIRATES",

          image: "/gallery/sewage-treatment.webp",
        },
        {
          title: "New Doha International Airport Project",

          location: "QATAR",

          image: "/gallery/doha-international-airport.webp",
        },
        {
          title: "Hamad Port",

          location: "QATAR",

          image: "/gallery/hamad-port.webp",
        },
        {
          title: "Wadi Adai-Al Amerat highway",

          location: "OMAN",

          image: "/gallery/amerat-highway.webp",
        },
        {
          title: "Tsunami Rehabilitation Developent of Beach",

          location: "INDIA",

          image: "/gallery/tsunami.webp",
        },
        {
          title: "Construction of sambarkode Bridge across Siruvani River",

          location: "INDIA",

          image: "/gallery/bridge.webp",
        },
        {
          title: "Renovation of DFO’s Banglow",

          location: "INDIA",

          image: "/gallery/bunglow.webp",
        },
        {
          title:
            "Improvements to the carriage way of Mudappallur Mangalam Dam road",

          location: "INDIA",

          image: "/gallery/mangalam-dam.webp",
        },
        {
          title: "Improvements to Mankavu-Kanniparamba road",

          location: "INDIA",

          image: "/gallery/mankavu-road.webp",
        },
        {
          title:
            "Modernisation of Pudiyappa Fishery Harber Improvements to Fish loading and Parking Areas",

          location: "INDIA",

          image: "/gallery/harber.webp",
        },
        {
          title: "F.C. ASE Works reforming the sea wall",

          location: "INDIA",

          image: "/gallery/sea-wall.webp",
        },
        {
          title:
            "Providing Chipping Carpet to Kappad-Thusharagiri - Adivaram road",

          location: "INDIA",

          image: "/gallery/kappad.webp",
        },
        {
          title: "Construction of Sub registrar Office",

          location: "INDIA",

          image: "/gallery/registrar-office.webp",
        },
        {
          title: "Improvements to Chennalode-Ottupara road",

          location: "INDIA",

          image: "/gallery/chennalod.webp",
        },
        {
          title:
            "Improvements and resurfacing of Thikkodi town-Kodikkal Beach road",

          location: "INDIA",

          image: "/gallery/thikkodi.webp",
        },
        {
          title: " Thannithode – Thekkumthod Plantation Road",

          location: "INDIA",

          image: "/gallery/Thannithod-thekkthod-road.webp",
        },
      ],
    },
    {
      name: "Trading",
      projects: [],
    },
    {
      name: "Agricultural",
      projects: [],
    },
  ];

  return (
    <section className="py-8 md:py-20 lg:py-20">
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
            <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none text-black">
              Our Premier Developments
            </span>
          </motion.h1>

          <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
            Explore a curated collection of our landmark projects. Each one is a
            testament to the scale, innovation, and uncompromising quality we
            deliver, setting new standards in every market we enter.
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap space-x-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-1 px-6 lg:py-2 lg:px-8 mb-2 font-medium text-[12px] rounded-full transition-all duration-200 ${
                  activeTab === index
                    ? "bg-black text-white border-2 border-black"
                    : "text-gray-600 hover:text-gray-900 border-2 border-black"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-2  lg:flex lg:flex-row  lg:flex-wrap gap-4 lg:gap-6 lg:overflow-x-auto pb-4">
              {tabs[activeTab].projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-black rounded-2xl shadow-xl overflow-hidden w-full  lg:w-[calc(33.333%-16px)] lg:flex-shrink-0  p-2 lg:p-4"
                >
                  <div className="w-full h-48 lg:h-75 bg-gray-200 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="text-start">
                      <div className="text-lg sm:text-xl lg:text-2xl font-light font-sans tracking-wide leading-none text-white">
                        {project.organization}
                      </div>
                      <div className="text-[12px] sm:text-[14px] lg:text-[16px] mt-2 text-white">
                        {project.department}
                      </div>
                      <div className="text-[14px] sm:text-[16px] font-medium text-white mt-2">
                        {project.title}
                      </div>
                      <div className="text-[12px] sm:text-[14px] text-gray-300">
                        {project.subtitle}
                      </div>
                      <div className="text-[12px] sm:text-[14px] text-gray-400 mt-1">
                        {project.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
