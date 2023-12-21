'use client'

import { getBlogPosts } from '@/lib/utils'
import Blog from '@/components/Blog'
import Blogs from '@/components/Blogs'

type BlogPost = {
  metadata: { tags: string[] }
  sys: {
    space: object
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: object
    revision: number
    contentType: object
    locale: string
  }
  fields: {
    title: string
    body: string
    featureImage: object
    created: string
  }
}

interface BlogPageProps {
  data: BlogPost[]
  title: string
  subTitle?: boolean
}

const BlogLayout = ({ title, subTitle, data }: BlogPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-[50px]">
      <div
        className="text-center max-md:text-start max-md:text-[25px] text-white text-5xl font-extrabold font-['Raleway'] leading-[96px] max-md:leading-3"
        data-aos="fade-up"
      >
        {title}
      </div>
      {subTitle && (
        <div
          className="Sans'] w-[645px] text-[#d9d9e8] text-center font-['DM text-lg font-medium leading-6 mt-[23px] "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Get latest tech trends
        </div>
      )}

      <div className="mt-[5%]">
        <Blog />
        <div
          id="wrapper"
          className="max-md:mt-[20rem] max-md: flex items-center  max-md:flex-col   flex-col max-md:justify-center mt-[5%]"
        >
          <div
            className="text-white text-[40px] font-bold font-['Raleway'] leading-[48px]"
            data-aos="fade-up"
          >
            Recent Blogs
          </div>
          <Blogs />
        </div>
      </div>
    </div>
  )
}

export default BlogLayout

export async function getServerSideProps() {
  const data = await getBlogPosts()

  // Return the data as props
  return { props: { data } }
}
