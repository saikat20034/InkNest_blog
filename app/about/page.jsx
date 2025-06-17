'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-16 text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="mb-6 text-4xl font-bold text-center">About Us</h1>
        <p className="mb-10 text-lg text-center">
          Welcome to <strong>Our Company</strong> – where innovation meets passion. We're committed to creating solutions that make life better.
        </p>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our mission is to empower people with intuitive and reliable technology. We strive to make impactful digital experiences
            through user-focused design, seamless performance, and innovative thinking.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Meet the Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: 'Alice Johnson', role: 'CEO & Founder', img: '/Assets/fb profile.jpg' },
              { name: 'Mark Lee', role: 'CTO', img: '/team2.jpg' },
              { name: 'Sophia Kim', role: 'Lead Designer', img: '/team3.jpg' }
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="mx-auto mb-3 rounded-full shadow-md"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-semibold">Our Values</h2>
          <ul className="pl-6 space-y-2 text-gray-600 list-disc dark:text-gray-300">
            <li>🔍 Transparency and Trust</li>
            <li>💡 Innovation and Excellence</li>
            <li>🤝 Collaboration and Growth</li>
            <li>❤️ Passion for People and Product</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <h3 className="mb-2 text-xl font-semibold">Want to know more?</h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            We’d love to hear from you! Visit our <a href="/contact" className="text-blue-600 underline dark:text-blue-400">Contact Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
