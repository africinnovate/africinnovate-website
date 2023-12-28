'use client'

import FormComponent from '@/components/FormComponent'

const ContactUs = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div
        className="flex w-full items-center justify-center flex-col  mt-[72px]"
        data-aos="fade-up"
      >
        <div className="w-full text-centertext-[#d9d9e8] text-7xl font-semibold font-sans  max-md:text-[2rem] max-md:leading-normal">
          Get in touch with
        </div>
        <div className="flex-shrink-0 w-[701px] h-[4.625rem] flex text-center items-center justify-center text-[4rem] max-md:text-[32px]">
          <div className="inline-flex items-start   text-[#d9d9e8] text-center  font-bold  font-sans    ">
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
      <FormComponent
        onClose={() => {
          console.log('submitted')
        }}
      />{' '}
    </div>
  )
}

export default ContactUs
