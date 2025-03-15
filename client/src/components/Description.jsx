import React from 'react';
import { assets, stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28 bg-gradient-to-br from-blue-50 to-purple-50'
    >
      <h1 className='text-4xl sm:text-5xl font-bold mb-4 text-gray-800'>
        Create AI Images
      </h1>
      <p className='text-gray-500 text-lg mb-12'>
        Turn your imagination into visuals
      </p>
      <div className='flex flex-col gap-10 md:gap-20 md:flex-row items-center'>
        <img
          src={assets.sample_img_1}
          alt="Sample AI Image"
          className='w-80 xl:w-96 rounded-lg shadow-lg border border-gray-200'
        />
        <div className='max-w-lg'>
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>
            Introducing Text to Image Generator
          </h2>
          <p className='text-gray-600 text-lg mb-6'>
            Easily bring your ideas to life with our free AI image generator.
          </p>
          <p className='text-gray-600 text-lg'>
            Simply type in a text prompt, and our AI will provide high-quality images in seconds.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;