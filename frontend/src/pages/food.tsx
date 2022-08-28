import React from 'react'
import Foodinfo from '../components/Food/Foodinfo'
import Navbar from '../components/Navbar'
import Tabs from '../components/Food/Tabs'
import Organic from '../components/Food/Organic'

const food = () => {
  return (
    <div>
      <Navbar />
      <Foodinfo />
      <Tabs />
      <Organic />
      <Foodinfo />
      <Tabs />
    </div>
  )
}

export default food
