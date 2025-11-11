"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const RegisterInterestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  return (
    <section className="flex py-8 md:py-16 lg:py-20 bg-gradient-to-br from-[#000000ea] to-[#000000f5]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Content Column - spans 2 of 5 columns on desktop (40%) */}
          <div className="flex flex-col justify-start space-y-6 lg:col-span-2">
            <div className="space-y-4 my-0">
              <div className="text-start">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-sans tracking-wide leading-tight text-white">
                    REGISTER <br className="hidden sm:block" />
                    YOUR <br className="hidden sm:block" />
                    INTEREST
                  </span>
                </motion.h1>
              </div>
            </div>

            {/* Optional description text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Get in touch with us for more information about our services and
                offerings.
              </p>
            </motion.div>
          </div>

          {/* Form Column - spans 3 of 5 columns on desktop (60%) */}
          <div className="relative lg:col-span-3">
            <div className="relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-4 border border-gray-400 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200 bg-transparent text-white placeholder-gray-400"
                      placeholder="First Name *"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-4 border border-gray-400 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200 bg-transparent text-white placeholder-gray-400"
                      placeholder="Last Name *"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Mobile Number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-4 border border-gray-400 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200 bg-transparent text-white placeholder-gray-400"
                      placeholder="Mobile Number *"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-4 border border-gray-400 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200 bg-transparent text-white placeholder-gray-400"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Company Name & Message */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 sm:py-4 border border-gray-400 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200 bg-transparent text-white placeholder-gray-400"
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 sm:py-4 border border-gray-400 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200 bg-transparent text-white placeholder-gray-400 resize-none"
                      placeholder="Your Message"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:gap-6 justify-center items-center"
                  >
                    <button
                      className="
               bg-white
               border-1
               border-white
               text-black 
               px-2 
               xl:px-2
               py-3 
               rounded-full 
               transition-all 
               duration-300 
               text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x]
               relative
               overflow-hidden
               group
               hover:-translate-y-0.5
               flex
               items-center
               justify-center
               min-w-full
               xl:min-w-full
             
             "
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-2">
                        Submit
                      </span>
                    </button>
                  </motion.div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterInterestForm;
