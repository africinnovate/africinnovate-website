"use client"
import{ Navbar,Aboutuscomponent }from "@/app/index"
import { usePathname } from "next/navigation"
import Trainingcomponent from "../Training"
import Footer from "@/components/footer"
 function AboutUs() {
   const pathname = usePathname()
    console.log("Pathname is: ", pathname)
  return (
    <main className="overflow-x-hidden ">
   <Navbar/>
   <Aboutuscomponent/>
   <div className="ml-10%">
    <Footer/>
    </div>
    </main>
  )
}
export default AboutUs