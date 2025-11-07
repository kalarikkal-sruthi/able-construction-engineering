import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#000] text-white relative px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20 xl:px-12 xl:py-24">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
        
        {/* --- Column 1: Company Info --- */}
        <div className="text-center sm:text-left">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Able Logo"
              width={120}
              height={100}
              className="object-contain mx-auto sm:mx-0 mb-4 sm:mb-6 w-24 sm:w-28 md:w-32 lg:w-36"
            />
          </Link>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We specialize in quality apartment and infrastructure construction,
            delivering projects with precision, safety, and sustainability.
          </p>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Quick Links</h2>
          <ul className="space-y-2 sm:space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300 text-sm sm:text-base">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300 text-sm sm:text-base">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300 text-sm sm:text-base">Business Plan</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300 text-sm sm:text-base">Our Works</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300 text-sm sm:text-base">Company Profile</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300 text-sm sm:text-base">Contact</a>
            </li>
          </ul>
        </div>

        {/* --- Column 3: Contact Info --- */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Us</h2>
          <ul className="space-y-3 sm:space-y-4 text-gray-300">
            <li className="flex items-start gap-3 justify-center sm:justify-start">
              <FaMapMarkerAlt className="text-white text-base sm:text-lg mt-1 flex-shrink-0" />
              <span className="text-sm sm:text-base text-left">
                UGANDA, CENTRAL KAMPALA,
                <br />
                NAKASERO III, BUGANDA ROAD I
              </span>
            </li>

            <li className="flex items-center gap-3 justify-center sm:justify-start">
              <FaPhoneAlt className="text-white text-base sm:text-lg flex-shrink-0" />
              <span className="text-sm sm:text-base">+91 98765 43210</span>
            </li>

            <li className="flex items-center gap-3 justify-center sm:justify-start">
              <MdEmail className="text-white text-base sm:text-lg flex-shrink-0" />
              <span className="text-sm sm:text-base">info@ablegroup.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-gray-500 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} Your BSL Solutions. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer