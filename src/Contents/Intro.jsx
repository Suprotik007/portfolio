import React from 'react';
import DecryptedText from '../../ReactBits/DecryptedText/DecryptedText'
import BlurText from '../../ReactBits/BlurText/BlurText'
import { FiDownload } from "react-icons/fi";
import pfp from '../assets/mainpic.jpg'


const Intro = () => {
return (
<div id='Intro' className='w-10/12 mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center '>

<div className='space-y-4'>
<h1> <span className='font-extrabold text-4xl'><div style={{ marginTop: '4rem' }}>
<DecryptedText
text="Suprotik Chowdhury"
animateOn="view"
revealDirection="center"
/>
</div></span></h1>
<BlurText
  text="Frontend Developer"
  delay={350}
  animateBy="words"
  direction="top"
//   onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
<p>

<DecryptedText
className='text-gray-400'
text="I love building and integrating functionality and design in applications to create intuitive, user-friendly experiences through efficient codes."
animateOn="view"
revealDirection="center"
/>

</p>

<div className='pt-3 flex flex-col md:flex-row gap-5'>

<button className="
relative
px-6 py-2
rounded-xl
bg-[#6f8b76]
text-gray-900
tracking-wide text-base
border-2 border-[#7b927e]
shadow-[5px_5px_0_0_#4f6653]
transition-transform duration-500
hover:translate-x-2 hover:translate-y-3
active:translate-x-0 active:translate-y-0
">
<a href="https://linktr.ee/suprotik">Contact Me →</a>
</button>

<button className="

relative
px-6 py-2
rounded-xl
bg-[#6f8b76]
text-gray-900
tracking-wide text-base
border-2 border-[#7b927e]
shadow-[5px_5px_0_0_#4f6653]
transition-transform duration-500
hover:translate-x-2 hover:translate-y-3
active:translate-x-0 active:translate-y-0
flex flex-row items-center gap-2 justify-center
">
<span className='text-center'><a href="">Resume </a></span>
<span><FiDownload /></span>
</button>
</div>
</div>
{/* image */}
<section >
<img src={pfp} alt="profile-picture" className=' bg-main-foreground rounded-full h-48 w-48 md:rounded-full md:h-48 md:w-135 lg:rounded-full lg:h-75 border-2 ' />
</section>

{/* contact */}

</div>
);
};

export default Intro;