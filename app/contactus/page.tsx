'use client'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { ContactUs } from '@/app/index'

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <ContactUs />
      <div className=" ml-[60px] max-md:ml-[0px] overflow-hidden">
        <Footer />
      </div>
    </main>
  )
}
