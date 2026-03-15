'use client';

import React from 'react';
import { Globe, Truck } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-brand-forest overflow-hidden py-3 relative border-b border-brand-gold-metallic/20">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold-metallic/5 to-transparent animate-shimmer"></div>
      
      <div className="flex justify-center items-center space-x-8 px-4 relative z-10 transition-all duration-1000">
        <div className="flex items-center space-x-3 group">
          <Globe className="w-3.5 h-3.5 text-brand-gold-metallic animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-cream/90">
            Local to Global
          </span>
        </div>
        
        <div className="h-1 w-1 rounded-full bg-brand-gold-metallic/30"></div>
        
        <div className="flex items-center space-x-4">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black shimmer-text">
            PAN-India & International Shipping Available
          </span>
          <Truck className="w-3.5 h-3.5 text-brand-gold-metallic group-hover:translate-x-1 transition-transform duration-500" />
        </div>

        <div className="md:flex hidden h-1 w-1 rounded-full bg-brand-gold-metallic/30"></div>

        <div className="md:flex hidden items-center space-x-3">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-cream/60 italic">
            Artisanal Makhana Worldwide
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
