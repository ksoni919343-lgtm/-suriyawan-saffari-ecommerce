'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import ProductCard from '@/components/ProductCard';
import OrnateHeader from '@/components/OrnateHeader';

export default function CustomerPortal() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('products').select('*');
    if (error) console.error(error);
    else setProducts(data || []);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4 bg-sand-gradient min-h-screen">
      <OrnateHeader title="Suriyawan Saffari - Shop Now" />
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="grid-products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
