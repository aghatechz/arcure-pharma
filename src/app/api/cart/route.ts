import { NextResponse } from 'next/server';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// In-memory server state for session demonstration
let cart: CartItem[] = [
  {
    id: 'aurelia-night-repair',
    name: 'AURÉLIA Night Repair',
    price: 64.0,
    quantity: 1,
    image: '/images/hero_bottle.jpg',
  },
];

export async function GET() {
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return NextResponse.json({
    success: true,
    cart,
    totalAmount,
    itemCount,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, name, price, image } = body;

    const existingIndex = cart.findIndex((item) => item.id === id);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id,
        name: name || 'AURÉLIA Night Repair',
        price: price || 64.0,
        quantity: 1,
        image: image || '/images/hero_bottle.jpg',
      });
    }

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return NextResponse.json({
      success: true,
      message: 'Item added to cart',
      cart,
      totalAmount,
      itemCount,
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
  }
}
