'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    weight: string;
    stock: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();

    if (product.stock <= 0) {
      toast.error('Product is out of stock');
      return;
    }

    addItem({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      weight: product.weight,
    });

    toast.success('Added to cart!');
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/products/${product._id}`}>
      <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden hover:shadow-[0_40px_80px_rgba(11,36,24,0.08)] transition-all duration-700 group border border-gray-50 flex flex-col h-full">
        <div className="relative h-80 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          {discount > 0 && (
            <div className="absolute top-6 left-6 bg-brand-gold-metallic text-brand-forest px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl backdrop-blur-sm bg-brand-gold-metallic/90">
              {discount}% OFF
            </div>
          )}
          {product.stock <= 0 && (
            <div className="absolute inset-0 bg-brand-forest/40 backdrop-blur-[2px] flex items-center justify-center">
              <span className="text-brand-cream text-lg font-serif italic tracking-widest text-shadow-premium">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="p-10 flex flex-col flex-1">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold-dark font-black mb-4">{product.weight}</p>
          <h3 className="text-2xl font-serif font-bold text-brand-forest mb-6 line-clamp-1 group-hover:shimmer-text transition-all duration-500">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mb-10 mt-auto">
            <div className="flex items-baseline space-x-4">
              <span className="text-3xl font-serif font-bold text-brand-forest">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-brand-sage-muted line-through opacity-50 font-light">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className="w-full bg-brand-forest text-brand-cream py-5 rounded-full hover:bg-brand-gold hover:text-brand-forest transition-all duration-500 flex items-center justify-center space-x-4 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed group/btn shadow-xl gold-hover-effect overflow-hidden relative"
          >
            <ShoppingCart className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-500 z-10" />
            <span className="font-bold tracking-widest uppercase text-sm z-10">{product.stock <= 0 ? 'Unavailable' : 'Add to Collection'}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
