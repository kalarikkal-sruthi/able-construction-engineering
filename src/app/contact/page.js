import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function page() {
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

        
      </main>
    </>
  );
}

export default page;
