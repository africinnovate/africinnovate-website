'use client'

import { FC, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { validateForm } from '@/lib/utils/helper'
import { useModalContext } from '@/contexts/ModalProvider'
import { IoClose } from 'react-icons/io5'

const FormModal: FC = () => {
  const { showModal, toggleModal, course } = useModalContext()

  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [subject, setSubject] = useState<string>('Training')
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async () => {
    const isValid = validateForm(phoneNumber, message)

    if (!isValid) {
      toast.error('Enter the required fields')
      return
    }

    setLoading(true)

    try {
      await fetch('/api/sendMail/', {
        method: 'POST',
        body: JSON.stringify({
          subject: `${subject}: from <${phoneNumber}> ${email}`,
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
      className={`fixed ${showModal ? '' : 'hidden'} inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center`}
      id="my-modal"
    >
      <div className="relative bg-blue-800 rounded-2xl shadow w-[39rem] max-md:w-[20rem] p-8">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={toggleModal}
        >
          <IoClose size={24} />
        </button>
        <form
          className="flex flex-col gap-6"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="700"
        >
          {course && <h3 className="font-bold text-white">You are enrolling for {course}</h3>}
          <label htmlFor="fullName" className="text-slate-400 text-base font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 bg-transparent border-b border-gray-500 text-white focus:outline-none"
          />

          <label htmlFor="email" className="text-slate-400 text-base font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-transparent border-b border-gray-500 text-white focus:outline-none"
          />

          <label htmlFor="phoneNumber" className="text-slate-400 text-base font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 bg-transparent border-b border-gray-500 text-white focus:outline-none"
          />

          <label htmlFor="subject" className="text-slate-400 text-base font-medium">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            placeholder="Enter subject"
            value={course ? 'Training' : subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={course !== undefined}
            className="w-full p-2 bg-transparent border-b border-gray-500 text-white focus:outline-none"
          >
            <option value="Training">Training</option>
            <option value="Project">Project</option>
            <option value="Event">Event</option>
            <option value="Partnership">Partnership</option>
          </select>

          <label htmlFor="message" className="text-slate-400 text-base font-medium">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 h-24 bg-transparent border border-gray-500 text-white focus:outline-none rounded-lg"
          ></textarea>

          <div className="flex justify-start items-center">
            <button
              type="button"
              className="px-6 py-3 bg-slate-300 rounded-3xl flex items-center gap-2"
              onClick={handleSubmit}
            >
              <span className="text-blue-950 text-base font-medium">
                {loading ? 'Sending ...' : 'Send Message'}
              </span>
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default FormModal
