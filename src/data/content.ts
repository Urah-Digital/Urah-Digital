import { ServicePackage, CarePlan, ConceptProject, FAQItem } from '../types';

export const BRAND = {
  name: 'URAH DIGITAL',
  tagline: 'Websites that earn trust.',
  positioning: 'A selective web studio for Nigerian schools, service businesses, and established online brands whose reputation is their product.',
  phoneRaw: '08154844686',
  phoneFormatted: '+234 815 484 4686',
  email: 'info@urah.com.ng',
  domain: 'urah.com.ng',
  websiteUrl: 'https://urah.com.ng',
  whatsappUrl: 'https://wa.me/2348154844686?text=Hello%20URAH%20DIGITAL%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20business.',
  prefilledWhatsAppMessage: "Hello URAH DIGITAL, I'd like to discuss a website for my business.",
  paymentMilestones: {
    start: '30%',
    designApproval: '40%',
    launchHandover: '30%',
    description: '30% kickoff to begin, 40% after design approval, and 30% before launch and handover. You pay as work is verified, never for promises.'
  }
};

export const TRUST_PILLARS = [
  {
    number: '01',
    title: 'Credibility by design',
    description: 'A restrained, editorial visual standard that signals legitimacy instantly. Serious buyers judge competence before reading a single paragraph.'
  },
  {
    number: '02',
    title: 'Craft and performance',
    description: 'Engineered for Nigerian mobile network realities. Minimal code, optimized assets, and resilient loading over variable 3G and 4G connections.'
  },
  {
    number: '03',
    title: 'A white-glove process',
    description: 'Fixed scope with zero surprise costs. Clear milestone deliverables with 30/40/30 payment terms and two consolidated revision rounds.'
  }
];

export const SERVICES: ServicePackage[] = [
  {
    id: 'credibility-site',
    name: 'Credibility Site',
    subtitle: 'For service businesses and professional practices verifying market competence.',
    standardPrice: '₦350,000',
    foundingPrice: '₦245,000',
    deliveryTimeline: '3–4 weeks',
    revisions: 'Two consolidated revision rounds (after design presentation and on the working preview).',
    description: 'A bespoke platform built to establish authority, verify credentials, and convert high-intent enquiries directly into conversation.',
    inclusions: [
      '6–8 bespoke structured pages',
      'Direct WhatsApp lead routing with prefilled intent',
      'Structured project qualification and enquiry form',
      'Mobile-first performance for Nigerian 3G/4G networks',
      'Core technical SEO foundations and schema markup',
      'Accessible typography and WCAG AA contrast standards'
    ]
  },
  {
    id: 'school-website',
    name: 'School Website',
    subtitle: 'For private schools and academies whose reputation determines enrolment.',
    standardPrice: '₦450,000',
    foundingPrice: '₦315,000',
    deliveryTimeline: '4–5 weeks',
    revisions: 'Two consolidated revision rounds (after design presentation and on the working preview).',
    description: 'An authoritative public-facing portal designed for prospective parents and governing boards evaluating academic standards.',
    inclusions: [
      'Public school information architecture',
      'Accreditation, inspection, and examination results showcase',
      'Faculty, leadership, and campus facilities directories',
      'Parent enquiry and prospectus download forms',
      'Direct WhatsApp admissions team routing',
      'Fast, mobile-optimized media loading for mobile networks'
    ],
    exclusions: [
      'Private student records portal',
      'Fee collection and payment gateway',
      'Exam grading and student accounts'
    ]
  },
  {
    id: 'school-admissions-mvp',
    name: 'School Admissions System MVP',
    subtitle: 'A streamlined web application for receiving, reviewing, and tracking student applications.',
    standardPrice: '₦1,200,000',
    foundingPrice: '₦840,000',
    deliveryTimeline: '6–10 weeks after requirements are agreed',
    revisions: 'Two review rounds across prototype and user acceptance testing.',
    description: 'A dedicated administrative tool built to eliminate paperwork bottlenecks during enrolment seasons. This is an application review MVP, not an all-in-one student management suite.',
    inclusions: [
      'Custom online application submission form with document uploads',
      'Private administrative review dashboard for admissions staff',
      'Application status tracking (Pending, Under Review, Accepted, Waitlisted)',
      'Internal staff notes and applicant evaluation records',
      'CSV export for administrative spreadsheets and reporting',
      'Applicant receipt confirmation workflow'
    ],
    exclusions: [
      'Student attendance and timetable tracking',
      'Tuition fee collection and banking gateways',
      'Exam grading and continuous assessment portals',
      'Parent mobile apps or ongoing student profiles'
    ]
  },
  {
    id: 'school-bundle',
    name: 'School Website + Admissions System',
    subtitle: 'The complete public credibility site and private admissions review application together.',
    standardPrice: '₦1,500,000',
    foundingPrice: '₦1,050,000',
    deliveryTimeline: '8–12 weeks',
    revisions: 'Consolidated review rounds across both the public website and the admissions prototype.',
    description: 'Unifies the public-facing reputation website with the private application review system into a single cohesive institutional platform.',
    inclusions: [
      'All deliverables from the public School Website package',
      'All features of the School Admissions System MVP application',
      'Seamless public-to-application user journey',
      'Unified brand styling across public and administrative views',
      'Staff handover documentation and administration walkthrough'
    ],
    badge: 'Popular for Institutions'
  },
  {
    id: 'store',
    name: 'Store',
    subtitle: 'For established brands and merchants whose reputation requires a seamless checkout.',
    standardPrice: '₦500,000',
    foundingPrice: '₦350,000',
    deliveryTimeline: '5–7 weeks',
    revisions: 'Two consolidated revision rounds on design and working cart flow.',
    description: 'A clean, high-performance product catalogue integrated with Nigeria’s leading payment gateways for dependable conversion.',
    inclusions: [
      'Curated product catalogue and category architecture',
      'Paystack or Flutterwave payment gateway integration',
      'Mobile-first cart and order placement workflow',
      'Automated customer order notification receipts',
      'Product-level SEO foundations and schema markup',
      'Direct WhatsApp order inquiry fallbacks'
    ]
  }
];

export const CARE_PLANS: CarePlan[] = [
  {
    id: 'care',
    name: 'Care',
    price: '₦25,000',
    period: 'per month',
    description: 'Essential technical oversight and monthly health checks to keep your web presence dependable.',
    features: [
      'Hosting and deployment management where applicable',
      'Monthly uptime, broken link, and form submission checks',
      'Monthly site backup',
      'Security and dependency audit checks',
      'Up to 30 minutes of small content edits each month'
    ]
  },
  {
    id: 'care-plus',
    name: 'Care Plus',
    price: '₦50,000',
    period: 'per month',
    description: 'Active maintenance and dedicated monthly priority updates for organizations with frequent content changes.',
    features: [
      'Everything included in the standard Care plan',
      'Up to 2 hours of small content edits each month',
      'Monthly performance and visitor speed summary',
      'Priority turnaround on scheduled content updates'
    ]
  }
];

export const CONCEPT_PROJECTS: ConceptProject[] = [
  {
    id: 'concept-school',
    category: 'School',
    title: 'Admissions and Accreditation Portal',
    clientLabel: 'URAH concept project',
    context: 'A hypothetical private secondary school in Lagos requiring an authoritative presence for discerning parents and inspection boards.',
    challenge: 'Overcoming parental skepticism regarding academic rigor, presenting accredited examination records cleanly, and removing friction from the application process.',
    solution: 'An editorial layout structured around verifiable facts: examination averages, university placements, teacher profiles, and an unhurried, multi-step application workflow.',
    deliverables: [
      'Editorial public information architecture',
      'Verified academic results and inspection metrics showcase',
      'Mobile-optimized parent enquiry routing to admissions team on WhatsApp'
    ],
    keyArchitecture: [
      'Static HTML/CSS payload under 85KB for 3G mobile networks',
      'Tabular figures for inspection and examination score comparisons',
      'No stock photography clichés; bespoke typographic hierarchy'
    ]
  },
  {
    id: 'concept-service',
    category: 'Service Business',
    title: 'Corporate Practice Credibility Engine',
    clientLabel: 'URAH concept project',
    context: 'A commercial dispute and advisory practice in Victoria Island positioning for institutional retained mandates.',
    challenge: 'Enterprise procurement heads verify legal and consulting partners across multiple channels. Template websites with vague claims trigger skepticism.',
    solution: 'A calm, structured presentation of practice areas, partner credentials, published case commentaries, and clear engagement milestones.',
    deliverables: [
      'Bespoke practice area documentation',
      'Partner directory with verifiable background notes',
      'High-intent consultation brief generator with direct WhatsApp handoff'
    ],
    keyArchitecture: [
      'Single-row top bar contract with strict single-line navigation',
      'High-contrast Platinum 200 on Onyx 900 for executive reading',
      'Direct WhatsApp routing to the Managing Partner’s business line'
    ]
  },
  {
    id: 'concept-store',
    category: 'Online Store',
    title: 'Curated Goods Merchant',
    clientLabel: 'URAH concept project',
    context: 'An established Nigerian leather goods and apparel brand outgrowing basic social commerce and needing an authoritative standalone storefront.',
    challenge: 'High cart abandonment caused by slow loading, cluttered interfaces, and unreliable local checkout forms over mobile data.',
    solution: 'A clean, typography-led product catalogue with minimal decoration, single-page checkout routing, and verified Paystack/Flutterwave integration.',
    deliverables: [
      'Curated product catalogue and collection grids',
      'Streamlined mobile checkout flow with Paystack/Flutterwave',
      'Direct order verification and WhatsApp receipt confirmation'
    ],
    keyArchitecture: [
      'Mobile-first responsive layout with generous 48px touch targets',
      'Fast client-side cart state with zero reload overhead',
      'Automated product structured data for local search discovery'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do your founding rates work?',
    answer: 'Our founding rates offer a 30% discount off standard rates for our first five client projects. In exchange, we request a prompt review upon project handover and the right to showcase the delivered work as a verified case study.'
  },
  {
    question: 'How are payment milestones structured?',
    answer: 'Every project operates on our approved 30/40/30 milestone structure: 30% kickoff deposit to begin work, 40% upon design presentation approval, and the final 30% before site launch and handover. You never pay for unverified promises.'
  },
  {
    question: 'What is included in revision rounds?',
    answer: 'Each website project includes two consolidated revision rounds: one following the design presentation and one on the working preview prior to launch. Fixes needed to meet the agreed scope do not count as revision rounds. Scope additions are quoted separately.'
  },
  {
    question: 'Who owns the website and code after launch?',
    answer: 'You own 100% of your website code, assets, and content upon final milestone settlement. We hand over the complete static production files and configure deployment to your hosting account.'
  },
  {
    question: 'What happens after the website is launched?',
    answer: 'We provide post-launch support through our Care (₦25,000/month) and Care Plus (₦50,000/month) plans covering hosting management, backup monitoring, security audits, and dedicated monthly content edits.'
  },
  {
    question: 'What is excluded from the Care plans?',
    answer: 'Domain registration, corporate email subscriptions, third-party software subscriptions, major redesigns, new page additions, and bulk catalogue uploads are excluded from monthly Care retainers and are quoted as separate projects.'
  },
  {
    question: 'Why do you prioritize WhatsApp over phone calls or live chat?',
    answer: 'In Nigeria, serious B2B decisions and lead verification happen through direct, documented messaging. WhatsApp Business allows prompt, auditable communication without dropped calls or slow email threads.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Brief',
    description: 'We review your business goals, target buyers, and required scope. No vague proposals—every deliverable and timeline is recorded in writing.'
  },
  {
    step: '02',
    name: 'Design',
    description: 'We present the approved editorial layout, typography, and responsive screens. Milestone payment 2 (40%) is due only after you approve this stage.'
  },
  {
    step: '03',
    name: 'Build',
    description: 'We engineer the static production build, optimize media assets, and verify performance on mid-range Android devices over mobile networks.'
  },
  {
    step: '04',
    name: 'Launch',
    description: 'Final preview verification, domain connection, and handover upon the remaining 30% milestone payment. Your site goes live without downtime.'
  },
  {
    step: '05',
    name: 'Care',
    description: 'Ongoing uptime monitoring, security audits, monthly backups, and content updates under our Care and Care Plus maintenance retainers.'
  }
];
