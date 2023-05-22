import React from 'react'

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
            <a class="cta" href="#">Join</a>
        </header>
  )
}

export default Navbar