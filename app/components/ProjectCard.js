"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-white-100 via-white-800 to-white-100 text-white rounded-lg shadow-xl border-2 border-[#c8cefa] p-6 flex flex-col"
    >
      <h2 className="text-2xl font-bold text-[#c8cefa] mb-2">{title}</h2>
      <p className="flex-grow mb-4">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 border border-[#c8cefa] rounded-md hover:bg-[#c8cefa] hover:text-black transition"
      >
        Visit Project
      </Link>
    </motion.div>
  );
}
