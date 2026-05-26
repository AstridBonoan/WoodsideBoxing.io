import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { TRAINING_ITEMS } from '../data/site'

export function Training() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="training" ref={ref} className="animate-on-scroll border-t border-white/5 bg-matte py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">The Gym</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
            Training Environment
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-blood" />
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            Heavy bags, rings, and a team that holds you accountable. This is where the work gets done.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINING_ITEMS.map((item, i) => (
            <figure
              key={item.title}
              className={`group relative overflow-hidden rounded-sm ${
                i === 0 ? 'sm:col-span-2 sm:row-span-1 lg:col-span-2' : ''
              }`}
            >
              <div className={`relative ${i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <figcaption className="absolute right-0 bottom-0 left-0 p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold tracking-wide text-white uppercase sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{item.caption}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
