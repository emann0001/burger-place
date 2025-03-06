import React from 'react'
import Hero from './Hero'
import FoodType from './FoodType'
import FoodList from './FoodList'


const Home = () => {
  return (
    <>
      <main>
       <Hero/>
       <FoodType/>
       <FoodList/>
      </main>
    </>
  )
}

export default Home