"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Globe } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative m-0 p-0">
      <header className="fixed top-[0px] left-0 w-full z-50 ">
        <div className="mx-auto px-4 sm:px-6  lg:px-8 py-1 sm:py-1 lg:py-2   shadow-md border-gray-200  bg-[#ffffff1c] backdrop-blur-sm z-100">
          <div className="flex justify-between items-center ">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="font-bold text-blue-600 flex items-center">
                <Link
                  href="/"
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <Image
                    src="/logo.png"
                    alt="Able Logo"
                    width={100}
                    height={80}
                    className="object-contain ml-2 sm:ml-[20px] w-16 sm:w-24"
                  />
                </Link>
              </div>
              {/* Able Group Title with Highlighted Head */}
              <div className="sm:block">
                <div className="flex items-baseline">
                  <span className="text-lg sm:text-xl lg:text-3xl font-bold  text-[#fff]  px-2 py-1 rounded-l-md">
                    ABLE GROUP
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 mr-4">
              <Link
                href="/"
                className="text-[#fff] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Home
              </Link>
              <Link
                href=""
                className="text-[#fff] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                About
              </Link>
              <Link
                href=""
                className="text-[#fff] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Business Plan
              </Link>
              <Link
                href=""
                className="text-[#fff] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Our Works
              </Link>
              <Link
                href=""
                className="text-[#fff] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Company Profile
              </Link>
              <Link
                href=""
                className="text-[#fff] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Contact
              </Link>
              <button
                className="
          bg-[#251f77] 
          text-white 
          px-2 
          xl:px-2
          py-2 
          rounded-full 
         
          transition-all 
          duration-300 
          text-sm 
          xl:text-base
          relative
          overflow-hidden
          group
          
        
          hover:-translate-y-0.5
          flex
          items-center
          justify-center
          min-w-[135px]
          xl:min-w-[135px]
        "
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  Get In Touch
                </span>
                <span
                  className="
            absolute
            right-4
            top-1.5
            opacity-0
            -translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
            font-bold
          "
                >
                  →
                </span>
              </button>
              <div className="text-gray-300">|</div>
              <div className="flex space-x-3 xl:space-x-4">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="text-white hover:text-pink-600 transition"
                >
                  <Instagram size={18} className="xl:w-5 xl:h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-white hover:text-blue-600 transition"
                >
                  <Facebook size={18} className="xl:w-5 xl:h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-white hover:text-blue-700 transition"
                >
                  <Linkedin size={18} className="xl:w-5 xl:h-5" />
                </Link>
                <Link
                  href="https://yourwebsite.com"
                  target="_blank"
                  className="text-white hover:text-green-600 transition"
                >
                  <Globe size={18} className="xl:w-5 xl:h-5" />
                </Link>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-black focus:outline-none mr-2 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`
  lg:hidden 
  bg-[#ffffffed]
  shadow-xl 
 
  fixed
  top-0
  left-0
  w-64
  h-full
  z-50
  transform
  transition-transform
  duration-300
  ease-out
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col p-4 pt-16 h-full overflow-y-auto z-40">
            {[
              "Home",
              "About",
              "Business Plan",
              "Our Works",
              "Company Profile",
              "Contact",
            ].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(" ", "-")}`}
                className="text-gray-800 hover:text-[#251f77] py-4  transition-all duration-200 font-medium text-left  border-gray-100 hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* Social Icons in Mobile Menu */}
            <div className="flex justify-start  py-4  space-x-4 sm:space-x-6 ">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="text-gray-500 hover:text-pink-600 transition-transform duration-300 hover:scale-110"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="text-gray-500 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-gray-500 hover:text-blue-700 transition-transform duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://yourwebsite.com"
                target="_blank"
                className="text-gray-500 hover:text-green-600 transition-transform duration-300 hover:scale-110"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>

            {/* Animated Button */}
            <div className="pt-3 sm:pt-4 md:pt-6">
              <button
                className="
          bg-[#251f77] 
          text-white 
          px-2 
          xl:px-2
          py-2 
          rounded-full 
         
          transition-all 
          duration-300 
          text-sm 
          xl:text-base
          relative
          overflow-hidden
          group
          
        
          hover:-translate-y-0.5
          flex
          items-center
          justify-center
          min-w-[135px]
          xl:min-w-[135px]
        "
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  Get In Touch
                </span>
                <span
                  className="
            absolute
            right-4
            top-1.5
            opacity-0
            -translate-x-2
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
            font-bold
          "
                >
                  →
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </main>
  );
}
