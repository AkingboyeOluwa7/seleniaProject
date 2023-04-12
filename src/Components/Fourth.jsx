import React from "react";

const Fourth = () => {
   return (
        <div className="fourth">

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
        <div className="selenia-text">
          <div className="selenia1">
            <h1>Selenia</h1>
          </div>
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

        <div className="footer-info">
          <div className="footer-head">
            {" "}
            <h3>Company</h3>
          </div>
          <div className="footerp">
            {" "}
            <p>Home</p>
          </div>
          <div className="footerp">
            {" "}
            <p>About Us</p>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-head">
            <h3>Services</h3>
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

        <div className="footer-info">
          <div>
            <h3>Contact</h3>
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




        </div>


   );

};

export default Fourth;