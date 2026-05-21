import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterSidebar } from '../components/FilterSidebar';
import { ProductCard } from '../components/ProductCard';
import { mockProducts, getFeaturedProduct } from '../data/mockProducts';
import { ShieldCheck, Truck, CreditCard, RefreshCw } from 'lucide-react';

export const Home = () => {
  const featuredProduct = getFeaturedProduct();
  const [activeSeries, setActiveSeries] = useState('All Series');

  const seriesFilters = ['All Series', 'One Piece', 'Naruto', 'Demon Slayer', 'Dragon Ball Z', 'Jujutsu Kaisen', 'Attack on Titan', 'My Hero Academia'];

  return (
    <div className="pt-[70px]">
      {/* Hero Section */}
      <section className="hero-bg min-h-[90vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="faded-text font-heading select-none">FIGURE</span>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 py-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <span className="text-sm">✨</span>
                <span className="text-sm font-semibold">New Collection 2024</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Premium Anime Figures<br />
                <span className="text-accent">& Collectibles</span>
              </h1>

              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Discover authentic Japanese anime figures from your favorite series. From iconic characters to rare collectibles, find your perfect piece.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/30">
                  Shop Now
                </button>
                <button className="border-2 border-white/30 text-white hover:border-accent hover:text-accent px-8 py-4 rounded-full font-semibold transition-all">
                  View Series
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-accent/50 transition-all">
                  <div className="text-accent text-3xl font-bold font-heading stat-animate">5000+</div>
                  <div className="text-gray-400 text-sm mt-1">Figures in Stock</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-accent/50 transition-all">
                  <div className="text-accent text-3xl font-bold font-heading stat-animate">150+</div>
                  <div className="text-gray-400 text-sm mt-1">Series Available</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-accent/50 transition-all">
                  <div className="text-accent text-3xl font-bold font-heading stat-animate">25K+</div>
                  <div className="text-gray-400 text-sm mt-1">Happy Collectors</div>
                </div>
              </div>

              {/* Featured Product Card */}
              {featuredProduct && (
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">HOT</span>
                    <span className="text-white/60 text-sm">Featured</span>
                  </div>

                  <div className="rounded-2xl w-full h-64 mb-4 overflow-hidden bg-white/5 flex items-center justify-center p-4">
                    <img src="/images/featured_tanjiro_1779161024681.png" alt="Featured" className="h-full object-contain mix-blend-screen drop-shadow-2xl" />
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-accent text-sm font-semibold mb-1">Demon Slayer</p>
                      <h3 className="text-white font-bold text-xl">Tanjiro Kamado</h3>
                      <p className="text-gray-400 text-sm mt-1">1/8 Scale • PVC • 22cm</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-2xl">৳3,499</p>
                    </div>
                  </div>

                  <Link to={`/product/${featuredProduct.id}`} className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-xl font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2 block text-center">
                    View Details
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Series Filter Strip */}
      <section className="bg-primary py-4 sticky top-[70px] z-40 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
            {seriesFilters.map(series => (
              <button 
                key={series}
                onClick={() => setActiveSeries(series)}
                className={`pill-btn whitespace-nowrap px-6 py-2 rounded-full font-medium text-sm transition-all hover:scale-105 ${
                  activeSeries === series ? 'bg-accent text-white font-semibold' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {series}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-bg-light py-12">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar />

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-2xl text-primary">
                  {activeSeries === 'All Series' ? 'All Products' : activeSeries}
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
                  <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-accent">
                    <option>Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mockProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-white hover:bg-gray-50 text-primary border-2 border-gray-200 px-10 py-4 rounded-full font-semibold transition-all hover:border-accent hover:text-accent">
                  Load More Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Banner */}
      <section className="bg-primary py-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="bg-gradient-to-r from-accent/20 to-transparent rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-accent/30 relative overflow-hidden">
            <div className="text-center md:text-left relative z-10">
              <span className="bg-accent text-white text-xs font-bold px-4 py-1 rounded-full mb-4 inline-block">PRE-ORDER NOW</span>
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-2">Naruto - Hokage 6th Figure</h3>
              <p className="text-gray-400 mb-2">Exclusive limited edition release from the legendary series</p>
              <p className="text-accent font-semibold">Expected: July 2024 • ৳5,999</p>
            </div>
            <button className="bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 whitespace-nowrap relative z-10">
              Pre-Order Now
            </button>
            <div className="absolute right-0 top-0 bottom-0 opacity-20 pointer-events-none md:w-1/2">
               <img src="/images/naruto_sage_1779161069637.png" className="w-full h-full object-cover" alt="Banner background" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-bg-light py-16">
        <div className="max-w-[1600px] mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-primary text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">We provide the best experience for anime collectors.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: '100% Authentic', desc: 'All figures are genuine licensed products from Japan' },
              { icon: Truck, title: 'BD-Wide Delivery', desc: 'Fast shipping across all 64 districts of Bangladesh' },
              { icon: CreditCard, title: 'Easy Payment', desc: 'bKash, Nagad, Cards & Cash on Delivery available' },
              { icon: RefreshCw, title: '7-Day Returns', desc: 'Hassle-free return policy if you are not satisfied' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-primary text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
