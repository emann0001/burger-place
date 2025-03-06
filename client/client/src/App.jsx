import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Home } from './routes/routes';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer"
import  LoadingRing from './utils/Loader';

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Suspense fallback={<div className='flex justify-center item-center h-screen'> <LoadingRing/> </div>}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App