import React from 'react';
import TextPressure from '../../ReactBits/TextPressure/TextPressure';


const Footer = () => {
    return (
        <div>
             <div className=" w-11/12 mx-auto pb-8  pt-5 ">
    
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
        </div>
    );
};

export default Footer;