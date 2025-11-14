import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Instagram, Facebook, Linkedin, Globe } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-[#000] text-white relative px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20 xl:px-12 xl:py-24">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 mb-8">
        {/* --- Column 1: Company Info - Full width on mobile, 1st column on desktop --- */}
        <div className="lg:col-span-1 text-start sm:text-left">
          <Link href="/" className="inline-block">
            <div className="mb-1 sm:mb-2 lg:mb-3">
              <span className="text-3xl sm:text-3xl lg:text-3xl xl:text-3xl font-light font-sans tracking-wide drop-shadow-lg leading-none-2">
                Able Group
              </span>
            </div>
          </Link>
          <p className="text-gray-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x] leading-relaxed">
            A dynamic international conglomerate specializing in construction,
            strategic trading, and sustainable agribusiness across India, the
            Middle East, and East Africa.
          </p>
          <br />
          <ul className="space-y-3 sm:space-y-4 text-gray-300">
            <div className="mb-1 sm:mb-2 lg:mb-3">
              <span className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-light font-sans tracking-wide drop-shadow-lg leading-none-2">
                Email
              </span>
            </div>

            <li className="flex text-start gap-3 justify-start sm:justify-start">
              <MdEmail className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] flex-shrink-0" />
              <span className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px]">
                Py.ableengineeringcoltd@gmail.com
              </span>
            </li>
          </ul>
        </div>

        {/* --- Columns 2 & 3: Quick Links & New Launches - 2 columns on mobile, 2nd & 3rd columns on desktop --- */}
        <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-2">
          {/* Quick Links */}
          <div className="text-start sm:text-left">
            <div className="mb-1 sm:mb-2 lg:mb-3">
              <span className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-light font-sans tracking-wide drop-shadow-lg leading-none-2">
                Quick Links
              </span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
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
                  Future Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
                >
                  Developments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* New Launches */}
          <div className="text-start sm:text-left">
            <div className="mb-1 sm:mb-2 lg:mb-3">
              <span className="text-[12px] sm:text-[16px] lg:text-[16px] xl:text-[16x] font-light font-sans tracking-wide drop-shadow-lg leading-none-2">
                Our Business
              </span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
                >
                  Construction & Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
                >
                  Commodities Trading
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14x]"
                >
                  Agricultural Farming
                </a>
              </li>
            </ul>
          </div>


          
        </div>
        
      </div>
    
      {/* --- Column 4: Address - Full width on mobile, 4th column on desktop --- */}
      <div className="border-t border-t-1 border-gray-400 text-start">
        <div className="mb-4 mt-8 ">
          <span className="text-2xl sm:text-3xl lg:text-3xl xl:text-3xl font-light font-sans tracking-wide drop-shadow-lg">
            Our Branches
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          {/* Head Office Section */}
          <div className="flex-1">
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              {/* Head Office */}
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] mt-1 flex-shrink-0" />
                <span className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] text-left">
                  <strong> India (Headquarters & Construction)</strong>
                  




                  <br />
                 Able Group Trading Contractors
                  <br />
                 X-427, Cheruvadi, Mavoor,
                  <br />
                  Kozhikode - 673661
                  <br />
                  Kerala, India  <br />
                  <span className="text-[11px]">Tel: <br /></span>  +91 9656 007755 <br />
                  +91 9526 746402

                </span>
              </li>
            </ul>
          </div>

          {/* Associated Companies Section */}
          <div className="flex-1">
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] mt-1 flex-shrink-0" />
                <span className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] text-left">
                  <strong>Uganda (Construction & Engineering)</strong>
 
                  <br />
                 P.Y ABLE CONSTRUCTION & ENGINEERING CO. LTD<br />
                 NAKASERO ||| BUGANDA ROAD  <br />
                 P.O.BOX 168327  <br />
                 KAMPALA UGANDA
                 {/* <br />
                 Central Kampala, Nisbasero III
                  <br />
                  Buganda Road I, Uganda */}
                  <br />

                   <span className="text-[11px]">Tel: <br /></span>  +256 752 405037 <br />
                 +256 753 049048 <br />+256 758 010181

                 


          
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] mt-1 flex-shrink-0" />
                <span className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] text-left">
                  <strong> Qatar (Trading & Building Materials) </strong>
                  <br />
                  Able Group W.L.L.
                  <br />
Barwa Commercial Avenue, Type-5(Sayer), Block-30, 2nd Floor
<br />
Ind. area Road, Doha, Qatar
                 
                  <br />
                  <span className="text-[11px]">Tel: +974 4450 1707</span>

                  <br /> Showroom:Barwa Village, Building - 6, Shop-40842, Wakrah
                  <br />
                   <span className="text-[11px]">Tel: +974 4415 5355</span>
                  {/* <a href="https://www.ablegroupqatar.com/" target="_blank" rel="noopener noreferrer" class="text-blue-300 hover:text-blue-100 underline">https://www.ablegroupqatar.com/</a>
                   */}
 
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] mt-1 flex-shrink-0" />
                <span className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] text-left">
                  <strong>Saudi Arabia (Trading)</strong>
                  <br />
                 Able Middle East Trading Company
(شركة قادر الشرق الأوسط للتجارة)
                  <br />
                  Building No: 3325, Street: Al Afadila, Secondary No:8853
                  <br />
Al Khalidiyah Ash Shamaliyah Dist., Postal Code: 32231
<br />
Dammam, Kingdom of Saudi Arabia
                 
                  <br />
                  <span className="text-[11px]">Tel: +966 558 294 888</span>
                </span>
              </li>
            </ul>
          </div>
            <div className="flex-1">
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] mt-1 flex-shrink-0" />
                <span className="text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[14px] text-left">
                  <strong>India (Farming)</strong>
                  <br />
                  Able Farms Pvt. Ltd.
                  <br />
Office No 5 Q, 1st Floor, Able Commercial Avenue,
<br />
Karasherry, Kozhikode, Kerala
<br />

                 
                  <span className="text-[11px]">Tel: +91 9526 746402</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-t-1 border-gray-400 mt-8 sm:mt-12 ">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-white text-[10px] sm:text-[11px]">
          {/* Copyright + Legal Links in one line */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 ">
            <span className="sm-pt-4">
              ©{new Date().getFullYear()} AbleGroup By Uganda Construction
              Company.
            </span>
            {/* <span className="hidden sm:inline">|</span>
      <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
      <span className="hover:text-white cursor-pointer transition-colors">Privacy Notice</span>
      <span className="hover:text-white cursor-pointer transition-colors">Trustine Cookies</span>
      <span className="hover:text-white cursor-pointer transition-colors">Quality Policy</span> */}
          </div>

          {/* Social/Icon Area */}
          <div className="flex gap-1 text-xs">
            <div className="flex justify-start  py-4 sm-py-2 space-x-4 sm:space-x-6 ">
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
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/256123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-black hover:bg-black-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.424" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
