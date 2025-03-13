import React, { useState } from 'react';
import FoodList from './FoodList'; // Default component
import Combos from './Combos'; // Shows when clicking "Combos"
import Drinks from './Drinks'; // Shows when clicking "Drinks"
import Chickens from './Chickens'; // Shows when clicking "Chicken"
import Chips from './Chips'; // Shows when clicking "Chips"


const FoodType = ({handleAddToCart}) => {
    const [selectedCategory, setSelectedCategory] = useState("Burger"); // Default is "Burger" (shows FoodList)

    const handleCategoryClick = (label) => {
        setSelectedCategory(label); // Set the selected category dynamically
    };

    return (
        <main className="min-h-screen bg-[#2F2F2F]"> {/* Ensures full-page dark background */}
            <div className="py-[20px] px-4">
                <div className="bg-[#252422] rounded-[50px] container mx-auto max-w-[1070px] p-4">
                    {/* Food Category List */}
                    <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4 overflow-x-auto sm:overflow-visible scrollbar-hide px-2">
                        {[
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212150/burgerImg_o9gwok.svg", alt: "burger", label: "Burger" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212150/combosImg_rjbxpg.svg", alt: "Combos", label: "Combos" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212149/drinksImg_aq7o7k.svg", alt: "Drink", label: "Drink" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212149/chickenImg_sy7p0i.svg", alt: "chicken", label: "Chicken" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212150/chips_azqyfq.svg", alt: "chips", label: "Chips" },
                            { src: "https://res.cloudinary.com/dqqectes0/image/upload/v1741212149/saladImg_qt8a9e.svg", alt: "Salad", label: "Salad" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center min-w-[80px] sm:min-w-[100px]">
                                <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] flex items-center justify-center bg-transparent">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className={`w-full h-full object-contain transition duration-300 ease-in-out hover:brightness-125 hover:cursor-pointer 
                                            ${selectedCategory === item.label ? "brightness-125" : ""}`} // Highlight active
                                        onClick={() => handleCategoryClick(item.label)}
                                    />
                                </div>
                                <small className="text-white mt-1 sm:mt-2">{item.label}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Display the selected component */}
            <div className="container mx-auto py-[10px] px-[30px] bg-[#2F2F2F]">
                {selectedCategory === "Combos" && <Combos handleAddToCart={handleAddToCart}/>}
                {selectedCategory === "Drink" && <Drinks handleAddToCart={handleAddToCart}/>}
                {selectedCategory === "Chicken" && <Chickens handleAddToCart={handleAddToCart}/>}
                {selectedCategory === "Chips" && <Chips />}
                {selectedCategory !== "Combos" && selectedCategory !== "Drink" && selectedCategory !== "Chicken" && selectedCategory !== "Chips" && <FoodList handleAddToCart={handleAddToCart}/>} 
            </div>
        </main>
    );
};

export default FoodType;
