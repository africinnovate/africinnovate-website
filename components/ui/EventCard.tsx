import Image from 'next/image'
import Link from 'next/link'
import { PostType } from '@/interfaces'

type Props = {
  post: PostType
}

const EventCard = ({ post }: Props) => {
  return (

    <Link
      as={`/events/${post.fields.slug}`}
      href="/events/[slug]"
      className=""
    >
      <Image
        className="rounded-2xl"
        src={`https:${post.fields.featureImage.fields.file.url}`}
        alt="Image-for-recents-blogs"
        width={500}
        height={500}
      />
    </Link>

  )
}

export default EventCard
