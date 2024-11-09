import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import Bg from '../../assets/Bg.mp4';
// import Bg from '../../assets/Bg.gif'
import '../../../src/App.css'
import Modal from '../Modal/Modal';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const [text] = useTypewriter({
    words: [
      'Learn Artificial Intelligence',
      'Empower Your Future',
      'Build the AI of Tomorrow',
    ],
    loop: 0,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full min-h-screen text-gray-50 relative"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        // src={Bg}
        src='https://media.newyorker.com/clips/65f0ad946df76b565064a839/master/pass/NEW-YORKER_ShiraInbar_AI-Chess.mp4'
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Background Image */}
      {/* <img src={Bg} alt="Ai Image" className="absolute inset-0 w-full h-full object-cover" /> */}
      {/* <img src="https://media.newyorker.com/photos/65f0add362f949b2bb3fc540/16:9/w_800,h_450,c_limit/2-siteimage-NEW-YORKER_ShiraInbar_AI-Chess.gif" alt="Ai Image" className="absolute inset-0 w-full h-full object-cover" /> */}

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content Section */}
      <div className="z-10 flex flex-col items-center w-full">
        {/* Hero Section */}
        <motion.div
          className="w-full lg:w-3/4 text-center space-y-6 mt-10"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-xl md:text-5xl lg:text-6xl font-bold">
            <span>{text}</span>
            <Cursor cursorStyle="|" />
          </h1>
          <p className="text-xs lg:text-xl text-gray-300 mt-4">
            Join the future of AI with <strong>Proviz School of AI</strong>, where learning meets innovation.
          </p>
          <button className="px-8 py-3 mt-6 font-medium text-lg rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 hover:bg-gradient-to-l hover:scale-105 focus:outline-none animate-gradient-motion"
            onClick={() => openModal('apply')}
          >
            Apply Now
          </button>
          {/* Modal */}
          {isModalOpen &&
            <Modal isOpen={isModalOpen} onClose={closeModal} modalType={modalType} />
          }
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
