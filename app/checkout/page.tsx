'use client';

import React from "react"

import { useCart } from '@/lib/cart-context';
import { useState } from 'react';
import { Check } from 'lucide-react';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      clearCart();
    }, 1200);
  };

  if (items.length === 0 && !submitted) {
    return (
      <>
        <main className="min-h-screen py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold">Your Cart is Empty</h1>
              <p className="text-lg text-muted-foreground">Add items to your cart to proceed with checkout.</p>
              <a
                href="/shop"
                className="inline-flex rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:shadow-lg hover:shadow-accent/50"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (submitted) {
    return (
      <>
        <main className="min-h-screen py-20 md:py-32">
          <div className="mx-auto max-w-2xl px-4">
            <div className="space-y-6 rounded-xl border border-border bg-secondary p-8 md:p-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 mx-auto">
                <Check className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Order Confirmed!</h1>
                <p className="text-muted-foreground">
                  Thank you for your purchase. You'll receive a confirmation email shortly.
                </p>
              </div>
              <div className="space-y-4 rounded-lg border border-border bg-background p-6 text-left">
                <div>
                  <p className="text-sm text-muted-foreground">Order Total</p>
                  <p className="text-3xl font-bold text-accent">${getTotalPrice().toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Shipping To</p>
                  <p className="font-semibold">{formData.fullName}</p>
                  <p className="text-sm text-muted-foreground">{formData.address}</p>
                  <p className="text-sm text-muted-foreground">
                    {formData.city}, {formData.state} {formData.zipCode}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Expected delivery: 3-5 business days</p>
                <a
                  href="/shop"
                  className="inline-flex rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:shadow-lg hover:shadow-accent/50"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <section className="border-b border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Checkout</h1>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
                {/* Shipping Address */}
                <div className="space-y-4 rounded-xl border border-border bg-secondary p-8">
                  <h2 className="text-xl font-bold">Shipping Address</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street Address"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <div className="grid gap-4 md:grid-cols-3">
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                        className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        required
                        className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="ZIP Code"
                        required
                        className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="space-y-4 rounded-xl border border-border bg-secondary p-8">
                  <h2 className="text-xl font-bold">Payment Information</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="Card Number (4111 1111 1111 1111)"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                        className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="CVV"
                        required
                        className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-accent px-6 py-4 font-bold text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : `Complete Order - $${getTotalPrice().toFixed(2)}`}
                </button>
              </form>

              {/* Order Summary */}
              <div className="space-y-6 rounded-xl border border-border bg-secondary p-8 h-fit">
                <h2 className="text-xl font-bold">Order Summary</h2>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} <span className="text-muted-foreground">x{item.quantity}</span>
                      </span>
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border space-y-3 pt-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-3 border-t border-border">
                    <span>Total</span>
                    <span className="text-accent">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
