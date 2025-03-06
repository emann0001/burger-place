import React from 'react';

const FoodType = () => {
    return (
        <main>
            <div className="bg-[#2F2F2F] py-[20px] px-4">
                <div className="bg-[#252422] rounded-[50px] container mx-auto max-w-[1070px] p-4 ">
                    <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-6 gap-4 overflow-x-auto sm:overflow-visible scrollbar-hide px-2 ">
                        {[
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212150/burgerImg_o9gwok.svg", alt: "burger", label: "Burger" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212150/combosImg_rjbxpg.svg", alt: "Combos", label: "Combos" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212149/drinksImg_aq7o7k.svg", alt: "Drink", label: "Drink" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212149/chickenImg_sy7p0i.svg", alt: "chicken", label: "Chicken" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212150/chips_azqyfq.svg", alt: "chips", label: "Chips" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212149/saladImg_qt8a9e.svg", alt: "Salad", label: "Salad" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center min-w-[100px]">
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="w-[80px] h-[80px] transition duration-300 ease-in-out hover:brightness-125 hover:cursor-pointer" 
                                />
                                <small className="text-white mt-2">{item.label}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FoodType;
