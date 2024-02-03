import React, { useState } from 'react'
import '../Css/navbar.css'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // changing active css on pages
  const [active,setActive]=useState("home")

  // changing color on scrolling
  const [bgColor,setBgColor]=useState(false)
  const changeColor=()=>{
    if(window.scrollY>=100){
      setBgColor(true)
    }else{
      setBgColor(false)
    }
  }
  window.addEventListener('scroll',changeColor)
  return (
    <div className='nav-main'>
    <div className={bgColor?"navbar navbar-bg":"navbar"}>
      <Link to={'/'} className='react-link'>
        <h2>Logo</h2>
      </Link>
        <div className="sub-navlink">
            <ul>
              <Link to={'/'} className='react-link'>
              <li onClick={()=>setActive("home")} className={active==="home"?"home-pages active":"home-pages"}>Home</li>
              </Link>
              <Link to={'/services'} className='react-link'>
              <li onClick={()=>setActive("services")} className={active==="services"?"home-pages active":"home-pages"}>Services</li>
              </Link>
              <Link to={'/pages'} className='react-link'>
              <li onClick={()=>setActive("pages")} className={active==="pages"?"home-pages active":"home-pages"}>Pages</li>
              </Link>
              <Link to={'/contact'} className='react-link'>
              <li onClick={()=>setActive("contact")} className={active==="contact"?"home-pages active":"home-pages"}>Contact</li>
              </Link>
              <Link to={'/aboutus'} className='react-link'>
              <li onClick={()=>setActive("about")} className={active==="about"?"home-pages active":"home-pages"}>About Us</li>
              </Link>
            </ul>
        </div>
        <div className="user-div">
          <span>
          <input type="text" placeholder='Search here..'/>
          <button><CiSearch /></button>
          </span>
          <Link to={'/login'}>
        <button className='login-btn'>Login</button>
          </Link>
        </div>
    </div>  
    </div>
  )
}

export default Navbar