"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Counter from "@/componets/ui/Counter";
function page() {
  // Services data
  // Services data including agribusiness
  // Business Verticals data
  const businessVerticals = [
    {
      title: "Construction",
      icon: "🏗️",
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
      description:
        "Sustainable farming and integrated food production in Kerala",
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
              src="/innerpage-farming/crops-field.jpg"
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

      {/* <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Business Verticals
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Three pillars of excellence driving our growth and success
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {businessVerticals.map((vertical, index) => (
          <motion.div
            key={vertical.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-white p-8 group hover:bg-gray-50 transition-all duration-300 border-l-4 border-gray-900"
          >
            <div className="text-2xl font-light text-gray-400 mb-4">0{index + 1}</div>
            
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              {vertical.title}
            </h3>
            
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {vertical.description}
            </p>
            
            <div className="space-y-2">
              {vertical.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="text-gray-500 text-sm py-1 border-b border-gray-100 last:border-b-0"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section> */}

      {/* Introduction Section */}
      <section className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

            <div className="space-y-3">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-600 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-gray-700 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                  Complex construction project execution
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-600 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-gray-700 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                  Comprehensive trading and supply chain
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-600 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-gray-700 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
                  Sustainable agricultural practices
                </span>
              </div>
            </div>
          </motion.div>
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative"
>
  <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 text-white border border-gray-600">
    <h3 className="text-2xl font-bold mb-4 text-white">Our Global Presence</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center">
        <Counter value={20} suffix="+" />
        <div className="text-sm text-gray-300 mt-1">Years Experience</div>
      </div>
      <div className="text-center">
        <Counter value={4} />
        <div className="text-sm text-gray-300 mt-1">Countries</div>
      </div>
      <div className="text-center">
        <Counter value={3} />
        <div className="text-sm text-gray-300 mt-1">Business Verticals</div>
      </div>
      <div className="text-center">
        <Counter value={300} suffix="+" />
        <div className="text-sm text-gray-300 mt-1">Team Members</div>
      </div>
    </div>
  </div>
</motion.div>
        </div>
      </section>

      {/* Agribusiness Focus Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Able Farms Pvt. Ltd.
                  </h3>
                  <p className="mb-4">
                    Our agricultural division focuses on sustainable farming
                    practices and integrated food production in the biodiverse
                    hills of Kerala.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Integrated sustainable agriculture</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Fresh, high-quality produce</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Local and regional market focus</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Synergistic ecosystem creation</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Sustainable Agribusiness
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Able Farms represents our commitment to sustainable
                  agriculture and food production. Nestled in the biodiverse
                  hills of Kerala, we focus on creating synergistic ecosystems
                  that deliver fresh, high-quality produce to local and regional
                  markets.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">🌱</div>
                    <div className="font-semibold text-green-800">Organic</div>
                    <div className="text-sm text-green-600">Practices</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">🌍</div>
                    <div className="font-semibold text-green-800">
                      Sustainable
                    </div>
                    <div className="text-sm text-green-600">Ecosystem</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">🏞️</div>
                    <div className="font-semibold text-green-800">Kerala</div>
                    <div className="text-sm text-green-600">Location</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">📈</div>
                    <div className="font-semibold text-green-800">Growth</div>
                    <div className="text-sm text-green-600">Focused</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Leadership Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Leadership
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Guided by visionary leadership across all business verticals
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-white">👑</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mr. Yakkoob Purayil
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    Chairman & Founder
                  </p>
                  <p className="text-gray-600 text-sm">
                    With over 30 years of experience across construction,
                    trading, and agriculture, Mr. Purayil has successfully
                    expanded the group&apos;s operations globally.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-white">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mr. Muhammad Basheer
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">CEO</p>
                  <p className="text-gray-600 text-sm">
                    Leading the technical front with vast experience in
                    construction engineering and successful project performance
                    across various government departments.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-white">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mr. Ishaque Purayil
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    Board Director
                  </p>
                  <p className="text-gray-600 text-sm">
                    Bringing technical expertise and strategic vision to drive
                    the company&apos;s growth across all business verticals
                    including agribusiness.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section - Construction Focus */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Construction Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive civil engineering and infrastructure solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {constructionServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Trading Business Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Trading Division
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our trading operations span across multiple countries,
                  providing comprehensive supply chain solutions for
                  construction and industrial needs.
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Building Materials
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Wholesale and retail distribution of construction
                      materials
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Industrial Supplies
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Power tools, safety equipment, and industrial hardware
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Fuel & Energy
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diesel trading and energy solutions for commercial sectors
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Trading Operations</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Building Materials Retail</span>
                    <span className="font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Hardware Wholesale</span>
                    <span className="font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Power Tools Distribution</span>
                    <span className="font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Safety Products</span>
                    <span className="font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sanitary Ware</span>
                    <span className="font-bold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Diesel Trading</span>
                    <span className="font-bold">✓</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

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
