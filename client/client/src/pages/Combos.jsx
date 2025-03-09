import { useEffect } from "react";
import React, { useState } from 'react';
import data from './data.json'


const Combos = () => {
    return (
        <div className='bg-[#2F2F2F] p-4'>
            <div className='container mx-auto max-w-[1100px] rounded-[8px] p-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    {data.map((combo) => (
                        <div key={combo._id} className="rounded-lg p-4 shadow-lg bg-[#252422]">
                            <a href={`https://your-api.com/combos/${combo._id}`} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={combo.image} 
                                    alt={combo.title} 
                                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-[8px] mb-4 cursor-pointer"
                                />
                            </a>
                            <div className='flex justify-between'>
                                <h2 className="text-lg text-[20px] text-white">{combo.title}</h2>
                                <p className="text-gray-400 border border-[#B67B0F] gap-4 rounded-[6px] py-[6px] px-[4px]">⭐{combo.rating}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className="text-[#B67B0F] font-bold text-[25px] pt-[15px]">
                                    <span className='font-bold text-[15px]'>₦</span>{combo.price}
                                </p>
                                <p className="text-gray-400 pt-[20px]">{combo.duration}</p>
                            </div>
                            <button className="py-[15px] px-[56px] rounded-[31px] btn-active bg-[#B67B0F] w-full gap-7 text-white cursor-pointer">Add To Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Combos;
