'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCartStore } from '@/store/cartStore';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    if (items.length === 0) return;
    router.push('/checkout');
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-brand-cream py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20 bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-100 p-20">
              <ShoppingBag className="w-24 h-24 text-brand-forest/20 mx-auto mb-10" />
              <h2 className="text-4xl font-serif font-bold text-brand-forest mb-6">
                Your cart is empty
              </h2>
              <p className="text-brand-sage/60 mb-12 font-light text-xl">
                Begin your journey to soulful snacking by adding some flavors.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center space-x-3 bg-brand-gold text-brand-forest px-10 py-5 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl text-xl font-bold"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-brand-cream-soft py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-forest mb-6 tracking-tighter">
              Shopping <span className="shimmer-text">Bag</span>
            </h1>
            <div className="w-24 h-[1px] bg-brand-gold-light opacity-40"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-20">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(11,36,24,0.02)] border border-gray-50 overflow-hidden">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col sm:flex-row items-center gap-12 p-12 border-b border-gray-50 last:border-b-0 hover:bg-brand-cream-soft transition-all duration-500 group"
                  >
                    <div className="relative w-40 h-40 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold-dark font-black mb-3">{item.weight}</p>
                      <h3 className="text-2xl font-serif font-bold text-brand-forest mb-3 group-hover:text-brand-gold-metallic transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-2xl font-serif text-brand-forest/40 italic font-light">
                        ₹{item.price}
                      </p>
                    </div>

                    <div className="flex items-center space-x-8 bg-brand-cream-soft p-3 px-6 rounded-2xl border border-brand-forest/5">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="p-2 rounded-xl text-brand-forest hover:bg-white hover:shadow-sm transition-all active:scale-90"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="w-8 text-center font-bold text-2xl font-serif">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="p-2 rounded-xl text-brand-forest hover:bg-white hover:shadow-sm transition-all active:scale-90"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="text-right flex flex-col items-end gap-6 min-w-[140px]">
                      <p className="text-3xl font-serif font-bold text-brand-forest">
                        ₹{item.price * item.quantity}
                      </p>
                      <button
                        onClick={() => removeItem(item._id)}
                        className="p-4 text-brand-forest/20 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all transform hover:rotate-12"
                      >
                        <Trash2 className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-brand-forest text-brand-cream rounded-[3rem] p-12 sticky top-32 shadow-[0_40px_100px_rgba(11,36,24,0.15)] border border-brand-gold-metallic/10 overflow-hidden">
                <h2 className="text-3xl font-serif font-bold mb-12 tracking-wide text-brand-gold">
                  Order Summary
                </h2>

                <div className="space-y-8 mb-12 font-light">
                  <div className="flex justify-between items-baseline opacity-60">
                    <span className="uppercase tracking-[0.2em] text-[10px] font-black">Subtotal</span>
                    <span className="text-xl font-serif font-bold">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="uppercase tracking-[0.2em] text-[10px] font-black opacity-60">Concierge Delivery</span>
                    <span className="text-brand-gold-metallic font-black tracking-[0.3em] text-[10px] uppercase">Complementary</span>
                  </div>
                  <div className="border-t border-brand-cream/10 pt-8 flex justify-between items-baseline">
                    <span className="text-2xl font-serif font-bold">Total</span>
                    <span className="text-4xl font-serif font-bold text-brand-gold-metallic">₹{totalPrice}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full bg-brand-gold text-brand-forest py-6 rounded-full font-bold text-xl hover:bg-brand-gold-light transition-all transform hover:scale-[1.02] shadow-[0_20px_50px_rgba(197,160,89,0.3)] disabled:bg-gray-700 relative overflow-hidden gold-hover-effect"
                  >
                    <span className="relative z-10 tracking-[0.2em] uppercase text-sm">{isCheckingOut ? 'Securing...' : 'Proceed to Checkout'}</span>
                  </button>

                  <Link
                    href="/products"
                    className="flex items-center justify-center space-x-3 text-brand-gold-metallic hover:text-white transition-all py-2 group"
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Add more flavor</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
