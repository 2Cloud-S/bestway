import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, moveType, moveDate, message } = body

    if (!name || !email || !phone || !moveType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Dynamically import nodemailer only when needed
    const nodemailer = await import('nodemailer')

    const transporter = nodemailer.default.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Moving Quote Request from ${name}`,
      html: `
        <h2>New Moving Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Move Type:</strong> ${moveType}</p>
        <p><strong>Preferred Date:</strong> ${moveDate || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message'}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Your request has been received!'
    })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}