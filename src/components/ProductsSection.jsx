import { useState } from 'react';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';
import CartSection from './CartSection';
import products from '../data/products.json';

const ProductsSection = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (alreadyInCart) {
      toast.info(`"${product.name}" is already in your cart.`);
      return;
    }
    setCartItems((prev) => [...prev, product]);
    toast.success(`"${product.name}" added to cart! 🛒`);
  };

  const handleRemove = (id) => {
    const item = cartItems.find((c) => c.id === id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    if (item) toast.error(`"${item.name}" removed from cart.`);
  };

  const handleCheckout = () => {
    setCartItems([]);
    setActiveTab('products');
    toast.success('Checkout successful! 🎉 Thank you for your purchase.');
  };

  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="section-title">Premium Digital Tools</h2>
        <p className="section-subtitle">
          Choose from our curated collection of premium digital products designed to boost your
          productivity and creativity.
        </p>

        {/* Toggle buttons */}
        <div className="flex items-center justify-center gap-2 mt-8 mb-12">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-7 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
              activeTab === 'products'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-7 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
              activeTab === 'cart'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            Cart ({cartItems.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                isInCart={!!cartItems.find((c) => c.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <CartSection
            cartItems={cartItems}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
          />
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
