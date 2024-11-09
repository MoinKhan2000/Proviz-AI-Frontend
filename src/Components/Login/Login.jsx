import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useUser } from '../../store/userContext';
import { AiOutlineClose } from 'react-icons/ai';
import '../../../src/App.css'
import { useNavigate } from 'react-router';

const Login = ({ isOpen, onClose }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await login(credentials);

    if (response.success) {
      toast.success('Logged in successfully');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      toast.error('Invalid email or password');
    }
    onClose()
    setLoading(false);
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
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          {/* Submit */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-semibold text-white rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 hover:bg-gradient-to-l focus:outline-none transition-all duration-300 animate-gradient-motion"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
