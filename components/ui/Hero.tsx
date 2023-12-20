
import { useState, useEffect } from 'react'
import { HERO_TEXTS } from '@/lib/utils'

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
      <div className="">
        <div className="flex  items-center justify-center flex-col  ">
          <div
            className="flex w-full items-center justify-center flex-col "
            data-aos="fade-up"
          >
            <div className="w-full text-center text-white text-[80px] font-semibold font-sans  max-md:text-[2rem] max-md:leading-normal">
             We are a community that thrives on innovation,
            </div>
            <div className="flex-shrink-0 w-[701px] h-[4.625rem] flex text-center items-center justify-center text-[4rem] max-md:text-[32px]">
              <div className="inline-flex items-start    text-white text-center  font-bold  font-sans    ">
                bringing together
              </div>
              <div className="inline-flex flex-col items-start gap-2.5 py-0 ">
                <div className="text-[#ffbe0b] text-center font-sans  font-bold px-3   ">
                  {' '}
                  {currentText}
                </div>
              </div>
            </div>
          </div>
          <div
            className="font-sans w-[645px]  font-revert text-[#b0b0d0] text-center mb-3  mt-5  text-lg font-medium max-md:w-[344px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            Join Africinnovate Technologies on a journey to build a generation
            of innovators. Our commitment to excellence and social impact sets
            the stage for a brighter technological future in Africa.
          </div>
          <div
            className="inline-flex items-start my-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="700"
            id="animationbutton"
          >
            <button className="flex items-center gap-2 py-3 px-6  font-sans rounded-3xl bg-[#cccce0] Sans'] text-[#006] font-['DM font-medium leading-6  ">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex items-start justify-center mt-[55px]">
          <div className="inline-flex flex-col items-start ml-4">
            <div className="text-white font-sans text-[2.5rem] font-bold leading-[48px]">
              100+
            </div>
            <div className="font-sans text-[#b0b0d0] font-__Raleway_bdd8fd font-bold leading-6">
              Students
              <br /> Trained
            </div>
          </div>
          <div className="inline-flex flex-col items-start ml-8">
            <div className="text-white font-__Raleway_bdd8fd text-[2.5rem] font-bold leading-[48px]">
              23
            </div>
            <div className="font-sans text-[#b0b0d0] font-__Raleway_bdd8fd font-bold leading-6">
              Projects
              <br /> Delivered
            </div>
          </div>

          <div className="inline-flex flex-col items-start ml-8">
            <div className="text-white font-__Raleway_bdd8fd text-[2.5rem] font-bold leading-[48px]">
              12
            </div>
            <div className="font-__Raleway_bdd8fd text-[#b0b0d0] font-['DM font-bold leading-6">
              Hackathon
              <br /> Won
            </div>
          </div>
          <div className="inline-flex flex-col items-start ml-8 max-md:hidden">
            <div className="text-white font-__Raleway_bdd8fd text-[2.5rem] font-bold leading-[48px]">
              308
            </div>
            <div className="font-__Raleway_bdd8fd text-[#b0b0d0] font-bold leading-6">
              Community
              <br /> Members
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
