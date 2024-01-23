'use client'

import { getEventPosts } from '@/lib/utils'
import { PostType } from '@/interfaces'
import EventLayout from '@/components/EventLayout'
// import Head from 'next/head'
// import africImage from '@/public/Images/africinnovate.jpeg'

interface EventPageProps {
  data: PostType[]
}

export default function Event({ data }: EventPageProps) {

  // const pageTitle = `${'Blog'} | Africinnovate`; // Customize this with your site name
  // const description = `${'Latest tech trend for your perusal'}`;
  // const ogImage = `${africImage}`; // Assuming your featureImage is an object with a file field
  // const ogImage = `https:${data[0].fields.featureImage.fields.file.url}`; // Assuming your featureImage is an object with a file field


  // <Head>
  //   <title>{pageTitle}</title>
  //   <meta name="description" content={description} />
  //   <meta property="og:title" content={pageTitle} />
  //   <meta property="og:description" content={description} />
    {/* <meta property="og:image" content={ogImage} /> */}
  // </Head>

  return <EventLayout data={data} />
}

export async function getServerSideProps() {
  const data = await getEventPosts()

  // Return the data as props
  return { props: { data } }
}
