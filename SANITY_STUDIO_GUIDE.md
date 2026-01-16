# Sanity Studio Access Guide

## How to Access Sanity Studio

Once your website is running, you can access the Sanity Studio CMS at:

```
http://localhost:3000/studio
```

## Setup Steps

### 1. Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Click "Get Started" or "Sign Up"
3. Sign up with:
   - Google account (recommended)
   - GitHub account
   - Or email/password

### 2. Create a Sanity Project

1. After signing in, click "Create Project"
2. Fill in:
   - **Project Name**: Bestway For Moving
   - **Dataset**: production (default)

3. Copy your **Project ID** (you'll need this!)

### 3. Get Your API Token

1. In your Sanity project dashboard
2. Go to **Settings** → **API**
3. Click **+ Add API Token**
4. Configure:
   - **Name**: Website Token
   - **Permissions**: **Editor** (allows read and write)
5. Click "Save"
6. **Copy the token immediately** (you won't see it again!)

### 4. Configure Environment Variables

Create a file named `.env.local` in your project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-16
SANITY_API_TOKEN=your_token_here
```

Replace:
- `your_project_id_here` with your actual Project ID
- `your_token_here` with your actual API Token

### 5. Add CORS Origin

In your Sanity project dashboard:

1. Go to **Settings** → **API** → **CORS Origins**
2. Click **Add CORS origin**
3. Add:
   ```
   http://localhost:3000
   ```
4. Check **Allow credentials**
5. Click "Save"

### 6. Start Your Development Server

```bash
npm run dev
```

### 7. Access the Studio

Open your browser and go to:
```
http://localhost:3000/studio
```

You should see the Sanity Studio login page!

## What You Can Edit in Sanity Studio

Once logged in, you'll see these sections:

### 📄 Home Page
- Hero title and description
- Features list (add/edit/remove)
- Statistics numbers
- CTA button text

### 🏢 Services
- Add new services
- Edit service details
- Set prices
- Add features lists
- Upload service images
- Reorder services

### ℹ️ About Page
- Company mission
- Company vision
- Team members (currently: Arif Khan, CEO)
- Company values

### 💬 Testimonials
- Add customer reviews
- Set ratings
- Upload customer photos
- Reorder testimonials

### 📞 Contact Info
- Update phone number
- Update email address
- Set office hours
- Add map coordinates
- Social media links

### ⚙️ Site Settings
- Site name
- Site description
- Upload logo
- Set brand colors

## Tips for Using Sanity Studio

### Adding Content

1. Click on any section in the left sidebar
2. Click the **"+"** button to add new content
3. Fill in the fields
4. Click **Publish** (green button)

### Editing Content

1. Click on the item you want to edit
2. Make your changes
3. Click **Publish** to save

### Uploading Images

1. Click on an image field
2. Drag & drop your image, or click to browse
3. Image will be automatically uploaded
4. Click **Publish** to save

### Best Practices

- ✅ **Always click Publish** after making changes
- ✅ Use high-quality images (recommended 1920x1080 for hero images)
- ✅ Keep descriptions concise and clear
- ✅ Test changes on your website after publishing
- ✅ Use the "Preview" feature before publishing

## Troubleshooting

### Can't Access Studio

**Problem**: Getting a 404 error at `/studio`

**Solutions**:
1. Make sure dev server is running: `npm run dev`
2. Check the URL: should be `http://localhost:3000/studio`
3. Clear browser cache and try again

### Can't Login

**Problem**: Login page doesn't appear or fails

**Solutions**:
1. Verify your Sanity account is created
2. Check that CORS origin is added in Sanity dashboard
3. Ensure Project ID is correct in `.env.local`
4. Try clearing browser cookies

### Changes Don't Appear

**Problem**: Published changes don't show on website

**Solutions**:
1. Refresh the page (Ctrl+R or Cmd+R)
2. Clear browser cache
3. Restart dev server
4. Check that you clicked "Publish" (not just save draft)

### Build Errors

**Problem**: Getting module errors when building

**Solutions**:
1. Ensure all packages are installed:
   ```bash
   npm install
   ```
2. Delete `.next` folder and rebuild:
   ```bash
   rm -rf .next
   npm run build
   ```

## Quick Reference

### Studio URL
```
http://localhost:3000/studio
```

### Your Contact Details
- **Email**: Bestwaypackingandmoving.Com
- **Phone**: +971 55 611 4348
- **Location**: Al Ain, Abu Dhabi, UAE
- **Facebook**: https://www.facebook.com/share/1GHJ8ASPFp/

### Current Team
- **Arif Khan** - CEO

### Map Coordinates (Al Ain)
- **Latitude**: 24.2075
- **Longitude**: 55.7447

## Video Tutorial

For a visual guide, Sanity has great video tutorials:
- [Sanity Studio Introduction](https://www.sanity.io/docs/sanity-studio)
- [Content Management Basics](https://www.sanity.io/docs/content-modelling)

## Support

Need help with Sanity?
- Sanity Documentation: [sanity.io/docs](https://www.sanity.io/docs)
- Sanity Community: [slack.sanity.io](https://slack.sanity.io)

---

**Your CMS is ready!** Start adding your moving company's content and watch it appear on your website instantly! 🎨✨
