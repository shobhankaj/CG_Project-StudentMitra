import React from 'react'
import "./Profile.css";
import { FaUserCircle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

function Profile() {
  return (
    <div className='profile'>
{/* user picture and button section */}
      <div className='user'>
        <div className='user-icon-btn'>
         <div className='user-img'>
         <FaUserCircle/>
         <h5>User Name</h5>
         </div>
         <div className='follow-btn'>
         <button className='btn btn-primary'>Connect</button>
         <button className='btn btn-outline-success'>Message</button>
         </div>
        </div>

       <div className='user-link'>
        <div className='link'>
          <AiFillTwitterCircle/>User Website
          <a href="#">User Website link</a>
          </div>

          <div className='link'>
          <BsFacebook/>Facebook
          <a href="#">Facebook Id</a>
          </div>
        
          <div className='link'>
          <BsInstagram/>Instagram
          <a href="#">Instagram Id</a>
          </div>

          <div className='link'>
          <AiFillTwitterCircle/>Twitter
          <a href="#">Twitter Id</a>
          </div>
        </div>
        {/* below user div */}
      </div> 

{/* user informatin section */}
      <div className='user-info'>
        <form className='user-form'>
         <div className="form-row">
          <div className="form-group col-md-5">
            <label htmlFor="user-name">User Name</label>
            <input type="text" className="form-control" id="user-name" placeholder="Enter your name" />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="email">Email</label>
            <input type="password" className="form-control" id="email" placeholder="Enter your email" />
          </div>
         </div>
         <div className="form-row">
          <div className="form-group col-md-5">
          <label htmlFor="inputAddress">College Name</label>
          <input type="text" className="form-control" id="college-name" placeholder="Enter your college name" />
          </div>
          <div className="form-group col-md-5">
          <label htmlFor="mob-no">Mobile Number</label>
          <input type="number" className="form-control" id="mob-number" placeholder="Enter your mobile number" />
          </div>
         </div>

         <div className="form-row">
          <div className="form-group col-md-5">
          <label htmlFor="college-year">College Year</label>
          <input type="text" className="form-control" id="college-year" placeholder="Enter your college Year" />
          </div>
          <div className="form-group col-md-5">
          <label htmlFor="passout-year">Passout Year</label>
          <input type="number" className="form-control" id="passout-year" placeholder="Enter your collge passout year" />
          </div>
         </div>

         <div className="form-row">
           <div className="form-group col-md-4">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
           </div>
           <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
            </div>
           <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
           </div>
          </div>
           <div className='update-btn'>
           <button type="submit" className="btn btn-success">Update</button>
           </div>
        </form>
      </div>

       {/*  */}
    </div>
  )
}

export default Profile