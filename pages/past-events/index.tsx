
'use client'

import { useState , useEffect} from 'react'
import { getEventPosts } from '@/lib/utils'
import { PostType } from '@/interfaces'
import EventCard from '@/components/ui/EventCard'
import Head from 'next/head'
// import africImage from '@/public/Images/africinnovate.jpeg'

interface EventPageProps {
  data: PostType[]
}

export default function Event({ data }: EventPageProps) {

  // const pageTitle = ${'Blog'} | Africinnovate; // Customize this with your site name
  // const description = ${'Latest tech trend for your perusal'};
  // const ogImage = ${africImage}; // Assuming your featureImage is an object with a file field
  // const ogImage = https:${data[0].fields.featureImage.fields.file.url}; // Assuming your featureImage is an object with a file field

  // <Head>
  //   <title>{pageTitle}</title>
  //   <meta name="description" content={description} />
  //   <meta property="og:title" content={pageTitle} />
  //   <meta property="og:description" content={description} />
    {/* <meta property="og:image" content={ogImage} /> */}
  // </Head>

  const [past , setpast] = useState<PostType[]>([]);

  useEffect(() => {

    const currentDate = new  Date();
    const pastEvent= data.filter((event) => new Date(event.fields.endDate) < currentDate);

    setpast(pastEvent);
  } ,[data])

  return (
    <div className=" px-4 flex flex-col items-center justify-center mt-[50px]">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-9738664936744628"/>
      </Head>
    <div
      className="max-md:text-[26px] text-[40px] font-bold font-['Raleway'] leading-[48px] mb-10"
      data-aos="zoom-in"
    >
      Past Events
    </div>
    <div className="flex w-full justify-center max-md:grid gap-[100px] ">
      {past &&
        past.map((item) => (
          <EventCard
            post={item}
            key={item.sys.id}
          />
        ))}
    </div>
  </div>
  )
}

export async function getServerSideProps() {
  const data = await getEventPosts()

  // Return the data as props
  return { props: { data } }
}