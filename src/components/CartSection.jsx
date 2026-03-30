import CartItem from './CartItem';
import packageIcon from '../assets/package.png';

const CartSection = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto animate-fade-in">
        <div className="bg-white border border-gray-100 rounded-3xl p-12 flex flex-col items-center gap-4 shadow-sm">
          <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center">
            <img src={packageIcon} alt="empty cart" className="w-10 h-10 opacity-60" />
          </div>
          <p className="text-gray-500 font-medium text-lg">Your cart is empty</p>
          <p className="text-gray-400 text-sm text-center max-w-xs">
            Browse our premium tools and add products to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h3>

        <div className="flex flex-col gap-3">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemove={onRemove} />
          ))}
        </div>

        {/* Total */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
          <span className="text-gray-500 font-medium">Total:</span>
          <span className="text-3xl font-extrabold text-gray-900">${total}</span>
        </div>

        {/* Checkout button */}
        <button
          onClick={onCheckout}
          className="mt-5 w-full py-3.5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold text-base rounded-2xl shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5 transition-all duration-200"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSection;
