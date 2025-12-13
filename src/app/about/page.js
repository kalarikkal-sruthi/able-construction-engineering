"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import TwoByTwoStatsGrid from "@/componets/ui/Counter";

function AboutUsPage() {
  const businessVerticals = [
    {
      title: "Global Construction & Engineering",
      icon: "🏗️",
      image: "/apartments/construction1.webp",
      description:
        "We are builders of landmark infrastructure, including bridges, highways, airports, and residential apartments, with a proven track record in India, UAE, Qatar, and Oman. Our new venture, P.Y. Able Construction & Engineering Co. Ltd., marks our strategic entry into Uganda's building sector.",
      highlights: [
        "Earth Works & Excavation",
        "Road & Bridge Construction",
        "Pipeline & Drainage Systems",
        "RCC Structures & Buildings",
      ],
    },
    {
      title: "Strategic Trading & Supply",
      icon: "📦",
      image: "/apartments/trading1.webp",
      description:
        "Through Able Group W.L.L. in Qatar and Able Middle East Trading Company in Saudi Arabia, we are a leading supplier of hardware, tools, and building materials. Our division, Al Marwa Diesel Trading L.L.C., is a key provider of diesel to the industrial and commercial sectors.",
      highlights: [
        "Building Materials Supply",
        "Power & Hand Tools",
        "Safety Equipment",
        "Industrial Hardware",
      ],
    },
    {
      title: "Sustainable Agribusiness",
      icon: "🌱",
      image: "/apartments/agriculture.webp",
      description:
        "Our commitment to the land is realized through Able Farms Pvt. Ltd. in Wayanad, India, focusing on integrated farming. We are now expanding this expertise into Uganda with a focus on premium coffee cultivation for export.",
      highlights: [
        "Integrated Farming Systems",
        "Fresh Produce Supply",
        "Sustainable Practices",
        "Local Market Focus",
      ],
    },
  ];

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
    <>
      <main role="main" itemScope itemType="https://schema.org/AboutPage">
        <section
          aria-labelledby="about-us-heading"
          className="relative h-[100vh] min-h-[600px] w-full overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <Image
                src="/aboutus/meeting.webp"
                alt="Able Group leadership team meeting discussing construction and business strategies in modern conference room"
                fill
                className="object-cover scale-110 parallax-zoom"
                priority
                sizes="100vw"
              />
              <div
                className="absolute inset-0 bg-black/50"
                aria-hidden="true"
              ></div>
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
            <div className="max-w-6xl w-full">
              <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto">
                <header>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full text-center mb-8"
                  >
                    <h1
                      id="about-us-heading"
                      className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide drop-shadow-lg leading-tight mb-4"
                    >
                      About Us
                    </h1>
                    <h2 className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide drop-shadow-lg leading-tight">
                      Construction • Trading • Agribusiness
                    </h2>
                  </motion.div>
                </header>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 items-center"
                >
                  {[
                    { label: "Est. 1992" },
                    { label: "20+ Years Experience" },
                    { label: "3 Business Verticals" },
                    { label: "International Presence" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="w-[calc(50%-8px)] md:w-auto h-12 md:h-auto flex items-center justify-center rounded-full px-4 py-1 md:px-6 md:py-2 border border-white-400/30"
                    >
                      <span className="text-white text-[12px] lg:text-[16px] xl:text-[16px] font-semibold text-center">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="building-excellence-heading"
          className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2
                id="building-excellence-heading"
                className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none-2 text-black"
              >
                Building Excellence Since 1992
              </h2>
              <p className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
                Able Group is a diversified business conglomerate operating for
                over <strong>20 years</strong> across{" "}
                <strong>India and the Middle East</strong>. With strong
                management capabilities, we excel in three core business
                verticals:{" "}
                <strong>Construction, Trading, and Agribusiness</strong>.
              </p>
            </motion.div>
            <TwoByTwoStatsGrid />
          </div>
        </section>

        <section
          aria-labelledby="mission-vision-heading"
          className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16 bg-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <article>
              <h2 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none-2 text-black mb-4">
                Our Mission
              </h2>
              <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
                To power progress and nurture communities through our integrated
                ecosystem. We deliver excellence in construction, provide
                reliability through strategic trading and supply, and foster
                sustainable growth via agribusiness. We are committed to
                <strong> quality, innovation, and integrity</strong> in every
                project, partnership, and product, from the ground up.
              </p>
            </article>
            <article>
              <h2 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none-2 text-black mb-4">
                Our Vision
              </h2>
              <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
                To be the world&apos;s most{" "}
                <strong>trusted and dynamic integrated conglomerate</strong>,
                setting the global benchmark for excellence in building
                essential infrastructure, supplying vital materials, and
                cultivating sustainable resources.
              </p>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="leadership-heading"
          className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16"
        >
          <header className="text-start mb-4 md:mb-8">
            <h2
              id="leadership-heading"
              className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none-2 text-black"
            >
              Our Leadership
            </h2>
            <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
              Guided by visionary leadership across all business verticals
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: "Mr. Yakkoob Purayil",
                title: "Chairman & Founder",
                description: [
                  "A pioneering entrepreneur with over 45 years of experience, Mr. Yakkoob Purayil is the visionary founder of the entire Able Group ecosystem. He established the group's first company in Qatar in 1996 and has since strategically diversified from its core trading roots into a multi-sector powerhouse.",
                  "Under his stewardship, the group has successfully expanded into construction, mass transportation, diesel supply, retail, and agriculture. His acumen for building relationships and reinvesting profits into new ventures is the cornerstone of the group's sustained growth across India, Qatar, UAE, Oman, and now Uganda. A respected figure, Mr. Purayil is also deeply committed to social welfare, regularly contributing to education, healthcare, and community development.",
                ],
              },
              {
                name: "Mr. Muhammad Basheer",
                title: "Chief Executive Officer",
                description: [
                  "Mr. Muhammad Basheer provides strategic leadership and operational oversight for the group's trading and supply divisions. His seasoned management acumen is vital to the success of Able Group's hardware and building material businesses in Qatar and Saudi Arabia.",
                  "He ensures these divisions operate with maximum efficiency and profitability, managing the supply chain, key client relationships, and the extensive portfolio of products. His focus on reliability and quality solidifies our reputation as a leading supplier in the region.",
                ],
              },
              {
                name: "Mr. Ishaque Purayil",
                title: "Director",
                description: [
                  "Mr. Ishaque Purayil provides strategic leadership across the group's trading and construction divisions. As a qualified Civil Engineer, he brings technical expertise to both operational streams.",
                  "For the trading divisions in Qatar and Saudi Arabia, he oversees the supply chain, product portfolio, and market expansion for building materials and hardware. In construction, his engineering background ensures technical excellence in project execution, from bridges and treatment plants to roadworks and building construction. His dual role ensures both business verticals maintain the highest standards of quality and operational efficiency.",
                ],
              },
            ].map((leader, index) => (
              <motion.article
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-8 border transition-all duration-300"
                itemScope
                itemType="https://schema.org/Person"
              >
                <meta itemProp="jobTitle" content={leader.title} />
                <meta itemProp="worksFor" content="Able Group" />

                <div className="flex flex-row md:flex-col lg:flex-col xl:flex-row items-center gap-4 md:gap-6">
                  <div className="flex-1 text-start">
                    <h3 className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide leading-none-2 text-black">
                      <span itemProp="name">{leader.name}</span>
                    </h3>
                    <div className="w-16 h-0.5 bg-gray-400 mx-0 mb-4"></div>
                    <p
                      className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black"
                      itemProp="jobTitle"
                    >
                      {leader.title}
                    </p>
                    {leader.description.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black"
                        itemProp="description"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="ecosystem-heading"
          className="py-8 md:py-20 lg:py-20 px-4 sm:px-6 lg:px-16 bg-gray-100"
        >
          <header className="text-start mb-4 md:mb-8">
            <h2
              id="ecosystem-heading"
              className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none-2 text-black"
            >
              The Able Group Ecosystem
            </h2>
            <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
              Under this leadership, the Able Group has evolved into a fully
              integrated ecosystem, capable of handling every aspect of
              development:
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {businessVerticals.map((vertical, index) => (
              <article
                key={vertical.title}
                className="relative h-100 md:h-150 overflow-hidden group"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={vertical.image}
                    alt={`${vertical.title} - ${vertical.description.substring(
                      0,
                      100
                    )}...`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-all duration-500"
                    aria-hidden="true"
                  ></div>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="absolute inset-0 flex items-end justify-center p-6"
                  >
                    <div className="text-white text-start w-full">
                      <meta itemProp="name" content={vertical.title} />
                      <meta
                        itemProp="description"
                        content={vertical.description}
                      />

                      <h3 className="text-1xl sm:text-1xl lg:text-2xl xl:text-2xl font-light font-sans tracking-wide leading-none-2 text-white mb-3">
                        {vertical.title}
                      </h3>

                      <p className="text-white text-opacity-90 mb-4 text-sm leading-relaxed">
                        {vertical.description}
                      </p>

                      <ul
                        className="space-y-2"
                        aria-label={`${vertical.title} services`}
                      >
                        {vertical.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-white text-opacity-80 text-xs py-1 border-b border-white border-opacity-20 last:border-b-0"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Structured Data */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Able Group",
              "description": "Global construction, trading and agribusiness conglomerate since 1992",
              "url": "https://ablegroupdevelopers.com/about",
              "publisher": {
                "@type": "Organization",
                "name": "Able Group",
                "url": "https://ablegroupdevelopers.com",
                "logo": "https://ablegroupdevelopers.com/logo.png",
                "foundingDate": "1992",
                "description": "Global conglomerate specializing in construction, trading, and sustainable agribusiness",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "500+"
                }
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://ablegroupdevelopers.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About Us",
                    "item": "https://ablegroupdevelopers.com/about"
                  }
                ]
              }
            })
          }}
        /> */}
      </main>
    </>
  );
}

export default AboutUsPage;
