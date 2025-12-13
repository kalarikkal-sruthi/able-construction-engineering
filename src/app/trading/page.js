import OurCoreTradingDivisions from "@/componets/ui/OurCoreTradingDivisions";
import OurStrategicPresence from "@/componets/ui/OurStrategicPresence";
import OurTradingNetwork from "@/componets/ui/OurTradingNetwork";
import TradingBanner from "@/componets/ui/TradingBanner";
import React from "react";

function page() {
  return (
    <>
      <main role="main">
        <TradingBanner />
        <OurCoreTradingDivisions />
        <OurStrategicPresence />
        <OurTradingNetwork />
      </main>
    </>
  );
}

export default page;
