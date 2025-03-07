import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About PrecisionGolf</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            We are dedicated to pushing the boundaries of golf ball technology,
            combining cutting-edge materials with precision engineering to create
            products that enhance your game.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2020, PrecisionGolf emerged from a simple vision: to create
              golf balls that combine advanced technology with unmatched precision.
            </p>
            <p className="text-gray-400">
              Our team of engineers and golf enthusiasts work tirelessly to develop
              products that help players of all skill levels improve their game.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800"
              alt="Golf Course"
              className="rounded-xl"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="bg-dark-50 p-6 rounded-xl">
            <Award className="w-10 h-10 text-midnight-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-400">
              Rigorous testing and quality control in every production batch.
            </p>
          </div>

          <div className="bg-dark-50 p-6 rounded-xl">
            <Users className="w-10 h-10 text-midnight-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-400">
              Skilled engineers and golf professionals guiding our innovation.
            </p>
          </div>

          <div className="bg-dark-50 p-6 rounded-xl">
            <Target className="w-10 h-10 text-midnight-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Precision Focus</h3>
            <p className="text-gray-400">
              Attention to detail in every aspect of design and manufacturing.
            </p>
          </div>

          <div className="bg-dark-50 p-6 rounded-xl">
            <Lightbulb className="w-10 h-10 text-midnight-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-400">
              Continuous research and development for better performance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}