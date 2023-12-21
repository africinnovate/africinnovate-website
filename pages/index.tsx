import Hero from '@/components/ui/Hero'
import AboutSection from '@/components/ui/AboutSection'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPosts } from '@/lib/utils'

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
}

const Home = ({ data }: BlogPageProps) => {
  return (
    <>
      <Hero />
      <AboutSection />
      <div className="mt-20">
        <BlogLayout title="Our Blog" data={data} />
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const data = await getBlogPosts()

  // Return the data as props
  return { props: { data } }
}
