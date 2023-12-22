'use client'

import { getBlogPosts } from '@/lib/utils'
import BlogLayout from '@/components/BlogLayout'

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
    featureImage: {
      fields: {
        file: {
          url: string
        }
      }
    }
    created: string
  }
}

interface BlogPageProps {
  data: BlogPost[]
}

export default function BlogComponent({ data }: BlogPageProps) {
  return <BlogLayout title="Our Blog" subTitle={true} data={data} />
}

export async function getServerSideProps() {
  const data = await getBlogPosts()

  // Return the data as props
  return { props: { data } }
}
