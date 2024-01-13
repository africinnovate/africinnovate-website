'use client'

import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { validateForm } from '@/lib/utils/helper'
import { useModalContext } from '@/contexts/ModalProvider'

const FormModal: FC = () => {
  const { showModal, toggleModal } = useModalContext()

  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const isValid = validateForm(phoneNumber, message)

    if (!isValid) {
      toast.error('Enter the required fields')
      return
    }
    setLoading(true)

    try {
      await fetch('http://localhost:3000/api/sendMail/', {
        method: 'POST',
        body: JSON.stringify({
          subject: `${subject}: from ${email}`,
          html: `
            <p>Name: ${fullName} </p>
            <p>Phone: ${phoneNumber} </p>
            <p>${message}</p>`,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      toast.success('Successfully sent!')
      setLoading(false)
      toggleModal()
    } catch (error) {
      toast.error('Could not send')
      setLoading(false)
    }
  }

  return (
    <div
      className={`fixed ${
        showModal ? '' : 'hidden'
      } inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal`}
    >
      <form
        className="mx-auto flex  gap-[26px] items-start pl-[40px] max-md:pl-[25px] justify-center flex-col mt-9 w-[39rem] h-[38rem]  bg-blue-800 rounded-2xl shadow max-md:w-[20rem]"
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
          id="subject"
          name="subject"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="flex-shrink-0 w-[527px]  max-md:w-[250px]  focus:bg-transparent focus:text-[#b0b0d0]  focus:outline-none border-b-[#b0b0d0] bg-transparent border-solid border border-t-transparent  border-l-transparent border-r-transparent text-[#b0b0d0]"
        >
          <option value="Training">Training</option>
          <option value="Project">Project</option>
          <option value="Event">Event</option>
          <option value="Partnership">Partnership</option>
        </select>

        <label
          htmlFor="message"
          className="left-[77px] top-[324px]  text-slate-400 text-base font-medium font-['DM Sans'] leading-normal"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-shrink-0 text-slate-400  w-[527px] max-md:w-[250px] h-24 rounded-lg border border-[#b0b0d0] bg-transparent"
        ></textarea>

        <div className="FilledButtonsDarkMode left-[76px] top-[472px]   mb-5 justify-start items-start inline-flex">
          <button
            type="button"
            className="Frame11947 px-6 py-3 bg-slate-300 rounded-3xl justify-start items-center gap-2 flex"
          >
            <span
              onClick={handleSubmit}
              className="Button text-blue-950 text-base font-medium font-['DM Sans'] leading-normal"
            >
              {loading ? 'Sending ...' : 'Send Message'}
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormModal
