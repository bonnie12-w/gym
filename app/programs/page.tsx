import { Clock, Zap } from 'lucide-react';

const programs = [
  {
    id: 1,
    name: 'Strength Building',
    description: 'Build muscle mass and increase overall strength with progressive resistance training. Perfect for those looking to develop a stronger physique.',
    difficulty: 'Intermediate',
    duration: '60 min',
    price: '$25',
    details: '3x per week recommended • Includes form coaching • Progress tracking',
  },
  {
    id: 2,
    name: 'Fat Loss Bootcamp',
    description: 'High-intensity workouts designed to maximize calorie burn and boost metabolism for rapid results.',
    difficulty: 'Advanced',
    duration: '45 min',
    price: '$30',
    details: '5x per week recommended • HIIT training • Nutrition guidance',
  },
  {
    id: 3,
    name: 'Flexibility & Recovery',
    description: 'Yoga and mobility focused sessions for flexibility, balance, and injury prevention. Great for all ages.',
    difficulty: 'Beginner',
    duration: '50 min',
    price: '$20',
    details: 'Daily recommended • Stress relief • Injury prevention',
  },
  {
    id: 4,
    name: 'Cardio Blast',
    description: 'Dynamic cardiovascular training to improve endurance and heart health with fun group classes.',
    difficulty: 'Intermediate',
    duration: '45 min',
    price: '$22',
    details: '3-4x per week • Group energy • Cardiovascular benefits',
  },
  {
    id: 5,
    name: 'Functional Fitness',
    description: 'Train movements that improve daily functionality and overall athleticism using real-world exercises.',
    difficulty: 'Intermediate',
    duration: '55 min',
    price: '$28',
    details: '3x per week • Compound movements • Functional strength',
  },
  {
    id: 6,
    name: 'Boxing & Combat',
    description: 'Learn boxing techniques while getting an intense full-body workout. Fun, empowering, and highly effective.',
    difficulty: 'Advanced',
    duration: '60 min',
    price: '$32',
    details: 'Technique coaching • Heavy bag work • Confidence building',
  },
  {
    id: 7,
    name: 'CrossFit Fundamentals',
    description: 'Master the basics of CrossFit movements and prepare for advanced training with expert coaching.',
    difficulty: 'All Levels',
    duration: '75 min',
    price: '$35',
    details: 'Progression-based • Olympic lifts • Community atmosphere',
  },
  {
    id: 8,
    name: 'Personal Training',
    description: 'One-on-one coaching tailored to your specific goals, fitness level, and schedule.',
    difficulty: 'All Levels',
    duration: '60 min',
    price: '$60',
    details: 'Custom programs • Flexible scheduling • Nutrition planning',
  },
];

export default function ProgramsPage() {
  return (
    <>
      <main>
        {/* Header */}
        <section className="border-b border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Our Programs</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Choose from our diverse range of fitness programs designed for all levels and goals. Each program is carefully crafted by our expert trainers.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-secondary transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-40 bg-muted flex items-center justify-center text-sm text-muted-foreground">
                    Program Image
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">{program.name}</h3>
                        <span className="text-lg font-bold text-accent">{program.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{program.description}</p>

                      {/* Meta */}
                      <div className="flex gap-4 border-t border-border pt-3">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Zap size={14} />
                          <span>{program.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={14} />
                          <span>{program.duration}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <p className="text-xs text-muted-foreground pt-2">{program.details}</p>
                    </div>

                    <button className="mt-4 rounded-lg border border-border bg-accent/10 py-2 font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
