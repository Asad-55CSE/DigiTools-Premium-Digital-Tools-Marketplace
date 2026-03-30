import rocketIcon from '../assets/rocket.png';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src={rocketIcon} alt="DigiTools" className="w-7 h-7" />
            <span className="text-xl font-bold">
              <span className="text-gray-900">Digi</span>
              <span className="text-purple-600">Tools</span>
            </span>
          </a>

          {/* Nav links – desktop */}
          <div className="hidden md:flex items-center gap-7">
            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart icon */}
            <div className="relative cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 group-hover:text-purple-600 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>

            <a
              href="#"
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              Login
            </a>

            <button className="btn-primary-custom text-sm px-5 py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
