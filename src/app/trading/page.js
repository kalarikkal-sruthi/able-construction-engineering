import OurCoreTradingDivisions from "@/componets/ui/OurCoreTradingDivisions";
import OurStrategicPresence from "@/componets/ui/OurStrategicPresence";
import OurTradingNetwork from "@/componets/ui/OurTradingNetwork";
import RegisterInterestForm from "@/componets/ui/RegisterInterestForm";
import TradingBanner from "@/componets/ui/TradingBanner";
import React from "react";

function page() {
  return (
    <div>
      <TradingBanner />
      <OurCoreTradingDivisions />
      <OurStrategicPresence />
      <OurTradingNetwork />
    </div>
  );
}

export default page;
