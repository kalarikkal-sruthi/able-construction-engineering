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
        <div className="absolute top-0 left-0  h-full bg-black bg-opacity-60 z-20"></div>

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
            Transforming ideas into exceptional digital experiences with
            innovation and expertise
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

      {/* <section className="relative h-screen overflow-hidden">
        <div className="inset-0">
          <Image
            src="/banner.jpg"
            alt="Parallax Background"
            fill
            priority
            className="object-cover scale-110 animate-zoom-slow"
          />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-end h-full text-white text-center ml-20 pb-20">
          <motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[6rem] mb-0 mt-0 font-extrabold text-[#a14c4d] leading-tight"
            >
              P.Y ABLE CONSTRUCTION
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[6rem] mb-0 mt-0 font-extrabold text-[#a14c4d] leading-tight"
            >
              & ENGINEERING CO. LTD
            </motion.h1>
          </motion.div>

          <p className="text-[2rem] font-extrabold text-[#fff] mb-0 mt-0">
            Private Limited By Shares
          </p>

          <div className="text-center mt-4">
            <h3 className="text-5xl font-extrabold text-[#251f77] bg-[#ffffff85] rounded-full flex items-center justify-center px-6 py-3">
              35+
              <span className="ml-2 text-xl text-[#d1413f]">
                Years of Experience
              </span>
            </h3>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/10" />
      </section> */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner2.jpg"
            alt="Construction Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
        </div>

        {/* Text Overlay with Glass Effect */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 lg:p-16 shadow-2xl w-[95%] max-w-4xl mx-auto"
          >
            <h2 className="font-bold text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center leading-tight sm:leading-tight">
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
      <section className="relative px-4 sm:px-6 lg:px-8 xl:px-30 pt-30 pb-16 sm:pb-20 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-800 mb-4 sm:mb-6"
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#251f77]">
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s.
              </p>
              <p className="text-gray-600 mb-4 text-base sm:text-lg leading-relaxed">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages.
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

        {/* Bottom Logo */}
        {/* <div className="relative w-full mt-8 lg:mt-10 lg:-ml-40">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center lg:justify-start"
    >
      <Image
        src="/homelogo.png"
        alt="P.Y ABLE CONSTRUCTION & ENGINEERING CO. LTD"
        width={400}
        height={360}
        className="object-contain rounded-2xl w-64 sm:w-80 lg:w-96 xl:w-[500px]"
      />
    </motion.div>
  </div> */}
      </section>
      {/* <section className="relative px-30 pb-20">
        <div className="flex gap-6 items-center">
          <div className="w-2/5 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-5xl font-bold leading-tight text-gray-800 mb-6"
            >
              About
              <br />
              <span className="text-[#a14c4d]">Our Company</span>
            </motion.h2>

            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s.
            </p>
            <p className="mb-4">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </p>
          </div>

          <div className="w-3/5 relative h-[600px]">
            <Image
              src="/about.jpg"
              alt="About Background"
              fill
              className="object-contain rounded-3xl"
            />
          </div>
        </div>

        <div className="relative w-full mt-10 -ml-40">
          <Image
            src="/homelogo.png"
            alt="Home Logo"
            width={500}
            height={450}
            className="object-contain absolute left-0 rounded-2xl"
          />
        </div>
      </section> */}

      {/* ===== PROJECTS SECTION ===== */}
      <section className="flex flex-col items-center justify-center bg-[#f2e4e4] text-gray-800 pt-30 px-30">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl text-center font-bold leading-tight text-gray-800 mb-10"
        >
          Provide
          <br />
          <span className="text-[#251f77]">Quality Services</span>
        </motion.h2>
      </section>
      <QualityServices />
      {/* ===== IMAGE GRID ===== */}

      <section className="flex flex-col items-center justify-center  text-gray-800 pt-20 px-30">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl text-center font-bold leading-tight text-gray-800 mb-10"
        >
          Explore Our
          <br />
          <span className="text-[#a14c4d]">Recent Projects</span>
        </motion.h2>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 px-30 ">
        {[
          {
            id: 1,
            title: "Earth Works",
            desc: "Specialized excavation, grading, and land preparation ensuring solid foundations for all construction phases.",
            img: "/1.jpg",
          },
          {
            id: 2,
            title: "Pipe Lining",
            desc: "Efficient underground utility and drainage systems installation using high-quality pipes and precision alignment.",
            img: "/2.jpg",
          },
          {
            id: 3,
            title: "RCC Works",
            desc: "Reliable reinforced concrete construction for beams, slabs, and columns with a focus on durability and safety.",
            img: "/3.jpg",
          },
          {
            id: 4,
            title: "Road Works",
            desc: "Comprehensive road construction and maintenance — from subgrade preparation to final asphalt paving.",
            img: "/4.jpg",
          },
          {
            id: 5,
            title: "Ducts Installation",
            desc: "Professional HVAC and electrical duct installation ensuring seamless airflow and efficient utility routing.",
            img: "/5.jpg",
          },
          {
            id: 6,
            title: "Road Constructions",
            desc: "Full-scale infrastructure development including highways, pavements, and drainage systems built to last.",
            img: "/6.jpg",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-t-xl">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                25vw"
                priority={item.id === 1}
              />
            </div>

            <div className="p-6">
              <h1 className="mb-3 text-black text-2xl font-bold">
                {item.title}
              </h1>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col items-center justify-center  text-gray-800 pt-30 px-30">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl text-center font-bold leading-tight text-gray-800 mb-10"
        >
          Our End-to-End Process
          <br />
          <span className="text-[#a14c4d]">for Building Success</span>
        </motion.h2>
      </section>

      <section className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-30 py-30  overflow-hidden">
        {/* Background Image (centered, 50% width) */}
        <div
          className="absolute   w-full h-full  bg-no-repeat bg-center  "
          style={{
            backgroundImage: "url('/vector_11.webp')",
          }}
        ></div>
        {services.map(({ id, title, desc, Icon }, index) => (
          <div
            key={id}
            className={`relative z-10 rounded-xl text-center p-6 ${
              index === 1 ? "" : ""
            }`}
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#251f77] text-white">
              <Icon className="w-8 h-8" aria-hidden="true" />
            </div>
            <h1 className="text-2xl text-black font-bold">{title}</h1>
            {/* <p>{desc}</p> */}
          </div>
        ))}

        {/* Foreground Content */}
      </section>
    </main>
  );
}
