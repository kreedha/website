'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';
import { ShieldCheck, Truck, Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: '',
  });

  const totalPrice = getTotalPrice();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error('Your collection is empty');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          customer: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
          },
          notes: formData.notes,
        }),
      });

      const data = await response.json();
      if (data.success) {
        clearCart();
        toast.success('Order secured successfully!');
        router.push(`/order-success?orderNumber=${data.order.orderNumber}`);
      } else {
        toast.error(data.error || 'Failed to secure order');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-cream-soft pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <Link href="/cart" className="inline-flex items-center space-x-3 text-brand-forest/40 hover:text-brand-gold transition-colors mb-16 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Return to Bag</span>
          </Link>

          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-forest mb-6 tracking-tighter">
              <span className="shimmer-text">Checkout</span>
            </h1>
            <div className="w-24 h-[1px] bg-brand-gold-light opacity-40"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(11,36,24,0.02)] p-12 border border-gray-50">
                <div className="flex items-center space-x-6 mb-12">
                   <div className="p-4 bg-brand-gold-metallic/10 text-brand-gold-metallic rounded-[1.5rem] shadow-inner">
                      <Truck className="w-7 h-7" />
                   </div>
                   <h2 className="text-3xl font-serif font-bold text-brand-forest">Delivery Details</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="peer w-full px-0 py-4 bg-transparent border-b-2 border-gray-100 focus:border-brand-gold outline-none transition-all placeholder-transparent"
                        placeholder="Full Name"
                      />
                      <label className="absolute left-0 top-0 text-brand-gold-dark text-[10px] uppercase tracking-[0.3em] font-black transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold-metallic">
                        Full Name *
                      </label>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="peer w-full px-0 py-4 bg-transparent border-b border-gray-100 focus:border-brand-gold-metallic outline-none transition-all placeholder-transparent font-serif text-lg"
                          placeholder="Email"
                        />
                        <label className="absolute left-0 top-0 text-brand-gold-dark text-[10px] uppercase tracking-[0.3em] font-black transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold-metallic">
                          Email *
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{10}"
                          className="peer w-full px-0 py-4 bg-transparent border-b border-gray-100 focus:border-brand-gold-metallic outline-none transition-all placeholder-transparent font-serif text-lg"
                          placeholder="Phone"
                        />
                        <label className="absolute left-0 top-0 text-brand-gold-dark text-[10px] uppercase tracking-[0.3em] font-black transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold-metallic">
                          Phone Number *
                        </label>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="peer w-full px-0 py-4 bg-transparent border-b border-gray-100 focus:border-brand-gold-metallic outline-none transition-all placeholder-transparent font-serif text-lg"
                        placeholder="Address"
                      />
                      <label className="absolute left-0 top-0 text-brand-gold-dark text-[10px] uppercase tracking-[0.3em] font-black transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold-metallic">
                        Complete Address *
                      </label>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                      <div className="relative">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="peer w-full px-0 py-4 bg-transparent border-b border-gray-100 focus:border-brand-gold-metallic outline-none transition-all placeholder-transparent font-serif text-lg"
                          placeholder="City"
                        />
                        <label className="absolute left-0 top-0 text-brand-gold-dark text-[10px] uppercase tracking-[0.3em] font-black transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold-metallic">
                          City *
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="peer w-full px-0 py-4 bg-transparent border-b border-gray-100 focus:border-brand-gold-metallic outline-none transition-all placeholder-transparent font-serif text-lg"
                          placeholder="State"
                        />
                        <label className="absolute left-0 top-0 text-brand-gold-dark text-[10px] uppercase tracking-[0.3em] font-black transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold-metallic">
                          State *
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{6}"
                          className="peer w-full px-0 py-4 bg-transparent border-b border-gray-100 focus:border-brand-gold-metallic outline-none transition-all placeholder-transparent font-serif text-lg"
                          placeholder="Pincode"
                        />
                        <label className="absolute left-0 top-0 text-brand-gold-dark text-[10px] uppercase tracking-[0.3em] font-black transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold-metallic">
                          Pincode *
                        </label>
                      </div>
                    </div>

                    <div className="relative">
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={2}
                        className="peer w-full px-0 py-4 bg-transparent border-b border-gray-100 focus:border-brand-gold-metallic outline-none transition-all placeholder-transparent font-serif text-lg"
                        placeholder="Notes"
                      />
                      <label className="absolute left-0 top-0 text-brand-gold-dark text-[10px] uppercase tracking-[0.3em] font-black transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold-metallic">
                        Order Notes (Optional)
                      </label>
                    </div>
                  </div>

                  <div className="pt-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-forest text-brand-cream py-7 rounded-full font-bold text-xl hover:bg-brand-gold hover:text-brand-forest transition-all transform hover:scale-[1.02] shadow-[0_25px_60px_rgba(11,36,24,0.3)] disabled:bg-gray-100 disabled:text-gray-300 relative overflow-hidden gold-hover-effect"
                    >
                      <span className="relative z-10 tracking-[0.2em] uppercase text-sm">{loading ? 'Securing your order...' : 'Complete Purchase (COD)'}</span>
                    </button>
                    <p className="text-center mt-8 text-brand-sage-muted text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Secure Artisanal Transaction</p>
                  </div>
                </form>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-2 space-y-10">
              <div className="bg-brand-forest text-brand-cream rounded-[3rem] p-12 shadow-[0_30px_100px_rgba(11,36,24,0.15)] border border-brand-gold-metallic/10">
                <h2 className="text-3xl font-serif font-bold mb-12 tracking-wide">
                  <span className="shimmer-text">The Selection</span>
                </h2>
                
                <div className="space-y-8 mb-12 overflow-y-auto max-h-[400px] pr-6 custom-scrollbar">
                  {items.map((item) => (
                    <div key={item._id} className="flex justify-between items-start group">
                      <div className="flex-1">
                        <p className="text-lg font-serif font-bold group-hover:text-brand-gold-light transition-colors duration-300">{item.name}</p>
                        <p className="text-[10px] text-brand-cream/40 uppercase tracking-[0.3em] font-black mt-2">{item.weight} • Qty: {item.quantity}</p>
                      </div>
                      <span className="font-serif font-bold ml-6 text-brand-gold-light">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-brand-cream/10 pt-10 space-y-8 font-light">
                  <div className="flex justify-between items-baseline opacity-60">
                    <span className="uppercase tracking-[0.2em] text-[10px] font-black">Subtotal</span>
                    <span className="text-xl font-serif font-bold">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="uppercase tracking-[0.2em] text-[10px] font-black opacity-60">Global Shipping</span>
                    <span className="text-brand-gold-metallic font-black tracking-[0.3em] text-[10px] uppercase">Complementary</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-8 border-t border-brand-cream/10">
                    <span className="text-2xl font-serif font-bold tracking-tight">Total Due</span>
                    <span className="text-4xl font-serif font-bold text-brand-gold-metallic">₹{totalPrice}</span>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-brand-cream/5 rounded-[2rem] border border-brand-gold-metallic/10 flex items-start space-x-6 backdrop-blur-sm">
                  <Lock className="w-6 h-6 text-brand-gold-metallic shrink-0 mt-1" />
                  <div>
                    <p className="text-[10px] font-black text-brand-gold-metallic uppercase tracking-[0.3em] mb-2">
                      Cash on Delivery
                    </p>
                    <p className="text-xs text-brand-cream/40 leading-relaxed italic font-light">
                      "Traditional exchange on receipt. Experience the craft before finalizing."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 border border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                 <div className="flex items-center space-x-6">
                    <div className="p-4 bg-brand-gold-metallic/10 rounded-2xl">
                       <ShieldCheck className="w-8 h-8 text-brand-gold-metallic" />
                    </div>
                    <div>
                       <p className="font-black text-brand-forest uppercase tracking-[0.3em] text-[10px] mb-1">Quality Secured</p>
                       <p className="text-xs text-brand-sage-muted font-light italic opacity-80 mt-1">Every selection is batch-certified by our craftsmen.</p>
                    </div>
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
