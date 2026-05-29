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
          Need a larger scope? <a href="#intake" className="text-blue-600 hover:underline">Start the intake</a> and we will recommend the right production path.
        </p>
      </div>
    </section>
  );
}
