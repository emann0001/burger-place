import React from 'react'

const Hero = () => {
  return (
    <>
     <div
          className="hero bg-cover bg-center h-screen w-full"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/dqqectes0/image/upload/v1741087125/hero-img_npexjj.svg)",
          }}>
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div>
              <h1 className="mb-5 text-5xl ">The <span className='font-bold font-[Rammetto-one] zing text-[#B67B0F]'>ZING</span> in every bite</h1>
              <p className="mb-15">
               Savour the flavor! Explore our delicious menu and order now for a taste sensation
              </p>
              <button className="py-[15px] px-[56px] rounded-[31px] bg-[#B67B0F] mr-[6px] cursor-pointer">Order Now!</button>
              <button className="bg-[#FBFBFB] py-[15px] px-[20px] rounded-[32px] text-[black] cursor-pointer">View Menu</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero