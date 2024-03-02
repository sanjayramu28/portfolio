import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircle as fat } from '@fortawesome/free-regular-svg-icons';



const Resume = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  return (
    <>
      <h1 className='text-center p-3'>Resume</h1>
      <div className='row'>
        <div className='col-lg-3 left '>
          <p className='text-dark fs-1'>Sanjay<span className='text-info'>&nbsp;Ram</span></p>
          {/* <p>165/15c,T.salapalayam,<br />Kumaramangalam,Tiruchengode,<br />Namakkal,637205</p> */}
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
            <FontAwesomeIcon icon={faCircle} className='fonta' />
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={fat} className='fonta'/>

            <h4 className='mt-4'>React</h4>
            <FontAwesomeIcon icon={faCircle} className='fonta' />
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={fat} className='fonta'/>

            <h4 className='mt-4'>Html & CSS</h4>
            <FontAwesomeIcon icon={faCircle} className='fonta' />
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={fat} className='fonta'/>

            <h4 className='mt-4'>JavaScript</h4>
            <FontAwesomeIcon icon={faCircle} className='fonta' />
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={fat} className='fonta'/>

            <h4 className='mt-4'>Active Listening</h4>
            <FontAwesomeIcon icon={faCircle} className='fonta' />
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={faCircle} className='fonta'/>
            <FontAwesomeIcon icon={fat} className='fonta'/>
          </div>
          <div className='res-links'>
            
            <a href='https://github.com/sanjayramu28'><img src='https://cdn-icons-png.flaticon.com/128/270/270798.png' />Git Hub</a>
            <br />
            
            <a href='www.linkedin.com/in/ sanjay-ram-28dec2003'><img src='https://cdn-icons-png.flaticon.com/128/3992/3992606.png' />LinkedIn</a>
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
            <h4>React Js </h4>
            <p>Internshala</p> 
          </div>

          <div className='res-intern'>
            <h2>
              Internships
            </h2>
            <label>Web Developer </label>
            <p>Infinity Hub-Erode</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
