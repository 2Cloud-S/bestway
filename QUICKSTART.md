# 🚀 Quick Start Guide

Get your website running in 5 minutes!

## ✅ Installation Complete!

All dependencies have been installed. You're ready to start!

## Step 1: Set Up Sanity (5 minutes)

### Create Sanity Account
1. Go to [sanity.io](https://www.sanity.io/)
2. Click "Sign up" (free account)
3. Verify your email

### Create Project
1. Click "Create project"
2. Project name: **Bestway For Moving**
3. Dataset: **production**
4. **Copy your Project ID** (you'll need this!)

### Get API Token
1. In project dashboard, go to **API** → **Tokens**
2. Click "Add API token"
3. Name: **Website Token**
4. Permissions: **Editor**
5. **Copy the token** (you won't see it again!)

### Add CORS Origin
1. Go to **API** → **CORS Origins**
2. Click "Add CORS origin"
3. Origin: `http://localhost:3000`
4. Allow credentials: **Yes**

## Step 2: Configure Environment

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-16
SANITY_API_TOKEN=your_token_here
```

Replace `your_project_id_here` and `your_token_here` with your actual values.

## Step 3: Start Development Server

```bash
npm run dev
```

Your website will be running at:
- **Website**: [http://localhost:3000](http://localhost:3000)
- **CMS Studio**: [http://localhost:3000/studio](http://localhost:3000/studio)

## Step 4: Add Content

1. Visit [http://localhost:3000/studio](http://localhost:3000/studio)
2. Login with your Sanity credentials
3. Start adding content:

### Required Content (Start Here)
- **Home Page**: Add hero title, description, features (minimum 4)
- **Services**: Add at least 3 services
- **Contact Info**: Add your email, phone, address

### Optional Content
- **About Page**: Mission, vision, team members
- **Testimonials**: Customer reviews
- **Site Settings**: Logo, colors

## Step 5: Preview Your Site

Visit [http://localhost:3000](http://localhost:3000) to see your changes!

## 🎉 You're Done!

Your website is now running with:
- ✅ Modern, animated design
- ✅ Easy content management
- ✅ Interactive contact form
- ✅ Map integration
- ✅ Fully responsive

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
```

## Need Help?

- **Setup Issues**: See [SETUP.md](SETUP.md)
- **Deployment**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Full Docs**: See [README.md](README.md)

## What's Next?

1. ✅ Customize content in Sanity Studio
2. ✅ Update colors in `tailwind.config.ts` (optional)
3. ✅ Add your logo and branding
4. ✅ Test on mobile and desktop
5. 🚀 Deploy to Vercel (see [DEPLOYMENT.md](DEPLOYMENT.md))

---

**Pro Tip**: Keep the Studio open in one tab and preview the site in another to see changes in real-time!

Happy building! 🎨✨
