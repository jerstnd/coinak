import React from 'react'
import {Link} from 'react-router-dom'

function LoginScreen() {
  return (
    <div>
      <Link to={"/"}><button className='btn-back-login'>Go Back</button></Link>
      <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>LOGIN</h2>
        <div className="underline-title"></div>
      </div>
      <form method="post" className="form">
        <label for="user-email" style={{paddingTop:"13px"}}>
            &nbsp;Email
          </label>
        <input id="user-email" className="form-content" type="email" name="email" autocomplete="on" required />
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