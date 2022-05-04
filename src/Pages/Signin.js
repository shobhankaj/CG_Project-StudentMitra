import React from 'react'
import './Signin.css'

function Signin() {
  return (
    <div className='signin'>
    {/*Step 1 : Adding HTML*/}
    <form method="POST" action="/signin" encType="multipart/form-data">
      <div className="login-form">
        <div className="signin_container">
          <label><b>Useremail</b></label>
          <input type="text" placeholder="Enter your email" name="email" required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter your Password" name="pass" required />
          <button name="submit" type="submit">Login</button>
          <input type="checkbox" defaultChecked="checked" /> Remember me<br />
          Not a member please<a href="registration.html"> Register Here</a>
          <div className="container2" style={{backgroundColor: '#f1f1f1'}}>
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot password?</span>
          </div>
        </div>
        {/* <div className="logo">
          <img src="./image/SM-logo.jpg" />
        </div> */}
      </div>
    </form>
  </div>
    )
}

export default Signin