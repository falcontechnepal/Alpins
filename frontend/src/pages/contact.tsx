import React from 'react'
import Contactform from '../components/Contactform'
import Maps from '../components/Maps'
import Navbar from '../components/Navbar'
import Price from '../components/Price'

const contact = () => {
  return (
    <div>
      <Navbar />
      <Maps />
      <Contactform />
      <Price />
    </div>
  )
}

export default contact
