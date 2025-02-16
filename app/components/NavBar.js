"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-gradient text-white p-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          {/* Logo (replace with your uploaded image) */}
          <Image src="/srk_logo.png" alt="Website Logo" width={50} height={50} className="square-full" />

          {/* Website Title */}
          <span className="text-2xl font-bold">Code, Content and Chronicles</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {["Home", "Contact", "Social", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-500 mt-2 py-2 space-y-2">
          {["Home", "Contact", "Social", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
