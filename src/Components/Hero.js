import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Hero() {
  let {user} = useContext(AuthContext)

  return (
    <div>
      <div className='hero'><h1>STAY AHEAD OF THE <span className='crypto-text'>CRYPTO</span> GAME</h1></div>
      <div className='hero-btn-cont'>
      {user ? <Link to={'/portfolio'} style={{ textDecoration: 'none' }}><div className='hero-btn'>Get Started</div></Link> : <Link to={'/login'} style={{ textDecoration: 'none' }}><div className='hero-btn'>Get Started</div></Link>}
      
      </div>    
    </div>
  )
}

export default Hero