'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Truck, Shield, Leaf } from 'lucide-react';
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
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  <span className="text-primary-600">Kreedha</span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">From Farm to Soul</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Discover the finest fox nuts, roasted to perfection. 
                  Healthy snacking made delicious with our premium Makhana collection - straight from the farm to your soul.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition text-lg font-semibold"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="relative h-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800"
                    alt="Premium Makhana"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Leaf className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
                <p className="text-gray-600">
                  No artificial flavors or preservatives. Pure and healthy.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Truck className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Quick and reliable delivery across India.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-gray-600">
                  Premium quality products with guaranteed freshness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600">
                Handpicked selection of our best-selling Makhana
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>
            ) : featuredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product: any) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No featured products available at the moment.</p>
              </div>
            )}

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                <span>View All Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Makhana?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Star className="w-6 h-6 text-primary-600 mr-2" />
                  Premium Quality
                </h3>
                <p className="text-gray-700">
                  We source our Makhana from the finest farms, ensuring every bite is crispy, 
                  fresh, and packed with nutrients. Our rigorous quality checks guarantee 
                  you get only the best.
                </p>
              </div>
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Leaf className="w-6 h-6 text-primary-600 mr-2" />
                  Health Benefits
                </h3>
                <p className="text-gray-700">
                  Low in calories, high in protein, and rich in antioxidants. Makhana is 
                  perfect for weight management, heart health, and provides sustained energy 
                  throughout the day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
