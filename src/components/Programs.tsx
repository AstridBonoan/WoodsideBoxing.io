import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { PROGRAMS } from '../data/site'

export function Programs() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="programs" ref={ref} className="animate-on-scroll bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">Exclusive Services</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
            Unleash Your Full Potential
          </h2>
          <div className="mt-2 h-1 w-16 bg-forest-light" />
          <p className="mt-4 text-white/65">
            Choose the membership that fits your goals — from independent training to USA Boxing competition.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.id}
              className={`group flex flex-col rounded-sm border p-6 transition-all duration-300 hover:-translate-y-1 ${
                program.featured
                  ? 'border-forest-light bg-matte shadow-lg shadow-forest/20'
                  : 'border-white/10 bg-matte/50 hover:border-forest/40'
              }`}
            >
              {program.featured && (
                <span className="mb-3 inline-block w-fit rounded-sm bg-forest/30 px-2 py-0.5 text-xs font-semibold tracking-wider text-forest-light uppercase">
                  Fighter Track
                </span>
              )}
              <h3 className="font-display text-xl font-semibold tracking-wide text-white uppercase">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{program.description}</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-2xl font-bold text-gold">
                  {program.price}
                  <span className="text-sm font-normal text-white/50"> {program.period}</span>
                </p>
                <a
                  href="#contact"
                  className={`mt-4 block min-h-[44px] rounded-sm py-2.5 text-center text-sm font-semibold tracking-wide transition-colors ${
                    program.featured
                      ? 'bg-forest text-white hover:bg-forest-light'
                      : 'border border-white/20 text-white hover:border-gold hover:text-gold'
                  }`}
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
