import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { agency } from "../data";

type FormState = {
  name: string;
  email: string;
  business: string;
  niche: string;
  message: string;
};

const niches = [
  "Local Business",
  "Clinic / Healthcare",
  "Restaurant / Food",
  "Real Estate",
  "Salon / Beauty",
  "Agency",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    business: "",
    niche: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real form submission (e.g., Supabase, Formspree, webhook)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - info */}
          <div>
            <div className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tell us about
              <br />
              your next client
            </h2>
            <p className="text-lg text-gray-500 mb-12 max-w-md leading-relaxed">
              Fill in the form and we'll come back within one business day with a scoping proposal
              and template recommendation.
            </p>

            <div className="space-y-5">
              {[
                { Icon: Mail, label: "Email", value: agency.email },
                { Icon: Phone, label: "Phone", value: agency.phone },
                { Icon: MapPin, label: "Location", value: agency.location !== "{{agency_location}}" ? agency.location : "Remote - worldwide" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                    <div className="text-sm font-medium text-gray-900">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
                <p className="text-gray-500">
                  We'll get back to you within one business day with a proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Mehta"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@agency.in"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Your Agency or Client Business"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Client's Niche
                  </label>
                  <select
                    name="niche"
                    value={form.niche}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a niche</option>
                    {niches.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Project Brief
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about the client, their goals, and any specific requirements..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  Send Project Brief
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
