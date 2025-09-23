import React from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  onBuy?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  return (
    <div className="product-card transform-style: preserve-3d">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded border-2 border-gold" />
      <h2 className="text-lg font-semibold text-navy mt-2 text-shadow-golden">{product.name}</h2>
      <p className="text-gold text-xl">₹{product.price}</p>
      {onBuy && (
        <button
          onClick={onBuy}
          className="bg-gold text-navy px-4 py-2 rounded mt-2 hover:bg-yellow-600 transition-all duration-300 transform-gpu hover:translate-z-5"
        >
          Buy Now
        </button>
      )}
    </div>
  );
};

export default ProductCard;
