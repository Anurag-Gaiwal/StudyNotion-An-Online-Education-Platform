import React from 'react';
import CTAButton from "../components/core/HomePage/Button";
import backgroundImage from '../assets/Images/404.png';
import { motion } from 'framer-motion';

const Error = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center text-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-5 rounded-lg md:p-20 md:w-auto w-11/12 bg-black bg-opacity-60">
        {/* Animate the main text */}
        <motion.p 
          className="text-white text-2xl md:text-5xl font-bold my-4 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Oops! It looks like you're lost.
        </motion.p>

        {/* Add a subheading for more interaction */}
        <motion.p 
          className="text-white text-lg md:text-2xl my-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          The page you're looking for doesn't exist.
        </motion.p>

        {/* Animate buttons with hover effects */}
        <motion.div
          className="mt-10 flex justify-center gap-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <CTAButton 
            active={true} 
            linkto={"/"}
            className="hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Go to Homepage
          </CTAButton>
        </motion.div>

        {/* Optional animation of floating elements */}
        <motion.div 
          className="absolute bottom-0 left-0 p-5 hidden md:block"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        >
          <img src="path/to/small-graphic.png" alt="Decoration" className="h-24 w-24 opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}

export default Error;
