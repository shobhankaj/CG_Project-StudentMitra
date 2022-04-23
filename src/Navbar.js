import React from "react";
import {
 
  Link
} from "react-router-dom";
import './navbar.css';
import home from './image/home.png';
import puchho from './image/puchho.png';
import siksha from './image/siksha.png';
import profile from './image/profile.png';



function Navbar(){
    return (
      <>
      <div className="center">
          <div className="logo_container">StudentMitra</div>
        </div>
        <ul>
        <li><Link to="/"><img src={home} alt="Home" className="img_style" ></img></Link></li>
        <li><Link to="/Puchho"><img src={puchho} alt="Puchho" className="img_style" ></img></Link></li>
        <li><Link to="/Siksha"><img src={siksha} alt="Siksha" className="img_style"></img></Link></li>
        <li><Link to="/Profile"><img src={profile} alt="profile" className="img_style" ></img></Link></li>
      </ul>
      </>
         
        
      

    );
  }
  export default Navbar;  
