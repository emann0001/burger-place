import React from 'react';

const FoodType = () => {
    return (
        <main>
            <div className="bg-[#2F2F2F] py-[20px] px-4">
                <div className="bg-[#252422] rounded-[50px] container mx-auto max-w-[1070px] p-4 ">
                    <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-6 gap-4 overflow-x-auto sm:overflow-visible scrollbar-hide px-2 ">
                        <div className="flex flex-col items-center min-w-[100px] ">
                            <img src="https://res.cloudinary.com/dqqectes0/image/upload/v1741212150/burgerImg_o9gwok.svg" alt="burger" className="w-[80px] h-[80px]" />
                            <small className="text-white mt-2">Burger</small>
                        </div>
                        <div className="flex flex-col items-center min-w-[100px]">
                            <img src="https://res.cloudinary.com/dqqectes0/image/upload/v1741212150/combosImg_rjbxpg.svg" alt="Combos" className="w-[80px] h-[80px]" />
                            <small className="text-white mt-2">Combos</small>
                        </div>
                        <div className="flex flex-col items-center min-w-[100px]">
                            <img src="https://res.cloudinary.com/dqqectes0/image/upload/v1741212149/drinksImg_aq7o7k.svg" alt="Drink" className="w-[80px] h-[80px]" />
                            <small className="text-white mt-2">Drink</small>
                        </div>
                        <div className="flex flex-col items-center min-w-[100px]">
                            <img src="https://res.cloudinary.com/dqqectes0/image/upload/v1741212149/chickenImg_sy7p0i.svg" alt="chicken" className="w-[80px] h-[80px]" />
                            <small className="text-white mt-2">Chicken</small>
                        </div>
                        <div className="flex flex-col items-center min-w-[100px]">
                            <img src="https://res.cloudinary.com/dqqectes0/image/upload/v1741212150/chips_azqyfq.svg" alt="chips" className="w-[80px] h-[80px]" />
                            <small className="text-white mt-2">Chips</small>
                        </div>
                        <div className="flex flex-col items-center min-w-[100px]">
                            <img src="https://res.cloudinary.com/dqqectes0/image/upload/v1741212149/saladImg_qt8a9e.svg" alt="Salad" className="w-[80px] h-[80px]" />
                            <small className="text-white mt-2">Salad</small>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FoodType;
