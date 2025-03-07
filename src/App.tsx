import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Products } from './pages/Products.tsx';
import { About } from './pages/About.tsx';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact.tsx';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminBlogPosts } from './pages/admin/BlogPosts';
import { AdminEditPost } from './pages/admin/EditPost';
import { AdminLogin } from './pages/admin/Login';
import { AdminUsers } from './pages/admin/Users';
import { AdminProducts } from './pages/admin/Products';
import { AdminEditProduct } from './pages/admin/EditProduct';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className={isAdminRoute ? "min-h-screen bg-gray-50" : "min-h-screen bg-gradient-to-b from-dark-100 via-dark to-dark-50 relative"}>
      {!isAdminRoute && (
        <>
          {/* Background Gradients */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Purple gradient blob */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-radial from-purple/5 via-purple/[0.02] to-transparent opacity-80"></div>

            {/* Blue accent gradient */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-neon-blue/5 via-neon-blue/[0.02] to-transparent opacity-60"></div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-tech-grid opacity-5"></div>

            {/* Additional subtle gradients */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple/[0.03] to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-neon-blue/[0.03] to-transparent rounded-full transform translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {!isAdminRoute && <Navbar />}
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Admin Dashboard - Accessible by both admin and author */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Blog Management - Accessible by both admin and author */}
            <Route
              path="/admin/posts"
              element={
                <ProtectedRoute>
                  <AdminBlogPosts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/posts/new"
              element={
                <ProtectedRoute>
                  <AdminEditPost />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/posts/:id"
              element={
                <ProtectedRoute>
                  <AdminEditPost />
                </ProtectedRoute>
              }
            />

            {/* Product Management - Admin only */}
            <Route
              path="/admin/products"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products/new"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminEditProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products/:id"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminEditProduct />
                </ProtectedRoute>
              }
            />

            {/* User Management - Admin only */}
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminUsers />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;