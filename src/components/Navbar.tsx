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

          {/* Right Action Icons (Search, User, WhatsApp, Cart) */}
          <div className="flex items-center gap-5 sm:gap-7 text-[#0f2038]">

            {/* WhatsApp Direct Action */}
            <a
              href="https://wa.me/923306853209"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="p-2 hover:bg-emerald-50 rounded-full text-[#25D366] hover:text-[#20ba5a] transition-colors"
              title="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

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
