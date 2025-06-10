# Tinda - Mobile Payments in DR Congo 🇨🇩

<div align="center">
  <img src="https://via.placeholder.com/200x200?text=Tinda+Logo" alt="Tinda Logo" width="120" height="120">
  
  **A modern, mobile-first FinTech landing page built with Next.js 14, TypeScript, and Tailwind CSS.**
  
  *Empowering financial inclusion across the Democratic Republic of Congo*

  [![Demo](https://img.shields.io/badge/Demo-Live%20Site-FF6A00?style=for-the-badge)](https://tinda.cd)
  [![Status](https://img.shields.io/badge/Status-Production-success?style=for-the-badge)](https://tinda.cd)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
</div>

---

## 📱 App Demo & Screenshots

### Mobile App Demo
<div align="center">
  <video width="300" controls>
    <source src="./demo/tinda-app-demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  
  *Complete walkthrough of the Tinda mobile app features*
</div>

### Key Features Demo
<table>
  <tr>
    <td align="center">
      <img src="./demo/send-money-demo.gif" alt="Send Money Demo" width="250">
      <br><strong>💸 Send Money</strong>
    </td>
    <td align="center">
      <img src="./demo/buy-airtime-demo.gif" alt="Buy Airtime Demo" width="250">
      <br><strong>📱 Buy Airtime</strong>
    </td>
    <td align="center">
      <img src="./demo/qr-payment-demo.gif" alt="QR Payment Demo" width="250">
      <br><strong>📷 QR Payments</strong>
    </td>
  </tr>
</table>

## 🖼️ Landing Page Screenshots

### Desktop Views
<div align="center">
  <img src="./screenshots/desktop-hero.png" alt="Desktop Hero Section" width="100%">
  <p><em>Hero section with compelling value proposition</em></p>
</div>

<table>
  <tr>
    <td>
      <img src="./screenshots/desktop-features.png" alt="Features Section" width="100%">
      <p align="center"><strong>Features Overview</strong></p>
    </td>
    <td>
      <img src="./screenshots/desktop-how-it-works.png" alt="How It Works" width="100%">
      <p align="center"><strong>How It Works</strong></p>
    </td>
  </tr>
  <tr>
    <td>
      <img src="./screenshots/desktop-testimonials.png" alt="Testimonials" width="100%">
      <p align="center"><strong>Customer Testimonials</strong></p>
    </td>
    <td>
      <img src="./screenshots/desktop-pricing.png" alt="Pricing Plans" width="100%">
      <p align="center"><strong>Pricing Plans</strong></p>
    </td>
  </tr>
</table>

### Mobile Views
<table>
  <tr>
    <td align="center">
      <img src="./screenshots/mobile-hero.png" alt="Mobile Hero" width="250">
      <br><strong>Hero Section</strong>
    </td>
    <td align="center">
      <img src="./screenshots/mobile-features.png" alt="Mobile Features" width="250">
      <br><strong>Features</strong>
    </td>
    <td align="center">
      <img src="./screenshots/mobile-pricing.png" alt="Mobile Pricing" width="250">
      <br><strong>Pricing</strong>
    </td>
  </tr>
</table>

## 🚀 Features

- **📱 Mobile-First Design**: Optimized for mobile devices with responsive desktop layouts
- **⚡ Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **🎨 Brand-Focused**: Custom orange (#FF6A00) and black color scheme with Poppins/Inter fonts
- **✨ Interactive Components**: Smooth animations, hover effects, and micro-interactions
- **🔍 SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **📦 PWA Ready**: Progressive Web App manifest and service worker support
- **♿ Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **🌍 Localization**: Multi-language support (French, Lingala, Swahili)
- **🔒 Security First**: SSL encryption and secure payment processing
- **📊 Analytics Ready**: Google Analytics and conversion tracking

## 🎨 Design System

### 🎨 Colors
```css
:root {
  --primary: #FF6A00;      /* Vibrant Orange */
  --secondary: #000000;    /* Pure Black */
  --background: #FFFFFF;   /* Clean White */
  --accent: #FFE6D0;       /* Light Orange Wash */
  --text: #333333;         /* Charcoal */
  --muted: #6B7280;        /* Gray 500 */
  --border: #E5E7EB;       /* Gray 200 */
}
```

### 📝 Typography
- **Headings**: Poppins (700-800 weight)
- **Body Text**: Inter (400-500 weight)
- **Buttons**: Poppins (600 weight)

### 🎭 Styling
- **Border Radius**: 20px for cards, 12px for buttons
- **Hover Effects**: Scale 1.04x with orange glow
- **Shadows**: Subtle drop-shadows throughout
- **Animations**: Smooth transitions (300ms ease-in-out)

## 🛠️ Tech Stack

<table>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js">
      <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React">
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
    </td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
      <img src="https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcnui&logoColor=white" alt="shadcn/ui">
    </td>
  </tr>
  <tr>
    <td><strong>Icons & Fonts</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Lucide-000000?style=flat&logo=lucide&logoColor=white" alt="Lucide">
      <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=google-fonts&logoColor=white" alt="Google Fonts">
    </td>
  </tr>
  <tr>
    <td><strong>Deployment</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel">
    </td>
  </tr>
</table>

## 📱 Website Sections

1. **🏠 Sticky Navigation** - Transparent to orange transition on scroll
2. **🎯 Hero Section** - Full viewport height with phone mockup and CTA
3. **⭐ Features** - Three key features with animated cards
4. **📋 How It Works** - 3-step timeline process with icons
5. **🔒 Trust & Security** - Security features on black background
6. **💬 Testimonials** - Auto-rotating customer quotes
7. **💰 Pricing** - Personal vs Business plans comparison
8. **❓ FAQ** - Collapsible accordion with common questions
9. **📢 CTA Banner** - Gradient call-to-action section
10. **📄 Footer** - Links, social media, and legal information

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **pnpm** (recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tinda/tinda-website.git
   cd tinda-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open browser**:
   Navigate to `http://localhost:3000`

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Export static files (if needed)
npm run export
```

## 🌍 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build && npm run export`
- **AWS S3**: Static export with CloudFront
- **DigitalOcean**: App Platform deployment

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ Performance, 100 Accessibility
- **Core Web Vitals**: All metrics in green
- **Page Load Time**: < 2 seconds on 3G
- **Bundle Size**: < 100KB gzipped

## 🔧 Development

### Project Structure
```
tinda-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Page sections
│   └── common/           # Shared components
├── lib/                  # Utilities and helpers
├── public/              # Static assets
│   ├── images/          # Images and logos
│   ├── demo/            # Demo videos and GIFs
│   └── screenshots/     # Landing page screenshots
├── styles/              # Additional styles
└── types/               # TypeScript definitions
```

### Scripts
```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run type-check      # TypeScript check
```

## 📸 Creating Screenshots & Demos

### Taking Screenshots
1. **Desktop**: Use browser dev tools at 1920x1080
2. **Mobile**: Use device simulation at 375x812 (iPhone X)
3. **Tool**: Use [CleanShot X](https://cleanshot.com/) or similar

### Recording Demos
1. **Screen Recording**: Use QuickTime (Mac) or OBS Studio
2. **GIF Creation**: Use [Gifski](https://gif.ski/) for high-quality GIFs
3. **Video Optimization**: Compress with FFmpeg

```bash
# Create optimized GIF
ffmpeg -i demo.mp4 -vf "fps=15,scale=375:-1" -loop 0 demo.gif

# Compress video
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
```

## 🤝 Contributing

This is a proprietary project for Tinda. For collaboration opportunities:

- **Email**: dev@tinda.cd
- **Press**: press@tinda.cd
- **Support**: support@tinda.cd

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting with Prettier
- Write meaningful commit messages
- Test on multiple devices and browsers
- Optimize for performance and accessibility

## 📄 License

© 2024 Tinda Technologies SARL. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## 🌟 Acknowledgments

- **🎨 Design**: Inspired by modern FinTech leaders
- **🔧 Tech**: Built with the amazing Next.js and React ecosystem
- **🇨🇩 Community**: Serving the people of Democratic Republic of Congo
- **🤝 Partners**: Telecom operators and financial institutions

---

<div align="center">
  <strong>Tinda - Simplifying Mobile Payments in DR Congo 🇨🇩</strong>
  
  <p>Built with ❤️ by the Tinda Team</p>
  
  <a href="https://tinda.cd">🌐 Visit Website</a> • 
  <a href="mailto:press@tinda.cd">📧 Contact</a> • 
  <a href="https://github.com/tinda">💻 GitHub</a>
</div>