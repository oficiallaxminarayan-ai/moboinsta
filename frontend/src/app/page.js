import VideoDownloader from '@/components/VideoDownloader';

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Moboinsta
          </h1>
          <p className="text-xl text-white/90 font-light">
            Free Instagram Video Downloader
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 pb-12">
        <VideoDownloader />
      </div>

      {/* Info Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            About Moboinsta
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
            Moboinsta is a free Instagram video downloader. Paste your Instagram video URL and save it instantly. 
            No registration required, no hidden fees, just simple and fast video downloads.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 instagram-gradient rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Fast & Easy</h3>
              <p className="text-gray-600 text-sm">Download videos in seconds with just a few clicks</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 instagram-gradient rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">100% Free</h3>
              <p className="text-gray-600 text-sm">No registration, no fees, completely free to use</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 instagram-gradient rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Safe & Secure</h3>
              <p className="text-gray-600 text-sm">Your privacy is protected, no data stored</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-white/80">
          <p className="text-sm">
            © 2024 Moboinsta. All rights reserved. | Made with ❤️ for Instagram lovers
          </p>
          <p className="text-xs mt-2 text-white/60">
            Disclaimer: This tool is for personal use only. Please respect content creators' rights.
          </p>
        </div>
      </footer>
    </main>
  );
}
