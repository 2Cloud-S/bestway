import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Stats from '@/components/home/Stats'
import Services from '@/components/home/ServicesPreview'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'
import { client } from '@/sanity/lib/client'
import { homePageQuery, servicesQuery, testimonialsQuery } from '@/sanity/lib/queries'

async function getHomeData() {
  try {
    const [homePage, services, testimonials] = await Promise.all([
      client.fetch(homePageQuery),
      client.fetch(servicesQuery),
      client.fetch(testimonialsQuery),
    ])
    return { homePage, services, testimonials }
  } catch (error) {
    console.error('Error fetching home data:', error)
    return { homePage: null, services: [], testimonials: [] }
  }
}

export default async function Home() {
  const { homePage, services, testimonials } = await getHomeData()

  return (
    <div>
      <Hero data={homePage} />
      <Features data={homePage?.features || []} />
      <Stats data={homePage?.stats || []} />
      <Services services={services} />
      <Testimonials testimonials={testimonials} />
      <CTA />
    </div>
  )
}
