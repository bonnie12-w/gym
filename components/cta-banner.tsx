import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent to-accent/80 px-8 py-16 md:px-12 md:py-24">
          <div className="relative z-10 space-y-6 text-center">
            <h2 className="text-3xl font-bold text-accent-foreground md:text-4xl lg:text-5xl">
              Ready to Transform?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-accent-foreground/90">
              Join Golden gym today and get a free 1-on-1 consultation with our expert trainers. Start your
              transformation journey now!
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-foreground px-8 py-3.5 font-semibold text-accent transition-all hover:shadow-lg"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-accent-foreground px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent-foreground/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Background Accent */}
          <div className="absolute right-0 top-0 -mr-20 -mt-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
