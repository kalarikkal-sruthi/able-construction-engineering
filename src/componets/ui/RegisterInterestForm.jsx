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
    <section className="flex py-8 md:py-20 lg:py-20 bg-gradient-to-br from-[#000000ea] to-[#000000f5]">
      <div className="mx-auto px-4 sm:px-6 lg:px-16 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {" "}
          {/* Changed to 5 columns */}
          {/* Content Column - spans 1 of 5 columns (20%) */}
          <div className="flex flex-col justify-start space-y-6 lg:col-span-2">
            {" "}
            {/* Added lg:col-span-1 */}
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
                  <span className="text-2xl sm:text-2xl lg:text-6xl xl:text-6xl font-light font-sans tracking-wide leading-none-2 text-white">
                    REGISTER <br></br>YOUR <br></br>INTERESE
                  </span>
                </motion.h1>
              </div>
            </div>
          </div>
          {/* Image Column - spans 4 of 5 columns (80%) */}
          <div className="relative lg:col-span-3">
            {" "}
            {/* Added lg:col-span-4 */}
            <div className="relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200"
                      placeholder="Last Name *"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Mobile Number & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Company Name & Message */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-0 focus:border-white focus:border-2 outline-none transition-all duration-200 resize-none"
                      placeholder="Your Message"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
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
      py-2 
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
                      <span
                        className="
        absolute
        -right-20
        top-1.5
        opacity-0
        -translate-x-2
        group-hover:opacity-100
        group-hover:translate-x-0
        transition-all
        duration-300
        font-bold
            text-black 
      "
                      >
                        →
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
