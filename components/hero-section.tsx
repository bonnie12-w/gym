import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {

  const videoUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/202601271629%283%29-BrvZ4784lmC68RnfmTcB9tLHjdTBoF.mp4"

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold">
            Elite Training,
            <span className="text-red-500"> Exceptional Results</span>
          </h1>

          <p className="text-lg text-gray-200">
            Transform your body with professional coaching and world‑class facilities.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/booking"
              className="bg-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-700 flex items-center gap-2"
            >
              Join Now <ArrowRight size={18} />
            </Link>

            <Link
              href="/membership"
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black"
            >
              Free Trial
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}
