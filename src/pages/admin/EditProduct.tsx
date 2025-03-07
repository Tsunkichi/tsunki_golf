import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';

interface ProductFormData {
    name: string;
    price: number;
    category: string;
    stock: number;
    status: 'active' | 'inactive';
    image: string;
    description: string;
}

export function AdminEditProduct() {
    const { isAdmin } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const isNew = !id;

    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        price: 0,
        category: '',
        stock: 0,
        status: 'active',
        image: '',
        description: '',
    });

    if (!isAdmin) {
        return <div>Access denied. Admin privileges required.</div>;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        navigate('/admin/products');
    };

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
                            <h1 className="text-2xl font-semibold text-gray-900">
                                {isNew ? 'Add New Product' : 'Edit Product'}
                            </h1>
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
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        {isNew ? 'Add New Product' : 'Edit Product'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Basic Information */}
                            <div className="sm:col-span-2">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            rows={3}
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Pricing</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Price
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">$</span>
                                            </div>
                                            <input
                                                type="number"
                                                id="price"
                                                value={formData.price}
                                                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                                                className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Inventory */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Inventory</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                                            Stock
                                        </label>
                                        <input
                                            type="number"
                                            id="stock"
                                            value={formData.stock}
                                            onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                            Status
                                        </label>
                                        <select
                                            id="status"
                                            value={formData.status}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                        >
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Category */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Category</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                            Category
                                        </label>
                                        <select
                                            id="category"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                            required
                                        >
                                            <option value="">Select a category</option>
                                            <option value="Clubs">Clubs</option>
                                            <option value="Balls">Balls</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Apparel">Apparel</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Media */}
                            <div className="sm:col-span-2">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Media</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                            Product Image URL
                                        </label>
                                        <input
                                            type="url"
                                            id="image"
                                            value={formData.image}
                                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                onClick={() => navigate('/admin/products')}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                {isNew ? 'Create Product' : 'Update Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 