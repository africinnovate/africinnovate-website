import Hero from '@/components/ui/Hero'
import AboutSection from '@/components/ui/AboutSection'
import Blog from '@/components/Blog'
import Blogs from '@/components/Blogs'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <div
        id="wrapperFor"
        className=" mt-[12rem] max-md:mt-[16rem]  flex-col flex items-center justify-center max-md:flex-col"
        data-aos="zoom-in"
      >
        <div className="text-center text-white text-5xl font-bold font-['Raleway'] leading-[64px]">
          Our Blog
        </div>

        <Blog />
      </div>

      {/* recent-blogs */}
      <div
        id="wrapper"
        className="mt-[5rem] max-md:mt-[20rem] max-md: flex items-center  max-md:flex-col   flex-col max-md:justify-center"
        data-aos="zoom-in"
      >
        <div className="text-white text-[40px] font-bold font-['Raleway'] leading-[48px]">
          Recent Blogs
        </div>
        <Blogs />
      </div>
    </>
  )
}
