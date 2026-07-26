import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Clock, Languages, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/lib/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | ADVAQ" },
      { name: "description", content: "Get in touch for UK or US company formation and tax services. We respond within 24 hours." },
      { property: "og:title", content: "Contact ADVAQ" },
      { property: "og:description", content: "Get in touch for UK or US company formation and tax services." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const services = [
  "UK LTD Incorporation",
  "Self Assessment Tax Return",
  "Company Annual Accounts",
  "Confirmation Statement",
  "Payroll Services",
  "VAT Registration",
  "USA LLC Incorporation",
  "EIN Number Registration",
  "BOI Report (FinCEN)",
  "ITIN Application",
  "US Tax Return (1040/1065/1120)",
  "SECP Company Registration",
  "NTN & FBR Registration",
  "PSEB Registration",
  "Income Tax Return Filing (Pakistan)",
  "FBR Notice Response",
  "Freelancer Certificate (MoITT)",
  "NDA / Non-Disclosure Agreement",
  "Freelance Service Agreement",
  "IP Assignment Agreement",
  "Master Service Agreement (MSA)",
  "IT Outsourcing Agreement",
  "Privacy Policy & Terms of Service",
  "Legal Consultation",
  "Other / Not Sure",
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Your Business Together"
        subtitle="Tell us what you need and Muhammad Abdullah will personally respond within a few hours. Free initial consultation for all new enquiries."
      />

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-3">
            <div className="bg-off-white border border-border rounded-2xl p-9">
              <h2 className="font-serif text-3xl text-dark-text">Send us a message</h2>
              <p className="mt-2 text-gray-500 text-sm">All fields required. We never share your details.</p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <Field label="Full Name">
                  <input required name="name" type="text" className="form-input" placeholder="John Smith" />
                </Field>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email Address">
                    <input required name="email" type="email" className="form-input" placeholder="you@example.com" />
                  </Field>
                  <Field label="WhatsApp Number">
                    <input required name="phone" type="tel" className="form-input" placeholder="+92 300 1234567" />
                  </Field>
                </div>
                <Field label="Service Interested In">
                  <select required name="service" className="form-input" defaultValue="">
                    <option value="" disabled>Choose a service…</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Your Message">
                  <textarea required name="message" rows={5} className="form-input" placeholder="Tell us a bit about your business and what you need." />
                </Field>
                <button type="submit" disabled={submitting} className="btn-gold w-full disabled:opacity-70">
                  {submitting ? "Sending…" : <>Send Message <Send size={16} /></>}
                </button>
                <p className="text-center text-[13px] text-gray-500 mt-3">
                  🔒 Your information is confidential and never shared. Muhammad Abdullah responds personally to every enquiry.
                </p>
              </form>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2 space-y-5">
            {([
              { Icon: Mail, t: "Email", v: "contact@advaq.com", a: "mailto:contact@advaq.com", cta: "Send email" },
              { Icon: MessageCircle, t: "WhatsApp", v: "+92 3000 925335", a: "https://wa.me/923000925335", cta: "Chat on WhatsApp" },
              { Icon: Clock, t: "Hours", v: "Mon–Sat, 9am–9pm PKT" },
              { Icon: Languages, t: "Language Support", v: "English & Urdu — we serve clients worldwide" },
              { Icon: MapPin, t: "Based In", v: "Lahore, Pakistan", sub: "Serving clients in UK, US & worldwide" },
            ] as Array<{ Icon: typeof Mail; t: string; v: string; a?: string; cta?: string; sub?: string }>).map((c) => (
              <div key={c.t} className="bg-navy-900 text-white rounded-2xl p-7 border border-white/5 hover:border-gold-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-lg text-gold-500 shrink-0">
                    <c.Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="label-eyebrow !text-navy-200/80 !text-[11px]">{c.t}</p>
                    <p className="mt-1.5 text-white">{c.v}</p>
                    {c.sub && <p className="mt-1 text-navy-200 text-sm">{c.sub}</p>}
                    {c.a && (
                      <a href={c.a} className="mt-3 inline-block text-gold-500 text-sm font-semibold uppercase tracking-widest border-b border-transparent hover:border-gold-500 pb-0.5">
                        {c.cta} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.85rem 1rem;
          background: white;
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          font-size: 15px;
          color: var(--color-dark-text);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          font-family: inherit;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-gold-500);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-gold-500) 18%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[12px] font-semibold uppercase tracking-widest text-dark-text/70">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
