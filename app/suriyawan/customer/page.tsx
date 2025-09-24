import React from 'react';

export default function CustomerPortal() {
  return (
    <div className="min-h-screen">
      <div className="ornate-border transform-gpu hover:rotate-x-15 hover:scale-105 transition-all duration-500">
        <h1 className="text-5xl font-extrabold text-white text-shadow-golden">Customer Store</h1>
        <p className="mt-6 text-xl text-white">Welcome to our Flipkart-like store.</p>
      </div>
      <div className="grid-products mt-12">
        <div className="product-card transform-gpu hover:rotate-y-20 hover:scale-110 transition-all duration-500">
          <img src="/images/iphone15-promax.jpg" alt="iPhone 15 Pro Max" />
          <h2 className="text-2xl font-bold text-white text-shadow-golden">iPhone 15 Pro Max</h2>
          <p className="text-xl text-white">₹119,999</p>
          <button className="mt-4 px-6 py-3 bg-sandy-gold text-chockleti rounded-xl shadow-lg hover:bg-yellow-600 hover:shadow-2xl transition-all duration-300 transform-gpu hover:translate-z-10">
            Buy Now
          </button>
        </div>
        {/* Add more product cards as needed */}
      </div>
    </div>
  );
}
