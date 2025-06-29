import React from 'react';
import { SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';

const Backend = () => {
    return (
        <div>
             <div className="rounded-lg  p-6  items-center text-center border-1 border-green-600 shadow-2xl shadow-gray-800 ">
        <h3 className="text-xl border-b-1 font-bold pb-2 mb-4">Backend</h3>
        <div className="grid grid-cols- space-y-3">
          <div className="flex items-center space-x-3">
            <SiNodedotjs size={30} className="text-green-600" />
            <span>Node.js</span>
          </div>
          <div className="flex items-center space-x-3">
            <SiExpress size={30} className="text-gray-400" />
            <span>Express</span>
          </div>
          <div className="flex items-center space-x-3">
            <SiMongodb size={30} className="text-green-800" />
            <span>MongoDB</span>
          </div>
          
        </div>
      </div>
        </div>
    );
};

export default Backend;