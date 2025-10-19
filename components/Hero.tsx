"use client";
import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";

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
      id="hero"
      className="relative w-full flex items-center overflow-hidden py-28"
    >
      {/* === Background Gradient + Glow Layers === */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-black via-[#111] to-black" />

      {/* soft orange radial glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5, ease: easeOut }}
        className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FD6F00]/40 blur-[160px] -z-20"
      />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto text-white">
        {/* === LEFT TEXT SECTION === */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 max-w-lg text-center lg:text-left relative z-10"
        >
          {/* Glow behind text for focus */}
          <div className="absolute -left-10 top-20 w-40 h-40 bg-[#FD6F00]/20 blur-[100px] -z-10"></div>

          {/* Intro */}
          <motion.div variants={item}>
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              👋 Hello, welcome to my portfolio
            </p>
            <h2 className="text-lg font-semibold text-gray-300">
              I’m <span className="text-white">Kingsley Effiong</span>
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-[#FD6F00] via-[#ff944d] to-[#CA5900] bg-clip-text text-transparent leading-snug drop-shadow-[0_0_15px_rgba(253,111,0,0.25)]">
              Full Stack Developer
            </h1>

            <p className="text-gray-400 text-base sm:text-lg mt-1">
              (Specialized in modern frontend development)
            </p>

            {/* Short personal blurb */}
            <motion.p
              variants={item}
              className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              I’m passionate about building engaging, user-centered web
              experiences with clean UI and smooth functionality. I focus on
              creating performant, scalable, and accessible applications that
              not only work but *wow* users.
            </motion.p>
          </motion.div>

          {/* Floating Tech Tags */}
          <motion.div
            variants={container}
            className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start"
          >
            {["React", "Next.js", "Node.js", "Tailwind CSS", "Firebase"].map(
              (tech, i) => (
                <motion.span
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-xs sm:text-sm rounded-full border border-[#FD6F00]/30 text-[#FD6F00] bg-[#FD6F00]/5 shadow-sm"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex gap-5 justify-center lg:justify-start mt-5"
          >
            {[
              { Icon: Twitter, link: "https://x.com/your_developerr" },
              {
                Icon: Linkedin,
                link: "https://www.linkedin.com/in/kingsley-effiong-a84641253/",
              },
              { Icon: Github, link: "https://github.com/kingsleyeffiong" },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 shadow-lg hover:shadow-[#FD6F00]/30 backdrop-blur-sm hover:bg-[#FD6F00]/20 transition"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-white transition" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex sm:flex-row flex-col gap-4 justify-center lg:justify-start mt-6"
          >
            <Link
              href="#projects"
              className="px-8 sm:px-10 py-3 font-semibold rounded-lg bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white shadow-md hover:scale-105 transition-all duration-300"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="px-8 sm:px-10 py-3 font-semibold rounded-lg border border-gray-700 bg-white/5 backdrop-blur-md text-gray-300 hover:text-white hover:border-[#FD6F00] hover:bg-[#FD6F00]/10 shadow-md hover:shadow-[#FD6F00]/30 hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 gap-3 bg-white/5 backdrop-blur-lg rounded-2xl mt-8 text-xs sm:text-sm border border-white/10 shadow-inner shadow-black/30"
          >
            {[
              { number: "3+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-5 text-center ${
                  i === 0 ? "border-r border-white/10" : ""
                }`}
              >
                <p className="text-[#FD6F00] text-lg sm:text-xl font-bold drop-shadow-[0_0_5px_rgba(253,111,0,0.6)]">
                  {stat.number}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* === RIGHT IMAGE === */}
        <motion.div
          variants={item}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
          className="relative flex justify-center w-[280px] sm:w-[340px] md:w-[400px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#000] border border-white/10 shadow-[0_0_60px_-15px_rgba(253,111,0,0.3)]"
        >
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-tr from-[#FD6F00]/40 to-transparent blur-[40px] -z-10"></div>

          <Image
            src="/profile.png"
            alt="Profile"
            width={400}
            height={500}
            className="object-cover grayscale hover:grayscale-0 transition duration-700"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
