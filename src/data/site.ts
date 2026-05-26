export const GYM = {
  name: 'Woodside Boxing Academy',
  website: 'https://www.woodsideboxingacademy.com',
  tagline: 'If you want to train, THEN WE WANT TO TEACH YOU!',
  subheadline:
    'Queens-based boxing academy focused on fundamentals, conditioning, and competitive development.',
  founded: 2013,
  address: '41-25 58th Street',
  city: 'Flushing, NY 11377',
  phone: '(718) 300-6069',
  phoneHref: 'tel:+17183006069',
  email: 'WoodsideBoxingAcademy@hotmail.com',
  emailHref: 'mailto:WoodsideBoxingAcademy@hotmail.com',
  hours: [
    { days: 'Mon – Fri', time: '3:00 PM – 10:00 PM' },
    { days: 'Sat – Sun', time: '12:00 PM – 6:00 PM' },
  ],
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '#programs' },
  { label: 'About', href: '#about' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Contact', href: '#contact' },
  { label: 'Merchandise', href: '#merchandise' },
] as const

export const NAV_ACTIONS = {
  login: { href: '#login', label: 'Login' },
  cart: { href: '#cart', label: 'Cart', count: 1 },
} as const

export const COACHES = [
  { name: 'Charlie "The Fight monkey" Joseph', image: 'charlie-joseph' as const },
  { name: 'Manuel "Diablo" Calderon', image: 'manuel-calderon' as const },
  { name: 'Josh-Alexander Laud Bungalso', image: 'josh-bungalso' as const },
  { name: 'Edgar', image: 'edgar' as const },
  { name: 'Frank Castillo', image: 'frank-castillo' as const },
  { name: 'Abel Gonzalez', image: null },
] as const

export const PROGRAMS = [
  {
    id: 'basic',
    title: 'Basic Service',
    description:
      'Monthly access to the gym facility and equipment. Members train during regular gym hours at their own pace. Ideal for those who want to work independently without guided coaching.',
    price: 'From $75',
    period: '/ month',
    featured: false,
  },
  {
    id: 'amateur',
    title: 'Amateur Fighter Membership',
    description:
      'Monthly access to the full gym, equipment, and group training with other fighters. Train in a supportive team environment with opportunities to compete in official USA Boxing–sanctioned matchups.',
    price: 'Contact',
    period: 'for pricing',
    featured: true,
  },
  {
    id: 'coaching',
    title: 'Personal Coaching Service',
    description:
      'One-on-one training with a dedicated coach. Personalized instruction, guidance, and preparation for USA Boxing–sanctioned matches for those seeking tailored support.',
    price: 'From $35',
    period: '/ session',
    featured: false,
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
      'Trainers still give you pointers when you\'re working on your own. That\'s real community.',
    author: 'Basic Member',
  },
  {
    quote:
      'One of the top pure boxing facilities in Queens. Worth it if you want to train or compete.',
    author: 'Amateur Fighter',
  },
] as const

export const VALUES = [
  { title: 'Respect', desc: 'For coaches, teammates, and the sport.' },
  { title: 'Discipline', desc: 'Show up. Put in the work. No excuses.' },
  { title: 'Fundamentals', desc: 'Master the basics before chasing flash.' },
  { title: 'Community', desc: 'A boxing family — not a fitness chain.' },
] as const
