'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore();
  const { addItem: addToCart } = useCartStore();

  const handleAddToCart = (product: any) => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      weight: product.weight,
    });
    toast.success('Added to collection!');
  };

  return (
    <>
      <Navbar />
      <main className="bg-brand-cream min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-forest mb-6 tracking-tight">Your Wishlist</h1>
            <div className="w-24 h-[1px] bg-brand-gold mx-auto mb-8 opacity-50"></div>
            <p className="text-xl text-brand-sage max-w-2xl mx-auto font-light italic">
              A curated selection of your favorite soul-nourishing snacks.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="bg-white rounded-[3rem] p-32 text-center border-2 border-dashed border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
              <div className="mb-10 opacity-20">
                <Heart className="w-20 h-20 mx-auto text-brand-forest" />
              </div>
              <h2 className="text-3xl font-serif text-brand-forest mb-6">Your collection is empty</h2>
              <p className="text-brand-sage/60 mb-12 font-light text-lg">
                Explore our collections and save the flavors that speak to you.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center space-x-3 bg-brand-gold text-brand-forest px-10 py-5 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl text-xl font-bold"
              >
                <span>Discover Flavors</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {items.map((item) => (
                <div key={item._id} className="bg-white rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.04)] overflow-hidden group hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)] transition-all duration-700 border border-gray-100 flex flex-col">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <button
                      onClick={() => removeItem(item._id)}
                      className="absolute top-6 right-6 p-4 rounded-full bg-white/90 backdrop-blur-sm text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition-all transform hover:scale-110"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-10 flex-1 flex flex-col">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-4">{item.weight}</p>
                    <h3 className="text-2xl font-serif font-bold text-brand-forest mb-6 line-clamp-1">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-10 mt-auto">
                      <span className="text-3xl font-serif font-bold text-brand-forest">₹{item.price}</span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-brand-forest text-brand-cream py-5 rounded-full hover:bg-brand-gold hover:text-brand-forest transition-all duration-300 flex items-center justify-center space-x-4 font-bold tracking-wide shadow-lg group/btn"
                    >
                      <ShoppingCart className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
