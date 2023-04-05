import React from "react";
import Wallet from '../img/Wallet.jpg'
import payment from '../img/payment.jpg'
import paybills from '../img/paybills.jpg'
import "../mobile.css"
import mobile1 from '../img/mobile1.png'
import mobile2 from '../img/mobile2.png'
import mobile3 from '../img/mobile3.png'

const Second = () => {
  return (
    <div id="main2">
      <div className="gettingstarted0">
        <div className="gettingstarted">
          <h1 className="h1gettingstarted">
            Your phone number is your <br />
            wallet address
          </h1>
          <p className="pgettingstarted">
            Create account on Selenia and have your phone number <br />
            as your wallet address. Remember your wallet address <br />
            easily
          </p>
          <button className="ellipsebutton111">Get Selenia</button>
        </div>
        <div className="gettingstarted-img">
        <img src={Wallet} alt="" />
        </div>
        <div className="mobile1"><img src={mobile1} alt="" /></div>
      </div>
        

      <div className="buycoins0"> 

        <div  className="mobile2"> <img src={mobile2} alt="" /></div>
        {<div className="make-payment makepaymentmobile">

          <img src={payment} alt="" />
        </div>}
        <div className="buycoins">
          <div>
            <h1 className="buycoinstexth1">
              Buy coins on selenia using various payment method
            </h1>
            <p className="buycoinsp">
              Deposit money (BTC, ETH and Stable coins) in your selenia account{" "}
            </p>
            <button className="ellipsebutton111">Get Started</button>
          </div>
        </div>
      </div>



      <div className="buy-airtime">

        <div className="buyairtimetext">
          <h1 className="buyairtimeh1">
            Buy airtime and pay bills with cryptocurrency
          </h1>
          <p className="buyairtimep">
            Buy airtime, data and pay utility bills connveniently using
            cryptocurrency
          </p>

          <button className="ellipsebutton111">Get Selenia</button>
        </div>
        <div className="mobile3">  <img src={mobile3} alt="" /></div>
        <div className="buyairtimepicture">
          <img src={paybills} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Second;
