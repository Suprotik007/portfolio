import React from 'react';
import {
  SiFigma,
  SiDaisyui,
//   SiAntdesign,
//   SiMaterialui,
  SiFramer,
} from "react-icons/si";
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init();
 
import { FaReact } from "react-icons/fa"

const Design = () => {
    return (
        <div data-aos="zoom-in-left" className=' transition-all duration-300 ease-in-out  justify-center items-center rounded-lg hover:scale-105'>
 <div className="rounded-lg  p-6  items-center text-center border-1 border-green-600 shadow-2xl shadow-gray-800">
    <h3 className="text-xl border-b-1 font-bold pb-2 mb-4">Design & UI </h3>
    <div className="grid grid-cols-2 space-y-3 w-full  max-w-xs">
      <div className="flex items-center space-x-3">
        <SiFigma size={30} className="text-pink-600" />
        <span>Figma</span>
      </div>
     
      
       <div className="flex items-center space-x-3">
        <FaReact size={30} className="text-cyan-500" />
        <span>React Bits</span>
      </div>
       <div className="flex items-center space-x-3">
        <SiFramer size={35} className="text-pink-500" />
        <span>Framer Motion</span>
      </div>
      
     <div className="flex items-center space-x-3">
        <SiDaisyui size={30} className="text-purple-600" />
        <span>DaisyUI</span>
      </div>
     
    </div>
  </div>

        </div>
    );
};

export default Design;