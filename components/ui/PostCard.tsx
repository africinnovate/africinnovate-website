import Image from 'next/image'
import RecentBlogPageImage from '@/public/Images/BlogPageImage.webp'
import Link from 'next/link'

interface IPost {
  post: {
    title: string
    body: string
  }
  textLimit: number
  slug: string
}

const PostCard = ({ post, textLimit, slug }: IPost) => {
  return (
    <div className="w-fit h-fit flex-col justify-start  items-start gap-3 inline-flex">
      <Image
        className="w-[408px] h-[220px]  max-md:w-[320px] object-cover relative rounded-2xl"
        src={RecentBlogPageImage}
        alt="Image-for-recents-blogs"
      />
      <div className="text-yellow-400 text-lg font-medium font-['DM Sans']  leading-normal">
        Technology
      </div>
      <div className="w-[409px]text-[#d9d9e8] text-2xl font-bold font-['Raleway'] leading-loose max-md:w-[350px]">
        {post.title.length > 60
          ? `${post.title.substring(0, 60)}...`
          : post.title}
      </div>
      <div
        className="w-[350px] h-[74px] max-md:w-[350px]text-[#d9d9e8] text-base font-medium font-['DM Sans'] leading-normal  "
        id="text"
      >
        {post.body.substring(0, textLimit)}...
      </div>

      <Link
        as={`/blog/${slug}`}
        href="/blog/[slug]"
        className="flex  w-[140px] justify-center gap-2 py-3 px-6 rounded-3xl  hover:bg-[#FFBE0B] bg-[#cccce0] font-sans text-[#006] font-['DM font-medium leading-6"
      >
        Read More
      </Link>
    </div>
  )
}

export default PostCard
