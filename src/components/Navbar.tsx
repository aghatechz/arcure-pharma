'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface NavbarProps {
  onShopClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onShopClick }) => {
  const [activeLink, setActiveLink] = useState('Home');

  const navCenter = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Shop', href: '#shop' },
  ];

  const navRight = [
    { label: 'Login', href: '#login' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 md:px-20 py-6 transition-all duration-300 bg-white/40 backdrop-blur-md border-b border-blue-900/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo Left */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-blue-900/15 shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo/logo.jpg"
              alt="ARCURE Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-serif-display font-semibold tracking-wide text-[#0f2038] group-hover:text-blue-900 transition-colors">
            ARCURE
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navCenter.map((item) => {
            const isActive = activeLink === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.label === 'Shop') onShopClick();
                  setActiveLink(item.label);
                }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#0f2038] font-semibold'
                    : 'text-[#475569] hover:text-[#0f2038]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Auth Links */}
        <div className="flex items-center gap-8">
          {navRight.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#475569] hover:text-[#0f2038] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

      </div>
    </header>
  );
};
