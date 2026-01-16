# 📁 Complete File Structure

Visual guide to all files in your Bestway For Moving website.

```
bestway/
│
├── 📚 DOCUMENTATION (Start Here!)
│   ├── START_HERE.md          ⭐ Read this first!
│   ├── QUICKSTART.md          🚀 5-minute setup
│   ├── SETUP.md               🔧 Detailed setup guide
│   ├── DEPLOYMENT.md          🌐 Deploy to Vercel
│   ├── PROJECT_OVERVIEW.md    📊 Technical overview
│   ├── TIPS.md                💡 Best practices
│   ├── FILE_STRUCTURE.md      📁 This file
│   └── README.md              📖 Complete docs
│
├── ⚙️ CONFIGURATION FILES
│   ├── package.json           Dependencies & scripts
│   ├── package-lock.json      Dependency lock file
│   ├── tsconfig.json          TypeScript config
│   ├── next.config.ts         Next.js config
│   ├── tailwind.config.ts     Tailwind CSS config
│   ├── postcss.config.mjs     PostCSS config
│   ├── sanity.config.ts       Sanity CMS config
│   ├── vercel.json            Vercel deployment
│   ├── .eslintrc.json         ESLint rules
│   ├── .gitignore             Git ignore rules
│   ├── .env.local.example     Environment template
│   └── .env.local             🔒 Your secrets (create this!)
│
├── 📱 APP (Next.js Pages)
│   ├── layout.tsx             Root layout (Header + Footer)
│   ├── page.tsx               Homepage
│   ├── globals.css            Global styles
│   │
│   ├── 📄 about/
│   │   └── page.tsx           About page
│   │
│   ├── 📦 services/
│   │   └── page.tsx           Services page
│   │
│   ├── 📞 contact/
│   │   └── page.tsx           Contact page
│   │
│   └── 🎨 studio/
│       └── [[...index]]/
│           └── page.tsx       Sanity CMS Studio
│
├── 🧩 COMPONENTS (Reusable UI)
│   ├── Header.tsx             Animated navigation header
│   ├── Footer.tsx             Animated footer
│   │
│   ├── 🏠 home/              Homepage components
│   │   ├── Hero.tsx           Hero section
│   │   ├── Features.tsx       Features grid
│   │   ├── Stats.tsx          Statistics counter
│   │   ├── ServicesPreview.tsx Service cards
│   │   ├── Testimonials.tsx   Customer reviews
│   │   └── CTA.tsx            Call-to-action section
│   │
│   ├── ℹ️ about/             About page components
│   │   ├── AboutHero.tsx      About hero section
│   │   ├── Mission.tsx        Mission & vision
│   │   ├── Values.tsx         Company values
│   │   └── Team.tsx           Team members
│   │
│   ├── 📦 services/          Services page components
│   │   ├── ServicesHero.tsx   Services hero
│   │   └── ServicesList.tsx   Service cards list
│   │
│   └── 📞 contact/           Contact page components
│       ├── ContactHero.tsx    Contact hero section
│       ├── ContactForm.tsx    Contact form
│       ├── ContactInfo.tsx    Info cards
│       ├── MapSection.tsx     Map wrapper
│       └── Map.tsx            Leaflet map
│
├── 📊 SANITY (Content Management)
│   │
│   ├── lib/                   Utilities
│   │   ├── client.ts          Sanity client
│   │   ├── queries.ts         GROQ queries
│   │   └── image.ts           Image helper
│   │
│   └── schemas/               Content models
│       ├── index.ts           Schema export
│       ├── homePage.ts        Homepage schema
│       ├── service.ts         Services schema
│       ├── aboutPage.ts       About schema
│       ├── testimonial.ts     Testimonial schema
│       ├── contactInfo.ts     Contact schema
│       └── siteSettings.ts    Settings schema
│
├── 📝 TYPES
│   └── index.ts               TypeScript definitions
│
└── 📦 GENERATED (Don't Edit)
    ├── node_modules/          Dependencies
    └── .next/                 Build output

```

## 📋 File Descriptions

### Documentation Files (Root Level)
| File | Purpose |
|------|---------|
| `START_HERE.md` | Your starting point - overview of everything |
| `QUICKSTART.md` | Get running in 5 minutes |
| `SETUP.md` | Detailed local development setup |
| `DEPLOYMENT.md` | Step-by-step Vercel deployment |
| `PROJECT_OVERVIEW.md` | Architecture and technical details |
| `TIPS.md` | Best practices and optimization tips |
| `README.md` | Complete project documentation |

### Configuration Files (Root Level)
| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and scripts |
| `tsconfig.json` | TypeScript compiler settings |
| `next.config.ts` | Next.js framework configuration |
| `tailwind.config.ts` | Styling and theme configuration |
| `sanity.config.ts` | CMS configuration |
| `vercel.json` | Deployment settings |
| `.env.local` | Environment variables (you create this) |

### App Directory Files
| Path | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with Header and Footer |
| `app/page.tsx` | Homepage with all sections |
| `app/globals.css` | Global styles and Tailwind imports |
| `app/about/page.tsx` | About page |
| `app/services/page.tsx` | Services listing page |
| `app/contact/page.tsx` | Contact page with form and map |
| `app/studio/[[...index]]/page.tsx` | Sanity Studio CMS |

### Homepage Components
| Component | Purpose |
|-----------|---------|
| `Hero.tsx` | Main hero section with CTA |
| `Features.tsx` | Feature cards grid |
| `Stats.tsx` | Animated statistics counter |
| `ServicesPreview.tsx` | Service cards preview |
| `Testimonials.tsx` | Customer testimonials |
| `CTA.tsx` | Call-to-action section |

### About Page Components
| Component | Purpose |
|-----------|---------|
| `AboutHero.tsx` | About page hero |
| `Mission.tsx` | Mission and vision cards |
| `Values.tsx` | Company values grid |
| `Team.tsx` | Team member cards |

### Services Page Components
| Component | Purpose |
|-----------|---------|
| `ServicesHero.tsx` | Services page hero |
| `ServicesList.tsx` | Detailed service cards |

### Contact Page Components
| Component | Purpose |
|-----------|---------|
| `ContactHero.tsx` | Contact page hero |
| `ContactForm.tsx` | Quote request form |
| `ContactInfo.tsx` | Contact information cards |
| `MapSection.tsx` | Map section wrapper |
| `Map.tsx` | Interactive Leaflet map |

### Sanity Files
| File | Purpose |
|------|---------|
| `lib/client.ts` | Sanity client configuration |
| `lib/queries.ts` | All GROQ queries for data fetching |
| `lib/image.ts` | Image URL builder helper |
| `schemas/homePage.ts` | Homepage content model |
| `schemas/service.ts` | Services content model |
| `schemas/aboutPage.ts` | About page content model |
| `schemas/testimonial.ts` | Testimonials content model |
| `schemas/contactInfo.ts` | Contact info content model |
| `schemas/siteSettings.ts` | Site settings content model |

## 🎨 Key Files to Customize

### Content (via Sanity Studio)
- Access at `/studio`
- All content editable without code
- Real-time preview

### Styling
- `tailwind.config.ts` - Colors, theme
- `app/globals.css` - Global styles
- Component files - Component-specific styles

### Configuration
- `.env.local` - Environment variables
- `next.config.ts` - Next.js settings
- `sanity.config.ts` - CMS settings

## 🚫 Don't Touch These

- `node_modules/` - Dependencies (regenerate with npm install)
- `.next/` - Build output (regenerate with npm run build)
- `package-lock.json` - Dependency tree (auto-managed)

## 📊 File Statistics

- **Total Components**: 20+ React components
- **Total Pages**: 4 main pages + CMS studio
- **Configuration Files**: 10+ config files
- **Documentation Files**: 7 comprehensive guides
- **Sanity Schemas**: 6 content models
- **TypeScript**: 100% of code is typed

## 🔍 Finding Files

### Looking for...
- **Page content**: Check `app/` folder
- **Reusable components**: Check `components/` folder
- **CMS schemas**: Check `sanity/schemas/` folder
- **Type definitions**: Check `types/` folder
- **Documentation**: Root level `.md` files

### Quick Navigation
```bash
# View all pages
ls app/**/page.tsx

# View all components
ls components/**/*.tsx

# View all schemas
ls sanity/schemas/*.ts
```

## 💡 Tips

1. **Start with documentation** - Read START_HERE.md first
2. **Edit content in Studio** - Don't edit component files for content
3. **Customize styles** - Edit tailwind.config.ts for colors
4. **Add new components** - Create in components/ folder
5. **Test changes** - Run `npm run dev` to see changes

---

Need help navigating? Start with [START_HERE.md](START_HERE.md)!
