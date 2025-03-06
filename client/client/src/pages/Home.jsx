import React from 'react'
import Hero from './Hero'
import FoodType from './FoodType'
import FoodList from './FoodList'
import Combos from './Combos'


const Home = () => {
  return (
    <>
      <main>
       <Hero/>
       <FoodType/>
       <FoodList/>
       <Combos/>
      </main>
    </>
  )
}

export default Home