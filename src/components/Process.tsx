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
            A predictable, repeatable production process that works the same for every client
            — whether you're reselling one site a month or ten.
          </p>
        </div>

        {/* Steps — horizontal timeline for desktop */}
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
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/30 text-base"
          >
            Start Your First Project
          </a>
        </div>
      </div>
    </section>
  );
}
