import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16"
        >
          <div>
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 mb-8">
              Have questions about our products? We're here to help you find the
              perfect golf balls for your game.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-midnight-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">contact@precisiongolf.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-midnight-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-midnight-500" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-400">
                    123 Golf Drive<br />
                    Innovation Park<br />
                    Tech Valley, CA 94025
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-midnight-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-midnight-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-dark-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-midnight-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-midnight-600 text-white py-3 rounded-lg hover:bg-midnight-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}