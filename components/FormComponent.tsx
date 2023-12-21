'use client'
import React, { useState } from 'react'
import {  validateForm } from '@/lib/utils/helper'
interface FormComponentProps {
  onClose: () => void;
}
 const FormComponent: React.FC<FormComponentProps> = ({ onClose }) => {
  
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState <string>('')
  const [phoneNumber, setPhoneNumber] = useState <string>('')
  const [selectCourse, setSelectCourse] = useState<string>('')
  const [yourMessage, setYourMessage] = useState<string>('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const isValid = validateForm(fullName, email, phoneNumber, selectCourse, yourMessage);

    if (!isValid) {
      alert('Please fill in all fields correctly.');
      return;
    }

// handling sending messages
    await fetch("/api/ContactUsMailer", {
      method: "POST",
      body: JSON.stringify({ email,phoneNumber,fullName,selectCourse,yourMessage }),
    })
    // Handle form submission logic here
    console.log('Form submitted:', {
      fullName,
      email,
      phoneNumber,
      selectCourse,
      yourMessage,
    })
    onClose()
  }

  return (
    <div className="flex items-center justify-center flex-col">
     
      {/* contact-us card  */}
      <form
        className="Frame25624 flex  gap-[26px] items-start pl-[40px] max-md:pl-[25px] justify-center flex-col mt-9 w-[39rem] h-[38rem]  bg-blue-800 rounded-2xl shadow max-md:w-[20rem]"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="700"
      >
        
<button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown checkbox <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

{/* <!-- Dropdown menu --> */}
<div id="dropdownBgHover" className="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label htmlFor="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">

            <input checked id="checkbox-item-5" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="checkbox-item-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
          </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label htmlFor="checkbox-item-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
        </div>
      </li>
    </ul>
</div>

        <label
          htmlFor="fullName"
          className="left-[77px] top-[48px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder='fullName'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="flex-shrink-0 w-[527px] max-md:w-[250px] focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        />

        <label
          htmlFor="email"
          className="left-[77px] top-[117px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-shrink-0 w-[527px] max-md:w-[250px] bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        />

        <label
          htmlFor="phoneNumber"
          className="left-[77px] top-[186px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder='phoneNumber'
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="flex-shrink-0 w-[527px] max-md:w-[250px] focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        />

        <label
          htmlFor="selectCourse"
          className="left-[77px] top-[255px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>
      
        <select
          id="selectCourse"
          name="selectCourse"
          placeholder='selectCourse'
          value={selectCourse}
          onChange={(e) => setSelectCourse(e.target.value)}
          className="flex-shrink-0 w-[527px]  max-md:w-[250px]  focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
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
          placeholder='yourMessage'
          value={yourMessage}
          onChange={(e) => setYourMessage(e.target.value)}
          className="flex-shrink-0 text-slate-400  w-[527px] max-md:w-[250px] h-24 rounded-lg border border-[#b0b0d0] bg-transparent"
        ></textarea>

        <div className="FilledButtonsDarkMode left-[76px] top-[472px]  justify-start items-start inline-flex">
          <button
            type="submit"
            className="Frame11947 px-6 py-3 bg-slate-300 rounded-3xl justify-start items-center gap-2 flex"
          >
            <span onClick={handleSubmit} className="Button text-blue-950 text-base font-medium font-['DM Sans'] leading-normal">
              Send Message
            </span>
          </button>
        </div>
      </form>
      <div className="Ellipse1 w-96 h-96 opacity-80 z-10 bg-blue-600 rounded-full blur-[190px] absolute left-[60%] bottom-[5%]  max-md:hidden" />
    </div>
  )
}

export default FormComponent;