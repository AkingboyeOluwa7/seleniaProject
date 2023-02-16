import React from "react";
import ellipse3 from '../../src/img/Ellipse.png'
import bigdollar from '../img/bigdollar.png'
import Ellipse5  from '../img/Ellipse5.png'
import bigdiamond from '../img/bigdiamond.png'
import smalldiamond from '../img/smalldiamond.png'

const First = () => {
  return (
    <div className="main1">
      <div id="frame1">
        <div className="ellipses1">
          <div className="img1">
            {" "}
            <img src={ellipse3} alt="" />
          </div>
          <div className="img2">
            <img src="./images/smalldollar.png" alt="" />{" "}
          </div>
          <div className="img3">
            {" "}
            <img src={bigdollar} alt="" />{" "}
          </div>
        </div>

        <div id="ellipsetext">
          <div className="ellipsetext1">
            <h1 className="header1">
              Join the future of <span>finance, </span>
              Use <span>cryptocurrency</span> today.
            </h1>
            <p className="para1">
              We believe in the power of decentralized digital currencies to
              change the world for the <br />
              better. Our platform offers a fast, secure, and user-friendly way
              to buy, sell, and store <br />a variety of popular
              cryptocurrencies
            </p>

            <div className="buttons1">
              <button className="ellipsebutton1">Get Selenia</button>
              <button className="ellipsebutton2">Learn More</button>
            </div>
          </div>
        </div>

        <div className="ellipse2">
          <div className="img4">
            {" "}
            <img src= {Ellipse5} alt="" />{" "}
          </div>
          <div className="img5">
            {" "}
            { <img src= {smalldiamond} alt="" /> }
          </div>
          <div className="img6">
            {" "}
            {<img src= {bigdiamond}alt="" />}
          </div>
        </div>
      </div>


      <div id="frame2">
        <div className="box-head">
          <div className="boxx">
            <div className="BOX1">
              {" "}
              <img src="./images/Rectangle 33.png" alt="" />
            </div>
            <div className="BOX1">
              {" "}
              <img src="./images/Rectangle 7.png" alt="" />
            </div>
            <div className="BOX1">
              {" "}
              <img src="./images/Rectangle 6.png" alt="" />
            </div>
            <div className="BOX1">
              {" "}
              <img src="./images/Rectangle 5.png" alt="" />
            </div>
          </div>
          <div className="dots">
            <div className="dot-1">
              <img src="./images/dot1.png" alt="" />
            </div>
            <div className="dot-2">
              <img src="./images/Dot2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
