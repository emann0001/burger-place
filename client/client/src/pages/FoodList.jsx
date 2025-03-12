import React from "react";
import { useNavigate } from "react-router-dom";

const burgerData = [
    {
        _id: 1,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-1_xwvwpo.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 2,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087331/burger-img-2_vjfta9.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 3,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087334/burger-img-3_fpxpnu.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 4,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087334/burger-img-3_fpxpnu.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 5,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087334/burger-img-3_fpxpnu.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 6,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087334/burger-img-3_fpxpnu.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },



];

const FoodList = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/burger/${id}`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 mb-[70px] mt-[70px]">
            {burgerData.map((burger) => (
                <div key={burger._id} className="p-4 bg-[#252422] rounded-lg shadow-lg">
                    <img
                        src={burger.image}
                        alt={burger.title}
                        className="w-full h-[250px] md:h-[300px] object-cover rounded-[8px] mb-4 cursor-pointer"
                        onClick={() => handleClick(burger._id)}
                    />
                    <div className="flex justify-between">
                        <h2 className="text-lg text-[20px] text-white">{burger.title}</h2>
                        <p className="text-gray-400 border border-[#B67B0F] rounded-[6px] py-[6px] px-[4px]">⭐{burger.rating}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[#B67B0F] font-bold text-[25px] pt-[15px]">
                            <span className="font-bold text-[15px]">₦</span>{burger.price}
                        </p>
                        <p className="text-gray-400 pt-[20px]">{burger.duration}</p>
                    </div>
                    <button className="py-[12px] md:py-[15px] px-[56px] rounded-[31px] bg-[#B67B0F] w-full text-white">
                        Add To Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FoodList;
