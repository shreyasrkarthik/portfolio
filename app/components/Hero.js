"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-lg shadow-xl">
      {/* Left Side - Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full shadow-lg"
      >
        <Image
          src="/SRK.png" // Replace with your image path
          alt="Shreyas R K"
          layout="fill"
          objectFit="cover"
          className="square-full bg-gradient-to-r from-cream-800 via-gray-800 to-cream-800"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hey!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed transition-transform duration-300 hover:scale-105">
          I’m Shreyas, a passionate Software Engineer, creating engaging content and impactful projects.  
          I love sharing my journey and insights through Machine Learning and Distributed Systems, helping others grow along the way.
        </p>
      </motion.div>
    </section>
  );
}
