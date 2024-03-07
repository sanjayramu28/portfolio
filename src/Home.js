import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
  return (
    <>
    <title>Home</title>
      <div className='home container-fluid'>
        <p className='name'>Hello This is Sanjay</p>
        <div className='icns' >
          <label>
            <a href='https://www.facebook.com' target='blank'><FontAwesomeIcon icon={faFacebook} className='gradient-icon' /></a>
          </label>
          <br />
          <label>
            <a href='https://www.instagram.com/sam_sanjay2000/' target='blank'><FontAwesomeIcon icon={faInstagram} /></a></label>
          <br />
          <label>
            <a href='https://www.linkedin.com/in/sanjay-ram-220bba224/' target='blank'><FontAwesomeIcon icon={faLinkedin} /></a></label>
        </div>
      </div>
      <div className='welcome' >
        <p>Welcome,My Name is R.Sanjay. I Have Completed My Studies At K.S.Rangasamy College Of Technology
            during The Academic year of (2021-2025).I Was passionate about working as a front end Developer.
            I Know languages like  JavaScript,React Js,Html,CSS </p>
      </div>

    </>
  )
}

export default Home
