'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, X, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const [devModalOpen, setDevModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { label: 'All Products', href: '#shop' },
      { label: 'Serums', href: '#serums' },
      { label: 'Moisturizers', href: '#moisturizers' },
      { label: 'Best Sellers', href: '#bestsellers' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#story' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
    ],
    Support: [
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Shipping', href: '#shipping' },
      { label: 'Returns', href: '#returns' },
    ],
  };

  return (
    <footer className="bg-white border-t border-slate-100">

      {/* Newsletter Strip */}
      <div className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-10 sm:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif-display italic font-normal text-[#0f2038] tracking-tight">
              Stay In The Glow
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Subscribe for exclusive offers, skincare tips & early access.
            </p>
          </div>
          <div className="flex items-center w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-50 border border-slate-200 rounded-l-full px-5 py-3 text-sm text-[#0f2038] placeholder:text-slate-300 focus:outline-none focus:border-slate-400 w-full md:w-72 transition-colors"
            />
            <button className="bg-[#0f2038] text-white px-5 py-3 rounded-r-full font-semibold text-sm hover:bg-[#1a2d4a] transition-colors flex items-center gap-1.5 shrink-0">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 sm:gap-12">

          {/* Brand Column */}
          <div className="col-span-2">
            <div className="relative h-12 w-40 mb-5">
              <Image
                src="/logo/logo.png"
                alt="ARCURE"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Expertly formulated skincare rooted in science, designed for timeless beauty. Trusted by over 20,000+ users worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-4 h-4 fill-slate-500" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-4 h-4 fill-slate-500" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-4 h-4 fill-slate-500" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-4 h-4 fill-slate-500" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f2038] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-[#0f2038] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Giant Brand Name */}
      <div className="relative overflow-hidden border-t border-slate-100 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
          <h2 className="text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-serif-display italic font-normal text-slate-100 leading-none tracking-tight select-none text-center">
            ARCURE
          </h2>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-300">
            © {currentYear} ARCURE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-300 hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-300 hover:text-slate-600 transition-colors">Terms of Service</a>
            <button
              onClick={() => setDevModalOpen(true)}
              className="text-xs text-slate-300 hover:text-slate-600 transition-colors cursor-pointer"
            >
              Developed & Designed by <span className="font-semibold">Agha</span>
            </button>
          </div>
        </div>
      </div>

      {/* Developer Contact Modal */}
      {devModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setDevModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[90vh] flex flex-col animate-[scaleIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 pt-5 pb-3 flex items-start justify-between border-b border-slate-100/80 shrink-0">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-700 mb-0.5">Contact Developer</p>
                <h3 className="text-xl font-serif-display italic font-normal text-[#0f2038]">Get In Touch</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-serif-display italic text-slate-400">Agha</span>
                <button
                  onClick={() => setDevModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Contact Links */}
            <div className="p-4 space-y-2 overflow-y-auto max-h-[75vh]">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923306853209"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#0f2038] text-xs">WhatsApp</p>
                  <p className="text-[11px] text-slate-400 truncate">+92 330 6853209</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/syed-irtiza-hussain-rizvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#0f2038] text-xs">LinkedIn</p>
                  <p className="text-[11px] text-slate-400 truncate">Syed Irtiza Hussain Rizvi</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/aghatechz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#1a1a2e] flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#0f2038] text-xs">GitHub</p>
                  <p className="text-[11px] text-slate-400 truncate">@aghatechz</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/aghatechz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#000000] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#0f2038] text-xs">X (Twitter)</p>
                  <p className="text-[11px] text-slate-400 truncate">@aghatechz</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" />
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/aghatechz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.8732.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#0f2038] text-xs">Discord</p>
                  <p className="text-[11px] text-slate-400 truncate">@aghatechz</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/aghatechz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#26A5E4] flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#0f2038] text-xs">Telegram</p>
                  <p className="text-[11px] text-slate-400 truncate">@aghatechz</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" />
              </a>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
};
