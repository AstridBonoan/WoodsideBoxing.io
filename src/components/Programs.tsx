import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { PROGRAMS } from '../data/site'
import { IMAGES } from '../data/assets'

const MEMBERSHIP_IMAGES = {
  logo: IMAGES.membership.logo,
  sparring: IMAGES.membership.sparring,
  intro: IMAGES.membership.intro,
} as const

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-forest-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export function Programs() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="programs" ref={ref} className="animate-on-scroll bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">Exclusive Services</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
            Unleash Your Full Potential
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-forest-light" />
          <p className="mt-4 text-white/65">
            Choose the membership that fits your goals — from independent training to USA Boxing competition.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.id}
              className={`flex flex-col overflow-hidden rounded-sm border transition-all duration-300 hover:-translate-y-1 ${
                program.featured
                  ? 'border-forest-light bg-matte shadow-lg shadow-forest/20'
                  : 'border-white/10 bg-matte/50 hover:border-forest/40'
              }`}
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-forest-dark/40">
                <img
                  src={MEMBERSHIP_IMAGES[program.image]}
                  alt={program.title}
                  className={`h-full w-full ${program.image === 'logo' ? 'object-contain p-8' : 'object-cover'}`}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 py-8 text-center">
                {program.featured && (
                  <span className="mb-3 inline-block w-fit rounded-sm bg-forest/30 px-2 py-0.5 text-xs font-semibold tracking-wider text-forest-light uppercase">
                    Fighter Track
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold tracking-wide text-white uppercase">{program.title}</h3>
                <p className="mt-4 font-display text-4xl font-bold text-gold">{program.price}</p>
                <p className="mt-1 text-sm text-white/50">{program.period}</p>

                <a
                  href="#contact"
                  className={`mx-auto mt-5 inline-block rounded-sm px-8 py-2.5 text-sm font-semibold tracking-wide transition-colors ${
                    program.featured
                      ? 'bg-forest text-white hover:bg-forest-light'
                      : 'border border-white/20 text-white hover:border-gold hover:text-gold'
                  }`}
                >
                  Sign Up
                </a>

                <p className="mt-6 text-left text-sm leading-relaxed text-white/60">{program.description}</p>

                <div className="my-6 border-t border-white/10" />

                <ul className="space-y-3 text-left text-sm text-white/75">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
