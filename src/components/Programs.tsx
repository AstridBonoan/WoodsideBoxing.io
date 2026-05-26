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
    <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export function Programs() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="programs" ref={ref} className="animate-on-scroll bg-[#f5f0e8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 font-display text-sm tracking-[0.25em] text-forest uppercase">Exclusive Services</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#2a1f14] uppercase sm:text-5xl">
            Unleash Your Full Potential
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-forest-light" />
          <p className="mt-4 text-[#2a1f14]/70">
            Choose the membership that fits your goals — from independent training to USA Boxing competition.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.id}
              className="flex flex-col overflow-hidden rounded-md border border-[#2a1f14]/10 bg-[#faf8f4] shadow-sm"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-forest-dark/5">
                <img
                  src={MEMBERSHIP_IMAGES[program.image]}
                  alt={program.title}
                  className={`h-full w-full ${program.image === 'logo' ? 'object-contain p-8' : 'object-cover'}`}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 py-8 text-center text-[#2a1f14]">
                <h3 className="font-display text-xl font-bold tracking-wide uppercase">{program.title}</h3>
                <p className="mt-4 font-display text-4xl font-bold">{program.price}</p>
                <p className="mt-1 text-sm text-[#2a1f14]/60">{program.period}</p>

                <a
                  href="#contact"
                  className="mx-auto mt-5 inline-block rounded-full bg-[#1a1208] px-8 py-2.5 text-sm font-bold tracking-wider text-white transition-colors hover:bg-black"
                >
                  Sign Up
                </a>

                <p className="mt-6 text-left text-sm leading-relaxed text-[#2a1f14]/75">{program.description}</p>

                <div className="my-6 border-t border-[#2a1f14]/10" />

                <ul className="space-y-3 text-left text-sm text-[#2a1f14]/80">
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
