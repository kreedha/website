'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Your message has been received by our artisans.');
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-cream-soft">
        {/* Header */}
        <section className="pt-40 pb-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold-metallic mb-6 block">Concierge Support</span>
             <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-forest mb-8 tracking-tighter">
                Contact <span className="shimmer-text">Us</span>
             </h1>
             <div className="w-24 h-[1px] bg-brand-gold-metallic/40 mx-auto"></div>
          </div>
        </section>

        <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-16">
              <div className="bg-brand-forest text-brand-cream p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h2 className="text-3xl font-serif font-bold mb-10 text-brand-gold-metallic">Reach Out</h2>
                <div className="space-y-10">
                  <div className="flex items-start space-x-6 group">
                    <div className="p-4 rounded-2xl bg-white/5 text-brand-gold-metallic border border-white/10 group-hover:bg-brand-gold-metallic group-hover:text-brand-forest transition-all">
                       <Mail className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] uppercase tracking-widest text-brand-cream/40 font-black mb-1">Email</p>
                       <p className="text-lg font-light">Info.kreedha@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="p-4 rounded-2xl bg-white/5 text-brand-gold-metallic border border-white/10 group-hover:bg-brand-gold-metallic group-hover:text-brand-forest transition-all">
                       <Phone className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] uppercase tracking-widest text-brand-cream/40 font-black mb-1">WhatsApp</p>
                       <p className="text-lg font-light">+91 96815 40009</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="p-4 rounded-2xl bg-white/5 text-brand-gold-metallic border border-white/10 group-hover:bg-brand-gold-metallic group-hover:text-brand-forest transition-all">
                       <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] uppercase tracking-widest text-brand-cream/40 font-black mb-1">Origin</p>
                       <p className="text-lg font-light">Bihar, India - The Soul of Makhana</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 rounded-[3.5rem] border border-brand-cream-soft shadow-xl">
                 <h3 className="text-xl font-serif font-bold text-brand-forest mb-8">Follow Our Story</h3>
                 <div className="flex space-x-6">
                    {[Instagram, Twitter, Facebook].map((Icon, i) => (
                       <button key={i} className="p-5 rounded-2xl bg-brand-cream-soft text-brand-forest hover:bg-brand-gold hover:text-brand-forest transition-all transform hover:-translate-y-1">
                          <Icon className="w-6 h-6" />
                       </button>
                    ))}
                 </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-gray-50">
               <h2 className="text-3xl font-serif font-bold text-brand-forest mb-12">Send a Message</h2>
               <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-forest/40">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-brand-cream-soft border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-gold-metallic transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-forest/40">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-brand-cream-soft border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-gold-metallic transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-forest/40">Subject</label>
                    <select className="w-full bg-brand-cream-soft border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-gold-metallic transition-all appearance-none cursor-pointer">
                       <option>Bulk Order Inquiry</option>
                       <option>Collaborations</option>
                       <option>Feedback</option>
                       <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-forest/40">Your Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full bg-brand-cream-soft border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-gold-metallic transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    disabled={loading}
                    className="w-full bg-brand-forest text-brand-cream py-6 rounded-full font-bold text-xl hover:bg-brand-gold hover:text-brand-forest transition-all flex items-center justify-center space-x-4 shadow-xl disabled:opacity-50 group"
                  >
                    <span className="relative z-10 tracking-[0.2em] uppercase text-sm">{loading ? 'Sending...' : 'Send Message'}</span>
                    {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> }
                  </button>
               </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
