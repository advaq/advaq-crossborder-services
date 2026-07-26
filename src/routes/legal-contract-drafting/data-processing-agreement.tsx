import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  CheckCircle,
  ChevronDown,
  Shield,
  HelpCircle,
  Clock,
  Briefcase,
  FileText,
  BadgeAlert,
  Building2,
  Lock,
  Globe,
  CreditCard,
  Percent,
  Coins,
  Scale,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  { q: "What is a Data Processing Agreement (DPA)?", a: "A DPA is a legally binding contract between a data controller (usually the business) and a data processor (usually a B2B service or SaaS) outlining how personal data is handled and protected." },
  { q: "Is a DPA legally required?", a: "Yes, under Article 28 of the GDPR, whenever a data controller engages a data processor, a written DPA is strictly required by law." },
  { q: "What happens if I don't have one?", a: "Processing data without a DPA is a direct violation of GDPR, making both parties liable for massive fines and regulatory action." },
  { q: "Who needs to sign a DPA?", a: "Any B2B company, SaaS platform, marketing agency, or hosting provider that handles personal data on behalf of clients needs a DPA." },
  { q: "Does the DPA cover international data transfers?", a: "Yes, our DPAs include Standard Contractual Clauses (SCCs) to legalize the transfer of EU data to countries outside the EEA." },
  { q: "How is a DPA different from a Privacy Policy?", a: "A Privacy Policy informs end-users (B2C) about data collection. A DPA governs the relationship between two businesses (B2B) handling that data." },
  { q: "Does the DPA require security audits?", a: "Yes, standard DPAs include clauses requiring the processor to implement robust security and allow the controller to audit compliance." },
  { q: "What if there is a data breach?", a: "The DPA explicitly defines the processor's obligation to notify the controller immediately (usually within 24-48 hours) upon discovering a breach." },
  { q: "Can I use a generic template?", a: "Generic templates often fail to accurately describe your specific sub-processors or security measures, rendering them legally invalid." },
  { q: "How long does it take to prepare?", a: "Once purchased, our legal team drafts your custom Data Processing Agreement within 48-72 hours." },
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
  serviceType: "Legal Contract Drafting",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Data Processing Agreement",
  description: "GDPR compliant Data Processing Agreement (DPA) tailored for B2B SaaS and service providers.",
  areaServed: "Global",
  offers: {
    "@type": "Offer",
    price: "79.00",
    priceCurrency: "USD",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/data-processing-agreement")({
  head: () => ({
    meta: [
      { title: "Data Processing Agreement (DPA) Drafting | ADVAQ" },
      { name: "description", content: "Get a GDPR-compliant Data Processing Agreement (DPA) to legally handle client data. Professionally drafted for $79." },
      { name: "keywords", content: "data processing agreement, dpa contract, gdpr dpa, data processing addendum, b2b data contract" },
      { property: "og:title", content: "Data Processing Agreement (DPA) | ADVAQ" },
      { property: "og:description", content: "Professionally drafted Data Processing Agreement." },
      { property: "og:url", content: "/legal-contract-drafting/data-processing-agreement" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/data-processing-agreement" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: DataProcessingAgreement,
});

function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">Legal Contract Drafting</p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">Data Processing Agreement</h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">Fulfill GDPR B2B requirements. Implement a compliant DPA to legally process client data, establish clear security obligations, and utilize standard contractual clauses.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">Draft My DPA</Link>
            <a href="https://wa.me/923000925335" target="_blank" rel="noopener noreferrer" className="btn-outline-light rounded-none uppercase tracking-widest">Consult on WhatsApp</a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-gold-500" /> Article 28 GDPR Compliant</span>
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-gold-500" /> Includes EU SCCs</span>
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-gold-500" /> Delivered in 48 Hours</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>THE ESSENTIALS</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Why is a DPA Required?</h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">If you are a SaaS, agency, or B2B service handling data on behalf of clients, GDPR mandates a written Data Processing Agreement to ensure that data is handled securely and solely for the intended purpose.</p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">A solid DPA protects you from liability by clearly defining boundaries, outlining breach notification procedures, and verifying your sub-processors.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20"><Shield size={80} /></div>
                <h3 className="font-serif text-xl text-white mb-4">Key Protections</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span>**Legal Compliance:** Meets GDPR Article 28 requirements.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span>**Liability Boundaries:** Limits liability for sub-processor failures.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span>**Enterprise Sales:** Essential for closing deals with B2B clients.</span></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Processing Data Without a DPA</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">For B2B businesses, lacking a DPA is a fatal compliance gap that halts enterprise sales and invites fines.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">Blocked Sales Deals</h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">Enterprise and European clients will refuse to sign contracts with your business if you cannot provide a compliant DPA.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">Regulatory Fines</h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">Processing data without a DPA is a direct GDPR violation, subjecting you to significant administrative fines.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">Uncapped Liability</h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">If a data breach occurs without a DPA defining liability, your business could be sued for the full extent of the damages.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatIsIncluded() {
  const inclusions = [
    { title: "Scope of Processing", desc: "Defines exactly what data is processed and for what permitted purpose." },
    { title: "Security Measures", desc: "Detailed technical and organizational measures (TOMs) required to protect data." },
    { title: "Sub-Processor Lists", desc: "Authorization clauses for third-party vendors handling the data (e.g., AWS)." },
    { title: "Breach Notification", desc: "Strict timelines and procedures for notifying clients of a data incident." },
    { title: "Audit Rights", desc: "Governs how and when clients can request audits of your data security." },
    { title: "Standard Contractual Clauses", desc: "Incorporates EU SCCs to legalize cross-border data transfers." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Contract Inclusions</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Every clause is structured to satisfy international regulatory standards.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <FileText className="text-gold-500 mb-4" size={24} />
                <h3 className="font-sans text-[18px] font-semibold text-dark-text">{inc.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{inc.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">One-Time Drafting Fee</h2>
        </Reveal>
        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">Premium Draft</span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE MANAGED DRAFTING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$79</span>
            </div>
            <div className="h-px bg-border my-8" />
            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Tailored to your sub-processors</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Delivered in Word & PDF format</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Free revision within 7 days</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Clear instruction guide on implementation</span></div>
            </div>
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center">
              Order Now — $79
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    { title: "Audit", desc: "You provide a list of your data sub-processors and security measures." },
    { title: "Drafting", desc: "We structure the DPA ensuring full GDPR compliance." },
    { title: "Review", desc: "Request adjustments based on enterprise client requirements." },
    { title: "Finalization", desc: "We finalize the document in an editable format." },
    { title: "Execution", desc: "Attach it to your master service agreements." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Drafting Process</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Fast, efficient, and fully customized to your platform's infrastructure.</p>
        </Reveal>
        <div className="grid md:grid-cols-5 gap-8 mt-12">
          {steps.map((st, idx) => (
            <Reveal key={st.title}>
              <div className="text-center px-2">
                <div className="w-16 h-16 rounded-full border border-gold-500 flex items-center justify-center mx-auto mb-4 bg-gold-500/5">
                  <span className="font-serif text-2xl text-gold-500">{idx + 1}</span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-dark-text mt-2">{st.title}</h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>COMPLIANCE STANDARDS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">Global Privacy Frameworks</h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">Built to satisfy the world"s strictest data protection authorities.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Scale className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">European GDPR</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Meets strict EU standards for Article 28 data processing.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Standard Contractual Clauses</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Integrates modern EU SCCs for legal cross-border data transfer.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">UK GDPR</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Fully aligned with the UK"s ICO requirements for international data pipelines.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FAQAccordionItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full py-6 text-left text-lg font-medium text-white hover:text-gold-500 transition-colors focus:outline-none">
        <span className="pr-6">{q}</span>
        <ChevronDown size={20} className={`text-gold-500 shrink-0 transform transition-transform duration-300 ${isOpen ? `rotate-180` : ``}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? `grid-rows-[1fr] opacity-100 pb-6` : `grid-rows-[0fr] opacity-0`}`}>
        <div className="overflow-hidden"><p className="text-navy-200 text-base leading-relaxed font-sans">{a}</p></div>
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <section className="bg-navy-950 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>FAQ</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-white mt-4">Frequently Asked Questions</h2>
        </Reveal>
        <Reveal>
          <div className="w-full divide-y divide-white/10">
            {faqs.map((f, i) => <FAQAccordionItem key={i} q={f.q} a={f.a} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RelatedServices() {
  const services = [
    { title: "Privacy Policy", path: "/legal-contract-drafting/privacy-policy", desc: "Compliant privacy policies for data handling." },
    { title: "Terms of Service", path: "/legal-contract-drafting/terms-of-service", desc: "Protect your platform with robust user terms and conditions." },
    { title: "Employee NDA", path: "/legal-contract-drafting/employee-confidentiality-agreement", desc: "Secure internal data with non-disclosure agreements." },
  ];
  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>RELATED CONTRACTS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Other Legal Documents</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <Link to={s.path} className="mt-6 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest hover:gap-2.5 transition-all">
                  View Contract Details <ArrowRight size={12} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">STAY COMPLIANT</p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">Don't Process Data Without a DPA.</h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">Secure your B2B sales and build trust with your clients through a compliant, professionally drafted Data Processing Agreement.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm">Draft DPA Now →</Link>
            <a href="https://wa.me/923000925335" target="_blank" rel="noopener noreferrer" className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm">WhatsApp Us Directly</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function DataProcessingAgreement() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <BankingIntegrations />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
