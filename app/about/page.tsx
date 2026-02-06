import { Award, Target, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results through science-backed training methods.',
    },
    {
      icon: Users,
      title: 'Community-Focused',
      description: 'We believe in the power of community to motivate and support each other.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in coaching, facilities, and member service.',
    },
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="border-b border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">About FitElite</h1>
              <p className="text-xl text-muted-foreground">
                Transforming bodies and changing lives through elite training, expert guidance, and an unbeatable community.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 space-y-12">
            <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    FitElite was founded in 2012 with a simple vision: to create a gym that combines world-class coaching with a supportive community.
                  </p>
                  <p>
                    What started as a small 2,000 sq ft facility has grown into a 15,000 sq ft fitness powerhouse serving over 1,000 active members.
                  </p>
                  <p>
                    We're proud of the transformation stories our members have achieved and the lasting relationships we've built along the way.
                  </p>
                </div>
              </div>
              <div className="h-96 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
                Gym Image
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-t border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower individuals to achieve their fitness goals through personalized coaching, state-of-the-art facilities, and a vibrant community of like-minded fitness enthusiasts. We believe everyone deserves access to world-class training and the support needed to succeed.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and results-driven fitness community, where transformation isn't just physical—it's mental and emotional. We envision a world where fitness is accessible, affordable, and celebrated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Core Values</h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                These principles guide everything we do at FitElite.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="space-y-4 rounded-xl border border-border bg-secondary p-8"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="border-t border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Facilities</h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Top-tier equipment and amenities designed for your comfort and progress.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                '5,000 sq ft of free weights',
                'State-of-the-art cardio equipment',
                'CrossFit rig and equipment',
                'Olympic platform & bumper plates',
                'Group class studios',
                'Locker rooms & showers',
                'Sauna & steam room',
                'Smoothie bar',
                'Premium sound systems',
              ].map((facility) => (
                <div key={facility} className="flex items-center gap-4 rounded-lg border border-border bg-background p-4">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  <span className="font-medium">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
