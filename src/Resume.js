import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircle as fat } from '@fortawesome/free-regular-svg-icons';



const Resume = () => {
  return (
    <>
      <h1 className='text-center p-5 res-shadow'>Resume</h1>
      <div className='row'>
        <div className='col-lg-3 left '>
          <p className='text-dark fs-3 tshadow'>Sanjay<span className='text-white'>&nbsp;Ram</span></p>
          <div className='res-details'>
            <h2>Details</h2>
            <h5>Phone</h5>
            <p className='ms-4'>+91-9087661022</p>
            <h5>Email</h5>
            <p className='ms-4'>sanjayrajamani2003@gmail.com</p>
            <h5>Date Of Birth</h5>
            <p className='ms-4'>28/12/2003</p>
          </div>

          <div className='res-skills'>
            <h2>Skills</h2>
            <h4 className='mt-4'>Bootstrap</h4>
            <div className='bar' style={{height:'10px'}}>
              <div className='barb' style={{width:'80%',animation:'Boot-animation 3s ease'}}>
                <span className='ski-perc'>80%</span>
              </div>
            </div>

            <h4 className='mt-4'>React</h4>
            <div className='bar' style={{height:'10px'}}>
              <div className='barb' style={{width:'60%',animation:'React-animation 3s'}}>
                 <span className='ski-perc'>60%</span>
              </div>
            </div>

            

            <h4 className='mt-4'>Html & CSS</h4>
            <div className='bar' style={{height:'10px'}}>
              <div className='barb' style={{width:'90%',animation:'Html-animation 3s'}}>
                 <span className='ski-perc'>90%</span>
              </div>
            </div>

            <h4 className='mt-4'>JavaScript</h4>
            <div className='bar' style={{height:'10px'}} >
              <div className='barb' style={{width:'70%',animation:'Js-animation 3s'}}>
                 <span className='ski-perc'>70%</span>
              </div>
            </div>

            <h4 className='mt-4'>Java</h4>
            <div className='bar' style={{height:'10px'}}>
              <div className='barb' style={{width:'60%', animation:'Java-animation 3s '}}>
                 <span className='ski-perc'>60%</span>
              </div>
            </div>


            <h4 className='mt-4'>Active Listening</h4>
            <div className='bar' style={{height:'10px'}}>
              <div className='barb' style={{width:'80%',animation:'listen-animation 3s'}}>
                 <span className='ski-perc'>80%</span>
              </div>
            </div>
          </div>
          <div className='res-links'>
            <a href='https://github.com/sanjayramu28'><img src='https://cdn-icons-png.flaticon.com/128/270/270798.png' />Git Hub</a>
            <br />
            <hr />
            <a href='https://www.linkedin.com/in/ sanjay-ram-28dec2003'><img src='https://cdn-icons-png.flaticon.com/128/3992/3992606.png' />LinkedIn</a>
            <hr />
          </div>
        </div>
        <div className='col-lg-7 right'>
          {/* <p>+919087661022</p> */}
          <h2>Profile</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a recent graduate with a B.E  in Computer Science And Engineering from K S Rangasamy College Of Technology,
            I am eager to apply my academic knowledge and enthusiasm to contribute to a dynamic work environment.
            I am a quick learner with a strong attention to detail and excellent problem-solving abilities. Seeking an entry-level
            position  where I can continue to learn and grow while making meaningful contributions to the success of the team.
          </p>
          <div className='res-education'>
            <h2>Education</h2>
            <label className='col-6'>
              <span className='bold'>B.E at &nbsp;</span>
              K S Rangasamy College Of Technology</label>
            <label className='text-end col-6'>Tiruchengode</label>

            <label className='mt-4 col-6'>
              <span>XII at </span>
              Shri Ramachandira Higher Secondary School
            </label>
            <label className='col-6 text-end'>Elachipalayam</label>

            <label className='mt-4 col-6'>
              <span>X at </span>
              Shri Ramachandira Higher Secondary School
            </label>
            <label className='col-6 text-end'>Elachipalayam</label>
          </div>

          <div className='res-courses'>
            <h2>Courses</h2>
            <label className='fs-3'>React Js </label>
            <p className='ms-5'>Internshala</p>
          </div>

          <div className='res-intern'>
            <h2>
              Internships
            </h2>
            <label className='fs-3'>Web Developer </label>
            <p className='ms-5'>Infinity Hub-Erode</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
