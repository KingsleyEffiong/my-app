"use client";
import React from "react";
import { Instagram, Linkedin, Dribbble, Twitter } from "lucide-react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";

// Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

function Hero() {
  return (
    <section
      id="#"
      className="relative w-full flex items-center overflow-hidden py-28"
    >
      {/* Background Gradient + Glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black via-[#1a1a1a] to-black"></div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 1.5, ease: easeOut }}
        className="absolute left-0 top-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-[#FD6F00] blur-3xl -z-10"
      />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto text-white">
        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 max-w-lg text-center lg:text-left"
        >
          {/* Intro */}
          <motion.div variants={item}>
            <p className="text-xs sm:text-sm text-gray-400">Hi I am</p>
            <h2 className="text-base sm:text-lg font-medium text-[#959595]">
              Your Developer
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent leading-snug drop-shadow-md">
              Full Stack Developer <br />
              <span className="text-gray-300 text-lg sm:text-xl font-medium">
                (with strong Frontend expertise)
              </span>
            </h1>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex gap-5 justify-center lg:justify-start text-gray-400"
          >
            {[
              { Icon: Twitter, link: "https://x.com/your_developerr" },
              {
                Icon: Linkedin,
                link: "https://www.linkedin.com/in/kingsley-effiong-a84641253/",
              },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-[#FD6F00]/20 cursor-pointer transition inline-block"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white" />
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#contact"
              className="px-8 sm:px-10 py-2 font-semibold rounded-lg border border-gray-600 bg-white/5 backdrop-blur-md text-gray-300 hover:text-white hover:border-white hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </Link>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-2 sm:gap-4 bg-white/5 backdrop-blur-md rounded-xl overflow-hidden mt-6 text-xs sm:text-sm border border-white/10"
          >
            {[
              { number: "3+", label: "Experiences" },
              { number: "10+", label: "Projects Done" },
              { number: "5+", label: "Happy Clients" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-4 text-center ${
                  i < 2 ? "border-r border-white/10" : ""
                }`}
              >
                <p className="text-[#FA6E00] text-lg sm:text-xl font-bold">
                  {stat.number}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE inside CIRCLE */}
        <motion.div
          variants={item}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -12, 0], // floating effect
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
          className=" flex justify-center relative w-[280px] sm:w-[340px] md:w-[400px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl"
        >
          <Image
            src="/profile.png"
            alt="Profile"
            width={400}
            height={500}
            className="object-cover grayscale hover:grayscale-0 transition duration-500"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
