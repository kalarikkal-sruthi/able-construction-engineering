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
                   2xl:text-6xl"
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
                our proven track record.
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
<section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#050235] via-[#050235] to-[#050235] overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    {/* Floating Shapes */}
    <div className="absolute top-10 left-10 w-20 h-20 bg-[#ffdf20]/20 rounded-full animate-float"></div>
    <div className="absolute top-1/4 right-20 w-16 h-16 bg-[#251f77]/40 rounded-lg animate-float-slow"></div>
    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#a14c4d]/30 rounded-full animate-float-delayed"></div>
    
    {/* Grid Pattern */}
    <div className="absolute inset-0 opacity-10 bg-[length:50px_50px] bg-grid-white"></div>
  </div>

  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto text-center">
      
      {/* Animated Badge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full mb-8"
      >
        <span className="font-mono text-sm tracking-widest uppercase">Our Commitment</span>
      </motion.div>

      {/* Main Heading with Stagger Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-4 mb-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl  text-white leading-tight"
        >
          Transforming Uganda's
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#ffdf20] to-[#ffdf20] bg-clip-text text-transparent leading-tight">
            Urban Landscape
          </h2>
          {/* Underline Animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffdf20] to-[#a14c4d] transform origin-left"
          />
        </motion.div>
      </motion.div>

      {/* Subheading with Typewriter Effect */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
      >
        through exceptional apartment development
      </motion.p>

      {/* Animated CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
        className="flex justify-center gap-4"
      >
        {/* Primary Button */}
        {/* <button className="group relative bg-gradient-to-r from-[#a14c4d] to-[#251f77] text-white px-8 py-4 rounded-full hover:from-[#251f77] hover:to-[#a14c4d] transition-all duration-500 font-semibold text-lg overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-105">
          <span className="relative z-10 flex items-center gap-3">
            Start Your Journey
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#251f77] to-[#a14c4d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button> */}

      
      </motion.div>

    </div>
  </div>

  {/* Floating Particles */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{
          backgroundColor: i % 3 === 0 ? '#ffdf20' : i % 3 === 1 ? '#a14c4d' : '#251f77',
          opacity: 0.4
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          opacity: [0, 0.6, 0],
          y: [0, -150],
          x: Math.random() * 100 - 50
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          delay: Math.random() * 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
</section>
    <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:px-12 xl:py-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <motion.h2
             initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
              className="text-2xl leading-tight text-gray-800 mb-3
               xs:text-3xl 
               sm:text-3xl sm:mb-4 
               md:text-4xl 
               lg:text-4xl lg:mb-6 
               xl:text-5xl 
               2xl:text-6xl"
            >
            Premium Residential
             < br />
              <span className="text-[#a14c4d]">Development</span>
            </motion.h2>
    
          </div>

          {/* Mission Statement */}
          {/* <div className="bg-gradient-to-r from-[#a14c4d] to-[#251f77] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center mb-8 sm:mb-10 lg:mb-12">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              "We are committed to transforming Uganda's urban landscape through
              exceptional apartment development"
            </p>
          </div> */}

          {/* Features Grid */}
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
  {[
    {
      title: "Modern Designs",
      desc: "Contemporary aesthetics for urban living",
    },
    {
      title: "Quality Construction",
      desc: "Best materials and engineering",
    },
    {
      title: "Strategic Locations", 
      desc: "Accessible growing neighborhoods",
    },
    {
      title: "Full Amenities",
      desc: "Security, parking, community spaces",
    },
  ].map((feature, index) => (
    <div
      key={index}
      className="text-center p-4 bg-white border border-gray-200 rounded-lg hover:border-[#a14c4d] hover:shadow-lg transition-all duration-300 group"
    >
      {/* Number Indicator */}
      <div className="flex justify-center mb-3">
        <div className="w-8 h-8 rounded-full bg-[#a14c4d] text-white flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
          {index + 1}
        </div>
      </div>
      
      <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#a14c4d] transition-colors duration-300">
        {feature.title}
      </h3>
      
      <p className="text-xs text-gray-600 leading-tight">
        {feature.desc}
      </p>
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
              img: "/LATESTWORKS/earthwork2.jpg",
            },
            {
              id: 2,
              title: " Pipeline & Drainage Systems",
              desc: "Specialist in laying GRP, RCC, and ductile iron pipes for water supply, sewerage, and stormwater drainage.",
              img: "/LATESTWORKS/pipeline.jpeg",
            },
            {
              id: 3,
              title: " RCC Structures",
              desc: "Construction of complex reinforced concrete structures including tunnels, retaining walls, water tanks, bridges, and box culverts.",
              img: "/LATESTWORKS/rcc1.jpg",
            },
            {
              id: 4,
              title: "Ducts Installation",
              desc: "Sophisticated work for airfield ground lighting at airports and special cable systems for Formula One tracks.",
              img: "/LATESTWORKS/ductinstallation.jpg",
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
