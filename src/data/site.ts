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
  cart: { href: '#cart', label: 'Cart', count: 0 },
} as const

export const COACHES = [
  { name: 'Charlie "The Fight monkey" Joseph', image: 'charlie-joseph' as const },
  { name: 'Manuel "Diablo" Calderon', image: 'manuel-calderon' as const },
  { name: 'Josh-Alexander Laud Bungalso', image: 'josh-bungalso' as const },
  { name: 'Edgar', image: 'edgar' as const },
  { name: 'Frank Castillo', image: 'frank-castillo-portrait' as const },
  { name: 'Abel Gonzalez', image: 'abel-gonzalez' as const },
] as const

export const PROGRAMS = [
  {
    id: 'basic',
    title: 'Basic Membership',
    description:
      'Use our full gym facility at normal gym hours. Join in group sessions.',
    summary:
      'Our Basic Membership provides monthly access to the gym facility and equipment. Members are free to train during regular gym hours at their own pace. This plan is ideal for those who want to work independently without guided coaching.',
    price: '$100.00',
    period: 'Every month',
    featured: false,
    image: 'logo' as const,
    features: ['Access to video content', 'Unlimited monthly access'],
  },
  {
    id: 'amateur',
    title: 'Amateur Fighter Membership',
    description:
      'Full access to the gym training facility during gym hours. Sparring training, drills, and actual sparring in the gym.',
    summary:
      'The Amateur Fighter Membership offers monthly access to the full gym facility, equipment, and group training sessions with other fighters. Members train in a supportive team environment and gain the opportunity to compete in official USA Boxing–sanctioned matchups.',
    price: '$150.00',
    period: 'Every month',
    featured: true,
    image: 'sparring' as const,
    features: [
      'Video Contents',
      'Unlimited monthly access',
      'Gym Events',
      'Assistance in registering for USA Boxing Amateur bouts',
    ],
  },
  {
    id: 'intro',
    title: 'Intro to Boxing',
    description:
      'Get a full month of hands-on guidance from our trainers. Learn how to use the equipment, build a routine, and master the basics so you can confidently train on your own after the program ends.',
    summary:
      'This one-month program is designed for beginners or anyone who wants to gain the confidence to train independently. Over the course of the month, all of our professionally experienced Coaches and Trainers will guide you step-by-step through the fundamentals—how to properly use the gym\'s equipment, build a solid workout routine, and practice essential boxing techniques safely and effectively.',
    price: '$600.00',
    period: 'One time',
    featured: false,
    image: 'intro' as const,
    features: ['Get a coach', 'Unlimited sessions for the month'],
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
