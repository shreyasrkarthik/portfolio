"use client";
import { motion } from "framer-motion";

export default function CTA() {
 
  return (
    <section className="flex flex-col items-center justify-center py-10 bg-gradient-to-r from-white-100 via-white-800 to-white-100 text-white rounded-2xl shadow-lg mx-4 md:mx-16 lg:mx-32 border-2 border-[#c8cefa]">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
    Want to collaborate?
  </h2>
  <p className="text-lg text-center mb-6">
    Let's create something amazing together!
  </p>
  <a
    href="/contact"
    className="font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white-100 transition duration-300 border-2 border-[#c8cefa] hover:bg-[#c8cefa]"
  >
    Click Here
  </a>
</section>

  );
}
