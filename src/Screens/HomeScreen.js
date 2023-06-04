import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import CoinList from '../Components/CoinList'
import Footer from '../Components/Footer'
import About from '../Components/About'

function HomeScreen() {
  return (
    <div>
        <div className="main">
        <Navbar />
        <Hero />
        </div>
        <div className='about'><About /></div> 
        <div className='market'><CoinList /></div>
        <div className='footer'><Footer/></div>
    </div>
  )
}

export default HomeScreen