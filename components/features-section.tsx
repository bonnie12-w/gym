import { Dumbbell, Users, Zap, TrendingUp } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one coaching with certified trainers tailored to your goals and fitness level.',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'High-energy classes including HIIT, yoga, CrossFit, spinning, and more.',
    },
    {
      icon: Zap,
      title: 'Nutrition Plans',
      description: 'Custom meal plans designed by certified nutritionists to maximize your results.',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Real-time analytics and insights to monitor your fitness journey and celebrate wins.',
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Why Choose FitElite</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to achieve your fitness goals and maintain a healthy lifestyle.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="space-y-4 rounded-xl border border-border bg-secondary p-8 transition-all hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
