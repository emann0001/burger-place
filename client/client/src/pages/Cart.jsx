import React, {useContext} from 'react';
import deleteIcon from '../assets/deleteIcon.svg';
import CartContext from "../context/CartContext"

const Cart = () => {
    const {cart, setCart} = useContext (CartContext)
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
                    <section className="col-span-2">
                        <h1 className="px-8 py-4 text-xl font-bold">Your Cart</h1>
                        <div className="p-6 bg-black rounded-lg">
                            {cart.map((cartItem) => {
                                const { _id, image, title, price, quantity } = cartItem;
                                return (
                                    <div key={_id} className="flex justify-between items-center px-8 mb-10 bg-[#252422] p-6 rounded-lg">
                                        <div>
                                            <img src={image} alt={title} className="w-40 rounded-2xl" />
                                            <h1 className="mt-2 font-semibold">{title}</h1>
                                            <h2 className="text-yellow-500 font-bold">₦{price}</h2>
                                        </div>
                                        <div className="flex flex-col gap-4 items-center">
                                            
                                            <img
                                                onClick={() => handleRemove(_id)}
                                                src={deleteIcon}
                                                alt="Delete item"
                                                className="cursor-pointer w-6"
                                            
                                            />
                                            <div className="flex gap-2 items-center">
                                                <h2 className="cursor-pointer bg-yellow-500 p-3 rounded-full text-black" onClick={() => handleInc(_id)}>+</h2>
                                                <p className="text-lg">{quantity}</p>
                                                <h2 className="cursor-pointer bg-yellow-500 p-3 rounded-full text-black" onClick={() => handleDec(_id)}>-</h2>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    <section className="p-6 bg-[#252422] rounded-lg">
                        <h1 className="text-xl font-bold mb-4">Summary</h1>
                        
                        <h3> Product Total ({cart.length})</h3>
                        <h3>VAT 1000</h3>
                        <h3>Delivery 1500</h3>
                        <hr />
                        <p className="text-lg">Total: <span className="text-yellow-500 font-bold">₦{(totalPrice + 2500).toLocaleString()}</span></p>
                    </section>
                </main>
            )}
        </>
    );
};

export default Cart;
