import React, { useRef } from 'react'
// import { Form } from 'react-router-dom'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form=useRef();

    const sendEmail=(e)=>
    {
        e.preventDefault();


        emailjs.sendForm('service_20p83cj','template_gnwloih', form.current,{publicKey:'ugL8RNcg6iHrDJ_Bm'})
        .then(
            ()=>{
                console.log('Sucess');
            },
        (error)=>
        {
            console.log('Fail',error.text);
        }
        );
    };
    return (
        <div>
            <div className='contact-bg'>
                <p>Contact Me</p>
            </div>
            <div className='contact-form'>
                <h4 className='m-4 text-center p-4'>
                    Get In Touch
                </h4>
                <div className='row bg-light p-5'>
                    <form ref={form} className='col-6 contact-forma' onSubmit={sendEmail}>
                        <textarea rows={8} cols={90} placeholder='Enter The Message' className='ms-4' required name='message'></textarea>
                        {/* <br /> */}
                        <input type='text'  required name='user_name'/>
                        <span>Your Name</span>
                        <input type='email' required name='user_email'/>
                        <span>Your Mail</span><br />
                        <input type='text' required  name='user_subject'/>
                        <span>Subject</span>
                        <br />
                        <input type='submit' className='btn btn-info text-center ' value='Send message' style={{width:'20vh'}} />
                    </form>
                    <div className='col-3' style={{marginLeft:'30vh'}}>
                        <div className='contact-loc'>
                            <img src='images/home.png' alt='home'></img>
                            <label className='ms-3 '>Tiruchengode</label>
                            <p  className='text-secondary'>Namakkal</p>
                            {/* <br /> */}
                        </div>
                        <div className='contact-loc'>
                            <img src='images/phone.png'></img>
                            <label className='ms-3  '>+91-9087661022</label>
                            {/* <br /> */}
                            <p className='text-secondary'>Monday-Friday</p>
                            {/* <br /> */}
                        </div>
                        <div className='contact-loc'>
                            <img src='images/email.png'></img>
                            <label className='align-middle ms-3'>sanjayrajamani2003@gmail.com</label>
                            <p className='text-secondary'>Send Me You Message</p>
                            {/* <br /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
