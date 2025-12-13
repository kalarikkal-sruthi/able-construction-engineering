// src/app/projects/page.js
"use client";
import { motion } from "framer-motion";
import ProjectsTabs from "@/componets/ui/ProjectsTabs";
import React from "react";
import Image from "next/image";
import Head from "next/head";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Able Group Projects Portfolio | Premier Developments & Construction Projects</title>
        <meta
          name="description"
          content="Explore Able Group's portfolio of premier developments and construction projects across residential, commercial, and infrastructure sectors in India, Middle East & East Africa."
        />
        <meta
          name="keywords"
          content="construction projects, real estate developments, infrastructure projects, building portfolio, completed projects, Able Group developments, residential projects, commercial buildings"
        />
         <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ablegroupdevelopers.com/projects" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Able Group Projects Portfolio | Premier Developments"
        />
        <meta
          property="og:description"
          content="Browse our collection of landmark construction projects and premier developments across multiple continents."
        />
        <meta
          property="og:url"
          content="https://ablegroupdevelopers.com/projects"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ablegroupdevelopers.com/og-projects.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Able Group Projects Portfolio" />
        <meta
          name="twitter:description"
          content="Landmark construction projects and premier developments by Able Group."
        />
        <meta name="twitter:image" content="https://ablegroupdevelopers.com/twitter-projects.jpg" />
      </Head>

      <main role="main">
        <section aria-labelledby="projects-heading">
          <div className="h-[70vh] min-h-[500px] lg:min-h-[600px] bg-black flex items-center justify-center px-6 lg:px-24">
            <div className="grid grid-cols-5 lg:grid-cols-5 items-center justify-center">
              {/* Text Content */}
              <article className="col-span-5 lg:col-span-2 bg-gray-900 my-6 p-3 lg:p-6 text-white w-full h-full flex items-center">
                <div className="w-full">
                  <header className="text-start mb-0 md:mb-8">
                    <motion.h1
                      id="projects-heading"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="w-full"
                    >
                      <h1 className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide leading-none-2 text-white">
                        Our Premier Developments
                      </h1>
                    </motion.h1>

                    <p className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16px] block mt-2 md:mt-3 sm:mt-2 mb-4 md:mb-8 sm:mb-3 text-white">
                      Explore a curated collection of our landmark projects across <strong>India, Middle East, and East Africa</strong>. Each project is a testament to the <strong>scale, innovation, and uncompromising quality</strong> we deliver, setting new standards in every market we enter.
                    </p>
                  </header>
                </div>
              </article>

              {/* Image Section */}
              <figure className="col-span-5 lg:col-span-3 overflow-hidden bg-gray-800 h-full min-h-[200px] lg:min-h-[450px]">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/gallery/gallery-banner.webp"
                    alt="Portfolio showcase of Able Group construction projects including residential complexes, commercial buildings, and infrastructure developments"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
                <figcaption className="sr-only">
                  Portfolio showcase of Able Group&npos;s construction and development projects
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section aria-label="Projects categories and details">
          <ProjectsTabs />
        </section>

        {/* Correct Structured Data for Projects Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Able Group Projects Portfolio",
              "description": "Portfolio of premier construction and development projects by Able Group",
              "url": "https://ablegroupdevelopers.com/projects",
              "publisher": {
                "@type": "Organization",
                "name": "Able Group Developers",
                "url": "https://ablegroupdevelopers.com",
                "logo": "https://ablegroupdevelopers.com/logo.png",
                "foundingDate": "1992"
              },
              "mainEntity": {
                "@type": "ItemList",
                "name": "Able Group Construction Projects",
                "description": "Collection of landmark construction projects across residential, commercial, and infrastructure sectors",
                "numberOfItems": 100,
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Residential Developments"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Commercial Projects"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Infrastructure Projects"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Industrial Developments"
                  }
                ]
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
                    "name": "Projects",
                    "item": "https://ablegroupdevelopers.com/projects"
                  }
                ]
              }
            }),
          }}
        />
      </main>
    </>
  );
}

export default ProjectsPage;