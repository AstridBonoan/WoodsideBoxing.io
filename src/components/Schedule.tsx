import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SCHEDULE } from '../data/site'

export function Schedule() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="schedule" ref={ref} className="animate-on-scroll border-t border-white/5 bg-matte py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-2 font-display text-sm tracking-[0.25em] text-gold uppercase">Hours</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
            Class Schedule
          </h2>
          <div className="mt-2 h-1 w-16 bg-blood" />
          <p className="mt-4 text-white/65">
            Structured sessions for beginners and fighters. Open gym hours for members training independently.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-10 hidden overflow-hidden rounded-sm border border-white/10 md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-charcoal">
                <th className="px-6 py-4 font-display text-sm tracking-wider text-gold uppercase">Session</th>
                <th className="px-6 py-4 font-display text-sm tracking-wider text-gold uppercase">Days</th>
                <th className="px-6 py-4 font-display text-sm tracking-wider text-gold uppercase">Time</th>
                <th className="px-6 py-4 font-display text-sm tracking-wider text-gold uppercase">Notes</th>
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((row, i) => (
                <tr
                  key={row.type}
                  className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                    i % 2 === 0 ? 'bg-matte/30' : ''
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-white">{row.type}</td>
                  <td className="px-6 py-4 text-white/70">{row.days}</td>
                  <td className="px-6 py-4 text-white/70">{row.time}</td>
                  <td className="px-6 py-4 text-sm text-steel">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {SCHEDULE.map((row) => (
            <div
              key={row.type}
              className="rounded-sm border border-white/10 bg-charcoal/50 p-5"
            >
              <h3 className="font-display text-lg font-semibold text-white uppercase">{row.type}</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-steel">Days</dt>
                  <dd className="text-right text-white/80">{row.days}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-steel">Time</dt>
                  <dd className="text-right text-white/80">{row.time}</dd>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <dt className="sr-only">Notes</dt>
                  <dd className="text-steel">{row.note}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
