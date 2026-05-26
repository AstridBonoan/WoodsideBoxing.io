import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { IMAGES } from '../data/assets'
import { SectionHeader } from './SectionHeader'

const TRAINING_FOCUS = [
  { title: 'Heavy Bag Training', caption: 'Power, rhythm, and endurance.' },
  { title: 'Conditioning', caption: 'Road work, circuits, fight-ready fitness.' },
  { title: 'Technique Development', caption: 'Fundamentals drilled until instinct.' },
] as const

const CARD_HEIGHT = 'h-[220px] sm:h-[250px] lg:h-[280px]'

function PhotoCard({
  src,
  alt,
  title,
  description,
  imageClassName = 'object-cover',
}: {
  src: string
  alt: string
  title: string
  description: string
  imageClassName?: string
}) {
  return (
    <figure className={`group relative ${CARD_HEIGHT} overflow-hidden rounded-sm`}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${imageClassName}`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/25 to-transparent" />
      <figcaption className="absolute right-0 bottom-0 left-0 p-4 sm:p-5">
        <h3 className="font-display text-lg font-semibold tracking-wide text-white uppercase sm:text-xl">{title}</h3>
        <p className="mt-1 text-xs text-white/70 sm:text-sm">{description}</p>
      </figcaption>
    </figure>
  )
}

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

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,280px)_1fr]">
          <PhotoCard
            src={IMAGES.sparringCompetition}
            alt="Woodside Boxing Academy fighters sparring in competition"
            title="Sparring & Competition"
            description="Controlled rounds and USA Boxing–sanctioned matchups under experienced coaches."
          />
          <PhotoCard
            src={IMAGES.teamAtmosphere}
            alt="Woodside Boxing Academy team celebrating together in the gym"
            title="Team Atmosphere"
            description="Our home in Flushing — no shortcuts."
            imageClassName="object-cover object-[center_35%]"
          />
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
