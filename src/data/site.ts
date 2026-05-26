export const GYM = {
  name: 'Woodside Boxing Academy',
  shortName: 'WBA',
  tagline: 'Real Boxing. Real Discipline.',
  subheadline:
    'Queens-based boxing academy focused on fundamentals, conditioning, and competitive development.',
  founded: 2013,
  address: '41-25 58th St',
  city: 'Flushing, NY 11377',
  phone: '(718) 300-6069',
  phoneHref: 'tel:+17183006069',
  email: 'info@woodsideboxingacademy.com',
  emailHref: 'mailto:info@woodsideboxingacademy.com',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8!2d-73.905!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzUyLjgiTiA3M8KwNTQnMTguMCJX!5e0!3m2!1sen!2sus!4v1',
  hours: [
    { days: 'Mon – Fri', time: '3:00 PM – 10:00 PM' },
    { days: 'Sat – Sun', time: '12:00 PM – 6:00 PM' },
  ],
} as const

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Training', href: '#training' },
  { label: 'Community', href: '#community' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
] as const

export const PROGRAMS = [
  {
    id: 'basic',
    title: 'Basic Membership',
    description:
      'Monthly access to the gym facility and equipment. Train during regular hours at your own pace — ideal for independent work without guided coaching.',
    price: 'From $75',
    period: '/ month',
    featured: false,
  },
  {
    id: 'amateur',
    title: 'Amateur Fighter Membership',
    description:
      'Full facility access plus group training with other fighters. Train in a supportive team environment with opportunities to compete in USA Boxing–sanctioned matchups.',
    price: 'Contact',
    period: 'for pricing',
    featured: true,
  },
  {
    id: 'coaching',
    title: 'Personal Coaching',
    description:
      'One-on-one training with a dedicated coach. Personalized instruction and preparation for USA Boxing–sanctioned competition.',
    price: 'From $35',
    period: '/ session',
    featured: false,
  },
  {
    id: 'intro',
    title: 'Intro to Boxing',
    description:
      'Learn proper stance, footwork, and fundamentals in a structured introduction to the sport. Build confidence before committing to full membership.',
    price: 'Contact',
    period: 'for details',
    featured: false,
  },
] as const

export const TRAINING_ITEMS = [
  {
    title: 'Heavy Bag Work',
    caption: 'Power, rhythm, and endurance on the bags.',
    image:
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80',
  },
  {
    title: 'Sparring',
    caption: 'Controlled rounds under experienced eyes.',
    image:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
  },
  {
    title: 'Conditioning',
    caption: 'Road work, circuits, and fight-ready fitness.',
    image:
      'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&q=80',
  },
  {
    title: 'Technique',
    caption: 'Fundamentals drilled until they become instinct.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50e?w=800&q=80',
  },
  {
    title: 'Team Atmosphere',
    caption: 'Fighters push each other — no shortcuts.',
    image:
      'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80',
  },
] as const

export const SCHEDULE = [
  {
    type: 'Beginner Sessions',
    days: 'Mon, Wed, Fri',
    time: '5:00 PM – 6:30 PM',
    note: 'Fundamentals & footwork',
  },
  {
    type: 'Fighter Training',
    days: 'Tue, Thu',
    time: '6:00 PM – 8:00 PM',
    note: 'Sparring & competition prep',
  },
  {
    type: 'Open Gym',
    days: 'Mon – Fri',
    time: '3:00 PM – 10:00 PM',
    note: 'Members train independently',
  },
  {
    type: 'Personal Coaching',
    days: 'By appointment',
    time: 'Flexible',
    note: 'One-on-one with coaches',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'No bullshit — just honest coaching. They care about your growth, not your Instagram.',
    author: 'Member, Queens',
  },
  {
    quote:
      'This is where warriors are made. The discipline here changed how I show up everywhere else.',
    author: 'Amateur Fighter',
  },
  {
    quote:
      'Trainers still give you pointers when you\'re working on your own. That\'s real community.',
    author: 'Basic Member',
  },
] as const

export const VALUES = [
  { title: 'Respect', desc: 'For coaches, teammates, and the sport.' },
  { title: 'Discipline', desc: 'Show up. Put in the work. No excuses.' },
  { title: 'Fundamentals', desc: 'Master the basics before chasing flash.' },
  { title: 'Community', desc: 'A boxing family — not a fitness chain.' },
] as const
