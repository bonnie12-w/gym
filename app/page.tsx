import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { FeaturesSection } from '@/components/features-section'
import { ProgramsSection } from '@/components/programs-section'
import { TrainersSection } from '@/components/trainers-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTABanner } from '@/components/cta-banner'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProgramsSection />
      <TrainersSection />
      <TestimonialsSection />
      <CTABanner />
    </main>
  )
}
