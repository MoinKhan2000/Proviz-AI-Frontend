import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaHandsHelping, FaGlobe, FaLightbulb, FaUserTie, FaChartLine } from "react-icons/fa";
import '../../../src/App.css'

const WhyUs = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const reasons = [
    {
      icon: <FaRobot className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Cutting-Edge AI Solutions",
      description: "Explore innovative AI technologies tailored to solve real-world challenges.",
    },
    {
      icon: <FaHandsHelping className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Unmatched Customer Support",
      description: "We’re here 24/7 to provide top-notch support for your AI needs.",
    },
    {
      icon: <FaGlobe className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Global Collaboration Opportunities",
      description: "Connect with like-minded professionals and expand your network worldwide.",
    },
    {
      icon: <FaLightbulb className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Commitment to Innovation",
      description: "We prioritize creativity and cutting-edge solutions in every project.",
    },
    {
      icon: <FaUserTie className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Experienced AI Professionals",
      description: "Our team comprises industry leaders with years of AI expertise.",
    },
    {
      icon: <FaChartLine className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Affordable and Scalable Services",
      description: "Tailored solutions that grow with your business at competitive pricing.",
    },
  ];

  return (
    <motion.div
      className="bg-[#050913] text-white min-h-screen py-16 flex flex-col items-center relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouseMove}
    >

      {/* Why Choose Us Section */}
      <motion.div
        className="max-w-6xl w-full px-8 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why to Choose Us
        </motion.h1>
        <p className="text-sm md:text-lg text-gray-300 text-center mt-6">
          We are committed to delivering excellence in AI-driven solutions. Here's why we stand out:
        </p>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-[#0d1a30] rounded-lg relative overflow-hidden transition-all duration-300 text-center flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Hover Background */}
              <div className="absolute left-0 inset-0 bg-gradient-to-br from-[#6600ff] via-purple-500 to-pink-500 animate-gradient-motion transform scale-0 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-all duration-300">
                  {reason.title}
                </h3>
                <p className="mt-4 text-gray-400 group-hover:text-gray-200 transition-all duration-300">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WhyUs;
