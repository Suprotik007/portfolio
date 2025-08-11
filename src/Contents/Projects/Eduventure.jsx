import React from "react";
import { FaLink } from "react-icons/fa";
import { SiGithub } from "react-icons/si"
import eduventureImg from '../../assets/Eduventure-1.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init();


const Eduventure = () => (
  <div data-aos="zoom-in-left"  className=" mx-auto bg-[#151d17] tracking-wide text-base shadow-[8px_8px_0_0_#4f6653]
border-2 border-[#7b927e]  rounded-xl p-5 text-[#e1eae3] font-mono ">

    <div className="mb-6  text-sm text-[#8eb897]">
        <img src={eduventureImg} alt=""className="h-50 w-full md:h-auto  rounded-lg" />
    </div>

    <h2 className="text-2xl border-b pb-3 font-bold mb-4 tracking-wide">
      Eduventure- <span className="text-[#7b927e] ">Together we learn, together we lead</span>
    </h2>
    <p className="mb-6 text-gray-200">
  A full-stack e-learning platform where students can explore and enroll in classes, teachers can create and manage their own courses, and admins can control the platform's operations made with React,Express, MongoDB and Firebase. The platform features a user-friendly interface, secure authentication, and a responsive design, ensuring a seamless experience across devices. It also includes review system to enhance course quality.
    </p>
    <div className="flex flex-wrap gap-3 mb-10">
                <span className="bg-[#3a5640]  shadow-[2px_4px_0_0_#4f6653] border-1 text-[#e1eae3] px-4 py-1 rounded-md text-sm">React</span>
      <span className="bg-[#3a5640]  shadow-[2px_4px_0_0_#4f6653] border-1 text-[#e1eae3] px-4 py-1 rounded-md text-sm">Express</span>

      <span className="bg-[#3a5640]  shadow-[2px_4px_0_0_#4f6653] border-1 text-[#e1eae3] px-4 py-1 rounded-md text-sm">MongoDB</span>
      <span className="bg-[#3a5640]  shadow-[2px_4px_0_0_#4f6653] border-1 text-[#e1eae3] px-4 py-1 rounded-md text-sm">Firebase</span>
      <span className="bg-[#3a5640]  shadow-[2px_4px_0_0_#4f6653]  border-1 px-4 py-1 rounded-md text-sm">TailWindCSS</span>
      <span className="bg-[#3a5640]  shadow-[2px_4px_0_0_#4f6653]  border-1 px-4 py-1 rounded-md text-sm">JWT</span>
    
      
    </div>
    <div className="flex flex-col md:flex-row gap-5">
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
<a href="https://eduventure-ox.netlify.app/">Live demo</a> <span><FaLink /></span>
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
<a href="https://github.com/Suprotik007/Eduventure">Github</a> <span><SiGithub /></span>
</button>
    </div>
  </div>
);

export default Eduventure;

