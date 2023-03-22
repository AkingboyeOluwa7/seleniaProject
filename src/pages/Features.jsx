import React from 'react'
import Navbar from '../Components/Navbar'
import Second from '../Components/Second'
import Third from '../Components/Third'
import "../features.css"
import "../App.css"
import "../mobile.css"
const Features = () => {
  return (
    <div className='featurespage'>
      <Navbar></Navbar>
      <Second></Second>
      <Third></Third>
    </div>
  )
}

export default Features
