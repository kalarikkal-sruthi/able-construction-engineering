"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import StatsGrid from "@/componets/ui/Counter";
import TwoByTwoStatsGrid from "@/componets/ui/Counter";
function page() {
  
  const businessVerticals = [
    {
      title: "Construction",
      icon: "🏗️",
      image: "/apartments/construction1.jpg",
      description:
        "Comprehensive civil engineering and infrastructure development services",
      highlights: [
        "Earth Works & Excavation",
        "Road & Bridge Construction",
        "Pipeline & Drainage Systems",
        "RCC Structures & Buildings",
      ],
    },
    {
      title: "Trading",
      icon: "📦",
      image: "/apartments/trading1.jpg",
      description:
        "Wholesale and retail distribution of building materials and industrial supplies",
      highlights: [
        "Building Materials Supply",
        "Power & Hand Tools",
        "Safety Equipment",
        "Industrial Hardware",
      ],
    },
    {
      title: "Agribusiness",
      icon: "🌱",
      image: "/apartments/agriculture.jpg",
      description:
        "Sustainable farming and integrated food production in Kerala and  Uganda",
      highlights: [
        "Integrated Farming Systems",
        "Fresh Produce Supply",
        "Sustainable Practices",
        "Local Market Focus",
      ],
    },
  ];

  // Construction Services data
  const constructionServices = [
    {
      title: "Earth Works",
      icon: "🏗️",
      items: [
        "Excavation & Embankment filling",
        "Processing of materials",
        "Mass excavation works",
        "Rock excavation & slope dressing",
      ],
    },
    {
      title: "RCC Works",
      icon: "🏢",
      items: [
        "Construction of tunnels",
        "Retaining walls & RO plant tanks",
        "Sewage treatment plants",
        "Box culverts & substations",
      ],
    },
    {
      title: "Road Works",
      icon: "🛣️",
      items: [
        "Laying of sub base & wet mix",
        "BM & BC road construction",
        "Slope dressing & trimming",
        "Ditches and drain formation",
      ],
    },
    {
      title: "Bridge Works",
      icon: "🌉",
      items: [
        "Bridge construction",
        "Piling works",
        "Precast concrete",
        "Excavation support",
      ],
    },
    {
      title: "Pipeline Works",
      icon: "📏",
      items: [
        "GRP, GRE, FC, RCC pipe laying",
        "Water supply & sewerage networks",
        "Storm water drainage",
        "Valve chambers & thrust blocks",
      ],
    },
    {
      title: "Duct Installation",
      icon: "🔌",
      items: [
        "Airfield ground lighting",
        "Special electronics cable systems",
        "Fire hydrant pipes",
        "Chilled water pipelines",
      ],
    },
  ];

  // Countries data
  const countries = [
    {
      name: "United Arab Emirates",
      flag: "🇦🇪",
      companies: "3",
      established: "2006",
    },
    {
      name: "Qatar",
      flag: "🇶🇦",
      companies: "4",
      established: "1996",
    },
    {
      name: "Oman",
      flag: "🇴🇲",
      companies: "2",
      established: "2008",
    },
    {
      name: "India",
      flag: "🇮🇳",
      companies: "3",
      established: "2007",
    },
  ];
  return (
    <div className="">
      <section className="relative h-[100vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/aboutus/meeting.jpg"
              alt="Able Group - Construction, Trading & Agribusiness"
              fill
              className="object-cover scale-110 parallax-zoom"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full text-center mb-8"
              >
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <span className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    About Us
                  </span>
                </div>
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <span className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                    Construction • Trading • Agribusiness
                  </span>
                </div>
              </motion.h1>

              {/* Stats Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 items-center"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-[calc(50%-8px)] md:w-auto h-12 md:h-auto flex items-center justify-center rounded-full px-4 py-1 md:px-6 md:py-2 border border-white-400/30"
                >
                  <span className="text-white text-[12px] lg:text-[16px] xl:text-[16px] font-semibold text-center">
                    Est. 1992
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-[calc(50%-8px)] md:w-auto h-12 md:h-auto flex items-center justify-center rounded-full px-4 py-1 md:px-6 md:py-2 border border-white-400/30"
                >
                  <span className="text-white text-[12px] lg:text-[16px] xl:text-[16px] font-semibold text-center">
                    20+ Years Experience
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-[calc(50%-8px)] md:w-auto h-12 md:h-auto flex items-center justify-center rounded-full px-4 py-1 md:px-6 md:py-2 border border-white-400/30"
                >
                  <span className="text-white text-[12px] lg:text-[16px] xl:text-[16px] font-semibold text-center">
                    3 Business Verticals
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="w-[calc(50%-8px)] md:w-auto h-12 md:h-auto flex items-center justify-center rounded-full px-4 py-1 md:px-6 md:py-2 border border-white-400/30"
                >
                  <span className="text-white text-[12px] lg:text-[16px] xl:text-[16px] font-semibold text-center">
                    International Presence
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="animate-bounce"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black">
                Building Excellence Since 1992
              </h2>
              <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
                Able Group is a diversified business conglomerate operating for
                over 20 years across India and the Middle East. With strong
                management capabilities, we excel in three core business
                verticals: Construction, Trading, and Agribusiness.
              </p>
            </motion.div>
          </motion.div>
          <TwoByTwoStatsGrid />
        </div>
      </section>
      <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
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
                Mission
              </span>
            </motion.h1>
            <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
              To deliver exceptional civil engineering and construction services
              through innovative solutions, unwavering commitment to quality,
              and strict adherence to health, safety, and environmental
              standards. We strive to exceed client expectations by executing
              complex infrastructure projects with precision, within stipulated
              timelines and budgets, while fostering sustainable growth and
              community development.
            </p>
          </div>
          <div>
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
                Vision
              </span>
            </motion.h1>
            <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
              To be the premier global construction and trading conglomerate,
              recognized for excellence in infrastructure development,
              technological innovation, and client satisfaction. We aspire to
              expand our international footprint while maintaining our core
              values of professionalism, quality craftsmanship, and sustainable
              business practices across all our operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16 ">
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
              Our Business Verticals
            </span>
          </motion.h1>
          {/* Alternative Shorter Introduction */}

          <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
            Three pillars of excellence driving our growth and success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {businessVerticals.map((vertical, index) => (
            <div
              key={vertical.title}
              className="relative h-100 md:h-150 overflow-hidden group "
            >
              {/* Image */}
              <img
                src={vertical.image || `/apartments/apartment${index + 1}.jpg`}
                alt={vertical.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-all duration-500"></div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="absolute inset-0 flex items-end justify-center p-6"
              >
                <div className="text-white text-start w-full">
                  {/* Number */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="text-3xl md:text-6xl font-light text-white text-opacity-80 mb-2"
                  >
                    0{index + 1}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide  leading-none-2 text-white"
                  >
                    {vertical.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="text-white text-opacity-90 mb-4 text-sm leading-relaxed"
                  >
                    {vertical.description}
                  </motion.p>

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    className="space-y-2"
                  >
                    {vertical.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="text-white text-opacity-80 text-xs py-1 border-b border-white border-opacity-20 last:border-b-0"
                      >
                        {highlight}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
       
      </section>

      {/* Leadership Section */}
      <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16 bg-gray-100 ">
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
              Our Leadership
            </span>
          </motion.h1>
          {/* Alternative Shorter Introduction */}

          <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black ">
            Guided by visionary leadership across all business verticals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Chairman */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-4 md:p-8 border transition-all duration-300"
          >
            <div className="flex flex-row md:flex-col lg:flex-col xl:flex-row items-center gap-4 md:gap-6">
              {/* Image Section - Left */}
              {/* <div className="flex-shrink-0">
                <div className="overflow-hidden   shadow-md">
                  <Image
                    src="/aboutus/person1.webp"
                    alt="Mr. Yakkoob Purayil"
                    width={240}
                    height={320}
                    className=" w-40 h-52 
        sm:w-40 sm:h-52 
        md:w-40 md:h-52 
        lg:w-60 lg:h-80 
   
        object-cover"
                  />
                </div>
              </div> */}

              {/* Content Section - Right */}
              <div className="flex-1 text-start">
                <h3 className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide  leading-none-2 text-black">
                  Mr. Yakkoob Purayil
                </h3>
                <div className="w-16 h-0.5 bg-gray-400 mx-0 mb-4"></div>
                <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
                  Chairman & Founder
                </p>
                <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
                  Visionary leader with 45+ years of experience in construction
                  and trading across GCC countries and India. Founded Able Group
                  in 1992 and expanded operations globally.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white  border transition-all duration-300"
          >
            <div className="flex p-4 md:p-8 flex-row md:flex-col lg:flex-col xl:flex-row items-center gap-4 md:gap-6">
              {/* Image Section - Left */}
              {/* <div className="flex-shrink-0">
                <div className="overflow-hidden   shadow-md">
                  <Image
                    src="/aboutus/person1.webp"
                    alt="Mr. Yakkoob Purayil"
                    width={240}
                    height={320}
                    className=" w-40 h-52 
        sm:w-40 sm:h-52 
        md:w-40 md:h-52 
        lg:w-60 lg:h-80 
   
        object-cover"
                  
                  />
                </div>
              </div> */}

              {/* Content Section - Right */}
              <div className="flex-1 text-start">
                <h3 className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide  leading-none-2 text-black">
                  Muhammed Basheer
                </h3>
                <div className="w-16 h-0.5 bg-gray-400 mx-0 mb-4"></div>
                <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
                  Managing Director
                </p>
                <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
                  Visionary leader with 45+ years of experience in construction
                  and trading across GCC countries and India. Founded Able Group
                  in 1992 and expanded operations globally.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white  border transition-all duration-300"
          >
            <div className="flex p-4 md:p-8 flex-row md:flex-col lg:flex-col xl:flex-row items-center gap-4 md:gap-6">
              {/* Image Section - Left */}
              {/* <div className="flex-shrink-0">
                <div className="overflow-hidden   shadow-md">
                  <Image
                   src="/aboutus/person1.webp"
                    alt="Mr. Yakkoob Purayil"
                    width={240}
                    height={320}
                    className=" w-40 h-52 
        sm:w-40 sm:h-52 
        md:w-40 md:h-52 
        lg:w-60 lg:h-80 
   
        object-cover "
                   
                  />
                </div>
              </div> */}

              {/* Content Section - Right */}
              <div className="flex-1 text-start">
                <h3 className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide  leading-none-2 text-black">
                  Mr. Ishaque Purayil
                </h3>
                <div className="w-16 h-0.5 bg-gray-400 mx-0 mb-4"></div>
                <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
                  Director
                </p>
                <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mt-2 md:mt-3 sm:mt-2mb-4 md:mb-8 sm:mb-3 text-black">
                  Visionary leader with 45+ years of experience in construction
                  and trading across GCC countries and India. Founded Able Group
                  in 1992 and expanded operations globally.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Global Footprint
              </h2>
              <p className="text-xl text-blue-200">
                Operating across multiple countries with diversified business
                operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{country.flag}</div>
                  <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                  <p className="text-blue-200">{country.companies} Companies</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Since {country.established}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-blue-100"
            >
              Whether it's construction, trading, or agriculture - let's build
              success together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                View Our Work
              </button>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default page;
