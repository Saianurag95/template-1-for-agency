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
