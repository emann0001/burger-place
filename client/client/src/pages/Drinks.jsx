import React from 'react';
import data from './dataDrink.json';

const Drinks = () => {
    return (
        <div className='bg-[#2F2F2F] p-4'>
            <div className='container mx-auto max-w-[1100px] rounded-[8px] p-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    {data.map((drink) => (
                        <div key={drink._id} className="rounded-lg p-4 shadow-lg bg-[#252422]">
                            <a href={`https://your-api.com/drinks/${drink._id}`} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={drink.image}
                                    alt={drink.title}
                                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-[8px] mb-4 cursor-pointer"
                                />
                            </a>
                            <div className='flex justify-between items-center'>
                                <h2 className="text-lg text-[20px] text-white">{drink.title}</h2>
                                <p className="text-gray-400 border border-[#B67B0F] rounded-[6px] py-[6px] px-[8px] flex items-center">
                                    ⭐ {drink.rating}
                                </p>
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <p className="text-[#B67B0F] font-bold text-[25px]">
                                    <span className='font-bold text-[15px]'>₦</span>{drink.price}
                                </p>
                                <p className="text-gray-400">{drink.duration}</p>
                            </div>
                            <button className="py-[12px] px-[40px] rounded-[31px] bg-[#B67B0F] w-full text-white mt-4 hover:bg-[#A56F0D] transition">
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Drinks;
