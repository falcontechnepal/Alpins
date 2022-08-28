import React from 'react'
import Pagehero from '../components/Pagehero'
import Tabs from '../components/Food/Tabs'
import Navbar from '../components/Navbar'

const about = () => {
  return (
    <div>
      <Navbar />
      <Pagehero title='About Us' />
      <Tabs />
      <Tabs />
    </div>
  )
}

export default about
