'use client';

import React from 'react';
import { X, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';
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

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#091c14] border-l border-emerald-500/20 shadow-2xl text-white flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-emerald-900/50 flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-wide flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Your Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-emerald-900/40 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-emerald-300" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 text-emerald-300/60">
                Your cart is empty.
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="glass-card-dark p-4 rounded-xl flex items-center gap-4 border border-emerald-500/20"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-emerald-950 border border-emerald-500/30 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded bg-emerald-900/60 hover:bg-emerald-800 flex items-center justify-center text-sm font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded bg-emerald-900/60 hover:bg-emerald-800 flex items-center justify-center text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onUpdateQuantity(item.id, -item.quantity)}
                    className="text-emerald-500/60 hover:text-red-400 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}

            <div className="p-4 bg-emerald-950/40 rounded-xl border border-emerald-500/20 text-xs text-emerald-300/80 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free Express Shipping included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>30-Day Satisfaction Money Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Footer Checkout */}
          <div className="p-6 border-t border-emerald-900/50 bg-[#06140e]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-emerald-200/80">Subtotal</span>
              <span className="text-xl font-bold text-white">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => alert('Proceeding to Checkout...')}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/50 transition-all duration-200 active:scale-95"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
