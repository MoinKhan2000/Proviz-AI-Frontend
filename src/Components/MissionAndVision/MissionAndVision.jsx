import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaLightbulb, FaGlobe, FaUsers } from "react-icons/fa";
import { FaChartLine, FaDollarSign, FaUserGraduate } from 'react-icons/fa6';

const MissionAndVision = () => {
  const points = [
    {
      icon: <FaBullseye className="text-[#6600ff] w-10 h-10 group-hover:text-white transition-all duration-500" />,
      title: "Our Mission",
      description: "To deliver cutting-edge AI solutions that empower businesses globally.",
    },
    {
      icon: <FaLightbulb className="text-[#6600ff] w-10 h-10 group-hover:text-white transition-all duration-500" />,
      title: "Innovative Vision",
      description: "Fostering innovation to revolutionize industries with AI technology.",
    },
    {
      icon: <FaGlobe className="text-[#6600ff] w-10 h-10 group-hover:text-white transition-all duration-500" />,
      title: "Global Reach",
      description: "Creating solutions that connect and impact people worldwide.",
    },
    {
      icon: <FaUsers className="text-[#6600ff] w-10 h-10 group-hover:text-white transition-all duration-500" />,
      title: "Community Focus",
      description: "Building a thriving ecosystem for AI enthusiasts and professionals.",
    },
  ];

  return (
    <motion.div
      className="bg-[#050913] overflow-hidden text-white min-h-screen py-16 flex items-center justify-center relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute -right-32 w-96 h-96 bg-gradient-to-br from-pink-500 via-purple-500 to-transparent rounded-full blur-[90px] opacity-40"></div>
      {/* <div className="absolute -bottom-32 -right-48 w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-transparent rounded-full blur-[90px] opacity-40"></div> */}

      <div className="max-w-7xl w-full px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Panel - Mission and Vision Points */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="group flex items-center space-x-4 p-4 rounded-lg border text-black bg-[#fff] border-gray-700 shadow-lg hover:bg-[#6600ff] hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.01 }}
              >
                <div className="flex-shrink-0">{point.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white transition-all duration-500">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-black group-hover:text-white transition-all duration-500">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Panel - AI Image */}
        <motion.div
          className="space-y-6 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-[3rem] font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center">
            Mission & Vision
          </h1>
          <p className="text-lg text-gray-300">
            Our mission is to empower individuals and organizations by leveraging the transformative potential of AI.
            We aim to foster innovation, creativity, and growth while making AI accessible and beneficial for all.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <FaChartLine className="text-blue-500 w-8 h-8" />
              <span className="text-gray-300 hover:text-blue-500 transition-all duration-300">
                Drive innovation through advanced AI research.
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <FaDollarSign className="text-green-500 w-8 h-8" />
              <span className="text-gray-300 hover:text-green-500 transition-all duration-300">
                Create sustainable and scalable AI solutions.
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <FaUserGraduate className="text-purple-500 w-8 h-8" />
              <span className="text-gray-300 hover:text-purple-500 transition-all duration-300">
                Educate and upskill future AI leaders.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionAndVision;
