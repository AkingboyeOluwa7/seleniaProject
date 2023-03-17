import React from "react";
import Navbar from "./Navbar";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import "../App.css"

const Home = () => {
  return (
    <div id="home-container">
     <Navbar />
        <First />
      <Second />
      <Third /> 
     
    
    </div>
  );
};

export default Home;
