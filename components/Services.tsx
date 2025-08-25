"use client";

import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { Code, Smartphone, Palette, Globe } from "lucide-react";

// Define type for service items
interface Service {
  icon: JSX.Element;
  title: string;
  desc: string;
}

// Framer Motion Variants with dynamic delay using a VariantResolver
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Smartphone className="w-10 h-10 text-[#FD6F00]" />,
      title: "App Design",
      desc: "Crafting intuitive, user-friendly, and visually stunning mobile app interfaces.",
    },
    {
      icon: <Globe className="w-10 h-10 text-[#FD6F00]" />,
      title: "Web Development",
      desc: "Building fast, scalable, and modern web applications using cutting-edge tech.",
    },
    {
      icon: <Code className="w-10 h-10 text-[#FD6F00]" />,
      title: "Full-Stack Development",
      desc: "Delivering complete solutions from frontend to backend with clean, maintainable code.",
    },
    {
      icon: <Palette className="w-10 h-10 text-[#FD6F00]" />,
      title: "UI/UX Design",
      desc: "Designing engaging digital experiences with a focus on clarity and usability.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-20 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1a1a1a] to-black"></div>
      <div className="absolute left-20 top-40 w-[400px] h-[400px] bg-[#FD6F00] blur-[180px] opacity-20 -z-10"></div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#FD6F00] to-[#E60026] bg-clip-text text-transparent">
          My Services
        </h1>
        <h3 className="text-gray-400 text-lg leading-relaxed">
          I provide modern web and app solutions tailored to your needs,
          blending functionality with creativity.
        </h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-start gap-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-md"
          >
            <div className="p-3 rounded-xl bg-white/10 group-hover:bg-[#FD6F00]/20 transition">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
