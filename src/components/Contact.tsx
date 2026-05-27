import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GYM } from '../data/site'
import { SectionHeader } from './SectionHeader'

export function Contact() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="section-screen animate-on-scroll bg-charcoal">
      <div className="mx-auto grid h-full max-h-full w-full max-w-7xl flex-1 items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="min-h-0">
          <SectionHeader
            label="Contact Us"
            title="Start Training Today"
            description="Fill out some info and we will be in touch shortly."
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-xs tracking-wider text-gold uppercase">Location</h3>
              <p className="mt-0.5 text-sm text-white/85">
                {GYM.address}
                <br />
                {GYM.city}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xs tracking-wider text-gold uppercase">Phone</h3>
              <a href={GYM.phoneHref} className="mt-0.5 block text-sm text-white/85 transition-colors hover:text-gold">
                {GYM.phone}
              </a>
            </div>
            <div>
              <h3 className="font-display text-xs tracking-wider text-gold uppercase">Email</h3>
              <a href={GYM.emailHref} className="mt-0.5 block text-sm text-white/85 transition-colors hover:text-gold">
                {GYM.email}
              </a>
            </div>
            <div>
              <h3 className="font-display text-xs tracking-wider text-gold uppercase">Gym Hours</h3>
              <ul className="mt-0.5 space-y-0.5 text-sm text-white/85">
                {GYM.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="text-white/70">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-[28vh] min-h-[200px] overflow-hidden rounded-sm border border-forest/30 lg:h-full lg:max-h-[55vh]">
          <iframe
            title="Woodside Boxing Academy location on Google Maps"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${GYM.address}, ${GYM.city}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="h-full w-full grayscale-[20%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
