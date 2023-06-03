import React, {useContext, useState} from 'react'
import  Navbar  from '../Components/Navbar'
import AuthContext from '../context/AuthContext'

import AddTransaction from '../Components/AddTransaction'

function PortfolioScreen() {

  let {logoutUser} = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='portfolio'>
      <Navbar />
      <button className='add-trans' onClick={togglePopup}>Add transactions</button>
      {isOpen && <AddTransaction handleClose={togglePopup} /> }

      <div className='portfolio-top'>
        <div className='portofolio-box'>COST</div>
        <div className='portofolio-box'>VALUE</div>
        <div className='portofolio-box'>PROFIT/LOSS</div>
        <div className='portofolio-box'>PROFIT/LOSS (%)</div>
      </div>

      <div className='portfolio-bot'>
        <div className='portfolio-boxbot'>EQUITY DISTRIBUTION</div>
        <div className='portfolio-boxbot'>INFO</div>
      </div>

      <button className='logout' onClick={logoutUser}>logout</button>
    
    </div>
  )
}

export default PortfolioScreen