import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-heading font-bold text-2xl">OTAKU</span>
              <span className="text-accent font-heading font-bold text-2xl">VAULT</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your ultimate destination for authentic anime figures and collectibles. Quality products, competitive prices, excellent service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent transition-all">
                T
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent transition-all">
                I
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent transition-all">
                F
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">All Figures</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">Best Sellers</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">Pre-Orders</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">Sale Items</Link></li>
            </ul>
          </div>

          {/* Series Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4">Series</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">One Piece</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">Naruto</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">Demon Slayer</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">Dragon Ball Z</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-accent transition-colors text-sm">More Series</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-accent transition-colors text-sm">Shipping Info</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-accent transition-colors text-sm">Return Policy</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-accent transition-colors text-sm">Track Order</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-accent transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2024 OtakuVault. All rights reserved. Made with ❤️ for anime collectors.</p>
        </div>
      </div>
    </footer>
  );
};
