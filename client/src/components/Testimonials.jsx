import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-20 py-20 bg-gradient-to-br from-blue-50 to-purple-50'
    >
      <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-4'>
        Customer Testimonials
      </h1>
      <p className='text-lg text-gray-600 mb-12'>
        What users are saying
      </p>

      <div className='flex flex-wrap justify-center gap-8 px-4'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:scale-[1.02] transition-all duration-300 w-full sm:w-96'
            whileHover={{ scale: 1.02 }}
          >
            <div className='flex flex-col items-center'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='rounded-full w-16 h-16 object-cover'
              />
              <h2 className='text-xl font-semibold mt-4 text-gray-800'>
                {testimonial.name}
              </h2>
              <p className='text-gray-500 text-sm mt-1'>
                {testimonial.role}
              </p>
              <div className='flex mt-3'>
                {Array(testimonial.stars)
                  .fill()
                  .map((_, i) => (
                    <img
                      key={i}
                      src={assets.rating_star}
                      alt='star'
                      className='w-5 h-5'
                    />
                  ))}
              </div>
              <p className='text-center text-gray-600 mt-4 text-sm'>
                {testimonial.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;