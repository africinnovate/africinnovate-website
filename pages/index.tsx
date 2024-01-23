import Hero from '@/components/ui/Hero'
import AboutSection from '@/components/ui/AboutSection'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPosts, getEventPosts } from '@/lib/utils'
import { PostType } from '@/interfaces'
import EventLayout from '@/components/EventLayout'

interface BlogPageProps {
  data: PostType[]
  eventData: PostType[]
  title: string
}

const Home = ({ data, eventData }: BlogPageProps) => {
  return (
    <>
      <Hero />
      <AboutSection />
      <div className="mt-20">
        <EventLayout data={eventData} />
        <BlogLayout title="Our Blog" data={data} />
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const eventData = await getEventPosts()
  const data = await getBlogPosts()

  // Return the data as props
  return { props: { data, eventData } }
}
