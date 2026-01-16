# Setup Guide - Bestway For Moving Website

Quick start guide to get your website running locally.

## Prerequisites

- Node.js 18.17 or higher
- npm or yarn package manager
- A text editor (VS Code recommended)
- Git

## Installation Steps

### 1. Install Dependencies

The dependencies have already been installed. If you need to reinstall:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-16
SANITY_API_TOKEN=your_token
```

### 3. Start Development Server

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

### 4. Access Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## Project Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Getting Your Sanity Credentials

### Step 1: Create Sanity Account

1. Visit [sanity.io](https://www.sanity.io/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create a Project

1. Click "Create project"
2. Name your project "Bestway For Moving"
3. Choose dataset name: "production"
4. Note your Project ID

### Step 3: Generate API Token

1. Go to your project settings
2. Navigate to API → Tokens
3. Click "Add API token"
4. Name: "Website Token"
5. Permissions: Editor
6. Copy the token (you won't see it again!)

### Step 4: Configure CORS

1. In project settings, go to API → CORS Origins
2. Add origin: `http://localhost:3000`
3. Allow credentials: Yes

## First Time Setup

After starting the development server:

1. **Visit the Studio** at `/studio`
2. **Login** with your Sanity credentials
3. **Add content** to each section:
   - Home Page (hero, features, stats)
   - Services (at least 3 services)
   - About Page (mission, vision, team)
   - Testimonials (customer reviews)
   - Contact Info (your business details)
   - Site Settings (logo, colors)

## Folder Structure

```
bestway/
├── app/                    # Next.js pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with map
│   ├── services/          # Services page
│   ├── studio/            # Sanity CMS
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── home/             # Homepage sections
│   ├── about/            # About page sections
│   ├── services/         # Services sections
│   ├── contact/          # Contact page & map
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Site footer
├── sanity/               # Sanity configuration
│   ├── lib/             # Client & queries
│   └── schemas/         # Content models
├── types/               # TypeScript types
├── public/              # Static files
└── .env.local          # Environment variables (create this)
```

## Development Tips

### Hot Reload
- Changes to components auto-reload
- Changes to Sanity content require page refresh

### Styling
- Uses Tailwind CSS
- Custom styles in `app/globals.css`
- Configure theme in `tailwind.config.ts`

### TypeScript
- All files are typed
- Types defined in `types/index.ts`
- Sanity types auto-generated

### Animations
- Powered by Framer Motion
- Configured in component files
- Smooth, performant animations

## Common Issues

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Sanity Connection Errors
- Check your Project ID is correct
- Verify API token is valid
- Ensure CORS origin is added

### Map Not Loading
- Make sure you're not using Safari in private mode
- Check console for errors
- Verify coordinates are valid

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## Getting Help

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Sanity**: [sanity.io/docs](https://www.sanity.io/docs)
- **Tailwind**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)

## Next Steps

1. ✅ Set up Sanity account
2. ✅ Configure environment variables
3. ✅ Start development server
4. ✅ Add content via Studio
5. ✅ Customize styling (optional)
6. 🚀 Deploy to Vercel (see DEPLOYMENT.md)

---

Happy building! 🎉
