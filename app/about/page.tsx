import { client } from '@/sanity/lib/client'
import { aboutPageQuery } from '@/sanity/lib/queries'
import AboutHero from '@/components/about/AboutHero'
import Mission from '@/components/about/Mission'
import Team from '@/components/about/Team'
import Values from '@/components/about/Values'

async function getAboutData() {
  try {
    const aboutPage = await client.fetch(aboutPageQuery)
    return aboutPage
  } catch (error) {
    console.error('Error fetching about data:', error)
    return null
  }
}

export const metadata = {
  title: 'About Us - Bestway For Moving',
  description: 'Learn about our mission, values, and the team behind Bestway For Moving.',
}

export default async function AboutPage() {
  const aboutData = await getAboutData()

  return (
    <div>
      <AboutHero data={aboutData} />
      <Mission data={aboutData} />
      <Values data={aboutData?.values || []} />
      <Team data={aboutData?.teamMembers || []} />
    </div>
  )
}
