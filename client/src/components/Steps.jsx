import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-32 bg-gradient-to-br from-blue-50 to-purple-50 py-20'
    >
      <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-4'>
        How it Works
      </h1>
      <p className='text-lg text-gray-600 mb-12'>
        Transform words into images
      </p>
      <div className='space-y-6 w-full max-w-3xl px-4'>
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            className='flex items-center gap-6 p-6 bg-white shadow-lg hover:shadow-xl cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-xl'
            whileHover={{ scale: 1.02 }}
          >
            <img width={50} src={step.icon} alt={step.title} className='flex-shrink-0' />
            <div>
              <h2 className='text-xl font-semibold text-gray-800'>{step.title}</h2>
              <p className='text-gray-600 mt-2'>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;