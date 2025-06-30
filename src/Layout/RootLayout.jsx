import React from 'react';
import Navbar from '../Components/Navbar';
import Intro from '../Contents/Intro';
import About from '../Contents/About';
import Skills from '../Contents/Skills/Skills';
import Projects from '../Contents/Projects/Projects';
import Email from '../Contents/Email/Email';
import Footer from '../Components/Footer';


const RootLayout = () => {
    return (
        <div className='bg-[#151b14] space-y-20'>
           
             <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Email></Email>
          <Footer></Footer>
        </div>
    );
};
export default RootLayout;