"use client";
import KeyServices from "@/componets/ui/KeyServices";
import ConstructionBanner from "@/componets/ui/ConstructionBanner";
import OurglobalFootprint from "@/componets/ui/OurglobalFootprint";
export default function page() {
  return (
    <>
      <main role="main">
        <ConstructionBanner />
        <KeyServices />
        <OurglobalFootprint />
      </main>
    </>
  );
}
