import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useUser } from '../../store/userContext';
import { AiOutlineClose } from 'react-icons/ai';
import '../../../src/App.css'

const SignUp = ({ isOpen, onClose }) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: '',
    role: 'admin',
    profileImage:
      'https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg',
  });
  const { signUp } = useUser();
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value, type, files } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('name', credentials.name);
    formData.append('email', credentials.email);
    formData.append('password', credentials.password);
    formData.append('role', credentials.role);
    formData.append('profileImage', credentials.profileImage);

    const response = await signUp(formData);
    setLoading(false);

    if (response.success) {
      toast.success(`${response.message} Login Now`);
      onclose()
    } else {
      toast.error(`${response.message}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 md:mt-20 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="relative w-11/12 max-w-lg p-6 rounded-lg shadow-lg backdrop-blur-md bg-white/10 border border-white/20"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-all"
        >
          <AiOutlineClose className="text-2xl" />
        </button>
        <h1 className="text-3xl font-bold text-center text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Create a New Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={credentials.name}
              onChange={onChange}
              className="w-full border border-gray-700 bg-gray-800/40 text-white rounded-md px-4 py-2 mt-1 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={credentials.email}
              onChange={onChange}
              className="w-full border border-gray-700 bg-gray-800/40 text-white rounded-md px-4 py-2 mt-1 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={onChange}
              className="w-full border border-gray-700 bg-gray-800/40 text-white rounded-md px-4 py-2 mt-1 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Confirm Password */}
          <div>
            <label htmlFor="cPassword" className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="cPassword"
              id="cPassword"
              value={credentials.cPassword}
              onChange={onChange}
              className="w-full border border-gray-700 bg-gray-800/40 text-white rounded-md px-4 py-2 mt-1 focus:outline-none"
              placeholder="Re-enter your password"
              required
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-semibold text-white rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 hover:bg-gradient-to-l focus:outline-none transition-all duration-300 animate-gradient-motion"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
