import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import favicon from './favicon.ico'
import MyApp from '@/app/_app'
import AppHeader from '@/components/ui/AppHeader'
import AppFooter from '@/components/ui/AppFooter'
import FormModal from '@/components/FormModal'
import './globals.css'
import { ModalProvider } from '@/contexts/ModalProvider'
import Head from 'next/head'

const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Africinnovate ',

  description: 'Impossible is nonsense',
  icons: `${favicon}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="favico.ico" type="image/x-icon" />
      <Head>
        <meta name="google-adsense-account" content="ca-pub-9738664936744628" />
        
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HM0953Q9DC"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HM0953Q9DC');
        </script>
      </Head>

      <body className={inter.className}>    
        <main className="overflow-x-hidden text-app-text-color">
          <ModalProvider>
            <AppHeader />
            {children}
            <AppFooter />
            <FormModal />
            <MyApp />
          </ModalProvider>
        </main>
      </body>
    </html>
  )
}
