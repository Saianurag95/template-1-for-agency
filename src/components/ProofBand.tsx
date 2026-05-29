import { metrics, trustLogos } from "../data";

export default function ProofBand() {
  return (
    <section id="proof" className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="overflow-hidden border-b border-white/5 py-6">
          <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-gray-600">
            Agencies using the production system
          </div>
          <div className="flex min-w-max animate-[marquee_22s_linear_infinite] gap-4">
            {[...trustLogos, ...trustLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white/70"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
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
