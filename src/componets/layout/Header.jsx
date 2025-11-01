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
      <header className="fixed top-[15px] left-0 w-full z-50 ">
        <div className="mx-auto px-8 sm:px-10 lg:px-12 border  shadow-md border-blue-500 rounded-full bg-[#fff]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="font-bold text-blue-600 flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Able Logo"
                  width={120}
                  height={100}
                  className="object-contain ml-[20px]"
                />
              </Link>
            </div>

            <nav className="dispaly  md:flex items-center space-x-8 mr-8">
              <Link href="/" className="text-gray-300 hover:text-blue-500">
                Home
              </Link>
              <Link href="" className="text-gray-300 hover:text-blue-500">
                About
              </Link>
              <Link href="" className="text-gray-300 hover:text-blue-500">
                Buisiness Plan
              </Link>
              <Link
                href=""
                className="text-gray-300 hover:text-blue-500"
              >
                Our Works
              </Link>
              <Link
                href=""
                className="text-gray-300 hover:text-blue-500"
              >
                Company Profile
              </Link>
              <Link
                href=""
                className="text-gray-300 hover:text-blue-500"
              >
                Contact
              </Link>
              <button className="bg-[#251f77] text-white px-6 py-2 rounded-full hover:bg-[#251f7780] transition">
                Get In Touch
              </button>
              <div>|</div>
              <div className="flex space-x-6 ">
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="text-gray-500 hover:text-pink-600 transition"
                >
                  <Instagram size={20} />
                </Link>

                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <Facebook size={20} />
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-gray-500 hover:text-blue-700 transition"
                >
                  <Linkedin size={20} />
                </Link>

                {/* Website */}
                <Link
                  href="https://yourwebsite.com"
                  target="_blank"
                  className="text-gray-500 hover:text-green-600 transition"
                >
                  <Globe size={20} />
                </Link>
              </div>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden text-gray-300 hover:text-blue-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col p-4 space-y-3">
              {["Home", "Shop", "About", "Contact"].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </main>
  );
}
