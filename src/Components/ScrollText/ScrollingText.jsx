import React from "react";
import "../../../src/App.css"; // Import custom CSS for gradient stroke

export const ScrollingText = () => {
  return (
    <div className="relative overflow-hidden bg-[#050913] text-white py-2 md:py-4">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="10"
        className="flex items-center justify-center whitespace-nowrap"
      >
        <span className="gradient-outline text-6xl md:text-[10rem] mx-4 md:mx-8 font-bold">
          Explore the power of AI development tools.
        </span>
        <span className="gradient-outline text-6xl md:text-[10rem] mx-4 md:mx-8 font-bold">
          Crafted with brilliance and creativity.
        </span>
        <span className="gradient-outline text-6xl md:text-[10rem] mx-4 md:mx-8 font-bold">
          Proviz School of AI.
        </span>
        <span className="gradient-outline text-6xl md:text-[10rem] mx-4 md:mx-8 font-bold">
          Innovation at its best.
        </span>
      </marquee>
    </div>
  );
};

export default ScrollingText;