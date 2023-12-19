// components/Navbar.js
'use client'
import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const test = () => {
    alert('hello')
  }
  return (
    <nav className="bg-[#000024] flex justify-around  md:shrink-0  max-md:contents">
      <div className="w-[100vw] h-20 border-b-[0.5px] border-b-[#9a8888] bg-[#000024] flex items-center justify-around">
        <div className="flex ">
          <svg
            width={46}
            height={24}
            viewBox="0 0 46 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.79985 19.247L20.5367 0.512096L21.6905 5.26503L2.9536 23.9999L1.79985 19.247Z"
              fill="white"
            />
            <path
              d="M12.7591 19.247L31.496 0.512096L32.6497 5.26503L13.9128 23.9999L12.7591 19.247Z"
              fill="#FFA900"
            />
            <path
              d="M23.7183 19.247L42.4552 0.512096L43.609 5.26503L24.8721 23.9999L23.7183 19.247Z"
              fill="white"
            />
          </svg>
          <div className="text-white font-sans text-[1.625rem] font-medium leading-[1.4375rem]">
            <Link href="/"> Africinnovate </Link>
          </div>
        </div>

        <div className="inline-flex items-start gap-10  max-md:hidden">
          <div className=" font-sans text-white font-['DM text-lg font-medium leading-6">
            <Link href="/trainning">Training</Link>
          </div>
          <div className=" font-sans text-white font-['DM text-lg font-medium leading-6">
            <Link href="/about">About us</Link>
          </div>
          <div className=" font-sans text-white font-['DM text-lg font-medium leading-6">
            <Link href="/contactus">Contact Us</Link>
          </div>
          <div className=" font-sans text-white font-['DM text-lg font-medium leading-6">
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="inline-flex items-start mr-6  max-md:hidden">
        
          <Button onClick={test} children={'Call us'} />
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <svg
                width={30}
                height={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG for 'X' icon */}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.70711 5.70711C5.31658 6.09763 4.68342 6.09763 4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289C6.09763 4.68342 6.09763 5.31658 5.70711 5.70711ZM15 14.9999L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L15 14.9999ZM4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929C4.68342 13.9024 5.31658 13.9024 5.70711 14.2929L16.4142 24L15 25.4142L4.29289 15.7071ZM16.4142 24L27.1213 14.2929C27.5118 13.9024 28.145 13.9024 28.5355 14.2929C28.926 14.6834 28.926 15.3166 28.5355 15.7071L17.8284 25.4142L16.4142 24Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width={30}
                height={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG for hamburger icon */}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6C4 5.44772 4.44772 5 5 5H25C25.5523 5 26 5.44772 26 6C26 6.55228 25.5523 7 25 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H25C25.5523 11 26 11.4477 26 12C26 12.5523 25.5523 13 25 13H5C4.44772 13 4 12.5523 4 12ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H25C25.5523 19 26 18.5523 26 18C26 17.4477 25.5523 17 25 17H5Z"
                  fill="white"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden max-md:absolute max-md:h-[100%] max-md:w-[100%] max-md:z-[30] max-md:justify-center max-md:gap-[50px] bg-gray-800 text-white flex flex-col items-center transition-all duration-500 ${
            menuOpen
              ? 'clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 80%)]'
              : 'clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 0)]'
          }`}
        >
          <div className="font-sans text-white text-lg font-medium leading-6 my-4">
            <Link href="/trainning">Training</Link>
          </div>
          <div className="font-sans text-white text-lg font-medium leading-6 my-4">
            {' '}
            <Link href="/about">About us</Link>
          </div>
          <div className="font-sans text-white text-lg font-medium leading-6 my-4">
            <Link href="/contactus">Contact Us</Link>
          </div>
          <div className="font-sans text-white text-lg font-medium leading-6 my-4">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex  w-[200px] items-center gap-2 py-3 px-6 rounded-3xl  hover:bg-[#FFBE0B] bg-[#cccce0] font-sans text-[#006] font-['DM font-medium leading-6">
            Primary CTA Button
          </div>
        </div>
      )}
    </nav>
  )
}

export default AppHeader
