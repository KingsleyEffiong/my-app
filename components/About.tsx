"use client";
import React from "react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiFramer,
  SiThreedotjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

// Animation Variants
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

// Skill Data
const skills = [
  { name: "HTML", icon: <SiHtml5 size={28} />, percent: 100 },
  { name: "JavaScript", icon: <SiJavascript size={28} />, percent: 100 },
  { name: "TypeScript", icon: <SiTypescript size={28} />, percent: 100 },
  { name: "Next.js", icon: <TbBrandNextjs size={28} />, percent: 100 },
  { name: "MongoDB", icon: <SiMongodb size={28} />, percent: 100 },
  { name: "Express", icon: <SiExpress size={28} />, percent: 100 },
  { name: "TailwindCSS", icon: <SiTailwindcss size={28} />, percent: 100 },
  {
    name: "React & Node.js",
    icon: (
      <div className="flex items-center gap-1">
        <SiReact size={22} /> <SiNodedotjs size={22} />
      </div>
    ),
    percent: 100,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={28} />, // from react-icons/si
    percent: 100,
  },
  {
    name: "Three.js",
    icon: <SiThreedotjs size={28} />, // from react-icons/si
    percent: 100,
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 md:px-10 text-white overflow-x-hidden"
    >
      {/* Background Glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1.5, ease: easeOut }}
        className="absolute left-1/2 -translate-x-1/2 top-0 
                   w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] 
                   rounded-full bg-[#FD6F00] blur-3xl -z-10"
      />

      {/* Main Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Image Section */}
        <motion.div
          variants={item}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
          className="relative w-full flex justify-center"
        >
          <div className="relative w-[280px] sm:w-[340px] md:w-[400px] rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl">
            <Image
              src="/profile.png"
              alt="Profile"
              width={400}
              height={500}
              className="object-cover grayscale hover:grayscale-0 transition duration-500"
              priority
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div variants={container} className="flex flex-col gap-6">
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            A software engineer, the modern-day architect of digital realms,
            navigates the ethereal landscapes of code, sculpting intangible
            structures that shape our technological world...
            <br /> <br />
            Their canvas is a screen, a vast expanse where lines of code dance
            in intricate patterns. Each keystroke is a brushstroke, debugging
            becomes a noble pursuit, unraveling mysteries hidden within tangled
            webs of logic.
          </motion.p>

          {/* Contact Button */}
          <motion.div variants={item}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skillset Section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full mt-24 max-w-screen-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 md:gap-12 justify-items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <motion.div
              initial={{ strokeDasharray: "0 220" }}
              whileInView={{
                strokeDasharray: `${(skill.percent / 100) * 220} 220`,
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative w-20 h-20"
            >
              <svg className="absolute top-0 left-0 w-full h-full">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="#333"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="#FD6F00"
                  strokeWidth="8"
                  fill="none"
                  transform="rotate(-100 40 40)"
                  initial={{ strokeDasharray: "0 220" }}
                  whileInView={{
                    strokeDasharray: `${(skill.percent / 100) * 220} 220`,
                  }}
                  transition={{
                    duration: 1.4,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl text-white group-hover:text-[#FD6F00] transition-colors duration-300">
                {skill.icon}
              </div>
            </motion.div>
            <p className="text-sm font-medium">{skill.name}</p>
            {/* <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-sm text-gray-400"
            >
              {skill.percent}%
            </motion.p> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default About;
