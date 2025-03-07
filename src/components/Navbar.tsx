import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Goal as GolfBall } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 mx-4 mt-4',
        scrolled
          ? 'glass-panel border-b border-dark-300/50'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <GolfBall className="w-8 h-8 text-purple transition-colors group-hover:text-neon-blue" />
          <span className="text-xl font-bold neon-text">PrecisionGolf</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/products"
            className={cn(
              'text-gray-300 hover:text-white transition-colors relative group',
              location.pathname === '/products' && 'text-purple'
            )}
          >
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className={cn(
              'text-gray-300 hover:text-white transition-colors relative group',
              location.pathname === '/about' && 'text-purple'
            )}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/blog"
            className={cn(
              'text-gray-300 hover:text-white transition-colors relative group',
              location.pathname === '/blog' && 'text-purple'
            )}
          >
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="neon-border px-6 py-2 rounded-full hover-glow bg-dark-200/50"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}