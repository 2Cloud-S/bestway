import { client } from '@/sanity/lib/client'
import { servicesQuery } from '@/sanity/lib/queries'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'

async function getServices() {
  try {
    const services = await client.fetch(servicesQuery)
    return services
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export const metadata = {
  title: 'Our Services - Bestway For Moving',
  description: 'Comprehensive moving services including residential, commercial, and specialized moving solutions.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div>
      <ServicesHero />
      <ServicesList services={services} />
    </div>
  )
}
