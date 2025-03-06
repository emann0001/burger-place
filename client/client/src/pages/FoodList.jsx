import React from "react";
import starImg from '../assets/starIcon.svg'
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
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-4_wvhmpj.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 5,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-5_qojpzu.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 6,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087334/burger-img-6_thliix.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 7,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087335/burger-img-7_izw9qc.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 8,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087337/burger-img-8_usiqfb.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
    {
        _id: 9,
        image: "https://res.cloudinary.com/dwkpeu5ra/image/upload/v1741087332/burger-img-9_n2spg6.svg",
        title: "Cheese burger",
        rating: "5.0",
        price: "10000",
        duration: "15-20mins",
    },
];

const BurgerGrid = () => {
    return (
        <div className="bg-[#2F2F2F] p-4">
            <div className="container mx-auto max-w-[1100px] rounded-[8px] p-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {burgerData.map((burger) => (
                        <div key={burger._id} className="rounded-lg p-4 shadow-lg bg-[#252422]">
                            <img src={burger.image} alt={burger.title} className="w-[349.33px] h-[321px] object-cover rounded-[8px] mb-4" />
                            <div className="flex justify-between">
                                <h2 className="text-lg text-[20px] text-white">{burger.title}</h2>
                                <p className="text-gray-400 border border-[#B67B0F] gap-4 rounded-[6px] py-[6px] px-[4px]">⭐{burger.rating}</p>
                            </div>

                            <div className="flex justify-between ">
                                <p className="text-[#B67B0F] font-bold text-[25px] pt-[15px]"><span className="font-bold text-[15px]">N</span>{burger.price}</p>
                                <p className="text-gray-400 pt-[20px]">{burger.duration}</p>
                            </div>
                            <button className="py-[15px] px-[56px] rounded-[31px] btn-active bg-[#B67B0F] w-full gap-7 text-white">Add To Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default BurgerGrid;
