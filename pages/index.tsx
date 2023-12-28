import Hero from '@/components/ui/Hero'
import AboutSection from '@/components/ui/AboutSection'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPosts } from '@/lib/utils'
import { PostType } from '@/interfaces'

interface BlogPageProps {
  data: PostType[]
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
