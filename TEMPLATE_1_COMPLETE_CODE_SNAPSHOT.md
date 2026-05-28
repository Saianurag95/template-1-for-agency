# Template 1 Complete Code Snapshot

Template ID: `AG-MOD-01`

Current positioning: white-label website production partner for reseller agencies.

Source repo: `C:\Users\reddy\Documents\New project\template-1-for-agency`

GitHub repo: `Saianurag95/template-1-for-agency`

This snapshot exists so an AI agent or team member can understand and customize Template 1 quickly without rediscovering the codebase.

For fast client customization, edit `src/data/index.ts` first. Only edit components or intake behavior when layout, behavior, or field changes are required.

## Fast Edit Map

1. `src/data/index.ts` - brand, services, demos, packages, process, testimonials, portfolio, metrics.
2. `src/components/IntakePage.tsx` - intake fields, template IDs, validation rules.
3. `src/components/Hero.tsx` - hero positioning and visual mockups.
4. `src/components/*` - section-level visual structure.

## Included Files

- `package.json`
- `vercel.json`
- `tailwind.config.js`
- `src/App.tsx`
- `src/data/index.ts`
- `src/components/IntakePage.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/ProofBand.tsx`
- `src/components/Services.tsx`
- `src/components/DemoShowcase.tsx`
- `src/components/Packages.tsx`
- `src/components/Process.tsx`
- `src/components/Portfolio.tsx`
- `src/components/BookingCTA.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/index.css`
- `src/main.tsx`

## package.json

`$ext
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

## vercel.json

`$ext
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## tailwind.config.js

`$ext
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#0066FF',
          700: '#0052CC',
          800: '#003D99',
          900: '#002966',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#00D084',
          700: '#00A86B',
          800: '#007A4D',
          900: '#004D30',
        },
      },
      spacing: {
        18: '4.5rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
```

## src/App.tsx

`$ext
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProofBand from "./components/ProofBand";
import Services from "./components/Services";
import DemoShowcase from "./components/DemoShowcase";
import Packages from "./components/Packages";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import BookingCTA from "./components/BookingCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntakePage from "./components/IntakePage";

export default function App() {
  if (window.location.pathname === "/intake") {
    return <IntakePage />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProofBand />
      <Services />
      <DemoShowcase />
      <Packages />
      <Process />
      <Portfolio />
      <BookingCTA />
      <Contact />
      <Footer />
    </div>
  );
}
```

## src/data/index.ts

`$ext
// Template 1: white-label website production partner

export const agency = {
  name: "LaunchLayer Studio",
  tagline: "White-label website production for reseller agencies.",
  location: "Hyderabad, India",
  offer: "Template-first website delivery engine for agencies that need fast, reliable fulfillment under their own brand.",
  bookingUrl: "/intake",
  whatsapp: "+91 98765 43210",
  email: "partners@launchlayer.in",
  phone: "+91 98765 43210",
  primaryColor: "#7C3AED",
  secondaryColor: "#020617",
  accentColor: "#06B6D4",
};

export const metrics = [
  { value: "50+", label: "Agency Partners Supported" },
  { value: "1-3d", label: "Template-Based Delivery" },
  { value: "80%", label: "Less Back-And-Forth" },
  { value: "10", label: "Agency Templates Ready" },
];

export const services = [
  {
    id: 1,
    icon: "Layout",
    title: "White-Label Website Fulfillment",
    description:
      "We build client websites under your agency brand so you can sell more without hiring a full production team.",
    tag: "Core Workflow",
  },
  {
    id: 2,
    icon: "Zap",
    title: "Template-First Production",
    description:
      "Every project starts from a proven layout, structured content brief and reusable components instead of custom chaos.",
    tag: "System",
  },
  {
    id: 3,
    icon: "Monitor",
    title: "Agency Intake System",
    description:
      "Clients submit business details, content, media, template ID and package selection through a guided intake flow.",
    tag: "Operations",
  },
  {
    id: 4,
    icon: "RefreshCw",
    title: "Developer-Ready Briefs",
    description:
      "We convert messy client information into structured production requirements your team can execute fast.",
    tag: "Delivery",
  },
  {
    id: 5,
    icon: "Search",
    title: "Revision-Controlled Workflow",
    description:
      "Revisions are handled in clean rounds so delivery remains predictable and developers do not get trapped in endless changes.",
    tag: "Control",
  },
  {
    id: 6,
    icon: "Smartphone",
    title: "Launch And Handoff Support",
    description:
      "We prepare final files, deployment notes, domain handoff and launch-ready checks for every website.",
    tag: "Handoff",
  },
];

export const demos = [
  {
    id: 1,
    niche: "Agency Partner Website",
    description: "A public website for reseller agencies to attract businesses and sell website packages.",
    packageFit: "Business",
    color: "#7C3AED",
    accentColor: "#F3E8FF",
    previewUrl: "/intake",
  },
  {
    id: 2,
    niche: "Client Intake Funnel",
    description: "A structured project collection flow for business details, template choice, content and payment confirmation.",
    packageFit: "Business or Premium",
    color: "#06B6D4",
    accentColor: "#ECFEFF",
    previewUrl: "/intake",
  },
  {
    id: 3,
    niche: "Template Catalog System",
    description: "A demo showcase area where agencies can present ready-made website styles to clients.",
    packageFit: "Premium",
    color: "#F59E0B",
    accentColor: "#FFFBEB",
    previewUrl: "/intake",
  },
  {
    id: 4,
    niche: "Production Dashboard Concept",
    description: "A delivery-focused structure for tracking client projects, revisions, assets and launch status.",
    packageFit: "Business or Premium",
    color: "#0F172A",
    accentColor: "#E0E7FF",
    previewUrl: "/intake",
  },
  {
    id: 5,
    niche: "White-Label Sales Page",
    description: "A sales-focused website for agencies that want to pitch website services as their own offer.",
    packageFit: "Business",
    color: "#DB2777",
    accentColor: "#FCE7F3",
    previewUrl: "/intake",
  },
  {
    id: 6,
    niche: "Maintenance Plan Page",
    description: "A recurring revenue page for support, updates, hosting coordination and post-launch care.",
    packageFit: "Premium",
    color: "#111827",
    accentColor: "#F3F4F6",
    previewUrl: "/intake",
  },
];

export const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "Rs 6,000",
    priceNote: "Demo pricing",
    tagline: "Get online fast",
    pages: "5 pages",
    revisions: "2 revisions",
    delivery: "1 business day",
    highlight: false,
    features: [
      "5 template-based pages",
      "Mobile-responsive design",
      "Contact form setup",
      "Basic SEO configuration",
      "WhatsApp or call CTA",
      "2 rounds of revisions",
      "Launch-ready static website",
    ],
    cta: "Start Project Intake",
  },
  {
    id: "business",
    name: "Business",
    price: "Rs 8,000",
    priceNote: "Demo pricing",
    tagline: "Most popular choice",
    pages: "7 pages",
    revisions: "4 revisions",
    delivery: "2 business days",
    highlight: true,
    features: [
      "7 template-based pages",
      "Mobile-responsive design",
      "Service and location sections",
      "Advanced SEO basics + sitemap",
      "Social media links",
      "Booking or WhatsApp integration",
      "4 rounds of revisions",
    ],
    cta: "Start Project Intake",
  },
  {
    id: "premium",
    name: "Premium",
    price: "Rs 12,000",
    priceNote: "Demo pricing",
    tagline: "Full-featured launch",
    pages: "12 pages",
    revisions: "6 revisions",
    delivery: "3 business days",
    highlight: false,
    features: [
      "12 template-based pages",
      "Premium interactions and sections",
      "Portfolio or landing page setup",
      "Advanced SEO + schema basics",
      "Speed and performance optimization",
      "Custom domain + launch support",
      "6 rounds of revisions",
    ],
    cta: "Start Project Intake",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Agency Places Order",
    description:
      "The reseller agency selects a client template, package and delivery requirement.",
  },
  {
    step: "02",
    title: "Client Brief Is Structured",
    description:
      "The intake flow turns business information, content, media and credentials into a developer-ready brief.",
  },
  {
    step: "03",
    title: "Production Team Builds",
    description:
      "LaunchLayer adapts the selected template with the client's brand, services, images and calls to action.",
  },
  {
    step: "04",
    title: "Agency Reviews Preview",
    description:
      "The agency receives a preview link and sends consolidated changes within the package revision limit.",
  },
  {
    step: "05",
    title: "White-Label Handoff",
    description:
      "We prepare launch files and deployment notes so the agency can hand over the site under its own brand.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Founder, LocalReach Media",
    quote:
      "LaunchLayer became our silent production team. We sell the project, they handle the build.",
    avatar: "RM",
    result: "8 client sites delivered in one month",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Owner, GrowthMint Agency",
    quote:
      "The intake process made every client brief clean. Our designers stopped wasting time chasing missing details.",
    avatar: "PN",
    result: "50% faster production",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    role: "Digital Consultant",
    quote:
      "The template-first model made website pricing, delivery and revisions much easier to manage.",
    avatar: "AR",
    result: "Predictable delivery workflow",
  },
];

export const portfolioItems = [
  {
    id: 1,
    client: "NorthStar Digital",
    niche: "Reseller Agency",
    result: "Delivered 11 white-label websites without hiring another developer",
    package: "Business",
    color: "#2563EB",
  },
  {
    id: 2,
    client: "ScaleMint Media",
    niche: "Marketing Agency",
    result: "Reduced client website delivery time from 14 days to 3 days",
    package: "Premium",
    color: "#22C55E",
  },
  {
    id: 3,
    client: "WebBridge Partners",
    niche: "Freelance Network",
    result: "Standardized intake, revisions and final handoff for every project",
    package: "Business",
    color: "#F97316",
  },
  {
    id: 4,
    client: "AdVantage Local",
    niche: "Local Ads Agency",
    result: "Added website packages as a new recurring service line",
    package: "Premium",
    color: "#0F172A",
  },
];
```

## src/components/IntakePage.tsx

`$ext
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  FileImage,
  Globe2,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import { agency } from "../data";

const steps = [
  "Business Information",
  "Website Requirements",
  "Template Selection",
  "Brand Information",
  "Content Submission",
  "Media Uploads",
  "Credentials",
  "SEO Information",
  "Package Selection",
  "Payment Section",
  "Final Review",
];

const packages = [
  {
    name: "Starter Website",
    price: "Rs 6,000",
    pages: "5 pages",
    delivery: "1 business day",
    revisions: "2 revisions",
  },
  {
    name: "Business Website",
    price: "Rs 8,000",
    pages: "7 pages",
    delivery: "2 business days",
    revisions: "4 revisions",
    popular: true,
  },
  {
    name: "Premium Growth Website",
    price: "Rs 12,000",
    pages: "12 pages",
    delivery: "3 business days",
    revisions: "6 revisions",
  },
];

const templateOptions = [
  { id: "AG-MOD-01", name: "Agency Modern 01", fit: "General website agency" },
  { id: "AG-LOCAL-02", name: "Local Growth", fit: "Local business marketing" },
  { id: "AG-LEAD-03", name: "LeadGen Pro", fit: "Performance and leads" },
  { id: "AG-SEO-04", name: "SEO Performance", fit: "SEO and ranking services" },
  { id: "AG-CREATIVE-05", name: "Creative Studio", fit: "Branding and design agency" },
  { id: "AG-SOCIAL-06", name: "Social Media", fit: "Content and creator agency" },
];

const uploadGroups = [
  "Logo",
  "Gallery Images",
  "Team Photos",
  "Product Photos",
  "Content Documents",
  "Credentials",
];

type FormData = {
  businessName: string;
  businessCategory: string;
  contactPerson: string;
  phone: string;
  email: string;
  whatsapp: string;
  businessDescription: string;
  websiteType: string;
  websiteGoal: string;
  referenceWebsites: string;
  selectedTemplate: string;
  templateId: string;
  templateNotes: string;
  primaryColor: string;
  secondaryColor: string;
  logo: string;
  preferredStyle: string;
  brandInspiration: string;
  headline: string;
  cta: string;
  services: string;
  testimonials: string;
  uploadsConfirmed: boolean;
  domainProvider: string;
  hostingProvider: string;
  websiteLogin: string;
  dnsNotes: string;
  primaryLocation: string;
  googleBusinessProfile: string;
  targetKeywords: string;
  serviceAreas: string;
  paymentConfirmed: boolean;
};

const initialForm: FormData = {
  businessName: "",
  businessCategory: "",
  contactPerson: "",
  phone: "",
  email: "",
  whatsapp: "",
  businessDescription: "",
  websiteType: "",
  websiteGoal: "",
  referenceWebsites: "",
  selectedTemplate: "Agency Modern 01",
  templateId: "AG-MOD-01",
  templateNotes: "Use a modern SaaS-style look with blue and green accents. Keep the main structure and update all content for NexaWeb Studio.",
  primaryColor: "",
  secondaryColor: "",
  logo: "",
  preferredStyle: "",
  brandInspiration: "",
  headline: "",
  cta: "",
  services: "",
  testimonials: "",
  uploadsConfirmed: false,
  domainProvider: "",
  hostingProvider: "",
  websiteLogin: "",
  dnsNotes: "",
  primaryLocation: "",
  googleBusinessProfile: "",
  targetKeywords: "",
  serviceAreas: "",
  paymentConfirmed: false,
};

function isFilled(value: string) {
  return value.trim().length > 0;
}

function missingFields(active: number, form: FormData, selectedPackage: string) {
  const checks: Record<number, Array<[string, boolean]>> = {
    0: [
      ["Business name", isFilled(form.businessName)],
      ["Business category", isFilled(form.businessCategory)],
      ["Contact person", isFilled(form.contactPerson)],
      ["Phone", isFilled(form.phone)],
      ["Email", isFilled(form.email)],
      ["WhatsApp", isFilled(form.whatsapp)],
      ["Business description", isFilled(form.businessDescription)],
    ],
    1: [
      ["Website type", isFilled(form.websiteType)],
      ["Website goal", isFilled(form.websiteGoal)],
      ["Reference websites", isFilled(form.referenceWebsites)],
    ],
    2: [
      ["Selected template", isFilled(form.selectedTemplate)],
      ["Template ID", isFilled(form.templateId)],
      ["Template notes", isFilled(form.templateNotes)],
    ],
    3: [
      ["Primary color", isFilled(form.primaryColor)],
      ["Secondary color", isFilled(form.secondaryColor)],
      ["Logo note", isFilled(form.logo)],
      ["Preferred style", isFilled(form.preferredStyle)],
      ["Brand inspiration", isFilled(form.brandInspiration)],
    ],
    4: [
      ["Homepage headline", isFilled(form.headline)],
      ["CTA preference", isFilled(form.cta)],
      ["Services", isFilled(form.services)],
      ["Testimonials / proof", isFilled(form.testimonials)],
    ],
    5: [["Upload confirmation", form.uploadsConfirmed]],
    6: [
      ["Domain provider", isFilled(form.domainProvider)],
      ["Hosting provider", isFilled(form.hostingProvider)],
      ["Website login note", isFilled(form.websiteLogin)],
      ["DNS notes", isFilled(form.dnsNotes)],
    ],
    7: [
      ["Primary location", isFilled(form.primaryLocation)],
      ["Google Business Profile", isFilled(form.googleBusinessProfile)],
      ["Target keywords", isFilled(form.targetKeywords)],
      ["Service areas", isFilled(form.serviceAreas)],
    ],
    8: [["Package selection", isFilled(selectedPackage)]],
    9: [["Payment confirmation", form.paymentConfirmed]],
    10: [],
  };

  return (checks[active] || []).filter(([, valid]) => !valid).map(([label]) => label);
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-300/70 focus:bg-white/[0.09] focus:ring-4 focus:ring-cyan-300/10"
      />
    </label>
  );
}

function TextArea({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <textarea
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-300/70 focus:bg-white/[0.09] focus:ring-4 focus:ring-cyan-300/10"
      />
    </label>
  );
}

function StepContent({
  active,
  form,
  updateForm,
  selectedPackage,
  setSelectedPackage,
}: {
  active: number;
  form: FormData;
  updateForm: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  selectedPackage: string;
  setSelectedPackage: (name: string) => void;
}) {
  if (active === 0) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Business Name" placeholder="{{business_name}}" value={form.businessName} onChange={(value) => updateForm("businessName", value)} />
        <Field label="Business Category" placeholder="Clinic, agency, restaurant, real estate..." value={form.businessCategory} onChange={(value) => updateForm("businessCategory", value)} />
        <Field label="Contact Person" placeholder="Owner / manager name" value={form.contactPerson} onChange={(value) => updateForm("contactPerson", value)} />
        <Field label="Phone" placeholder="{{phone}}" value={form.phone} onChange={(value) => updateForm("phone", value)} />
        <Field label="Email" placeholder="client@business.com" value={form.email} onChange={(value) => updateForm("email", value)} type="email" />
        <Field label="WhatsApp" placeholder="{{whatsapp_number}}" value={form.whatsapp} onChange={(value) => updateForm("whatsapp", value)} />
        <div className="md:col-span-2">
          <TextArea label="Business Description" placeholder="What does the business do, who does it serve, and what makes it different?" value={form.businessDescription} onChange={(value) => updateForm("businessDescription", value)} />
        </div>
      </div>
    );
  }

  if (active === 1) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Business Website", "Landing Page", "Ecommerce Catalog", "Booking Website", "Portfolio Website", "Agency Website"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => updateForm("websiteType", item)}
              className={`rounded-2xl border p-4 text-left text-sm font-semibold transition ${
                form.websiteType === item
                  ? "border-cyan-300 bg-cyan-300/15 text-cyan-100"
                  : "border-white/10 bg-white/[0.05] text-white hover:border-cyan-300/50 hover:bg-cyan-300/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <TextArea label="Website Goal" placeholder="Generate calls, bookings, enquiries, store orders, portfolio leads..." value={form.websiteGoal} onChange={(value) => updateForm("websiteGoal", value)} />
        <TextArea label="Reference Websites" placeholder="Paste competitor or inspiration links here." value={form.referenceWebsites} onChange={(value) => updateForm("referenceWebsites", value)} />
      </div>
    );
  }

  if (active === 2) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {templateOptions.map((template) => (
            <button
              key={template.id}
              type="button"
              onClick={() => {
                updateForm("selectedTemplate", template.name);
                updateForm("templateId", template.id);
              }}
              className={`rounded-3xl border p-5 text-left transition ${
                form.templateId === template.id
                  ? "border-cyan-300 bg-cyan-300/15 shadow-xl shadow-cyan-950/20"
                  : "border-white/10 bg-white/[0.05] hover:border-white/25"
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                {template.id}
              </div>
              <div className="mt-3 text-lg font-black text-white">{template.name}</div>
              <div className="mt-2 text-sm text-slate-400">{template.fit}</div>
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Selected Template" placeholder="Auto-filled after selecting a template" value={form.selectedTemplate} onChange={(value) => updateForm("selectedTemplate", value)} />
          <Field label="Template ID" placeholder="Example: AG-MOD-01" value={form.templateId} onChange={(value) => updateForm("templateId", value)} />
        </div>
        <TextArea label="Template Notes" placeholder="Mention any section, layout or demo changes needed for this selected template." value={form.templateNotes} onChange={(value) => updateForm("templateNotes", value)} />
      </div>
    );
  }

  if (active === 3) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Primary Color" placeholder="{{primary_color}}" value={form.primaryColor} onChange={(value) => updateForm("primaryColor", value)} />
        <Field label="Secondary Color" placeholder="{{secondary_color}}" value={form.secondaryColor} onChange={(value) => updateForm("secondaryColor", value)} />
        <Field label="Logo" placeholder="{{logo}}" value={form.logo} onChange={(value) => updateForm("logo", value)} />
        <Field label="Preferred Style" placeholder="Premium, minimal, bold, local friendly..." value={form.preferredStyle} onChange={(value) => updateForm("preferredStyle", value)} />
        <div className="md:col-span-2">
          <TextArea label="Brand Inspiration" placeholder="Describe the visual style or paste brand references." value={form.brandInspiration} onChange={(value) => updateForm("brandInspiration", value)} />
        </div>
      </div>
    );
  }

  if (active === 4) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Homepage Headline" placeholder="Main promise or offer" value={form.headline} onChange={(value) => updateForm("headline", value)} />
        <Field label="CTA Preference" placeholder="{{cta}}" value={form.cta} onChange={(value) => updateForm("cta", value)} />
        <TextArea label="Services" placeholder="{{services}}" value={form.services} onChange={(value) => updateForm("services", value)} />
        <TextArea label="Testimonials / Proof" placeholder="Paste client reviews, results, ratings, or trust points." value={form.testimonials} onChange={(value) => updateForm("testimonials", value)} />
      </div>
    );
  }

  if (active === 5) {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-dashed border-cyan-300/40 bg-cyan-300/[0.06] p-8 text-center">
          <UploadCloud className="mx-auto mb-4 text-cyan-200" size={38} />
          <h3 className="text-xl font-bold text-white">Drop files here or browse</h3>
          <p className="mt-2 text-sm text-slate-400">
            Upload logos, gallery images, documents, team photos and brand assets.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {uploadGroups.map((group) => (
            <div key={group} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <FileImage className="mb-3 text-cyan-200" size={20} />
              <div className="font-semibold text-white">{group}</div>
              <div className="mt-1 text-xs text-slate-500">Waiting for upload</div>
            </div>
          ))}
        </div>
        <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-slate-300">
          <input
            type="checkbox"
            checked={form.uploadsConfirmed}
            onChange={(event) => updateForm("uploadsConfirmed", event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900"
          />
          I confirm required files are uploaded or the missing files are clearly noted.
        </label>
      </div>
    );
  }

  if (active === 6) {
    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">
          Credentials are shown as masked frontend fields here. Connect this later to secure storage.
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Domain Provider" placeholder="GoDaddy, Namecheap, Hostinger..." value={form.domainProvider} onChange={(value) => updateForm("domainProvider", value)} />
          <Field label="Hosting Provider" placeholder="Vercel, Hostinger, WordPress..." value={form.hostingProvider} onChange={(value) => updateForm("hostingProvider", value)} />
          <Field label="Website Login" placeholder="Masked username / access note" value={form.websiteLogin} onChange={(value) => updateForm("websiteLogin", value)} />
          <Field label="DNS Notes" placeholder="Masked DNS or access instructions" value={form.dnsNotes} onChange={(value) => updateForm("dnsNotes", value)} />
        </div>
      </div>
    );
  }

  if (active === 7) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Primary Location" placeholder="Hyderabad, Bangalore, Mumbai..." value={form.primaryLocation} onChange={(value) => updateForm("primaryLocation", value)} />
        <Field label="Google Business Profile" placeholder="Paste profile link if available" value={form.googleBusinessProfile} onChange={(value) => updateForm("googleBusinessProfile", value)} />
        <TextArea label="Target Keywords" placeholder="Best clinic in..., website design agency..., restaurant near..." value={form.targetKeywords} onChange={(value) => updateForm("targetKeywords", value)} />
        <TextArea label="Service Areas" placeholder="List cities, areas, or local markets." value={form.serviceAreas} onChange={(value) => updateForm("serviceAreas", value)} />
      </div>
    );
  }

  if (active === 8) {
    return (
      <div className="grid gap-5 lg:grid-cols-3">
        {packages.map((pkg) => (
          <button
            key={pkg.name}
            type="button"
            onClick={() => setSelectedPackage(pkg.name)}
            className={`relative rounded-3xl border p-6 text-left transition ${
              selectedPackage === pkg.name
                ? "border-cyan-300 bg-cyan-300/10 shadow-2xl shadow-cyan-950/30"
                : "border-white/10 bg-white/[0.05] hover:border-white/25"
            }`}
          >
            {pkg.popular && (
              <span className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-950">
                Most Selected
              </span>
            )}
            <div className="text-lg font-bold text-white">{pkg.name}</div>
            <div className="mt-4 text-3xl font-black text-white">{pkg.price}</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
              Demo pricing
            </div>
            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <div>{pkg.pages}</div>
              <div>{pkg.delivery}</div>
              <div>{pkg.revisions}</div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  if (active === 9) {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {["50 percent advance", "30 percent after first preview", "20 percent before final deployment"].map((milestone, index) => (
            <div key={milestone} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div>
                <div className="font-semibold text-white">{milestone}</div>
                <div className="text-xs text-slate-500">Milestone {index + 1}</div>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">Frontend only</span>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
          <div className="text-sm text-slate-400">Selected package</div>
          <div className="mt-1 text-xl font-bold text-white">{selectedPackage}</div>
          <label className="mt-6 flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={form.paymentConfirmed}
              onChange={(event) => updateForm("paymentConfirmed", event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900"
            />
            I confirm the client understands this is demo pricing and payment gateway will be connected later.
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
      <div className="space-y-4">
        {steps.slice(0, 10).map((step, index) => {
          const complete = missingFields(index, form, selectedPackage).length === 0;

          return (
          <div
            key={step}
            className={`flex items-center gap-3 rounded-2xl border p-4 ${
              complete
                ? "border-emerald-300/20 bg-emerald-300/[0.06]"
                : "border-amber-300/20 bg-amber-300/[0.06]"
            }`}
          >
            <CheckCircle2 className={complete ? "text-emerald-300" : "text-amber-300"} size={20} />
            <div className="font-semibold text-white">{step}</div>
          </div>
          );
        })}
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
        <Sparkles className="mb-4 text-cyan-200" size={28} />
        <h3 className="text-2xl font-bold text-white">Ready to submit</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Selected template: {form.selectedTemplate || "Not selected"} ({form.templateId || "No template ID"}). The project brief is structured for AI content generation, template customization and deployment.
        </p>
        <button className="mt-6 w-full rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200">
          Submit Project Brief
        </button>
      </div>
    </div>
  );
}

export default function IntakePage() {
  const [active, setActive] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [selectedPackage, setSelectedPackage] = useState("");
  const missing = missingFields(active, form, selectedPackage);
  const canContinue = missing.length === 0;
  const progress = useMemo(() => Math.round(((active + 1) / steps.length) * 100), [active]);
  const isStepComplete = (index: number) => missingFields(index, form, selectedPackage).length === 0;
  const canOpenStep = (index: number) => {
    if (index <= active) {
      return true;
    }

    for (let stepIndex = 0; stepIndex < index; stepIndex += 1) {
      if (!isStepComplete(stepIndex)) {
        return false;
      }
    }

    return true;
  };

  const updateForm = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
            <ArrowLeft size={16} />
            Back to main site
          </a>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300">
            <ShieldCheck size={16} className="text-cyan-200" />
            Secure frontend intake demo
          </div>
        </div>

        <section className="mb-10 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">
              <Globe2 size={14} />
              Website Project Intake
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Submit everything needed to build your website.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              A guided information retrieval page for business details, template ID, branding, content, uploads, SEO, credentials, package selection and final review.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-300">Completion</span>
              <span className="font-black text-cyan-200">{progress}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-cyan-300 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <Search size={14} />
              Step {active + 1} of {steps.length}: {steps[active]}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
            <div className="mb-4 px-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Intake Steps
            </div>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => {
                    if (canOpenStep(index)) {
                      setActive(index);
                    }
                  }}
                  disabled={!canOpenStep(index)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm transition ${
                    active === index
                      ? "bg-cyan-300 text-slate-950"
                      : canOpenStep(index)
                        ? "text-slate-400 hover:bg-white/10 hover:text-white"
                        : "cursor-not-allowed text-slate-600 opacity-60"
                  }`}
                >
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black ${
                    isStepComplete(index) && index !== active
                      ? "bg-emerald-300 text-slate-950"
                      : active === index
                        ? "bg-slate-950 text-cyan-200"
                        : "bg-white/10 text-slate-400"
                  }`}>
                    {isStepComplete(index) && index !== active ? <Check size={14} /> : index + 1}
                  </span>
                  <span className="font-semibold">{step}</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
            <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-cyan-200">{agency.name}</div>
                <h2 className="mt-2 text-3xl font-black text-white">{steps[active]}</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-slate-300">
                <LockKeyhole size={14} />
                Frontend demo, ready for secure backend later
              </div>
            </div>

            <StepContent
              active={active}
              form={form}
              updateForm={updateForm}
              selectedPackage={selectedPackage}
              setSelectedPackage={setSelectedPackage}
            />

            {!canContinue && (
              <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">
                Complete before continuing: {missing.join(", ")}.
              </div>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
              <button
                onClick={() => setActive((value) => Math.max(0, value - 1))}
                className="rounded-2xl border border-white/10 px-5 py-3 font-semibold text-slate-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={active === 0}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (canContinue) {
                    setActive((value) => Math.min(steps.length - 1, value + 1));
                  }
                }}
                disabled={!canContinue}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
              >
                {active === steps.length - 1 ? "Finish Review" : "Save and Continue"}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
```

## src/components/Navbar.tsx

`$ext
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { agency } from "../data";

const links = [
  { label: "Services", href: "#services" },
  { label: "Demos", href: "#demos" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {agency.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? "text-gray-600" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled ? "text-gray-700 hover:text-blue-600" : "text-white/80 hover:text-white"
              }`}
            >
              Contact
            </a>
            <a
              href={agency.bookingUrl || "#contact"}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-blue-600/25"
            >
              Start Intake
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-b border-gray-100 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={agency.bookingUrl || "#contact"}
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors mt-2"
          >
            Start Intake
          </a>
        </div>
      </div>
    </header>
  );
}
```

## src/components/Hero.tsx

`$ext
import { ArrowRight, ChevronDown } from "lucide-react";
import { agency } from "../data";

const proofPills = [
  "For reseller agencies",
  "White-label fulfillment",
  "Structured intake",
];

function BrowserMockup({
  className,
  color,
  label,
  bars,
}: {
  className?: string;
  color: string;
  label: string;
  bars: number[];
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white ${className}`}
    >
      {/* Browser chrome */}
      <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 h-4 bg-gray-200 rounded-full text-[9px] text-gray-400 flex items-center px-2 truncate">
          launchlayer.in/{label.toLowerCase().replace(/\s/g, "-")}
        </div>
      </div>
      {/* Page content preview */}
      <div className="p-4 space-y-2">
        <div className="h-24 rounded-lg" style={{ backgroundColor: `${color}18` }}>
          <div className="p-3 flex flex-col gap-1.5">
            <div className="h-3 rounded w-2/3" style={{ backgroundColor: color }} />
            <div className="h-2 rounded w-1/2 bg-gray-200" />
            <div className="h-2 rounded w-3/5 bg-gray-200 mt-1" />
            <div
              className="mt-2 h-6 w-20 rounded-md text-white text-[8px] flex items-center justify-center font-semibold"
              style={{ backgroundColor: color }}
            >
              {label}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {bars.map((w, i) => (
            <div
              key={i}
              className="h-12 rounded-md flex-1"
              style={{
                width: `${w}%`,
                backgroundColor: i === 0 ? `${color}22` : "#f3f4f6",
              }}
            />
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="h-2 bg-gray-100 rounded w-full" />
          <div className="h-2 bg-gray-100 rounded w-4/5" />
          <div className="h-2 bg-gray-100 rounded w-3/5" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-950 overflow-hidden flex items-center">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - copy */}
          <div className="space-y-8">
            {/* Proof pills */}
            <div className="flex flex-wrap gap-2">
              {proofPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block" />
                  {pill}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                Sell more websites
                <br />
                <span className="text-cyan-300">without building</span>
                <br />
                every site yourself
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                LaunchLayer Studio gives reseller agencies a white-label production
                engine: template demos, structured client intake, developer-ready briefs
                and fast launch support under your brand.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={agency.bookingUrl || "#contact"}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Start Agency Intake
                <ArrowRight size={16} />
              </a>
              <a
                href="#demos"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                View Production System
              </a>
            </div>

            {/* Mini metrics row */}
            <div className="flex gap-8 pt-2">
              {[
                { v: "50+", l: "Agency Partners" },
                { v: "1-3d", l: "Delivery Window" },
                { v: "10", l: "Template Tracks" },
              ].map((m) => (
                <div key={m.l}>
                  <div className="text-2xl font-bold text-white">{m.v}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{m.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - layered browser mockups */}
          <div className="relative h-[480px] lg:h-[520px] hidden md:block">
            {/* Back card */}
            <BrowserMockup
              className="absolute top-0 right-0 w-72 rotate-3 opacity-60 scale-90"
              color="#06B6D4"
              label="Intake Flow"
              bars={[50, 25, 25]}
            />
            {/* Middle card */}
            <BrowserMockup
              className="absolute top-8 right-8 w-72 -rotate-1 opacity-80 scale-95"
              color="#A855F7"
              label="Template Library"
              bars={[40, 30, 30]}
            />
            {/* Front card - main */}
            <BrowserMockup
              className="absolute top-16 right-16 w-80 z-10"
              color="#2563EB"
              label="Agency Portal"
              bars={[60, 40]}
            />
            {/* Floating badge */}
            <div className="absolute bottom-8 right-0 z-30 bg-white rounded-xl shadow-xl px-4 py-3 border border-gray-100">
              <div className="text-xs text-gray-500 mb-0.5">Latest handoff</div>
              <div className="text-sm font-bold text-gray-900">ScaleMint Media</div>
              <div className="text-xs text-emerald-600 font-medium mt-0.5">
                Client site live in 2 days
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#proof"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
```

## src/components/ProofBand.tsx

`$ext
import { metrics } from "../data";

export default function ProofBand() {
  return (
    <section id="proof" className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
          {metrics.map((m) => (
            <div key={m.label} className="py-10 px-8 text-center lg:text-left">
              <div className="text-4xl font-bold text-white mb-1">{m.value}</div>
              <div className="text-sm text-gray-500">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## src/components/Services.tsx

`$ext
import { Layout, Zap, Monitor, RefreshCw, Search, Smartphone } from "lucide-react";
import { services } from "../data";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Zap,
  Monitor,
  RefreshCw,
  Search,
  Smartphone,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
              What We Deliver
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Built for agencies
              <br />
              <span className="text-gray-400">that ship at scale</span>
            </h2>
          </div>
          <p className="text-lg text-gray-500 leading-relaxed lg:max-w-md lg:ml-auto">
            Every service we offer is designed to remove friction from your delivery workflow, so
            you spend less time wrangling scope and more time growing your client base.
          </p>
        </div>

        {/* Services grid - varied layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            const isLarge = i === 0 || i === 3;
            return (
              <div
                key={s.id}
                className={`bg-white p-8 hover:bg-blue-50/50 transition-colors duration-200 group ${
                  isLarge ? "lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-blue-600 group-hover:text-white transition-colors duration-200"
                      />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 border border-gray-200 px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

## src/components/DemoShowcase.tsx

`$ext
import { ExternalLink } from "lucide-react";
import { agency, demos } from "../data";

function DemoCard({
  niche,
  description,
  packageFit,
  color,
  accentColor,
  previewUrl,
}: (typeof demos)[0]) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1">
      {/* Browser mockup preview */}
      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: accentColor }}>
        {/* Browser chrome bar */}
        <div className="absolute top-3 left-3 right-3 h-7 bg-white/80 backdrop-blur-sm rounded-lg flex items-center px-2.5 gap-1.5 shadow-sm">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 h-3 bg-gray-100 rounded text-[8px] text-gray-400 flex items-center px-2 ml-1">
            demos.nexawebstudio.in/{niche.toLowerCase().replace(/\s/g, "-")}
          </div>
        </div>

        {/* Simulated page content */}
        <div className="absolute top-12 left-3 right-3 space-y-2">
          <div className="h-16 rounded-lg flex items-end pb-3 px-3" style={{ backgroundColor: color }}>
            <div className="space-y-1">
              <div className="h-2.5 w-24 rounded bg-white/40" />
              <div className="h-2 w-16 rounded bg-white/30" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-10 rounded-lg bg-white/60" />
            <div className="flex-1 h-10 rounded-lg bg-white/40" />
            <div className="flex-1 h-10 rounded-lg bg-white/60" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 bg-white/40 rounded w-full" />
            <div className="h-1.5 bg-white/30 rounded w-3/4" />
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-colors duration-300" />
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-gray-900 text-base">{niche}</h3>
          <span
            className="text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0"
            style={{ backgroundColor: `${color}18`, color }}
          >
            {packageFit}
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
        <a
          href={previewUrl || "#demos"}
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 group-hover:gap-2"
          style={{ color }}
        >
          View Demo
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}

export default function DemoShowcase() {
  return (
    <section id="demos" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Template Library
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pick a website style. We'll handle the rest.
          </h2>
          <p className="text-lg text-gray-500">
            Production-ready website styles for the businesses your clients actually serve.
            Each one is customized to the client's brand, content and calls to action.
          </p>
        </div>

        {/* Demo grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((d) => (
            <DemoCard key={d.id} {...d} />
          ))}
        </div>

        {/* CTA below grid */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Don't see your client's niche? Start an intake and we will recommend the closest production template.
          </p>
          <a
            href={agency.bookingUrl}
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Start Project Intake
          </a>
        </div>
      </div>
    </section>
  );
}
```

## src/components/Packages.tsx

`$ext
import { Check, ArrowRight } from "lucide-react";
import { packages, agency } from "../data";

export default function Packages() {
  return (
    <section id="packages" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Website Packages
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, fixed-scope pricing
          </h2>
          <p className="text-lg text-gray-500">
            No surprises. Every package has a defined scope, delivery window and revision count.
            You know exactly what you're reselling before you quote the client.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-8 transition-all duration-200 ${
                pkg.highlight
                  ? "bg-gray-950 text-white shadow-2xl shadow-gray-950/20 scale-[1.02]"
                  : "bg-white border-2 border-gray-100 hover:border-gray-200"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
                    pkg.highlight ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {pkg.name}
                </div>
                <div className="flex items-end gap-2 mb-1">
                  <span
                    className={`text-4xl font-bold ${
                      pkg.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {pkg.price}
                  </span>
                </div>
                <div className={`text-sm ${pkg.highlight ? "text-gray-400" : "text-gray-500"}`}>
                  {pkg.tagline}
                </div>
              </div>

              {/* Specs row */}
              <div
                className={`flex gap-4 py-4 border-y mb-6 ${
                  pkg.highlight ? "border-white/10" : "border-gray-100"
                }`}
              >
                {[
                  { v: pkg.pages, l: "Pages" },
                  { v: pkg.revisions, l: "Revisions" },
                  { v: pkg.delivery, l: "Delivery" },
                ].map((s) => (
                  <div key={s.l} className="flex-1 text-center">
                    <div
                      className={`text-sm font-bold ${
                        pkg.highlight ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {s.v}
                    </div>
                    <div
                      className={`text-[11px] mt-0.5 ${
                        pkg.highlight ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div
                      className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        pkg.highlight ? "bg-blue-600" : "bg-blue-50"
                      }`}
                    >
                      <Check
                        size={10}
                        strokeWidth={3}
                        className={pkg.highlight ? "text-white" : "text-blue-600"}
                      />
                    </div>
                    <span
                      className={`text-sm ${pkg.highlight ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={agency.bookingUrl || "#contact"}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  pkg.highlight
                    ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-600/30"
                    : "border-2 border-gray-200 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                {pkg.cta}
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Need a larger scope? <a href="/intake" className="text-blue-600 hover:underline">Start the intake</a> and we will recommend the right production path.
        </p>
      </div>
    </section>
  );
}
```

## src/components/Process.tsx

`$ext
import { processSteps } from "../data";

export default function Process() {
  return (
    <section id="process" className="bg-gray-950 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="text-xs font-semibold text-emerald-400 tracking-widest uppercase mb-4">
              How It Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Five steps from
              <br />
              <span className="text-gray-500">brief to live site</span>
            </h2>
          </div>
          <p className="text-lg text-gray-400 leading-relaxed lg:max-w-md lg:ml-auto">
            A predictable, repeatable production process that works the same for every client,
            whether you're reselling one site a month or ten.
          </p>
        </div>

        {/* Steps - horizontal timeline for desktop */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative group">
                {/* Step number */}
                <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 flex items-center justify-center">
                      <span className="text-xl font-black text-white/30 group-hover:text-white transition-colors duration-300">
                        {s.step}
                      </span>
                    </div>
                    {/* Connector dot on mobile */}
                    {i < processSteps.length - 1 && (
                      <div className="lg:hidden absolute left-1/2 -bottom-8 w-px h-8 bg-white/10" />
                    )}
                  </div>

                  <div className="lg:mt-6">
                    <h3 className="font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/intake"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/30 text-base"
          >
            Start Your First Project
          </a>
        </div>
      </div>
    </section>
  );
}
```

## src/components/Portfolio.tsx

`$ext
import { portfolioItems, testimonials } from "../data";
import { Quote } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Results & Proof
          </div>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Real agencies.
              <br />
              <span className="text-gray-400">Real results.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed lg:ml-auto lg:max-w-sm">
              Here's what agencies using our service have shipped for their clients and what it
              meant for their business.
            </p>
          </div>
        </div>

        {/* Asymmetric portfolio grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {portfolioItems.map((item, i) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl p-6 ${
                i === 1 ? "lg:row-span-2 lg:pb-8" : ""
              }`}
              style={{ backgroundColor: `${item.color}0E` }}
            >
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: item.color }}
              >
                {item.niche}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3">{item.client}</h3>
              <div
                className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-4 ${
                  i === 1 ? "block mb-6" : ""
                }`}
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {item.package} Package
              </div>
              <div className="pt-3 border-t" style={{ borderColor: `${item.color}20` }}>
                <div className="text-xs text-gray-500 mb-1">Outcome</div>
                <div className="text-sm font-bold text-gray-900">{item.result}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 rounded-2xl p-7 hover:bg-blue-50/50 transition-colors duration-200"
            >
              <Quote size={20} className="text-blue-200 mb-4" />
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
                <div className="ml-auto text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## src/components/BookingCTA.tsx

`$ext
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { agency } from "../data";

export default function BookingCTA() {
  return (
    <section className="bg-blue-600 py-20 lg:py-24 overflow-hidden relative">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-400/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="text-sm font-semibold text-blue-200 tracking-widest uppercase mb-6">
          Ready to Ship?
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Start your next website
          <br />
          project today
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
          Submit your project intake, choose the template style and give us the content needed
          to prepare a fast, polished website preview.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={agency.bookingUrl || "#contact"}
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl text-base"
          >
            <Calendar size={18} />
            Start Project Intake
            <ArrowRight size={15} />
          </a>
          {agency.whatsapp && agency.whatsapp !== "{{whatsapp_number}}" && (
            <a
              href={`https://wa.me/${agency.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          )}
          {(!agency.whatsapp || agency.whatsapp === "{{whatsapp_number}}") && (
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              <MessageCircle size={18} />
              Send Us a Message
            </a>
          )}
        </div>

        <p className="text-sm text-blue-200/70 mt-8">
          No commitment required. We'll scope the project honestly and tell you if it's not the right fit.
        </p>
      </div>
    </section>
  );
}
```

## src/components/Contact.tsx

`$ext
import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { agency } from "../data";

type FormState = {
  name: string;
  email: string;
  business: string;
  niche: string;
  message: string;
};

const niches = [
  "Local Business",
  "Clinic / Healthcare",
  "Restaurant / Food",
  "Real Estate",
  "Salon / Beauty",
  "Agency",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    business: "",
    niche: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real form submission (e.g., Supabase, Formspree, webhook)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - info */}
          <div>
            <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tell us about
              <br />
              your next client
            </h2>
            <p className="text-lg text-gray-500 mb-12 max-w-md leading-relaxed">
              Fill in the form and we'll come back within one business day with a scoping proposal
              and template recommendation.
            </p>

            <div className="space-y-5">
              {[
                { Icon: Mail, label: "Email", value: agency.email },
                { Icon: Phone, label: "Phone", value: agency.phone },
                { Icon: MapPin, label: "Location", value: agency.location !== "{{agency_location}}" ? agency.location : "Remote - worldwide" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                    <div className="text-sm font-medium text-gray-900">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
                <p className="text-gray-500">
                  We'll get back to you within one business day with a proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Mehta"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@agency.in"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Your Agency or Client Business"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Client's Niche
                  </label>
                  <select
                    name="niche"
                    value={form.niche}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a niche</option>
                    {niches.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Project Brief
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about the client, their goals, and any specific requirements..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  Send Project Brief
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## src/components/Footer.tsx

`$ext
import { Zap, Twitter, Linkedin, Instagram } from "lucide-react";
import { agency } from "../data";

const footerLinks = {
  Services: ["Template Production", "White-Label Builds", "SEO Setup", "Launch Support"],
  Templates: ["Local Business", "Clinic", "Restaurant", "Real Estate", "Salon", "Agency"],
  Company: ["About", "Process", "Portfolio", "Pricing", "Contact"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white text-lg">{agency.name}</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              {agency.tagline}
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
                {heading}
              </div>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-white transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Copyright {year} {agency.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-gray-600 hover:text-white transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
```

## src/index.css

`$ext
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    @apply text-gray-900 bg-white;
  }
}

@layer utilities {
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

## src/main.tsx

`$ext
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
