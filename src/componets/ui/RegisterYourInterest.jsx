import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
function RegisterYourInterest() {
  return (
    <div>
          <section className="flex py-8 md:py-20 lg:py-20 bg-gray-50">
        <div className=" mx-auto mx-auto px-4 sm:px-6 lg:px-16 w-full">
        
            {/* Content Column */}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 items-center">
  {/* First Column - takes 1 part (25%) */}
  <div className="lg:col-span-1">
  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <span className=" text-1xl sm:text-1xl lg:text-1xl xl:text-1xl">
                      {" "}
                     
                    </span>
                    <br></br>
                    <span className="text-2xl sm:text-2xl lg:text-4xl xl:text-4xl font-light font-sans tracking-wide  leading-none-2 text-black ">
                      Register Your Interest
                    </span>
                  </motion.h1>

  </div>
  
  {/* Second Column - takes 3 parts (75%) */}
  <div className="lg:col-span-3">
    {/* Your content for the larger column */}
  </div>
</div>

        
         
        </div>
      </section>
    </div>
  )
}

export default RegisterYourInterest