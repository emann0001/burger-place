import React from 'react';
import blackBurger from '../assets/blackBurgerImg.svg';

const combosData = [
    {
        _id: 2,
        image: "https://res.cloudinary.com/dqqectes0/image/upload/v1741294091/comboImg-1_ah3ucr.svg",
        title: "Combo burger",
        rating: "6.0",
        price: "15000",
        duration: "15-20mins"
    },
    {
        _id: 3,
        image: "https://res.cloudinary.com/dqqectes0/image/upload/v1741294091/comboImg-2_flvpvd.svg",
        title: "Combo burger",
        rating: "6.0",
        price: "15000",
        duration: "15-20mins"
    },
    {
        _id: 4,
        image: "https://res.cloudinary.com/dqqectes0/image/upload/v1741294091/comboImg-3_f6x5si.svg",
        title: "Combo burger",
        rating: "6.0",
        price: "15000",
        duration: "15-20mins"
    },
];

const CombosDescription = () => {
  return (
    <>
      {/* Main Burger Description Section */}
      <div className="bg-[#2F2F2F] py-6">
        <div className="container mx-auto max-w-[1100px] p-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={blackBurger}
              alt="Black Burger"
              className="w-full max-w-[500px] rounded-[16px] object-cover"
            />
            <div className="text-white">
              <h3 className="text-2xl font-bold">Double Whooler Beef Burger</h3>
              <p className="text-gray-300 mt-2">
                Sink your teeth into our mouthwatering burger, featuring a perfectly seasoned patty with fresh ingredients. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit tempore accusamus laboriosam odio quidem quia quos ea sequi et praesentium.
              </p>

              <button className="bg-[#B67B0F] rounded-[31px] py-[15px] w-full max-w-[400px] mt-6 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Combos Section */}
      <div className="bg-[#2F2F2F] py-6">
        <div className="container mx-auto max-w-[1100px] p-4">
          <h5 className="text-white text-[20px] mb-6">Others You Might Like</h5>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combosData.map((burger) => (
              <div key={burger._id} className="rounded-lg p-4 shadow-lg bg-[#252422]">
                <img 
                  src={burger.image} 
                  alt={burger.title} 
                  className="w-full h-[321px] object-cover rounded-[8px] mb-4" 
                />

                <div className="flex justify-between items-center">
                  <h2 className="text-lg text-white">{burger.title}</h2>
                  <p className="text-gray-400 border border-[#B67B0F] rounded-[6px] py-[6px] px-[4px] flex items-center">
                    ⭐ <span className="ml-2">{burger.rating}</span>
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#B67B0F] font-bold text-[25px]">
                    <span className="font-bold text-[15px]">₦</span> {burger.price}
                  </p>
                  <p className="text-gray-400">{burger.duration}</p>
                </div>

                <button className="py-[12px] rounded-[31px] bg-[#B67B0F] w-full text-white mt-4">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CombosDescription;
