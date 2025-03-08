import React, { useState } from 'react';
import navImg from '../assets/navEggs.svg';
import Locationimg from '../assets/loaction-icon.svg';
import LocationDropDown from '../assets/dropdown-icon.svg';
import cartLogo from '../assets/cart-icon.svg';
import loginLogo from '../assets/login-icon.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to track Sign In / Sign Up

  return (
    <>
      <header className='bg-[#100101]'>
        <nav className='container mx-auto px-[20px] md:px-[80px] py-[10px] lg:px-[90px] lg:py-[15px] flex justify-between items-center'>
          {/* Left Section */}
          <div className='flex gap-4 items-center'>
            <img src={navImg} alt="nav-logo" className='w-14 h-auto' />
            <img src={Locationimg} alt="location-img" className='h-auto' />
            <h4 className='text-[#F0F0F0] text-[20px] font-[500] hidden md:block'>Location</h4>
            <div className="dropdown dropdown-center">
              <div tabIndex={0} role="button" className="m-1 bg-transparent">
                <img src={LocationDropDown} alt="drop-down-img" className='w-8' />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                <li><a>Lagos</a></li>
                <li><a>Abuja</a></li>
                <li><a>Benin</a></li>
              </ul>
            </div>
          </div>

          {/* Middle Section - Search */}
          <div>
            <form>
              <input
                type="text"
                placeholder='Search'
                className='hidden lg:block w-[300px] h-[56px] rounded-[32px] outline-none bg-[#F0F0F0] placeholder:text-[#100101] ps-[30px] border font-[400] text-[20px]'
              />
            </form>
          </div>

          {/* Right Section */}
          <div className='flex gap-4 items-center'>
            <h2 className='font-[500] text-[20px] text-[#FBFBFB] hidden lg:block'>All Products</h2>
            <ul className='flex gap-4'>
              <li className="flex items-center h-[56px] py-[15px] px-[20px] bg-[#B67B0F] rounded-[32px]">
                <img src={cartLogo} alt="cart-img" />
                <Link className="px-2 text-[#FBFBFB] font[500] text-[20px]">
                  <span className="hidden lg:inline-block cursor-pointer">Cart</span> 30
                </Link>
              </li>

              {/* Login Button */}
              <button
                className="flex items-center bg-[#F0F0F0] text-[#100101] font-[500] text-[20px] rounded-[32px] px-4 py-2"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsSignUp(false); // Reset to Sign In when opening
                }}
              >
                <img src={loginLogo} alt="login-icon" className="w-6 h-6 md:mr-2" />
                <span className="hidden md:inline cursor-pointer">Login</span>
              </button>
            </ul>
          </div>
        </nav>
      </header>

      {/* Authentication Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center overflow-x-hidden mt-[100px]">
          <div className="bg-[#100101] p-6 w-[350px] md:w-[600px] rounded-[33px] md:px-[50px] md:py-[37px]">
            <div className='flex justify-center h-[65px]'>
              <img src={navImg} alt="logo" />
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-white text-[32px] pt-[30px]">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h3>
              <button
                className="text-red-500 font-bold text-xl cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <p className="text-white text-[15px]">
              {isSignUp ? "Let's get you started so you can start joining and creating events" : "Sign in to your account"}
            </p>

            {/* Form Section */}
            <form className="mt-4 text-[16px] text-white">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#201F1E] w-full md:h-[35px] mb-[15px] text-white rounded-[6px] p-[15px] md:p-[17px] gap-[7px]"
                required

              />
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#201F1E] w-full md:h-[35px] mb-[15px] text-white rounded-[6px] p-[16px] gap-[7px]"
                  required

                />

              )}
              <input
                type="password"
                placeholder="Password"
                className="bg-[#201F1E] w-full md:h-[35px] mb-[15px] text-white rounded-[6px] p-[16px] gap-[7px]"
                required

              />

              {!isSignUp && (
                <Link to=''>
                  <small className='text-[13px] text-white font-[300px] underline'>Forgot Password?</small>
                </Link>
              )}

              {isSignUp && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-[#201F1E] w-full md:h-[35px] mb-[15px] text-white rounded-[6px] p-[16px] gap-[7px] hidden md:block"
                  required

                />
              )}
              {isSignUp && (
                <div className="flex items-center gap-2 mt-2">
                  <input type="checkbox" id="checkbox" className="w-4 h-4" required/>
                  <label htmlFor="checkbox" className="text-white text-[13px]">
                    I agree to the <span className="underline cursor-pointer">terms</span> & <span className='underline cursor-pointer'>conditions</span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#B67B0F] text-white py-[8px] px[56px] rounded-[31px] mt-[20px] cursor-pointer"
                required
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
              <p className='text-white text-[15px] md:text-[18px] pt-[10px]'>
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <span
                      className='text-[#B67B0F] cursor-pointer'
                      onClick={() => setIsSignUp(false)}
                    >
                      Sign In
                    </span>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <span
                      className='text-[#B67B0F] cursor-pointer'
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign Up
                    </span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
