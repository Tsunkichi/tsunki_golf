import React from 'react';
import { motion } from 'framer-motion';

export function Products() {
  const products = [
    {
      name: 'Pro Tour X',
      description: 'Professional-grade golf ball with advanced aerodynamics',
      features: ['Maximum Distance', 'Exceptional Control', 'Tour-proven Performance'],
      image: 'https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Distance Elite',
      description: 'Engineered for maximum distance and durability',
      features: ['Extended Flight', 'Durable Cover', 'Consistent Performance'],
      image: 'https://images.unsplash.com/photo-1535131749006-b7d58b42b69b?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Control Master',
      description: 'Designed for precise control and soft feel',
      features: ['Superior Feel', 'Enhanced Spin', 'Precise Control'],
      image: 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-12">Our Products</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-dark-50 rounded-xl overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-midnight-500 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}