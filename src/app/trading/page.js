import OurCoreTradingDivisions from "@/componets/ui/OurCoreTradingDivisions";
import OurStrategicPresence from "@/componets/ui/OurStrategicPresence";
import OurTradingNetwork from "@/componets/ui/OurTradingNetwork";
import RegisterInterestForm from "@/componets/ui/RegisterInterestForm";
import TradingBanner from "@/componets/ui/TradingBanner";
import React from "react";
import Head from "next/head";

function page() {
  return (
    <>
      <Head>
        <title>
          Able Group Trading Division | Global Supply Chain & Material
          Distribution
        </title>
        <meta
          name="description"
          content="Able Group's global trading division supplies essential construction materials, industrial fuel, and building supplies across Qatar, Saudi Arabia, UAE, and India."
        />
         <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="keywords"
          content="construction materials trading, industrial fuel supply, building materials distributor, Qatar trading, Saudi Arabia suppliers, UAE construction supplies, global supply chain, Able Group trading"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ablegroupdevelopers.com/trading" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Able Group Trading Division | Global Supply Chain & Material Distribution"
        />
        <meta
          property="og:description"
          content="Global suppliers of construction materials and industrial fuel with established networks across Middle East and India."
        />
        <meta
          property="og:url"
          content="https://ablegroupdevelopers.com/trading"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Able Group Trading Division" />
        <meta
          name="twitter:description"
          content="Reliable global supply chain partners for construction and industrial needs."
        />
      </Head>
      <div>
        <TradingBanner />
        <OurCoreTradingDivisions />
        <OurStrategicPresence />
        <OurTradingNetwork />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Able Group Trading Division",
              description:
                "Global trading division supplying construction materials and industrial fuel across Middle East and India",
              provider: {
                "@type": "Organization",
                name: "Able Group Developers",
                url: "https://ablegroupdevelopers.com",
              },
              areaServed: {
                "@type": "Place",
                name: "Middle East, India, East Africa",
              },
              offers: {
                "@type": "Offer",
                category: "Construction Materials & Industrial Fuel Supply",
              },
              serviceType: [
                "Construction Material Distribution",
                "Industrial Fuel Supply",
                "Building Supplies Trading",
                "Global Logistics",
              ],
            }),
          }}
        />
      </div>
    </>
  );
}

export default page;
