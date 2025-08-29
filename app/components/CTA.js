"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-r from-white-100 via-white-800 to-white-100 text-white rounded-lg shadow-xl border-2 border-[#c8cefa]">
      {/* Left Side */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full shadow-lg"
      >
        <Image
          src="/collab.webp" // Replace with your image path
          alt="Collaboration Image"
          layout="fill"
          objectFit="cover"
          className="square-full bg-[#c8cefa]"
        />
      </motion.div>
      
      {/* Right Side */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className="flex flex-col items-center md:items-start justify-center font-extrabold text-center md:text-left"
      >
        <h1 className="text-5xl text-[#c8cefa] md:text-5xl font-bold mb-2">Want to collaborate?</h1>
        <p className="text-lg text-gray-300">Let's create something amazing together!</p>
        <a
          href="#contact"
          className="font-semibold px-6 py-3 mt-4 rounded-lg shadow-md hover:bg-white-100 transition duration-300 border-2 border-[#c8cefa] hover:bg-[#c8cefa] hover:text-black"
        >
          Click Here
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;
