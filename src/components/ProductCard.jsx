import { useState } from 'react';
import writingIcon from '../assets/writing.png';
import designIcon from '../assets/design-tool.png';
import shoppingIcon from '../assets/shopping-cart.png';
import operationIcon from '../assets/operation.png';
import portfolioIcon from '../assets/portfolio.png';
import socialIcon from '../assets/social-media.png';

const iconMap = {
  writing: writingIcon,
  'design-tool': designIcon,
  'shopping-cart': shoppingIcon,
  operation: operationIcon,
  portfolio: portfolioIcon,
  'social-media': socialIcon,
};

const tagStyles = {
  popular: 'bg-orange-100 text-orange-600',
  new: 'bg-blue-100 text-blue-600',
  'best-seller': 'bg-green-100 text-green-700',
};

const tagLabels = {
  popular: 'Popular',
  new: 'New',
  'best-seller': 'Best Seller',
};

const periodLabel = {
  monthly: '/mo',
  'one-time': '/One-Time',
  yearly: '/yr',
};

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const [added, setAdded] = useState(false);

  const handleBuy = () => {
    if (isInCart) return;
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const icon = iconMap[product.icon] || writingIcon;

  return (
    <div className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm card-hover flex flex-col gap-4 animate-fade-in">
      {/* Tag badge */}
      <span
        className={`absolute top-4 right-4 tag-badge ${
          tagStyles[product.tagType] || 'bg-gray-100 text-gray-600'
        }`}
      >
        {tagLabels[product.tagType] || product.tag}
      </span>

      {/* Icon & Name */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0 p-2">
          <img src={icon} alt={product.name} className="w-8 h-8 object-contain" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-base leading-tight">{product.name}</h3>
          <p className="text-gray-500 text-sm mt-1 leading-snug">{product.description}</p>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm font-medium">
          {periodLabel[product.period] || `/${product.period}`}
        </span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
            <svg
              className="w-4 h-4 text-purple-500 shrink-0"
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
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now button */}
      <button
        onClick={handleBuy}
        disabled={isInCart}
        className={`mt-auto w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
          isInCart
            ? 'bg-green-50 text-green-600 border border-green-200 cursor-default'
            : added
            ? 'bg-green-600 text-white shadow-md'
            : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
        }`}
      >
        {isInCart ? '✓ Added to Cart' : added ? 'Added to Cart!' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;
