'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is this blog about?',
    answer:
      'This blog shares articles on technology, programming, and productivity tips.',
  },
  {
    question: 'How often is new content published?',
    answer: 'New posts are published weekly, every Monday and Thursday.',
  },
  {
    question: 'Can I contribute articles?',
    answer:
      'Yes! Please contact us via the Contact page to submit your articles.',
  },
  {
    question: 'Is there a newsletter I can subscribe to?',
    answer:
      'Yes, subscribe with your email to get updates directly in your inbox.',
  },
  {
    question: 'How do I report issues or bugs?',
    answer:
      'You can report any issues by emailing support@yourblog.com or using the contact form.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-center text-black">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-200">
            <button
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full py-4 font-semibold text-left text-gray-800 focus:outline-none"
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndex === i ? 'max-h-40 mt-2' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
