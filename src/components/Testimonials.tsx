'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  title: string;
  comment: string;
  verified: boolean;
  productName: string;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Ayesha Khan',
      role: 'Verified Customer • Lahore',
      avatar: '/images/avatar1.jpg',
      rating: 5,
      title: 'Transformed My Skin Glow!',
      comment:
        'The ARCURE Rejuvenate Serum is absolute perfection! Within just 2 weeks, my skin felt noticeably firmer, hydrated, and radiant all day long.',
      verified: true,
      productName: 'Rejuvenate Serum',
    },
    {
      id: '2',
      name: 'Dr. Sarah Jenkins',
      role: 'Dermatologist & Skincare Specialist',
      avatar: '/images/avatar2.jpg',
      rating: 5,
      title: 'Clinical Grade Formulations',
      comment:
        'I regularly recommend ARCURE products to my patients. Their clean marine collagen and hyaluronic acid complex provides deeply effective barrier restoration.',
      verified: true,
      productName: 'Clean Radiance Gel',
    },
    {
      id: '3',
      name: 'Elena Rostova',
      role: 'Verified Customer • London',
      avatar: '/images/avatar3.jpg',
      rating: 5,
      title: 'Unbelievable Night Repair',
      comment:
        'I’ve used luxury European skincare for years, but ARCURE’s Night Cream is on another level. I wake up with fresh, glowing skin every single morning!',
      verified: true,
      productName: 'Night Repair Cream',
    },
    {
      id: '4',
      name: 'Zainab Malik',
      role: 'Verified Customer • Islamabad',
      avatar: '/images/avatar1.jpg',
      rating: 5,
      title: 'Gentle & Super Hydrating',
      comment:
        'The Foaming Cleanser is incredibly gentle on sensitive skin. It thoroughly removes makeup without stripping away natural moisture balance.',
      verified: true,
      productName: 'Foaming Cleanser',
    },
    {
      id: '5',
      name: 'Sophia Martinez',
      role: 'Verified Customer • California',
      avatar: '/images/avatar2.jpg',
      rating: 5,
      title: 'Visibly Smaller Pores!',
      comment:
        'Revitalizing Toner refined my skin texture and tightened visible pores in less than 10 days. My daily skincare routine feels complete now.',
      verified: true,
      productName: 'Revitalizing Toner',
    },
    {
      id: '6',
      name: 'Fatima Hassan',
      role: 'Verified Customer • Karachi',
      avatar: '/images/avatar3.jpg',
      rating: 5,
      title: 'Cleared Hyperpigmentation',
      comment:
        'Radiance Serum cleared up dark spots and acne marks completely within 3 weeks. 10/10 recommend to anyone wanting flawless skin!',
      verified: true,
      productName: 'Radiance Serum',
    },
    {
      id: '7',
      name: 'Mariam Tariq',
      role: 'Verified Customer • Rawalpindi',
      avatar: '/images/avatar1.jpg',
      rating: 5,
      title: 'Perfect Lightweight Day Cream',
      comment:
        'Day Cream provides non-greasy, silky smooth hydration all day under makeup. It absorbs rapidly and feels weightless on the skin.',
      verified: true,
      productName: 'Day Cream',
    },
  ];

  // Auto-play timer: move to next slide every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentItem = testimonials[currentIndex];

  // Desktop visible 3-card window
  const desktopVisibleCards = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="relative w-full py-24 px-6 sm:px-12 md:px-16 bg-white text-[#0f2038] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-900 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100/80 inline-block mb-4">
              Real Reviews
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display italic font-normal tracking-tight text-[#0f2038] mb-4">
              Loved By Thousands Worldwide
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Discover why thousands of people trust ARCURE Skincare for clinically proven, radiant results every day.
            </p>

            {/* Overall Rating Pill */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#0f2038]">4.9 out of 5</span>
              <span className="text-xs text-slate-400">(20,000+ reviews)</span>
            </div>
          </motion.div>
        </div>


        {/* DESKTOP VIEW: 3-Column Sliding Window */}
        <div className="hidden md:flex flex-col items-center">
          <div className="grid grid-cols-3 gap-8 w-full">
            <AnimatePresence mode="popLayout">
              {desktopVisibleCards.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group"
                >
                  {/* Quote Mark Watermark */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200/60 group-hover:text-blue-100 transition-colors pointer-events-none" />

                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    {/* Review Title */}
                    <h3 className="text-lg font-bold text-[#0f2038] mb-2 tracking-tight">
                      "{item.title}"
                    </h3>

                    {/* Review Body */}
                    <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                      {item.comment}
                    </p>
                  </div>

                  {/* User Profile Footer */}
                  <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0f2038]">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {item.productName}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Desktop Navigation Controls: Left Arrow, Dots, Right Arrow */}
          <div className="flex items-center gap-5 mt-10">
            <button
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md hover:bg-[#0f2038] hover:text-white flex items-center justify-center text-[#0f2038] transition-all duration-200 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-[#0f2038]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next reviews"
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md hover:bg-[#0f2038] hover:text-white flex items-center justify-center text-[#0f2038] transition-all duration-200 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>


        {/* MOBILE / TABLET SLIDER VIEW */}
        <div className="md:hidden flex flex-col items-center">
          <div className="w-full relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full bg-slate-50/90 rounded-3xl p-7 border border-slate-100 shadow-md flex flex-col justify-between relative"
              >
                <Quote className="absolute top-5 right-5 w-8 h-8 text-slate-200 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(currentItem.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-[#0f2038] mb-2 tracking-tight">
                    "{currentItem.title}"
                  </h3>

                  <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    {currentItem.comment}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs shrink-0">
                      <Image
                        src={currentItem.avatar}
                        alt={currentItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0f2038]">
                        {currentItem.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {currentItem.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-blue-900 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                    {currentItem.productName}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Swipe Helper Text */}
          <p className="text-xs text-slate-400 font-medium mt-6 mb-4 tracking-wide text-center">
            Swipe left / right to read more reviews
          </p>

          {/* Navigation Controls: Left Arrow, Dots, Right Arrow */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-md hover:bg-slate-50 flex items-center justify-center text-[#0f2038] transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-[#0f2038]' : 'w-2.5 bg-slate-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-md hover:bg-slate-50 flex items-center justify-center text-[#0f2038] transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
