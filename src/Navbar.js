import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';


const Navbar = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <p>Sanjay</p>
        </div>
        <div className='col-lg-6'>
          <ul className='ull row'>
            <li className='col-lg-3'>
              <a href='home'>
                Home
              </a>
            </li>
            <li className='col-lg-3'>
              <a href='about me'>About Me!</a>
            </li>
            <li className='col-lg-3'>
              <a href='contact'>Contact  Me</a>
            </li>
            <li className='col-lg-3'>
              <a href='resume'>Resume</a>
            </li>
          </ul>

        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about me" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path='resume' element={<Resume />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
