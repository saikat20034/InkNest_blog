// components/BlogStats.jsx
'use client';

import CountUp from 'react-countup';

const BlogStats = () => {
  const stats = [
    { label: 'Posts Published', value: 100 },
    { label: 'Total Visitors', value: 25000 },
    { label: 'Subscribers', value: 1200 },
  ];

  const milestones = [
    { date: 'Jan 2023', event: 'Blog Launched' },
    { date: 'Apr 2023', event: '10K Visitors Reached' },
    { date: 'Aug 2023', event: '100 Posts Milestone' },
    { date: 'Jan 2024', event: 'Newsletter Started' },
  ];

  return (
    <section className="px-6 py-16 text-gray-800 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">Blog Stats & Milestones</h2>

        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 transition-transform bg-gray-100 shadow-md rounded-xl hover:scale-105"
            >
              <h3 className="text-4xl font-extrabold text-blue-600">
                <CountUp end={item.value} duration={2} separator="," />
              </h3>
              <p className="mt-2 text-lg font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-4 text-2xl font-semibold">Milestone Timeline</h3>
        <ul className="max-w-2xl pl-6 mx-auto space-y-4 text-left border-l-4 border-blue-500">
          {milestones.map((m, i) => (
            <li key={i} className="relative">
              <span className="absolute w-4 h-4 bg-blue-500 border-4 border-white rounded-full -left-3 top-1"></span>
              <div>
                <span className="font-bold">{m.date}</span>: {m.event}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogStats;
