export const SITE = {
  name: 'QANAT',
  tagline: 'Invisible Infrastructure. Visible Results.',
  description:
    'QANAT builds the invisible operational infrastructure that powers modern businesses — AI-driven dispatch, facility management, and cross-border service delivery.',
  url: 'https://qanat.dev',
  founder: {
    name: 'Yousof Al-Ali',
    title: 'Founder & CEO',
    aka: 'V',
  },
  entity: {
    name: 'QANAT LLC',
    state: 'Wyoming',
  },
  social: {
    linkedin: 'https://linkedin.com/company/qanat-hq',
    twitter: 'https://x.com/qanathq',
    github: 'https://github.com/qanathq',
  },
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  {
    id: 'dispatch',
    title: 'Dispatch Operations',
    subtitle: 'AI-Powered Coordination',
    description:
      'Intelligent dispatch systems that route, schedule, and optimize field operations in real-time. We replace chaos with precision — every technician, every job, every minute accounted for.',
    features: [
      'Real-time AI routing & scheduling',
      'Multi-timezone coordination',
      'Automated escalation protocols',
      'Performance analytics & optimization',
    ],
    icon: 'dispatch',
  },
  {
    id: 'ai-ops',
    title: 'AI Operations',
    subtitle: 'Intelligence at Scale',
    description:
      'Custom AI agents and automation pipelines that transform how your business operates. From document processing to decision support — we build the intelligence layer your operations need.',
    features: [
      'Custom AI agent development',
      'Process automation & workflows',
      'Natural language interfaces',
      'Predictive operations intelligence',
    ],
    icon: 'ai',
  },
  {
    id: 'facility',
    title: 'Facility Management',
    subtitle: 'Operational Excellence',
    description:
      'End-to-end facility operations management that keeps buildings running and businesses thriving. Preventive maintenance, vendor coordination, and compliance — handled.',
    features: [
      'Preventive maintenance programs',
      'Vendor management & procurement',
      'Compliance & safety protocols',
      'Energy optimization & sustainability',
    ],
    icon: 'facility',
  },
] as const;

export const VALUES = [
  {
    title: 'Invisible Excellence',
    description:
      'Like the ancient qanat systems, the best infrastructure is invisible. You should never think about your operations — they should just work.',
  },
  {
    title: 'Precision Over Volume',
    description:
      'We don\'t scale by throwing bodies at problems. We scale by building systems so precise that one person does the work of ten.',
  },
  {
    title: 'Cross-Border by Default',
    description:
      'Built from day one to operate across borders, timezones, and cultures. Global operations aren\'t an afterthought — they\'re the foundation.',
  },
  {
    title: 'Earned, Not Claimed',
    description:
      'No fake testimonials. No inflated client lists. Every claim on this site is real. We\'d rather show less than lie more.',
  },
] as const;
