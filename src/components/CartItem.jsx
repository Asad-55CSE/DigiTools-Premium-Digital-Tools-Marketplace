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

const periodLabel = {
  monthly: '/mo',
  'one-time': '/One-Time',
  yearly: '/yr',
};

const CartItem = ({ item, onRemove }) => {
  const icon = iconMap[item.icon] || writingIcon;

  return (
    <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100 animate-fade-in">
      {/* Icon */}
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm p-2">
        <img src={icon} alt={item.name} className="w-8 h-8 object-contain" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm truncate">{item.name}</p>
        <p className="text-purple-600 font-bold text-base mt-0.5">
          ${item.price}
          <span className="text-gray-400 text-xs font-normal ml-0.5">
            {periodLabel[item.period] || `/${item.period}`}
          </span>
        </p>
      </div>

      {/* Remove */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 text-sm font-semibold transition-colors hover:bg-red-50 px-3 py-1 rounded-lg"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
