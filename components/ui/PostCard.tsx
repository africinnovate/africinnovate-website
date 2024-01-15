import Image from 'next/image'
import Link from 'next/link'
import { PostType } from '@/interfaces'

type Props = {
  post: PostType
  textLimit: number
}

const PostCard = ({ post, textLimit }: Props) => {
  return (
    <div className="sm:w-[calc(100%)] md:w-[calc(50%)] lg:w-[calc(31%)] h-fit flex-col gap-10">
      <Image
        className="w-full h-full object-cover rounded-2xl"
        src={`https:${post.fields.featureImage.fields.file.url}`}
        alt="Image-for-recents-blogs"
        width={100}
        height={100}
      />
      <div className="text-yellow-400  mt-6  text-lg font-medium font-['DM Sans']  leading-normal">
        Technology
      </div>
      <div className="text-2xl font-bold font-['Raleway'] leading-loose max-md:w-[350px]">
        {post.fields.title.length > 50
          ? `${post.fields.title.substring(0, 50)}...`
          : post.fields.title}
      </div>
      <div
        className=" text-base  mt-6 font-medium font-['DM Sans'] leading-normal  "
        id="text"
      >
        {post.fields.body.substring(0, textLimit)}...
      </div>

      <Link
        as={`/blog/${post.fields.slug}`}
        href="/blog/[slug]"
        className="flex w-[140px] justify-center gap-2 mt-6 py-3 px-6 rounded-3xl hover:bg-[#FFBE0B] bg-[#cccce0] font-sans text-[#006] font-['DM font-medium leading-6"
      >
        Read More
      </Link>
    </div>
  )
}

export default PostCard
