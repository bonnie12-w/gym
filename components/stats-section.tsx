export function StatsSection() {
  const stats = [
    { value: '95%', label: 'Member Satisfaction' },
    { value: '6M+', label: 'Workout Hours Logged' },
    { value: '12', label: 'Years of Excellence' },
    { value: '24/7', label: 'Member Support' },
  ];

  return (
    <section className="border-y border-border bg-secondary py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 text-center">
              <div className="text-3xl font-bold md:text-4xl lg:text-5xl">{stat.value}</div>
              <p className="text-sm text-muted-foreground md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
