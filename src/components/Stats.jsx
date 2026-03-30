const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
];

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-violet-700 py-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center py-6 sm:py-0">
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {value}
              </span>
              <span className="mt-2 text-purple-200 text-sm font-medium tracking-wide uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
