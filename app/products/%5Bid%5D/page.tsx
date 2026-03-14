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
      <>
        <Navbar />
        <div className="min-h-screen bg-brand-cream flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center space-y-6">
          <p className="text-3xl font-serif text-brand-forest">Flavor of mystery...</p>
          <Link href="/products" className="text-brand-gold font-bold hover:underline">Return to Collection</Link>
        </div>
        <Footer />
      </>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-cream pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center space-x-2 text-brand-forest/60 hover:text-brand-gold transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Back to Collection</span>
          </Link>

          <div className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-50">
            <div className="grid lg:grid-cols-2 gap-16 p-12 lg:p-20">
              {/* Images */}
              <div className="space-y-8">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl group">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {discount > 0 && (
                    <div className="absolute top-8 left-8 bg-brand-gold text-brand-forest px-6 py-2 rounded-full font-bold tracking-widest uppercase shadow-lg text-sm">
                      {discount}% OFF
                    </div>
                  )}
                  <button 
                    onClick={toggleWishlist}
                    className={`absolute top-8 right-8 p-5 rounded-full backdrop-blur-md transition-all transform hover:scale-110 shadow-lg ${
                      isInWishlist(product._id) ? 'bg-brand-gold text-white' : 'bg-white/80 text-brand-forest'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isInWishlist(product._id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-6">
                    {product.images.map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square rounded-2xl overflow-hidden transition-all transform hover:scale-105 ${
                          selectedImage === index ? 'ring-4 ring-brand-gold shadow-lg scale-105' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
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
                <div className="mb-10">
                  <span className="inline-block text-brand-gold px-0 py-1 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-forest mb-6 tracking-tight">
                    {product.name}
                  </h1>
                  <div className="flex items-center space-x-6">
                    <span className="text-4xl font-serif font-bold text-brand-forest">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-2xl text-brand-sage line-through opacity-40 font-light">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="prose prose-brand text-brand-forest/70 mb-12 max-w-none">
                  <p className="text-xl font-light leading-relaxed italic">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-12 p-8 bg-brand-cream/30 rounded-[2rem] border border-brand-forest/5">
                  <div className="flex items-center space-x-4">
                    <Leaf className="w-8 h-8 text-brand-gold" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Net Weight</p>
                      <p className="text-lg font-serif font-bold text-brand-forest">{product.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Shield className="w-8 h-8 text-brand-gold" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Availability</p>
                      <p className="text-lg font-serif font-bold text-brand-forest">
                        {product.stock > 0 ? `${product.stock} Units` : 'Sold Out'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto space-y-8">
                  <div className="flex items-center space-x-10">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Quantity</p>
                      <div className="flex items-center space-x-6 bg-brand-cream/50 p-2 px-4 rounded-2xl border border-brand-forest/5">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-2 text-brand-forest hover:bg-white rounded-xl transition-all active:scale-95"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="text-2xl font-serif font-bold w-10 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                          disabled={quantity >= product.stock}
                          className="p-2 text-brand-forest hover:bg-white rounded-xl transition-all active:scale-95 disabled:opacity-20"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock <= 0}
                    className="w-full bg-brand-forest text-brand-cream py-6 rounded-full hover:bg-brand-gold hover:text-brand-forest transition-all transform hover:scale-[1.02] active:scale-100 flex items-center justify-center space-x-4 text-xl font-bold shadow-2xl disabled:bg-gray-200 disabled:text-gray-400 group"
                  >
                    <ShoppingCart className="w-7 h-7 group-hover:scale-110 transition-transform" />
                    <span>{product.stock <= 0 ? 'Currently Unavailable' : 'Add to Collection'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Values Banner */}
            <div className="bg-brand-forest p-16 grid md:grid-cols-3 gap-12 text-brand-cream border-t border-brand-gold/20">
              <div className="flex items-center space-x-6">
                 <Truck className="w-10 h-10 text-brand-gold" />
                 <p className="text-sm tracking-widest uppercase font-bold">Complimentary Concierge Delivery</p>
              </div>
              <div className="flex items-center space-x-6">
                 <Shield className="w-10 h-10 text-brand-gold" />
                 <p className="text-sm tracking-widest uppercase font-bold">Artisanal Batch Quality Guaranteed</p>
              </div>
              <div className="flex items-center space-x-6">
                 <Leaf className="w-10 h-10 text-brand-gold" />
                 <p className="text-sm tracking-widest uppercase font-bold">100% Ethically Sourced Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
