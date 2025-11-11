# Moboinsta Frontend

Frontend for Moboinsta Instagram Video Downloader built with Next.js and Tailwind CSS.

## 🚀 Setup

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.example .env.local
```

3. Configure environment variables in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variable in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL` = Your Railway backend URL

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js
4. Add environment variable:
   - `NEXT_PUBLIC_API_URL` = Your Railway backend URL
5. Deploy!

## 🎨 Features

- Modern, responsive UI with Tailwind CSS
- Instagram-inspired gradient design
- Real-time video preview
- One-click download
- Error handling
- Loading states
- Mobile-friendly

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── page.js          # Home page
│   │   ├── layout.js        # Root layout
│   │   └── globals.css      # Global styles
│   └── components/
│       └── VideoDownloader.js  # Main component
├── public/                  # Static files
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🔧 Environment Variables

- `NEXT_PUBLIC_API_URL` - Backend API URL (required)

## 📝 Notes

- Make sure backend is running before testing
- Update `NEXT_PUBLIC_API_URL` with your Railway backend URL for production
- The app uses Next.js 14 with App Router
