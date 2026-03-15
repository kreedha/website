'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCart, Minus, Plus, Heart, Shield, Truck, Leaf, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const addItem = useCartStore((state) => state.addItem);
  const { items: wishlistItems, addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();

  useEffect(() => {
    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${params.id}`);
      const data = await response.json();

      if (data.success) {
        setProduct(data.product);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    if (product.stock <= 0) {
      toast.error('Product is out of stock');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        weight: product.weight,
      });
    }

    toast.success(`Added ${quantity} item(s) to collection!`);
    setQuantity(1);
  };

  const toggleWishlist = () => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        weight: product.weight,
      });
      toast.success('Added to wishlist');
    }
  };

  if (loading) {
    return (
      <div className="bg-brand-cream-soft min-h-screen">
        <Navbar />
        <div className="pt-40 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold-metallic"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-brand-cream-soft min-h-screen">
        <Navbar />
        <div className="pt-40 flex flex-col items-center justify-center space-y-6">
          <p className="text-3xl font-serif text-brand-forest italic opacity-40">Flavor of mystery...</p>
          <Link href="/products" className="text-brand-gold-dark font-black tracking-widest uppercase hover:underline">Return to Collection</Link>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-brand-cream-soft min-h-screen">
      <Navbar />
      <main className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center space-x-3 text-brand-forest/40 hover:text-brand-gold transition-colors mb-16 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Back to Collection</span>
          </Link>

          <div className="bg-white rounded-[4rem] shadow-[0_40px_100px_rgba(11,36,24,0.04)] overflow-hidden border border-gray-50">
            <div className="grid lg:grid-cols-2 gap-16 p-12 lg:p-24">
              {/* Images */}
              <div className="space-y-12">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {discount > 0 && (
                    <div className="absolute top-10 left-10 bg-brand-gold-metallic text-brand-forest px-8 py-3 rounded-full font-black tracking-[0.2em] uppercase shadow-2xl text-xs backdrop-blur-md bg-brand-gold-metallic/90">
                      {discount}% OFF
                    </div>
                  )}
                  <button 
                    onClick={toggleWishlist}
                    className={`absolute top-10 right-10 p-6 rounded-full backdrop-blur-md transition-all transform hover:scale-110 shadow-2xl ${
                      isInWishlist(product._id) ? 'bg-brand-gold-metallic text-white' : 'bg-white/80 text-brand-forest'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isInWishlist(product._id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-8">
                    {product.images.map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square rounded-[2rem] overflow-hidden transition-all transform hover:scale-105 ${
                          selectedImage === index ? 'ring-4 ring-brand-gold-metallic shadow-2xl scale-105 opacity-100' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-80'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="mb-12">
                  <span className="inline-block text-brand-gold-dark text-[10px] font-black tracking-[0.4em] uppercase mb-6">
                    {product.category}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-forest mb-8 tracking-tighter leading-tight">
                    <span className="shimmer-text">{product.name}</span>
                  </h1>
                  <div className="flex items-center space-x-8">
                    <span className="text-5xl font-serif font-bold text-brand-forest">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-2xl text-brand-sage-muted line-through opacity-40 font-light">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="prose prose-brand text-brand-forest/70 mb-16 max-w-none">
                  <p className="text-2xl font-light leading-relaxed italic opacity-80">
                    "{product.description}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-10 mb-16 p-10 bg-brand-cream-soft/50 rounded-[3rem] border border-brand-gold-light/20">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-brand-forest/5 rounded-2xl">
                      <Leaf className="w-8 h-8 text-brand-gold-metallic" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold-dark mb-1">Net Weight</p>
                      <p className="text-xl font-serif font-bold text-brand-forest">{product.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-brand-forest/5 rounded-2xl">
                      <Shield className="w-8 h-8 text-brand-gold-metallic" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold-dark mb-1">Stock</p>
                      <p className="text-xl font-serif font-bold text-brand-forest">
                        {product.stock > 0 ? `${product.stock} Units` : 'Sold Out'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto space-y-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold-dark mb-4">Quantity</p>
                      <div className="flex items-center space-x-8 bg-brand-cream-soft p-3 px-6 rounded-2xl border border-brand-forest/5">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-2 text-brand-forest hover:bg-white rounded-xl transition-all shadow-sm active:scale-90"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="text-2xl font-serif font-bold w-12 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                          disabled={quantity >= product.stock}
                          className="p-2 text-brand-forest hover:bg-white rounded-xl transition-all shadow-sm active:scale-90 disabled:opacity-20"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                    className="w-full bg-brand-forest text-brand-cream py-7 rounded-full hover:bg-brand-gold hover:text-brand-forest transition-all transform hover:scale-[1.02] active:scale-100 flex items-center justify-center space-x-6 text-xl font-bold tracking-widest uppercase shadow-[0_25px_60px_rgba(11,36,24,0.3)] disabled:bg-gray-100 disabled:text-gray-300 group overflow-hidden relative gold-hover-effect"
                  >
                    <ShoppingCart className="w-7 h-7 group-hover:scale-110 transition-transform duration-500 z-10" />
                    <span className="z-10">{product.stock <= 0 ? 'Currently Unavailable' : 'Add to Collection'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Values Banner */}
            <div className="bg-brand-forest p-20 grid md:grid-cols-3 gap-16 text-brand-cream border-t border-brand-gold-metallic/20">
              <div className="flex flex-col items-center text-center space-y-6 group">
                 <div className="p-5 rounded-full border border-brand-gold-metallic/30 group-hover:bg-brand-gold-metallic/10 transition-colors">
                    <Truck className="w-8 h-8 text-brand-gold-metallic" />
                 </div>
                  <div>
                    <p className="text-[10px] tracking-[0.4em] uppercase font-black mb-2 text-brand-gold-light">Worldwide</p>
                    <p className="text-lg font-serif italic tracking-wide">PAN India & Global Shipping</p>
                  </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6 group">
                 <div className="p-5 rounded-full border border-brand-gold-metallic/30 group-hover:bg-brand-gold-metallic/10 transition-colors">
                    <Shield className="w-8 h-8 text-brand-gold-metallic" />
                 </div>
                 <div>
                    <p className="text-[10px] tracking-[0.4em] uppercase font-black mb-2 text-brand-gold-light">Quality</p>
                    <p className="text-lg font-serif italic tracking-wide">Artisanal Batch Verified</p>
                 </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-6 group">
                 <div className="p-5 rounded-full border border-brand-gold-metallic/30 group-hover:bg-brand-gold-metallic/10 transition-colors">
                    <Leaf className="w-8 h-8 text-brand-gold-metallic" />
                 </div>
                 <div>
                    <p className="text-[10px] tracking-[0.4em] uppercase font-black mb-2 text-brand-gold-light">Purity</p>
                    <p className="text-lg font-serif italic tracking-wide">100% Ethically Sourced</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
