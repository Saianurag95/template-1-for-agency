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
import { submitIntakeWithRazorpay } from "../payments/razorpay";

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
  const selectedPkg = packages.find((pkg) => pkg.name === selectedPackage);

  const handlePaymentSubmit = () => {
    submitIntakeWithRazorpay({
      templateId: form.templateId || "AG-MOD-01",
      formData: form as unknown as Record<string, unknown>,
      packageName: selectedPkg?.name || selectedPackage || "Starter Website",
      packagePrice: selectedPkg?.price,
      customerName: form.contactPerson,
      customerEmail: form.email,
      customerPhone: form.phone,
      businessName: form.businessName,
    }).catch(() => setActive(steps.length - 1));
  };
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
          <a href={import.meta.env.BASE_URL} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
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
                  if (!canContinue) return;
                  if (active === steps.length - 1) {
                    handlePaymentSubmit();
                    return;
                  }
                  setActive((value) => Math.min(steps.length - 1, value + 1));
                }}
                disabled={!canContinue}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
              >
                {active === steps.length - 1 ? "Pay with Razorpay" : "Save and Continue"}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
