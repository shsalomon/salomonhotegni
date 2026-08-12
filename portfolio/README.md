# Personal Portfolio Website

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS, showcasing the professional journey, technical skills, projects, and achievements of a Machine Learning Engineer and PhD candidate.

## Overview

This portfolio presents:
- **Professional Experience** - Research scientist and ML engineering roles
- **Technical Skills** - Organized by category (ML, Programming, Tools, Languages)
- **Projects** - Key machine learning and software engineering projects
- **Education** - Academic credentials from top institutions
- **Publications** - Research publications at ICLR, ICML, IJCNN, and ICML
- **Achievements** - Conference talks, posters, teaching, and certifications
- **Contact** - Direct links to email, GitHub, and LinkedIn

## Features

✨ **Modern Design**
- Clean, minimalist interface with professional typography
- Responsive design for desktop, tablet, and mobile
- Smooth scrolling and navigation
- Subtle hover effects and animations
- Professional color scheme with accessible contrast

🚀 **Performance**
- Fast loading with optimized build (65.66 kB gzipped)
- Vite for rapid development and production builds
- Tailwind CSS for efficient styling

📱 **Responsive Layout**
- Mobile-first design approach
- Tablet and desktop optimized layouts
- Adaptive navigation (desktop menu + mobile dropdown)

♿ **Accessibility**
- Semantic HTML structure
- ARIA labels on interactive elements
- Color contrast compliant with WCAG standards
- Keyboard-navigable interfaces

🔍 **SEO Optimized**
- Meta tags for social media sharing
- Descriptive page title and metadata
- Semantic HTML markup

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Linting**: Oxlint

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Navigation bar and hero section
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills organized by category
│   │   ├── Experience.tsx      # Professional experience timeline
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── Education.tsx       # Education history
│   │   ├── Achievements.tsx    # Publications, awards, certifications
│   │   ├── Contact.tsx         # Contact information
│   │   └── index.ts            # Component exports
│   ├── data/
│   │   └── cvData.ts           # CV data (single source of truth)
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Project dependencies
```

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm 7+ installed

### Quick Start

1. **Navigate to the portfolio directory:**
```bash
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build Locally

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module reloading |
| `npm run build` | Build for production (TypeScript + Vite optimization) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint for code quality |

## Component Overview

### Navigation
- Fixed navigation bar with active section highlighting
- Logo/initials that link to hero section
- Responsive design (desktop navigation + mobile dropdown)
- Direct links to all portfolio sections

### Hero Section
- Professional name and title
- Short introduction from CV
- Call-to-action buttons:
  - View Projects
  - Contact Me
  - Download CV
- Social links (GitHub, Email, LinkedIn)

### About Section
- Comprehensive professional summary
- Background information
- Research interests and focus areas

### Skills Section
- Organized skill categories:
  - Programming Languages
  - Applied ML
  - Ranking & Personalization
  - ML Systems & Research Engineering
  - Languages
- Interactive skill tags with hover effects

### Experience Section
- Professional timeline with company, title, dates
- Location information
- Bullet points describing responsibilities and achievements
- Card-based layout with hover effects

### Projects Section
- Featured projects with descriptions
- Technology tags for each project
- Key achievements highlighted
- Year badges

### Education Section
- Degree, institution, dates, location
- Field of study
- Additional notes (scholarships, distinctions)

### Achievements Section
- **Publications**: Research papers with venue information
- **Open Source**: Links to PyPI packages
- **Professional Achievements**: Talks, posters, teaching
- **Certifications**: Courses and learning completed

### Contact Section
- Email with mailto link
- Phone number with tel link
- Location
- Social media links (GitHub, LinkedIn)
- Call-to-action message

## Data Management

All personal and professional information is stored in `src/data/cvData.ts`, serving as the single source of truth. To update the portfolio:

1. Edit `src/data/cvData.ts` with new information
2. Components automatically reflect changes
3. No manual component updates needed

## Customization

### Colors
Modify the Tailwind theme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#1F2937',      // Dark gray
  secondary: '#374151',    // Medium gray
  accent: '#3B82F6',       // Blue
  light: '#F9FAFB',        // Off-white
}
```

### Typography
Font settings are in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

### Spacing & Layout
All spacing uses Tailwind's default scale. Adjust padding, margins, and gaps in component files or extend Tailwind config.

## Performance Optimization

- **Gzipped CSS**: 1.14 kB
- **Gzipped JavaScript**: 65.66 kB
- **Total Bundle**: ~67 kB
- **Development Build Time**: ~500ms
- **Production Build Time**: ~200ms

## Mobile Responsiveness

The portfolio is fully responsive with breakpoints at:
- **Mobile**: < 768px (md breakpoint)
- **Desktop**: 768px+

Navigation adapts from desktop menu to mobile dropdown. All sections use responsive grid layouts (single column on mobile, multi-column on desktop).

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML elements (`<section>`, `<nav>`, `<article>`)
- ARIA labels on interactive elements
- Color contrast ratios meeting WCAG AA standards
- Keyboard-navigable interface
- Proper heading hierarchy

## SEO Meta Tags

- Title: `Sedjro Salomon Hotegni - Machine Learning Engineer & PhD Candidate`
- Description: Professional summary with key qualifications
- Keywords: Machine Learning, AI, PyTorch, Research, Computer Science
- Open Graph tags for social sharing

## Deployment

### Static Hosting (GitHub Pages, Netlify, Vercel)

1. **Build the project:**
```bash
npm run build
```

2. **Deploy the `dist/` directory:**

**GitHub Pages:**
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

**Netlify:**
- Connect your GitHub repo
- Set build command: `npm run build`
- Set publish directory: `dist`

**Vercel:**
- Import project from GitHub
- Framework: Vite
- Auto-deploy on push

## Known Limitations

- CV file download button is placeholder (integrate with actual CV file)
- Email and phone links work as direct contact only (no form validation)
- No dark mode toggle (can be added via Tailwind class strategy)

## Future Enhancements

- [ ] Actual CV file download functionality
- [ ] Dark mode toggle
- [ ] Blog/articles section
- [ ] Search functionality
- [ ] Analytics integration
- [ ] Form validation for contact section
- [ ] Animation library for enhanced effects
- [ ] Multi-language support

## License

Personal use. Feel free to fork and customize for your own portfolio.

## Contact

- **Email**: salomonhotegni00@gmail.com
- **GitHub**: https://github.com/salomonhotegni
- **LinkedIn**: https://linkedin.com/in/sedjro-salomon-hotegni

---

Built with ❤️ using React, TypeScript, and Tailwind CSS.

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
