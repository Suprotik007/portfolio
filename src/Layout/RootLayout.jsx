import React from 'react';
import Navbar from '../Components/Navbar';
import Intro from '../Contents/Intro';
import About from '../Contents/About';

const RootLayout = () => {
    return (
        <div className='bg-[#151b14] space-y-20'>
            <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
        </div>
    );
};
export default RootLayout;