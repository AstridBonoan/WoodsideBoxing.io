import { GYM } from '../data/site'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=85'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label="Boxers training in a boxing gym"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/75 to-charcoal" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="animate-fade-up mb-4 font-display text-sm font-medium tracking-[0.3em] text-gold uppercase">
          Queens, NY — Est. {GYM.founded}
        </p>
        <h1 className="animate-fade-up font-display text-5xl leading-tight font-bold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
          {GYM.tagline}
        </h1>
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
          style={{ animationDelay: '0.15s' }}
        >
          {GYM.subheadline}
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#contact"
            className="min-h-[48px] min-w-[200px] rounded-sm bg-blood px-8 py-3.5 text-base font-semibold tracking-wide text-white transition-colors hover:bg-blood-light"
          >
            Join the Gym
          </a>
          <a
            href="#programs"
            className="min-h-[48px] min-w-[200px] rounded-sm border border-white/30 px-8 py-3.5 text-base font-semibold tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
          >
            View Programs
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-gold"
          aria-label="Scroll to about section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
