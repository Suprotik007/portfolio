import React from "react";
import {
  SiTypescript,
  SiNextdotjs,
//   SiAmazonaws,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si";



const OnTarget = () => {
  return (
    <div className="rounded-lg shadow-lg p-6  items-center text-center border-1">
      <h3 className="text-xl font-bold mb-4 border-b-1 pb-2 ">Upcoming</h3>
      <div className="grid grid-cols-2 space-y-3">
        <div className="flex items-center space-x-3 justify-center">
          <SiTypescript size={30} className="text-blue-600" />
          <span>TypeScript</span>
        </div>
       
        <div className="flex items-center space-x-3 justify-center">
          <SiDocker size={30} className="text-blue-400" />
          <span>Docker</span>
        </div>
         <div className="flex items-center space-x-3 justify-center">
          <SiNextdotjs size={30} className="text-gray-400" />
          <span>Next.js</span>
        </div>
        <div className="flex items-center space-x-3 justify-center">
          <SiAmazonwebservices size={30} className="text-orange-500" />
          <span>AWS</span>
        </div>
        
      </div>
    </div>
  );
};

export default OnTarget;
