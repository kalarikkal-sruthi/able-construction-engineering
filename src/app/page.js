"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen overflow-hidden">
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
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="flex flex-col items-center justify-center text-gray-800 py-20 px-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-bold text-6xl leading-tight text-center text-black"
          >
            We deliver expert building work
            <br />
            <span className="text-[#a14c4d]">
              solutions and trusted support for
            </span>
            <br />
            all construction project demands
          </motion.h2>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative px-30 pb-20">
        <div className="flex gap-6 items-center">
          <div className="w-2/5 h-[600px] flex flex-col justify-center">
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

        <div className="relative w-full mt-10 -ml-30">
          <Image
            src="/homelogo.png"
            alt="Home Logo"
            width={500}
            height={450}
            className="object-contain absolute left-0 rounded-2xl"
          />
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="flex flex-col items-center justify-center bg-[#f2e4e4] text-gray-800 py-20 px-30">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl text-center font-bold leading-tight text-gray-800 mb-6"
        >
          We deliver
          <br />
          <span className="text-[#251f77]">smart building projects</span>
        </motion.h2>
      </section>

      {/* ===== IMAGE GRID ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#f2e4e4] px-30 pb-20">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="bg-white rounded-xl text-center shadow-lg">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-t-xl">
              <Image
                src={`/${num}.jpg`}
                alt={`Project ${num}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             25vw"
                priority={num === 1}
              />
            </div>

            <div className="p-6">
              <h1 className="mb-3 text-black text-2xl font-bold">
                Riverwalk Towers
              </h1>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
