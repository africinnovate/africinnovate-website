'use client'

import { getEventPosts } from '@/lib/utils'
import { PostType } from '@/interfaces'
import EventCard from './ui/EventCard'
import Head from 'next/head'
import { useState , useEffect} from 'react'
interface EventProps {
  data: PostType[]
  // title: string
  // subTitle?: boolean
}

const EventLayout = ({ data }: EventProps) => {

  const [upcoming , setUpcoming] = useState<PostType[]>([]);

  useEffect(() => {

    const currentDate = new  Date();
    const fEvent= data.filter((event) => new Date(event.fields.endDate) > currentDate);

    setUpcoming(fEvent);
  } ,[data])
  
  

  return (
    <div className="flex flex-col items-center justify-center mt-[50px]">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-9738664936744628"/>
      </Head>
    <div
      className="max-md:text-[26px] text-[40px] font-bold font-['Raleway'] leading-[48px] mb-10"
      data-aos="zoom-in"
    >
      Upcoming Events
    </div>
    <div className="flex w-full  justify-center max-md:grid gap-[100px] ">
      {upcoming.length > 0 ?
        upcoming.map((item) => (
          <EventCard
            post={item}
            key={item.sys.id}
          />
        )): 
        <div>
          <h1 className='text-white text-3xl line-through text-center font-semibold'>No Events</h1>
        </div> 
        }
    </div>
  </div>
  )
}

export default EventLayout

export async function getServerSideProps() {
  const data = await getEventPosts()

  // Return the data as props
  return { props: { data } }
}
