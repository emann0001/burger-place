

// import React, { Suspense, useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from "./layout/Navbar";
// import Footer from "./layout/Footer";
// import LoadingRing from './utils/Loader';
// import { Home } from './routes/routes';
// import FoodList from "./pages/FoodList";
// import BurgerDescription from "./descriptionPages/BurgerDescription";
// import CombosDescription from './descriptionPages/CombosDescription';
// import { Toaster } from 'sonner';
// import Cart from './pages/Cart';

// // Ensure localStorage works in browser environment
// const getCartFromStorage = () => {
//   if (typeof window !== "undefined") {
//     return JSON.parse(localStorage.getItem('cart')) || [];
//   }
//   return [];
// };

// const App = () => {
//   const [cart, setCart] = useState(getCartFromStorage);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   console.log(cart);

//   const handleAddToCart = (product) => {
//     const productSelected = cart.find((item) => item._id === product._id);
    
//     if (productSelected) {
//       setCart(cart.map((oneItem) =>
//         oneItem._id === product._id
//           ? { ...productSelected, quantity: productSelected.quantity + 1 }
//           : oneItem
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   return (
//     <BrowserRouter>
//       <Suspense fallback={<div className='flex justify-center items-center h-screen'><LoadingRing /></div>}>
//         <Navbar cart={cart} />
//         <Routes>
//           <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
//           <Route path="/food-list" element={<FoodList handleAddToCart={handleAddToCart} />} />
//           <Route path="/burger/:id" element={<BurgerDescription />} />
//           <Route path="/combos/:id" element={<CombosDescription />} />
//           <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
//         </Routes>
//         <Footer />
//       </Suspense>
//       <Toaster />
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import LoadingRing from './utils/Loader';
import { Home } from './routes/routes';
import FoodList from "./pages/FoodList";
import BurgerDescription from "./descriptionPages/BurgerDescription";
import CombosDescription from './descriptionPages/CombosDescription';
import { Toaster } from 'sonner';
import Cart from './pages/Cart';

// Ensure localStorage works in browser environment
const getCartFromStorage = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  return [];
};

const App = () => {
  const [cart, setCart] = useState(getCartFromStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  console.log(cart);

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
    <BrowserRouter>
      <Suspense fallback={<div className='flex justify-center items-center h-screen'><LoadingRing /></div>}>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
          <Route path="/food-list/:category" element={<FoodList handleAddToCart={handleAddToCart} />} />
          <Route path="/burger/:id" element={<BurgerDescription />} />
          <Route path="/combos/:id" element={<CombosDescription />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
