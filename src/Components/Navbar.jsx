import React from 'react';
import { NavLink } from 'react-router';
import TextPressure from '../../ReactBits/TextPressure/TextPressure';

  

const Navbar = () => {
    const links=(
       <div className='flex space-x-1.5 md:space-x-8 lg:space-x-20  font-semibold lg:text-xl justify-evenly'>

      <NavLink to='/intro'>Intro</NavLink>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Skills'>Skills</NavLink>
      <NavLink to='/Projects'>Projects</NavLink>

       </div>
    )
    return (
       <div className="navbar w-11/12 bg-[#151b14]  mx-auto sticky top-0 z-2 ">
  <div className="navbar-start ">
    
    <a className=" bg-[#151b14]  text-xl"><span><TextPressure 
    text="<..... Suprotik ...../>"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}></TextPressure> </span></a>
  </div>
  <div className="navbar-end justify-around hidden  md:flex">
    <ul className="menu menu-horizontal ">

      {links}
  
    </ul>
  </div>
 {/* small device */}
  <div className="dropdown navbar-end md:hidden">
       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div> 
     
       <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-50 w-52 p-2 shadow">
        
         <NavLink to='/intro'>Intro</NavLink>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Skills'>Skills</NavLink>
      <NavLink to='/Projects'>Projects</NavLink>
      </ul> 
     
    </div>
    
</div>
    );
};

export default Navbar;