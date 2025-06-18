'use client';

import { useEffect, useState } from 'react';

export default function NewsTicker() {
  const [headlines, setHeadlines] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  const apiKey = '48d233067afe45ed9c82f4b813d1ff82'; // Your NewsAPI key

  const fetchNews = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?language=en&pageSize=15&apiKey=${apiKey}`
      );
      const data = await res.json();
      setHeadlines(data.articles || []);
    } catch (err) {
      console.error('Failed to fetch news:', err);
      setHeadlines([]);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 10 * 60 * 1000); // refresh every 10 min
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-50 p-4 text-white bg-gray-900 border-b-4 border-red-600">
      {/* Heading */}
      <div className="mb-2">
        <h2 className="text-xl font-bold">🌐 International News Headlines</h2>
        <p className="text-sm text-gray-400">
          Stay updated with the latest global news
        </p>
      </div>

      {/* Pause button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="px-3 py-1 mb-3 bg-red-600 rounded hover:bg-red-700"
      >
        {isPaused ? '▶️ Resume' : '⏸️ Pause'}
      </button>

      {/* News ticker */}
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className={`inline-flex gap-12 text-sm font-medium tracking-wide ${
            isPaused ? '' : 'animate-marquee'
          }`}
        >
          {headlines.length > 0 ? (
            headlines.map((news, idx) => (
              <span key={idx} className="inline-block">
                🔴 {news.title}
              </span>
            ))
          ) : (
            <span>Loading latest international news...</span>
          )}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 160s linear infinite;
        }
      `}</style>
    </section>
  );
}
