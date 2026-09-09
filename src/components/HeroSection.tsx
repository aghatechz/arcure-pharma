'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-28 sm:pt-36 selection:bg-blue-900 selection:text-white">
      
      {/* Subtle ambient glows */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none" />

      {/* ============== MAIN HERO CONTENT ============== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 md:px-16 w-full">
        
        {/* ---------- HEADLINE ROW ---------- */}
        <div className="relative z-20">
          {/* Line 1: "Elegance For Your Skin" */}
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[2.6rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-serif-display italic font-normal text-[#1a1a2e] tracking-tight leading-[1.08]"
          >
            Elegance For Your Skin
          </motion.h1>

          {/* Line 2: sparkle + "All Day" + avatars + 20k */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap items-center gap-2 sm:gap-4 mt-0 sm:mt-1"
          >
            {/* Sparkle before All Day */}
            <motion.span
              animate={{ scale: [1, 1.25, 1], rotate: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-[#93b4e8] text-2xl sm:text-4xl lg:text-5xl"
            >
              ✦
            </motion.span>

            <h2 className="text-[2.6rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-serif-display italic font-normal text-[#1a1a2e] tracking-tight leading-none">
              All Day
            </h2>

            {/* Spacer to push avatars right on large screens */}
            <div className="flex-1 hidden lg:block" />

            {/* 3 Overlapping Avatars */}
            <div className="flex -space-x-3 ml-2 sm:ml-0">
              {['/images/avatar1.jpg', '/images/avatar2.jpg', '/images/avatar3.jpg'].map((src, i) => (
                <div key={i} className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full ring-[3px] ring-white overflow-hidden shadow-md">
                  <Image src={src} alt={`User ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* 20k + Label */}
            <div className="flex flex-col items-start ml-1 sm:ml-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif-display italic font-normal text-[#1a1a2e] leading-none">
                20k
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-[#64748b] tracking-wide mt-0.5">
                Satisfied Users
              </span>
            </div>
          </motion.div>
        </div>


        {/* ---------- MAIN CONTENT AREA: Overlapping Bottle + Side Elements ---------- */}
        <div className="relative min-h-[400px] sm:min-h-[480px] lg:min-h-[520px] mt-2 sm:mt-4">
          
          {/* BOTTLE: Absolutely positioned, center of hero, overlapping headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.1 }}
            className="absolute left-1/2 -translate-x-1/2 lg:left-[40%] lg:-translate-x-1/2 -top-20 sm:-top-28 lg:-top-32 z-30 w-[220px] sm:w-[300px] lg:w-[360px] aspect-[3/5] cursor-pointer group"
            onClick={onShopNow}
          >
            {/* Soft ambient shadow */}
            <div className="absolute inset-x-12 bottom-0 h-10 bg-blue-950/15 rounded-full blur-2xl" />

            <Image
              src="/hero/cobalt_serum.png"
              alt="ARCURE Serum Bottle"
              fill
              priority
              className="object-contain serum-shadow group-hover:scale-[1.02] transition-transform duration-500"
            />

            {/* Sparkle on bottle collar */}
            <motion.span
              animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute top-[18%] right-[28%] text-white text-xl sparkle-glow pointer-events-none"
            >
              ✦
            </motion.span>
          </motion.div>


          {/* LEFT: Circular Skin Portrait with Rotating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="absolute bottom-8 sm:bottom-12 left-0 z-20"
          >
            <div className="relative">
              {/* Circular Photo */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[5px] border-white shadow-2xl">
                <Image
                  src="/images/radiant_skin.jpg"
                  alt="Radiant Glowing Skin"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>


          {/* RIGHT: Description + Shop Now - positioned mid-right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 sm:top-[40%] z-20 max-w-[280px] sm:max-w-[300px] lg:max-w-xs hidden sm:block"
          >
            <div className="space-y-4">
              {/* Sparkle accent */}
              <motion.span
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="text-[#93b4e8] text-xl inline-block mb-1"
              >
                ✦
              </motion.span>

              <p className="text-[13px] sm:text-sm font-normal text-[#475569] leading-relaxed">
                experience the glow of timeless beauty with
                Arcure&apos;s expertly formulated skincare. join over{' '}
                <span className="font-bold text-[#0f2038]">20,000+</span> satisfied
                users who&apos;ve made radiant skin part of their daily ritual.
              </p>

              <button
                onClick={onShopNow}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0f2038] font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 flex items-center gap-2 group border border-slate-200"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Mobile-only: Description + Shop Now below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="sm:hidden pt-[320px] pb-4"
          >
            <div className="space-y-4">
              <p className="text-[13px] font-normal text-[#475569] leading-relaxed">
                experience the glow of timeless beauty with
                Arcure&apos;s expertly formulated skincare. join over{' '}
                <span className="font-bold text-[#0f2038]">20,000+</span> satisfied
                users who&apos;ve made radiant skin part of their daily ritual.
              </p>

              <button
                onClick={onShopNow}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0f2038] font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 flex items-center gap-2 group border border-slate-200"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>


      {/* ============== 2 ANGLED CROSSING MARQUEE RIBBONS ============== */}
      <div className="relative w-full mt-6 sm:mt-10 overflow-hidden z-20 pointer-events-none select-none h-28 sm:h-32">
        
        {/* Ribbon 1 — Light sky blue, tilted up-right (back layer) */}
        <div className="absolute top-0 left-0 w-[140%] -ml-[20%] transform rotate-[1.5deg] bg-gradient-to-r from-[#c5ddfd] via-[#b3d3fe] to-[#c5ddfd] border-y border-white/50 shadow-md py-3.5 sm:py-4 flex items-center overflow-hidden">
          <div className="animate-marquee-left flex items-center whitespace-nowrap gap-16 sm:gap-20 font-serif-display italic text-base sm:text-lg text-[#1a1a2e]/70 tracking-wider">
            {[...Array(8)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Visible Results</span>
                <span className="text-white/80 text-base">✦</span>
                <span>Healthy Skin</span>
                <span className="text-white/80 text-base">✦</span>
                <span>Powerful Ingredients</span>
                <span className="text-white/80 text-base">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Ribbon 2 — Dark royal blue, tilted down-right (front layer, crosses over) */}
        <div className="absolute top-5 sm:top-6 left-0 w-[140%] -ml-[20%] transform -rotate-[2.5deg] bg-gradient-to-r from-[#1e40af] via-[#1d4ed8] to-[#2563eb] border-y border-blue-400/20 shadow-2xl py-3.5 sm:py-4 flex items-center overflow-hidden z-10">
          <div className="animate-marquee-right flex items-center whitespace-nowrap gap-16 sm:gap-20 font-serif-display italic text-base sm:text-lg text-white/90 tracking-wider">
            {[...Array(8)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Healthy Skin</span>
                <span className="text-blue-300/70 text-base">✦</span>
                <span>Powerful Ingredients</span>
                <span className="text-blue-300/70 text-base">✦</span>
                <span>Curated For Glowing</span>
                <span className="text-blue-300/70 text-base">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
