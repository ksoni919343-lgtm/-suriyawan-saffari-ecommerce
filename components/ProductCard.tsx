import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="product-card w-full transform-gpu hover:rotate-y-20 hover:scale-110 transition-all duration-500">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl border-4 border-double border-sandy-gold transform-gpu hover:scale-125 hover:shadow-[0_0_30px_#FFD700] transition-all duration-300" />
      <h2 className="text-2xl font-bold text-white mt-4 text-shadow-golden">{title}</h2>
      <p className="text-xl text-white mt-2">{price}</p>
      <button className="mt-4 px-6 py-3 bg-sandy-gold text-chockleti rounded-xl shadow-lg hover:bg-yellow-600 hover:shadow-2xl transition-all duration-300 transform-gpu hover:translate-z-10">
        Buy Now
      </button>
    </div>
  );
}
