import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Navbar() {
    let {user} = useContext(AuthContext)

  return (
      <header>
            <div className='logo'><Link to={'/'} style={{ textDecoration: 'none' }}>COINAK</Link></div>
            <nav>
                <ul class="nav__links">
                    <li><a href="#">Market</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            {user ? <Link to={'/portfolio'} style={{ textDecoration: 'none' }}><a className="cta" href="#">Portfolio</a></Link>:<Link to={'/login'} style={{ textDecoration: 'none' }}><a className="cta" href="#">Join</a></Link>}
        </header>
  )
}

export default Navbar