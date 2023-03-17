import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
import "./sidenav.css"
import "../mobile.css"

const Navbar = () => {
  const [openSide, setOpenSide] = useState(false)

  const toggleNav =()=>{
    setOpenSide(!openSide)
  }
  return (
    <div className="">
      <div className="navigation">
          <div className="seleniaa-text">
           <h1>Selenia</h1>
          </div>
            <ul className="nav-list">
              <li className="list"> <Link to="/"> Home </Link></li>
              <li className="list"> <Link to="/features"> Features </Link></li>
              <li className="list"> <Link to="/contactus"> Contact us </Link></li>
              <li className="list"> <Link to="/aboutus"> About us </Link></li>
            </ul>
          <div className="nav2">
            <button className="button1" type="button">
              Get Selenia
            </button>
            <button className="button2" type="button">
              Log In
            </button>
          </div>
          <div className="ham" style={{marginRight:"20px"}} onClick={toggleNav} >{
            openSide ? <div className="">x</div> : <div className="">=</div>
          }</div>
    </div>
    <div className={openSide ? "side-navigation" : "side-navigation-close"}>
     <nav className="">
 <div className="logo2">
            <h1>Selenia</h1>
          </div>
            <ul className="min-nav">
              <li className="list"> <Link to="/"> Home </Link></li>
              <li className="list"> <Link to="/features"> Features </Link></li>
              <li className="list"> <Link to="/contactus"> Contact us </Link></li>
              <li className="list"> <Link to="/aboutus"> About us </Link></li>
              <li className="list"> <Link to="/aboutus"> Get Selenia </Link></li>
              <li className="list"> <Link to="/aboutus"> Log In</Link></li>
            </ul>
          </nav>
       </div>
     </div>
  );
};

export default Navbar;
