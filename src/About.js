import React from 'react'
import Contact from './Contact';
// import { useHistory } from 'react-router-dom';



const About = () => {
    let interval=5000;
    function number(value)
    {
        let start=0;
        let end={value};
        let duration=Math.floor(interval/end)
        let counter=setInterval(function (){
            start+=1
            return start;
        },duration);
        console.log(value)
    }
    return (
        <div className='container-fluid'>
                <div className='abt'>
                    <p>About Me!</p>
                </div>
                <div className='abt-me '>
                    <p>
                        Hi there, I am Sanjay. I am designer, cat
                        lover and I would like to share with you some of
                        my ideas.
                    </p>
                </div>
                <div className='abt-me1 row'>
                    <div className='abts col-lg-6'>
                        <label style={{paddingTop:'10vh'}}>About Me:</label>
                        <br />
                        <p >
                             &nbsp;&nbsp;Hi , I am Sanjay .I Have Completed My Studies at K.S.Rangasamy College Of Technology.
                        </p>
                    </div>
                    
                        <img src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1707317412~exp=1707318012~hmac=ba23a5b85de8d7dc1c31317b41a2896cf1fa14201a217974305ccda119cb0f05' className='abt-img col-lg-6' />
                   
                </div>
                <br />
                <div className='abt-cards'> 
                        <label className='col-4'>
                            <span>
                            7.95
                            </span>
                            <br />
                       <p> Current CGPA</p>
                        </label>
                        <label className='col-4'>
                            <span>0</span>
                            <br/>
                        Arrears</label>
                </div>
                <div className='discuss'>
                    <video autoPlay loop muted id='disc'>
                        <source src='images/discussbg.mp4'></source>   
                    </video>
                    <div className='discuss-para'>
                        <p>Let's Discuss About Projects</p>
                        <p>If You Want To Contact Me Click Below</p>
                        <button className='btn m-5  btn-primary' >Contact</button>
                    </div>
                </div>
                
        </div>
    )
}

export default About
