import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Mail,
  MessageCircle,
  Clock,
  Languages,
  Send,
  MapPin,
  ShieldCheck,
  Zap,
  Lock,
  ClipboardCheck,
  ChevronDown,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/lib/reveal";

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "Within 4 business hours, Monday to Saturday.",
  },
  {
    q: "Is the initial consultation really free?",
    a: "Yes — completely free, no commitment required.",
  },
  {
    q: "Can you work with clients outside Pakistan?",
    a: "Yes — 100% remote. We serve clients in UK, USA, UAE, and worldwide.",
  },
  {
    q: "Are my details kept confidential?",
    a: "Absolutely. All communications are protected under advocate-client privilege.",
  },
  {
    q: "What information should I prepare?",
    a: "Just a brief description of what you need. Muhammad Abdullah will guide you from there.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Book Free Consultation | ADVAQ" },
      {
        name: "description",
        content:
          "Book a free consultation with Muhammad Abdullah. Response within 4 business hours. Confidential corporate advisory for UK, USA, UAE & Pakistan.",
      },
      { property: "og:title", content: "Contact ADVAQ & Book Free Consultation" },
      {
        property: "og:description",
        content:
          "Get in touch with Muhammad Abdullah for UK, USA, UAE & Pakistan company formation, tax compliance, and legal drafting.",
      },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/contact" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: ContactPage,
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

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! Muhammad Abdullah will respond within 4 business hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        eyebrow="CONTACT & ADVISORY"
        title="Ready to Take Your Business Global?"
        subtitle="Tell us what you need. Muhammad Abdullah personally reviews every enquiry and responds within 4 hours. Free initial consultation for all new clients."
      />

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* MAIN GRID: FORM + INFO CARDS */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* FORM COLUMN */}
            <Reveal className="lg:col-span-3">
              <div className="bg-off-white border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
                  Book Your Free Consultation
                </h2>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                  No commitment. No hidden fees. Just straight answers from a licensed advocate.
                </p>

                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <Field label="Full Name">
                    <input
                      required
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Muhammad Abdullah"
                    />
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email Address">
                      <input
                        required
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="yourname@domain.com"
                      />
                    </Field>
                    <Field label="WhatsApp Number">
                      <input
                        required
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+92 300 1234567"
                      />
                    </Field>
                  </div>

                  <Field label="Service Interested In">
                    <select required name="service" className="form-input" defaultValue="">
                      <option value="" disabled>
                        What do you need help with?
                      </option>
                      {services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Your Message">
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="form-input"
                      placeholder="Tell us about your situation — the more detail, the better we can help"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full py-4 text-xs font-semibold uppercase tracking-widest disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        GET FREE CONSULTATION <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[13px] text-gray-500 mt-3 leading-relaxed">
                    🔒 Your information is confidential and never shared. Muhammad Abdullah responds personally to every enquiry.
                  </p>
                </form>
              </div>
            </Reveal>

            {/* INFO CARDS COLUMN */}
            <Reveal delay={150} className="lg:col-span-2 space-y-4">
              {/* RESPONSE TIME CARD */}
              <div className="bg-navy-950 text-white rounded-2xl p-6 border border-gold-500/20 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-500">
                      ⚡ RESPONSE TIME
                    </p>
                    <p className="mt-1 text-white font-semibold text-base">Within 4 Business Hours</p>
                    <p className="mt-0.5 text-navy-200 text-xs">Monday to Saturday (9am–6pm PKT)</p>
                  </div>
                </div>
              </div>

              {/* CONFIDENTIAL CARD */}
              <div className="bg-navy-950 text-white rounded-2xl p-6 border border-gold-500/20 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0">
                    <Lock size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-500">
                      🔒 CONFIDENTIAL
                    </p>
                    <p className="mt-1 text-white font-semibold text-base">
                      All enquiries are 100% confidential
                    </p>
                    <p className="mt-0.5 text-navy-200 text-xs">Protected by advocate-client privilege</p>
                  </div>
                </div>
              </div>

              {/* FREE CONSULTATION CARD */}
              <div className="bg-navy-950 text-white rounded-2xl p-6 border border-gold-500/20 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0">
                    <ClipboardCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-500">
                      📋 FREE CONSULTATION
                    </p>
                    <p className="mt-1 text-white font-semibold text-base">
                      No fees for initial consultation
                    </p>
                    <p className="mt-0.5 text-navy-200 text-xs">Get clarity before you commit</p>
                  </div>
                </div>
              </div>

              {/* EMAIL CARD */}
              <div className="bg-navy-900 text-white rounded-2xl p-6 border border-white/10 hover:border-gold-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-navy-200/80">
                      EMAIL ADDRESS
                    </p>
                    <p className="mt-1 text-white font-medium">contact@advaq.com</p>
                    <a
                      href="mailto:contact@advaq.com"
                      className="mt-2 inline-block text-gold-500 text-xs font-semibold uppercase tracking-widest hover:underline"
                    >
                      Send Email →
                    </a>
                  </div>
                </div>
              </div>

              {/* WHATSAPP CARD */}
              <div className="bg-navy-900 text-white rounded-2xl p-6 border border-white/10 hover:border-gold-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-navy-200/80">
                      WHATSAPP NUMBER
                    </p>
                    <p className="mt-1 text-white font-medium">+92 3000 925335</p>
                    <a
                      href="https://wa.me/923000925335"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-gold-500 text-xs font-semibold uppercase tracking-widest hover:underline"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              {/* LOCATION CARD */}
              <div className="bg-navy-900 text-white rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-navy-200/80">
                      BASED IN
                    </p>
                    <p className="mt-1 text-white font-medium">Lahore, Pakistan</p>
                    <p className="mt-0.5 text-navy-200 text-xs">Serving clients across UK, USA & UAE</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* TRUST SECTION BANNER */}
          <Reveal>
            <div className="bg-navy-950 border border-gold-500/30 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute right-0 top-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-4">
                <ShieldCheck size={18} />
                <span>TRUST & ADVOCACY GUARANTEE</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-6">
                🛡️ YOUR ENQUIRY IS SAFE WITH US
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-navy-100">
                <div className="flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10">
                  <span className="text-gold-500 font-bold text-base">✓</span>
                  <span>Punjab Bar Council Licensed Advocate</span>
                </div>
                <div className="flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10">
                  <span className="text-gold-500 font-bold text-base">✓</span>
                  <span>IRS PTIN Registered Tax Preparer</span>
                </div>
                <div className="flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10">
                  <span className="text-gold-500 font-bold text-base">✓</span>
                  <span>SECP & FBR Registered Practitioner</span>
                </div>
                <div className="flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10">
                  <span className="text-gold-500 font-bold text-base">✓</span>
                  <span>200+ Businesses Served Worldwide</span>
                </div>
                <div className="flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10">
                  <span className="text-gold-500 font-bold text-base">✓</span>
                  <span>Advocate-Client Privilege Protected</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FAQ SECTION */}
          <Reveal>
            <div className="pt-8 border-t border-border">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-2">
                  CLIENT ENQUIRIES
                </p>
                <h2 className="font-serif text-2xl md:text-4xl text-dark-text font-semibold flex items-center justify-center gap-2">
                  <HelpCircle className="text-gold-600" size={28} />
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  Quick answers to common client questions regarding initial consultations and remote engagements.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-5 text-left font-sans font-semibold text-navy-950 flex justify-between items-center gap-4 hover:bg-off-white"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-gold-500 shrink-0 transition-transform ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-border/50 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* BOTTOM ALTERNATIVE CTAs */}
          <Reveal>
            <div className="bg-navy-950 text-white rounded-2xl p-10 text-center relative overflow-hidden shadow-2xl">
              <div className="relative max-w-2xl mx-auto space-y-4">
                <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold">
                  DIRECT CONTACT CHANNELS
                </p>
                <h3 className="font-serif text-2xl md:text-4xl text-white font-medium">
                  Prefer to chat directly?
                </h3>
                <p className="text-navy-200 text-sm">
                  Average response time: <strong>Under 4 business hours</strong>
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/923000925335"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
                  >
                    💬 WhatsApp Now
                  </a>
                  <a
                    href="mailto:contact@advaq.com"
                    className="btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
                  >
                    📧 Email Us
                  </a>
                </div>
              </div>
            </div>
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
      <span className="text-[12px] font-semibold uppercase tracking-widest text-dark-text/70">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
