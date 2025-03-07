import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface User {
    username: string;
    role: 'admin' | 'author';
}

export function AdminUsers() {
    const { isAdmin } = useAuth();
    const [newUser, setNewUser] = useState({ username: '', password: '', role: 'author' as const });
    const [users, setUsers] = useState<User[]>([
        { username: 'admin', role: 'admin' },
        { username: 'author1', role: 'author' },
    ]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUsers([...users, { username: newUser.username, role: newUser.role }]);
        setNewUser({ username: '', password: '', role: 'author' });
    };

    if (!isAdmin) {
        return <div>Access denied. Admin privileges required.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>

                    {/* Add New User Form */}
                    <form onSubmit={handleSubmit} className="mb-8">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={newUser.username}
                                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={newUser.password}
                                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <select
                                    id="role"
                                    value={newUser.role}
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'admin' | 'author' })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                >
                                    <option value="author">Author</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                Add User
                            </button>
                        </div>
                    </form>

                    {/* Users List */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Current Users</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Username
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => (
                                        <tr key={user.username}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {user.username}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {user.role}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button className="text-red-600 hover:text-red-900">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 