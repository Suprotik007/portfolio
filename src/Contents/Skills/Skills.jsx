import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import Authentication from './Authentication';
import Design from './Design';
import OnTarget from './OnTarget';
import Languages from './Languages';


const Skills = () => {
    return (
        <div id='Skills' className='w-10/12 mx-auto '>
            <h1 className='text-3xl font-bold text-center mb-8 '>I Build With</h1>

<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
   
    <Frontend></Frontend>
    <Backend></Backend>
    <Authentication></Authentication>
    <Design></Design>
    <OnTarget></OnTarget>
    <Languages></Languages>
  
    

</div>
        </div>
    );
};

export default Skills;