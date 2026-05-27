import { useState, type FormEvent } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GYM } from '../data/site'

type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

const initialForm: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

function validateContactForm(values: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.firstName.trim()) {
    errors.firstName = 'First name is required'
  }

  if (!values.lastName.trim()) {
    errors.lastName = 'Last name is required'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required'
  }

  return errors
}

type FieldProps = {
  id: keyof ContactFormData
  label: string
  type?: 'text' | 'email' | 'textarea'
  value: string
  error?: string
  onChange: (value: string) => void
}

function ContactField({ id, label, type = 'text', value, error, onChange }: FieldProps) {
  const inputClassName = `w-full rounded-sm border bg-charcoal px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none ${
    error ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-forest-light'
  }`

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium tracking-wide text-white/70 uppercase">
        {label} <span className="text-gold">*</span>
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={5}
          required
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputClassName} resize-y min-h-[120px]`}
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClassName}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const ref = useScrollAnimation<HTMLElement>()
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
    if (submitted) setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validateContactForm(form)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
    setForm(initialForm)
  }

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

          <div>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-sm border border-white/10 bg-matte p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold tracking-wide text-white uppercase">Send a Message</h3>

              {submitted && (
                <p className="mt-4 rounded-sm border border-forest-light/40 bg-forest/20 px-4 py-3 text-sm text-white/85">
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
              )}

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <ContactField
                    id="firstName"
                    label="First Name"
                    value={form.firstName}
                    error={errors.firstName}
                    onChange={(value) => updateField('firstName', value)}
                  />
                  <ContactField
                    id="lastName"
                    label="Last Name"
                    value={form.lastName}
                    error={errors.lastName}
                    onChange={(value) => updateField('lastName', value)}
                  />
                </div>
                <ContactField
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(value) => updateField('email', value)}
                />
                <ContactField
                  id="message"
                  label="Message"
                  type="textarea"
                  value={form.message}
                  error={errors.message}
                  onChange={(value) => updateField('message', value)}
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-sm bg-forest py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-forest-light"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-sm border border-forest/30">
          <iframe
            title="Woodside Boxing Academy location on Google Maps"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${GYM.address}, ${GYM.city}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="h-[350px] w-full grayscale-[20%] contrast-[1.05] sm:h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
