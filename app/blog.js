"use client"

import { BlogNewscomponent, BlogPageonecomponent } from "."


export default function BlogPage() {
 
  return (
 <>
 <div>
    
    <div className="flex flex-col items-center justify-center mt-[50px]"> 
    <div className=" text-center max-md:text-start max-md:text-[25px] text-white text-[80px] font-extrabold font-['Raleway'] leading-[96px] max-md:leading-3" data-aos="fade-up"  >Welcome to our Blog</div>
    <div className="Sans'] w-[645px] text-[#d9d9e8] text-center font-['DM text-lg font-medium leading-6 mt-[23px] " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Get latest uhjhsfi;hasdfkasdfnsklfnansfdk;</div>
{/* blogcomponent */}<div className="mt-[5%]">
<BlogPageonecomponent/>
<div id='wrapper' className='max-md:mt-[20rem] max-md: flex items-center  max-md:flex-col   flex-col max-md:justify-center mt-[5%]'>
<div className="text-white text-[40px] font-bold font-['Raleway'] leading-[48px]" data-aos='fade-up'>Recent Blogs</div>
<BlogNewscomponent/>
<BlogNewscomponent/>
</div>
</div>
    </div>
    </div></>
  )
}
