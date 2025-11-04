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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640, // phones
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // ✅ Each object represents a different service/project
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
    <div className="slider-container px-30 pb-30  bg-[#f2e4e4]">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-4">
            <div className=" rounded-xl  text-center  transition duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="px-6 py-4">
                <h3 className="text-3xl font-bold text-[#a14c4d] ">
                  {project.title}
                </h3>
                {/* <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default QualityServices;
