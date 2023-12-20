import RecentBlogPageImage from '../public/Images/BlogPageImage.png'
import Image from 'next/image'
import Button from './ui/Button'
const BlogNewscomponent = () => {
  return (
    <>
      <div>
        <div className="flex  mt-7 " data-aos="fade-up">
          <div className="flex flex-col sm:flex-row gap-[48px] max-md:items-center max-md:justify-center ">
            <div className="w-[325px] h-[430px] flex-col justify-start  items-start gap-2 inline-flex">
              <Image
                className="w-[408px] h-[220px]  max-md:w-[320px] object-cover relative rounded-2xl"
                src={RecentBlogPageImage}
                alt="Image-for-recents-blogs"
              />
              <div className="text-yellow-400 text-lg font-medium font-['DM Sans']  leading-normal">
                Technology
              </div>
              <div className="w-[409px] text-white text-2xl font-bold font-['Raleway'] leading-loose max-md:w-[350px]">
                This Is a space for blog Title
              </div>
              <div
                className="w-[350px] h-[74px] max-md:w-[350px] text-white text-base font-medium font-['DM Sans'] leading-normal  "
                id="text"
              >
                Lorem ipsum dolor sit amet consectetur. Aliquam dolor varius
                nunc morbi non. Elementum curabitur massa pharetra urna...
              </div>
              <Button>Read More</Button>
            </div>
            <div className="w-[325px] h-[430px] flex-col justify-startitems-start gap-2 inline-flex">
              <Image
                className="w-[408px] h-[220px]  max-md:w-[320px] object-cover relative rounded-2xl"
                src={RecentBlogPageImage}
                alt="Image-for-recents-blogs"
              />
              <div className="text-yellow-400 text-lg font-medium font-['DM Sans'] leading-normal">
                Technology
              </div>
              <div className="w-[409px] text-white text-2xl font-bold font-['Raleway'] leading-loose max-md:w-[350px]">
                This Is a space for blog Title
              </div>
              <div
                className="w-[350px] h-[74px] max-md:w-[350px] text-white text-base font-medium font-['DM Sans'] leading-normal  "
                id="text"
              >
                Lorem ipsum dolor sit amet consectetur. Aliquam dolor varius
                nunc morbi non. Elementum curabitur massa pharetra urna...
              </div>
              <Button>Read More</Button>
            </div>
            <div className="w-[325px] h-[430px] flex-col justify-start max-md:justify-center items-start gap-2 inline-flex">
              <Image
                className="w-[408px] h-[220px]  max-md:w-[320px] object-cover relative rounded-2xl"
                src={RecentBlogPageImage}
                alt="Image-for-recents-blogs"
              />
              <div className="text-yellow-400 text-lg font-medium font-['DM Sans'] leading-normal">
                Technology
              </div>
              <div className="w-[409px] text-white text-2xl font-bold font-['Raleway'] leading-loose max-md:w-[350px]">
                This Is a space for blog Title
              </div>
              <div
                className="w-[350px] h-[74px] max-md:w-[350px] text-white text-base font-medium font-['DM Sans'] leading-normal "
                id="text"
              >
                Lorem ipsum dolor sit amet consectetur. Aliquam dolor varius
                nunc morbi non. Elementum curabitur massa pharetra urna...
              </div>
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogNewscomponent
