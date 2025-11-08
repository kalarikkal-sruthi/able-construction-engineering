import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#000] text-white relative px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20 xl:px-12 xl:py-24">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
        {/* --- Column 1: Company Info --- */}
        <div className="sm:text-left">
          <Link href="/" className="inline-block">
            {/* <Image
              src="/logo.png"
              alt="Able Logo"
              width={120}
              height={100}
              className="object-contain mx-auto sm:mx-0 mb-4 sm:mb-6 w-24 sm:w-28 md:w-32 lg:w-36"
            /> */}
            <div className="mb-3 sm:mb-4 lg:mb-6">
              <span className="text-3xl sm:text-3xl lg:text-3xl xl:text-3xl font-light font-sans tracking-wide drop-shadow-lg leading-none-2">
                Able Group
              </span>
            </div>
          </Link>
          <p className="text-gray-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] leading-relaxed">
            We specialize in quality apartment and infrastructure construction,
            delivering projects with precision, safety, and sustainability.
          </p>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div className=" sm:text-left">
          <div className="mb-3 sm:mb-4 lg:mb-6">
            <span className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-light font-sans tracking-wide drop-shadow-lg leading-none-2">
              Quick Links
            </span>
          </div>
          <ul className="space-y-2 sm:space-y-3 text-gray-300 sm-display-flex">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
              >
                Business Plan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
              >
                Our Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
              >
                Company Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* --- Column 3: Contact Info --- */}
        <div className="sm:text-left">
          <div className="mb-3 sm:mb-4 lg:mb-6">
            <span className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-light font-sans tracking-wide drop-shadow-lg leading-none-2">
              Contact Us
            </span>
          </div>
          <ul className="space-y-3 sm:space-y-4 text-gray-300">
            {/* Head Office */}
            <li className="flex items-start gap-3 sm:justify-start">
              <FaMapMarkerAlt className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] mt-1 flex-shrink-0" />
              <span className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] text-left">
                <strong>Ungada Office</strong>
                <br />
                Central Kampala, Nakasero III
                <br />
                Buganda Road I, Uganda
                <br />
                <span className="text-[11px]">Tel: +256 123 456 789</span>
              </span>
            </li>
            <li className="flex items-center gap-3  sm:justify-start">
              <MdEmail className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] flex-shrink-0" />
              <span className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px]">
                info@ablegroup.com
              </span>
            </li>
            {/* Branch Office */}
            <li className="flex items-start gap-3  sm:justify-start">
              <FaMapMarkerAlt className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] mt-1 flex-shrink-0" />
              <span className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] text-left">
                <strong>Associated Companies</strong>
                {/* <br />
    Doha, Qatar
    <br />
    West Bay, Business District */}
                {/* <br /> */}
                {/* <span className="text-[11px]">Tel: +974 1234 5678</span> */}
                <br />
                <span className="text-[14px]">
                  Website:{" "}
                  <a
                    href="https://www.ablegroupqatar.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-100 underline"
                  >
                    https://www.ablegroupqatar.com/
                  </a>
                </span>
              </span>
            </li>

            {/* Common Contact */}
          </ul>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-gray-500 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center text-gray-400 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]">
        © {new Date().getFullYear()} Your BSL Solutions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
