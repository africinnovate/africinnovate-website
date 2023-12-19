'use client'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Trainingcomponent from '@/app/Training'

export default function About() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Trainingcomponent />
      <div className="ml-[60px] max-md:ml-[0px] overflow-hidden">
        <Footer />
      </div>
    </main>
  )
}
