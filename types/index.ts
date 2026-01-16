export interface HomePage {
  _id: string
  title: string
  subtitle: string
  heroTitle: string
  heroDescription: string
  heroImage: any
  ctaText: string
  ctaLink: string
  features: Feature[]
  stats: Stat[]
}

export interface Feature {
  _key: string
  title: string
  description: string
  icon: string
}

export interface Stat {
  _key: string
  number: string
  label: string
}

export interface Service {
  _id: string
  title: string
  slug: { current: string }
  description: string
  longDescription?: any[]
  image: any
  icon: string
  features: string[]
  price: string
  order: number
}

export interface AboutPage {
  _id: string
  title: string
  description: any[]
  mission: string
  vision: string
  image: any
  teamMembers: TeamMember[]
  values: Value[]
}

export interface TeamMember {
  _key: string
  name: string
  position: string
  bio: string
  image: any
}

export interface Value {
  _key: string
  title: string
  description: string
}

export interface Testimonial {
  _id: string
  name: string
  position: string
  company: string
  content: string
  image: any
  rating: number
  order: number
}

export interface ContactInfo {
  _id: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  latitude: number
  longitude: number
  openingHours: string
  socialMedia: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

export interface SiteSettings {
  _id: string
  siteName: string
  siteDescription: string
  logo: any
  favicon: any
  primaryColor: string
  secondaryColor: string
}
