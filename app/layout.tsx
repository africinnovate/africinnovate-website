import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import favicon from './favicon.ico'
import MyApp from '@/app/_app'
import AppHeader from '@/components/ui/AppHeader'
import AppFooter from '@/components/ui/AppFooter'
import './globals.css'

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

      <body className={inter.className}>
        <main className="overflow-x-hidden text-app-text-color">
          <AppHeader />
          {children}
          <AppFooter />
          <MyApp />
        </main>
      </body>
    </html>
  )
}
