import { Zap, Twitter, Linkedin, Instagram } from "lucide-react";
import { agency } from "../data";

const footerLinks = {
  Services: ["Template Production", "White-Label Builds", "SEO Setup", "Launch Support"],
  Templates: ["Local Business", "Clinic", "Restaurant", "Real Estate", "Salon", "Agency"],
  Company: ["About", "Process", "Portfolio", "Pricing", "Contact"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white text-lg">{agency.name}</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              {agency.tagline}
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
                {heading}
              </div>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-white transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Copyright {year} {agency.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm text-gray-600 hover:text-white transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
