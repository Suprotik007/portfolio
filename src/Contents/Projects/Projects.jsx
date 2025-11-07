import React from 'react';
import GreenHub from './Greenhub';
import MoonLit from './Moonlit';
import Eduventure from './Eduventure';
import RezoomAi from './RezoomAi';

const Projects = () => {
    return (
        <div id='Projects' className='w-10/12 mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-8'>Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <RezoomAi></RezoomAi>
                <Eduventure></Eduventure>
                {/* <MoonLit></MoonLit> */}
                <GreenHub></GreenHub>
                
            </div>
        </div>
    );
};

export default Projects;