import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function PortfolioScreen() {
  let {user} = useContext(AuthContext)
  return (
    <div>
    {user ? (<div>PortfolioScreen {user.username}</div>) : (<div>login required</div>)}
    </div>
  )
}

export default PortfolioScreen