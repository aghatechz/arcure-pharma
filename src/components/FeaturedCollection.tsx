'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  onAddToCart,
}) => {
  const topProducts: ProductItem[] = [
    {
      id: 'rejuvenate-serum',
      name: 'Rejuvenate Serum',
      description:
        'fast-absorbing serum enriched with hyaluronic acid and marine collagen.',
      price: 75,
      image: '/products/product1.jpg',
    },
    {
      id: 'clean-radiance-gel',
      name: 'Clean Radiance Gel',
      description:
        'oil-free gel that instantly cools and hydrates the skin.',
      price: 50,
      image: '/products/product2.jpg',
    },
    {
      id: 'night-cream',
      name: 'Night Cream',
      description:
        'repair, restore, and deeply moisturize for a softer, brighter complexion.',
      price: 55,
      image: '/products/product3.jpg',
      hasSparkle: true,
    },
  ];

  const bottomProducts: ProductItem[] = [
    {
      id: 'day-cream',
      name: 'Day Cream',
      price: 40,
      image: '/products/product4.jpg',
    },
    {
      id: 'foaming-cleanser',
      name: 'Foaming Cleanser',
      price: 65,
      image: '/products/product5.jpg',
    },
    {
      id: 'revitalizing-toner',
      name: 'Revitalizing Toner',
      price: 60,
      image: '/products/product6.jpg',
    },
    {
      id: 'radiance-serum',
      name: 'Radiance Serum',
      price: 80,
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {topProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => onAddToCart(product)}
              className="group bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-blue-900/5 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Product Image inside Soft Circular Backdrop */}
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-b from-[#e8f1fc]/80 to-[#dbe8fa]/50 flex items-center justify-center mb-6 overflow-hidden">
                
                {/* Inner Light Circle */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-blue-100/50 flex items-center justify-center p-4 relative">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Optional Sparkle Accent */}
                {product.hasSparkle && (
                  <div className="absolute top-6 right-6 text-white text-xl animate-pulse">
                    ✦
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-xl sm:text-2xl font-serif-display italic font-normal text-[#0f2038] mb-2">
                  {product.name}
                </h3>
                {product.description && (
                  <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed lowercase mb-4 line-clamp-2">
                    {product.description}
                  </p>
                )}
                <div className="text-xl font-medium text-[#0f2038] font-sans">
                  ${product.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* BOTTOM ROW: 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {bottomProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onClick={() => onAddToCart(product)}
              className="group bg-white/70 backdrop-blur-md rounded-3xl p-5 border border-blue-900/5 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Product Image inside Soft Circular Backdrop */}
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-b from-[#e8f1fc]/80 to-[#dbe8fa]/50 flex items-center justify-center mb-5 overflow-hidden">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-blue-100/50 flex items-center justify-center p-3 relative">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div>
                <h4 className="text-lg font-serif-display italic font-normal text-[#0f2038] mb-1">
                  {product.name}
                </h4>
                <div className="text-lg font-medium text-[#0f2038] font-sans">
                  ${product.price}
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
