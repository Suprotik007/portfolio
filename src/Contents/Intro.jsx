import React from 'react';

import pfp from '../assets/mainpic.jpg'
import pfp2 from '../assets/myPic5.jpg'

const Intro = () => {
    return (
        <div className='w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-between gap-8 '>
        
        <div className='space-y-4'>
            <h1> <span className='font-extrabold text-4xl'>Suprotik Chowdhury</span></h1>
       <h2 className='text-3xl font-bold'>Frontend Developer</h2>
     <p>
        I love building and integrating functionality and design in applications to create intuitive, user-friendly experiences through efficient codes.
     </p>

        </div>

        <section >
            <img src={pfp} alt="profile-picture" className=' bg-main-foreground rounded-full  h-34 w-32   md:rounded-full md:h-48 md:w-135 lg:rounded-full lg:h-75 border-2 ' />
        </section>
        </div>
    );
};

export default Intro;