# Moboinsta Backend API

Backend API for Moboinsta Instagram Video Downloader.

## 🚀 Setup

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## 📡 API Endpoints

### POST /api/download
Fetch Instagram video information.

**Request Body:**
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

**Response:**
```json
{
  "success": true,
  "message": "Moboinsta API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🚂 Deploy to Railway

1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Set environment variables:
   - `PORT` (Railway will set this automatically)
   - `FRONTEND_URL` (your Vercel frontend URL)
   - `NODE_ENV=production`
4. Deploy!

Railway will automatically detect the Node.js app and deploy it.

## 🔧 Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS (use * for all origins)

## 📝 Notes

- CORS is configured to allow requests from the frontend
- The API uses Instagram's public endpoints
- Rate limiting may apply based on Instagram's policies
