// {{agency_name}} — replace all placeholder values with real agency data

export const agency = {
  name: "LaunchCraft",
  tagline: "Premium websites. Fast delivery. Zero guesswork.",
  location: "{{agency_location}}",
  offer: "Template-first website production for agencies and growing businesses.",
  bookingUrl: "{{booking_url}}",
  whatsapp: "{{whatsapp_number}}",
  email: "hello@launchcraft.co",
  phone: "+1 (555) 000-0000",
  primaryColor: "#0066FF",
  secondaryColor: "#111111",
  accentColor: "#00D084",
};

export const metrics = [
  { value: "120+", label: "Client Sites Launched" },
  { value: "14", label: "Avg. Days to Live" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "6", label: "Niche Templates Ready" },
];

export const services = [
  {
    id: 1,
    icon: "Layout",
    title: "Template-First Production",
    description:
      "We start every project from a proven niche template. Your client gets a polished site without reinventing the wheel each time.",
    tag: "Core Workflow",
  },
  {
    id: 2,
    icon: "Zap",
    title: "Fast Turnaround Builds",
    description:
      "Most sites go from content intake to live preview in under two weeks. No months-long delays or endless revision cycles.",
    tag: "Speed",
  },
  {
    id: 3,
    icon: "Monitor",
    title: "Conversion-Ready Design",
    description:
      "Every layout is structured around key actions — calls, bookings, enquiries. Pretty and effective, not just pretty.",
    tag: "Performance",
  },
  {
    id: 4,
    icon: "RefreshCw",
    title: "White-Label Delivery",
    description:
      "Ship to your clients under your brand. We work behind the scenes so your agency keeps full ownership of the relationship.",
    tag: "Partnership",
  },
  {
    id: 5,
    icon: "Search",
    title: "SEO-Ready Structure",
    description:
      "Pages ship with clean semantic markup, meta configuration, sitemap, and performance best practices baked in.",
    tag: "Visibility",
  },
  {
    id: 6,
    icon: "Smartphone",
    title: "Mobile-First Builds",
    description:
      "Every template is designed and tested mobile-first. Your clients' customers browse on phones — we build for that.",
    tag: "Responsive",
  },
];

export const demos = [
  {
    id: 1,
    niche: "Local Business",
    description: "Plumbers, electricians, landscapers — service businesses that need calls.",
    packageFit: "Starter or Business",
    color: "#0066FF",
    accentColor: "#E8F0FF",
    previewUrl: "{{template_demo_links.local_business}}",
  },
  {
    id: 2,
    niche: "Clinic",
    description: "Medical, dental, physio — clean trust-focused layouts with booking CTAs.",
    packageFit: "Business or Premium",
    color: "#00D084",
    accentColor: "#E6FFF6",
    previewUrl: "{{template_demo_links.clinic}}",
  },
  {
    id: 3,
    niche: "Restaurant",
    description: "Menu showcases, reservation links, and rich food photography layouts.",
    packageFit: "Starter or Business",
    color: "#FF6B35",
    accentColor: "#FFF0EB",
    previewUrl: "{{template_demo_links.restaurant}}",
  },
  {
    id: 4,
    niche: "Real Estate",
    description: "Property listings, agent profiles, and neighbourhood-first landing pages.",
    packageFit: "Business or Premium",
    color: "#1A1A2E",
    accentColor: "#F0F0F8",
    previewUrl: "{{template_demo_links.real_estate}}",
  },
  {
    id: 5,
    niche: "Salon",
    description: "Portfolio-driven beauty brands with service menus and online booking.",
    packageFit: "Starter or Business",
    color: "#C9A96E",
    accentColor: "#FDF8F0",
    previewUrl: "{{template_demo_links.salon}}",
  },
  {
    id: 6,
    niche: "Agency",
    description: "Full-service marketing and creative agency templates — this one included.",
    packageFit: "Premium",
    color: "#111111",
    accentColor: "#F4F4F4",
    previewUrl: "{{template_demo_links.agency}}",
  },
];

export const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "₹7,000",
    tagline: "Get online fast",
    pages: "5 pages",
    revisions: "2 revisions",
    delivery: "1 business day",
    highlight: false,
    features: [
      "5 custom pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Google Analytics setup",
      "Basic SEO configuration",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    cta: "Get Started",
  },
  {
    id: "business",
    name: "Business",
    price: "₹12,000",
    tagline: "Most popular choice",
    pages: "7 pages",
    revisions: "4 revisions",
    delivery: "2 business days",
    highlight: true,
    features: [
      "7 custom pages",
      "Mobile-responsive design",
      "CMS blog integration",
      "Advanced SEO + sitemap",
      "Social media links",
      "Booking / calendar integration",
      "4 rounds of revisions",
      "60-day post-launch support",
    ],
    cta: "Book Consultation",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹15,000",
    tagline: "Full-featured launch",
    pages: "12 pages",
    revisions: "6 revisions",
    delivery: "4 business days",
    highlight: false,
    features: [
      "12 custom pages",
      "Custom animations and interactions",
      "E-commerce or booking system",
      "Advanced SEO + schema markup",
      "Speed and performance optimisation",
      "Custom domain + hosting setup",
      "6 rounds of revisions",
      "90-day post-launch support",
    ],
    cta: "Get Premium",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Choose a Template",
    description:
      "Browse our niche template library. Pick the one closest to your client's industry.",
  },
  {
    step: "02",
    title: "Submit Content",
    description:
      "Complete a structured content brief. We guide you through everything we need — copy, images, colours, links.",
  },
  {
    step: "03",
    title: "We Build",
    description:
      "Our team customises the template to your client's brand. You stay in the loop via a shared preview link.",
  },
  {
    step: "04",
    title: "Review & Refine",
    description:
      "Leave consolidated feedback. We action revisions promptly within your package allowance.",
  },
  {
    step: "05",
    title: "Go Live",
    description:
      "We handle launch — domain connection, hosting config, final QA. Your client gets a working site, not a handoff file.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Marketing Co.",
    quote:
      "We delivered three client websites in one month using LaunchCraft templates. The quality was strong enough that two clients came back asking for more pages.",
    avatar: "SM",
    result: "3 sites in 30 days",
  },
  {
    id: 2,
    name: "James Okafor",
    role: "Founder, Okafor Digital",
    quote:
      "I was spending two weeks per client site before. Now it is closer to ten days and I have standardised my pricing because the scope is predictable.",
    avatar: "JO",
    result: "50% faster delivery",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Director, Elevate Web Studio",
    quote:
      "The white-label process is seamless. My clients think the work is entirely ours. LaunchCraft stays invisible and we get all the credit.",
    avatar: "PS",
    result: "White-label ready",
  },
];

export const portfolioItems = [
  {
    id: 1,
    client: "Cascade Plumbing",
    niche: "Local Business",
    result: "42% increase in call enquiries",
    package: "Business",
    color: "#0066FF",
  },
  {
    id: 2,
    client: "Serene Dental Clinic",
    niche: "Clinic",
    result: "Booked out 3 weeks after launch",
    package: "Premium",
    color: "#00D084",
  },
  {
    id: 3,
    client: "Ember Kitchen",
    niche: "Restaurant",
    result: "2x online reservation volume",
    package: "Business",
    color: "#FF6B35",
  },
  {
    id: 4,
    client: "Pinnacle Real Estate",
    niche: "Real Estate",
    result: "65 leads in first 60 days",
    package: "Premium",
    color: "#1A1A2E",
  },
];
