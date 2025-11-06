"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function QualityServices() {
const settings = {
  dots: true,
  infinite: true,
  speed: 700,
 
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  responsive: [
    {
      breakpoint: 1440, // large laptops
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 1280, // laptops
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 1024, // tablets landscape
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 768, // tablets portrait
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 640, // large phones
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20px'
      }
    },
    {
      breakpoint: 480, // small phones
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '15px'
      }
    },
    {
      breakpoint: 375, // extra small phones
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '10px'
      }
    }
  ]
};

 
  const projects = [
    {
      id: 1,
      image: "/1.webp",
      title: "Structural Construction",
      description:
        "High-rise apartment structures built with precision-engineered RCC frameworks ensuring safety and stability.",
    },
    {
      id: 2,
      image: "/2.webp",
      title: "Luxury Apartments",
      description:
        "Modern residential apartments designed with premium finishes, natural lighting, and optimized space utilization.",
    },
    {
      id: 3,
      image: "/3.webp",
      title: "Architectural Planning",
      description:
        "Comprehensive architectural layouts for efficient apartment designs balancing aesthetics and functionality.",
    },
    {
      id: 4,
      image: "/4.webp",
      title: "General Contracting",
      description:
        "End-to-end apartment construction services from excavation to finishing, ensuring timely and quality delivery.",
    },
    {
      id: 5,
      image: "/5.webp",
      title: "Interior Finishing",
      description:
        "Elegant interiors for modern apartments featuring customized joinery, lighting, and space-saving solutions.",
    },
    {
      id: 6,
      image: "/6.webp",
      title: "Renovation & Remodeling",
      description:
        "Transforming existing apartment spaces into modern, efficient, and visually appealing living environments.",
    },
  ];

  return (
  <div className="slider-container bg-[#f5f5f5]">
  <Slider {...settings}>
    {projects.map((project) => (
      <div key={project.id} className="px-2 sm:px-3 lg:px-4 group">
        {/* Clean Card Design */}
        <div className="bg-white border-gray-100 transition-all duration-500 overflow-hidden hover:shadow-lg hover:shadow-yellow-100/50">
          {/* Image with Subtle Frame */}
          <div className="p-3 sm:p-4 lg:p-6 pb-0">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 sm:h-64 md:h-80 lg:h-96 xl:h-120 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-yellow-400/10 transition-colors duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-500 text-sm sm:text-base mb-3 sm:mb-4">
              Premium construction services
            </p>

            {/* Divider with yellow gradient */}
            <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full mx-auto group-hover:w-16 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
  );
}

export default QualityServices;
