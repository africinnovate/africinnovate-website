'use client'

import { getBlogPosts } from '@/lib/utils'
import FeaturedBlog from '@/components/ui/FeaturedBlog'
import PostCard from '@/components/ui/PostCard'
import { PostType } from '@/interfaces'

interface BlogPageProps {
  data: PostType[]
  title: string
  subTitle?: boolean
}

const BlogLayout = ({ title, subTitle, data }: BlogPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-[50px]">
      <div
        className="text-center max-md:text-start max-md:text-[25px]text-[#d9d9e8] text-5xl font-extrabold font-['Raleway'] leading-[96px] max-md:leading-3"
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

      <div className="mt-[2%] flex justify-center items-center flex-col">
        <FeaturedBlog textLimit={400} post={data[0].fields} />
        <div className="max-md:mt-[20rem] flex items-center max-md:flex-col flex-col max-md:justify-center mt-[15%]">
          <div
            className="max-md:text-[26px] text-[40px] font-bold font-['Raleway'] leading-[48px] mb-10"
            data-aos="zoom-in"
          >
            Recent Blogs
          </div>
          <div className="mt-7" data-aos="zoom-in">
            <div className="flex w-full justify-center max-md:grid gap-[100px] ">
              {data &&
                data.map((item) => (
                  <PostCard
                    textLimit={130}
                    post={item}
                    key={item.sys.id}
                  />
                ))}
            </div>
          </div>
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
