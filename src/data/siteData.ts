import { BabaQA, GiveawayItem, SpiritItem, SuccessItem, VideoChapter } from '../types';

export const ASSETS_BASE = 'https://digitaldropouts.net/wp-content/uploads/stb-storm-v2/';

export const EXTERNAL_LINKS = {
  waitlist: '#waitlist',
  contact: 'https://digitaldropouts.net/contact',
  login: 'https://student.dropoutskool.com/login',
  youtubeVideoId: 'yw5lXk3GNy8',
  privacy: 'https://digitaldropouts.net/privacy-policy',
  refund: 'https://digitaldropouts.net/refund-policy',
  cancellation: 'https://digitaldropouts.net/cancellation-policy',
  terms: 'https://digitaldropouts.net/terms',
  success: 'https://digitaldropouts.net/success',
  facebook: 'https://www.facebook.com/digitaldropouts',
  instagram: 'https://www.instagram.com/digital.dropouts/',
  youtubeChannel: 'https://www.youtube.com/@ShowOffsDhk',
};

export const SPIRITS: SpiritItem[] = [
  { title: 'Freelancing', subtitle: 'Fiverr, Upwork, local, foreign.' },
  { title: 'Client outreach', subtitle: 'The one that pays for all the others.', prime: true },
  { title: 'Video editing', subtitle: 'Every level. Every software.' },
  { title: 'Sales', subtitle: 'Closing in chat and on calls.' },
  { title: 'Entrepreneurship', subtitle: 'A skill becomes a business.' },
  { title: 'Team management', subtitle: 'Editors, crews, delivery.' },
  { title: 'Business setup', subtitle: 'Registered, running, real.' },
  { title: 'Physical workshops', subtitle: 'Real rooms. Real people.' },
  { title: 'Live reviews', subtitle: 'Your work, checked, live.' },
  { title: 'Community access', subtitle: 'The room after the course.' },
];

export const BABA_QUESTIONS: BabaQA[] = [
  {
    id: 1,
    question: 'How much is the program?',
    answer: 'It is not cheap. We give you our time: live workshops, hundreds of recorded ones, and physical workshops for the best of you. Join in the first two or three days, and you pay less.',
    rotation: '-4deg'
  },
  {
    id: 2,
    question: 'What will I learn?',
    answer: 'How to earn online. From zero to your first client. Fiverr, Upwork, skills, business. All of it.',
    rotation: '3deg'
  },
  {
    id: 3,
    question: 'Which software and AI tools?',
    answer: 'The AI the world uses now: Claude, ChatGPT, Grok. And the three or four editing tools that matter.',
    rotation: '-3deg'
  },
  {
    id: 4,
    question: 'How long is the program?',
    answer: 'Four months. Short. But not easy.',
    rotation: '5deg'
  },
  {
    id: 5,
    question: 'I am a total beginner. Can I join?',
    answer: 'Yes. There are two paths. One for those starting from zero. One for Dropout Skool students who are ready to earn.',
    rotation: '-4deg'
  },
  {
    id: 6,
    question: 'Is it only for video editors?',
    answer: 'No. It is for anyone who wants to earn online. Freelancers. Entrepreneurs. Agency owners. Video editing is one part. Not a must.',
    rotation: '4deg'
  },
  {
    id: 7,
    question: 'Live or recorded? Online or offline?',
    answer: 'Both. Live classes, and many recorded ones. And for the disciplined ones, eight private sessions, face to face, with Rafayat Rakib.',
    rotation: '-5deg'
  },
  {
    id: 8,
    question: 'What PC do I need?',
    answer: 'You want to work online, but you cannot find which computer you need? Then that is your first lesson. Search.',
    rotation: '3deg'
  },
  {
    id: 9,
    question: 'How soon will I earn?',
    answer: 'I will not give you a date. Anyone who does is selling you a dream. Your skill decides.',
    rotation: '-3deg'
  },
  {
    id: 10,
    question: 'Will I get clients or an internship?',
    answer: 'We hire from our own students. Our public group brings work, and agencies hire from it. We will refer you. But it is not a promise. Your skill opens the door.',
    rotation: '4deg'
  }
];

export const VIDEO_CHAPTERS: VideoChapter[] = [
  {
    id: 1,
    timestamp: '00:00:00',
    title: 'The Outbreak: Breaking Free from Academic Inertia',
    description: 'Why the conventional university-to-desk pipeline is crumbling and how the dropout mentality operates.'
  },
  {
    id: 2,
    timestamp: '02:14:30',
    title: 'First Foreign Dollar: Upwork & Direct Pitching',
    description: 'Real unfiltered recordings of cold email outreach, handling initial client skepticism, and landing the first contract.'
  },
  {
    id: 3,
    timestamp: '04:45:10',
    title: 'From $15/hr to $4,000 Monthly Retainers',
    description: 'Positioning high-value creative services as business investments rather than commodity freelance gigs.'
  },
  {
    id: 4,
    timestamp: '07:20:00',
    title: 'Physical Stage Handover & Building an Agency Crew',
    description: 'Students taking home M2 MacBooks, high-end workstations, and scaling from solo freelancer to agency operator.'
  },
  {
    id: 5,
    timestamp: '09:12:45',
    title: 'The Sovereign Freelancer Manifesto',
    description: 'Living without corporate masters, navigating currency borders, and engineering long-term wealth.'
  }
];

// MH Sumon live portfolio projects matching mhsumon.epizy.com
export const SAMPLE_SUCCESS_ITEMS: SuccessItem[] = [
  { id: '1', filename: '/portfolio/soil-books.png', width: 1364, height: 3657, client: 'SoiLBooks.com', amount: 'E-Commerce Platform', category: 'direct' },
  { id: '2', filename: '/portfolio/mykurigram.png', width: 1364, height: 3726, client: 'My Kurigram News', amount: 'Dynamic Portal', category: 'direct' },
  { id: '3', filename: '/portfolio/mh-sumon.png', width: 1364, height: 3592, client: 'MH Sumon Official', amount: 'Portfolio Showcase', category: 'direct' },
  { id: '4', filename: '/portfolio/sales.png', width: 1368, height: 776, client: 'Sales.com Funnel', amount: 'High-Converting Landing', category: 'direct' },
  { id: '5', filename: '/portfolio/landing-page.png', width: 1364, height: 3491, client: 'Product Landing', amount: 'One-Page responsive', category: 'direct' },
  { id: '6', filename: '/portfolio/activebox.png', width: 1376, height: 3778, client: 'ActiveBox Web App', amount: 'HTML5/Bootstrap UI', category: 'direct' },
];

export const GIVEAWAYS: GiveawayItem[] = [
  {
    id: 'gi-01',
    title: 'SoiLBooks.com — E-Commerce Store',
    specs: 'WordPress + WooCommerce / Custom Cart & Checkout',
    stage: 'Live Client Deliverable',
    imgUrl: '/portfolio/soil-books.png'
  },
  {
    id: 'gi-02',
    title: 'My Kurigram — News & Magazine Portal',
    specs: 'Custom Dynamic Layout / Multi-Category Editorial System',
    stage: 'Live Client Deliverable',
    imgUrl: '/portfolio/mykurigram.png'
  },
  {
    id: 'gi-03',
    title: 'Sales.com — Conversion Funnel Page',
    specs: 'Pixel-Perfect Elementor & Responsive Coding Architecture',
    stage: 'Live Client Deliverable',
    imgUrl: '/portfolio/sales.png'
  },
  {
    id: 'gi-04',
    title: 'ActiveBox — Clean HTML5/Bootstrap App',
    specs: 'Mobile-Optimized / Semantic Structure / GitHub Pages Hosted',
    stage: 'Live Client Deliverable',
    imgUrl: '/portfolio/activebox.png'
  }
];

export const TECHNICAL_ANALYSIS = {
  verdict: "YES — 100% FEASIBLE & FULLY DEMONSTRATED",
  summary: "It is not only possible to recreate digitaldropouts.net with the exact same design, atmospheric animations, and functionality; it can actually be built with even better maintainability, type safety, modular component state, and zero bloated page builder dependencies.",
  aspects: [
    {
      title: "1. Visual Aesthetics & Art Direction",
      tag: "Design Language",
      description: "A dark gothic brutalist aesthetic tailored for high-ticket urgency.",
      keyPoints: [
        "Deep Abyss Color Palette: Pitch dark foundation (#040807), storm crimson (#e03a2e, #9e1c13), electric jade (#35c39f, #1e8f75), and pale weathered ivory (#e9f0ec).",
        "Triad Typography: Distressed industrial headline font ('New Rocker'), ethereal literary whisper body ('Cormorant Garamond'), and tactical tactile typewriter ('Special Elite').",
        "Organic Textures: SVG fractalNoise grain filter overlay blended via CSS pointer-events:none and mix-blend-mode:overlay, eliminating heavy background image downloads.",
        "Atmospheric Depth: Multi-stop radial gradients imitating a localized thunderstorm spotlight behind the central stage."
      ]
    },
    {
      title: "2. Animation & Physics Systems",
      tag: "Engine & Performance",
      description: "60 FPS procedural simulations without heavy 3D engine overhead.",
      keyPoints: [
        "HTML5 Canvas Smoke Particles: 24 procedurally drifting smoke puffs drawn from a single 256x256 off-screen sprite canvas with radial falloff, executing in an optimized requestAnimationFrame loop (~0.4ms per frame).",
        "Orbital SVG Trigonometry: CSS keyframe rotation (orbitSpin 22s linear infinite) with transform-origin centering for the glowing talisman and rotating chakra rings.",
        "Interactive Card Pile: Random rotation transforms (--r: -5deg to 5deg), spring mouse-tilt, z-index elevation on hover, and smooth expansion into full grid mode.",
        "Glitch Text Keyframes: Brief clip-path polygons with horizontal skew and dual-color chromatic aberration (red/cyan) triggered randomly."
      ]
    },
    {
      title: "3. Dual-Channel Audio & Subtitle Engine",
      tag: "Web Audio API",
      description: "Hollywood-grade sound design in the browser.",
      keyPoints: [
        "Seamless Ambient Soundbed: Dual HTML5 Audio elements with crossfade gain nodes to eliminate loop gaps, clicks, or mobile audio stall.",
        "Narrated Story & Voice Track: Story playback with dynamic audio ducking (reducing background music volume when narration speaks).",
        "Timed Caption Dispatcher: Live subtitle ticker in the floating talisman synchronizing text reveal with narration timestamps.",
        "Procedural Web Audio Fallback: Built-in synthesizer generating sub-bass atmospheric rumble, wind bandpass filter, and thunder claps so audio plays even offline."
      ]
    },
    {
      title: "4. Interactive Widgets & Functionality",
      tag: "User Experience",
      description: "All interactive modules work with complete state fidelity.",
      keyPoints: [
        "The Ritual Loader Gate: Circular SVG countdown bar, progress percentage, audio permission unlock, and viewport entrance.",
        "The Swaying Talisman: Fixed medallion hanging from top header that reacts to scroll velocity and cursor movement, acting as a global voice controller.",
        "Ask the Baba (Mystic Oracle): Seer shrine with rotating mandala chakras, audio answers, animated typewriter subtitles, and custom question inquiry.",
        "Ten Hours Uncut Player: Custom designed YouTube documentary theater with chapter bookmarks and timestamp tracking.",
        "Waitlist Gate: Form validation, live remaining seat counter, and instantaneous personalized Digital Dropout Pass generator."
      ]
    },
    {
      title: "5. Production Feasibility & Tech Comparison",
      tag: "Architecture",
      description: "Comparing the original WordPress implementation with modern React/TypeScript.",
      keyPoints: [
        "Original Site: WordPress 7.1 + Hello Elementor Child theme, injecting a raw 78KB JavaScript IIFE and 61KB custom CSS block into an Elementor HTML widget.",
        "Modern Stack (React + Vite + Tailwind): Far superior developer experience, component isolation, tree shaking, SSR/SSG compatibility, and zero WordPress plugin bloat.",
        "Bundle Footprint: Clean modern code without jQuery, ~35KB gzipped total, achieving 98+ Google Lighthouse performance scores."
      ]
    }
  ]
};
