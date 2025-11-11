import './globals.css'

export const metadata = {
  title: 'Moboinsta - Instagram Video Downloader',
  description: 'Download Instagram videos instantly. Free, fast, and easy to use.',
  keywords: 'instagram, video, downloader, moboinsta, free, online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
