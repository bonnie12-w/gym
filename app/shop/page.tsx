'use client';

import { CartDrawer } from '@/components/cart-drawer';
import { useCart } from '@/lib/cart-context';
import { ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'FitElite Pro Gym Bag',
    price: 89.99,
    rating: 4.8,
    reviews: 124,
    image: 'Gym Bag',
    category: 'Accessories',
  },
  {
    id: 2,
    name: 'Premium Protein Powder',
    price: 49.99,
    rating: 4.9,
    reviews: 248,
    image: 'Protein',
    category: 'Supplements',
  },
  {
    id: 3,
    name: 'Black Performance T-Shirt',
    price: 34.99,
    rating: 4.7,
    reviews: 156,
    image: 'T-Shirt',
    category: 'Apparel',
  },
  {
    id: 4,
    name: 'Resistance Band Set',
    price: 29.99,
    rating: 4.6,
    reviews: 89,
    image: 'Bands',
    category: 'Equipment',
  },
  {
    id: 5,
    name: 'Stainless Steel Shaker',
    price: 19.99,
    rating: 4.8,
    reviews: 203,
    image: 'Shaker',
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'Premium Yoga Mat',
    price: 59.99,
    rating: 4.9,
    reviews: 312,
    image: 'Yoga Mat',
    category: 'Equipment',
  },
  {
    id: 7,
    name: 'FitElite Training Shorts',
    price: 44.99,
    rating: 4.7,
    reviews: 98,
    image: 'Shorts',
    category: 'Apparel',
  },
  {
    id: 8,
    name: 'Advanced Recovery Roller',
    price: 54.99,
    rating: 4.8,
    reviews: 176,
    image: 'Roller',
    category: 'Recovery',
  },
  {
    id: 9,
    name: 'Wireless Sport Headphones',
    price: 99.99,
    rating: 4.6,
    reviews: 134,
    image: 'Headphones',
    category: 'Electronics',
  },
  {
    id: 10,
    name: 'Nutrition Meal Prep Containers',
    price: 24.99,
    rating: 4.7,
    reviews: 221,
    image: 'Containers',
    category: 'Accessories',
  },
  {
    id: 11,
    name: 'Performance Socks (3-Pack)',
    price: 29.99,
    rating: 4.8,
    reviews: 145,
    image: 'Socks',
    category: 'Apparel',
  },
  {
    id: 12,
    name: 'Smart Fitness Watch',
    price: 199.99,
    rating: 4.9,
    reviews: 267,
    image: 'Watch',
    category: 'Electronics',
  },
];

export default function ShopPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { addItem, getTotalItems } = useCart();

  const categories = ['All', ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    selectedCategory === 'All' ? products : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    setCartOpen(true);
  };

  const cartCount = getTotalItems();

  return (
    <>
      <main>
        {/* Header with Cart Button */}
        <section className="border-b border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">FitElite Shop</h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Premium fitness gear and supplements to complement your training.
              </p>
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative rounded-lg border border-border bg-background p-3 transition-all hover:bg-muted"
              aria-label="Open cart"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-secondary transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-muted flex items-center justify-center text-sm text-muted-foreground overflow-hidden">
                    {product.image}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {product.category}
                      </p>
                      <Link href={`/shop/${product.id}`} className="hover:text-accent transition-colors">
                        <h3 className="font-bold text-lg">{product.name}</h3>
                      </Link>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${
                                i < Math.floor(product.rating)
                                  ? 'fill-accent text-accent'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3 border-t border-border pt-4">
                      <div className="text-2xl font-bold text-accent">${product.price.toFixed(2)}</div>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full rounded-lg bg-accent/10 py-2.5 font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

    </>
  );
}
