import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductsSection from './components/ProductsSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar cartCount={cartItems.length} />

      <main className="flex-1 mt-0">
        <Banner />
        <Stats />
        <ProductsSection cartItems={cartItems} setCartItems={setCartItems} />
        <Steps />
        <Pricing />
        <CallToAction />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;
