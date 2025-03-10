import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import LoadingRing from './utils/Loader';
import { Home } from './routes/routes'; 
import FoodList from "./pages/FoodList";
import BurgerDescription from "./descriptionPages/BurgerDescription";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='flex justify-center items-center h-screen'> <LoadingRing /> </div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/" element={<FoodList />} />
          <Route path="/burger/:id" element={<BurgerDescription />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
