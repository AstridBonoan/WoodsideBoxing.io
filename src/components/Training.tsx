import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { IMAGES } from '../data/assets'
import { SectionHeader } from './SectionHeader'

const TRAINING_FOCUS = [
  { title: 'Heavy Bag Training', caption: 'Power, rhythm, and endurance.' },
  { title: 'Conditioning', caption: 'Road work, circuits, fight-ready fitness.' },
  { title: 'Technique Development', caption: 'Fundamentals drilled until instinct.' },
] as const

export function Training() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="training" ref={ref} className="animate-on-scroll border-t border-forest/20 bg-matte py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          label="The Gym"
          title="Training Environment"
          description="Heavy bags, rings, and a team that holds you accountable."
        />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          <figure className="group relative mx-auto w-full max-w-[300px] shrink-0 overflow-hidden rounded-sm lg:mx-0">
            <div className="relative aspect-square w-full">
              <img
                src={IMAGES.sparringCompetition}
                alt="Woodside Boxing Academy fighters sparring in competition"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/30 to-transparent" />
              <figcaption className="absolute right-0 bottom-0 left-0 p-5">
                <h3 className="font-display text-xl font-semibold tracking-wide text-white uppercase sm:text-2xl">
                  Sparring & Competition
                </h3>
                <p className="mt-1 text-xs text-white/70 sm:text-sm">
                  Controlled rounds and USA Boxing–sanctioned matchups under experienced coaches.
                </p>
              </figcaption>
            </div>
          </figure>

          <figure className="group relative min-h-[260px] w-full overflow-hidden rounded-sm sm:min-h-[300px] lg:min-h-0 lg:flex-1">
            <div className="relative h-full min-h-[260px] w-full sm:min-h-[300px]">
              <img
                src={IMAGES.exterior}
                alt="Woodside Boxing Academy gym entrance"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/30 to-transparent" />
              <figcaption className="absolute right-0 bottom-0 left-0 p-6">
                <h3 className="font-display text-xl font-semibold tracking-wide text-white uppercase">
                  Team Atmosphere
                </h3>
                <p className="mt-1 text-sm text-white/70">Our home in Flushing — no shortcuts.</p>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {TRAINING_FOCUS.map((item) => (
            <div
              key={item.title}
              className="rounded-sm border border-forest/30 bg-forest-dark/50 p-6 transition-colors hover:border-forest-light/50 hover:bg-forest/20"
            >
              <h3 className="font-display text-lg font-semibold tracking-wide text-white uppercase">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
