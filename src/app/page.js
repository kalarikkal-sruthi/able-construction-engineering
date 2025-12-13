"use client";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import PremierDevelopments from "@/componets/ui/PremierDevelopments";
import BannerSlider from "@/componets/ui/BannerSlider";
import RegisterInterestForm from "@/componets/ui/RegisterInterestForm";
import OurBranches from "@/componets/ui/OurBranches";
import OurNextChapter from "@/componets/ui/OurNextChapter";
import OurCoreCompetencies from "@/componets/ui/OurCoreCompetencies";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Able Group Developers | Global Construction & Development Group Since 1992</title>
        <meta
          name="description"
          content="Able Group is a global conglomerate with 30+ years of excellence in construction, infrastructure, trading, and sustainable agribusiness across India, Middle East & East Africa."
        />
        <meta name="keywords" content="construction, infrastructure,  development, sustainable agribusiness, trading, Qatar, Saudi Arabia, UAE, India, Uganda" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="canonical" href="https://ablegroupdevelopers.com/" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Able Group Developers | Global Construction & Development Group Since 1992" />
        <meta property="og:description" content="30+ years of excellence in construction, infrastructure, and sustainable development across multiple continents." />
        <meta property="og:url" content="https://ablegroupdevelopers.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ablegroupdevelopers.com/og-image.jpg" />
        <meta property="og:image:alt" content="Able Group Developers - Building Legacies Since 1992" />
        <meta property="og:site_name" content="Able Group Developers" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Able Group Developers | Global Construction & Development Group" />
        <meta name="twitter:description" content="Building landmarks and nurturing communities since 1992 across India, Middle East, and East Africa." />
        <meta name="twitter:image" content="https://ablegroupdevelopers.com/twitter-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Able Group Developers" />
        <meta name="copyright" content="Able Group Developers" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      
      <main role="main">
        <BannerSlider />
        
        <section 
          aria-labelledby="global-expertise-heading"
          className="relative h-screen w-full overflow-hidden"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              backgroundImage: "url('/second-banner.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20" aria-hidden="true"></div>
          </motion.div>

          <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 sm:p-8 lg:p-16 w-[95%] max-w-8xl mx-auto"
            >
              <header>
                <motion.h1
                  id="global-expertise-heading"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full"
                >
                  <div className="mb-3 sm:mb-4 lg:mb-6 text-center">
                    <h1 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide drop-shadow-lg leading-none-2 text-white ">
                      BUILT ON A FOUNDATION OF GLOBAL EXPERTISE
                    </h1>
                    <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mb-3 mt-3 sm:mb-3 text-white">
                      Since our foundation in <strong>1992</strong>, the Able Group has been built on
                      a legacy of excellence and strategic growth. We have
                      since evolved into a dynamic international conglomerate,
                      defining skylines and powering industries across <strong>India, the
                      Middle East, and East Africa</strong>.
                    </p>
                    <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mb-3 mt-3 sm:mb-3 text-white">
                      Our integrated expertise spans the entire development
                      ecosystem. We are builders of landmark infrastructure and
                      precision-engineered residential spaces; suppliers of
                      essential construction materials and industrial fuel through
                      established trading networks in <strong>Qatar and Saudi Arabia</strong>; and
                      cultivators, advancing sustainable agribusiness from the
                      farmlands of <strong>Wayanad</strong> to the emerging coffee plantations of
                      <strong> Uganda</strong>.
                    </p>
                    <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block  mb-3 mt-3 sm:mb-3 text-white">
                      Driven by <strong>three decades of unwavering commitment</strong>, we do not
                      merely complete projects—we build legacies of quality,
                      reliability, and trust, from the ground up.
                    </p>
                  </div>
                </motion.h1>
              </header>
            </motion.article>
          </div>
        </section>
        
        <OurCoreCompetencies />

        <section 
          aria-labelledby="building-legacies-heading"
          className="flex py-8 md:py-20 lg:py-20"
        >
          <div className=" mx-auto px-4 sm:px-6 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <article className="space-y-4 my-0">
                  <header>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <h2 id="building-legacies-heading" className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none-2 text-black">
                        Building Legacies, From the Ground Up
                      </h2>
                    </motion.div>
                  </header>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
                      At the Able Group, we are not just constructing buildings
                      and infrastructure; we are building the very foundations
                      for progress and modern living. Our work—from landmark
                      infrastructure in the <strong>Middle East and India</strong> to premium
                      residential spaces in emerging markets—is unified by a
                      single, uncompromising standard: <strong>excellence</strong>.
                    </p>
                    <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
                      Our strength is amplified by a <strong>fully integrated supply
                      chain</strong>. Through our established trading divisions in Qatar
                      and Saudi Arabia, we are direct suppliers of essential
                      construction materials and industrial fuel. This unique
                      capability guarantees project integrity, ensures timely
                      delivery, and provides a competitive edge that sets us
                      apart.
                    </p>
                    <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
                      Our vision for growth extends beyond construction. We are
                      cultivating prosperity through <strong>sustainable agribusiness</strong>,
                      from integrated farming initiatives in <strong>Wayanad, India</strong>, to
                      our new venture in premium coffee cultivation for export
                      in <strong>Uganda</strong>. This deep-rooted commitment allows us to
                      nurture communities and create lasting value from the
                      ground up.
                    </p>
                    <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-black">
                      We are more than a construction company; we are a <strong>holistic
                      partner in development</strong>, dedicated to transforming visions
                      into enduring realities that empower communities and
                      inspire generations.
                    </p>
                  </div>
                </article>

                <div className="flex space-x-4">
                  <Link 
                    href="/about" 
                    aria-label="Learn more about Able Group's history and achievements"
                    className="inline-block"
                  >
                    <button
                      className="
                        bg-black
                        border-1
                        border-black
                        text-white 
                        px-2 
                        xl:px-2
                        py-2 
                        rounded-full 
                        transition-all 
                        duration-300 
                        text-sm 
                        xl:text-base
                        relative
                        overflow-hidden
                        group
                        hover:-translate-y-0.5
                        flex
                        items-center
                        justify-center
                        min-w-[135px]
                        xl:min-w-[135px]
                        focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                      "
                      aria-label="Learn more about Able Group"
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        Learn More
                      </span>
                      <span 
                        className="absolute right-4 top-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="relative" role="img" aria-label="Able Group business meeting in progress">
                <div className="relative h-[600px] overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/businessmeet-one.webp"
                    alt="Able Group executives conducting a business meeting in a modern conference room"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <OurNextChapter />
        <PremierDevelopments />
        <OurBranches />
        <RegisterInterestForm />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Able Group Developers",
              "url": "https://ablegroupdevelopers.com/",
              "logo": "https://ablegroupdevelopers.com/logo.png",
              "description": "Global construction and development conglomerate with 30+ years of excellence in infrastructure, real estate, trading, and sustainable agribusiness.",
              "foundingDate": "1992",
              "founder": {
                "@type": "Person",
                "name": "Able Group Founder"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Arabic"]
              },
              "sameAs": [
                "https://twitter.com/ablegroup",
                "https://linkedin.com/company/ablegroup",
                "https://facebook.com/ablegroup"
              ]
            })
          }}
        />
      </main>
    </>
  );
}