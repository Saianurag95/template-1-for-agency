import { Layout, Zap, Monitor, RefreshCw, Search, Smartphone } from "lucide-react";
import { services, specialities } from "../data";

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
                className={`bg-white p-8 hover:bg-blue-50/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-100 ${
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
                <div className="mt-6 text-sm font-bold text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl bg-gray-950 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Our Specialities
              </div>
              <h3 className="text-3xl font-black text-white">
                Built like a production system, not a one-off agency site.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {specialities.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
