import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import { Check, Star, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold text-primary mb-4">Product not found</h2>
        <Link to="/shop" className="text-accent hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-[100px] pb-20 bg-bg-light min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent">Shop</Link>
          <span>/</span>
          <span className="text-primary font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-6 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[500px]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full max-w-md object-contain mix-blend-multiply drop-shadow-xl"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <p className="text-accent font-semibold mb-2">{product.series}</p>
                <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-primary leading-tight mb-4">
                  {product.name}
                </h1>
                
                {/* Reviews */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-sm text-gray-500">(128 Reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-4xl font-bold text-primary">৳{product.price.toLocaleString()}</span>
                  {product.oldPrice && (
                    <span className="text-xl text-gray-400 line-through mb-1">৳{product.oldPrice.toLocaleString()}</span>
                  )}
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="border-t border-b border-gray-100 py-6 mb-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Scale</span>
                    <span className="font-medium text-primary">{product.scale}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Material</span>
                    <span className="font-medium text-primary">{product.material}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Size</span>
                    <span className="font-medium text-primary">{product.size}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Availability</span>
                    <span className={`font-medium ${product.inStock ? 'text-green-500' : 'text-accent'}`}>
                      {product.inStock ? 'In Stock' : 'Pre-order'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    isAdded 
                      ? 'bg-green-500 text-white' 
                      : 'bg-primary hover:bg-black text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                <Link to="/checkout" className="flex-1 bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-bold transition-all text-center">
                  Buy Now
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span>100% Authentic</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <Truck className="w-5 h-5 text-accent" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <RefreshCw className="w-5 h-5 text-accent" />
                  <span>7-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
