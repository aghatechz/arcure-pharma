'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  hasSparkle?: boolean;
}

interface FeaturedCollectionProps {
  onAddToCart: (product: ProductItem) => void;
  onBuyNow?: (product: ProductItem) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  onAddToCart,
  onBuyNow,
}) => {
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const topProducts: ProductItem[] = [
    {
      id: 'rejuvenate-serum',
      name: 'Rejuvenate Serum',
      description:
        'fast-absorbing serum enriched with hyaluronic acid and marine collagen.',
      price: 1000,
      image: '/products/product1.jpg',
    },
    {
      id: 'clean-radiance-gel',
      name: 'Clean Radiance Gel',
      description:
        'oil-free gel that instantly cools and hydrates the skin.',
      price: 1200,
      image: '/products/product2.jpg',
    },
    {
      id: 'night-cream',
      name: 'Night Cream',
      description:
        'repair, restore, and deeply moisturize for a softer, brighter complexion.',
      price: 2500,
      image: '/products/product3.jpg',
      hasSparkle: true,
    },
  ];

  const bottomProducts: ProductItem[] = [
    {
      id: 'day-cream',
      name: 'Day Cream',
      price: 500,
      image: '/products/product4.jpg',
    },
    {
      id: 'foaming-cleanser',
      name: 'Foaming Cleanser',
      price: 850,
      image: '/products/product5.jpg',
    },
    {
      id: 'revitalizing-toner',
      name: 'Revitalizing Toner',
      price: 1500,
      image: '/products/product6.jpg',
    },
    {
      id: 'radiance-serum',
      name: 'Radiance Serum',
      price: 2000,
      image: '/products/product1.jpg',
    },
  ];

  return (
    <section id="products" className="relative w-full py-20 px-6 sm:px-12 md:px-16 bg-gradient-to-b from-[#f8fafc] via-[#f1f6fc] to-[#e8f1fb] text-[#0f2038]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Brush Stroke Underline */}
        <div className="mb-14 text-left">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block relative"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display italic font-normal tracking-tight text-[#0f2038]">
              Featured Collection
            </h2>

            {/* Hand-drawn style blue accent line */}
            <svg
              className="absolute -bottom-2 left-1/2 w-3/4 -translate-x-1/2 h-3 text-blue-400/70 pointer-events-none"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 5 8 Q 100 2, 195 7"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>


        {/* TOP ROW: 3 Featured Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {topProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-t-[65px] sm:rounded-t-[80px] rounded-b-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Arched Dome Top Image Banner */}
              <div className="relative w-full aspect-[4/5] bg-white flex items-center justify-center p-4 sm:p-5 overflow-hidden">
                
                {/* Golden Amber Heart Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  aria-label="Add to Wishlist"
                  className={`absolute top-3.5 right-3.5 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
                    wishlist[product.id]
                      ? 'bg-rose-500 text-white scale-110'
                      : 'bg-[#0f2038] hover:bg-[#1a355c] text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${wishlist[product.id] ? 'fill-white' : ''}`} />
                </button>

                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Optional Sparkle Accent */}
                {product.hasSparkle && (
                  <div className="absolute top-3.5 left-3.5 text-amber-500 text-base animate-pulse">
                    ✦
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 pt-1 flex flex-col items-center text-center">
                <h3 className="text-lg sm:text-xl font-serif-display italic font-normal text-[#0f2038] mb-0.5">
                  {product.name}
                </h3>

                {/* Price Badge Pill Over Divider Line */}
                <div className="w-full relative flex items-center justify-center my-2.5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <span className="relative bg-[#0f2038] text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-xs tracking-wide font-sans">
                    PKR {product.price.toLocaleString()}
                  </span>
                </div>

                {product.description && (
                  <p className="text-xs text-slate-500 font-normal leading-relaxed lowercase mb-3 line-clamp-2 px-1">
                    {product.description}
                  </p>
                )}

                {/* Action Buttons: Add to Cart & Buy Now */}
                <div className="w-full flex items-center gap-2 pt-1.5">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 py-2 px-2.5 rounded-lg border border-[#0f2038] text-[#0f2038] hover:bg-[#0f2038] hover:text-white font-semibold text-[11px] transition-all duration-200 flex items-center justify-center gap-1 active:scale-95"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={() => (onBuyNow ? onBuyNow(product) : onAddToCart(product))}
                    className="flex-1 py-2 px-2.5 rounded-lg bg-[#0f2038] hover:bg-[#1a355c] text-white font-semibold text-[11px] shadow-xs transition-all duration-200 flex items-center justify-center gap-1 active:scale-95"
                  >
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* BOTTOM ROW: 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {bottomProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-white rounded-t-[55px] sm:rounded-t-[65px] rounded-b-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Arched Dome Top Image Banner */}
              <div className="relative w-full aspect-[4/5] bg-white flex items-center justify-center p-3.5 overflow-hidden">
                
                {/* Heart Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  aria-label="Add to Wishlist"
                  className={`absolute top-3 right-3 z-10 w-7.5 h-7.5 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
                    wishlist[product.id]
                      ? 'bg-rose-500 text-white scale-110'
                      : 'bg-[#0f2038] hover:bg-[#1a355c] text-white'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${wishlist[product.id] ? 'fill-white' : ''}`} />
                </button>

                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-3.5 sm:p-4 pt-0.5 flex flex-col items-center text-center">
                <h4 className="text-base font-serif-display italic font-normal text-[#0f2038] mb-0.5">
                  {product.name}
                </h4>

                {/* Price Badge Pill Over Divider Line */}
                <div className="w-full relative flex items-center justify-center my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <span className="relative bg-[#0f2038] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs tracking-wide font-sans">
                    PKR {product.price.toLocaleString()}
                  </span>
                </div>

                {/* Action Buttons: Add to Cart & Buy Now */}
                <div className="w-full flex items-center gap-1.5 pt-1.5">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 py-1.5 px-1.5 rounded-md border border-[#0f2038] text-[#0f2038] hover:bg-[#0f2038] hover:text-white font-semibold text-[10px] transition-all duration-200 flex items-center justify-center gap-1 active:scale-95"
                  >
                    <ShoppingBag className="w-2.5 h-2.5" />
                    <span>Add</span>
                  </button>

                  <button
                    onClick={() => (onBuyNow ? onBuyNow(product) : onAddToCart(product))}
                    className="flex-1 py-1.5 px-1.5 rounded-md bg-[#0f2038] hover:bg-[#1a355c] text-white font-semibold text-[10px] shadow-xs transition-all duration-200 flex items-center justify-center gap-1 active:scale-95"
                  >
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* View All Products Center Button */}
        <div className="flex justify-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(topProducts[0])}
            className="px-8 py-3.5 rounded-full bg-[#c6ddfe] hover:bg-[#b2d3fe] text-[#0f2038] font-medium text-sm tracking-wide shadow-md transition-all duration-300"
          >
            View All Products
          </motion.button>
        </div>

      </div>
    </section>
  );
};

