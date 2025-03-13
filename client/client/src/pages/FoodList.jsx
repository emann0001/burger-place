import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CartContext from "../context/CartContext";


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

const FoodList = ({  }) => {
    const navigate = useNavigate();
    const {handleAddToCart} = useContext(CartContext)
    const handleClick = (id) => {
        navigate(`/burger/${id}`);
    };

    return (
        <div className="container mx-auto px-4 md:px-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {burgerData.map((burger) => (
                    <div key={burger._id} className="p-4 bg-[#252422] rounded-lg shadow-lg">
                        <img
                            src={burger.image}
                            alt={burger.title}
                            className="w-full max-w-full h-[250px] md:h-[300px] object-cover rounded-[8px] mb-4 cursor-pointer"
                            onClick={() => handleClick(burger._id)}
                        />
                        <div className="flex justify-between">
                            <h2 className="text-lg text-white">{burger.title}</h2>
                            <p className="text-gray-400 border border-[#B67B0F] rounded-lg py-1 px-2">⭐{burger.rating}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#B67B0F] font-bold text-xl pt-3">₦{burger.price}</p>
                            <p className="text-gray-400 pt-3">{burger.duration}</p>
                        </div>
                        <button 
                            className="py-3 md:py-4 px-10 rounded-xl bg-[#B67B0F] w-full text-white cursor-pointer" 
                            onClick={() => { handleAddToCart(burger); toast('Item added'); }}>
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodList;