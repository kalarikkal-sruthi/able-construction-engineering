"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import KeyServices from "@/componets/ui/KeyServices";
import ConstructionBanner from "@/componets/ui/ConstructionBanner";
import OurglobalFootprint from "@/componets/ui/OurglobalFootprint";
export default function page() {
  return (
    <main className="pt-16">
   <ConstructionBanner />
<KeyServices />
    <OurglobalFootprint />
      
    
      
    
    </main>
  );
}
