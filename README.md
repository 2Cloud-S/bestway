# Bestway For Moving - Premium Moving Services Website

A modern, premium moving company website built with Next.js 15, TypeScript, Sanity CMS, and Framer Motion animations.

## Features

- 🎨 **Premium Design**: Modern, professional design with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🎭 **Framer Motion Animations**: Beautiful animations throughout the site
- 📝 **Sanity CMS Integration**: Easy content management for non-technical users
- 🗺️ **Interactive Map**: Leaflet map integration on contact page
- 🚀 **Next.js 15**: Built with the latest Next.js features
- 💪 **TypeScript**: Fully typed for better development experience
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML

## Pages

1. **Homepage** - Hero section, features, stats, services preview, testimonials, and CTA
2. **About** - Company mission, vision, values, and team members
3. **Services** - Comprehensive list of moving services
4. **Contact** - Contact form, information cards, and interactive map
5. **Studio** - Sanity CMS admin panel at `/studio`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity.io
- **Maps**: React Leaflet
- **Icons**: React Icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Sanity account (free at sanity.io)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd bestway
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-16
SANITY_API_TOKEN=your_token
```

### Sanity Setup

1. Create a new Sanity project at [sanity.io](https://www.sanity.io/)
2. Copy your project ID
3. Generate an API token with read/write permissions
4. Add these to your `.env.local` file

### Running Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Accessing Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to access the CMS.

## Content Management

The website uses Sanity CMS for content management. Access the studio at `/studio` to edit:

- **Home Page**: Hero content, features, statistics
- **Services**: Add/edit moving services with pricing
- **About Page**: Mission, vision, team members, company values
- **Testimonials**: Customer reviews and ratings
- **Contact Info**: Business hours, address, phone, email, social media
- **Site Settings**: Logo, colors, site name

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables in Vercel dashboard
6. Deploy

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and add your environment variables when asked.

### Important: Environment Variables in Vercel

Make sure to add all environment variables from `.env.local` in your Vercel project settings:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_TOKEN`

## Project Structure

```
bestway/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── services/            # Services page
│   ├── studio/              # Sanity Studio
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── home/               # Homepage components
│   ├── about/              # About page components
│   ├── services/           # Services page components
│   ├── contact/            # Contact page components
│   ├── Header.tsx          # Site header
│   └── Footer.tsx          # Site footer
├── sanity/                  # Sanity configuration
│   ├── lib/                # Sanity client and utilities
│   └── schemas/            # Content schemas
├── types/                   # TypeScript type definitions
├── public/                  # Static assets
└── sanity.config.ts        # Sanity configuration
```

## Customization

### Colors

Edit colors in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: { ... },  // Blue theme
  accent: { ... },   // Orange theme
}
```

### Content

All content can be edited through the Sanity Studio at `/studio`.

### Styling

The project uses Tailwind CSS. Custom styles can be added to [app/globals.css](app/globals.css).

## Performance

- ✅ Static Site Generation (SSG) where possible
- ✅ Optimized images with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For support or questions, contact: info@bestwayformoving.com

---

Built with ❤️ using Next.js, TypeScript, and Sanity CMS
