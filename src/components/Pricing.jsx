const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for getting started',
    price: 0,
    period: 'month',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    cta: 'Get Started Free',
    highlighted: false,
    ctaStyle:
      'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
  },
  {
    name: 'Pro',
    tagline: 'Best for professionals',
    price: 29,
    period: 'month',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
    ctaStyle: 'bg-white text-purple-700 hover:bg-purple-50 font-bold',
  },
  {
    name: 'Enterprise',
    tagline: 'For teams and businesses',
    price: 99,
    period: 'month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    ctaStyle:
      'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
  },
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-purple-500 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const Pricing = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-purple-700 to-violet-700 text-white shadow-2xl shadow-purple-300 scale-105'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Most Popular badge */}
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full shadow">
                  {plan.badge}
                </span>
              )}

              {/* Plan header */}
              <div>
                <h3
                  className={`text-xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlighted ? 'text-purple-200' : 'text-gray-500'
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span
                  className={`text-4xl font-extrabold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm font-medium ${
                    plan.highlighted ? 'text-purple-200' : 'text-gray-400'
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    {plan.highlighted ? (
                      <svg
                        className="w-4 h-4 text-purple-200 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    <span className={plan.highlighted ? 'text-purple-100' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-auto w-full py-3 rounded-2xl font-semibold text-sm transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
