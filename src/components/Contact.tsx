import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GYM } from '../data/site'

export function Contact() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="animate-on-scroll bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">Visit Us</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
              Contact & Location
            </h2>
            <div className="mt-2 h-1 w-16 bg-blood" />
            <p className="mt-4 text-white/65">
              Interested in training? Reach out or stop by during gym hours. We can&apos;t wait to hear from you.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-sm tracking-wider text-gold uppercase">Address</h3>
                <p className="mt-1 text-white/85">
                  {GYM.address}
                  <br />
                  {GYM.city}
                </p>
              </div>
              <div>
                <h3 className="font-display text-sm tracking-wider text-gold uppercase">Phone</h3>
                <a href={GYM.phoneHref} className="mt-1 block text-lg text-white/85 transition-colors hover:text-gold">
                  {GYM.phone}
                </a>
              </div>
              <div>
                <h3 className="font-display text-sm tracking-wider text-gold uppercase">Email</h3>
                <a href={GYM.emailHref} className="mt-1 block text-white/85 transition-colors hover:text-gold">
                  {GYM.email}
                </a>
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

            <a
              href={GYM.phoneHref}
              className="mt-10 inline-block min-h-[52px] rounded-sm bg-blood px-10 py-3.5 text-base font-semibold tracking-wide text-white transition-colors hover:bg-blood-light"
            >
              Start Training Today
            </a>
          </div>

          <div className="overflow-hidden rounded-sm border border-white/10">
            <iframe
              title="Woodside Boxing Academy location on Google Maps"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${GYM.address}, ${GYM.city}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="h-[350px] w-full grayscale-[30%] contrast-[1.1] sm:h-[450px] lg:h-full lg:min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
