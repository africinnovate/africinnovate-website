import Image from 'next/image'
import Link from 'next/link'
import { PostType } from '@/interfaces'

type Props = {
  post: PostType
}

const EventCard = ({ post }: Props) => {
  return (
    <div className="">
      <Link
        as={`/events/${post.fields.slug}`}
        href="/events/[slug]"
        className=""
      >
        <Image
          className="w-full h-full object-cover rounded-2xl"
          src={`https:${post.fields.featureImage.fields.file.url}`}
          alt="Image-for-recents-blogs"
          width={100}
          height={100}
        />
      </Link>
    </div>
  )
}

export default EventCard
