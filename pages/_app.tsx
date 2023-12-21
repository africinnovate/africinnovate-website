// _app.tsx
import { getBlogPosts } from '@/lib/utils'
import { AppProps } from 'next/app'
import { useEffect } from 'react'

import AppHeader from '@/components/ui/AppHeader'
import Footer from '@/components/Footer'
import MyApp from '@/app/_app'
import '../app/globals.css'

const PageApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // This effect will run once when the app mounts
    const fetchData = async () => {
      // Fetch blog posts globally using getBlogPosts
      try {
        const blogPosts = await getBlogPosts()
        // You can do something with the fetched blogPosts if needed
        console.log(blogPosts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      }
    }

    fetchData()
  }, []) // The empty dependency array ensures the effect runs only once

  return (
    <main className="overflow-x-hidden">
      <AppHeader />
      <Component {...pageProps} />
      <Footer />
      <MyApp />
    </main>
  )
}

export default PageApp
