import Header from "@/componets/layout/Header";
import "./globals.css";
import Footer from "@/componets/layout/Footer";

export const metadata = {
  title:
    "Able Group Developers | Global Construction & Development Group Since 1992",
  description:
    "Able Group is a global conglomerate with 30+ years of excellence in construction, infrastructure, trading, and sustainable agribusiness across India, Middle East & East Africa.",
  keywords:
    "construction, sustainable agribusiness, trading, Qatar, Saudi Arabia, UAE, India, Uganda, building, development group, Able Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Able Group Developers" }],
  creator: "Able Group Developers",
  publisher: "Able Group Developers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ablegroupdevelopers.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title:
      "Able Group Developers | Global Construction & Development Group Since 1992",
    description:
      "30+ years of excellence in construction, infrastructure, and sustainable development across multiple continents.",
    url: "https://ablegroupdevelopers.com",
    siteName: "Able Group Developers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Able Group Developers - Building Legacies Since 1992",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Able Group Developers | Global Construction & Development Group",
    description:
      "Building landmarks and nurturing communities since 1992 across India, Middle East, and East Africa.",
    images: ["/twitter-image.jpg"],
    creator: "@ablegroup",
  },
//  viewport: {
//   width: "device-width",
//   initialScale: 1.0,
//   maximumScale: 5.0,  
//   userScalable: true,  
// },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo-favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
  category: "construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
           <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" 
        />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
       
     
      
        <link
          rel="preload"
          href="/logo-favicon.png"
          as="image"
          type="image/png"
        />
      </head>
      <body className="antialiased text-gray-700 bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-4 focus:border-2 focus:border-black"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://ablegroupdevelopers.com/#organization",
                  name: "Able Group Developers",
                  url: "https://ablegroupdevelopers.com/",
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://ablegroupdevelopers.com/#logo",
                    url: "https://ablegroupdevelopers.com/logo.png",
                    width: 200,
                    height: 60,
                    caption: "Able Group Developers Logo",
                  },
                  description:
                    "Global construction and development conglomerate with 30+ years of excellence in infrastructure, real estate, trading, and sustainable agribusiness.",
                  foundingDate: "1992",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "",
                    addressLocality: "",
                    addressRegion: "",
                    postalCode: "",
                    addressCountry: "India",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "",
                    contactType: "customer service",
                    areaServed: "Worldwide",
                    availableLanguage: ["English", "Hindi", "Arabic"],
                  },
                  sameAs: [
                    "https://twitter.com/ablegroup",
                    "https://linkedin.com/company/ablegroup",
                    "https://facebook.com/ablegroup",
                    "https://instagram.com/ablegroup",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://ablegroupdevelopers.com/#website",
                  url: "https://ablegroupdevelopers.com/",
                  name: "Able Group Developers",
                  description: "Global Construction & Development Group",
                  publisher: {
                    "@id": "https://ablegroupdevelopers.com/#organization",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://ablegroupdevelopers.com/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://ablegroupdevelopers.com/",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
