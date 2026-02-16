import { ContactForm } from '@/components/contact-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <main>
        {/* Header */}
        <section className="border-b border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Get In Touch</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Have questions? Our team is here to help. Reach out and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
              {/* Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <div className="space-y-4 rounded-xl border border-border bg-secondary p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Fitness Avenue
                        <br />
                        Gym City, GC 12345
                        <br />
                        Kenya
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-xl border border-border bg-secondary p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                          +254 7 567-890
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-xl border border-border bg-secondary p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        <a href="mailto:info@rdfrongai.com" className="hover:text-accent transition-colors">
                          info@rdfrongai.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-xl border border-border bg-secondary p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Mon - Fri: 6:00 AM - 10:00 PM
                        <br />
                        Sat - Sun: 8:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="border-t border-border bg-secondary py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="h-96 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
              Map Placeholder - Google Maps Integration
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Find quick answers to common questions about our gym and services.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  q: 'What are your membership options?',
                  a: 'We offer three membership tiers: Starter, Pro, and Elite. Each includes 24/7 gym access with varying levels of coaching and amenities.',
                },
                {
                  q: 'Do you offer a trial membership?',
                  a: 'Yes! New members get a free first session with our trainers, plus access to our facilities for a 7-day trial period.',
                },
                {
                  q: 'Can I book personal training sessions online?',
                  a: 'Absolutely! You can book sessions directly through our booking page with availability checking and confirmation.',
                },
                {
                  q: 'What is your cancellation policy?',
                  a: 'All memberships are month-to-month with no contracts. You can cancel anytime with 7 days notice.',
                },
                {
                  q: 'Do you have changing rooms and lockers?',
                  a: 'Yes, we have full locker room facilities, showers, and lockers available for all members.',
                },
                {
                  q: 'What programs do beginners work with?',
                  a: 'We have beginner-friendly programs in all areas. Our trainers will assess your fitness level and create a personalized plan.',
                },
              ].map((faq, i) => (
                <div key={i} className="space-y-3 rounded-xl border border-border bg-secondary p-6">
                  <h3 className="font-bold text-lg">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
