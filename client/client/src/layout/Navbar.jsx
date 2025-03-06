
import React from 'react'
import navImg from '../assets/navEggs.svg'
import Locationimg from '../assets/loaction-icon.svg'
import LocationDropDown from '../assets/dropdown-icon.svg'
import cartLogo from '../assets/cart-icon.svg'
import loginLogo from '../assets/login-icon.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className=' bg-[#100101]'>
        <nav className='container mx-auto  px-[20px] md:px-[80px] py-[10px] lg:px-[90px] lg:py-[15px] flex justify-between items-center'>
          <div className='flex gap-4 items-center'>
            <img src={navImg} alt="nav-logo" className='w-14 h-auto' />
            {/* <img src={eggysLogo} alt="eggys-logo" className='w-full h-auto' /> */}
            <img src={Locationimg} alt="location-img" className='h-auto' />
            <h4 className='text-[#F0F0F0] text-[20px] font-[500] hidden md:block'>location</h4> {/* Hidden on mobile */}

            <div className="dropdown dropdown-center">
              <div tabIndex={0} role="button" className=" m-1 bg-transparent"><img src={LocationDropDown} alt="drop-down-img" className='w-8' /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Lagos</a></li>
                <li><a>Abuja</a></li>
                <li><a>Benin</a></li>
              </ul>
            </div>
          </div>
          <div>
            <form>
              <input type="text" placeholder='search' className='hidden lg:block w-[300px] h-[56px] rounded-[32px] outline-none bg-[#F0F0F0] placeholder:text-[#100101] ps-[30px] border font-[400] text-[20px]' />
            </form>
          </div>
          <div className='flex gap-4 items-center'>
            <h2 className='font-[500] text-[20px] text-[#FBFBFB] hidden lg:block'>All Products</h2>
            <ul className='flex gap-4'>
              <li className="flex items-center h-[56px] py-[15px] px-[20px] bg-[#B67B0F] rounded-[32px]">
                <img src={cartLogo} alt="cart-img" /> <Link className="px-2 text-[#FBFBFB] font[500] text-[20px]"> <span className="hidden lg:inline-block">Cart</span> 30 </Link>
              </li>
              <li className='flex items-center w-[56px] md:w-[124px] h-[56px] py-[15px] px-[20px] bg-[#F0F0F0] rounded-[32px]'>
                <img src={loginLogo} alt="login-img" />
                <Link className='ps-2 text-[#100101] font-[500] text-[20px] hidden md:inline'> login </Link> {/* Hidden on mobile */}
              </li>
            </ul>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Navbar