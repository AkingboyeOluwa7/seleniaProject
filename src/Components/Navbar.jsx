import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
import "./sidenav.css"
import "../mobile.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineCancel} from "react-icons/md"
const Navbar = () => {
  const [openSide, setOpenSide] = useState(false)

  const toggleNav =()=>{
    setOpenSide(!openSide)
  }

  const NavLinkStyles = ({isActive}) => {

    return  {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#00ffa3' : 'none'
    }
  }
  return (
    <div className="navigationzzz">
      <div className="navigation">
          <div className="seleniaa-text">
           <h1>Selenia</h1>
          </div>
            <ul className="nav-list">
              <li className="list"> <NavLink style={NavLinkStyles} to="/"> Home </NavLink></li>
              <li className="list"> <NavLink style={NavLinkStyles} to="/features"> Features </NavLink></li>
              <li className="list"> <NavLink style={NavLinkStyles} to="/contactus"> Contact us </NavLink></li>
              <li className="list"> <NavLink style={NavLinkStyles} to="/aboutus"> About us </NavLink></li>
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
            openSide ? <div className="cancel"><MdOutlineCancel/></div> : <div className="burger"><GiHamburgerMenu/></div>
          }</div>
    </div>
    <div className={openSide ? "side-navigation" : "side-navigation-close"}>
     <nav className="">
 <div className="logo2">
            <h1>Selenia</h1>
          </div>
            <ul className="min-nav">
              <li className="list"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLink"> Home </NavLink></li>
              <li className="list"> <NavLink style={NavLinkStyles} to="/features" className="nav-NavLink"> Features </NavLink></li>
              <li className="list"> <NavLink style={NavLinkStyles} to="/contactus" className="nav-NavLink"> Contact us </NavLink></li>
              <li className="list"> <NavLink style={NavLinkStyles} to="/aboutus" className="nav-NavLink"> About us </NavLink></li>
              <li className="list"> <NavLink style={NavLinkStyles} to="/aboutus" className="nav-NavLink"> Get Selenia </NavLink></li>
              <li className="list"> <NavLink style={NavLinkStyles} to="/aboutus" className="nav-NavLink"> Log In</NavLink></li>
            </ul>
          </nav>
       </div>
     </div>
  );
};

export default Navbar;
