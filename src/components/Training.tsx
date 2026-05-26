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
    <section id="training" ref={ref} className="section-screen animate-on-scroll border-t border-forest/20 bg-matte">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          label="The Gym"
          title="Training Environment"
          description="Heavy bags, rings, and a team that holds you accountable."
        />

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          <figure className="group relative aspect-[16/10] max-h-36 overflow-hidden rounded-sm sm:max-h-40 lg:col-span-2 lg:max-h-44">
            <img
              src={IMAGES.sparring}
              alt="Woodside Boxing Academy fighters sparring in competition"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/30 to-transparent" />
            <figcaption className="absolute right-0 bottom-0 left-0 p-4">
              <h3 className="font-display text-lg font-semibold tracking-wide text-white uppercase">
                Sparring & Competition
              </h3>
              <p className="mt-0.5 text-xs text-white/70">
                Controlled rounds and USA Boxing–sanctioned matchups under experienced coaches.
              </p>
            </figcaption>
          </figure>

          <figure className="group relative hidden aspect-[4/3] max-h-36 overflow-hidden rounded-sm sm:max-h-40 lg:block lg:max-h-44">
            <img
              src={IMAGES.exterior}
              alt="Woodside Boxing Academy gym entrance"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/30 to-transparent" />
            <figcaption className="absolute right-0 bottom-0 left-0 p-4">
              <h3 className="font-display text-base font-semibold tracking-wide text-white uppercase">Team Atmosphere</h3>
              <p className="mt-0.5 text-xs text-white/70">Our home in Flushing — no shortcuts.</p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-3 grid shrink-0 gap-2 sm:grid-cols-3">
          {TRAINING_FOCUS.map((item) => (
            <div
              key={item.title}
              className="rounded-sm border border-forest/30 bg-forest-dark/50 px-3 py-2 transition-colors hover:border-forest-light/50"
            >
              <h3 className="font-display text-sm font-semibold tracking-wide text-white uppercase">{item.title}</h3>
              <p className="text-xs text-white/55">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
