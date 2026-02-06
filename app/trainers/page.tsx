import { Award, Users } from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: 'Alex Johnson',
    specialty: 'Strength & Conditioning',
    experience: '8 years',
    certifications: 'NASM, ISSA',
    bio: 'Alex specializes in building muscle and increasing strength through proven techniques.',
    image: 'Trainer 1',
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    specialty: 'HIIT & Fat Loss',
    experience: '6 years',
    certifications: 'ACE, ISSA',
    bio: 'Maria is passionate about helping clients achieve rapid fat loss results.',
    image: 'Trainer 2',
  },
  {
    id: 3,
    name: 'James Chen',
    specialty: 'Flexibility & Mobility',
    experience: '10 years',
    certifications: 'NASM, Yoga Alliance',
    bio: 'James brings a holistic approach to fitness combining yoga and mobility work.',
    image: 'Trainer 3',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    specialty: 'Nutrition Coaching',
    experience: '7 years',
    certifications: 'RDN, ISSN',
    bio: 'Sarah designs custom nutrition plans to complement your training program.',
    image: 'Trainer 4',
  },
  {
    id: 5,
    name: 'Marcus Thompson',
    specialty: 'Boxing & Combat',
    experience: '12 years',
    certifications: 'Boxing Coach, NASM',
    bio: 'Marcus brings championship-level boxing expertise to his training programs.',
    image: 'Trainer 5',
  },
  {
    id: 6,
    name: 'Jessica Lee',
    specialty: 'CrossFit & Functional',
    experience: '9 years',
    certifications: 'CrossFit L2, NASM',
    bio: 'Jessica helps clients master complex movements with proper form and progression.',
    image: 'Trainer 6',
  },
];

export default function TrainersPage() {
  return (
    <>
      <main>
        {/* Header */}
        <section className="border-b border-border bg-secondary py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Meet Our Trainers</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Learn from certified professionals dedicated to your success. Our trainers combine expertise with passion to help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {trainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-secondary transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-muted flex items-center justify-center text-sm text-muted-foreground">
                    {trainer.image}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-xl">{trainer.name}</h3>
                        <p className="text-sm text-accent font-semibold">{trainer.specialty}</p>
                      </div>

                      <p className="text-sm text-muted-foreground">{trainer.bio}</p>

                      {/* Meta */}
                      <div className="space-y-2 border-t border-border pt-4">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Award size={14} />
                          <span>{trainer.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Users size={14} />
                          <span>Certifications: {trainer.certifications}</span>
                        </div>
                      </div>
                    </div>

                    <button className="mt-6 rounded-lg border border-border bg-accent/10 py-2.5 font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground">
                      Book Session
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
