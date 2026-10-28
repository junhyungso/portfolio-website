/* ----------------------------------------------------------------
   Portfolio content — modeled as a YouTube "channel"
-----------------------------------------------------------------*/

export const profile = {
  name: 'Junhyung So',
  handle: '@junhyungso',
  role: 'Frontend-leaning Full-Stack Software Engineer',
  tagline:
    'I build intuitive, reliable web applications — and ship products that move real business metrics.',
  location: 'Palisades Park, NJ',
  email: 'junso5551@gmail.com',
  phone: '(201) 463-5551',
  linkedin: 'https://linkedin.com/in/junhyungso',
  github: 'https://github.com/junhyungso',
  // Headline stats, framed like channel stats
  stats: {
    subscribers: '3+ yrs',
    subscribersLabel: 'experience',
    videos: '10+',
    videosLabel: ' projects',
  },
  resumeSummary:
    "Hi, I'm Junhyung So, a Frontend-leaning Full-Stack Software Engineer with great passion for creating intuitive and user-friendly interfaces. With strong foundation in React and TypeScript, I specialize in building responsive, accessible, and performant web applications. I'm constantly driven to push boundaries, which includes learning new technologies to expand my skillset. Outside of work, I enjoy my personal time playing the piano, watching soccer,and participating in community volunteering services. This portfolio website is inspired by my favorite website, Youtube.",
};

export type Experience = {
  company: string;
  title: string;
  location: string;
  period: string;
  // "uploaded" relative time, YouTube style
  posted: string;
  current?: boolean;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Nexien',
    title: 'Founding Software Engineer',
    location: 'Fort Lee, NJ',
    period: 'Oct 2025 — Present',
    posted: 'Latest',
    current: true,
    bullets: [
      'Built and launched JobBlueLink, a job search and networking platform for the blue-collar workforce, shipping the MVP in 4 months and onboarding 3,500+ registered users within the first month.',
      'Increased daily organic search clicks by 500% by enhancing Core Web Vitals across job search pages, reducing LCP from 15.9s to 1.9s and INP from 260ms to 146ms through code optimizations.',
      'Designed and implemented APIs for subscription management, handling plan tiers, trial periods, billing cycles, and Stripe synchronization.',
      'Developed an internal admin console to better monitor platform activity, such as managing subscriptions and billing, tracking support tickets, and surfacing API metrics to streamline business operations.',
      'Engineered a location-based job search experience with interactive Google Maps, implementing S2-cell spatial clustering and marker visualization to efficiently handle large-scale geographic searches.',
    ],
  },
  {
    company: 'MEK Review',
    title: 'Salesforce Engineer',
    location: 'Palisades Park, NJ',
    period: 'Mar 2025 — Oct 2025',
    posted: '1 year ago',
    bullets: [
      'Automated accounting and enrollment workflows in Salesforce, replacing manual data entry and reducing reconciliation errors across 3,000+ records/month.',
    ],
  },
  {
    company: 'Acorns',
    title: 'Software Engineer',
    location: 'Irvine, CA',
    period: 'Dec 2021 — Oct 2023',
    posted: '3 years ago',
    bullets: [
      'Reduced customer support inquiries by 72% and saved $50K+ annually by redesigning the bank account verification process, letting users trigger re-verification directly instead of contacting support.',
      'Built key frontend features for Custom Portfolios, a feature that allows users to diversify their portfolios, which drove 48,000+ user adoptions and generated $432k+ revenue within 5 months of release.',
      'Raised codebase test coverage to 85% and resolved 100+ bugs through robust unit and integration tests, improving the reliability of core investment features and minimizing incidents.',
      'Lowered page load time by 22% by leading a refactor of legacy code to modern React patterns to ensure better codebase readability and maintainability.',
    ],
  },
  {
    company: 'WW International',
    title: 'Software Engineering Intern',
    location: 'New York, NY',
    period: 'Jun 2020 — Aug 2020',
    posted: '6 years ago',
    bullets: [
      'Reduced login errors by 25% for 1M+ users by revamping login/signup interfaces and validation logic.',
    ],
  },
];

export type Project = {
  title: string;
  company: string;
  // category used by the filter chips
  category: 'Featured' | 'Frontend' | 'Full-Stack' | 'Platform';
  blurb: string;
  // YouTube-style metadata
  views: string;
  posted: string;
  duration: string;
  tags: string[];
  // gradient pair for the generated "thumbnail"
  thumb: [string, string];
  // single-letter / emoji glyph drawn over the thumbnail
  glyph: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: 'JobBlueLink — Job Search & Social Platform',
    company: 'Nexien',
    category: 'Featured',
    blurb:
      'Built and launched a job search and networking platform for the blue-collar workforce as a founding engineer — MVP delivered in 4 months, with 3,500+ registered users within one month of launch.',
    views: '3,500+ users',
    posted: 'Latest',
    duration: '10:00',
    tags: ['Next.js', 'TypeScript', 'Spring Boot', 'MySQL'],
    thumb: ['#cc0000', '#1f1f1f'],
    glyph: 'JB',
    link: { label: 'Nexien', href: 'https://www.jobbluelink.com' },
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    items: [
      'React (Next.js)',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    label: 'Backend / Database',
    items: ['Java (Spring Boot)', 'JPA', 'REST APIs', 'MySQL'],
  },
  {
    label: 'Testing & Tools',
    items: [
      'Jest',
      'Cypress',
      'Shadcn/UI',
      'Git',
      'Figma',
      'Jira',
      'Linear',
      'Claude Code',
    ],
  },
];

export const education = {
  school: 'Boston College',
  location: 'Chestnut Hill, MA',
  degree: 'B.S. in Computer Science',
  detail: 'GPA: 3.7 / 4.0 · Class of 2021',
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  kind: 'email' | 'phone' | 'linkedin' | 'github' | 'location';
};

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    kind: 'email',
  },
  {
    label: 'LinkedIn',
    value: 'in/junhyungso',
    href: profile.linkedin,
    kind: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/junhyungso',
    href: profile.github,
    kind: 'github',
  },
];

// Filter-chip categories for the projects row
export const projectFilters = [
  'All',
  'Featured',
  'Frontend',
  'Full-Stack',
  'Platform',
] as const;
