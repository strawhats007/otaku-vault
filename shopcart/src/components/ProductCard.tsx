import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/mockProducts';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block bg-white rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300">
      <div className="relative">
        <div className="bg-gray-100 w-full h-48 flex items-center justify-center p-4">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
        </div>
        {product.badge && (
          <span className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full ${
            product.badge === 'NEW' || product.badge === 'HOT' ? 'bg-accent' : 
            product.badge === 'PRE-ORDER' ? 'bg-primary' : 'bg-sale'
          }`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-accent text-xs font-semibold mb-1">{product.series}</p>
        <h3 className="font-bold text-primary text-base mb-1 truncate">{product.name}</h3>
        <p className="text-gray-400 text-xs mb-3">{product.scale} • {product.material} • {product.size}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-primary font-bold text-xl">৳{product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="text-gray-400 text-sm line-through">৳{product.oldPrice.toLocaleString()}</span>
          )}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              isAdded ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-primary'
            }`}
          >
            {isAdded ? '✓ Added!' : 'Add to Cart'}
          </button>
          <button className="flex-1 bg-accent hover:bg-accent-dark text-white py-2.5 rounded-xl font-semibold text-sm transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};
