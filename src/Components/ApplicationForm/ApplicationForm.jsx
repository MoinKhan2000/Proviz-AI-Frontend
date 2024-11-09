import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { useApplication } from '../../store/applicationContext';
import { toast } from 'react-toastify';
import '../../../src/App.css'

const ApplicationForm = ({ isOpen, onClose }) => {
  const { addNewApplication } = useApplication();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addNewApplication(formData);
    if (response.success) {
      toast.success(`${response.message}`);
      onClose();
    } else {
      if (response.errors && response.errors.length > 0) {
        toast.error(response.errors[0].msg);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 md:mt-20 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ opacity: 1, y: '0%' }}
        exit={{ opacity: 0, y: '-50%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative w-11/12 max-w-lg p-6 rounded-lg shadow-lg backdrop-blur-md bg-white/10 border border-white/20"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-all"
        >
          <AiOutlineClose className="text-2xl" />
        </button>
        <h2 className="text-2xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800/40 text-white rounded-md px-4 py-2 mt-1   focus:outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <input
              type="number"
              maxLength={10}
              name="phoneNumber"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800/40 text-white rounded-md px-4 py-2 mt-1   focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-700 bg-gray-800/40 text-white rounded-md px-4 py-2 mt-1   focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300">
              Brief description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-700 bg-gray-800/40 text-white rounded-md px-4 py-2 mt-1   focus:outline-none"
              placeholder="Write a brief description about yourself"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-2 m-auto font-medium text-lg rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 hover:bg-gradient-to-l hover:scale-105 focus:outline-none animate-gradient-motion"
            >
              Submit Application
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ApplicationForm;
