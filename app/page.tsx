'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Truck, Shield, Leaf, CheckCircle, MessageSquare, Instagram, Mail, Users, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch('/api/products?featured=true');
      const data = await response.json();
      if (data.success) {
        setFeaturedProducts(data.products.slice(0, 4));
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
      <main>
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover opacity-90"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Premium Gradient Overlay */}
          <div className="absolute z-10 inset-0 bg-gradient-to-b from-brand-forest/70 via-brand-forest/20 to-brand-forest/90"></div>

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 drop-shadow-2xl tracking-tighter">
              <span className="shimmer-text">Kreedha</span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl font-sans font-light tracking-[0.4em] uppercase opacity-60 mt-4 block">From Farm to Soul</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl font-sans text-brand-cream/80 mb-12 drop-shadow-lg leading-relaxed font-light italic">
              "Experience the pure essence of nature with our hand-harvested, 
              batch-roasted premium fox nuts."
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center space-x-6 bg-brand-gold text-brand-forest px-12 py-6 rounded-full hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(197,160,89,0.3)] text-xl font-bold tracking-widest uppercase gold-hover-effect"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-32 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
              <div className="max-w-2xl">
                <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Selection</h2>
                <h3 className="text-5xl md:text-6xl font-serif text-brand-forest">Featured Collections</h3>
              </div>
              <Link href="/products" className="mt-8 md:mt-0 group flex items-center space-x-2 text-brand-gold font-bold text-lg hover:text-brand-forest transition-colors underline-offset-8 underline decoration-2">
                <span>View All Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-80 rounded-3xl mb-6"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {featuredProducts.map((product: any) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Brand Promise / Features */}
        <section className="py-32 bg-brand-forest text-brand-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <Leaf className="w-full h-full rotate-45" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { icon: <Truck className="w-12 h-12" />, title: "Concierge Delivery", desc: "Premium doorstep delivery across the nation, handled with absolute care." },
                { icon: <Shield className="w-12 h-12" />, title: "Quality Guarantee", desc: "Every single seed is inspected to meet our rigorous standards of perfection." },
                { icon: <Leaf className="w-12 h-12" />, title: "100% Organic", desc: "Sourced from the purest lily ponds, free from any chemical intervention." }
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                  <div className="p-6 rounded-full bg-brand-cream/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-forest transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold tracking-wide">{feature.title}</h3>
                  <p className="text-brand-cream/70 text-lg leading-relaxed font-light">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Journey Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Craftsmanship</h2>
              <h3 className="text-5xl md:text-7xl font-serif text-brand-forest">The Farm to Soul Journey</h3>
              <div className="w-24 h-[1px] bg-brand-gold mx-auto mt-8 opacity-50"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                {
                  title: "Ethical Sourcing",
                  desc: "Hand-harvested from natural lily ponds in Bihar, ensuring the highest quality raw seeds.",
                  img: "/journey_step_1_harvesting_1773513228691.png"
                },
                {
                  title: "Natural Processing",
                  desc: "Traditional sun-drying and cleaning techniques to preserve nutritional integrity.",
                  img: "/journey_step_2_processing_1773513247041.png"
                },
                {
                  title: "Perfect Roasting",
                  desc: "Expertly roasted in small batches to achieve that signature golden crunch.",
                  img: "/journey_step_3_roasting_1773513263425.png"
                },
                {
                  title: "Quality Sealed",
                  desc: "Rigorous quality checks and premium packaging to lock in freshness.",
                  img: "/journey_step_4_quality_check_1773513283324.png"
                }
              ].map((step, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center">
                  <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={step.img} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-forest/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <span className="text-brand-gold font-serif text-4xl mb-4 opacity-50 italic">{idx + 1}</span>
                  <h3 className="text-2xl font-serif font-bold text-brand-forest mb-4 tracking-wide">{step.title}</h3>
                  <p className="text-brand-sage text-lg font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Health Benefits Grid */}
        <section className="py-32 bg-brand-forest relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
             <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold rounded-full blur-[120px]"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-[150px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Nutritional Wellness</h2>
              <h3 className="text-5xl md:text-7xl font-serif text-brand-cream">Nature's Gift to You</h3>
              <p className="text-xl text-brand-cream/60 max-w-2xl mx-auto mt-6 font-light">Makhana is more than a snack - it's a centuries-old superfood redefined for the modern palate.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Leaf className="w-8 h-8" />, title: "Plant Protein", desc: "A great source of plant-based protein for muscles." },
                { icon: <Shield className="w-8 h-8" />, title: "Low Glycemic", desc: "Helps maintain stable blood sugar levels." },
                { icon: <Users className="w-8 h-8" />, title: "Heart Healthy", desc: "Low in sodium and high in magnesium and potassium." },
                { icon: <CheckCircle className="w-8 h-8" />, title: "Anti-Aging", desc: "Rich in antioxidants that keep you feeling young." }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-brand-cream/5 backdrop-blur-sm p-10 rounded-[2rem] border border-brand-cream/10 hover:border-brand-gold/50 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-2xl mb-8 group-hover:bg-brand-gold group-hover:text-brand-forest transition-colors shadow-[0_0_20px_rgba(197,160,89,0.2)]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-cream mb-4 tracking-wide">{benefit.title}</h3>
                  <p className="text-brand-cream/60 text-lg font-light leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-brand-forest relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-gold rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-gold rounded-full blur-[150px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <span className="text-brand-gold-metallic text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">The Circle of Connoisseurs</span>
              <h3 className="text-5xl md:text-7xl font-serif text-brand-cream tracking-tighter">Voices of <span className="shimmer-text">Trust</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: "Elena Rodriguez", 
                  text: "Kreedha has turned a traditional snack into a high-end gourmet experience. The purity and delicate crunch are unmatched in the modern market.", 
                  title: "Luxury Curator",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
                  large: true
                },
                { 
                  name: "Siddharth Verma", 
                  text: "The Peri-Peri iteration is addictive. It's the first healthy snack that doesn't feel like a compromise.", 
                  title: "Fitness Architect",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
                },
                { 
                  name: "Ananya Kapoor", 
                  text: "As a chef, I value the artisanal popping process. It preserves the vital soul of the grain.", 
                  title: "Executive Chef",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2570&auto=format&fit=crop"
                },
                { 
                  name: "Marcus Thorne", 
                  text: "Absolute premium quality. It has become a staple in my high-performance wellness routine.", 
                  title: "Performance Coach",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2570&auto=format&fit=crop"
                },
                { 
                  name: "Julianne Moore", 
                  text: "The packaging is as elegant as the snack itself. A true sensory journey from Bihar to my home.", 
                  title: "Lifestyle Blogger",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop"
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`group relative p-10 rounded-[3rem] transition-all duration-700 hover:-translate-y-4 border border-white/10 ${
                    idx === 0 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl' : 'bg-white/5 backdrop-blur-md'
                  }`}
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-gold-metallic/10 rounded-full blur-2xl group-hover:bg-brand-gold-metallic/20 transition-all"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-6 mb-8">
                       <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-gold-metallic/30 group-hover:border-brand-gold-metallic transition-all duration-500">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h4 className="text-xl font-serif font-bold text-brand-cream">{item.name}</h4>
                          <p className="text-[10px] uppercase tracking-widest text-brand-gold-metallic/60 font-black">{item.title}</p>
                       </div>
                    </div>
                    
                    <Quote className="w-10 h-10 text-brand-gold-metallic/20 mb-6 group-hover:text-brand-gold-metallic/40 transition-all" />
                    <p className="text-xl font-serif italic text-brand-cream/70 leading-relaxed">
                      "{item.text}"
                    </p>
                    
                    <div className="mt-8 flex text-brand-gold-metallic/40 space-x-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Meta Gallery */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20">
              <div>
                <h2 className="text-brand-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Community</h2>
                <h3 className="text-5xl md:text-7xl font-serif text-brand-forest tracking-tight">The Kreedha Aesthetic</h3>
              </div>
              <Link href="https://www.instagram.com/kreedhaofficial" target="_blank" className="mt-8 md:mt-0 flex items-center space-x-3 text-brand-forest font-bold text-xl hover:text-brand-gold transition-colors tracking-wide">
                <Instagram className="w-7 h-7" />
                <span className="underline-offset-4 underline decoration-brand-gold decoration-2">Follow @kreedhaofficial</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "/lifestyle_makhana_snack_1_1773513302318.png",
                "/lifestyle_makhana_snack_2_1773513322247.png",
                "/lifestyle_makhana_snack_3_1773513346328.png",
                "/lifestyle_makhana_snack_4_1773513364756.png"
              ].map((img, idx) => (
                <div key={idx} className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-2xl">
                  <img src={img} alt="Social Feed" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" />
                  <div className="absolute inset-0 bg-brand-forest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Instagram className="text-brand-gold w-12 h-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-brand-forest pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-cream relative z-10">
            <div className="inline-block p-6 rounded-3xl bg-brand-gold/10 text-brand-gold mb-12">
               <Mail className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tight">Refined Snacking, Delivered.</h2>
            <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto text-brand-cream/70 font-light leading-relaxed">
               Join our circle of refined enthusiasts. Receive exclusive invitations to private harvests, new flavor unveilings, and the art of soulful snacking.
            </p>
            <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-8 py-5 rounded-full bg-brand-cream/5 border border-brand-cream/10 text-brand-cream placeholder:text-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-brand-cream/10 transition-all text-lg"
                required
              />
              <button 
                type="submit" 
                className="bg-brand-gold text-brand-forest px-12 py-5 rounded-full font-bold hover:bg-white transition-all text-xl shadow-[0_0_20px_rgba(197,160,89,0.3)] transform hover:scale-105"
              >
                Join
              </button>
            </form>
            <p className="mt-8 text-sm text-brand-cream/30 tracking-[0.2em] uppercase font-medium">Privacy Guaranteed • Hand-crafted Correspondence</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
