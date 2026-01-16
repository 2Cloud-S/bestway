# Email Setup Guide

Your contact form is set up and ready! Currently, form submissions are logged to the console. To receive them in your Gmail inbox, you need to integrate an email service.

## Option 1: Web3Forms (Easiest - Recommended)

Web3Forms is free, easy to set up, and sends form submissions directly to your email.

### Steps:

1. **Get API Key**
   - Visit [web3forms.com](https://web3forms.com/)
   - Enter your email: `Bestwaypackingandmoving.Com`
   - Get your free Access Key

2. **Update the API Route**
   - Open `app/api/contact/route.ts`
   - Replace the commented section with:

```typescript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
    name: name,
    email: email,
    phone: phone,
    subject: `New Moving Quote Request from ${name}`,
    message: `
      Move Type: ${moveType}
      Preferred Date: ${moveDate || 'Not specified'}

      Message: ${message || 'No additional message'}
    `
  })
})

const result = await response.json()

if (!response.ok) {
  throw new Error(result.message || 'Failed to send email')
}
```

3. **Test It**
   - Fill out your contact form
   - Check your Gmail inbox!

## Option 2: Gmail SMTP (Direct to Gmail)

Send emails directly through Gmail using Nodemailer.

### Steps:

1. **Install Nodemailer**
```bash
npm install nodemailer
```

2. **Create App Password**
   - Go to Google Account → Security 
   - Enable 2-Step Verification
   - Go to App Passwords
   - Generate password for "Mail"
   - Copy the 16-character password

3. **Add to .env.local**
```env
GMAIL_USER=Bestwaypackingandmoving.Com
GMAIL_APP_PASSWORD=your_16_char_password
```

4. **Update API Route**

Replace content in `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    const transporter = nodemailer.createTransport({
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
```

## Option 3: Resend (Modern Email API)

Resend is a modern email API specifically designed for Next.js.

### Steps:

1. **Sign Up**
   - Visit [resend.com](https://resend.com)
   - Create free account
   - Get API key

2. **Install Package**
```bash
npm install resend
```

3. **Add to .env.local**
```env
RESEND_API_KEY=your_api_key_here
```

4. **Update API Route**

```typescript
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain
      to: 'Bestwaypackingandmoving.Com',
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
```

## Recommendation

**For quickest setup**: Use **Web3Forms** (Option 1)
- No installation needed
- No email credentials required
- Works immediately
- Free forever

**For professional use**: Use **Resend** (Option 3)
- Modern API
- Better deliverability
- Professional appearance
- Free tier: 100 emails/day

## Testing

After setup:
1. Go to your contact page
2. Fill out the form
3. Submit
4. Check your inbox for the email!

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify email address is correct
- Check API key is correct
- Look at browser console for errors
- Check server logs: `npm run dev`

**Still having issues?**
- Web3Forms has the best debugging
- They show delivery status in dashboard
- Support email: support@web3forms.com

---

Your contact form is ready to receive inquiries! 📧✨
