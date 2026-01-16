# Deployment Guide - Bestway For Moving

This guide will walk you through deploying your website to Vercel.

## Pre-Deployment Checklist

Before deploying, make sure you have:

- ✅ A Sanity.io account and project set up
- ✅ Your Sanity Project ID and API Token
- ✅ A GitHub account (for connecting to Vercel)
- ✅ A Vercel account (free at vercel.com)

## Step 1: Set Up Sanity CMS

### Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and create a free account
2. Create a new project
3. Choose a project name (e.g., "Bestway For Moving")
4. Select a dataset name (use "production")
5. Note your **Project ID** - you'll need this later

### Generate API Token

1. In your Sanity project dashboard, go to **Settings** → **API**
2. Click **+ Add API Token**
3. Name it "Website Token"
4. Set permissions to **Editor** (for read/write access)
5. Copy the token - you'll need this for deployment

### Add CORS Origins

1. In Sanity dashboard, go to **Settings** → **API** → **CORS Origins**
2. Add these origins:
   - `http://localhost:3000` (for local development)
   - Your Vercel domain (after deployment, e.g., `https://your-site.vercel.app`)
   - `https://studio.sanity.io` (for Sanity Studio)

## Step 2: Push Code to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. **Add Environment Variables**:
   Click "Environment Variables" and add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-16
   SANITY_API_TOKEN=your_token_here
   ```

6. Click **"Deploy"**

7. Wait for deployment to complete (usually 2-3 minutes)

8. Your site will be live at `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and add environment variables when asked

5. Deploy to production:
```bash
vercel --prod
```

## Step 4: Update Sanity CORS

After deployment:

1. Go back to Sanity dashboard
2. Navigate to **Settings** → **API** → **CORS Origins**
3. Add your Vercel deployment URL (e.g., `https://your-site.vercel.app`)
4. Save changes

## Step 5: Populate Content

1. Visit your deployed site at `/studio` (e.g., `https://your-site.vercel.app/studio`)
2. Login with your Sanity credentials
3. Start adding content:
   - Go to **Home Page** and fill in hero content, features, and stats
   - Add **Services** with descriptions and pricing
   - Complete **About Page** with mission, vision, and team
   - Add **Testimonials** from customers
   - Fill in **Contact Information**
   - Update **Site Settings** with your logo and brand colors

## Step 6: Custom Domain (Optional)

To use your own domain:

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (can take 24-48 hours)

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | `abc123xyz` |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API version date | `2024-01-16` |
| `SANITY_API_TOKEN` | API token for write access | `sk...` |

## Troubleshooting

### Build Fails

- Check that all environment variables are set correctly
- Verify your Sanity Project ID is correct
- Check build logs in Vercel dashboard

### Content Not Showing

- Make sure you've added content in Sanity Studio
- Verify CORS origins are configured correctly
- Check that API token has proper permissions

### Map Not Loading

- Ensure `react-leaflet` and `leaflet` are installed
- Check browser console for errors
- Verify latitude/longitude values are correct

## Post-Deployment Tasks

1. **Test all pages** on the live site
2. **Add content** through Sanity Studio
3. **Test contact form** functionality
4. **Verify map** loads correctly
5. **Check mobile responsiveness**
6. **Test all animations**
7. **Configure analytics** (Google Analytics, if needed)

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. Make changes locally
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Your commit message"
git push
```
3. Vercel automatically builds and deploys
4. Changes go live in 2-3 minutes

## Support

For deployment issues:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Sanity Docs: [sanity.io/docs](https://www.sanity.io/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

🎉 **Congratulations!** Your website is now live!
