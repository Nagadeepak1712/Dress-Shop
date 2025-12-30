# Urban Threads - Modern Streetwear E-Commerce

A premium, modern streetwear e-commerce website built with React, TypeScript, and Vite.

## 🚀 Features

- **Home Page** - Hero slider, featured collections, best sellers, reviews
- **Shop Page** - Full product catalog with filtering and sorting
- **Product Detail** - Product gallery, size selection, add to cart
- **Design Lab** - Custom t-shirt designer
- **Lookbook** - Fashion photography gallery with lightbox
- **Story Page** - Brand history, mission, and values
- **Contact Page** - Contact form with business info
- **FAQ Page** - Accordion-style frequently asked questions
- **Returns Page** - Returns & exchanges policy
- **AI Stylist** - Chat assistant powered by Gemini AI

## 📁 Project Structure

```
urban-threads/
├── public/              # Static assets
├── components/          # React components
│   ├── AIStylist.tsx   # AI chat component
│   ├── ContactPage.tsx # Contact page
│   ├── FAQPage.tsx     # FAQ page
│   ├── LookbookPage.tsx# Lookbook gallery
│   ├── ReturnsPage.tsx # Returns policy
│   └── StoryPage.tsx   # Brand story
├── services/            # API services
│   └── geminiService.ts # Gemini AI integration
├── App.tsx             # Main application
├── constants.ts        # Products, reviews, hero data
├── types.ts            # TypeScript types
├── index.tsx           # Entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript config
├── vercel.json         # Vercel deployment config
└── package.json        # Dependencies
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Vercel Deployment

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variables:
   - `GEMINI_API_KEY`: Your Google Gemini API key (optional, for AI Stylist)
6. Click "Deploy"

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for AI Stylist | Optional |

## 🎨 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Lucide React
- **AI**: Google Gemini
- **Language**: TypeScript

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 📄 License

MIT License - feel free to use this project for your own purposes.
