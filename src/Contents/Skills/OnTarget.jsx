import React from "react";
import {
  SiDocker,
  SiAmazonwebservices,
  SiPostgresql,
  SiNestjs,
  SiGo,
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
          <SiGo size={30} className="text-orange-500" />
          <span>GO</span>
        </div>
        
          <div className="flex items-center space-x-3 ">
          <SiNestjs size={30} className="text-gray-400" />
          <span>Nest.js</span>
        </div>
        <div className="flex items-center space-x-3 ">
          <SiPostgresql size={30} className="text-blue-600" />
          <span>Postgresql</span>
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
