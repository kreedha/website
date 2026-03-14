'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Heart, Zap, Shield, Sparkles, ArrowRight, Brain, Wind, Moon, X } from 'lucide-react';
import Link from 'next/link';

export default function WellnessPage() {
  const benefits = [
    {
      title: "Clean Protein",
      description: "A rare plant-based source of complete protein, perfect for muscle recovery and sustained energy without the heavy feel.",
      icon: Zap,
      accent: "bg-blue-50 text-blue-500"
    },
    {
      title: "Natural Detox",
      description: "Rich in Kaempferol, a natural flavonoid that prevents inflammation and slows aging from the inside out.",
      icon: Sparkles,
      accent: "bg-green-50 text-green-500"
    },
    {
      title: "Heart Health",
      description: "High in magnesium and low in sodium, promoting optimal blood flow and cardiovascular balance.",
      icon: Heart,
      accent: "bg-red-50 text-red-500"
    },
    {
      title: "Glycemic Balance",
      description: "A low glycemic index makes it the perfect guilt-free snack for maintaining steady blood sugar levels throughout the day.",
      icon: Shield,
      accent: "bg-brand-gold-metallic/10 text-brand-gold-metallic"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-cream-soft">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0">
             <Image 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2600&auto=format&fit=crop" 
              alt="Yoga Wellness" 
              fill 
              className="object-cover opacity-20 grayscale brightness-50"
             />
             <div className="absolute inset-0 bg-brand-cream-soft/60 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl px-4">
             <div className="inline-block px-6 py-2 rounded-full border border-brand-gold-metallic/30 text-brand-gold-dark text-[10px] uppercase font-black tracking-[0.4em] mb-10 fade-in">
                Nature's Ancient Superfood
             </div>
             <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-forest mb-8 tracking-tighter">
                The <span className="shimmer-text">Wellness</span> Ritual
             </h1>
             <p className="text-xl md:text-2xl font-light text-brand-forest/60 max-w-2xl mx-auto leading-relaxed">
                Unlock the wisdom of ancient Ayurveda through the mineral-rich purity of hand-popped fox nuts.
             </p>
          </div>
        </section>

        {/* Nutritional Breakdown */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                 <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-cream-soft">
                    <Image 
                      src="/lifestyle_makhana_snack_1_1773513302318.png" 
                      alt="Healthy Makhana" 
                      fill 
                      className="object-cover"
                    />
                 </div>
                 {/* Floating Stats */}
                 <div className="absolute -right-8 top-12 bg-brand-forest text-brand-cream p-8 rounded-[2rem] shadow-2xl space-y-4">
                    <div className="text-center">
                       <p className="text-4xl font-serif font-bold text-brand-gold-metallic">0%</p>
                       <p className="text-[10px] uppercase tracking-widest opacity-60">Trans Fat</p>
                    </div>
                    <div className="h-[1px] bg-white/10 w-full"></div>
                    <div className="text-center">
                       <p className="text-4xl font-serif font-bold text-brand-gold-metallic">Low</p>
                       <p className="text-[10px] uppercase tracking-widest opacity-60">Glycemic Index</p>
                    </div>
                 </div>
              </div>

              <div className="space-y-12">
                 <div>
                    <h2 className="text-5xl font-serif font-bold text-brand-forest mb-8 leading-tight">
                       Purity in Every <span className="shimmer-text">Crunch</span>
                    </h2>
                    <p className="text-xl text-brand-forest/60 font-light leading-relaxed">
                       At Kreedha, we obsess over the nutritional integrity of every nut. Unlike mass-manufactured snacks, our traditional popping method preserves the vital enzymes and minerals that make Makhana a true superfood.
                    </p>
                 </div>

                 <div className="grid sm:grid-cols-2 gap-8">
                    {benefits.map((benefit, idx) => (
                       <div key={idx} className="p-8 rounded-[2rem] bg-brand-cream-soft border border-gray-50 group hover:shadow-xl transition-all duration-500">
                          <div className={`p-4 rounded-2xl w-fit mb-6 ${benefit.accent}`}>
                             <benefit.icon className="w-6 h-6" />
                          </div>
                          <h4 className="text-xl font-serif font-bold text-brand-forest mb-3">{benefit.title}</h4>
                          <p className="text-sm text-brand-forest/60 font-light leading-relaxed">{benefit.description}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Mood/Lifestyle Integration */}
        <section className="py-32 bg-brand-forest">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-6 tracking-tight">Your Daily Rituals</h2>
                 <p className="text-brand-cream/40 font-light italic">Artisanal snacking for every state of mind.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                 {[
                   { icon: Brain, title: "The Deep Focus", time: "Morning Focus", desc: "Sustain your mental clarity during deep work with protein-rich nutrients." },
                   { icon: Wind, title: "Post-Yoga Flow", time: "Afternoon Recovery", desc: "Replenish essential minerals after movement for a balanced recovery." },
                   { icon: Moon, title: "The Quiet Hour", time: "Evening Wind-down", desc: "A light, magnesium-rich snack to help your system transition to rest." }
                 ].map((item, idx) => (
                   <div key={idx} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-700 group text-center flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full border border-brand-gold-metallic/20 flex items-center justify-center text-brand-gold-metallic mb-8 group-hover:scale-110 transition-transform">
                         <item.icon className="w-10 h-10" />
                      </div>
                      <p className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-gold-metallic/60 mb-3">{item.time}</p>
                      <h4 className="text-2xl font-serif font-bold text-brand-cream mb-6">{item.title}</h4>
                      <p className="text-brand-cream/40 font-light leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32 bg-white">
           <div className="max-w-5xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-serif font-bold text-brand-forest mb-16 underline-gold">Choose Life-Giving Food</h2>
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="p-12 rounded-[3.5rem] bg-red-50/30 border border-red-100 flex flex-col items-center">
                    <X className="w-12 h-12 text-red-300 mb-8" />
                    <h5 className="text-2xl font-serif font-bold text-red-900 mb-6 uppercase tracking-wider">Processed Snacks</h5>
                    <ul className="space-y-4 text-red-900/40 text-sm font-medium uppercase tracking-widest">
                       <li>High Trans Fats</li>
                       <li>Refined Sugars</li>
                       <li>Synthetic Flavors</li>
                       <li>Leaches Energy</li>
                    </ul>
                 </div>
                 <div className="p-12 rounded-[3.5rem] bg-brand-gold-metallic text-brand-forest flex flex-col items-center shadow-2xl transform md:-translate-y-8">
                    <Sparkles className="w-12 h-12 text-brand-forest mb-8 animate-pulse" />
                    <h5 className="text-2xl font-serif font-bold mb-6 uppercase tracking-wider">Kreedha Makhana</h5>
                    <ul className="space-y-4 text-brand-forest/70 text-sm font-black uppercase tracking-widest">
                       <li>Pure Protein</li>
                       <li>Antioxidant Rich</li>
                       <li>Zero Preservatives</li>
                       <li>Soulful Energy</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-brand-cream-soft text-center overflow-hidden relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold-metallic/30 to-transparent"></div>
           <div className="max-w-2xl mx-auto px-4 relative z-10">
              <h2 className="text-5xl font-serif font-bold text-brand-forest mb-8">Begin Your Wellness Journey</h2>
              <p className="text-brand-forest/40 mb-12 italic">Hand-crafted for the modern sage.</p>
              <Link 
               href="/products" 
               className="inline-flex items-center space-x-4 bg-brand-forest text-brand-cream px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-gold hover:text-brand-forest transition-all duration-500 shadow-2xl group"
              >
                <span>Curate Your Bag</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
