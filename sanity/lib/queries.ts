import { groq } from 'next-sanity'

// Homepage queries
export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    _id,
    title,
    subtitle,
    heroImage,
    heroTitle,
    heroDescription,
    ctaText,
    ctaLink,
    features[]{
      _key,
      title,
      description,
      icon
    },
    stats[]{
      _key,
      number,
      label
    }
  }
`

// Services queries
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc){
    _id,
    title,
    slug,
    description,
    longDescription,
    image,
    icon,
    features[],
    price,
    order
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    longDescription,
    image,
    icon,
    features[],
    price
  }
`

// About page query
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    _id,
    title,
    description,
    mission,
    vision,
    image,
    teamMembers[]{
      _key,
      name,
      position,
      bio,
      image
    },
    values[]{
      _key,
      title,
      description
    }
  }
`

// Testimonials query
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc){
    _id,
    name,
    position,
    company,
    content,
    image,
    rating,
    order
  }
`

// Contact info query
export const contactInfoQuery = groq`
  *[_type == "contactInfo"][0]{
    _id,
    email,
    phone,
    address,
    city,
    state,
    zip,
    country,
    latitude,
    longitude,
    openingHours,
    socialMedia{
      facebook,
      twitter,
      instagram,
      linkedin
    }
  }
`

// Site settings query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    _id,
    siteName,
    siteDescription,
    logo,
    favicon,
    primaryColor,
    secondaryColor
  }
`
