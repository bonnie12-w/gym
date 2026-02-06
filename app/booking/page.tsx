import { BookingForm } from '@/components/booking-form';
import { Calendar, Clock, Users } from 'lucide-react';

export default function BookingPage() {
  return (
    <>
      <main>
        {/* Header */}
        <section className="border-b border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Book Your Session</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Schedule your first session with one of our expert trainers. Fill out the form below and we'll confirm your booking within 24 hours.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-secondary p-8 md:p-12">
                  <BookingForm />
                </div>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                {/* Info Cards */}
                <div className="space-y-4 rounded-xl border border-border bg-secondary p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Flexible Scheduling</h3>
                      <p className="text-sm text-muted-foreground">
                        Book sessions at your convenience. Sessions available 6 AM - 7 PM daily.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-xl border border-border bg-secondary p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Expert Trainers</h3>
                      <p className="text-sm text-muted-foreground">
                        Work with certified professionals tailored to your goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-xl border border-border bg-secondary p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">60-Minute Sessions</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive training with form coaching and feedback.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="space-y-4 rounded-xl bg-gradient-to-r from-accent to-accent/80 p-6 text-accent-foreground">
                  <h3 className="font-bold text-lg">First Session Free!</h3>
                  <p className="text-sm opacity-90">
                    New members get a complimentary consultation and assessment with one of our trainers.
                  </p>
                  <p className="text-xs opacity-75">Terms and conditions apply</p>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                  <h3 className="font-bold">Quick FAQ</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Can I reschedule?</p>
                      <p className="text-muted-foreground">Yes, up to 24 hours before your session.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">What should I bring?</p>
                      <p className="text-muted-foreground">Just bring water and your ID. We have lockers available.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">New to fitness?</p>
                      <p className="text-muted-foreground">We offer beginner-friendly programs for all fitness levels.</p>
                    </div>
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
