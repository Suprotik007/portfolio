import React from "react";
import { FaLink } from "react-icons/fa";
import { SiGithub } from "react-icons/si"
import moonlitImg from '../../assets/Moonlit.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init();


const MoonLit = () => (
  <div data-aos="zoom-in-left"  className=" mx-auto bg-[#151d17] tracking-wide text-base shadow-[8px_8px_0_0_#4f6653]
border-2 border-[#7b927e]  rounded-xl p-5 text-[#e1eae3] font-mono ">

    <div className="mb-6  text-sm text-[#8eb897]">
        <img src={moonlitImg} alt=""className="h-50 w-full md:h-auto  rounded-lg" />
    </div>

    <h2 className="text-2xl border-b pb-3 font-bold mb-4 tracking-wide">
      Moonlit- <span className="text-[#7b927e] ">Stay Cozy</span>
    </h2>
    <p className="mb-6 text-gray-200">
   A modern, fully responsive hotel booking platform that provides users with a seamless, intuitive experience for discovering and booking hotel rooms built using React and Node.Js. 
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
<a href="https://moolit.netlify.app/">Live demo</a> <span><FaLink /></span>
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
<a href="https://github.com/Suprotik007/Moonlit">Github</a> <span><SiGithub /></span>
</button>
    </div>
  </div>
);

export default MoonLit;

