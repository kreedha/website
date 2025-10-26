'use client';

import { useEffect, useState } from 'react';
import { Package, ShoppingBag, IndianRupee, TrendingUp } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    pendingOrders: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      const [productsRes, ordersRes] = await Promise.all([
        fetch('/api/admin/products', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('/api/admin/orders', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const productsData = await productsRes.json();
      const ordersData = await ordersRes.json();

      if (productsData.success && ordersData.success) {
        const totalRevenue = ordersData.orders.reduce(
          (sum: number, order: any) => sum + order.totalAmount,
          0
        );
        const pendingOrders = ordersData.orders.filter(
          (order: any) => order.status === 'Pending'
        ).length;

        setStats({
          totalProducts: productsData.products.length,
          totalOrders: ordersData.orders.length,
          pendingOrders,
          totalRevenue,
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      icon: ShoppingBag,
      color: 'bg-green-500',
    },
    {
      title: 'Pending Orders',
      value: stats.pendingOrders,
      icon: TrendingUp,
      color: 'bg-yellow-500',
    },
    {
      title: 'Total Revenue',
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      icon: IndianRupee,
      color: 'bg-purple-500',
    },
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="/admin/products"
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition"
            >
              <Package className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="font-semibold">Manage Products</h3>
                <p className="text-sm text-gray-600">Add, edit, or remove products</p>
              </div>
            </a>
            <a
              href="/admin/orders"
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition"
            >
              <ShoppingBag className="w-6 h-6 text-primary-600" />
              <div>
                <h3 className="font-semibold">View Orders</h3>
                <p className="text-sm text-gray-600">Process and track orders</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
