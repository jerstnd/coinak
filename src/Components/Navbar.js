import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
      <header>
            <div className='logo'><a href='#'>COINAK</a></div>
            <nav>
                <ul class="nav__links">
                    <li><a href="#">Market</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <Link to={'/login'} style={{ textDecoration: 'none' }}><a class="cta" href="#">Join</a></Link>
        </header>
  )
}

export default Navbar