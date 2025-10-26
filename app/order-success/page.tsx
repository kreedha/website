'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('orderNumber');

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Order Placed Successfully! 🎉
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your order. We'll start preparing it right away!
            </p>

            {orderNumber && (
              <div className="bg-primary-50 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Your Order Number</p>
                <p className="text-2xl font-bold text-primary-600">{orderNumber}</p>
              </div>
            )}

            <div className="space-y-4 text-left mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Order Confirmation</h3>
                  <p className="text-sm text-gray-600">
                    You'll receive a confirmation email shortly with your order details.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Order Processing</h3>
                  <p className="text-sm text-gray-600">
                    We'll carefully pack your Makhana to ensure freshness.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Your order will be delivered to your doorstep. Pay cash on delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/products"
                className="block w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
