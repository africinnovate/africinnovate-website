import { NextResponse, type NextRequest } from 'next/server'
import Mail from 'nodemailer/lib/mailer'
import nodemailer from 'nodemailer'
import { env } from 'process'
export async function POST(request: NextRequest) {
 
  const  { 
    email, 
    phoneNumber, 
    fullName,
    selectCourse,
    yourMessage }  = await request.json()
//getting the formData and ghanging it to json format
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })
//using the mailoptions to get the email and send the message
  const mailOptions: Mail.Options = {
    from: env.NODEMAILER_EMAIL,
    to: env.NODEMAILER_EMAIL,
    subject: ` ${email} with userName: ${fullName}`,
    text: `Greetings from ${fullName}! They're Eager to Learn ${selectCourse}.
    Welcome ${fullName} to the selectCourseCrew!∗∗−∗∗{fullName} Has a Question About selectCourse.Let 
    ′
     sConnect!∗∗∗∗Intriguing:∗∗−∗∗{fullName} Has a Burning Question About ${selectCourse}...
    Psst... ${fullName} Is Eyeing selectCourse.∗∗−∗∗{fullName} Had a Lightbulb Moment About ${selectCourse}! ${yourMessage}`,
  }
//usage of a try-and catch for errors
  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({ message: "Success!", status: 200 })
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 })
  }
}