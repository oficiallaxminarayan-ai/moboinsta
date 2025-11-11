# Moboinsta - Instagram Video Downloader

A full-stack web application to download Instagram videos instantly. Built with Next.js (frontend) and Express.js (backend).

## 🌟 Features

- ✅ Paste Instagram video URL
- ✅ Preview video with thumbnail and caption
- ✅ One-click download
- ✅ Responsive, modern UI
- ✅ Fast and free
- ✅ No registration required

## 🏗️ Project Structure

```
moboinsta/
├── frontend/          # Next.js frontend
│   ├── src/
│   │   ├── app/
│   │   └── components/
│   ├── package.json
│   └── README.md
├── backend/           # Express.js backend
│   ├── src/
│   │   ├── routes/
│   │   └── utils/
│   ├── package.json
│   └── README.md
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Start the server:
```bash
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## 🌐 Deployment

### Backend - Deploy to Railway

1. Create account on [Railway](https://railway.app)
2. Create new project
3. Connect your GitHub repository
4. Select `backend` folder as root directory
5. Add environment variables:
   - `PORT` (Railway sets automatically)
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://your-vercel-app.vercel.app`
6. Deploy!

Railway will automatically detect Node.js and deploy.

### Frontend - Deploy to Vercel

1. Create account on [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Set root directory to `frontend`
4. Add environment variable:
   - `NEXT_PUBLIC_API_URL=https://your-railway-app.railway.app`
5. Deploy!

Vercel will auto-detect Next.js and deploy.

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 📡 API Endpoints

### POST /api/download
Fetch Instagram video information.

**Request:**
```json
{
  "url": "https://www.instagram.com/p/VIDEO_ID/"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "thumbnail": "https://...",
    "caption": "Video caption",
    "videoUrl": "https://...",
    "username": "username",
    "timestamp": 1234567890
  }
}
```

### GET /api/health
Health check endpoint.

## 🛠️ Tech Stack

### Frontend
- Next.js 14
- React 18
- Tailwind CSS
- Fetch API

### Backend
- Node.js
- Express.js
- Axios
- CORS

## 📝 How to Use

1. Open the app in your browser
2. Copy an Instagram video URL
3. Paste it in the input box
4. Click "Download" button
5. Preview the video
6. Click "Download Video" to save

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## ⚠️ Disclaimer

This tool is for personal use only. Please respect content creators' rights and Instagram's terms of service.

## 🐛 Issues

If you encounter any issues, please create an issue on GitHub.

## 👨‍💻 Author

Built with ❤️ for Instagram lovers

---

**Note:** Make sure to update the `NEXT_PUBLIC_API_URL` in frontend and `FRONTEND_URL` in backend with your actual deployment URLs after deploying to Vercel and Railway.
