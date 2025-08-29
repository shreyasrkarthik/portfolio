"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <nav className="bg-gradient-to-r from-white-100 via-white-800 to-white-100 animate-gradient text-white p-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center space-x-3">
          {/* Logo (replace with your uploaded image) */}
          <Image src="/logo_no_bg.png" alt="Website Logo" width={50} height={50} className="square-full" />

          {/* Website Title */}
          <span className="text-2xl font-bold text-[#c8cefa]">Code, Content and Chronicles</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {["Home", "Projects", "Contact", "Resume", "About"].map((item) => (
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 border border-[#c8cefa] rounded-md hover:bg-[#c8cefa] hover:text-black transition"
            >
              {item.name}
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
        <div className="md:hidden flex flex-col items-center mt-2 py-2 space-y-2">
          {["Home", "Projects", "Contact", "Social", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-4 py-2 border border-[#c8cefa] rounded-md hover:bg-[#c8cefa] hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center mt-2 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 border border-[#c8cefa] rounded-md hover:bg-[#c8cefa] hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
    </nav>
  );
}
