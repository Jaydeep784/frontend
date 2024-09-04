import React from 'react'
import Navbar from './Navbar'
import Corousel from './Corousel'
import Footer from './Footer'
import Categories from './Categories'
import Products from './Products'

const Homepage = () => {

  return (
    <div className='bg-gray-300 min-h-screen flex flex-col m-0'>
      <Navbar />
      <div className='flex-grow m-0'>
        <Corousel />
        <Categories />
        <Products />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage