import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CartContext from "../context/CartContext";
import data from "./burger";

const FoodList = () => {
    const navigate = useNavigate();
    const { handleAddToCart } = useContext(CartContext);

    const handleClick = (id) => {
        navigate(`/burger/${id}`);
    };

    return (
        <div className="container mx-auto px-4 md:px-8 overflow-hidden">
            {/* Check if data exists and has items */}
            {data.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((burger) => (
                        <div key={burger._id} className="p-4 bg-[#252422] rounded-lg shadow-lg">
                            <img
                                src={burger.image}
                                alt={burger.title}
                                className="w-full max-w-full h-[250px] md:h-[300px] object-cover rounded-[8px] mb-4 cursor-pointer"
                                onClick={() => handleClick(burger._id)}
                            />
                            <div className="flex justify-between">
                                <h2 className="text-lg text-white">{burger.title}</h2>
                                <p className="text-gray-400 border border-[#B67B0F] rounded-lg py-1 px-2">
                                    ⭐ {burger.rating}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[#B67B0F] font-bold text-xl pt-3">₦{burger.price}</p>
                                <p className="text-gray-400 pt-3">{burger.duration}</p>
                            </div>
                            <button
                                className="py-3 md:py-4 px-10 rounded-xl bg-[#B67B0F] w-full text-white cursor-pointer"
                                onClick={() => {
                                    handleAddToCart(burger);
                                    toast("Item added");
                                }}
                            >
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-white text-center mt-4">No food items available.</p>
            )}
        </div>
    );
};

export default FoodList;


// import React from "react";
// import foodData from "../FoodCategories";
// import Star from "../assets/Star.svg";
// import { Link } from "react-router-dom";

// const FoodList = ({ handleAddToCart }) => {
//   // Ensure foodData exists before accessing it
//   const burgerCategory = foodData?.find(
//     (category) => category.category === "Burgers"
//   );

//   return (
//     <main className="flex justify-center items-start container mx-auto px-4 md:px-8 lg:px-12 py-4">
//       <div className="w-full">
//         <section className="mb-5">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {burgerCategory?.items?.length > 0 ? (
//               burgerCategory.items.map((item) => (
//                 <div
//                   key={item._id}
//                   className="card w-full max-w-[377px] shadow-lg p-4 bg-[#252422] rounded-lg mx-auto"
//                 >
//                   <figure>
//                     <Link to={`/product/${item._id}`}>
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="object-cover w-full h-auto rounded-lg"
//                       />
//                     </Link>
//                   </figure>
//                   <div className="card-body text-center mt-4">
//                     <div className="flex justify-between items-center">
//                       <h2 className="text-white text-lg font-semibold">
//                         {item.title}
//                       </h2>
//                       <div className="flex items-center border rounded border-[#B67B0F] px-2 py-1 gap-1">
//                         <img className="size-4" src={Star} alt="Rating" />
//                         <h6 className="text-sm text-white">{item.rating}</h6>
//                       </div>
//                     </div>
//                     <div className="flex justify-between items-center text-white mt-3">
//                       <h1 className="text-[#B67B0F] font-bold text-2xl">
//                         ₦{item.price}
//                       </h1>
//                       <p className="text-sm">{item.duration}</p>
//                     </div>
//                     <div className="mt-4">
//                       <button
//                         onClick={() => handleAddToCart(item)}
//                         className="w-full h-12 rounded-lg bg-[#B67B0F] text-white font-bold shadow-md hover:bg-[#a16a0c] transition duration-300"
//                       >
//                         Add To Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full text-center py-6">
//                 <p className="text-white text-lg">No burgers available.</p>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default FoodList;
