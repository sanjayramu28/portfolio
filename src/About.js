import React from 'react'

const About = () => {
    return (
        
        <div className='container-fluid'>
            <title>About Me</title>
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
                            <p className='col-4'>
                            7.95
                            </p>
                            {/* <br /> */}
                       <p className=''> Current CGPA</p>
                        </label>
                        <label className='col-4'>
                            <p>0</p>
                            {/* <br/> */}
                        <p>Arrears</p></label>
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
