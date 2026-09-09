'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#eff4fb] to-[#e2ecf9] pt-28 sm:pt-36 pb-16 flex flex-col justify-between selection:bg-blue-900 selection:text-white">
      
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 md:px-16 w-full flex-1 flex flex-col justify-between">
        
        {/* TOP SECTION: Massive Headline & 20k Satisfied Users */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center Headline */}
          <div className="lg:col-span-8 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif-display italic font-normal text-[#0f2038] tracking-tight leading-[1.08]">
                Elegance For Your Skin
              </h1>
              
              <div className="flex items-center gap-4 mt-2 sm:mt-4">
                {/* Decorative Sparkle Icon 1 */}
                <motion.span 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-blue-400 text-3xl sm:text-5xl"
                >
                  ✦
                </motion.span>

                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif-display italic font-normal text-[#0f2038] tracking-tight leading-none">
                  All Day
                </h2>
              </div>
            </motion.div>
          </div>

          {/* Right Social Proof (3 Avatars + 20k Satisfied Users) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-start pt-2 lg:pt-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-start lg:items-end"
            >
              <div className="flex items-center gap-3">
                {/* 3 Overlapping Avatar Portraits */}
                <div className="flex -space-x-3 overflow-hidden p-1">
                  <div className="inline-block h-11 w-11 rounded-full ring-2 ring-white overflow-hidden relative shadow-md">
                    <Image
                      src="/images/avatar1.jpg"
                      alt="Satisfied User 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="inline-block h-11 w-11 rounded-full ring-2 ring-white overflow-hidden relative shadow-md">
                    <Image
                      src="/images/avatar2.jpg"
                      alt="Satisfied User 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="inline-block h-11 w-11 rounded-full ring-2 ring-white overflow-hidden relative shadow-md">
                    <Image
                      src="/images/avatar3.jpg"
                      alt="Satisfied User 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 20k Number */}
                <span className="text-4xl sm:text-5xl font-serif-display italic font-normal text-[#0f2038] tracking-tight">
                  20k
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm font-medium text-[#475569] mt-1.5 tracking-wide">
                Satisfied Users
              </p>
            </motion.div>
          </div>

        </div>


        {/* MIDDLE CENTER: Cobalt Blue Dropper Bottle Render */}
        <div className="relative my-4 sm:my-8 flex items-center justify-center min-h-[360px] sm:min-h-[440px]">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="relative z-20 w-[240px] sm:w-[320px] lg:w-[370px] aspect-[3/4] cursor-pointer group"
            onClick={onShopNow}
          >
            {/* Soft Shadow behind Bottle */}
            <div className="absolute inset-x-8 bottom-4 h-12 bg-blue-950/20 rounded-full blur-2xl" />

            <Image
              src="/images/cobalt_serum.jpg"
              alt="ARCURE Cobalt Blue Serum Bottle"
              fill
              priority
              className="object-contain filter serum-shadow group-hover:scale-[1.03] transition-transform duration-500"
            />

            {/* Glowing Lens Flare Sparkle on metallic collar */}
            <motion.div
              animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute top-1/4 right-[28%] text-white text-2xl sparkle-glow pointer-events-none"
            >
              ✦
            </motion.div>
          </motion.div>

        </div>


        {/* BOTTOM SECTION: Circular Radiant Skin Frame & Right Description + Shop Button */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4">
          
          {/* Left Circular Radiant Skin Photo Frame */}
          <div className="lg:col-span-5 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group cursor-pointer"
              onClick={onShopNow}
            >
              {/* Circular Radiant Skin Photo Frame */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                <Image
                  src="/images/radiant_skin.jpg"
                  alt="Radiant Skin Close-up"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Top Right Rotating Badge: "• EXPLORE PRODUCTS •" */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-blue-900/10 flex items-center justify-center">
                
                {/* SVG Curved Text */}
                <svg className="w-full h-full animate-spin-slow p-1" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9px] font-semibold tracking-[0.18em] fill-[#1e3a8a] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      • EXPLORE PRODUCTS • EXPLORE PRODUCTS
                    </textPath>
                  </text>
                </svg>

                {/* Center Star Symbol */}
                <div className="absolute inset-0 flex items-center justify-center text-blue-600 text-lg">
                  ✶
                </div>
              </div>
            </motion.div>
          </div>


          {/* Right Subtext & CTA Button */}
          <div className="lg:col-span-7 flex flex-col items-start lg:items-start max-w-lg lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-sm sm:text-base font-normal text-[#475569] leading-relaxed lowercase">
                experience the glow of timeless beauty with Arcure's expertly formulated skincare. join over <span className="font-bold text-[#0f2038]">20,000+</span> satisfied users who've made radiant skin part of their daily ritual.
              </p>

              {/* "Shop Now" Soft Sky Blue Pill Button */}
              <button
                onClick={onShopNow}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b9d5ff] via-[#a3c7fc] to-[#93bbf7] hover:from-[#a5ccff] hover:to-[#82b0f5] text-[#0f2038] font-semibold text-sm tracking-wide shadow-lg shadow-blue-300/40 hover:shadow-blue-400/60 transition-all duration-300 active:scale-95 flex items-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>

      </div>

      {/* 2 Angled Crossing Marquee Ribbons (Pattiyan) */}
      <div className="relative w-full mt-10 pt-2 pb-6 overflow-hidden z-20 pointer-events-none select-none">
        
        {/* Ribbon 1 (Light Sky Blue Ribbon - Back Layer) */}
        <div className="w-[125%] -ml-[12.5%] transform rotate-[2.5deg] bg-gradient-to-r from-[#b3d3fe] via-[#a0c5fc] to-[#b8d7ff] border-y border-white/70 shadow-lg py-3 flex items-center overflow-hidden">
          <div className="animate-marquee-left flex items-center whitespace-nowrap gap-12 text-sm sm:text-base font-semibold text-[#0f2038] tracking-wider uppercase">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Healthy Skin</span>
                <span className="text-white text-lg">✦</span>
                <span>Clinically Backed</span>
                <span className="text-white text-lg">✦</span>
                <span>100% Bioactive</span>
                <span className="text-white text-lg">✦</span>
                <span>Timeless Glow</span>
                <span className="text-white text-lg">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Ribbon 2 (Dark Royal Blue Ribbon - Front Layer) */}
        <div className="w-[125%] -ml-[12.5%] transform -rotate-[4.2deg] -mt-10 bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#1e40af] border-y border-blue-400/30 shadow-2xl py-3.5 flex items-center overflow-hidden z-10">
          <div className="animate-marquee-right flex items-center whitespace-nowrap gap-12 text-base sm:text-lg font-medium text-white tracking-wider">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Visible Results</span>
                <span className="text-blue-300 text-xl">✦</span>
                <span>Powerful Ingredients</span>
                <span className="text-blue-300 text-xl">✦</span>
                <span>Curated For Glowing Skin</span>
                <span className="text-blue-300 text-xl">✦</span>
                <span>Organic Bio-Extracts</span>
                <span className="text-blue-300 text-xl">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
