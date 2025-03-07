import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';

export function EditProduct() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/admin/products"
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <h1 className="text-2xl font-semibold text-gray-900">Add New Product</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                                Save as Draft
                            </button>
                            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Information */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter product name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter product description"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Media */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Media</h2>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                                <div className="text-center">
                                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <div className="text-gray-600 mb-2">Drag and drop your images here</div>
                                    <div className="text-sm text-gray-500 mb-4">or</div>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                                        Browse Files
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {[1, 2].map((item) => (
                                    <div key={item} className="relative group">
                                        <img
                                            src="https://images.unsplash.com/photo-1587174486073-ae5e3bc08eb9?auto=format&fit=crop&q=80"
                                            alt="Product preview"
                                            className="w-full aspect-square rounded-lg object-cover"
                                        />
                                        <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            <X className="w-4 h-4 text-gray-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Pricing</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                        Regular Price
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <input
                                            type="number"
                                            id="price"
                                            className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="comparePrice" className="block text-sm font-medium text-gray-700 mb-1">
                                        Compare at Price
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <input
                                            type="number"
                                            id="comparePrice"
                                            className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Status & Visibility */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Status & Visibility</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option>Active</option>
                                        <option>Draft</option>
                                        <option>Archived</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="visibility" className="block text-sm font-medium text-gray-700 mb-1">
                                        Visibility
                                    </label>
                                    <select
                                        id="visibility"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option>Public</option>
                                        <option>Hidden</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Organization */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Organization</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option>Clubs</option>
                                        <option>Balls</option>
                                        <option>Accessories</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                                        Tags
                                    </label>
                                    <input
                                        type="text"
                                        id="tags"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter tags"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Inventory */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Inventory</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-1">
                                        SKU
                                    </label>
                                    <input
                                        type="text"
                                        id="sku"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter SKU"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                                        Stock Quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="stock"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter quantity"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 