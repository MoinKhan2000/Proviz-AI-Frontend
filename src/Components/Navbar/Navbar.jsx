import React, { useEffect, useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Link, Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Logo from '../../assets/Logo.png';
import Modal from '../Modal/Modal';
import { useUser } from '../../store/userContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const { user, logOutUser, getUser } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: ['Proviz School of AI'],
    loop: 0,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'WhyUs', id: 'whyUs' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Our Mission', id: 'mission' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled((prev) => prev !== scrolled ? scrolled : prev); // Only update if value changes
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const openModal = (type) => {
    if (modalType !== type || !isModalOpen) {
      setModalType(type); // Set modal type to 'login' or 'signup'
      setIsModalOpen(true); // Open the modal
    }
  };

  const closeModal = () => {
    if (isModalOpen) setIsModalOpen(false); // Close the modal
  };

  const handleLogout = () => {
    logOutUser();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <div
      className={`fixed w-full z-30 bg-[#050913] bg-opacity-80 shadow-md transition-all duration-300 ${isScrolled ? 'shadow-md' : ''
        }`}
    >
      <nav className="max-w-7xl m-auto flex justify-between items-center p-8 md:p-4 relative">
        {/* Logo */}
        <RouterLink to="/" className="cursor-pointer flex justify-center items-center gap-4">
          <motion.img
            src={Logo}
            className="w-6 md:w-12 shadow-2xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="text-gray-50 text-sm md:text-xl font-semibold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {text} <Cursor />
          </motion.div>
        </RouterLink>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <HiX className="text-white text-xl md:text-3xl cursor-pointer" />
          ) : (
            <HiMenuAlt4 className="text-white text-xl md:text-3xl cursor-pointer" />
          )}
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 items-center">
          {!location.pathname.includes('/dashboard') &&
            navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <ScrollLink
                  to={item.id}
                  spy
                  smooth
                  duration={500}
                  activeClass="bg-white text-black"
                  className="cursor-pointer text-[#5d17eb] hover:bg-white hover:text-[#5d17eb] transition-all duration-300 uppercase rounded-md px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </ScrollLink>
              </motion.li>
            ))}

          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.2 }}
          >
            {user ? (
              <div className="flex gap-2">
                <Link
                  to="/dashboard"
                  className="bg-[#5d17eb] text-white hover:bg-[#4a14b2] transition-all duration-300 uppercase px-3 py-2 text-sm font-medium rounded-md"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-[#5d17eb] text-white hover:bg-[#4a14b2] transition-all duration-300 uppercase px-3 py-2 text-sm font-medium rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => openModal('login')}
                  className="bg-[#5d17eb] text-white hover:bg-[#4a14b2] transition-all duration-300 uppercase px-3 py-2 text-sm font-medium rounded-md"
                >
                  Login
                </button>
                <button
                  onClick={() => openModal('signup')}
                  className="bg-[#5d17eb] text-white hover:bg-[#4a14b2] transition-all duration-300 uppercase px-3 py-2 text-sm font-medium rounded-md"
                >
                  Sign Up
                </button>
              </div>
            )}
          </motion.li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-20 left-0 w-full bg-black bg-opacity-90 transition-all duration-300 ${toggle ? 'block' : 'hidden'
            }`}
        >
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <ScrollLink
                  to={item.id}
                  spy
                  smooth
                  duration={500}
                  className="cursor-pointer text-white hover:bg-white hover:text-[#5d17eb] transition-all duration-300 uppercase rounded-md px-3 py-2 text-xs font-medium"
                  onClick={() => setToggle(false)}
                >
                  {item.name}
                </ScrollLink>
              </motion.li>
            ))}

            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.2 }}
            >
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-[#5d17eb] transition-all duration-300 uppercase px-3 py-2 text-xs font-medium"
                >
                  Logout
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setToggle(false);
                      openModal('login');
                    }}
                    className="bg-[#5d17eb] text-white hover:bg-[#4a14b2] transition-all duration-300 uppercase px-3 py-2 text-xs font-medium rounded-md"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setToggle(false);
                      openModal('signup');
                    }}
                    className="bg-[#5d17eb] text-white hover:bg-[#4a14b2] transition-all duration-300 uppercase px-3 py-2 text-xs font-medium rounded-md"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </motion.li>
          </ul>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} modalType={modalType} />}
    </div>
  );
};

export default Navbar;
