import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="ornate-border transform-gpu hover:rotate-x-15 hover:scale-105 transition-all duration-500">
        <h1 className="text-5xl font-extrabold text-white text-shadow-golden">Login</h1>
        <p className="mt-6 text-xl text-white">Please log in to access the portals.</p>
        <button className="mt-8 px-6 py-3 bg-sandy-gold text-chockleti rounded-xl shadow-lg hover:bg-yellow-600 hover:shadow-2xl transition-all duration-300 transform-gpu hover:translate-z-10">
          Login Now
        </button>
      </div>
    </div>
  );
}
