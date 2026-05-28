import { ExternalLink } from "lucide-react";
import { demos } from "../data";

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
            demo.launchcraft.co/{niche.toLowerCase().replace(/\s/g, "-")}
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
            Pick a niche. We'll handle the rest.
          </h2>
          <p className="text-lg text-gray-500">
            Six production-ready website templates built for the niches your clients are actually in.
            Each one is customised to your client's brand, not just swapped out.
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
            Don't see your client's niche? We build custom layouts too.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Ask About Custom Niches
          </a>
        </div>
      </div>
    </section>
  );
}
