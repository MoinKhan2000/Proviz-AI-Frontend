import React, { useState } from "react";
import { motion } from "framer-motion";
import '../../../src/App.css'

const courses = [
  {
    title: "Introduction to AI",
    description: "Learn the fundamentals of artificial intelligence and its applications.",
    duration: "4 Weeks",
    level: "Beginner",
    image: "https://media.istockphoto.com/id/1364859722/photo/artificial-intelligence-concept.jpg?s=612x612&w=0&k=20&c=KJsIp0XUPLlD9xjmjIg3Y5_Ohx9g373QYkWBeUt68Pk=",
  },
  {
    title: "Machine Learning Mastery",
    description: "Dive deep into ML algorithms, techniques, and best practices.",
    duration: "6 Weeks",
    level: "Intermediate",
    image: "https://thumbs.dreamstime.com/b/artificial-intelligence-technologies-machine-learning-data-sharing-deep-companies-introducing-new-effective-support-294827719.jpg",
  },
  {
    title: "Deep Learning with Neural Networks",
    description: "Master neural networks and implement deep learning models.",
    duration: "8 Weeks",
    level: "Advanced",
    image: "https://images.ctfassets.net/wp1lcwdav1p1/5maw13sYG3aYOco87fOgsH/34df160b253cfc19d29186d50ea68a3b/iStock-1205321953.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive",
  },
  {
    title: "Data Science for All",
    description: "Explore data analysis, visualization, and predictive modeling.",
    duration: "5 Weeks",
    level: "Beginner to Intermediate",
    image: "https://wallpapers.com/images/hd/data-science-business-information-m8dmd67am39ybvhs.jpg",
  },
  {
    title: "AI Ethics and Governance",
    description: "Understand the ethical implications of AI and responsible AI development.",
    duration: "3 Weeks",
    level: "All Levels",
    image: "https://img.freepik.com/premium-photo/ai-ethics-governance-earth-hologram-encircled-by-digital-links-global-ai-governance_1069077-5274.jpg",
  },
];

const Courses = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className="bg-[#050913] text-white py-16 w-full px-6 flex flex-col items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Blurry Gradient Background */}
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

      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Courses
      </motion.h1>

      {/* Course Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="p-4 bg-[#0d1a30] rounded-lg shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Image */}
            <motion.img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {/* Title */}
            <h3 className="text-lg text-center md:text-2xl font-semibold text-white mb-2">{course.title}</h3>
            {/* Description */}
            <p className="text-gray-400  text-sm md:text-lg text-center mb-4">{course.description}</p>
            {/* Details */}
            <div className="flex justify-between items-center text-sm text-gray-300">
              <span className="font-medium">Duration: {course.duration}</span>
              <span className="font-medium">Level: {course.level}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Courses;
