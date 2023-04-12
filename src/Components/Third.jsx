import React from "react";
import "../mobile.css";

const Third = () => {
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
        <div className="frame01">
          <div className="selenia22">
            <h1 className="">Selenia</h1>
          </div>
          <div className="mobileview22">
            <div className="iconssz">
              <div>
                <img src="./images/Vector1.jpg" alt="" />
              </div>
              <div>
                <img src="./images/Vector2.jpg" alt="" />
              </div>
              <div>
                <img src="./images/Vector3.jpg" alt="" />
              </div>
              <div>
                <img src="./images/Vector4.jpg" alt="" />
              </div>
            </div>
            <div className="copyright">
              <p className="copyy">Copyright 2023 selenia.com</p>
            </div>
          </div>
        </div>

        <div className="framediv">
          <div className="frame02 frame002">
            <div className="footer-head">
              {" "}
              <h3 className="hh3">Company</h3>
            </div>
            <div className="footerp">
              {" "}
              <p>Home</p>
            </div>
            <div className="footerp">
              {" "}
              <p>Features</p>
            </div>
            <div className="footerp">
              {" "}
              <p>About Us</p>
            </div>
            <div className="footerp">
              {" "}
              <p>Our team</p>
            </div>
          </div>

          <div className="frame02  frame0001">
            <div className="footer-head">
              <h3 className="hh3">Services</h3>
            </div>
            <div className="footerp">
              <p>Create Wallet</p>
            </div>
            <div className="footerp">
              <p>Buy Airtime</p>
            </div>
            <div className="footerp">
              <p>Deposit Money</p>
            </div>
            <div className="footerp">
              <p>Bill Payment</p>
            </div>
            <div className="footerp">
              <p>Trade crypto </p>
            </div>
          </div>

          <div className="frame02 frame003">
            <div className="footer-head">
              <h3 className="hh3">Contact</h3>
            </div>
            <div className="footerp">
              <p>Contact Us</p>
            </div>
            <div className="footerp">
              <p>FAQs</p>
            </div>
            <div className="footerp">
              <p>Helpline</p>
            </div>
          </div>
        </div>

        <div className="mobileview2">
          <div className="iconss">
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
          <div className="copyright">
            <p className="copyy">Copyright 2023 selenia.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
