import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FourOFour = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <motion.div
      className="min-h-screen  overflow-hidden w-full relative flex items-center justify-center bg-[#050913]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="text-9xl font-bold text-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          404
        </motion.div>

        <motion.div
          className="text-3xl font-semibold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Oops! Page not found
        </motion.div>
        <div
          className="absolute rounded-full blur-[100px] pointer-events-none animate-gradient-motion"
          style={{
            width: "300px",
            height: "300px",
            background: "linear-gradient(45deg, #6600ff, #ff0080, #00ccff, #ffcc00)",
            backgroundSize: "300% 300%",
            left: position.x - 150, // Centering the blur div
            top: position.y - 150, // Centering the blur div
          }}
        ></div>

        <motion.div
          className="text-lg text-gray-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          The page you are looking for might be in another castle.
        </motion.div>

        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 animate-gradient-motion "
        >
          Go Home
        </Link>

        <motion.div
          className="mt-8 text-white flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <FaExclamationTriangle className="inline-block text-4xl mr-2" />
          Something went wrong. Please try again later.
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default FourOFour;
