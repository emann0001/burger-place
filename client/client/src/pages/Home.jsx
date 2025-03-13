import React from 'react'
import Hero from './Hero'
import FoodType from './FoodType'
import FoodList from './FoodList'
import Cart from './Cart'
 

const Home = ({handleAddToCart}) => {
  return (
    <>
      <main>
       <Hero/>
       <FoodType handleAddToCart={handleAddToCart}/>
        {/* <FoodList handleAddToCart={handleAddToCart}/> */}
        {/* <Cart/> */}
      </main>
    </>
  )
}

export default Home