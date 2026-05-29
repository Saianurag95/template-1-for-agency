import { ArrowRight, ChevronDown } from "lucide-react";
import { agency } from "../data";

const proofPills = [
  "For reseller agencies",
  "White-label fulfillment",
  "Structured intake",
  "Razorpay online payment",
];

const floatingProof = [
  { label: "Websites Delivered", value: "200+" },
  { label: "Delivery Window", value: "1-3d" },
  { label: "Starting", value: "Rs 6,000" },
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
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[0.88] tracking-tight">
                The
                <br />
                Best
                <br />
                <span className="text-cyan-300">Website</span>
                <br />
                Engine.
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
            <div className="absolute left-0 bottom-20 z-30 grid gap-2">
              {floatingProof.map((item, index) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white shadow-2xl backdrop-blur-xl"
                  style={{ transform: `translateX(${index * 18}px)` }}
                >
                  <div className="text-2xl font-black">{item.value}</div>
                  <div className="text-[11px] text-white/60">{item.label}</div>
                </div>
              ))}
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
