import React from 'react'
import Third from '../Components/Third'
import Navbar from '../Components/Navbar'

import "../contactus.css"
import "../mobile.css"

const Contactus = () => {
  return (
    <div id='contactwhole'>
      <Navbar />
      <div className='contactdiv'>
        
      <div className='contact'>
        <div  className='contact-text'>
          <p>contact us</p>
        </div>
        <div className='helpyou'>
          <p>How can we help you?</p>
        </div>
        <div className='fill-in'>
          <p>Fill in the form or drop an email</p>
        </div>

        <div className="iconssz">
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
      </div>

      <div className='formname0'>
        
      <div className='formname'>
        <div className='formname1'>
        <input
            className="input-form22"
            typeof="text"
            name="EmailAddress"
            placeholder="Name"
          />
        </div>

        <div className='formname1'>
        <input
            className="input-form2"
            typeof="text"
            name="EmailAddress"
            placeholder="Email"
          />
        </div>

        <div className='formname1'>
        <input
            className="input-form2"
            typeof="text"
            name="EmailAddress"
            placeholder="Phone Number"
          />
        </div>

        <div className='formname11'>
        <input
            className="input-form222"
            typeof="text"
            name="EmailAddress"
            placeholder="Message"
          />
        </div>
        <div>
        <button className="subscribe-button0" typeof="submit">
            Subscribe
          </button>
        </div>



      </div>


      </div>


      </div>



    <Third></Third>
      






    </div>
  )
}

export default Contactus
