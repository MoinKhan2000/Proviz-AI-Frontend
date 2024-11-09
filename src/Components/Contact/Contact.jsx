import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useUser } from '../../store/userContext';

const Contact = () => {
  const { user } = useUser();
  console.log(user);

  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    message: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div className='min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100'>
      <form onSubmit={handleSubmit} className="bg-white px-4 md:px-12 py-4 md:py-8 shadow-2xl rounded-xsm md:text-black w-full sm:max-w-md">
        <h1 className="text-center text-xsm md:text-2xl font-bold leading-5 md:leading-8 text-gray-800 p-1 md:p-4">Contact Us</h1>

        <div className="grid md:grid-cols-1 grid-grow">
          <input
            type="text"
            className="block bg-blue-50 w-auto text-[12px] md:text-sm rounded-xsm p-1 md:p-3 outline-none font-mono mb-4"
            name="name"
            value={formData.name}
            minLength={2}
            placeholder="Your Name"
            onChange={onChange}
            required
          />

          <input
            type="email"
            className="block bg-blue-50 w-auto text-[12px] md:text-sm rounded-xsm p-1 md:p-3 outline-none font-mono mb-4"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={onChange}
            required
          />

          <textarea
            className="block bg-blue-50 w-auto text-[12px] md:text-sm rounded-xsm p-1 md:p-3 outline-none font-mono mb-4"
            name="message"
            placeholder="Your Message"
            onChange={onChange}
            rows="4"
            required
          />

          <button
            type="submit"
            className="block rounded-xsm w-full hover:scale-105 duration-200 p-0 md:p-3 outline-none font-mono bg-blue-500 text-white hover:bg-blue-600 focus:outline-none md:my-1"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
