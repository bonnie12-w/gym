'use client';

import { useCart } from '@/lib/cart-context';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md border-l border-border bg-background z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-6">
          <div className="flex items-center gap-2">
            <ShoppingBag size={24} className="text-accent" />
            <h2 className="text-lg font-bold">Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg hover:bg-muted p-2"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="overflow-y-auto flex-1 p-6 space-y-4" style={{ height: 'calc(100% - 320px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-muted-foreground/50" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Link
                href="/shop"
                onClick={onClose}
                className="text-accent font-semibold hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-lg border border-border bg-secondary p-4">
                {/* Product Image */}
                <div className="h-20 w-20 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
                  {item.image}
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-accent font-bold">${item.price.toFixed(2)}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="rounded p-1 hover:bg-muted"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="rounded p-1 hover:bg-muted"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Remove from cart"
                >
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full rounded-lg bg-accent px-4 py-3 font-semibold text-accent-foreground text-center transition-all hover:shadow-lg hover:shadow-accent/50"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
