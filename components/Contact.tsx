"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Type for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  timeline: string;
  details: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    timeline: "",
    details: "",
  });

  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mrbazwqz", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          timeline: "",
          details: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-20 bg-black text-white"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 md:p-12 shadow-lg space-y-6"
      >
        {/* Title */}
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Contact me
        </motion.h2>
        <motion.p
          variants={item}
          className="text-center text-gray-400 text-sm sm:text-base"
        >
          Cultivating Connections: Reach Out And Connect With Me
        </motion.p>

        {/* Feedback Messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-600/10 text-green-300 border border-green-500/20 rounded-lg px-4 py-3 text-sm"
          >
            ✅ Your message has been sent successfully!
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-600/10 text-red-300 border border-red-500/20 rounded-lg px-4 py-3 text-sm"
          >
            ❌ Oops! Something went wrong. Please try again.
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          method="POST"
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
          />
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
          >
            <option value="">Service Of Interest</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile App Design</option>
            <option value="branding">Branding</option>
            <option value="uiux">UI/UX Design</option>
          </select>
          <input
            type="text"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="Timeline"
            className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FD6F00]"
          />
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            placeholder="Project Details..."
            className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FD6F00] sm:col-span-2"
          ></textarea>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#e45f00]"
              } bg-[#FD6F00] text-white font-semibold rounded-lg transition-all duration-300`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
