import React from 'react'
import './Signup.css'
import { useState } from 'react';

function Signup() {

  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:3000/Signup', {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setName("");
            setPassword("");
        }
    }

  return (
    <div className='signup'>
        {/*Step 1 : Adding HTML*/}
        <h2>Register Here</h2>
        <form method="POST" action="/Signup" encType="multipart/form-data">
          <div className="registration-form">
            <div className="container">
              <label><b>Username</b></label>
              <input type="text" placeholder="Enter your Name" value={name} autoComplete='name' onChange={(e) => setName(e.target.value)} name="name" required />
              <label><b>Useremail</b></label>
              <input type="text" placeholder="Enter your Email" name="email" autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label><b>Password</b></label>
              <input type="password" placeholder="Enter your Password" autoComplete="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
              
              <button name="submit" onClick={handleOnSubmit} type="submit">Register</button>
              <input type="checkbox" defaultChecked="checked" /> Remember me<br />
              already registered please <a href="login.html">Login Here</a>
            </div> 
            {/* <div className="logo">
              <img src="./image/SM-logo.jpg" />
            </div> */}
          </div>
        </form>
      </div>
  )
}

export default Signup