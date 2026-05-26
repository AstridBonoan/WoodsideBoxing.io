import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { COACHES } from '../data/site'
import { IMAGES } from '../data/assets'

export function Coaches() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="coaches" ref={ref} className="animate-on-scroll border-t border-forest/20 bg-matte py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">Our Team</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
            Meet Our Coaches
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-forest-light" />
          <p className="mt-4 text-white/65">
            Experienced trainers dedicated to building fighters from the ground up — fundamentals, discipline, and
            real boxing.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {COACHES.map((coach) => (
            <article
              key={coach.name}
              className="group overflow-hidden rounded-sm border border-white/10 bg-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-forest-light/50"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-forest-dark/40">
                {coach.image ? (
                  <img
                    src={IMAGES.coaches[coach.image]}
                    alt={coach.name}
                    className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-forest-dark/60">
                    <span className="font-display text-5xl font-bold text-forest-light/40 uppercase">AG</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
              </div>
              <div className="border-t border-white/10 px-5 py-4">
                <h3 className="font-display text-lg font-semibold tracking-wide text-white uppercase">{coach.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
