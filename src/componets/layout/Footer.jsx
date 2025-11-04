import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div>   <footer className="bg-[#050235] text-white py-30 px-30">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        
        {/* --- Column 1: Company Info --- */}
        <div>
       <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Able Logo"
                  width={120}
                  height={100}
                  className="object-contain ml-[20px]"
                />
              </Link>
          <p className="text-gray-300">
            We specialize in quality apartment and infrastructure construction,
            delivering projects with precision, safety, and sustainability.
          </p>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Buisiness Plan</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Our Works</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Company Profile</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* --- Column 3: Contact Info --- */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-gray-300">
      <li className="flex items-start gap-3">
        <FaMapMarkerAlt className="text-white text-lg mt-1" />
        <span>
          UGANDA, CENTRAL KAMPALA,
          <br />
          NAKASERO III, BUGANDA ROAD I
        </span>
      </li>

      <li className="flex items-center gap-3">
        <FaPhoneAlt className="text-white text-lg" />
        <span>+91 98765 43210</span>
      </li>

      <li className="flex items-center gap-3">
        <MdEmail className="text-white text-lg" />
        <span>info@ablegroup.com</span>
      </li>
    </ul>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-gray-500 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Your BSL Solutions. All rights reserved.
      </div>
    </footer></div>
  )
}

export default Footer