import { NextResponse } from 'next/server';

export interface SupplementProduct {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  benefits: string[];
}

const PRODUCTS: SupplementProduct[] = [
  {
    id: 'aurelia-night-repair',
    name: 'AURÉLIA Night Repair',
    tagline: 'Daily Wellness Support & Focus Formula',
    category: 'Nocturnal Recovery',
    price: 64.0,
    rating: 4.9,
    reviewsCount: 1420,
    image: '/images/hero_bottle.jpg',
    description: 'A synergy of bio-available botanical extracts, marine magnesium, and sleep restorative adaptogens crafted for busy lifestyle recovery.',
    benefits: [
      'Deep REM Sleep Enhancement',
      'Cognitive Energy & Sharpness',
      'Supports Cellular Detoxification',
      '100% Organic Bioactive Matrix',
    ],
  },
  {
    id: 'acure-daily-blend',
    name: 'Acure Core Nutrients',
    tagline: 'Balanced Nutrition for Everyday Vitality',
    category: 'Daily Multivitamin',
    price: 48.0,
    rating: 4.8,
    reviewsCount: 980,
    image: '/images/hero_bottle.jpg',
    description: 'Essential micronutrients formulated to maintain optimal immune defenses, cellular energy, and skin brightness.',
    benefits: [
      'Clinically Tested Bio-Absorbability',
      'Zero Synthetic Fillers',
      'Antioxidant Shield Complex',
    ],
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: PRODUCTS,
  });
}
