import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShoppingBag, Users, Settings, BarChart2, MessageSquare, Image, Tag } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">PrecisionGolf Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  A
                </div>
                <span className="text-sm text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Products', value: '24', change: '+2', trend: 'up' },
              { label: 'Active Users', value: '1,234', change: '+15%', trend: 'up' },
              { label: 'Total Orders', value: '89', change: '+5', trend: 'up' },
              { label: 'Revenue', value: '$12,345', change: '+8%', trend: 'up' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 mb-1">{stat.change}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Admin Sections */}
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                title: 'Products',
                description: 'Manage your product catalog',
                icon: ShoppingBag,
                link: '/admin/products',
                color: 'text-blue-600',
              },
              {
                title: 'Blog Posts',
                description: 'Manage your blog content',
                icon: FileText,
                link: '/admin/posts',
                color: 'text-purple-600',
              },
              {
                title: 'Users',
                description: 'Manage user accounts',
                icon: Users,
                link: '/admin/users',
                color: 'text-green-600',
              },
              {
                title: 'Analytics',
                description: 'View site statistics',
                icon: BarChart2,
                link: '/admin/analytics',
                color: 'text-orange-600',
              },
              {
                title: 'Media',
                description: 'Manage images and files',
                icon: Image,
                link: '/admin/media',
                color: 'text-pink-600',
              },
              {
                title: 'Categories',
                description: 'Manage product categories',
                icon: Tag,
                link: '/admin/categories',
                color: 'text-yellow-600',
              },
              {
                title: 'Messages',
                description: 'View customer inquiries',
                icon: MessageSquare,
                link: '/admin/messages',
                color: 'text-indigo-600',
              },
              {
                title: 'Settings',
                description: 'Configure site settings',
                icon: Settings,
                link: '/admin/settings',
                color: 'text-gray-600',
              },
            ].map((section, i) => (
              <Link
                key={i}
                to={section.link}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <section.icon className={`w-8 h-8 ${section.color} mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{section.title}</h3>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </Link>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-200">
                {[
                  { action: 'New order received', time: '2 minutes ago', type: 'order' },
                  { action: 'Product "Pro Driver X1" updated', time: '1 hour ago', type: 'product' },
                  { action: 'New user registered', time: '3 hours ago', type: 'user' },
                  { action: 'Blog post published', time: '5 hours ago', type: 'blog' },
                ].map((activity, i) => (
                  <div key={i} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-900">{activity.action}</p>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}