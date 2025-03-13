import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const getCartFromStorage = () => JSON.parse(localStorage.getItem('cart')) || [];

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(getCartFromStorage);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (product) => {
        const productSelected = cart.find((item) => item._id === product._id);

        if (productSelected) {
            setCart(cart.map((oneItem) =>
                oneItem._id === product._id
                    ? { ...productSelected, quantity: productSelected.quantity + 1 }
                    : oneItem
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <CartContext.Provider value={{ handleAddToCart, cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider };
export default CartContext;
