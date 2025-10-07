# Nikhil Verma - Portfolio Website

A premium, luxury portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring modern animations and professional design.

## 🚀 Features

### ✨ Premium Design

- **Dark Theme**: Elegant dark color scheme with gradient accents
- **Glass Morphism**: Modern glassmorphism effects throughout the design
- **Gradient Text**: Beautiful gradient text effects for headings
- **Custom Animations**: Smooth scroll animations and transitions using Framer Motion
- **Particle Background**: Interactive particle system for visual appeal

### 📱 Responsive Design

- **Mobile First**: Fully responsive design that works on all devices
- **Cross-browser Compatible**: Tested on modern browsers
- **Touch Friendly**: Optimized for touch interactions

### 🎨 Sections

1. **Hero Section**: Animated introduction with call-to-action buttons
2. **About Section**: Professional summary with contact information
3. **Experience Section**: Work experience timeline with achievements
4. **Projects Section**:
   - Development projects with live demo links
   - Testing projects with descriptions
5. **Skills Section**: Technical skills organized by category
6. **Contact Section**: Contact form and social media links

### 🔧 Technical Features

- **Resume Download**: PDF resume generation using React PDF
- **Loading Screen**: Professional loading animation
- **Smooth Scrolling**: Enhanced user experience with smooth scroll behavior
- **SEO Optimized**: Meta tags and Open Graph for social sharing
- **Performance Optimized**: Fast loading and smooth animations

### 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **PDF Generation**: React PDF
- **Deployment**: Vercel Ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main portfolio page
│   └── components/
│       ├── LoadingScreen.tsx    # Loading animation component
│       ├── ParticleBackground.tsx # Particle system component
│       └── ResumePDF.tsx        # PDF resume component
├── public/                      # Static assets
└── package.json
```

## 🎨 Customization

### Colors

The color scheme can be customized in `src/app/globals.css`:

```css
:root {
  --primary: #3b82f6; /* Blue */
  --secondary: #8b5cf6; /* Purple */
  --accent: #06b6d4; /* Cyan */
}
```

### Content

Update your information in `src/app/page.tsx`:

- Personal details in the Hero and About sections
- Work experience in the Experience section
- Projects in the Projects section
- Skills in the Skills section
- Contact information in the Contact section

### Resume

Modify the resume content in `src/components/ResumePDF.tsx` to match your information.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Mobile Optimization

The portfolio is fully optimized for mobile devices with:

- Touch-friendly navigation
- Responsive typography
- Optimized animations for mobile
- Fast loading on mobile networks

## 🔧 Performance Features

- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component for optimized images
- **Lazy Loading**: Components load as needed
- **Minimal Bundle**: Optimized bundle size

## 📞 Contact

- **Email**: jsnikhil00@gmail.com
- **Phone**: +91 6392848646
- **Location**: Gurgaon, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Nikhil Verma
