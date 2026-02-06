'use client';

import React from "react"

import { useState } from 'react';
import { Check } from 'lucide-react';

interface BookingFormProps {
  onSuccess?: () => void;
}

export function BookingForm({ onSuccess }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    trainer: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const programs = [
    'Strength Building',
    'Fat Loss Bootcamp',
    'Flexibility & Recovery',
    'Cardio Blast',
    'Functional Fitness',
    'Boxing & Combat',
    'CrossFit Fundamentals',
    'Personal Training',
  ];

  const trainers = [
    'Alex Johnson',
    'Maria Rodriguez',
    'James Chen',
    'Sarah Williams',
    'Marcus Thompson',
    'Jessica Lee',
  ];

  const timeSlots = [
    '06:00 AM',
    '07:00 AM',
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      onSuccess?.();

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          program: '',
          trainer: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
        });
      }, 3000);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="space-y-6 rounded-xl border border-border bg-secondary p-8 md:p-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
          <Check className="h-8 w-8 text-accent" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
          <p className="text-muted-foreground">
            Thank you for your booking. We'll send you a confirmation email shortly with all the details.
          </p>
        </div>
        <div className="space-y-2 rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Program:</span> {formData.program}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Date:</span> {formData.preferredDate}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Time:</span> {formData.preferredTime}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label className="text-sm font-semibold">Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Program & Trainer */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold">Select Program *</label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Choose a program</option>
            {programs.map((prog) => (
              <option key={prog} value={prog}>
                {prog}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Select Trainer</label>
          <select
            name="trainer"
            value={formData.trainer}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Any trainer (we'll assign)</option>
            {trainers.map((trainer) => (
              <option key={trainer} value={trainer}>
                {trainer}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold">Preferred Date *</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold">Preferred Time *</label>
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-semibold">Additional Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific goals or health concerns we should know about?"
          rows={4}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Booking...' : 'Book Session'}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        We'll contact you within 24 hours to confirm your booking.
      </p>
    </form>
  );
}
