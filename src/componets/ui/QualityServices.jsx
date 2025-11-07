import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

function QualityServices() {
  return (
<section className="py-10 md:py-24 lg:py-20 bg-gray-50">
  <div className=" mx-auto px-4 sm:px-6 lg:px-20">
    {/* Optional Section Heading */}
    <div className="text-center mb-8 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
OUR EXPERTISE
      </h2>
     
    </div>

    {/* Swiper Container */}
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        breakpoints={{
          // Mobile first approach
          480: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 25
          },
          // Small desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // Large desktop
          1280: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        modules={[FreeMode, Pagination]}
        className="services-swiper pb-12"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/expertise/jcb.jpg" 
                alt="Site Excavation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Transparent Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">EARTHWORKS</h3>
              <p className="text-xs md:text-sm opacity-90 leading-relaxed">Transforming Terrain with Surgical Precision.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/expertise/rcc.jpg" 
                alt="Land Grading"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Transparent Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">RCC STRUCTURES</h3>
              <p className="text-xs md:text-sm opacity-90 leading-relaxed">Creating Possibility from Raw Land.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/expertise/road.jpg" 
                alt="Erosion Control"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Transparent Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">ROAD CONSTRUCTION</h3>
              <p className="text-xs md:text-sm opacity-90 leading-relaxed">The Architecture of Strength and Permanence.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/expertise/pipeline.jpg" 
                alt="Final Preparation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Transparent Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">PIPELINE SYSTEMS</h3>
              <p className="text-xs md:text-sm opacity-90 leading-relaxed">Ready-to-build surfaces for construction projects</p>
            </div>
          </div>
        </SwiperSlide>


   <SwiperSlide>
          <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/expertise/drainage.jpg" 
                alt="Additional Service"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Transparent Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">DRAINAGE SYSTEMS</h3>
              <p className="text-xs md:text-sm opacity-90 leading-relaxed">Mastering the Flow, Taming the Elements.</p>
            </div>
          </div>
        </SwiperSlide>
           <SwiperSlide>
          <div className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 h-full bg-white">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/expertise/bridge.jpg" 
                alt="Additional Service"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Transparent Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-6 text-white">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2"> BRIDGE WORKS</h3>
              <p className="text-xs md:text-sm opacity-90 leading-relaxed">Connecting Destinies, Overcoming Nature's Challenges.</p>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>

      {/* Custom Pagination */}
    <div className="swiper-pagination flex justify-center items-center gap-2 !relative !mt-8"></div>
    </div>

    {/* Optional Navigation Buttons */}
   
  </div>
</section>
  )
}

export default QualityServices