# Quick Start Guide - Portfolio Website

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd portfolio
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Your portfolio will open at: **http://localhost:5173/**

### Step 3: Explore
- Click navigation buttons to jump to sections
- Test all links (GitHub, LinkedIn, Email)
- Check responsive design (resize browser or use DevTools)

## 📋 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

## 🌐 Deploying Your Portfolio

### Option 1: Netlify (Easiest)
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy!

### Option 2: Vercel
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your project
4. Vercel auto-detects Vite
5. Click Deploy
6. Done!

### Option 3: GitHub Pages
```bash
npm run build
# Upload the 'dist' folder to GitHub Pages
```

## ✏️ Updating Your Content

All content is in one file: `src/data/cvData.ts`

To update anything:
1. Open `src/data/cvData.ts`
2. Edit the information
3. Save and refresh browser (dev server auto-reloads)

Example - Update your title:
```typescript
title: "Your New Title Here",
```

## 🎨 Customizing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#1F2937',    // Main color (dark gray)
  secondary: '#374151',  // Secondary color
  accent: '#3B82F6',     // Highlight color (blue)
  light: '#F9FAFB',      // Light background
}
```

Then save and refresh.

## 📱 Testing Mobile View

In development:
1. Open DevTools (F12 or Cmd+Option+I)
2. Click mobile icon (top left)
3. Choose "iPhone 12" or "Responsive"
4. Drag to resize and test

The portfolio is fully responsive!

## 🔗 Updating Social Links

In `src/data/cvData.ts`:
```typescript
github: "https://your-github-url",
linkedin: "https://your-linkedin-url",
email: "your-email@example.com",
phone: "+1-234-567-8900",
```

## 📸 Favicon

The favicon is in `public/favicon.svg`. Replace it with your own SVG or image.

## 🐛 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Node modules issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
npm run lint
# Fix any issues shown
npm run build
```

## 📊 Production Build

When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with optimized files. Upload this folder to your hosting.

**Production Bundle**: ~67 KB (gzipped)
- Fast loading
- Optimized for all devices
- No build time on client

## ✨ Features Summary

- ✅ Professional design
- ✅ Mobile responsive
- ✅ Fast performance
- ✅ Easy to update
- ✅ SEO optimized
- ✅ Accessible design
- ✅ No external dependencies
- ✅ Production ready

## 📚 Documentation

For detailed info, see:
- `README.md` - Full documentation
- `VERIFICATION.md` - Requirements checklist

## 🎯 What's Included

✅ 8 sections with all your CV info
✅ Responsive design (mobile, tablet, desktop)
✅ Working navigation
✅ Social media links
✅ Contact information
✅ Professional styling
✅ Tailwind CSS framework
✅ TypeScript safety

## 💡 Tips

1. **Keep it Updated** - Edit `cvData.ts` whenever your info changes
2. **Custom Domain** - After deploying, add a custom domain in your hosting
3. **SEO** - Update meta tags in `index.html` if needed
4. **Colors** - Experiment with `tailwind.config.js` for branding
5. **Favicon** - Replace `public/favicon.svg` with your own

## 🤝 Support

Need help?
1. Check the full README.md
2. Review VERIFICATION.md for quality checklist
3. Check Vite docs: https://vite.dev
4. Check React docs: https://react.dev
5. Check Tailwind docs: https://tailwindcss.com

---

**You're all set!** 🎉

Enjoy your professional portfolio website!
