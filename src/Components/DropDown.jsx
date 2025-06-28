import React from 'react';
import { NavLink, Outlet } from 'react-router';


const DropDown = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className=" ">
                    <div className="dropdown ">
                        
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
                     
                    </div>
                  

                </div>
                

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    
                    <li>
                        <NavLink to='/intro'>Intro</NavLink>
                    </li>
                    <li>
                       <NavLink to='/About'>About</NavLink>
                    </li>
                    <li>
                              <NavLink to='/Skills'>Skills</NavLink>
                    </li>
                    
                    <li>
                   <NavLink to='/Projects'>Projects</NavLink>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default DropDown;