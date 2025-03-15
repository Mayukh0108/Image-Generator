import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='bg-gray-50 py-6 mt-20'>
      <div className='container mx-auto flex items-center justify-between gap-4 px-6'>
        <img src={assets.product_icon} alt="logo" className="w-8 sm:w-10" />
        <span className="text-black text-lg sm:text-xl font-semibold tracking-wide drop-shadow-lg">GenImg</span>
        <p className='flex-1 border-l border-gray-300 pl-4 text-sm text-gray-600 max-sm:hidden'>
          © 2023 Your Company. All rights reserved.
        </p>

        <div className='flex gap-4'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              width={35}
              className='hover:opacity-75 transition-opacity duration-300'
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              width={35}
              className='hover:opacity-75 transition-opacity duration-300'
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src={assets.instagram_icon}
              alt="Instagram"
              width={35}
              className='hover:opacity-75 transition-opacity duration-300'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;