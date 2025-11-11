'use client';

import { useState } from 'react';

export default function VideoDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setVideoData(null);
    
    // Validate URL
    if (!url.trim()) {
      setError('Please enter an Instagram URL');
      return;
    }

    if (!url.includes('instagram.com')) {
      setError('Please enter a valid Instagram URL');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to fetch video');
      }

      setVideoData(data.data);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Failed to fetch video. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (videoData && videoData.videoUrl) {
      window.open(videoData.videoUrl, '_blank');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Instagram video URL here..."
            className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-800 text-lg transition-all duration-300"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 instagram-gradient text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Loading...
              </span>
            ) : (
              'Download'
            )}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        </div>
      )}

      {/* Video Preview */}
      {videoData && (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 animate-fadeIn">
          {/* Thumbnail */}
          {videoData.thumbnail && (
            <div className="relative w-full aspect-square bg-gray-100">
              <img
                src={videoData.thumbnail}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          )}

          {/* Video Info */}
          <div className="p-6">
            {videoData.username && (
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full instagram-gradient flex items-center justify-center text-white font-bold mr-3">
                  {videoData.username.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold text-gray-800">@{videoData.username}</span>
              </div>
            )}

            {videoData.caption && (
              <p className="text-gray-700 mb-4 line-clamp-3">{videoData.caption}</p>
            )}

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full py-4 instagram-gradient text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Video
            </button>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!videoData && !loading && (
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">How to use:</h3>
          <ol className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full instagram-gradient text-white text-sm font-bold mr-3 flex-shrink-0">1</span>
              <span>Open Instagram and find the video you want to download</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full instagram-gradient text-white text-sm font-bold mr-3 flex-shrink-0">2</span>
              <span>Copy the video URL from your browser or share button</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full instagram-gradient text-white text-sm font-bold mr-3 flex-shrink-0">3</span>
              <span>Paste the URL in the box above and click Download</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full instagram-gradient text-white text-sm font-bold mr-3 flex-shrink-0">4</span>
              <span>Preview the video and click Download Video button</span>
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}
