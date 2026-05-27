import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GYM } from '../data/site'

export function Contact() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="animate-on-scroll bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">Contact Us</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
              Start Training Today
            </h2>
            <div className="mt-2 h-1 w-16 bg-forest-light" />
            <p className="mt-4 text-white/65">
              Interested in working together? Fill out some info and we will be in touch shortly. We can&apos;t wait to
              hear from you!
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-sm tracking-wider text-gold uppercase">Location</h3>
                <p className="mt-1 text-white/85">
                  {GYM.address}
                  <br />
                  {GYM.city}
                </p>
              </div>
              <div>
                <h3 className="font-display text-sm tracking-wider text-gold uppercase">Phone</h3>
                <p className="mt-1 text-lg text-white/85">{GYM.phone}</p>
              </div>
              <div>
                <h3 className="font-display text-sm tracking-wider text-gold uppercase">Email</h3>
                <p className="mt-1 text-white/85">{GYM.email}</p>
              </div>
              <div>
                <h3 className="font-display text-sm tracking-wider text-gold uppercase">Gym Hours</h3>
                <ul className="mt-1 space-y-1 text-white/85">
                  {GYM.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4 sm:max-w-xs">
                      <span>{h.days}</span>
                      <span className="text-white/70">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-forest/30">
            <iframe
              title="Woodside Boxing Academy location on Google Maps"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${GYM.address}, ${GYM.city}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="h-[350px] w-full grayscale-[20%] contrast-[1.05] sm:h-[450px] lg:h-full lg:min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
