import React, { useContext } from 'react';
import deleteIcon from '../assets/deleteIcon.svg';
import CartContext from "../context/CartContext"

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    console.log(cart);

    // Increase Quantity
    const handleInc = (productId) => {
        const updatedCart = cart.map((cartItx) =>
            cartItx._id === productId ? { ...cartItx, quantity: cartItx.quantity + 1 } : cartItx
        );
        setCart(updatedCart);
    };

    // Decrease Quantity
    const handleDec = (itemId) => {
        const updatedCart = cart.map((cartItx) => {
            if (cartItx._id === itemId) {
                const qty = cartItx.quantity > 1 ? cartItx.quantity - 1 : 1;
                return { ...cartItx, quantity: qty };
            }
            return cartItx;
        });
        setCart(updatedCart);
    };

    // Remove Item
    const handleRemove = (itemId) => {
        const updatedCart = cart.filter((cartItx) => cartItx._id !== itemId);
        setCart(updatedCart);
    };

    // Total Price
    const totalPrice = cart.reduce((total, product) => total + Number(product.price) * product.quantity, 0);

    return (
        <>
            {cart.length === 0 ? (
                <h1 className="text-white text-center text-2xl mt-10">No items in cart</h1>
            ) : (
                <main className="bg-[#2F2F2F] text-white grid lg:grid-cols-3 gap-[20px] p-6">
                    <section className="col-span-2 bg-[#100101] px-6 py-4 rounded-lg">
                        <h1 className="px-4 py-4 text-xl font-bold text-white">Cart</h1>
                        <div className="p-4  rounded-lg">
                            {cart.map((cartItem) => {
                                const { _id, image, title, price, quantity } = cartItem;
                                return (
                                    <div
                                        key={_id}
                                        className="flex justify-between items-center bg-[#252422] p-4 rounded-lg mb-6 shadow-md"
                                    >
                                        <div className="flex items-center gap-6">
                                            <img
                                                src={image}
                                                alt={title}
                                                className="w-[92px] h-[92px] rounded-2xl object-cover"
                                            />
                                            <div>
                                                <h1 className="text-lg font-semibold text-white">{title}</h1>
                                                <p className="text-sm text-gray-400">{new Date().toLocaleDateString()}</p>
                                                <h2 className="text-yellow-500 font-bold">₦{price.toLocaleString()}</h2>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 items-center">
                                            <img
                                                onClick={() => handleRemove(_id)}
                                                src={deleteIcon}
                                                alt="Delete item"
                                                className="cursor-pointer w-6 hover:opacity-80 transition-opacity"
                                            />
                                            <div className="flex gap-3 items-center">
                                                <h2
                                                    className="cursor-pointer bg-yellow-500 px-4 py-2 rounded-full text-black font-bold"
                                                    onClick={() => handleInc(_id)}
                                                >
                                                    +
                                                </h2>
                                                <p className="text-lg text-white">{quantity}</p>
                                                <h2
                                                    className="cursor-pointer bg-yellow-500 px-4 py-2 rounded-full text-black font-bold"
                                                    onClick={() => handleDec(_id)}
                                                >
                                                    -
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <section className="p-6 bg-[#252422] rounded-lg">
                        <h1 className="text-xl font-bold mb-4">Summary</h1>

                        <div className="flex justify-between">
                            <h3>Product Total ({cart.length})</h3>
                            <h3 className='text-yellow-500'>₦{(totalPrice).toLocaleString()}</h3>
                        </div>
                        <div className="flex justify-between">
                            <h3>VAT</h3>
                            <h3 className='text-yellow-500'>₦1000</h3>
                        </div>
                        <div className="flex justify-between">
                            <h3>Delivery</h3>
                            <h3 className='text-yellow-500'>₦1500</h3>
                        </div>

                        <hr className="my-2" />

                        <div className="flex justify-between text-lg">
                            <p>Total:</p>
                            <p className="text-yellow-500 font-bold">₦{(totalPrice + 2500).toLocaleString()}</p>
                        </div>

                        <button className='bg-[#B67B0F] text-center py-[15px] px-[56px] rounded-[31px] gap-7 w-full mt-4 cursor-pointer'>
                            Check Out
                        </button>
                    </section>

                </main>
            )}
        </>
    );
};

export default Cart;
