import React from 'react'
import bitcoin from '../assets/bitcoin.png'
import eth from '../assets/eth.png'
import t from '../assets/3.png'
import s from '../assets/s.png'

function Hero() {
  return (
    <div>
      <div className='hero'><h1>STAY AHEAD OF THE <span className='crypto-text'>CRYPTO</span> GAME</h1></div>
      <div className='img-hero'>
        <img src={bitcoin} alt='bitcoin' ></img>
        <img src={eth} alt='eth' ></img>
        <img src={t} alt='t' ></img>
        <img src={s} alt='s' ></img>
      </div>
    </div>
  )
}

export default Hero