'use client'
import { useState, useEffect } from 'react'
import { HERO_TEXTS } from '@/lib/utils'
import Button from './Button'
import CountUpAnimation from '@/components/CountUpAnimation'


const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % HERO_TEXTS.length)
    }, 1500)

    return () => {
      clearInterval(intervalId)
    }
  }, [HERO_TEXTS.length])

  const currentText = HERO_TEXTS[currentTextIndex]

  return (
    <div className="mt-[100px] max-md:mt-[70px]">
      <div className="flex  items-center justify-center flex-col">
        <div
          className="flex w-full items-center justify-center flex-col "
          data-aos="fade-up"
        >
          <div className="w-[80%] text-center text-white text-[80px] font-semibold font-sans  max-md:text-[2rem] max-md:leading-normal">
            Innovation fueled by the community of <span className="text-[#ffbe0b]">{currentText}</span>
          </div>
        </div>
        <div
          className="font-sans w-[645px]  font-revert text-[#b0b0d0] text-center mb-3  mt-5  text-lg font-medium max-md:w-[344px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Join Africinnovate Technologies on a journey to build a generation of
          innovators. Our commitment to excellence and social impact sets the
          stage for a brighter technological future in Africa.
        </div>
        <div
          className="inline-flex items-start my-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="700"
          id="animationbutton"
        >
          <Button> Contact Us </Button>
        </div>
      </div>
      
      <div className="flex  gap-[20px] flex-row max-md:flex-col  items-center justify-center mt-[70px] " data-aos='fade-up'>
      <div className="flex   ">
        <div className=" flex items-start gap-10 ">
          <div className="text-white font-sans text-[3rem] font-bold ">
          <CountUpAnimation end={100} />
          <div className="font-sans text-[#b0b0d0] font-__Raleway_bdd8fd font-bold  text-[1.5rem]">
            Students <br /> Trained
          </div>
          </div>
         
        <div className="flex-col items-start ">
          <div className="text-white font-__Raleway_bdd8fd text-[3rem]  font-bold ">
          <CountUpAnimation end={23} />
          <div className="font-sans text-[#b0b0d0] font-__Raleway_bdd8fd font-bold text-[1.5rem]">
            Projects <br /> Delivered
          </div>
          </div>
        
        </div>
        </div>
        </div>
<div className='flex gap-10 max-md:gap-4 max-md:ml-[23px]'>
        <div className=" flex-col items-start  ">
          <div className="text-white font-__Raleway_bdd8fd text-[3rem]  font-bold ">
          <CountUpAnimation end={12} />
          <div className="font-__Raleway_bdd8fd text-[#b0b0d0] font-['DM font-bold text-[1.5rem]">
            Hackathon <br /> Won
          </div>
          </div>
       
        </div>
        <div className="  flex flex-col items-start  ">
          <div className="text-white font-__Raleway_bdd8fd font-bold  text-[3rem] ">
          <CountUpAnimation end={308} />
          <div className="font-__Raleway_bdd8fd text-[#b0b0d0] font-bold text-[1.5rem]">
            Community <br /> Members
          </div>
          </div>
        
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
