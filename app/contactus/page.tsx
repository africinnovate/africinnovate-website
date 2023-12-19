'use client'
import React, { useState } from 'react'

export default function ContactUs() {
  const [fullName, setFullName] = useState('Full-Name')
  const [email, setEmail] = useState('Email')
  const [phoneNumber, setPhoneNumber] = useState('Phone Number')
  const [selectCourse, setSelectCourse] = useState('Select course')
  const [yourMessage, setYourMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Handle form submission logic here
    console.log('Form submitted:', {
      fullName,
      email,
      phoneNumber,
      selectCourse,
      yourMessage,
    })
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className="flex w-full items-center justify-center flex-col  mt-[72px]"
        data-aos="fade-up"
      >
        <div className="w-full text-center text-white text-7xl font-semibold font-sans  max-md:text-[2rem] max-md:leading-normal">
          Get in touch with
        </div>
        <div className="flex-shrink-0 w-[701px] h-[4.625rem] flex text-center items-center justify-center text-[4rem] max-md:text-[32px]">
          <div className="inline-flex items-start    text-white text-center  font-bold  font-sans    ">
            Our
          </div>
          <div className="inline-flex flex-col items-start gap-2.5 py-0 ">
            <div className="text-[#ffbe0b] text-center font-sans  font-bold px-3   ">
              {' '}
              team{' '}
            </div>
          </div>
        </div>
      </div>
      <div className="Ellipse1 w-96 h-96 opacity-80 z-10 bg-blue-600 rounded-full blur-[190px] absolute right-[70%] top-[120%]  max-md:hidden" />
      <div
        className="Sans'] w-[645px] text-[#b0b0d0] text-center font-['DM text-lg font-medium leading-6 max-md:w-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        We would love to know your concerns, leave a detailed message and our
        sales team will get in touch with you.
      </div>
      {/* contact-us card  */}
      <form
        className="Frame25624 flex  gap-[26px] items-start pl-[40px] max-md:pl-[25px] justify-center flex-col mt-9 w-[39rem] h-[38rem]  bg-blue-800 rounded-2xl shadow max-md:w-[25rem]"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="700"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="fullName"
          className="left-[77px] top-[48px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="flex-shrink-0 w-[527px] max-md:w-[335px] focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        />

        <label
          htmlFor="email"
          className="left-[77px] top-[117px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-shrink-0 w-[527px] max-md:w-[335px] focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        />

        <label
          htmlFor="phoneNumber"
          className="left-[77px] top-[186px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="flex-shrink-0 w-[527px] max-md:w-[335px] focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        />

        <label
          htmlFor="selectCourse"
          className="left-[77px] top-[255px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>
        <select
          id="selectCourse"
          name="selectCourse"
          value={selectCourse}
          onChange={(e) => setSelectCourse(e.target.value)}
          className="flex-shrink-0 w-[527px]  max-md:w-[335px]  focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        >
          <option className="hover:bg-blue-600 text-red" value="course1">
            Course 1
          </option>
          <option value="course2">Course 2</option>
        </select>

        <label
          htmlFor="yourMessage"
          className="left-[77px] top-[324px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        >
          Your message
        </label>
        <textarea
          id="yourMessage"
          name="yourMessage"
          value={yourMessage}
          onChange={(e) => setYourMessage(e.target.value)}
          className="flex-shrink-0 w-[527px] max-md:w-[335px] h-24 rounded-lg border border-[#b0b0d0] bg-transparent"
        ></textarea>

        <div className="FilledButtonsDarkMode left-[76px] top-[472px]  justify-start items-start inline-flex">
          <button
            type="submit"
            className="Frame11947 px-6 py-3 bg-slate-300 rounded-3xl justify-start items-center gap-2 flex"
          >
            <span className="Button text-blue-950 text-base font-medium font-['DM Sans'] leading-normal">
              Send Message
            </span>
          </button>
        </div>
      </form>
      <div className="Ellipse1 w-96 h-96 opacity-80 z-10 bg-blue-600 rounded-full blur-[190px] absolute left-[60%] bottom-[5%]  max-md:hidden" />
    </div>
  )
}
