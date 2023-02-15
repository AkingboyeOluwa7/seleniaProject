import React from "react";
import Wallet from '../img/Wallet.png'
import payment from '../img/payment.png'
import paybills from '../img/paybills.png'
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
      </div>

      <div className="buycoins0">
        <div className="make-payment">
          <img src={payment} alt="" />
        </div>
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
        <div className="buyairtimepicture">
          <img src={paybills} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Second;
