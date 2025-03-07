import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Trophy, Target, Clock, Users, ChevronRight, CheckCircle } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-20 bg-dark">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 md:pt-40">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient blobs */}
          <div className="absolute w-[800px] h-[800px] bg-gradient-radial from-purple/20 via-purple/5 to-transparent -top-20 -right-20 blur-3xl rotate-12 animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-neon-blue/15 via-neon-blue/5 to-transparent bottom-0 -left-20 blur-2xl -rotate-12"></div>

          {/* Additional gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple/5 via-transparent to-neon-blue/5"></div>

          {/* Animated subtle gradients */}
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-purple/10 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-gradient-radial from-neon-blue/10 to-transparent rounded-full animate-pulse delay-1000"></div>

          {/* Tech grid overlay */}
          <div className="absolute inset-0 bg-tech-grid opacity-[0.07]"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                <span className="text-purple">Elevate</span> Your
                <br />Golf Game
              </h1>
              <p className="text-lg text-gray-300 max-w-lg">
                Experience precision and excellence with our premium golf equipment and expert training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/products"
                  className="neon-border px-6 py-3 rounded-full hover-glow bg-dark-200/50 flex items-center gap-2 justify-center text-white"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full border border-gray-700 hover:border-purple transition-colors flex items-center gap-2 justify-center text-gray-300"
                >
                  Contact Us
                </Link>
              </div>
              {/* Social Proof */}
              <div className="flex items-center gap-4 text-gray-300 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                      alt={`Customer ${i}`}
                      className="w-8 h-8 rounded-full border-2 border-dark"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-purple text-purple" />
                    ))}
                  </div>
                  <p className="text-sm">From over 1,000+ happy customers</p>
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="relative hidden lg:block">
              {/* Main Image */}
              <div className="relative z-10 rounded-xl overflow-hidden neon-border">
                <img
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80"
                  alt="Golf player in action"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute top-20 -right-8 z-20 glass-panel p-3 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80"
                  alt="Golf club"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
              <div className="absolute bottom-20 -left-8 z-20 glass-panel p-3 animate-float delay-200">
                <img
                  src="https://images.unsplash.com/photo-1535132011086-b8818f016104?auto=format&fit=crop&q=80"
                  alt="Professional golf club set"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Multiple gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-100/90 via-dark/70 to-dark-50/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple/10 via-transparent to-neon-blue/10"></div>
          <div className="absolute inset-0 bg-tech-grid opacity-[0.05]"></div>

          {/* Animated gradient orbs */}
          <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple/15 via-purple/5 to-transparent -translate-y-1/2 blur-3xl animate-pulse"></div>
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-radial from-neon-blue/10 via-neon-blue/5 to-transparent blur-2xl animate-pulse delay-700"></div>
        </div>

        {/* Content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
            Featured <span className="neon-text">Products</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pro Series Driver",
                image: "https://images.unsplash.com/photo-1587174486073-ae5e3bc08eb9?auto=format&fit=crop&q=80",
                price: "$299.99"
              },
              {
                title: "Premium Golf Balls",
                image: "https://images.unsplash.com/photo-1506113278003-dada2e1699d5?auto=format&fit=crop&q=80",
                price: "$49.99"
              },
              {
                title: "Elite Putter",
                image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80",
                price: "$199.99"
              }
            ].map((product, i) => (
              <div key={i} className="glass-panel p-4 group cursor-pointer hover-glow">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">{product.title}</h3>
                <p className="text-purple">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          {/* Rich gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-100/80 via-dark/90 to-dark-100/80"></div>
          <div className="absolute inset-0 bg-gradient-conic from-purple/10 via-neon-blue/10 to-purple/10 animate-slow-spin"></div>
          <div className="absolute left-0 w-[800px] h-full bg-gradient-radial from-purple/10 via-purple/5 to-transparent"></div>
          <div className="absolute right-0 w-[800px] h-full bg-gradient-radial from-neon-blue/10 via-neon-blue/5 to-transparent"></div>

          {/* Animated elements */}
          <div className="absolute inset-0 bg-tech-grid opacity-[0.07] rotate-6"></div>
          <div className="absolute w-full h-[500px] top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-purple/5 to-transparent animate-pulse"></div>
        </div>

        {/* Content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Why Choose <span className="neon-text">PrecisionGolf</span>
            </h2>
            <p className="text-gray-300">
              Experience the perfect blend of innovation and tradition with our cutting-edge golf equipment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: "Premium Quality",
                description: "Crafted with the finest materials for exceptional performance"
              },
              {
                icon: Target,
                title: "Precision Engineering",
                description: "Advanced technology for improved accuracy and control"
              },
              {
                icon: Clock,
                title: "Lifetime Warranty",
                description: "Confidence in our products' durability and reliability"
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Professional guidance for your equipment selection"
              }
            ].map((feature, i) => (
              <div key={i} className="glass-panel p-6 text-center hover-glow">
                <feature.icon className="w-10 h-10 text-purple mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          {/* Layered gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-50/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple/5 via-transparent to-neon-blue/5"></div>

          {/* Multiple gradient orbs */}
          <div className="absolute top-0 left-1/2 w-[1000px] h-[600px] bg-gradient-radial from-purple/10 via-purple/5 to-transparent -translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-neon-blue/10 to-transparent blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-purple/10 to-transparent blur-2xl animate-pulse delay-500"></div>

          {/* Tech grid with animation */}
          <div className="absolute inset-0 bg-tech-grid opacity-[0.05] animate-pulse"></div>
        </div>

        {/* Content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-16 text-center text-white">
            What Our <span className="neon-text">Customers Say</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Professional Golfer",
                image: "https://randomuser.me/api/portraits/men/41.jpg",
                quote: "The precision and quality of these clubs have significantly improved my game."
              },
              {
                name: "Sarah Johnson",
                role: "Golf Enthusiast",
                image: "https://randomuser.me/api/portraits/women/42.jpg",
                quote: "Best investment I've made in my golfing journey. The customer service is exceptional."
              },
              {
                name: "Mike Williams",
                role: "Golf Instructor",
                image: "https://randomuser.me/api/portraits/men/43.jpg",
                quote: "I recommend PrecisionGolf to all my students. The quality is unmatched."
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass-panel p-6 hover-glow">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-dark"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-purple text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{testimonial.quote}"</p>
                <div className="flex items-center gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-purple text-purple" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          {/* Complex gradient composition */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-100/90 via-dark/70 to-dark-100/90"></div>
          <div className="absolute inset-0 bg-gradient-conic from-purple/10 via-neon-blue/5 to-purple/10 animate-slow-spin opacity-70"></div>
          <div className="absolute inset-0 bg-tech-grid opacity-[0.07] -rotate-3"></div>

          {/* Animated gradient elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-purple/15 via-purple/5 to-transparent blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-neon-blue/15 via-neon-blue/5 to-transparent blur-2xl animate-pulse delay-1000"></div>
        </div>

        {/* Content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                Enhance Your <span className="neon-text">Performance</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Advanced materials for superior durability",
                  "Precision-engineered for maximum control",
                  "Customization options for perfect fit",
                  "Professional-grade quality standards"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/products"
                className="neon-border px-6 py-3 rounded-full hover-glow bg-dark-200/50 inline-flex items-center gap-2 mt-8"
              >
                View All Products
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden neon-border">
                <img
                  src="https://images.unsplash.com/photo-1591491679760-4a5b5fc9b8d3?auto=format&fit=crop&q=80"
                  alt="Golf course"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-xl">
                <p className="text-4xl font-bold text-purple mb-1">15+</p>
                <p className="text-sm text-gray-300">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-12 text-center relative overflow-hidden">
            {/* Rich gradient effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple/10 via-dark-100/50 to-neon-blue/10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-dark-100/30 via-transparent to-dark-100/30"></div>
              <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple/15 to-transparent -translate-x-1/2 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-neon-blue/15 to-transparent -translate-x-1/2 blur-3xl animate-pulse delay-700"></div>
              <div className="absolute inset-0 bg-tech-grid opacity-[0.05]"></div>
            </div>

            {/* Content container */}
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Ready to Transform Your Game?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Join thousands of satisfied golfers who have elevated their game with PrecisionGolf equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="neon-border px-8 py-4 rounded-full hover-glow bg-dark-200/50 inline-flex items-center gap-2 justify-center"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full border border-gray-700 hover:border-purple transition-colors inline-flex items-center gap-2 justify-center"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}