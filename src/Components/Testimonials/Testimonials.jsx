import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../src/App.css";

const testimonials = [
  {
    name: "John Doe",
    review: "An amazing experience with Proviz AI. Their tools are revolutionary and incredibly easy to use!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    review: "I’m impressed with the support team and their quick solutions. Highly recommend their services!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Emily Davis",
    review: "The AI solutions provided by Proviz exceeded all my expectations. Fantastic quality and execution!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Johnson",
    review: "Innovative tools and excellent service. They truly bring creativity to the AI space.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="relative bg-[#050913] overflow-hidden min-h-screen text-white py-2 md:py-16 w-full px-2 md:px-4 flex flex-col justify-center items-center">
      {/* Background Flashlights */}
      <div className="absolute top-32 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-transparent rounded-full blur-[90px] opacity-40"></div>
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-2 md:mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What People Are Saying
      </motion.h1>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-4xl mx-auto text-center text-whitep-8 bg-transparent"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col p-4 md:p-16 items-center justify-center min-h-[450px] relative overflow-hidden"
          >
            {/* Gradient Background Overlay for the Slide */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-xl"></div>

            {/* User Image */}
            <motion.div
              className="rounded-full p-[5px] mb-6 md:w-32 md:h-32 w-24 h-24 m-auto flex justify-center items-center shadow-lg"
              style={{
                background: "linear-gradient(to right, #00f, #8b5cf6, #ec4899)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="md:w-28 md:h-28 w-18 h-18 rounded-full"
              />
            </motion.div>

            {/* User Review */}
            <motion.blockquote
              className="text-lg md:text-xl text-center text-white px-6 italic mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              “{testimonial.review}”
            </motion.blockquote>

            {/* User Name */}
            <motion.p
              className="mt-4 font-semibold m-auto text-lg bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              {testimonial.name}
            </motion.p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
