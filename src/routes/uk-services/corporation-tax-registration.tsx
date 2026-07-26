import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  FileText,
  AlertTriangle,
  Scale,
  Calculator,
  PoundSterling,
  Receipt,
  PiggyBank,
  Landmark
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is UK Corporation Tax Registration?",
    a: "Every UK Limited Company must register for Corporation Tax with HM Revenue & Customs (HMRC) within 3 months of starting business activities. Registration sets up your company tax account and ensures you receive official tax notices and filing deadlines.",
  },
  {
    q: "When must I register for Corporation Tax?",
    a: "You must register with HMRC within 3 months of starting to trade, employ people, buy/sell goods, or provide services through your UK company.",
  },
  {
    q: "Is Corporation Tax Registration automatic when I form a UK LTD?",
    a: "Companies House automatically notifies HMRC when a company is registered, but you must still complete the Corporation Tax registration on EmaraTax / HMRC Government Gateway to activate your company tax account.",
  },
  {
    q: "What information is needed to register?",
    a: "We need your UK Limited Company name, registration number (CRN), date trading started, and registered office address details.",
  },
  {
    q: "What happens if I don't register on time?",
    a: "Failure to register for Corporation Tax within 3 months of trading can result in automatic HMRC penalties and delays in receiving official tax references.",
  }
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "UK Corporation Tax Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UK Corporation Tax Registration Service",
  description:
    "Official HMRC Corporation Tax registration for UK Limited Companies. Setup your company tax UTR and Government Gateway access.",
  areaServed: "Worldwide",
  url: "https://[yourdomain.com]/uk-services/corporation-tax-registration",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "GBP",
    description: "Corporation Tax Registration from £149.",
  },
};

export const Route = createFileRoute("/uk-services/corporation-tax-registration")({
  head: () => ({
    meta: [
      { title: "UK Corporation Tax Registration Service | ADVAQ" },
      {
        name: "description",
        content:
          "Official HMRC Corporation Tax registration for UK Limited Companies. Setup your company tax UTR and Government Gateway access fast.",
      },
      {
        name: "keywords",
        content:
          "uk corporation tax registration, hmrc tax setup, register company for tax uk, hmrc tax utr, uk business tax setup",
      },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/corporation-tax-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: CorporationTaxRegistration,
});

/* ---------- SECTION 1: HERO ---------- */
function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">
            💷 HMRC TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            HMRC Corporation Tax Registration
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Register your UK Limited Company with HMRC within 3 months of trading. Setup your official company tax account and ensure full statutory compliance from day one.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Register Now — £149
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Ask on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQAccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left text-white font-serif text-lg md:text-xl font-medium focus:outline-none"
      >
        <span>{q}</span>
        <ChevronDown
          size={20}
          className={`text-gold-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="mt-3 text-navy-200 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

function FAQSection() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>FAQ</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-white mt-4">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal>
          <div className="w-full divide-y divide-white/10">
            {faqs.map((f, i) => (
              <FAQAccordionItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function CorporationTaxRegistration() {
  return (
    <div className="page-transition">
      <Hero />
      <FAQSection />
    </div>
  );
}
