import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { TESTIMONIALS, VALUES } from '../data/site'

export function Community() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="community" ref={ref} className="animate-on-scroll bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">The Family</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
              Fighter Pathway
            </h2>
            <div className="mt-2 h-1 w-16 bg-blood" />
            <p className="mt-6 leading-relaxed text-white/70">
              Woodside Boxing Academy is where warriors are made. Our amateur fighter pathway takes dedicated athletes
              from fundamentals through USA Boxing–sanctioned competition — with coaches who invest in your development,
              not your social media.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              Men, women, and youth welcome. Membership required. Show up ready to work.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-sm border border-white/10 bg-matte/50 p-4 transition-colors hover:border-blood/40"
                >
                  <h3 className="font-display text-lg font-semibold text-gold uppercase">{value.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <blockquote
                key={i}
                className="rounded-sm border-l-4 border-blood bg-matte p-6 transition-transform duration-300 hover:translate-x-1"
              >
                <p className="text-lg leading-relaxed text-white/85 italic">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-medium tracking-wide text-steel uppercase">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
