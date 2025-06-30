import React from 'react';
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';

import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init();

const Frontend = () => {
    return (
     <div data-aos="zoom-out-down"  className='  transition-all duration-300 ease-in-out fle justify-center items-center rounded-lg hover:scale-105'>
  <div className=" rounded-lg  p-6  items-center text-center border-1 border-green-600 shadow-2xl shadow-green-950 ">
        <h3 className="text-xl font-bold mb-4 border-b-1 pb-2 ">Frontend</h3>
        <div className="grid grid-cols-2 space-y-3 ">
          <div className="flex items-center space-x-3">
            <SiReact size={30} className="text-blue-500" />
            <span>React</span>
          </div>
          <div className="flex items-center space-x-3">
            <SiJavascript size={30} className="text-yellow-400" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center space-x-3">
            <SiTailwindcss size={30} className="text-teal-400" />
            <span>Tailwind </span>
          </div>
          <div className="flex items-center space-x-3">
            <SiCss3 size={30} className="text-blue-600" />
            <span>CSS3</span>
          </div>
          <div className="flex items-center space-x-3">
            <SiHtml5 size={30} className="text-orange-600" />
            <span>HTML5</span>
          </div>
          
        </div>
      </div>

     </div>
    );
};

export default Frontend;