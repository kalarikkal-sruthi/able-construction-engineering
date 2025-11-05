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
      <header className="fixed top-[15px] left-0 w-full z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 border shadow-md border-gray-200 rounded-full bg-[#ffffff] backdrop-blur-sm">
          <div className="flex justify-between items-center py-2">
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
                    className="object-contain ml-2 sm:ml-[20px] w-20 sm:w-24"
                  />
                </Link>
              </div>
              {/* Able Group Title with Highlighted Head */}
              <div className="sm:block">
                <div className="flex items-baseline">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-[#251f77] text-white px-2 py-1 rounded-l-md">
                    Able
                  </span>
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-[#251f77] px-2 py-1 border border-[#251f77] rounded-r-md">
                    Group
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 mr-4">
              <Link
                href="/"
                className="text-[#bf7b7b] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Home
              </Link>
              <Link
                href=""
                className="text-[#bf7b7b] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                About
              </Link>
              <Link
                href=""
                className="text-[#bf7b7b] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Business Plan
              </Link>
              <Link
                href=""
                className="text-[#bf7b7b] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Our Works
              </Link>
              <Link
                href=""
                className="text-[#bf7b7b] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Company Profile
              </Link>
              <Link
                href=""
                className="text-[#bf7b7b] hover:text-[#251f77] text-sm xl:text-base transition-colors"
              >
                Contact
              </Link>
              <button className="bg-[#251f77] text-white px-4 xl:px-6 py-2 rounded-full hover:bg-[#251f7780] transition text-sm xl:text-base">
                Get In Touch
              </button>
              <div className="text-gray-300">|</div>
              <div className="flex space-x-3 xl:space-x-4">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="text-gray-500 hover:text-pink-600 transition"
                >
                  <Instagram size={18} className="xl:w-5 xl:h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <Facebook size={18} className="xl:w-5 xl:h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-gray-500 hover:text-blue-700 transition"
                >
                  <Linkedin size={18} className="xl:w-5 xl:h-5" />
                </Link>
                <Link
                  href="https://yourwebsite.com"
                  target="_blank"
                  className="text-gray-500 hover:text-green-600 transition"
                >
                  <Globe size={18} className="xl:w-5 xl:h-5" />
                </Link>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-500 focus:outline-none mr-2 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-xl rounded-3xl">
            <nav className="flex flex-col p-4">
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
                  className="text-gray-800 hover:text-[#251f77] py-4 px-4 hover:bg-gray-50 transition-colors font-medium text-left border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}

              {/* Social Icons in Mobile Menu */}
              <div className="flex justify-center space-x-6 py-6 border-b border-gray-100">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="text-gray-500 hover:text-pink-600 transition"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-gray-500 hover:text-blue-700 transition"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="https://yourwebsite.com"
                  target="_blank"
                  className="text-gray-500 hover:text-green-600 transition"
                >
                  <Globe size={24} />
                </Link>
              </div>

              <div className="pt-4">
                <button className="bg-[#251f77] text-white px-6 py-4 rounded-full hover:bg-[#251f7780] transition w-full font-semibold text-lg">
                  Get In Touch
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </main>
  );
}
