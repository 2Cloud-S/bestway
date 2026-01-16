import { client } from '@/sanity/lib/client'
import { contactInfoQuery } from '@/sanity/lib/queries'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import MapSection from '@/components/contact/MapSection'

async function getContactInfo() {
  try {
    const contactInfo = await client.fetch(contactInfoQuery)
    return contactInfo
  } catch (error) {
    console.error('Error fetching contact info:', error)
    return null
  }
}

export const metadata = {
  title: 'Contact Us - Bestway For Moving',
  description: 'Get in touch with us for a free quote or to learn more about our moving services.',
}

export default async function ContactPage() {
  const contactInfo = await getContactInfo()

  return (
    <div>
      <ContactHero />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <ContactForm />
          <ContactInfo data={contactInfo} />
        </div>
      </div>
      <MapSection data={contactInfo} />
    </div>
  )
}
