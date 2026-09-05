import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navlinks from '../components/Navlinks'

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navlinks />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home