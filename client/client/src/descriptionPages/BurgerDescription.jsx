import React from 'react';
import blackBurger from '../assets/blackBurgerImg.svg';

const burgerData = [
  {
    _id: 1,
    image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-1_xwvwpo.svg",
    title: "Cheese Burger",
    rating: "5.0",
    price: "10,000",
    duration: "15-20 mins",
  },
  {
    _id: 2,
    image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087331/burger-img-2_vjfta9.svg",
    title: "Classic Beef Burger",
    rating: "4.8",
    price: "12,500",
    duration: "20-25 mins",
  },
  {
    _id: 3,
    image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087334/burger-img-3_fpxpnu.svg",
    title: "Spicy Chicken Burger",
    rating: "4.9",
    price: "11,000",
    duration: "18-22 mins",
  },
];

const BurgerDescription = () => {
  return (
    <>
      {/* Main Burger Section */}
      <div className="bg-[#2F2F2F] py-6">
        <div className="container mx-auto max-w-[1100px] p-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={blackBurger}
              alt="Black Burger"
              className="w-[500px] rounded-[16px] object-cover"
            />
            <div className="text-white">
              <h3 className="text-2xl font-bold">Double Whooler Beef Burger</h3>
              <p className="mt-2 text-gray-300">
                Sink your teeth into our mouthwatering burger, featuring a perfectly seasoned patty with fresh ingredients. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit tempore accusamus laboriosam odio quidem quia quos ea sequi et praesentium.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Burgers Section */}
      <div className="bg-[#2F2F2F] py-6">
        <div className="container mx-auto max-w-[1100px] p-4">
          <h5 className="text-white text-[20px] mb-6">Others You Might Like</h5>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {burgerData.map((burger) => (
              <div key={burger._id} className="rounded-lg p-4 shadow-lg bg-[#252422]">
                <img src={burger.image} alt={burger.title} className="w-full h-[321px] object-cover rounded-[8px] mb-4" />

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

                <button className="py-[12px] px-[56px] rounded-[31px] bg-[#B67B0F] w-full text-white mt-4">
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

export default BurgerDescription;
