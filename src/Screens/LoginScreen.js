import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function LoginScreen() {
  let {loginUser} = useContext(AuthContext)
  
  return (
    <div>
      <Link to={"/"}><button className='btn-back-login'>Go Back</button></Link>
      <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>LOGIN</h2>
        <div className="underline-title"></div>
      </div>
      <form method="post" className="form" onSubmit={loginUser} >
        <label for="username" style={{paddingTop:"13px"}}>
            &nbsp;Username
          </label>
        <input id="user-email" className="form-content" type="username" name="username" autocomplete="off" required />
        <div className="form-border"></div>
        <label for="user-password" style={{paddingTop:"22px"}}>&nbsp;Password
          </label>
        <input id="user-password" className="form-content" type="password" name="password" required />
        <div className="form-border"></div>
        <a href="#">
          <legend id="forgot-pass">Forgot password?</legend>
        </a>
        <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
        <Link to={'/register'} style={{ textDecoration: 'none' }} id="signup">Don't have account yet?</Link>
      </form>
    </div>
  </div>
    </div>
  )
}

export default LoginScreen