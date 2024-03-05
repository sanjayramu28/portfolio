import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const Hidenav = () => {
    const side=document.querySelector('.sidebar');
   side.style.display='none'
  }

  const Shownav=()=>{
    const show=document.querySelector('.sidebar');
    show.style.display='block';
  }
  return (    

  <div className='container-fluid'>
    <div className='sidebar'>
      <p className='float-end fs-2 close' onClick={()=>Hidenav()}><FontAwesomeIcon icon={faXmark} style={{height:'50px'}}/></p>
      <ul className='ulls'>
        <li>
          <a href='home'>
            Home
          </a>
        </li>
        <li >
          <a href='about me'>About Me!</a>
        </li>
        <li>
          <a href='contact'>Contact  Me</a>
        </li>
        <li >
          <a href='resume'>Resume</a>
        </li>
      </ul>
    </div>


    <div className='row'>
    
      <div className='col i' >
        <img src='images/logosanjay.png '/>
      </div>
      <div className='col '>
        <ul className='ull row'>
          <li className='col-3'>
            <a href='home'>
              Home
            </a>
          </li>
          <li className='col-3'>
            <a href='about me'>About Me!</a>
          </li>
          <li className='col-3'>
            <a href='contact'>Contact  Me</a>
          </li>
          <li className='col-3'>
            <a href='resume'>Resume</a>
          </li>
          
        </ul>
        <li className=' nav-menu' onClick={()=>{Shownav()}}><FontAwesomeIcon icon={faBars} className='menu1'  style={{width:'10vh',height:'35px'}}/></li>
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
