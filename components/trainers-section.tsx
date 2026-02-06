import Link from "next/link"
import { Award } from "lucide-react"

export function TrainersSection() {
  const trainers = [
    {
      id: 1,
      name: "Alex Johnson",
      specialty: "Strength & Conditioning",
      experience: "8 years",
      image: "/trainers/alex.jpg",
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      specialty: "HIIT & Fat Loss",
      experience: "6 years",
      image: "/trainers/maria.jpg",
    },
    {
      id: 3,
      name: "James Chen",
      specialty: "Flexibility & Mobility",
      experience: "10 years",
      image: "/trainers/james.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      specialty: "Nutrition Coaching",
      experience: "7 years",
      image: "/trainers/sarah.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="space-y-12">

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Meet Our Expert Trainers
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Learn from certified professionals dedicated to your success.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-secondary transition hover:shadow-lg hover:shadow-accent/20"
              >

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold">{trainer.name}</h3>

                    <p className="text-sm font-semibold text-accent">
                      {trainer.specialty}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Award size={14} />
                      <span>{trainer.experience} experience</span>
                    </div>
                  </div>

                  <button className="mt-4 rounded-lg border border-border bg-accent/10 py-2 font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground">
                    View Profile
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/trainers"
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-6 py-3 font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground"
            >
              View All Trainers →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
