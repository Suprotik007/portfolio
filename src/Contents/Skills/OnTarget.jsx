import React from "react";
import {
  SiTypescript,
  SiNextdotjs,
//   SiAmazonaws,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si";
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init();


const OnTarget = () => {
  return (
   <div data-aos='zoom-out-up' className=" transition-all duration-300 ease-in-out fle justify-center items-center rounded-lg hover:scale-105">
 <div className="rounded-lg  p-6  items-center text-center border-1 border-green-600 shadow-2xl shadow-green-950">
      <h3 className="text-xl font-bold mb-4 border-b-1 pb-2 ">Looking forward to</h3>
      <div className="grid grid-cols-2 space-y-3">
          <div className="flex items-center space-x-3 ">
          <SiNextdotjs size={30} className="text-gray-400" />
          <span>Next.js</span>
        </div>
        <div className="flex items-center space-x-3 ">
          <SiTypescript size={30} className="text-blue-600" />
          <span>TypeScript</span>
        </div>
       
        <div className="flex items-center space-x-3 ">
          <SiDocker size={30} className="text-blue-400" />
          <span>Docker</span>
        </div>
       
        <div className="flex items-center space-x-3 ">
          <SiAmazonwebservices size={30} className="text-orange-500" />
          <span>AWS</span>
        </div>
        
      </div>
    </div>

   </div>
  );
};

export default OnTarget;
