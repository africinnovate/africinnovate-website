'use client'
import { FC, useState } from 'react'
import { validateForm } from '@/lib/utils/helper'
import { useModalContext } from '@/contexts/ModalProvider'

// interface FormModalProps {
//   onClose: () => void
// }

const FormModal: FC = () => {

  const { showModal, toggleModal } = useModalContext()

  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [selectCourse, setSelectCourse] = useState<string>('')
  const [Other, setOther] = useState<string>('')
  const [yourMessage, setYourMessage] = useState<string>('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const isValid = validateForm(
      fullName,
      email,
      phoneNumber,
      selectCourse,
      yourMessage,
    )

    if (!isValid) {
      alert('Please fill in all fields correctly.')
      return
    }

    // handling sending messages
    await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({
        email,
        phoneNumber,
        fullName,
        selectCourse,
        Other,
        yourMessage,
      }),
    })
    // Handle form submission logic here
    console.log('Form submitted:', {
      fullName,
      email,
      phoneNumber,
      selectCourse,
      yourMessage,
    })
    toggleModal()
  }

  return (
    <div className={`fixed ${showModal ? '' : 'hidden'} inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal`}>
   
      <form
        className="Frame25624 flex  gap-[26px] items-start pl-[40px] max-md:pl-[25px] justify-center flex-col mt-9 w-[39rem] h-[38rem]  bg-blue-800 rounded-2xl shadow max-md:w-[20rem]"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="700"
      >
        <label
          htmlFor="fullName"
          className="left-[77px] top-[48px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="fullName"
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
          placeholder="email"
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
          placeholder="phoneNumber"
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
          placeholder="selectCourse"
          value={selectCourse}
          onChange={(e) => setSelectCourse(e.target.value)}
          className="flex-shrink-0 w-[527px]  max-md:w-[250px]  focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        >
          <option className="hover:bg-blue-600 text-red" value="course1">
            Course 1
          </option>
          <option value="course2">Course 2</option>
        </select>
        {/* select others */}
        <label
          htmlFor="selectOther"
          className="left-[77px] top-[255px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        ></label>

        <select
          id="Other"
          name="Other"
          placeholder="Others"
          value={Other}
          onChange={(e) => setOther(e.target.value)}
          className="flex-shrink-0 w-[527px]  max-md:w-[250px]  focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        >
          <option className="hover:bg-blue-600 text-red" value="course1">
            Internship
          </option>
          <option className="hover:bg-blue-600 text-red" value="course2">
            Enquiries
          </option>
          <option value="course3">Project Creation</option>
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
          placeholder="yourMessage"
          value={yourMessage}
          onChange={(e) => setYourMessage(e.target.value)}
          className="flex-shrink-0 text-slate-400  w-[527px] max-md:w-[250px] h-24 rounded-lg border border-[#b0b0d0] bg-transparent"
        ></textarea>

        <div className="FilledButtonsDarkMode left-[76px] top-[472px]   mb-5 justify-start items-start inline-flex">
          <button
            type="submit"
            className="Frame11947 px-6 py-3 bg-slate-300 rounded-3xl justify-start items-center gap-2 flex"
          >
            <span
              onClick={handleSubmit}
              className="Button text-blue-950 text-base font-medium font-['DM Sans'] leading-normal"
            >
              Send Message
            </span>
          </button>
        </div>
      </form>
    
    </div>
  )
}

export default FormModal
