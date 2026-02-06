'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Perfect for beginners',
      features: [
        'Gym access 24/7',
        'Basic equipment access',
        'Mobile app',
        'Monthly progress check-in',
        'Community access',
      ],
      popular: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      monthlyPrice: 59,
      yearlyPrice: 590,
      description: 'Most popular choice',
      features: [
        'All Starter features',
        '4 personal training sessions/month',
        'Group classes unlimited',
        'Nutrition consultation',
        'Locker rental included',
        'Guest privileges',
        'Priority booking',
      ],
      popular: true,
    },
    {
      id: 'elite',
      name: 'Elite',
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: 'Complete transformation',
      features: [
        'All Pro features',
        '8 personal training sessions/month',
        'Dedicated trainer',
        'Custom nutrition plan',
        'Body composition analysis',
        'Supplement discount',
        'Merchandise discount',
        'Priority support',
      ],
      popular: false,
    },
  ];

  return (
    <>
      <main>
        {/* Header */}
        <section className="border-b border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Membership Plans</h1>
              <p className="text-lg text-muted-foreground">
                Choose the plan that fits your fitness journey. All memberships include 24/7 gym access and community support.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center gap-4">
              <span className={`font-semibold ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted"
              >
                <span
                  className={`absolute inline-block h-6 w-6 transform rounded-full bg-accent transition-all ${
                    billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`font-semibold ${billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan) => {
                const price = billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12);
                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col rounded-xl border transition-all ${
                      plan.popular
                        ? 'border-accent bg-secondary shadow-lg shadow-accent/20'
                        : 'border-border bg-secondary'
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="p-8">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>

                      <div className="mt-6 space-y-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold">${price}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <p className="text-xs text-muted-foreground">
                            ${plan.yearlyPrice}/year, billed annually
                          </p>
                        )}
                      </div>

                      <button
                        className={`mt-6 w-full rounded-lg py-3 font-semibold transition-all ${
                          plan.popular
                            ? 'bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/50'
                            : 'border border-border bg-transparent text-foreground hover:bg-muted'
                        }`}
                      >
                        Choose Plan
                      </button>

                      {/* Features */}
                      <div className="mt-8 space-y-4">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAQ Section */}
            <div className="mt-20 space-y-8 max-w-2xl">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

              <div className="space-y-6">
                {[
                  {
                    q: 'Can I upgrade or downgrade my membership?',
                    a: 'Yes! You can change your plan anytime. Changes take effect at the start of your next billing cycle.',
                  },
                  {
                    q: 'Is there a contract or commitment required?',
                    a: 'No contracts. All memberships are month-to-month and can be cancelled anytime with 7 days notice.',
                  },
                  {
                    q: 'Do you offer discounts for annual billing?',
                    a: 'Yes! Annual memberships save you 17% compared to monthly billing.',
                  },
                  {
                    q: 'Can I bring a guest?',
                    a: 'Pro and Elite plans include guest privileges. Starter members can add guests for $10 per visit.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="space-y-2 border-b border-border pb-6">
                    <h3 className="font-semibold">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
