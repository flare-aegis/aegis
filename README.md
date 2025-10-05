# Aegis Landing Page

A modern, responsive landing page for Aegis - an AI-powered verification and enrichment layer for the Flare Data Connector.

## Overview

Aegis transforms the Flare Data Connector from a "dumb pipe" into a programmable, high-integrity data pipeline using specialized AI agents that can verify, cross-reference, and enrich data before attestation.

## Features

- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Component Architecture**: Modular and maintainable code structure
- **Performance Optimized**: Fast loading and smooth interactions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aegis-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
aegis-landing/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main landing page component
├── public/                  # Static assets
├── .next/                   # Next.js build output
├── node_modules/           # Dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Project dependencies and scripts
```

## Key Sections

### Hero Section
- Compelling headline highlighting AI-powered data verification
- Clear value proposition for Flare Network developers
- Call-to-action buttons for getting started

### Problem/Solution
- Explains the limitations of current oracle systems
- Presents Aegis as the solution with multi-source verification

### Architecture Overview
- Hybrid on-chain/off-chain architecture explanation
- Visual breakdown of system components

### Agent Marketplace
- Showcase of available AI agents
- Categories and use cases for each agent type

### Developer Experience
- Code examples and workflow definitions
- SDK integration information
- Agent creation guidelines

### Ecosystem Value
- Benefits for different stakeholder groups
- Monetization and incentive models

## Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- **Flare Colors**: Orange gradient representing Flare Network branding
- **Primary Colors**: Blue gradient for accents and CTAs
- **Neutral Colors**: Slate tones for backgrounds and text

### Content
All content can be easily modified in the main `page.tsx` file. The component is structured with clear sections that can be updated independently.

### Animations
Framer Motion animations can be customized by modifying the `motion` components and their properties throughout the page.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project generates a static export that can be deployed to any static hosting service.

## Performance

- **Lighthouse Score**: Optimized for 90+ scores across all metrics
- **Core Web Vitals**: Excellent LCP, FID, and CLS scores
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **SEO**: Comprehensive meta tags and semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please reach out to the Aegis team or create an issue in this repository.
