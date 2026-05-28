import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { agency } from "../data";

const links = [
  { label: "Services", href: "#services" },
  { label: "Demos", href: "#demos" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#portfolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {agency.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? "text-gray-600" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled ? "text-gray-700 hover:text-blue-600" : "text-white/80 hover:text-white"
              }`}
            >
              Contact
            </a>
            <a
              href={agency.bookingUrl || "#contact"}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-blue-600/25"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-b border-gray-100 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={agency.bookingUrl || "#contact"}
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors mt-2"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
