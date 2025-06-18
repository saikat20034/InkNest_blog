export default function FeaturesPage() {
  const features = [
    {
      title: 'AI Blog Summarizer',
      description:
        'Automatically summarize long blog articles with a single click.',
    },
    {
      title: 'Language Auto-Translation',
      description: 'Detect user language and translate content accordingly.',
    },
    {
      title: 'SEO Optimized',
      description: 'Boost your content visibility on search engines.',
    },
    {
      title: 'Dark Mode Support',
      description: 'User-friendly dark mode for better readability at night.',
    },
    {
      title: 'Responsive Layout',
      description: 'Perfect layout across mobile, tablet, and desktop screens.',
    },
    {
      title: 'Easy Markdown Support',
      description: 'Write blog posts using simple markdown syntax.',
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16 text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-center">Blog Features</h1>
        <p className="mb-12 text-center text-gray-600 dark:text-gray-300">
          Empower your blogging journey with modern features.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-transform duration-300 bg-white rounded-lg shadow dark:bg-gray-800 hover:shadow-xl hover:scale-105"
            >
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
