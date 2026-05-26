import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GYM } from '../data/site'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=900&q=80'

export function About() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="about" ref={ref} className="animate-on-scroll border-t border-white/5 bg-matte py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
          <img
            src={ABOUT_IMAGE}
            alt="Boxers training together in the gym"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          <div className="absolute bottom-6 left-6 border-l-4 border-blood pl-4">
            <p className="font-display text-4xl font-bold text-white">Since {GYM.founded}</p>
            <p className="text-sm tracking-widest text-gold uppercase">Queens, New York</p>
          </div>
        </div>

        <div>
          <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">Our Philosophy</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
            Built on Discipline
          </h2>
          <div className="mt-2 h-1 w-16 bg-blood" />

          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Woodside Boxing Academy is a no-nonsense, results-driven gym dedicated to the art and discipline of boxing.
            We are not a luxury fitness brand — we are a real Queens academy where hard work and respect are the
            cornerstones of every session.
          </p>
          <p className="mt-4 leading-relaxed text-white/65">
            If you want to train, we want to teach you. Our approach emphasizes authentic boxing fundamentals in a safe,
            structured environment — building confidence, leadership, and mental fortitude alongside physical skill.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              'Authentic boxing fundamentals — stance, footwork, defense',
              'Safe and disciplined training environment for all levels',
              'Confidence and leadership development through the sport',
              'Community atmosphere — fighters supporting fighters',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blood" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
