import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <div className="seleniaa-text">
        <h1>Selenia</h1>
      </div>
      <nav className="navigations">
        <ul className="navigations-list">
          <li className="list"> Home</li>
          <li className="list"> Features</li>
          <li className="list"> Buy Airtime </li>
          <li className="list"> About us </li>
        </ul>
      </nav>
      <div className="nav2">
        <button className="button1" type="button">
          Get Selenia
        </button>
        <button className="button2" type="button">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
