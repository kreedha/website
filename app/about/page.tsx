'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Heart, Shield, Users, Sprout, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-cream-soft">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-brand-forest">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2600&auto=format&fit=crop')] bg-cover opacity-40 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-cream-soft"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl px-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-cream mb-8 tracking-tighter">
              Our <span className="shimmer-text">Heritage</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-brand-cream/80 max-w-2xl mx-auto leading-relaxed italic">
              "Nourishing souls through the ancient wisdom of Bihar's artisanal fox nuts."
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-block px-6 py-2 rounded-full border border-brand-gold-metallic/30 text-brand-gold-dark text-[10px] uppercase font-black tracking-[0.4em]">
                Est. 2024
              </div>
              <h2 className="text-5xl font-serif font-bold text-brand-forest leading-tight">
                Beyond Just a <span className="shimmer-text">Snack</span>
              </h2>
              <p className="text-xl text-brand-forest/60 font-light leading-relaxed">
                Kreedha was born from a simple realization: the most powerful superfoods are those that respect the soil and the hands that harvest them. Based in the heart of Bihar, we are a family of craftsmen dedicated to bringing the pure, unadulterated essence of Makhana to the world.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div>
                   <h4 className="text-3xl font-serif font-bold text-brand-gold-metallic mb-2">10k+</h4>
                   <p className="text-[10px] uppercase tracking-widest text-brand-forest/40 font-black">Happy Snackers</p>
                </div>
                <div>
                   <h4 className="text-3xl font-serif font-bold text-brand-gold-metallic mb-2">100%</h4>
                   <p className="text-[10px] uppercase tracking-widest text-brand-forest/40 font-black">Fair Trade</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop" 
                alt="Our Heritage" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-32 bg-brand-forest">
           <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-24 tracking-tight">The Three Pillars</h2>
              <div className="grid md:grid-cols-3 gap-12">
                 {[
                   { icon: Sprout, title: "Purity", desc: "No chemicals, no preservatives. Just hand-popped seeds roasted to perfection." },
                   { icon: Heart, title: "Heritage", desc: "Honoring the 2000-year-old tradition of Makhana cultivation in Bihar." },
                   { icon: Shield, title: "Integrity", desc: "Direct-from-farm sourcing ensures a fair livelihood for our artisanal harvesters." }
                 ].map((pillar, idx) => (
                   <div key={idx} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 group hover:border-brand-gold-metallic/40 transition-all duration-700">
                      <div className="w-20 h-20 rounded-full border border-brand-gold-metallic/20 flex items-center justify-center text-brand-gold-metallic mx-auto mb-10 group-hover:scale-110 transition-transform">
                         <pillar.icon className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-brand-cream mb-6">{pillar.title}</h4>
                      <p className="text-brand-cream/40 font-light leading-relaxed">{pillar.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Team Section Placeholder */}
        <section className="py-32 bg-white text-center">
           <div className="max-w-4xl mx-auto px-4">
              <Users className="w-12 h-12 text-brand-gold-metallic mx-auto mb-8" />
              <h2 className="text-4xl font-serif font-bold text-brand-forest mb-12">Driven by Purpose</h2>
              <p className="text-xl text-brand-forest/60 font-light italic mb-16">
                "Our team isn't just made of employees; we are a community of farmers, roasters, and health-enthusiasts united by the goal of soulful nutrition."
              </p>
              <Link 
               href="/contact" 
               className="inline-flex items-center space-x-4 bg-brand-forest text-brand-cream px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-gold hover:text-brand-forest transition-all duration-500 shadow-2xl group"
              >
                <span>Connect With Us</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
