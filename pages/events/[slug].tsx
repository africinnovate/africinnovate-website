
import Image from 'next/image'
import { Params, PostType } from '@/interfaces'
import { getEventPost, getEventPosts, markdownToHtml } from '@/lib/utils'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

type Props = {
  post: PostType
}

const EventPage = ({ post }: Props) => {

  const pageTitle = `${post.fields.title} | Africinnovate`; // Customize this with your site name
  const description = `${post.fields.title}`;
  const ogImage = `https:${post.fields.featureImage.fields.file.url}`; // Assuming your featureImage is an object with a file field

  return (
    <div className="prose max-w-[80%] mx-auto">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9738664936744628"
      crossOrigin="anonymous"></Script>

      <div className="flex items-center justify-center flex-col">

      <Image
        className="rounded-2xl"
        src={`https:${post.fields.featureImage.fields.file.url}`}
        alt="Image-for-recents-blogs"
        width={500}
        height={500}
      />

        <h1 className="text-[#d9d9e8] mt-9 font-['Raleway'] text-5xl font-bold leading-[64px] max-md:w-auto max-md:ml-3">
          {post.fields.title}
        </h1>
        <article
          dangerouslySetInnerHTML={{ __html: post.fields.body }}
          className="prose-h1:text-[#d9d9e8] prose-h2:text-[#d9d9e8] prose-h3:text-[#d9d9e8] prose-h4:text-[#d9d9e8] prose-a:text-[#d9d9e8] text-[#d9d9e8] font-medium leading-8"
        />
      </div>
    </div>
  )
}

export default EventPage

export async function getStaticPaths() {
  // Fetch all blog posts to generate paths
  const posts = await getEventPosts()

  // Map posts to an array of objects with `params` key
  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }))

  return {
    paths,
    fallback: false, // Set to true if you want to enable incremental static regeneration (ISR)
  }
}

export async function getStaticProps({ params }: Params) {
  const data = await getEventPost(params.slug)

  // Check if data is not null before accessing its properties
  if (!data) {
    return {
      notFound: true,
    }
  }

  // Return the data as props
  const content = await markdownToHtml(data.fields.body || '')

  return {
    props: {
      post: {
        ...data,
        fields: {
          ...data.fields,
          body: content,
        },
      },
    },
  }
}
