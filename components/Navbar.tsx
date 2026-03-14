'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Menu, X, User, Search, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-nav rounded-full px-8 py-4 flex items-center justify-between transition-all duration-700 ${
           scrolled ? 'shadow-2xl border-brand-gold/10' : 'bg-white/30 border-white/10'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl font-serif font-bold tracking-tighter text-brand-forest group-hover:shimmer-text transition-all duration-500">
              KREEDHA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {['Products', 'Journey', 'Wellness', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'products' ? 'products' : item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-[0.25em] text-brand-forest/70 hover:text-brand-gold transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
             <button className="p-2 text-brand-forest hover:text-brand-gold transition-colors md:block hidden">
              <Search className="w-5 h-5" />
            </button>
            
            <Link href="/wishlist" className="p-2 text-brand-forest hover:text-brand-gold transition-all relative group">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-forest text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link href="/cart" className="p-2 text-brand-forest hover:text-brand-gold transition-all relative group">
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-forest text-brand-cream text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 text-brand-forest"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-8 py-8 space-y-8 shadow-2xl">
          <div className="space-y-6">
            {['Products', 'Journey', 'Wellness', 'Contact', 'Wishlist', 'Cart'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'products' ? 'products' : item.toLowerCase()}`}
                className="block text-2xl font-serif text-brand-forest hover:text-brand-gold"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex space-x-6">
            <Link href="https://www.instagram.com/kreedhaofficial" target="_blank" className="text-brand-forest/60 hover:text-brand-gold">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://www.facebook.com/share/1AXpwnmb52/" target="_blank" className="text-brand-forest/60 hover:text-brand-gold">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://x.com/RanjeetChaudary" target="_blank" className="text-brand-forest/60 hover:text-brand-gold">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="https://youtube.com/@ranjeetchaudhary-u1y?si=qZnsGW41wecuKjUh" target="_blank" className="text-brand-forest/60 hover:text-brand-gold">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
