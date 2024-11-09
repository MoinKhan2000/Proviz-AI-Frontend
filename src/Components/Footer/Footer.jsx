import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../../assets/Logo.png';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Why Us', id: 'whyUs' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Our Mission', id: 'mission' },
  ];

  const linkAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <footer className="bg-gradient-to-r z-50 from-blue-950 to-gray-900 text-gray-300 py-8">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Logo and Title */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={Logo}
            alt="Logo"
            className="w-12 shadow-2xl"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
          <motion.h2
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Proviz School of AI
          </motion.h2>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6">
          {footerLinks.map((link, index) => (
            <motion.div
              key={link.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={linkAnimation}
            >
              <ScrollLink
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                {link.name}
              </ScrollLink>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.hr
          className="w-full border-gray-700 mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Footer Information */}
        <motion.div
          className="text-center text-sm sm:text-base text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mb-2">
            All rights reserved © 2024 - Proviz School of AI.
          </p>
          <p>
            Built with <span className="text-red-500">❤</span> by{' '}
            <motion.a
              href="https://linkedin.com/in/mk-moin-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Moin Khan
            </motion.a>{' '}
            and the Proviz team.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
