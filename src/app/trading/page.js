import OurCoreTradingDivisions from "@/componets/ui/OurCoreTradingDivisions";
import OurStrategicPresence from "@/componets/ui/OurStrategicPresence";
import OurTradingNetwork from "@/componets/ui/OurTradingNetwork";
import RegisterInterestForm from "@/componets/ui/RegisterInterestForm";
import TradingBanner from "@/componets/ui/TradingBanner";
import React from "react";
import Head from "next/head";

export const metadata = {
  title:
    "Trading Division | Able Group Developers | Global Supply Chain & Material Trading",
  description:
    "Able Group's trading divisions in Qatar & Saudi Arabia supply essential construction materials & industrial fuel. Global supply chain network serving infrastructure projects worldwide.",
  keywords:
    "construction materials trading, industrial fuel supply, Qatar trading, Saudi Arabia trading, building materials, steel trading, cement supply, supply chain management, Able Group trading",
  openGraph: {
    title:
      "Trading Division | Able Group Developers | Global Supply Chain Network",
    description:
      "Essential construction materials and industrial fuel supply through our established trading networks in Qatar and Saudi Arabia.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Able Group Trading Division | Global Supply Chain Solutions",
    description:
      "Reliable supplier of construction materials and industrial fuel across Middle East and global markets.",
  },
  alternates: {
    canonical: "/trading",
  },
};
function page() {
  return (
    <>
      <Head>
        {/* Additional meta tags specific to trading page */}
        <meta
          property="og:image"
          content="https://ablegroupdevelopers.com/trading-og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="Able Group Trading Division - Global Supply Chain"
        />
        <meta
          name="twitter:image"
          content="https://ablegroupdevelopers.com/trading-twitter-image.jpg"
        />
      </Head>

      <div itemScope itemType="https://schema.org/Organization">
        {/* Hidden structured data for this specific page */}
        <meta itemProp="name" content="Able Group Trading Division" />
        <meta
          itemProp="description"
          content="Global supplier of construction materials and industrial fuel with operations in Qatar and Saudi Arabia."
        />

        <main>
          <TradingBanner />
          <OurCoreTradingDivisions />
          <OurStrategicPresence />
          <OurTradingNetwork />
        </main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://ablegroupdevelopers.com/trading#organization",
              name: "Able Group Trading Division",
              url: "https://ablegroupdevelopers.com/trading",
              description:
                "Global supplier of construction materials and industrial fuel with trading operations in Qatar and Saudi Arabia.",
              foundingDate: "1992",
              areaServed: [
                "Qatar",
                "Saudi Arabia",
                "UAE",
                "India",
                "East Africa",
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Construction Materials",
                    description:
                      "Steel, cement, aggregates, and building materials",
                  },
                  availableAtOrFrom: {
                    "@type": "Place",
                    name: "Qatar Trading Division",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Industrial Fuel",
                    description:
                      "Fuel supply for construction and industrial use",
                  },
                  availableAtOrFrom: {
                    "@type": "Place",
                    name: "Saudi Arabia Trading Division",
                  },
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                availableLanguage: ["English", "Arabic", "Hindi"],
              },
              parentOrganization: {
                "@type": "Organization",
                name: "Able Group Developers",
                url: "https://ablegroupdevelopers.com",
              },
            }),
          }}
        />
      </div>
    </>
  );
}

export default page;
