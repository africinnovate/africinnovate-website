'use client'

import { useState, useEffect } from 'react'
import { getEventPosts } from '@/lib/utils'
import { PostType } from '@/interfaces'
import EventCard from './ui/EventCard'
import Head from 'next/head'
import Link from 'next/link'

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
        <meta name="google-adsense-account" content="ca-pub-9738664936744628" />
      </Head>
      <div
        className="max-md:text-[26px] text-[40px] font-bold font-['Raleway'] leading-[48px] mb-10"
        data-aos="zoom-in"
      >
        Upcoming Events
      </div>
      <div className="flex w-full  justify-center max-md:grid gap-[100px] ">
        {upcoming.length > 0 ? (
          upcoming.map((item) => <EventCard post={item} key={item.sys.id} />)
        ) : (
          <div>
            <Link href="/past-events">
              <button className=" text-lg font-semibold rounded-3xl  p-4 hover:bg-[#FFBE0B] bg-[#cccce0] font-sans text-[#006] ">
                View Past Events
              </button>
            </Link>
          </div>
        )}
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
