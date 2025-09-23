'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import OrnateHeader from '@/components/OrnateHeader';

export default function SellerPortal() {
  const [products, setProducts] = useState<any[]>([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, image: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (session?.user.id) {
      setLoading(true);
      const { data, error } = await supabase.from('products').select('*').eq('seller_id', session.user.id);
      if (error) console.error(error);
      else setProducts(data || []);
      setLoading(false);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: session } = await supabase.auth.getSession();
    const { error } = await supabase.from('products').insert({
      ...newProduct,
      seller_id: session?.user.id,
      category_id: 'cat-1-mobile',
    });
    if (error) console.error(error);
    else {
      setNewProduct({ name: '', price: 0, image: '', description: '' });
      fetchProducts();
    }
  };

  return (
    <div className="container mx-auto p-4 bg-navy text-gold">
      <OrnateHeader title="Seller Saffari - Manage Products" />
      <form onSubmit={handleAddProduct} className="mb-4 bg-beige p-4 rounded">
        <input
          type="text"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          placeholder="Product Name"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
          placeholder="Price"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          placeholder="Image URL"
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          placeholder="Description"
          className="w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="bg-gold text-navy px-4 py-2 rounded">Add Product</button>
      </form>
      <div className="grid-products">
        {loading ? <p className="text-center">Loading...</p> : products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="text-lg font-semibold text-navy">{product.name}</h3>
            <p className="text-gold">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
