import React from 'react';
import { SiFirebase, SiJsonwebtokens } from 'react-icons/si';

const Authentication = () => {
    return (
        <div className=''>
            <div className="rounded-lg  p-6  items-center text-center border-1 border-green-600 shadow-2xl shadow-green-950">
        <h3 className="text-xl border-b-1 font-bold mb-4 pb-2 ">Authentication</h3>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <SiFirebase size={30} className="text-yellow-500" />
            <span>Firebase Auth</span>
          </div>
          <div className="flex items-center space-x-3">
            <SiJsonwebtokens size={30} className="text-purple-600" />
            <span>JWT</span>
          </div>
        </div>
      </div>

        </div>
    );
};

export default Authentication;