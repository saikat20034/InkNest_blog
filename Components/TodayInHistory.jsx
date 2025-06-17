'use client';

import { useEffect, useState } from 'react';

const TodayInHistory = () => {
  const [events, setEvents] = useState([]);
  const [dateLabel, setDateLabel] = useState('');

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    // Format date for display
    setDateLabel(
      today.toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    );

    // Fetch historical data
    fetch(`https://history.muffinlabs.com/date/${month}/${day}`)
      .then((res) => res.json())
      .then((data) => {
        const topEvents = data?.data?.Events?.slice(0, 5) || [];
        setEvents(topEvents);
      })
      .catch((err) => console.error('Failed to fetch history data:', err));
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="px-4 py-16 text-gray-800 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl" data-aos="fade-down">
          Today in History
        </h2>
        <p className="mb-10 text-lg font-semibold text-blue-600" data-aos="fade-up">
          {dateLabel}
        </p>

        <ul className="max-w-2xl mx-auto space-y-6 text-left">
          {events.map((event, i) => (
            <li
              key={i}
              className="p-5 bg-white border-l-4 border-blue-500 shadow-lg rounded-xl"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span className="font-bold">{event.year}:</span> {event.text}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm italic text-gray-500" data-aos="fade-up">
          Source: Wikipedia via Muffin Labs API
        </p>
      </div>
    </section>
  );
};

export default TodayInHistory;
