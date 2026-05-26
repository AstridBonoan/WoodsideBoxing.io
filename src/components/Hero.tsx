import { GYM } from '../data/site'
import { IMAGES } from '../data/assets'
import { Logo } from './Logo'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.sparring})` }}
        role="img"
        aria-label="Woodside Boxing Academy fighters competing in the ring"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/90 via-charcoal/80 to-charcoal" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-up mx-auto mb-8 flex justify-center">
          <Logo size="lg" className="drop-shadow-lg" />
        </div>
        <p className="animate-fade-up mb-4 font-display text-sm font-medium tracking-[0.3em] text-gold uppercase">
          Flushing, Queens — Founded {GYM.founded}
        </p>
        <h1 className="animate-fade-up font-display text-4xl leading-tight font-bold tracking-tight text-white uppercase sm:text-5xl md:text-6xl lg:text-7xl">
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
            className="min-h-[48px] min-w-[200px] rounded-sm bg-forest px-8 py-3.5 text-base font-semibold tracking-wide text-white transition-colors hover:bg-forest-light"
          >
            Join the Gym
          </a>
          <a
            href="#programs"
            className="min-h-[48px] min-w-[200px] rounded-sm border border-white/30 px-8 py-3.5 text-base font-semibold tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
          >
            View Services
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
