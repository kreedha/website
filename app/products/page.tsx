'use client';

import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Plain', 'Flavored', 'Premium', 'Gift Pack'];

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const url = selectedCategory === 'All'
        ? '/api/products'
        : `/api/products?category=${selectedCategory}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-brand-cream-soft min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-forest mb-6 tracking-tighter">
              Our <span className="shimmer-text">Collection</span>
            </h1>
            <div className="w-24 h-[1px] bg-brand-gold-light mx-auto mb-8 opacity-40"></div>
            <p className="text-xl text-brand-sage-muted max-w-2xl mx-auto font-light italic">
              "Carefully curated, batch-roasted with artisanal precision."
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-20">
            {/* Filters */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="bg-white p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-50 sticky top-32">
                <h2 className="text-2xl font-serif font-bold text-brand-forest mb-12 tracking-wide">Refine By</h2>
                
                <div className="space-y-16">
                  <div>
                    <h3 className="text-brand-gold-dark text-[10px] font-black uppercase tracking-[0.3em] mb-8">Categories</h3>
                    <div className="space-y-6">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`block w-full text-left py-1 text-lg transition-all duration-500 relative group ${
                            selectedCategory === category 
                              ? 'text-brand-forest font-bold translate-x-4 text-brand-gold-metallic' 
                              : 'text-brand-sage hover:text-brand-gold hover:translate-x-2'
                          }`}
                        >
                          <span className={`${selectedCategory === category ? 'opacity-100' : 'opacity-0'} absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-gold-metallic transition-all duration-500`}></span>
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-brand-gold-dark text-[10px] font-black uppercase tracking-[0.3em] mb-8">Price Scale</h3>
                    <div className="space-y-6">
                       <input
                        type="range"
                        min="0"
                        max="1000"
                        className="w-full h-[2px] bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-gold-metallic"
                      />
                      <div className="flex justify-between text-xs font-bold tracking-widest text-brand-sage-muted uppercase">
                        <span>₹0</span>
                        <span>₹1000+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-gray-200 h-96 rounded-[2.5rem] mb-6"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                  {products.map((product: any) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-[3rem] p-32 text-center border-2 border-dashed border-gray-100 shadow-inner">
                   <div className="mb-6 opacity-20">
                      <ShoppingCart className="w-16 h-16 mx-auto" />
                   </div>
                  <p className="text-3xl font-serif text-brand-sage italic">The collection is currently evolving.</p>
                  <p className="mt-4 text-brand-sage/60 font-light">Check back soon for new arrivals.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
