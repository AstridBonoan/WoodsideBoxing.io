import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GYM } from '../data/site'
import { IMAGES } from '../data/assets'
import { SectionHeader } from './SectionHeader'

export function About() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="about" ref={ref} className="section-screen animate-on-scroll border-t border-forest/20 bg-matte">
      <div className="mx-auto grid h-full max-h-full w-full max-w-7xl flex-1 items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="relative max-h-[42vh] overflow-hidden rounded-sm lg:max-h-none lg:min-h-0 lg:flex-1">
          <img
            src={IMAGES.exterior}
            alt="Woodside Boxing Academy building exterior in Flushing, Queens"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent" />
          <div className="absolute bottom-4 left-4 border-l-4 border-forest-light pl-3">
            <p className="font-display text-2xl font-bold text-white sm:text-3xl">Founded {GYM.founded}</p>
            <p className="text-xs tracking-widest text-gold uppercase">Flushing, New York</p>
          </div>
        </div>

        <div className="min-h-0 lg:overflow-hidden">
          <SectionHeader
            label="About Us"
            title="Built on Discipline"
            description="A no-nonsense Queens academy where hard work and respect are the cornerstones of every session."
          />

          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              'Authentic boxing fundamentals',
              'Safe, disciplined environment',
              'Confidence through the sport',
              'Fighters supporting fighters',
            ].map((item) => (
              <li key={item} className="flex gap-2 text-sm text-white/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-light" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
