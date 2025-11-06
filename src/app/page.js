"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import QualityServices from "@/componets/ui/QualityServices";
import { MdDesignServices } from "react-icons/md"; // Design Development
import { FiCalendar } from "react-icons/fi"; // Project Planning
import { GiSofa } from "react-icons/gi"; // Interior Design

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Design Development",
      desc: "We provide a transparent cost estimate and handle all necessary permits and approvals to get your project started smoothly.",
      Icon: MdDesignServices,
    },
    {
      id: 2,
      title: "Project Planning",
      desc: "Project planning involves defining goals, tasks, resources, timelines, and responsibilities to successful project execution.",
      Icon: FiCalendar,
    },
    {
      id: 3,
      title: "Interior Design",
      desc: "Interior design involves creating functional, aesthetic spaces by arranging elements to improve comfort and usability.",
      Icon: GiSofa,
    },
  ];
  return (
    <main>
      {/* ===== HERO SECTION ===== */}

      {/* Video Background Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/2.mp4" type="video/mp4" />
          <source src="/2.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/hero-fallback.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute top-0 left-0  h-full bg-black  z-20"></div>

        {/* Centered Text Content */}
        <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto pt-16 sm:pt-20 lg:pt-24">
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
            <div className="mb-3 sm:mb-4 lg:mb-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light font-sans tracking-wide">
                Welcome to
              </span>
            </div>
            <div className="relative inline-block">
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-mono text-white relative block">
                Able Group
                <div className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70 rounded-full"></div>
              </span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed sm:leading-loose opacity-90 max-w-3xl mx-auto px-2"
          >
            Building a New Standard in Ugandan Real Estate PY Able Construction
            – A Legacy of Excellence, Now Building Your Future in Uganda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center"
          >
            <button className="bg-[#251f77] text-white  sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-4 rounded-full hover:bg-[#251f77e6] transition-all duration-300 text-base sm:text-lg lg:text-xl font-semibold shadow-lg hover:shadow-xl  sm:w-auto min-w-[160px]">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/secondbanner.jpg"
            alt="Construction Background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="  p-6 sm:p-8 lg:p-16  w-[95%] max-w-4xl mx-auto"
          >
            <h2 className=" text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center leading-tight sm:leading-tight">
              <span className="block mb-3 sm:mb-3">We deliver expert</span>
              <span className="block text-yellow-300 mb-3 sm:mb-3">
                building work solutions
              </span>
              <span className="block text-white/90 mb-3 sm:mb-3">
                and trusted support for
              </span>
              <span className="block text-yellow-300">
                all construction project demands
              </span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:px-12 xl:py-30">
        <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:gap-10 xl:gap-12 2xl:gap-16 items-center">
          {/* Text Content - Mobile First */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <motion.h2
              className="text-2xl leading-tight text-gray-800 mb-4
                   xs:text-3xl 
                   sm:text-4xl sm:mb-6 
                   md:text-5xl 
                   lg:text-4xl lg:mb-8 
                   xl:text-5xl 
                   2xl:text-5xl"
            >
              About
              <br />
              <span className="text-[#a14c4d]">Our Company</span>
            </motion.h2>
            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-6 sm:mb-8"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl  text-[#251f77]">
                P.Y ABLE CONSTRUCTION & ENGINEERING CO. LTD
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-gray-600 mb-4 text-base sm:text-lg leading-relaxed">
                Welcome to PY Able Construction & Engineering Co. Ltd, the
                newest chapter in the storied legacy of the Able Group. With
                decades of expertise in delivering complex, high-quality
                infrastructure and building projects across the GCC and India,
                we have now planted our flag in the heart of Kampala, Uganda.
              </p>
              <p className="text-gray-600 mb-4 text-base sm:text-lg leading-relaxed">
                We are here to redefine urban living by developing premium,
                modern apartments that combine international quality standards
                with a deep understanding of the local landscape. Trust,
                quality, and timely delivery aren't just our promises—they are
                our proven track record. industry.
              </p>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-3/5 relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/about.jpg"
                alt="About Background"
                fill
                className="object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 pb-16 sm:pb-20 lg:pb-24 xl:pb-30">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
      <motion.h2
        className="text-2xl leading-tight text-gray-800 mb-3
               xs:text-3xl 
               sm:text-3xl sm:mb-4 
               md:text-4xl 
               lg:text-4xl lg:mb-6 
               xl:text-5xl 
               2xl:text-5xl"
      >
        Prime Apartment
        <br />
        <span className="text-[#a14c4d]">Development</span>
      </motion.h2>

      <div className="text-xl sm:text-2xl lg:text-3xl text-[#a14c4d] font-bold mb-4 sm:mb-5 lg:mb-6">
        for Sale & Rent
      </div>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
        Our core mission in Uganda: Addressing the growing demand for
        high-quality housing
      </p>
    </div>

    {/* Mission Statement */}
    <div className="bg-gradient-to-r from-[#a14c4d] to-[#251f77] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center mb-8 sm:mb-10 lg:mb-12">
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
        "We are committed to transforming Uganda's urban landscape through
        exceptional apartment development"
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
      {[
        {
          icon: "🏛️",
          title: "Modern Designs",
          desc: "Contemporary aesthetics for urban living",
        },
        {
          icon: "🏗️",
          title: "Quality Construction",
          desc: "Best materials and engineering",
        },
        {
          icon: "📍",
          title: "Strategic Locations",
          desc: "Accessible growing neighborhoods",
        },
        {
          icon: "⭐",
          title: "Full Amenities",
          desc: "Security, parking, community spaces",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="text-center p-4 sm:p-5 lg:p-6 bg-gray-50 rounded-lg sm:rounded-xl hover:shadow-md sm:hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{feature.icon}</div>
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">
            {feature.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>

    {/* Final Statement */}
    <div className="text-center">
      <p className="text-base sm:text-lg text-gray-700 italic">
        We are creating{" "}
        <span className="text-[#a14c4d] font-semibold">
          sustainable communities
        </span>{" "}
        and{" "}
        <span className="text-[#251f77] font-semibold">
          valuable assets
        </span>{" "}
        for our clients
      </p>
    </div>
  </div>
</section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:px-12 xl:py-30  bg-[#f5f5f5]">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl leading-tight text-gray-800 mb-4   text-center
                   xs:text-3xl 
                   sm:text-4xl sm:mb-6 
                   md:text-5xl 
                   lg:text-4xl lg:mb-8 
                   xl:text-5xl 
                   2xl:text-6xl"
        >
          Provide
          <br />
          <span className="text-[#251f77]">Quality Services</span>
        </motion.h2>
        <QualityServices />
      </section>

      {/* ===== IMAGE GRID ===== */}

      <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:px-12 xl:py-30">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl leading-tight text-gray-800 mb-4 text-center
               xs:text-3xl 
               sm:text-4xl sm:mb-6 
               md:text-5xl 
               lg:text-4xl lg:mb-8 
               xl:text-5xl 
               2xl:text-6xl"
        >
          Check Out Our
          <br />
          <span className="text-[#a14c4d]"> Latest Creations</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-14">
          {[
            {
              id: 1,
              title: " Earthworks & Road Construction",
              desc: "Mass excavation, embankment filling, and building durable highways and airport runways.",
              img: "/1.jpg",
            },
            {
              id: 2,
              title: " Pipeline & Drainage Systems",
              desc: "Specialist in laying GRP, RCC, and ductile iron pipes for water supply, sewerage, and stormwater drainage.",
              img: "/2.jpg",
            },
            {
              id: 3,
              title: " RCC Structures",
              desc: "Construction of complex reinforced concrete structures including tunnels, retaining walls, water tanks, bridges, and box culverts.",
              img: "/3.jpg",
            },
            {
              id: 4,
              title: "Ducts Installation",
              desc: "Sophisticated work for airfield ground lighting at airports and special cable systems for Formula One tracks.",
              img: "/4.jpg",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-01"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
                  priority={item.id === 1}
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <h1 className="mb-3 text-black text-xl sm:text-2xl font-bold">
                  {item.title}
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-6 sm:pt-4 md:pt-10 text-center">
          <button className="bg-[#251f77] text-white px-3 py-2.5 xs:px-4 xs:py-3 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full hover:bg-[#251f77cc] transition-all duration-300  font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl hover:shadow-lg hover:shadow-[#251f77]/30 active:scale-95">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
