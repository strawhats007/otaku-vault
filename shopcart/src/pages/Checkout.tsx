import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle2, ChevronRight, CreditCard, ShoppingBag, Trash2, ShieldCheck } from 'lucide-react';

export const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-light pt-[70px]">
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center max-w-md w-full mx-4 animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">Order Confirmed!</h2>
          <p className="text-gray-500 mb-8">Thank you for your purchase. We'll send you an email with your order details.</p>
          <button className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-xl font-semibold transition-all">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-light pt-[70px]">
        <ShoppingBag className="w-24 h-24 text-gray-300 mb-6" />
        <h2 className="text-2xl font-bold text-primary mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added any figures to your cart yet. Discover our amazing collection.</p>
        <Link to="/shop" className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-xl font-semibold transition-all">
          Start Shopping
        </Link>
      </div>
    );
  }

  const shipping = 150; // Fixed shipping for demo
  const finalTotal = totalPrice + shipping;

  return (
    <div className="pt-[100px] pb-20 bg-bg-light min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium">Checkout</span>
        </div>

        <h1 className="font-heading font-bold text-3xl text-primary mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Cart Items & Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cart Items */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-primary mb-6">Review Items</h2>
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center p-4 bg-gray-50 rounded-2xl">
                    <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-2">
                      <img src={item.image} alt={item.name} className="h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-1">
                      <p className="text-accent text-xs font-semibold mb-1">{item.series}</p>
                      <h3 className="font-bold text-primary mb-1 line-clamp-1">{item.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{item.scale} • {item.material}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">৳{item.price.toLocaleString()}</span>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors"
                            >-</button>
                            <span className="px-2 text-sm font-medium w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors"
                            >+</button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-2"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Info Form */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-primary mb-6">Delivery Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">First Name*</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-accent" required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Last Name*</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-accent" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Address*</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-accent" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">City*</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-accent" required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Phone Number*</label>
                    <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-accent" required />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-primary mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-6 border-b border-gray-100 pb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-primary">৳{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-primary">৳{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-medium text-primary">৳0</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-primary text-lg">Total</span>
                <span className="font-bold text-primary text-2xl">৳{finalTotal.toLocaleString()}</span>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-primary mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border border-accent bg-accent/5 rounded-xl cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="accent-accent" />
                    <span className="text-sm font-medium">Credit/Debit Card</span>
                    <CreditCard className="w-5 h-5 ml-auto text-gray-400" />
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="accent-accent" />
                    <span className="text-sm font-medium">Cash on Delivery</span>
                  </label>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent/20"
              >
                Pay ৳{finalTotal.toLocaleString()}
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Secure Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
