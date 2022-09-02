import React from 'react'
import Foodinfo from '../components/Food/Foodinfo'
import Navbar from '../components/Navbar'
import Tabs from '../components/Food/Tabs'
import Organic from '../components/Food/Organic'
import Pagehero from '../components/Pagehero'


const food = () => {
  return (
    <div>
      <Navbar />
      <Pagehero title='Food' />
      <Foodinfo />
      <Tabs />
      <Organic />
      <Foodinfo />
      <Tabs />
    </div>
  )
}

export default food
