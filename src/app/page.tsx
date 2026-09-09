'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedCollection } from '@/components/FeaturedCollection';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { QuickCartDrawer } from '@/components/QuickCartDrawer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(78.0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch initial cart state from Next.js API backend
  useEffect(() => {
    fetch('/api/cart')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCartItems(data.cart);
          setCartCount(data.itemCount);
          setTotalAmount(data.totalAmount);
        }
      })
      .catch((err) => console.error('Failed to load cart API', err));
  }, []);

  const handleAddToCart = async (product?: { id: string; name: string; price: number; image: string }) => {
    const itemToAdd = product || {
      id: 'arcure-cobalt-serum',
      name: 'ARCURE Cobalt Serum',
      price: 78.0,
      image: '/images/cobalt_serum.jpg',
    };

    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemToAdd),
      });
      const data = await res.json();
      if (data.success) {
        setCartItems(data.cart);
        setCartCount(data.itemCount);
        setTotalAmount(data.totalAmount);
        setIsCartOpen(true);
      }
    } catch (err) {
      console.error('Error adding to cart', err);
    }
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prevItems) => {
      const updated = prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];

      const newTotal = updated.reduce((acc, i) => acc + i.price * i.quantity, 0);
      const newCount = updated.reduce((acc, i) => acc + i.quantity, 0);
      setTotalAmount(newTotal);
      setCartCount(newCount);
      return updated;
    });
  };

  return (
    <main className="relative min-h-screen bg-white text-[#0f2038] overflow-hidden">
      {/* Navigation Header */}
      <Navbar
        cartCount={cartCount}
        onShopClick={() => handleAddToCart()}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section Container */}
      <HeroSection onShopNow={() => handleAddToCart()} />

      {/* Featured Collection Section */}
      <FeaturedCollection onAddToCart={handleAddToCart} />

      {/* Customer Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Quick Cart Slide-Over Drawer */}
      <QuickCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        totalAmount={totalAmount}
        onUpdateQuantity={handleUpdateQuantity}
      />
      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />
    </main>
  );
}
