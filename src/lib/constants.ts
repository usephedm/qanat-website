export const SITE = {
  name: 'QANAT',
  shortName: 'QN8',
  domain: 'QN8.app',
  tagline: 'We Build the Machine Behind the Machine.',
  description:
    'QANAT engineers AI-powered operational infrastructure — dispatch automation, team scaling, and revenue systems that took one company from zero to $2.5M ARR in 18 months.',
  url: 'https://qn8.app',
  founder: {
    name: 'V',
    fullName: 'Yousof Al-Ali',
    title: 'Founder & CEO',
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
  contact: {
    email: 'hello@qn8.app',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  {
    id: 'dispatch-automation',
    title: 'Dispatch Automation',
    subtitle: 'Zero-Latency Coordination',
    description:
      'AI-powered dispatch systems that route, schedule, and optimize field operations in real-time. We replaced manual coordination with intelligent automation — cutting response times by 73% and scaling one operation from 5 to 50 dispatchers in under 2 years.',
    outcomes: [
      '73% faster dispatch response times',
      '50-person operations team built in 24 months',
      '99.2% SLA compliance rate',
      '$2.5M ARR achieved in 18 months',
    ],
    features: [
      'Real-time AI routing & scheduling',
      'Multi-timezone coordination engine',
      'Automated escalation & failover protocols',
      'Live performance dashboards & analytics',
      'Predictive demand forecasting',
    ],
    icon: 'dispatch',
  },
  {
    id: 'ai-operations',
    title: 'AI Operations',
    subtitle: 'Intelligence That Executes',
    description:
      'Custom AI agents and automation pipelines that don\'t just analyze — they act. From document processing to decision support to autonomous workflows, we build the intelligence layer that turns your operations from reactive to predictive.',
    outcomes: [
      '85% reduction in manual processing time',
      '40+ custom AI agents deployed in production',
      '24/7 autonomous decision support',
      '3x team output without headcount increase',
    ],
    features: [
      'Custom AI agent development & deployment',
      'Process automation & intelligent workflows',
      'Natural language operations interfaces',
      'Predictive operations intelligence',
      'Human-in-the-loop oversight systems',
    ],
    icon: 'ai',
  },
  {
    id: 'team-scaling',
    title: 'Team Scaling',
    subtitle: 'From Zero to Operating',
    description:
      'We don\'t just consult on team building — we build the actual team, the processes, the training, and the systems. From recruiting to onboarding to performance management, we\'ve scaled operations teams from founder-only to 50+ people with documented playbooks.',
    outcomes: [
      '0 → 50 person operations team in 24 months',
      '90% employee retention rate',
      'Cross-border teams across 3+ timezones',
      'Complete operational playbooks & SOPs',
    ],
    features: [
      'End-to-end recruitment pipeline',
      'Structured onboarding & training programs',
      'Performance management frameworks',
      'Cross-border team coordination',
      'Culture design & operational DNA',
    ],
    icon: 'team',
  },
] as const;

export const CASE_STUDIES = [
  {
    id: 'project-meridian',
    title: 'Project Meridian',
    industry: 'Home Services & Dispatch',
    subtitle: 'From garage startup to $2.5M ARR in 18 months',
    challenge:
      'A US-based home services company needed to scale from 5 contractors to a full dispatch operation covering multiple states — without the capital to hire a traditional operations team.',
    solution:
      'QANAT built the entire operational backbone: AI-powered dispatch system, cross-border team of 50+ operators, automated scheduling, real-time routing, and performance analytics. All managed remotely from a 12-hour timezone offset.',
    results: [
      { metric: '$2.5M', label: 'Annual Recurring Revenue', sublabel: 'achieved in 18 months' },
      { metric: '50+', label: 'Team Members', sublabel: 'scaled from 5 in 24 months' },
      { metric: '73%', label: 'Faster Response', sublabel: 'dispatch time reduction' },
      { metric: '99.2%', label: 'SLA Compliance', sublabel: 'service level agreement' },
    ],
    timeline: [
      { month: 'Month 1-2', event: 'Operations audit & system architecture' },
      { month: 'Month 3-4', event: 'AI dispatch engine deployment' },
      { month: 'Month 5-8', event: 'Team scaling: 5 → 20 operators' },
      { month: 'Month 9-12', event: 'Multi-state expansion, 20 → 35 team' },
      { month: 'Month 13-18', event: 'Revenue optimization, 35 → 50+ team' },
      { month: 'Month 18+', event: '$2.5M ARR milestone achieved' },
    ],
    testimonial: {
      quote: 'They didn\'t just build our operations — they built a machine that builds operations. We went from chaos to clockwork.',
      author: 'Founder, Project Meridian',
    },
  },
] as const;

export const OPEN_ROLES = [
  {
    title: 'Dispatch Operations Lead',
    department: 'Operations',
    type: 'Full-time',
    location: 'Remote (US hours)',
    compensation: '$60K - $90K + equity',
    description:
      'Lead and optimize our dispatch operations. You\'ll build processes, train operators, manage escalations, and ensure flawless execution across time zones. This is not a management role — you\'ll be in the trenches.',
    requirements: [
      '3+ years in dispatch, logistics, or field service operations',
      'Experience managing remote teams across timezones',
      'Comfort with AI tools and automation workflows',
      'Calm under pressure, sharp under uncertainty',
    ],
  },
  {
    title: 'AI Operations Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    compensation: '$80K - $130K + equity',
    description:
      'Build and deploy AI agents that power real-world operations. Not research — production systems handling thousands of decisions daily. You\'ll work directly with operations teams to understand problems and ship solutions.',
    requirements: [
      'Strong Python/TypeScript, experience with LLM APIs',
      'Production ML/AI deployment experience',
      'Understanding of operations and workflow automation',
      'Bias toward shipping over perfecting',
    ],
  },
  {
    title: 'Dispatch Operator',
    department: 'Operations',
    type: 'Full-time',
    location: 'Remote',
    compensation: '$35K - $50K',
    description:
      'Be the human-in-the-loop for our AI-augmented dispatch system. You\'ll handle real-time coordination, escalations, and customer communications. Fast thinkers, clear communicators, calm under pressure.',
    requirements: [
      'Excellent English communication (written and verbal)',
      'Ability to work US business hours',
      'Quick decision-making under time pressure',
      'No degree required — we care about capability',
    ],
  },
  {
    title: 'Growth & Revenue Operations',
    department: 'Growth',
    type: 'Full-time',
    location: 'Remote',
    compensation: '$55K - $85K + equity',
    description:
      'Own the revenue engine. From lead generation to pipeline management to close. You\'ll build and optimize the systems that turn interest into contracts, working with AI tools to scale outreach.',
    requirements: [
      'Experience in B2B sales or revenue operations',
      'Comfort with CRM systems and data-driven selling',
      'Understanding of AI/operations industry',
      'Self-starter who builds process, not follows it',
    ],
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
      'No fake testimonials. No inflated client lists. Every metric on this site is real. We\'d rather show less than lie more.',
  },
] as const;

export const PRICING_TIERS = [
  {
    name: 'Launchpad',
    description: 'For businesses ready to operationalize their first AI systems',
    price: 5000,
    period: '/month',
    features: [
      'Dispatch automation setup',
      'Up to 10 operators managed',
      'Basic AI agent deployment',
      'Standard SLA (95%)',
      'Weekly performance reports',
      'Email support',
    ],
    cta: 'Start with Launchpad',
    popular: false,
  },
  {
    name: 'Scale',
    description: 'For growing operations that need to move fast without breaking',
    price: 15000,
    period: '/month',
    features: [
      'Everything in Launchpad',
      'Up to 50 operators managed',
      'Custom AI agents (up to 5)',
      'Premium SLA (99%)',
      'Real-time dashboards',
      'Dedicated operations lead',
      'Cross-border team coordination',
      'Monthly strategy sessions',
    ],
    cta: 'Scale Your Operations',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Full operational infrastructure — built, managed, optimized',
    price: null,
    period: '',
    features: [
      'Everything in Scale',
      'Unlimited operators',
      'Unlimited AI agents',
      'Custom SLA (99.5%+)',
      'Dedicated engineering team',
      'Custom integrations',
      'White-label option',
      '24/7 operations support',
      'Quarterly business reviews',
    ],
    cta: 'Contact for Pricing',
    popular: false,
  },
] as const;
