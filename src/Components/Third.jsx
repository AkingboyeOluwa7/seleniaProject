import React from "react";
import "../mobile.css";
import "../App.css"
import { NavLink } from "react-router-dom";
const Third = () => {

  const NavLinkStyles = ({isActive}) => {

    return  {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#00ffa3' : 'none'
    }
  }
  return (
    <div id="main3">
      <div className="getupdate">
        <div className="update-text">
          <h1 className="updateh1">Get more updates</h1>
          <p className="updatep">
            Join our mailing list for regular updates about our new <br />
            features and releases{" "}
          </p>
        </div>
        <div className="update-form">
          <input
            className="input-form"
            typeof="text"
            name="EmailAddress"
            placeholder="Enter your email"
          />
          <button className="subscribe-button" typeof="submit">
            Subscribe
          </button>
        </div>
      </div>

      <div className="footer">


        <div className="laptopp">
        <div className="bracket1">
          <div className="sele">  <h3>Selenia</h3> 
          </div>
          <div className="iccon">
          <div>
              <img src="./images/Vector1.jpg" alt="" />
            </div>
            <div>
              <img src="./images/Vector2.jpg" alt="" />
            </div>
            <div>
              <img src="./images/Vector3.png" alt="" />
            </div>
            <div>
              <img src="./images/Vector4.jpg" alt="" />
            </div> 
          </div>
          <div className="cooppyy"> <h4 className="ccc">copyright 2023 selenia.com</h4> </div>
        </div>


        <div className="bracket2">
            
              <div className="topp"><h2 className="hh">Company</h2>
              <ul className="nav-lisst">
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Home </NavLink></li>
              <li className="lisst"> < NavLink style={NavLinkStyles} to="/features" className="nav-NavLinkk"> Features </NavLink></li>
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/aboutus" className="nav-NavLinkk"> About us </NavLink></li>
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Our team </NavLink></li>
     
            </ul>
            </div>


            
        </div>



        <div className="bracket2">
        <div className="topp"><h2 className="hh">Services</h2>
        <ul className="nav-lisst">
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Create Wallet </NavLink></li>
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Buy Airtime </NavLink></li>
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Deposit Money </NavLink></li>
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Bill Payment </NavLink></li>
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Trade Crypto </NavLink></li>
              
            </ul>
            </div>


        </div>

        <div className="bracket2">
        <div className="topp"><h2 className="hh">Contact</h2>
        <ul className="nav-lisst">
         
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/contactus" className="nav-NavLinkk"> Contact Us </NavLink></li>
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> FAQS </NavLink></li>
              <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Help Line </NavLink></li>
              
             
            </ul>
            </div>

        </div>



        </div>

       

      





        <div className="mobileF">

          


        <div className="bracket1-M">

     
<h1 className="selle">Selenia</h1>


</div>

<div className="bracket2-M">

<div className="b-1">


  <ul className="nav-lisst">
  <li className="lissst"> Company</li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Home </NavLink></li>
  <li className="lisst"> < NavLink style={NavLinkStyles} to="/features" className="nav-NavLinkk"> Features </NavLink></li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/aboutus" className="nav-NavLinkk"> About us </NavLink></li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Our team </NavLink></li>

</ul>

</div>

<div className="b-2">

<ul className="nav-lisst">
<li className="lissst"> Services</li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Create Wallet </NavLink></li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Buy Airtime </NavLink></li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Deposit Money </NavLink></li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Bill Payment </NavLink></li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Trade Crypto </NavLink></li>
  
</ul>


</div>

<div className="b-3">

<ul className="nav-lisst">

    <li className="lissst"> Contact</li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/contactus" className="nav-NavLinkk"> Contact Us </NavLink></li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> FAQS </NavLink></li>
  <li className="lisst"> <NavLink style={NavLinkStyles} to="/" className="nav-NavLinkk"> Help Line </NavLink></li>
  
 
</ul>

</div>



</div>

<div className="bracket3-M">
<div className="icccon">
<div>
  <img src="./images/Vector1.jpg" alt="" />
</div>
<div>
  <img src="./images/Vector2.jpg" alt="" />
</div>
<div>
  <img src="./images/Vector3.png" alt="" />
</div>
<div>
  <img src="./images/Vector4.jpg" alt="" />
</div> 
</div>
<div className="copyyyy"> <h4 className="cop">copyright 2023 selenia.com</h4> </div>

</div>



        </div>



 
      </div>
    </div>
  );
};

export default Third;







































// <div className="frame01">
// <div className="selenia22">
//   <h1 className="">Selenia</h1>
// </div>
// <div className="mobileview22">
//   {/* <div className="iconssz">
//     <div>
//       <img src="./images/Vector1.jpg" alt="" />
//     </div>
//     <div>
//       <img src="./images/Vector2.jpg" alt="" />
//     </div>
//     <div>
//       <img src="./images/Vector3.png" alt="" />
//     </div>
//     <div>
//       <img src="./images/Vector4.jpg" alt="" />
//     </div>
//   </div> */}
//   <div className="copyright">
//     <p className="copyy">Copyright 2023 selenia.com</p>
//   </div>
// </div>
// </div>

// <div className="framediv">
// <div className="frame02 frame002">
//   <div className="footer-head">
//     {" "}
//     <h3 className="hh3">Company</h3>
//   </div>
//   <div className="footerp">
//     {" "}
//     <p>Home</p>
//   </div>
//   <div className="footerp">
//     {" "}
//     <p>Features</p>
//   </div>
//   <div className="footerp">
//     {" "}
//     <p>About Us</p>
//   </div>
//   <div className="footerp">
//     {" "}
//     <p>Our team</p>
//   </div>
// </div>

// <div className="frame02  frame0001">
//   <div className="footer-head">
//     <h3 className="hh3">Services</h3>
//   </div>
//   <div className="footerp">
//     <p>Create Wallet</p>
//   </div>
//   <div className="footerp">
//     <p>Buy Airtime</p>
//   </div>
//   <div className="footerp">
//     <p>Deposit Money</p>
//   </div>
//   <div className="footerp">
//     <p>Bill Payment</p>
//   </div>
//   <div className="footerp">
//     <p>Trade crypto </p>
//   </div>
// </div>

// <div className="frame02 frame003">
//   <div className="footer-head">
//     <h3 className="hh3">Contact</h3>
//   </div>
//   <div className="footerp">
//     <p>Contact Us</p>
//   </div>
//   <div className="footerp">
//     <p>FAQs</p>
//   </div>
//   <div className="footerp">
//     <p>Helpline</p>
//   </div>
// </div>
// </div>

// <div className="mobileview2">
// {/* <div className="iconss">
//   <div>
//     <img src="./images/Vector1.jpg" alt="" />
//   </div>
//   <div>
//     <img src="./images/Vector2.jpg" alt="" />
//   </div>
//   <div>
//     <img src="./images/Vector3.png" alt="" />
//   </div>
//   <div>
//     <img src="./images/Vector4.jpg" alt="" />
//   </div>
// </div> */}
// <div className="copyright">
//   <p className="copyy">Copyright 2023 selenia.com</p>
// </div>
// </div>