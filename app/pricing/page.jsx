export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Best for beginners and casual bloggers.",
      features: [
        "Basic blog posting",
        "AI summarization (limited)",
        "Responsive layout",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: "$9/month",
      description: "For professional bloggers and small teams.",
      features: [
        "Unlimited blog posts",
        "Advanced AI summarization",
        "Auto language translation",
        "SEO tools",
        "Email support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For enterprises and large content platforms.",
      features: [
        "All Pro features",
        "Custom AI model integration",
        "Premium SEO insights",
        "Dedicated support manager",
        "Onboarding and training",
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16 text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto mb-16 text-center max-w-7xl">
        <h1 className="mb-4 text-4xl font-bold">Pricing Plans</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Choose a plan that fits your blogging needs.
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="p-8 transition bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg"
          >
            <h2 className="mb-2 text-2xl font-bold">{plan.name}</h2>
            <p className="mb-4 text-3xl font-semibold">{plan.price}</p>
            <p className="mb-6 text-gray-600 dark:text-gray-400">{plan.description}</p>
            <ul className="mb-6 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full px-4 py-2 mt-auto font-semibold text-white transition bg-blue-600 rounded hover:bg-blue-700">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
