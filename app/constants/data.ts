/**
 * Managia — Static Data Constants
 *
 * All placeholder data for the website. Replace with real data as it becomes available.
 * Organized by domain. Never scatter raw data inside components.
 */

import type { TeamMember, ClubEvent, GalleryImage, MembershipPlan, WorkVertical } from '~/types'

// ─── Work Verticals ──────────────────────────────────────────────

export const WORK_VERTICALS: WorkVertical[] = [
  {
    title: 'Hackathons',
    description: 'Weekend-long build sprints where cross-functional teams ship real products, compete for prizes, and learn by doing.',
    icon: 'code',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Conferences',
    description: 'Speaker-led sessions featuring industry leaders, alumni panels, and deep-dive workshops on business and technology.',
    icon: 'mic',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Cultural Events',
    description: 'Festivals, open mics, art showcases, and celebrations that bring the campus community together beyond the classroom.',
    icon: 'palette',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Games & Sports',
    description: 'Tournaments, leagues, and casual game nights — from esports to outdoor sports — designed for every skill level.',
    icon: 'gamepad',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=800&auto=format&fit=crop',
  },
]

// ─── Team Members ────────────────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sajal Bansal',
    role: 'President',
    bio: "Leading MANAGIA's vision and guiding the collective towards landmark achievements.",
    image: '/images/team/sajal_bansal.jpeg',
    socials: { linkedin: '#' },
  },
  {
    name: 'Devang Dave',
    role: 'Vice President',
    bio: 'Executing strategic operations and ensuring every initiative aligns with our core pillars.',
    image: '/images/team/devang_dave.png',
    socials: { linkedin: '#' },
  },
  {
    name: 'Nishtha Agrawal',
    role: 'Treasurer',
    bio: 'Managing financial resources and ensuring sustainable growth for all our initiatives.',
    image: '/images/team/nishtha_agrawal.jpeg',
    socials: { linkedin: '#' },
  },
  {
    name: 'Vaibhav Agarwal',
    role: 'General Secretary',
    bio: 'Orchestrating daily operations and maintaining seamless communication across the board.',
    image: '/images/team/vaibhav_agarwal.jpeg',
    socials: { linkedin: '#' },
  },
  {
    name: 'Suhani Agrawal',
    role: 'Joint Secretary',
    bio: 'Supporting operational workflows and driving internal team synergy.',
    image: '/images/team/suhani_agrawal.jpeg',
    socials: { linkedin: '#' },
  },
  {
    name: 'Chirag Solanki',
    role: 'Chief Advisor',
    bio: "Providing strategic insights and foundational guidance for MANAGIA's long-term success.",
    image: '/images/team/chirag_solanki.jpeg',
    socials: { linkedin: '#' },
  },
]

// ─── Events ──────────────────────────────────────────────────────

export const EVENTS: ClubEvent[] = [
  {
    id: 'e1',
    title: 'HackManage 2026',
    description: '36-hour hackathon for business and tech students. Build a product, pitch it, win.',
    date: 'Sep 14-15, 2026',
    time: '9:00 AM',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    category: 'hackathon',
    isPast: false,
  },
  {
    id: 'e2',
    title: 'Founders Forum',
    description: 'A speaker series featuring startup founders sharing real stories — failures, pivots, and breakthroughs.',
    date: 'Sep 28, 2026',
    time: '5:00 PM',
    location: 'Conference Hall B',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    category: 'conference',
    isPast: false,
  },
  {
    id: 'e3',
    title: 'Cultural Night',
    description: 'An evening of performances, food, and art from the diverse cultures represented in our MBA cohort.',
    date: 'Oct 12, 2026',
    time: '6:30 PM',
    location: 'Open Air Theatre',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
    category: 'cultural',
    isPast: false,
  },
  {
    id: 'e4',
    title: 'Game Night Championship',
    description: 'The ultimate inter-batch tournament. Board games, card games, esports. Bragging rights included.',
    date: 'Oct 25, 2026',
    time: '7:00 PM',
    location: 'Student Lounge',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=800&auto=format&fit=crop',
    category: 'games',
    isPast: false,
  },
  {
    id: 'e5',
    title: 'Spring Mixer',
    description: 'Casual networking over drinks and live music. The best way to meet people outside your section.',
    date: 'Mar 8, 2026',
    time: '8:00 PM',
    location: 'Rooftop Terrace',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop',
    category: 'social',
    isPast: true,
  },
  {
    id: 'e6',
    title: 'Case Crunch',
    description: 'A rapid-fire case competition. Four hours, one case, fierce competition.',
    date: 'Feb 20, 2026',
    time: '10:00 AM',
    location: 'Lecture Hall 3',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    category: 'conference',
    isPast: true,
  },
]

// ─── Gallery Images ──────────────────────────────────────────────

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g_jash',
    src: '/images/events/jash-e-bharat/image_2___cover_page_.webp',
    alt: 'Jash-E-Bharat event',
    category: 'events',
    eventName: 'Jashn-E-Bharat',
    aspect: 'wide',
  },
  {
    id: 'g_jumanji',
    src: '/images/events/jumanji/image_5___cover_page_.webp',
    alt: 'Jumanji event',
    category: 'events',
    eventName: 'Jumanji',
    aspect: 'tall',
  },
  {
    id: 'g_kika',
    src: '/images/events/maharana-kika/image_1___cover_page_.webp',
    alt: 'Maharana KIKA event',
    category: 'events',
    eventName: 'Maharana KIKA',
    aspect: 'square',
  },
  {
    id: 'g_traitors',
    src: '/images/events/traitors/image_4___cover_page_.webp',
    alt: 'Traitors event',
    category: 'events',
    eventName: 'Traitors',
    aspect: 'wide',
  },
]

export const EVENT_CATEGORIES = [
  'All',
  'Jashn-E-Bharat',
  'Jumanji',
  'Maharana KIKA',
  'Traitors'
]

export const EVENTS_PHOTOS = [
  { id: 'jb_3', src: '/images/events/jash-e-bharat/image_3.webp', category: 'Jashn-E-Bharat' },
  { id: 'tr_5', src: '/images/events/traitors/image_5.webp', category: 'Traitors' },
  { id: 'jm_7', src: '/images/events/jumanji/image_7.webp', category: 'Jumanji' },
  { id: 'jm_1', src: '/images/events/jumanji/image_1.webp', category: 'Jumanji' },
  { id: 'jb_6', src: '/images/events/jash-e-bharat/image_6.webp', category: 'Jashn-E-Bharat' },
  { id: 'tr_2', src: '/images/events/traitors/image_2.webp', category: 'Traitors' },
  { id: 'jm_4', src: '/images/events/jumanji/image_4.webp', category: 'Jumanji' },
  { id: 'jb_1', src: '/images/events/jash-e-bharat/image_1.webp', category: 'Jashn-E-Bharat' },
  { id: 'mk_1', src: '/images/events/maharana-kika/image_1___cover_page_.webp', category: 'Maharana KIKA' },
  { id: 'tr_6', src: '/images/events/traitors/image_6.webp', category: 'Traitors' },
  { id: 'jm_8', src: '/images/events/jumanji/image_8.webp', category: 'Jumanji' },
  { id: 'jb_4', src: '/images/events/jash-e-bharat/image_4.webp', category: 'Jashn-E-Bharat' },
  { id: 'tr_1', src: '/images/events/traitors/image_1.webp', category: 'Traitors' },
  { id: 'jm_2', src: '/images/events/jumanji/image_2.webp', category: 'Jumanji' },
  { id: 'jb_7', src: '/images/events/jash-e-bharat/image_7.webp', category: 'Jashn-E-Bharat' },
  { id: 'tr_7', src: '/images/events/traitors/image_7.webp', category: 'Traitors' },
  { id: 'jm_5', src: '/images/events/jumanji/image_5___cover_page_.webp', category: 'Jumanji' },
  { id: 'jb_2', src: '/images/events/jash-e-bharat/image_2___cover_page_.webp', category: 'Jashn-E-Bharat' },
  { id: 'jm_6', src: '/images/events/jumanji/image_6.webp', category: 'Jumanji' },
  { id: 'tr_4', src: '/images/events/traitors/image_4___cover_page_.webp', category: 'Traitors' },
  { id: 'jm_3', src: '/images/events/jumanji/image_3.webp', category: 'Jumanji' },
  { id: 'jb_5', src: '/images/events/jash-e-bharat/image_5.webp', category: 'Jashn-E-Bharat' },
  { id: 'tr_3', src: '/images/events/traitors/image_3.webp', category: 'Traitors' },
]

export const GLOBE_IMAGES = [
  '/images/globe/image_10.webp',
  '/images/globe/image_11.webp',
  '/images/globe/image_12.webp',
  '/images/globe/image_13.webp',
  '/images/globe/image_2.webp',
  '/images/globe/image_3.webp',
  '/images/globe/image_4_.webp',
  '/images/globe/image_5.webp',
  '/images/globe/image_6.webp',
  '/images/globe/image_7.webp',
  '/images/globe/image_8.webp',
  '/images/globe/image_9.webp'
]

// ─── Membership Plans ────────────────────────────────────────────

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    title: 'Member',
    description: 'Join the community. Attend events, meet people, and stay in the loop.',
    perks: [
      'Access to all public events',
      'Club newsletter and updates',
      'Member-only Discord server',
      'Voting rights in club decisions',
    ],
  },
  {
    title: 'Core Team',
    description: 'Step up. Lead initiatives, organize events, and shape what Managia becomes.',
    perks: [
      'Everything in Member',
      'Lead or co-lead a vertical',
      'Priority access to speaker sessions',
      'Mentorship from alumni network',
      'Certificate of leadership',
    ],
    highlight: true,
  },
  {
    title: 'Partner',
    description: 'For organizations and sponsors who want to collaborate with Managia.',
    perks: [
      'Brand presence at all events',
      'Co-hosted workshops and sessions',
      'Access to talent pool',
      'Custom partnership packages',
    ],
  },
]

// ─── Nav Links ───────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const

// ─── Social Links ────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  instagram: '#',
  linkedin: '#',
  twitter: '#',
  email: 'hello@managia.club',
} as const
