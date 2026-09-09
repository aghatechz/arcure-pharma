'use client';

import React from 'react';
import { X, Trash2, ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface QuickCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalAmount: number;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const QuickCartDrawer: React.FC<QuickCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  totalAmount,
  onUpdateQuantity,
}) => {
  if (!isOpen) return null;

  const totalItemCount = cartItems.reduce((a, b) => a + b.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-100 shadow-2xl text-slate-900 flex flex-col justify-between transition-transform duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0f2038]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-[#0f2038] flex items-center gap-2">
                  Your Cart
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-900 text-xs font-semibold rounded-full border border-blue-100">
                    {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'}
                  </span>
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4 bg-white">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 text-slate-400 space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-50 mx-auto flex items-center justify-center text-slate-300">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-slate-500">Your cart is empty.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-50/80 hover:bg-slate-50 p-4 rounded-2xl flex items-center gap-4 border border-slate-100 transition-all shadow-xs"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white border border-slate-200/70 flex-shrink-0 shadow-xs">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#0f2038] truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      ${item.price.toFixed(2)}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white p-0.5 shadow-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-slate-800 px-2.5 min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onUpdateQuantity(item.id, -item.quantity)}
                    className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}

            {cartItems.length > 0 && (
              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs text-slate-700 space-y-2.5 mt-6">
                <div className="flex items-center gap-2.5 font-medium text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Free Express Shipping included</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>30-Day Money Back Guarantee</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout */}
          <div className="p-6 border-t border-slate-100 bg-white space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">Subtotal</span>
              <span className="text-2xl font-bold text-[#0f2038] tracking-tight">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            
            <button
              onClick={() => alert('Proceeding to Checkout...')}
              disabled={cartItems.length === 0}
              className="w-full py-4 bg-[#0f2038] hover:bg-[#1a355c] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-950/10 transition-all duration-200 active:scale-98 group"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

