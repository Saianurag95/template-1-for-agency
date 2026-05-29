import { caseStudies, portfolioItems, resultCards, testimonials } from "../data";
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

        <div className="mb-20 grid gap-4 md:grid-cols-3">
          {resultCards.map((card) => (
            <div key={card.label} className="rounded-3xl bg-gray-950 p-7 text-white">
              <div className="mb-2 text-5xl font-black text-cyan-300">{card.value}</div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white/50">{card.label}</div>
              <p className="text-sm leading-6 text-white/60">{card.text}</p>
            </div>
          ))}
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

        <div className="mb-20 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-gray-100 bg-gray-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-200"
            >
              <div
                className="mb-6 inline-flex rounded-full px-4 py-2 text-sm font-black text-white"
                style={{ backgroundColor: item.tone }}
              >
                {item.stat}
              </div>
              <h3 className="mb-3 text-xl font-black text-gray-950">{item.title}</h3>
              <p className="text-sm leading-6 text-gray-500">{item.result}</p>
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
