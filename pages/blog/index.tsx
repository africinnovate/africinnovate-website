'use client'

import { getBlogPosts } from '@/lib/utils'
import BlogLayout from '@/components/BlogLayout'
import { PostType } from '@/interfaces'

interface BlogPageProps {
  data: PostType[]
}

export default function BlogComponent({ data }: BlogPageProps) {
  return <BlogLayout title="Our Blog" subTitle={true} data={data} />
}

export async function getServerSideProps() {
  const data = await getBlogPosts()

  // Return the data as props
  return { props: { data } }
}
