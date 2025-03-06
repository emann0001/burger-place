import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import LoadingRing from './utils/Loader';
import { Home } from './routes/routes'; // ✅ Ensure this path is correct

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='flex justify-center items-center h-screen'> <LoadingRing /> </div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
