import React from 'react';
import jazzy from '../assets/jazzyIcon.svg';
import xIcon from '../assets/xicon.svg';
import fIcon from '../assets/facebook.svg';
import tIcon from '../assets/Vector.svg';
import instaIcon from '../assets/instagram.svg';
import youTubeIcon from '../assets/youtube.svg';
import lineImg from '../assets/lineImg.svg';

const Navbar = () => {
  return (
    <main className='bg-[#100101] py-6 px-4'>
      {/* Main container */}
      <div className='container mx-auto max-w-[1070px] flex flex-col md:flex-row items-center justify-between gap-4'>
        
        {/* Logo */}
        <div className='w-[60px] h-[50px]'>
          <img src={jazzy} alt="jazzy-icon" className='w-full h-full' />
        </div>

        {/* Navigation Links (Stacked on mobile, inline on larger screens) */}
        <div className='flex flex-col md:flex-row md:space-x-6 text-white text-sm text-center'>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Products</p>
          <p className="cursor-pointer">Support</p>
          <p className="cursor-pointer">Terms & Conditions</p>
        </div>

        {/* Social Icons (Stacked on mobile, inline on larger screens) */}
        <div className='flex space-x-4 md:space-x-6'>
          <img src={xIcon} alt="x-icon" className='cursor-pointer w-5 h-5' />
          <img src={fIcon} alt="f-icon" className='cursor-pointer w-5 h-5' />
          <img src={tIcon} alt="t-icon" className='cursor-pointer w-5 h-5' />
          <img src={instaIcon} alt="insta-icon" className='cursor-pointer w-5 h-5' />
          <img src={youTubeIcon} alt="Youtube-icon" className='cursor-pointer w-5 h-5' />
        </div>
      </div>

      {/* Line Image */}
      <div className='container mx-auto max-w-[1070px] pt-6 flex justify-center'>
        <img src={lineImg} alt="Line" className="w-full max-w-[300px] md:max-w-[1500px]" />
      </div>

      {/* Footer Text */}
      <div className='container mx-auto max-w-[1070px] flex flex-col md:flex-row items-center justify-between pt-4 text-white text-xs text-center'>
        <small>TM & Copyright 2025 Jazzy Corporation. All Rights Reserved</small>
        <small className="mt-2 md:mt-0 cursor-pointer">Privacy Policy</small>
      </div>
    </main>
  );
};

export default Navbar;
