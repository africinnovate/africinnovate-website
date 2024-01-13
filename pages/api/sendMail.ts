import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<ResponseData>
  ) {
  
  if (req.method === 'POST') {
    const { subject, html } = req.body

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      // secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    })

    // Define the email options
    const mailOptions = {
      from: '',
      to: 'info@africinnovate.com',
      subject,
      html
    }

    try {
      // Send the email
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'Email sent successfully!' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ message: 'Error sending email', error })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
