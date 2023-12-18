// components/Navbar.js
// import Head from 'next/head';
'use client'
import Link from 'next/link';
import Head from 'next/head';
import { useState,useEffect } from 'react';

const Headercomponent= () => {
  const [developerText, setDeveloperText] = useState('Developers');
  const textOptions = ['Developers', 'Designers', 'Dreamers', 'Doers'];

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate to the next text in the array
      const currentIndex = textOptions.indexOf(developerText);
      const nextIndex = (currentIndex + 1) % textOptions.length;
      setDeveloperText(textOptions[nextIndex]);
    }, 4000); // Change text every 2 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [developerText]);
  return (
    <div className='mt-[100px] max-md:mt-[70px]'>
<div className="" >
<div className='flex  items-center justify-center flex-col  ' >
<div className='flex w-full items-center justify-center flex-col '  data-aos="fade-up" >
  <div className="w-full text-center text-white text-[80px] font-semibold font-sans  max-md:text-[2rem] max-md:leading-normal">We are a community of </div>
  <div className="flex-shrink-0 w-[701px] h-[4.625rem] flex text-center items-center justify-center text-[4rem] max-md:text-[32px]">
    <div className="inline-flex items-start    text-white text-center  font-bold  font-sans    ">
      Great
    </div>
    <div className="inline-flex flex-col items-start gap-2.5 py-0 ">
      <div className="text-[#ffbe0b] text-center font-sans  font-bold px-3   ">          {developerText}</div>
      </div>
    </div>
  </div>
    <div className="font-sans w-[645px]  font-revert text-[#b0b0d0] text-center mb-3  mt-5  text-lg font-medium max-md:w-[344px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">This is a place holder paragraph that will fit in this space. A paragraph briefly explaining the message on the heading one. Two or three lines is fine.</div>
  <div className="inline-flex items-start my-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700" id='animationbutton'>
    <div className="flex items-center gap-2 py-3 px-6  font-sans rounded-3xl bg-[#cccce0] Sans'] text-[#006] font-['DM font-medium leading-6 ">
      Primary CTA Button
    </div>
  </div>
</div>
 <div className='flex items-start justify-center mt-[55px]'> 
  <div className="inline-flex flex-col items-start ml-4" > 
    <div className="text-white font-sans text-[2.5rem] font-bold leading-[48px]">100+</div>
    <div className="font-sans text-[#b0b0d0] font-__Raleway_bdd8fd font-bold leading-6">Students 
    <br/> Trained</div>
  </div>
  <div className="inline-flex flex-col items-start ml-8" >
    <div className="text-white font-__Raleway_bdd8fd text-[2.5rem] font-bold leading-[48px]">100+</div>
    <div className="font-sans text-[#b0b0d0] font-__Raleway_bdd8fd font-bold leading-6">Students 
    <br/>  Trained</div>
  </div>
 
  <div className="inline-flex flex-col items-start ml-8">
    <div className="text-white font-__Raleway_bdd8fd text-[2.5rem] font-bold leading-[48px]">100+</div>
    <div className="font-__Raleway_bdd8fd text-[#b0b0d0] font-['DM font-bold leading-6">Students 
     <br/> Trained</div>
  </div>
  <div className="inline-flex flex-col items-start ml-8 max-md:hidden">
    <div className="text-white font-__Raleway_bdd8fd text-[2.5rem] font-bold leading-[48px]">100+</div>
    <div className="font-__Raleway_bdd8fd text-[#b0b0d0] font-bold leading-6">Students 
    <br/>  Trained</div>
  </div>
  </div>
</div>



    </div>
     
    );
  

};

export default Headercomponent;
