import Link from "next/link"
import { Clock, Zap } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      id: 1,
      name: "Strength Building",
      description:
        "Build muscle mass and increase overall strength with progressive resistance training.",
      difficulty: "Intermediate",
      duration: "60 min",
      image: "/programs/strength.jpg",
    },
    {
      id: 2,
      name: "Fat Loss Bootcamp",
      description:
        "High-intensity workouts designed to maximize calorie burn and boost metabolism.",
      difficulty: "Advanced",
      duration: "45 min",
      image: "/programs/fatloss.jpg",
    },
    {
      id: 3,
      name: "Flexibility & Recovery",
      description:
        "Yoga and mobility focused sessions for flexibility, balance, and injury prevention.",
      difficulty: "Beginner",
      duration: "50 min",
      image: "/programs/flexibility.jpg",
    },
    {
      id: 4,
      name: "Cardio Blast",
      description:
        "Dynamic cardiovascular training to improve endurance and heart health.",
      difficulty: "Intermediate",
      duration: "45 min",
      image: "/programs/cardio.jpg",
    },
  ]

  return (
    <section className="border-t border-border bg-secondary py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="space-y-12">

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Our Programs
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Choose from diverse fitness programs designed for all levels and goals.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all hover:shadow-lg hover:shadow-accent/20"
              >

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold">{program.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {program.description}
                    </p>

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
                  </div>

                  <button className="mt-4 rounded-lg border border-border bg-accent/10 py-2 font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All */}
          <div className="text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-6 py-3 font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground"
            >
              View All Programs →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
