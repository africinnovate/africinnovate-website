import type { Metadata } from 'next'
import { Inter,Raleway } from 'next/font/google'
import favicon from "./favicon.ico"
import './globals.css'
import  MyApp from '@/app/_app'

const inter = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AfricInnovate ',

  description: 'AfricInnovate website',
  icons:`${favicon}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MyApp/>
  <link rel="icon" href="favico.ico" type="image/x-icon" />
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
