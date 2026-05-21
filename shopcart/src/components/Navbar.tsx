import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, User, ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary z-50 shadow-lg">
      <div className="max-w-[1600px] mx-auto px-4 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-white font-heading font-bold text-2xl tracking-tight">OTAKU</span>
          <span className="text-accent font-heading font-bold text-2xl tracking-tight">VAULT</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="nav-link text-white hover:text-accent transition-colors font-medium">Home</Link>
          <Link to="/shop" className="nav-link text-white hover:text-accent transition-colors font-medium">Shop</Link>
          <Link to="/series" className="nav-link text-white hover:text-accent transition-colors font-medium">Series</Link>
          <Link to="/new-arrivals" className="nav-link text-white hover:text-accent transition-colors font-medium">New Arrivals</Link>
          <Link to="/about" className="nav-link text-white hover:text-accent transition-colors font-medium">About</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 w-64">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input type="text" placeholder="Search figures..." className="bg-transparent text-white text-sm w-full outline-none placeholder-gray-400" />
          </div>

          {/* Icons */}
          <button className="text-white hover:text-accent transition-colors p-2">
            <User className="w-5 h-5" />
          </button>
          <button className="text-white hover:text-accent transition-colors p-2">
            <Heart className="w-5 h-5" />
          </button>

          {/* Cart Button */}
          <Link to="/checkout" className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-full font-semibold transition-all hover:scale-105">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
            <span className="bg-white text-accent text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-white hover:text-accent py-2">Home</Link>
            <Link to="/shop" className="block text-white hover:text-accent py-2">Shop</Link>
            <Link to="/series" className="block text-white hover:text-accent py-2">Series</Link>
            <Link to="/new-arrivals" className="block text-white hover:text-accent py-2">New Arrivals</Link>
            <Link to="/about" className="block text-white hover:text-accent py-2">About</Link>
            <div className="pt-2">
              <input type="text" placeholder="Search figures..." className="w-full bg-white/10 rounded-lg px-4 py-2 text-white outline-none placeholder-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
