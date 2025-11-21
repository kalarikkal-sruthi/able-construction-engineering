import FarmingBanner from "@/componets/ui/FarmingBanner";
import OurAgriculturalDivisions from "@/componets/ui/OurAgriculturalDivisions";
import RegisterInterestForm from "@/componets/ui/RegisterInterestForm";
import React from "react";

function page() {
  return (
    <div>
      <FarmingBanner />
      <OurAgriculturalDivisions />
      <RegisterInterestForm />
    </div>
  );
}

export default page;
