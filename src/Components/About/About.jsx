import React from 'react';
import { motion } from 'framer-motion';
import { GrSupport, GrIntegration, GrGroup, GrAnalytics } from "react-icons/gr";

export function About() {
  const cards = [
    {
      id: 1,
      icon: <GrSupport className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Excellent Support",
      description: "We provide unparalleled support to our clients, offering expertise in AI development."
    },
    {
      id: 2,
      icon: <GrIntegration className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Seamless Integration",
      description: "Our tools integrate effortlessly into your existing workflows for optimal efficiency."
    },
    {
      id: 3,
      icon: <GrGroup className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Collaborative Community",
      description: "We foster collaboration, connecting AI enthusiasts and professionals globally."
    },
    {
      id: 4,
      icon: <GrAnalytics className="text-[#6600ff] w-16 h-16 group-hover:text-white transition-all duration-300" />,
      title: "Advanced Analytics",
      description: "Leverage cutting-edge analytics to drive smarter decisions with AI."
    }
  ];

  return (
    <motion.div
      className="flex flex-col items-center p-8 text-white justify-center bg-[#050913] w-full bg-cover bg-center bg-no-repeat relative py-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <div className="flex flex-col font-semibold justify-center items-center text-center w-2/3 space-y-4">
        <motion.h1
          className="uppercase tracking-wider text-sm md:text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What We Do
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-5xl leading-tight font-bold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore the power of AI development tools, crafted with brilliance, style, quality, and creativity.
        </motion.h2>
      </div>

      {/* Rotating Element */}
      <motion.div
        className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 mt-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-2 md:px-8 lg:px-32">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="group flex flex-col items-center justify-center p-4 md:p-16 shadow-lg hover:bg-[#6600ff] hover:border-transparent border border-[#6600ff] hover:shadow-2xl transition-all duration-300 text-center w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Icon */}
            {card.icon}
            {/* Title */}
            <h3 className="text-2xl font-bold mt-4 text-gray-200 group-hover:text-white transition-all duration-300">
              {card.title}
            </h3>
            {/* Description */}
            <p className="text-lg mt-2 text-gray-400 group-hover:text-gray-200 transition-all duration-300">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default About;
