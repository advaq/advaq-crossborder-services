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
  Building2,
  Lock,
  Globe,
  CreditCard,
  Percent,
  Coins,
  Scale,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  { q: "What is a Terms of Service agreement?", a: "A Terms of Service (ToS) agreement is a legal contract between a service provider and a user who wants to use that service, outlining the rules, rights, and responsibilities of both parties." },
  { q: "Why does my website or app need a ToS?", a: "It protects your business from liability, outlines acceptable use, establishes intellectual property ownership, and provides grounds for terminating abusive users." },
  { q: "Is this ToS suitable for SaaS platforms?", a: "Yes, our ToS agreements can be specifically tailored for Software as a Service (SaaS) businesses, including subscription terms and service level clauses." },
  { q: "Can a ToS prevent users from copying my content?", a: "Yes, it includes intellectual property clauses that explicitly prohibit users from scraping, copying, or reverse-engineering your platform." },
  { q: "Does the agreement cover payment and refund policies?", a: "Absolutely. We ensure your billing cycle, cancellation rules, and refund limitations are clearly legally enforced." },
  { q: "How do I enforce the Terms of Service?", a: "Users typically agree by checking a box or using your service (clickwrap/browsewrap). We ensure your implementation method creates a legally binding agreement." },
  { q: "What happens if a user breaches the terms?", a: "The agreement grants you the right to suspend or permanently terminate their account and pursue damages if necessary." },
  { q: "Does it limit my legal liability?", a: "Yes, a core function of the ToS is to cap your liability for damages or service outages, protecting your business from ruinous lawsuits." },
  { q: "Is this agreement legally binding globally?", a: "We include governing law and jurisdiction clauses so that disputes must be resolved in a jurisdiction favorable to your business." },
  { q: "How long does it take to prepare the agreement?", a: "Once purchased, our legal team typically finalizes your custom Terms of Service within 48-72 hours, depending on complexity." },
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
  name: "Terms of Service Agreement",
  description: "Comprehensive Terms of Service tailored for digital platforms, SaaS, and e-commerce.",
  areaServed: "Global",
  offers: {
    "@type": "Offer",
    price: "79.00",
    priceCurrency: "USD",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service Agreement | ADVAQ" },
      { name: "description", content: "Get a legally binding Terms of Service agreement to protect your app or website. Professionally drafted for $79." },
      { name: "keywords", content: "terms of service, tos agreement, terms and conditions, saas contract, website legal terms" },
      { property: "og:title", content: "Terms of Service Agreement | ADVAQ" },
      { property: "og:description", content: "Professionally drafted Terms of Service. Protect your platform." },
      { property: "og:url", content: "/legal-contract-drafting/terms-of-service" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/terms-of-service" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: TermsOfService,
});

function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">Legal Contract Drafting</p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">Terms of Service Agreement</h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">Shield your software, SaaS, or digital platform from abuse. Comprehensive liability caps, clear payment terms, and strict user rules expertly drafted.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">Draft My Agreement</Link>
            <a href="https://wa.me/923000925335" target="_blank" rel="noopener noreferrer" className="btn-outline-light rounded-none uppercase tracking-widest">Consult on WhatsApp</a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-gold-500" /> Liability Limitations</span>
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-gold-500" /> Custom SaaS Terms</span>
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
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">What is a Terms of Service?</h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">A Terms of Service (ToS) acts as the fundamental contract between your business and your users. It dictates exactly how your platform may be used and under what conditions.</p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">Without a robust ToS, you leave your business exposed to copyright infringement, service abuse, and devastating lawsuits from disgruntled users.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20"><Shield size={80} /></div>
                <h3 className="font-serif text-xl text-white mb-4">Key Protections</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span><strong className="font-semibold">Liability Caps:</strong> Drastically limits financial exposure.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span><strong className="font-semibold">Account Termination:</strong> Legal right to ban abusive users.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span><strong className="font-semibold">IP Security:</strong> Prevents copying of your platform.</span></li>
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
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Launching Without a ToS</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Operating a digital platform without solid legal terms is reckless and invites endless disputes.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Unlimited Liability
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If your platform experiences downtime or a bug that costs a user money, you could be sued for the entire amount.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Inability to Ban Users
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a ToS granting you termination rights, banning toxic or abusive users can lead to discrimination lawsuits.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Payment Chargebacks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Payment processors (like Stripe) require a ToS to fight chargebacks. Without it, you automatically lose disputes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatIsIncluded() {
  const inclusions = [
    { title: "Intellectual Property Rights", desc: "Explicitly states that your business retains full ownership of the platform's code, design, and content." },
    { title: "Billing & Subscriptions", desc: "Governs recurring payments, free trials, and your absolute refund policy." },
    { title: "Intellectual Property Rights", desc: "Explicitly states that your business retains full ownership of the platform's code, design, and content.", },
    { title: "Limitation of Liability", desc: "Legally caps your financial responsibility in case of service failure." },
    { title: "Termination Clauses", desc: "Grants you the right to suspend or delete accounts at your sole discretion." },
    { title: "Dispute Resolution", desc: "Requires mandatory arbitration or specific jurisdictions for legal claims." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Contract Inclusions</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Every clause is structured to protect your platform from legal vulnerabilities.</p>
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
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Tailored to your specific industry</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Delivered in Word & PDF format</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Free revision within 7 days</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Clear instruction guide on usage</span></div>
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
    { title: "Briefing", desc: "Explain how your platform works and monetizes." },
    { title: "Drafting", desc: "We structure the agreement with robust protections." },
    { title: "Review", desc: "Request adjustments based on your edge cases." },
    { title: "Finalization", desc: "We finalize the document in an editable format." },
    { title: "Implementation", desc: "Add it to your website footer and signup flow." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Drafting Process</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Fast, efficient, and fully customized to your platform's logic.</p>
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
          <SectionLabel center>CONTRACT PROTECTIONS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">Core Legal Safeguards</h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">Ensure comprehensive coverage against operational vulnerabilities.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Scale className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Jurisdiction Control</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Forces users to sue you in your home jurisdiction, deterring frivolous lawsuits from overseas.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Chargeback Defense</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Iron-clad refund policies that payment processors recognize as valid defenses in disputes.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Class Action Waiver</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Prevents users from grouping together in massive, business-destroying class action lawsuits.</p>
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
    { title: "Data Processing Agreement", path: "/legal-contract-drafting/data-processing-agreement", desc: "Mandatory compliance for B2B data processing." },
    { title: "Independent Contractor Agreement", path: "/legal-contract-drafting/independent-contractor-agreement", desc: "Secure your business when hiring freelancers." },
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
              <Link to={s.path as any} className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full hover:border-gold-500/50 hover:shadow-lg transition-all duration-300 group block">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text group-hover:text-gold-600 transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">View Contract Details <ArrowRight size={12} /></div>
              </Link>
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
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">PROTECT YOUR PLATFORM</p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">Don't Launch Without a ToS.</h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">Secure your intellectual property, define expectations, and limit liability with our professionally drafted Terms of Service.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm">Draft Contract Now →</Link>
            <a href="https://wa.me/923000925335" target="_blank" rel="noopener noreferrer" className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm">WhatsApp Us Directly</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function TermsOfService() {
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
