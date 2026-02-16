'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Michael Johnson',
      role: 'Software Engineer',
      content:
        'RDF rongai completely transformed my fitness journey. The trainers are knowledgeable and motivating, and I\'ve never felt better.',
      rating: 5,
      image: 'MJ',
    },
    {
      id: 2,
      name: 'Emily Davis',
      role: 'Marketing Manager',
      content:
        'I lost 20 pounds in 3 months with the personalized nutrition plan. The community here is incredibly supportive!',
      rating: 5,
      image: 'ED',
    },
    {
      id: 3,
      name: 'David Smith',
      role: 'Entrepreneur',
      content:
        'Best investment in my health. The flexible scheduling and top-notch facilities make it worth every penny.',
      rating: 5,
      image: 'DS',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="border-t border-border bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Member Success Stories</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real transformations from real members just like you.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="flex flex-col items-center gap-8">
            <div className="space-y-6 rounded-xl border border-border bg-background p-8 md:p-12">
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl font-medium italic md:text-2xl">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="rounded-lg border border-border p-3 transition-all hover:bg-muted"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="rounded-lg border border-border p-3 transition-all hover:bg-muted"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
