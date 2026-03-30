import bannerImg from '../assets/banner.png';
import playIcon from '../assets/play.png';

const Banner = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white via-purple-50/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Supercharge Your{' '}
              <span className="text-gradient">Digital Workflow</span>
            </h1>

            <p className="mt-5 text-gray-500 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button className="btn-primary-custom px-7 py-3 text-base shadow-purple-200">
                Explore Products
              </button>
              <button className="flex items-center gap-2.5 text-gray-700 hover:text-purple-600 font-semibold text-base transition-colors group">
                <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-100 group-hover:border-purple-200 transition-colors">
                  <img src={playIcon} alt="play" className="w-4 h-4 ml-0.5" />
                </span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-100 to-purple-50 opacity-60 blur-2xl" />
              <img
                src={bannerImg}
                alt="Digital Workflow Illustration"
                className="relative z-10 w-full max-w-sm lg:max-w-md rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
