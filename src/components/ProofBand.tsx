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
