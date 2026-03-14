'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Leaf, Droplets, Flame, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: "The Origin",
    subtitle: "Bihar's Sacred Waters",
    description: "Our journey begins in the tranquil, silt-rich ponds of Bihar. In this unique ecosystem, the seeds of the Euryale Ferox find their sanctuary, drawing minerals from the pure Himalayan runoff.",
    icon: Droplets,
    image: "/journey_step_1_harvesting_1773513228691.png",
    accent: "text-blue-400"
  },
  {
    title: "The Harvest",
    subtitle: "Artisanal Extraction",
    description: "Each seed is hand-collected by skilled farmers who have mastered this craft over generations. It's a delicate dance with nature, ensuring only the most mature seeds are gathered.",
    icon: Leaf,
    image: "/journey_step_2_processing_1773513247041.png",
    accent: "text-brand-sage"
  },
  {
    title: "The Alchemy",
    subtitle: "Fire & Spirit",
    description: "The seeds undergo a traditional roasting process over open fires. The 'pop' is a moment of pure alchemy—transforming the dark seeds into snow-white, crunchy pearls of nutrition.",
    icon: Flame,
    image: "/journey_step_3_roasting_1773513263425.png",
    accent: "text-orange-400"
  },
  {
    title: "The Perfection",
    subtitle: "Batch Certification",
    description: "Every single nut is hand-sorted and inspected. Only those that meet our rigorous standards for size, color, and purity are selected for the Kreedha seal.",
    icon: ShieldCheck,
    image: "/journey_step_4_quality_check_1773513283324.png",
    accent: "text-brand-gold-metallic"
  }
];

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-cream-soft">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-forest">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-fixed opacity-40 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-brand-forest/20 via-brand-forest/60 to-brand-cream-soft"></div>
          </div>
          <div className="relative z-10 text-center max-w-4xl px-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-cream mb-8 tracking-tighter fade-in">
              The <span className="shimmer-text">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-brand-cream/80 max-w-2xl mx-auto leading-relaxed italic">
              "From the tranquil silt of Bihar to the artisanal purity in your hand—every pearl tells a story of heritage."
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-gold-metallic/0 via-brand-gold-metallic/40 to-brand-gold-metallic/0 hidden md:block"></div>

            <div className="space-y-40">
              {steps.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* content */}
                  <div className="w-full md:w-[45%] space-y-8 text-center md:text-left">
                    <div className="flex items-center space-x-6 justify-center md:justify-start">
                       <div className={`p-4 rounded-3xl bg-white shadow-2xl ${step.accent} border border-gray-50`}>
                          <step.icon className="w-8 h-8" />
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold-metallic">Phase 0{idx + 1}</span>
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-forest mb-4 leading-tight">
                        {step.title}
                      </h2>
                      <h3 className="text-xl font-medium text-brand-gold-dark italic mb-6">
                        {step.subtitle}
                      </h3>
                      <p className="text-lg text-brand-forest/60 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Circle Marker */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-brand-cream-soft border-4 border-white shadow-2xl items-center justify-center z-10 group overflow-hidden">
                     <div className="w-4 h-4 rounded-full bg-brand-gold-metallic animate-pulse group-hover:scale-150 transition-transform duration-500"></div>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-[45%] mt-12 md:mt-0">
                    <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group border border-white/50">
                       <Image 
                        src={step.image} 
                        alt={step.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-brand-forest/10 group-hover:bg-transparent transition-colors duration-700"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Banner */}
        <section className="py-32 bg-brand-forest relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold-metallic/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold-metallic/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-12 tracking-tight">
              Honoring the <span className="shimmer-text">Soil</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { label: "Ethically Sourced", detail: "Fair price for every farmer" },
                { label: "100% Traceable", detail: "Know exactly where your seeds grew" },
                { label: "Sustainable Craft", detail: "Low impact water harvesting" }
              ].map((v, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/10 group hover:border-brand-gold-metallic/50 transition-all duration-500">
                  <p className="text-brand-gold-metallic font-black text-[10px] uppercase tracking-[0.4em] mb-4">{v.label}</p>
                  <p className="text-brand-cream/60 italic font-light">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center">
          <div className="max-w-2xl mx-auto px-4">
             <h2 className="text-4xl font-serif font-bold text-brand-forest mb-8">Ready to taste the journey?</h2>
             <Link 
              href="/products" 
              className="inline-flex items-center space-x-4 bg-brand-forest text-brand-cream px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-gold hover:text-brand-forest transition-all duration-500 shadow-2xl group"
             >
               <span>Shop Collection</span>
               <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
