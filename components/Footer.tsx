'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-forest pt-24 pb-12 text-brand-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col">
                <span className="text-4xl font-serif font-bold shimmer-text tracking-tighter">Kreedha</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold-light/40 -mt-1 font-black font-sans">From Farm to Soul</span>
              </div>
            </Link>
            <p className="text-brand-cream/60 leading-relaxed text-lg font-light">
              Pioneers in premium, ethically sourced fox nuts. We believe in snacking that nourishes both the body and the soul.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-brand-gold-dark text-[10px] font-black uppercase tracking-[0.4em]">L'Essentiel</h4>
            <ul className="space-y-5">
              <li><Link href="/" className="text-lg hover:text-brand-gold-metallic transition-all hover:translate-x-2 inline-block font-light italic">Home</Link></li>
              <li><Link href="/products" className="text-lg hover:text-brand-gold-metallic transition-all hover:translate-x-2 inline-block font-light italic">Makhana Collection</Link></li>
              <li><Link href="/about" className="text-lg hover:text-brand-gold-metallic transition-all hover:translate-x-2 inline-block font-light italic">The Heritage</Link></li>
              <li><Link href="/contact" className="text-lg hover:text-brand-gold-metallic transition-all hover:translate-x-2 inline-block font-light italic">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-brand-gold-dark text-[10px] font-black uppercase tracking-[0.4em]">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-5 group cursor-default">
                <MapPin className="w-5 h-5 text-brand-gold-metallic/40 group-hover:text-brand-gold-metallic transition-colors shrink-0" />
                <span className="text-brand-cream/60 font-light text-sm tracking-wide">Bihar, India - The Soul of Makhana</span>
              </li>
              <li className="flex items-center space-x-5 group cursor-pointer">
                <Mail className="w-5 h-5 text-brand-gold-metallic/40 group-hover:text-brand-gold-metallic transition-colors shrink-0" />
                <span className="text-brand-cream/60 font-light text-sm tracking-wide">Info.kreedha@gmail.com</span>
              </li>
              <li className="flex items-center space-x-5 group cursor-pointer">
                <Phone className="w-5 h-5 text-brand-gold-metallic/40 group-hover:text-brand-gold-metallic transition-colors shrink-0" />
                <span className="text-brand-cream/60 font-light text-sm tracking-wide">+91 96815 40009</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-8">
            <h4 className="text-brand-gold-dark text-[10px] font-black uppercase tracking-[0.4em]">The Community</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/kreedhaofficial" },
                { Icon: Facebook, href: "https://www.facebook.com/share/1AXpwnmb52/" },
                { Icon: Twitter, href: "https://x.com/RanjeetChaudary" },
                { Icon: Youtube, href: "https://youtube.com/@ranjeetchaudhary-u1y?si=qZnsGW41wecuKjUh" }
              ].map(({ Icon, href }, idx) => (
                <Link key={idx} href={href} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 text-brand-gold-metallic/60 hover:bg-brand-gold-metallic hover:text-brand-forest transition-all duration-500 transform hover:-translate-y-2 border border-white/5">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <p className="text-brand-cream/20 text-[10px] font-black uppercase tracking-[0.2em]">Follow @kreedhaofficial</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-cream/30 text-sm font-light tracking-widest uppercase">
            &copy; {new Date().getFullYear()} KREEDHA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-brand-cream/30 text-sm font-light">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-brand-cream/20 text-[10px] tracking-[0.2em] uppercase">
          Proprietor: Ramayan Chaudhary | GST: 10AHFPC9774P1ZZ | UDYAM: UDYAM-BR-38-0053959
        </div>
      </div>
    </footer>
  );
}
