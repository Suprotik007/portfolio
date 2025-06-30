import React from 'react';
import { NavLink } from 'react-router';
import TextPressure from '../../ReactBits/TextPressure/TextPressure';
import { Link } from 'react-scroll';



  

const Navbar = () => {
 const links = (
  <div className="flex space-x-1.5 md:space-x-6 lg:space-x-15 font-semibold lg:text-lg justify-evenly ">
    <Link
      to="Intro"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80} 
      className="cursor-pointer"
      activeClass="border-b-2"
    >
      Intro
    </Link>

    <Link
      to="About"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer"
      activeClass="border-b-2"
    >
      About
    </Link>

    <Link
      to="Skills"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer"
      activeClass="border-b-2"
    >
      Skills
    </Link>

    <Link
      to="Projects"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer"
      activeClass="border-b-2"
    >
      Projects
    </Link>
  </div>
);


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
    
    <Link to='Hire'
   smooth={true}
      duration={500}
      spy={true}
      offset={-80} >
    <button
    smooth={true}
      duration={500}
      spy={true}
      offset={-80} 
       className="
    btn-sm md:btn-sm 
    relative
   md:px-3 lg:px-5 lg:py-1
    rounded-xl
    bg-[#6f8b76]
    text-gray-900
     
    border-2 border-[#7b927e]
    shadow-[5px_5px_0_0_#4f6653]
    transition-transform duration-500
    hover:translate-x-2 hover:translate-y-3
    active:translate-x-0 active:translate-y-0
    flex flex-row items-center gap-2 justify-center
    ">
    <span className='text-center'><a href="">Hire </a></span>
    
    </button></Link>
  </div>


 {/* small device */}
  <div className="dropdown navbar-end md:hidden">

      <Link 
   to='Hire'
   smooth={true}
      duration={500}
      spy={true}
      offset={-80} >
     <button className="
    btn-sm md:btn-sm 
    relative
   px-3 py-1
    rounded-xl
    bg-[#6f8b76]
    text-gray-900
     
    border-2 border-[#7b927e]
    shadow-[5px_5px_0_0_#4f6653]
    transition-transform duration-500
    hover:translate-x-2 hover:translate-y-3
    active:translate-x-0 active:translate-y-0
    flex flex-row items-center gap-2 justify-center
    ">
    <span className='text-center'> Hire</span>
    
    </button>
   </Link>
       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div> 
     
       <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-65 w-30 gap-3 p-5 shadow">
        
        <Link
      to="Intro"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80} 
      className="cursor-pointer pb-1 text-center w-10/12"
      activeClass="border-b-2"
    >
      Intro
    </Link>

    <Link
      to="About"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer pb-1 text-center w-10/12"
      activeClass="border-b-2"
    >
      About
    </Link>

    <Link
      to="Skills"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer pb-1 text-center w-10/12"
      activeClass="border-b-2"
    >
      Skills
    </Link>

    <Link
      to="Projects"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer pb-1 text-center w-10/12"
      activeClass="border-b-2"
    >
      Projects
    </Link>


  {/* <Link
      to="Hire"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="cursor-pointer pb-1 text-center w-10/12"
      activeClass="border-b-2"
    >
      Send Proposal
    </Link> */}
    
      </ul> 

 
    </div>
    
</div>
    );
};

export default Navbar;