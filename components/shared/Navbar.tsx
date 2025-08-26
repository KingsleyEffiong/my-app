"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "#" },
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact Me", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex py-5 px-6 max-w-screen-xl mx-auto justify-between items-center h-[90px]  backdrop-blur-md rounded-xl mt-4"
      >
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent cursor-pointer">
          YOUR DEVELOPER
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-[50px] text-[#959595] font-medium">
          {navLinks.map(({ label, id }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.1 }}
              className={`relative cursor-pointer ${
                id === "#" ? "text-[#FD6F00] font-semibold" : "hover:text-white"
              }`}
            >
              <a href={`#${id}`} className="group relative inline-block">
                {label}
                {/* Underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#FA6E00] to-[#E60026] group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hire Me Button (Desktop only) */}
        <motion.a
          href="#contact"
          className="hidden md:inline-block px-7 py-2.5 text-sm sm:text-base font-semibold text-white rounded-full 
  bg-gradient-to-r from-[#FA6E00] to-[#E60026] shadow-lg hover:opacity-90 transition cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {!isOpen && (
            <Image
              src="/hambuger.svg"
              alt="Hamburger"
              width={24}
              height={24}
              className="text-white w-7 h-7 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black/95 backdrop-blur-md absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 text-lg font-medium text-white"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6"
              aria-label="Close menu"
            >
              <X className="w-7 h-7 cursor-pointer" />
            </button>
            {navLinks.map(({ label, id }) => (
              <motion.a
                key={id}
                href={`#${id}`}
                whileHover={{ scale: 1.1, color: "#FA6E00" }}
                onClick={() => setIsOpen(false)}
                className={`${
                  id === "#" ? "text-[#FD6F00]" : "hover:text-[#FA6E00]"
                }`}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.05 }}
              className="px-7 py-2.5 font-semibold text-white rounded-full bg-gradient-to-r from-[#FA6E00] to-[#E60026] shadow-lg hover:opacity-90 transition cursor-pointer"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
