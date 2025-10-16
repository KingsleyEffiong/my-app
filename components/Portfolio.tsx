"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";

const categories = [
  "All",
  "Website Design",
  "App Mobile Design",
  "App Desktop",
  "Branding",
];

const portfolioItems = [
  {
    id: 1,
    name: "Smart Social Media management tool",
    category: "Web Application",
    image: "/images/nexaa.png",
    liveLink: "https://app.nexaasocial.com/",
    githubLink: "https://github.com/nexaa-devs/nexaa-frontend",
  },
  {
    id: 3,
    name: "Mount Tech Token Disbursment",
    category: "Web 3 Application",
    image: "/images/web 3 app.png",
    liveLink: "https://token-livid.vercel.app/",
    githubLink: "https://github.com/KingsleyEffiong/Web-3-Web-application",
  },
  {
    id: 3,
    name: "AI Powered Resume Review",
    category: "Web Application",
    image: "/images/resumeai.png",
    liveLink: "https://ai-powered-resume-review.vercel.app/",
    githubLink: "https://github.com/KingsleyEffiong/AI-Powered-Resume-Review",
  },
  {
    id: 4,
    name: "AI Promtopia",
    category: "Web Application",
    image: "/images/promptopia.png",
    liveLink: "https://promptopia-theta-azure.vercel.app/",
    githubLink: "https://github.com/ai-promptopia",
  },
  {
    id: 5,
    name: "Telegram Web 3 Web Application",
    category: "Web Application",
    image: "/images/mounttech telegram miniapp.png",
    liveLink: "https://mounttechapp.vercel.app/",
    githubLink: "https://github.com/KingsleyEffiong/Telegram-MiniApp",
  },
  {
    id: 6,
    name: "MyExpense-X",
    category: "Web Application",
    image: "/images/dashboard expense.png",
    liveLink: "https://my-expenses-eight.vercel.app/",
    githubLink: "https://github.com/KingsleyEffiong/MyExpense-X",
  },
  {
    id: 7,
    name: "Amazon Price Checker",
    category: "Website Application",
    image: "/images/amazon.png",
    liveLink: "https://amazon-price-tracker-web-application.vercel.app/login",
    githubLink:
      "https://github.com/KingsleyEffiong/Amazon-price-tracker-web-application",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-6 md:px-10 py-20 text-white bg-black"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Recent Portfolio Projects
        </h2>
      </div>

      {/* Filter Buttons */}
      {/* <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#FD6F00] text-white shadow-md"
                : "bg-white/10 hover:bg-white/20 text-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div> */}

      {/* Portfolio Items - Desktop */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 shadow-2xl hover:scale-[1.02] transition-transform"
          >
            <div className="w-full h-[220px] relative rounded-md overflow-hidden mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-400 mb-3">{item.category}</p>

            {/* Action Links */}
            <div className="flex gap-3">
              {item.liveLink && (
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#FD6F00]/80 hover:bg-[#FD6F00] rounded-md text-sm transition-all"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live
                </a>
              )}
              {item.githubLink && (
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 border border-white/20 hover:border-white/40 text-sm rounded-md"
                >
                  <FaGithub className="text-sm" />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden overflow-hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides
          grabCursor
          loop
        >
          {filteredItems.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 shadow-xl"
              >
                <div className="w-full h-[200px] relative rounded-md overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{item.category}</p>

                <div className="flex gap-3">
                  {item.liveLink && (
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-[#FD6F00]/80 hover:bg-[#FD6F00] rounded-md text-sm transition-all"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live
                    </a>
                  )}
                  {item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 border border-white/20 hover:border-white/40 text-sm rounded-md"
                    >
                      <FaGithub className="text-sm" />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
