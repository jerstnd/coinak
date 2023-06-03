import React from 'react'
import {Link} from 'react-router-dom'

function RegisterScreen() {
  return (
    <div>
        <Link to={"/login"}><button className='btn-back-login'>Go Back</button></Link>
    <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>REGISTER</h2>
        <div className="underline-title"></div>
      </div>
      <form method="post" className="form">
        <label for="user-email" style={{paddingTop:"13px"}}>
            &nbsp;Username
          </label>
        <input id="user-email" className="form-content" type="username" name="username" autocomplete="on" required />
        <div className="form-border"></div>
        <label for="user-password" style={{paddingTop:"22px"}}>&nbsp;Password
          </label>
        <input id="user-password" className="form-content" type="password" name="password" required />
        <div className="form-border"></div>
        <label for="user-password" style={{paddingTop:"22px"}}>&nbsp;Confirm Password
          </label>
        <input id="user-password" className="form-content" type="password" name="password" required />
        <div className="form-border"></div>
        <input id="submit-btn" type="submit" name="submit" value="REGISTER" />
      </form>
    </div>
    </div>
    </div>
  )
}

export default RegisterScreen