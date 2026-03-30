import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const steps = [
  {
    number: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: userIcon,
  },
  {
    number: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: packageIcon,
  },
  {
    number: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: rocketIcon,
  },
];

const Steps = () => {
  return (
    <section className="py-20 bg-gray-50/60" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get Started in 3 Steps</h2>
        <p className="section-subtitle">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step number bubble */}
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center mb-5 shadow-md shadow-purple-200 group-hover:scale-110 transition-transform duration-200">
                {step.number}
              </div>

              {/* Icon circle */}
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-purple-100 flex items-center justify-center mb-5 group-hover:shadow-purple-100 group-hover:shadow-lg transition-all duration-300 p-4">
                <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
