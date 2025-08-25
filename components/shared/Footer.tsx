"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <motion.footer
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full bg-black bg-opacity-20 backdrop-blur-xl border border-white border-opacity-10 rounded-2xl max-w-7xl mx-auto px-6 py-12 text-gray-300"
    >
      {/* Logo */}
      <motion.div variants={item} className="text-center md:text-left mb-10">
        <h2 className="text-orange-600 font-extrabold text-2xl tracking-wider">
          LOGO
        </h2>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        variants={item}
        className="flex flex-wrap justify-center md:justify-start gap-8 mb-10 text-sm font-medium"
      >
        {["Home", "Services", "About me", "Portfolio", "Contact me"].map(
          (link) => (
            <a
              key={link}
              href="#"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              {link}
            </a>
          )
        )}
      </motion.nav>

      {/* Social Icons */}
      <motion.div
        variants={item}
        className="flex justify-center md:justify-start space-x-8 text-2xl mb-12 text-gray-400"
      >
        {[FaInstagram, FaFacebookF, FaDribbble, FaBehance].map((Icon, i) => (
          <a
            key={i}
            href="#"
            aria-label="Social Icon"
            className="hover:text-orange-600 transition-colors transform hover:scale-110"
          >
            <Icon />
          </a>
        ))}
      </motion.div>

      {/* Contact Info */}
      <motion.div
        variants={item}
        className="flex flex-col md:flex-row md:justify-start md:space-x-20 text-sm text-gray-400 space-y-5 md:space-y-0 mb-12"
      >
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <HiOutlineMail className="text-lg" />
          <span>Mahmood.fazile7005@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <BsTelephone className="text-lg" />
          <span>+93 729 107 005</span>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.hr
        variants={item}
        className="border-t border-white border-opacity-10 mb-6"
      />

      {/* Credit */}
      <motion.div
        variants={item}
        className="text-xs text-gray-500 text-center md:text-left"
      >
        Designed by @mahmood.fazile UI/UX designer
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
