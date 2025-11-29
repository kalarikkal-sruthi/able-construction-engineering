"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Globe } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Add visual indicator
      contactForm.classList.add("");
      setTimeout(() => {
        contactForm.classList.remove("");
      }, 2000);
    }
  };

  return (
    <main className="relative m-0 p-0">
      <header
        className={`fixed top-[0px] left-0 w-full z-50 ransition-all duration-500 ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto px-4 sm:px-6  lg:px-8 py-1 sm:py-1 lg:py-2   border-gray-200  bg-[#0000]   transition-all duration-500 ${
            isScrolled ? "bg-black" : "bg-transparent"
          }`}
        >
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
                  <span className="text-1xl sm:text-2xl lg:text-2xl xl:text-2xl font-bold  text-white font-sans tracking-wide  leading-none-2">
                    ABLE GROUP
                  </span>
                  {/* <span className="text-lg sm:text-xl lg:text-3xl font-bold  text-black  px-2 py-1 rounded-l-md">
                    ABLE GROUP
                  </span> */}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 mr-4">
              <Link
                href="/"
                className="text-white  text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white  text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] transition-colors"
              >
                About Us
              </Link>
              <div
                className="relative inline-block"
                onMouseEnter={() => setIsOpenDropdown(true)}
                onMouseLeave={() => setIsOpenDropdown(false)}
              >
                <Link
                  href="#"
                  className="text-white  text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] transition-colors"
                >
                  Our Businesses ▼
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`
        absolute top-full left-0 bg-black min-w-[200px] 
        shadow-lg z-[1000] border border-gray-100
        transition-all duration-300 ease-in-out
        ${
          isOpenDropdown
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }
      `}
                >
                  <Link
                    href="/construction"
                    className="block px-4 py-3 text-sm text-white hover:bg-[#fff] hover:text-black transition-colors border-b border-gray-100"
                  >
                    Construction & Engineering
                  </Link>
                  <Link
                    href="/trading"
                    className="block px-4 py-3 text-sm text-white hover:bg-[#fff] hover:text-black transition-colors border-b border-gray-100"
                  >
                    Commodities Trading
                  </Link>
                  <Link
                    href="/farming"
                    className="block px-4 py-3 text-sm text-white hover:bg-[#fff] hover:text-black transition-colors"
                  >
                    Agricultural Farming
                  </Link>
                </div>
              </div>
              {/* <Link
                href=""
                className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] transition-colors"
              >
                Future Plans
              </Link> */}
              <Link
                href="/projects"
                className="text-white   text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] transition-colors"
              >
                Developments
              </Link>
              <Link
                href="/contact"
                className="text-white  text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] transition-colors"
              >
                Contact Us
              </Link>
              <Link href="/contact">
                <button
                  className={`bg-transparent border-1 border-white text-white px-2 xl:px-4 py-2 rounded-full relative overflow-hidden group transition-all duration-300 hover:bg-white hover:text-black`}
                >
                  <span>Get In Touch</span>
                  <span
                    className={`absolute right-4 top-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
                  >
                    →
                  </span>
                </button>
              </Link>
              <div className="text-gray-300">|</div>
              <div className="flex space-x-3 xl:space-x-4">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="text-white  hover:text-pink-600 transition"
                >
                  <Instagram size={18} className="xl:w-5 xl:h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-white  hover:text-blue-600 transition"
                >
                  <Facebook size={18} className="xl:w-5 xl:h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-white  hover:text-blue-700 transition"
                >
                  <Linkedin size={18} className="xl:w-5 xl:h-5" />
                </Link>
                <Link
                  href="https://yourwebsite.com"
                  target="_blank"
                  className="text-white  hover:text-green-600 transition"
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
  bg-[#ffffff]
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
            <Link
              href="/"
              className="text-gray-800 hover:text-[#251f77] py-4 transition-all duration-200 font-medium text-left border-gray-100 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-800 hover:text-[#251f77] py-4 transition-all duration-200 font-medium text-left border-gray-100 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Dropdown for Our Businesses */}
            <div className="">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="flex justify-start items-center w-full text-gray-800 hover:text-[#251f77] py-4 transition-all duration-200 font-medium text-left"
              >
                <span>Our Businesses</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isMobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Dropdown Menu */}
              <div
                className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${
                  isMobileDropdownOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
              >
                <Link
                  href="/construction"
                  className="block pl-6 py-3 text-sm text-gray-600 hover:text-[#251f77] transition-colors "
                  onClick={() => setIsOpen(false)}
                >
                  Construction & Engineering
                </Link>
                <Link
                  href="/trading"
                  className="block pl-6 py-3 text-sm text-gray-600 hover:text-[#251f77] transition-colors "
                  onClick={() => setIsOpen(false)}
                >
                  Commodities Trading
                </Link>
                <Link
                  href="/farming"
                  className="block pl-6 py-3 text-sm text-gray-600 hover:text-[#251f77] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Agricultural Farming
                </Link>
              </div>
            </div>

            {/* <Link
              href="/future-plans"
              className="text-gray-800 hover:text-[#251f77] py-4  transition-all duration-200 font-medium text-left  border-gray-100 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Future Plans
            </Link> */}

            <Link
              href="/projects"
              className="text-gray-800 hover:text-[#251f77] py-4  transition-all duration-200 font-medium text-left  border-gray-100 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Developments
            </Link>

            <Link
              href="/contact"
              className="text-gray-800 hover:text-[#251f77] py-4  transition-all duration-200 font-medium text-left  border-gray-100 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            {/* {[
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
            ))} */}

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
          bg-black
    border-1
    border-black
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
               <span className="absolute right-4 top-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
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
