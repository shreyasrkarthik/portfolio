"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

export default function YouTubeCarousel() {
  const videos = [
    "idG8NIwtplU",
    "raxX1wwnSTY",
    "ipX3ovvNJ8g"
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-r from-white-100 via-white-150 to-white-100 text-white rounded-lg shadow-xl border-2 border-[#c8cefa]">
    
    <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 "
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mt-20">
          Youtube Podcasts!
        </h1>
    </motion.div>
    <motion.div /* This is the motion div for youtube videos*/
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        
      >
    <div className="w-full max-w-4xl mx-auto center my-8">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {videos.map((videoId, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-video flex flex-col md:flex-row justify-around items-center">
            <iframe
                className="min-h-[50vh] min-w-[40vw]"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="{Podcasts}"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </motion.div>
    </section>
  );
}
