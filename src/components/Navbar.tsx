'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, User, ShoppingBag, X } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
  onShopClick: () => void;
  onOpenCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount = 1,
  onShopClick,
  onOpenCart,
}) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCenter = [
    { label: 'Home', href: '#home' },
    { label: 'Shop', href: '#shop' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-10 md:px-16 py-2.5 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo Left */}
          <a href="#" className="flex items-center group">
            <div className="relative h-10 w-36 sm:h-11 sm:w-40 lg:h-12 lg:w-44 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo/logo.png"
                alt="ARCURE Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navCenter.map((item) => {
              const isActive = activeLink === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    if (item.label === 'Shop') onShopClick();
                    setActiveLink(item.label);
                  }}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#0f2038] font-bold'
                      : 'text-[#475569] hover:text-[#0f2038]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons (Search, User, Cart) */}
          <div className="flex items-center gap-5 sm:gap-7 text-[#0f2038]">

            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="p-2 hover:bg-blue-50/80 rounded-full text-[#0f2038] hover:text-blue-900 transition-colors"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* User Account Icon */}
            <button
              onClick={() => alert('Account Login / Profile')}
              aria-label="Account"
              className="p-2 hover:bg-blue-50/80 rounded-full text-[#0f2038] hover:text-blue-900 transition-colors"
            >
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Cart Icon with Counter Badge */}
            <button
              onClick={onOpenCart || onShopClick}
              aria-label="Cart"
              className="relative p-2 hover:bg-blue-50/80 rounded-full text-[#0f2038] hover:text-blue-900 transition-colors group"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

          </div>

        </div>
      </header>

      {/* Interactive Search Overlay Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl p-6 shadow-2xl border border-blue-900/10">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-[#0f2038] mb-4">
              Search ARCURE Skincare
            </h3>
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products, serums, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 font-medium text-[#0f2038]"
                autoFocus
              />
            </div>
            {searchQuery && (
              <div className="mt-4 p-3 bg-blue-50/60 rounded-xl text-xs text-slate-600">
                Searching for "<span className="font-bold text-[#0f2038]">{searchQuery}</span>"...
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
