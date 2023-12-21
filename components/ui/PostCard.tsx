import Image from 'next/image'
import RecentBlogPageImage from '@/public/Images/BlogPageImage.png'
import Button from './Button'

interface IPost {
  post: {
    title: string
    body: string
  }
  textLimit: number
}

const PostCard = ({post, textLimit}: IPost) => {


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
              <div className="w-[409px] text-white text-2xl font-bold font-['Raleway'] leading-loose max-md:w-[350px]">
                {post.title}
              </div>
              <div
                className="w-[350px] h-[74px] max-md:w-[350px] text-white text-base font-medium font-['DM Sans'] leading-normal  "
                id="text"
              >
                {post.body.substring(0, textLimit)}...
              </div>
              <Button className='max-md:mb-[30px]'>Read More</Button>
            </div>
  )
}

export default PostCard