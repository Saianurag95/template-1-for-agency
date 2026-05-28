import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { agency } from "../data";

export default function BookingCTA() {
  return (
    <section className="bg-blue-600 py-20 lg:py-24 overflow-hidden relative">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-400/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="text-sm font-semibold text-blue-200 tracking-widest uppercase mb-6">
          Ready to Ship?
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Start your next website
          <br />
          project today
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">
          Submit your project intake, choose the template style and give us the content needed
          to prepare a fast, polished website preview.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={agency.bookingUrl || "#contact"}
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl text-base"
          >
            <Calendar size={18} />
            Start Project Intake
            <ArrowRight size={15} />
          </a>
          {agency.whatsapp && agency.whatsapp !== "{{whatsapp_number}}" && (
            <a
              href={`https://wa.me/${agency.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          )}
          {(!agency.whatsapp || agency.whatsapp === "{{whatsapp_number}}") && (
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              <MessageCircle size={18} />
              Send Us a Message
            </a>
          )}
        </div>

        <p className="text-sm text-blue-200/70 mt-8">
          No commitment required. We'll scope the project honestly and tell you if it's not the right fit.
        </p>
      </div>
    </section>
  );
}
