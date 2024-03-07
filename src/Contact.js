import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {

    const [value, setValue] = React.useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

    const notify = () => {
        toast("Email Sent Sucess", {
            autoClose: 3000,
        })
    }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_20p83cj', 'template_gnwloih', form.current, { publicKey: 'ugL8RNcg6iHrDJ_Bm' })
            .then(
                () => {
                    console.log('Sucess');
                },
                (error) => {
                    console.log('Fail', error.text);
                }
            );
    };
    return (
        <div>
            <title>Contact</title>
            <div className='contact-form'>
                <h4 className='m-4 text-center p-4'>
                    Get In Touch
                </h4>
                <div className='row bg-light p-5'>
                    <form ref={form} className='col-lg-5 ' onSubmit={sendEmail}>
                        <div className='contact-forma'>
                            <textarea rows={8} cols={90} className='ms-4 ' placeholder='Your Message' required name='message' onChange={handleChange}></textarea>
                            <label className='contact-formb'>Message</label>
                        </div>
                        <div className='contact-forma'>
                            <p>Name</p>
                            <input type='text' required name='user_name' onChange={handleChange}/>
                            <label>Your Name</label>
                        </div>
                        <div className='contact-forma'>
                            <p>E-mail</p>
                            <input type='email' required name='user_email' onChange={handleChange}/>
                            <label>Your Mail</label><br />
                        </div>
                        <div className='contact-forma'>
                            <p>Subject</p>
                            <input type='text' required name='user_subject' onChange={handleChange}/>
                            <label>Subject</label>
                            <br />
                        </div>
                        <input disabled={!value} type='submit' className='btn btn-info text-center ' value='Send message' onClick={() =>  notify() } style={{ width: '20vh' }} />
                        <ToastContainer />
                    </form>
                    <div className='col-4 contact-info' style={{ marginLeft: '30vh' }}>
                        <div className='contact-loc'>
                            <img src='images/home.png' alt='home'></img>
                            <label className='ms-3 '>Tiruchengode</label>
                            <p className='text-secondary'>Namakkal</p>
                        </div>
                        <div className='contact-loc'>
                            <img src='images/phone.png'></img>
                            <label className='ms-3  '>+91-9087661022</label>
                            <p className='text-secondary'>Monday-Friday</p>
                        </div>
                        <div className='contact-loc'>
                            <img src='images/email.png'></img>
                            <label >sanjayrajamani2003@gmail.com</label>
                            <p className='text-secondary'>Send Me Your Message</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
