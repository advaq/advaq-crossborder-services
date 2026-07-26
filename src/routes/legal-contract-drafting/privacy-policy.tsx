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
  { q: "What is a Privacy Policy?", a: "A Privacy Policy is a legally required document that explains how your business collects, uses, stores, and protects users' personal data." },
  { q: "Do I legally need a Privacy Policy?", a: "Yes. Almost all global privacy laws (like GDPR, CCPA, and PECR) require any website that collects data (even just via cookies or an email signup) to have a compliant Privacy Policy." },
  { q: "Is this policy GDPR compliant?", a: "Yes, our drafted policies meet the strict transparency and consent requirements set out by the European GDPR." },
  { q: "Does it cover cookies and tracking?", a: "Yes, the policy includes comprehensive sections detailing the use of cookies, analytics, and third-party tracking pixels." },
  { q: "Can I use a free generator instead?", a: "Free generators often produce generic policies that fail to cover your specific data flows, leaving you vulnerable to significant regulatory fines." },
  { q: "What happens if I don't have one?", a: "Regulators can issue massive fines. Furthermore, advertising platforms (like Google and Facebook) and app stores will block or ban your services." },
  { q: "Does the policy cover third-party data sharing?", a: "Absolutely. We clearly stipulate how and why data might be shared with your sub-processors like Stripe, AWS, or Mailchimp." },
  { q: "How do users consent to the policy?", a: "We advise on best practices for obtaining active consent, such as un-checked consent boxes at signup and proper cookie banners." },
  { q: "Will this policy work for a mobile app?", a: "Yes, we can tailor the Privacy Policy to meet the specific requirements of both the Apple App Store and Google Play Store." },
  { q: "How long does it take to prepare?", a: "Once purchased and we understand your data flows, our legal team typically finalizes your custom Privacy Policy within 48-72 hours." },
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
  name: "Privacy Policy Document",
  description: "GDPR and CCPA compliant Privacy Policy drafted for global apps and websites.",
  areaServed: "Global",
  offers: {
    "@type": "Offer",
    price: "69.00",
    priceCurrency: "USD",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy Drafting | Compliant Legal Documents | ADVAQ" },
      { name: "description", content: "Get a GDPR & CCPA compliant Privacy Policy to protect your app or website. Professionally drafted for $69." },
      { name: "keywords", content: "privacy policy, gdpr compliant privacy policy, website legal terms, data protection policy" },
      { property: "og:title", content: "Privacy Policy Drafting | ADVAQ" },
      { property: "og:description", content: "Professionally drafted Privacy Policy. Protect your platform." },
      { property: "og:url", content: "/legal-contract-drafting/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/privacy-policy" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: PrivacyPolicy,
});

function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">Legal Contract Drafting</p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">Privacy Policy</h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">Ensure compliance with GDPR, CCPA, and global data laws. Protect your business from regulatory fines and build user trust with a transparent, legally sound data policy.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">Draft My Policy</Link>
            <a href="https://wa.me/923000925335" target="_blank" rel="noopener noreferrer" className="btn-outline-light rounded-none uppercase tracking-widest">Consult on WhatsApp</a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-gold-500" /> GDPR & CCPA Compliant</span>
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-gold-500" /> App Store Ready</span>
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
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Why is a Privacy Policy Mandatory?</h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">A Privacy Policy is the only document required by law globally. If your website collects an IP address, email, or uses analytics, you are processing personal data.</p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">Regulators mandate that you clearly disclose what data you collect, why you collect it, and who you share it with. Failing to do so triggers severe financial penalties.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20"><Shield size={80} /></div>
                <h3 className="font-serif text-xl text-white mb-4">Key Protections</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span>**Regulatory Shield:** Prevents massive fines from GDPR/CCPA enforcers.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span>**App Approvals:** Required for Google Play and App Store listings.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span>**Ad Accounts:** Prevents Facebook/Google ad account bans.</span></li>
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
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Ignoring Data Privacy Laws</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Data privacy is heavily enforced. Operating without a policy is illegal in almost all jurisdictions.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">Severe Fines</h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">GDPR fines can reach up to €20 million or 4% of your global revenue for failing to provide transparent data policies.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">Platform Bans</h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">Apple and Google routinely reject or remove apps that lack a compliant and clearly accessible Privacy Policy.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">Loss of Trust</h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">Users are increasingly aware of their data rights and will abandon platforms that don't respect their privacy.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatIsIncluded() {
  const inclusions = [
    { title: "Data Collection Details", desc: "Explicitly states what personal data is collected (emails, IP addresses, payment info)." },
    { title: "Purpose of Processing", desc: "Clearly outlines the legal basis and business reason for using user data." },
    { title: "Third-Party Sharing", desc: "Lists categories of third parties (analytics, payment processors) that receive data." },
    { title: "User Rights", desc: "Informs users of their rights to access, rectify, and delete their data under GDPR/CCPA." },
    { title: "Cookie Policy Integration", desc: "Explains the use of tracking technologies and how users can opt-out." },
    { title: "Data Retention", desc: "Details how long data is stored before it is securely deleted." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Policy Inclusions</h2>
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
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$69</span>
            </div>
            <div className="h-px bg-border my-8" />
            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Tailored to your specific data flows</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Delivered in Word & PDF format</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Free revision within 7 days</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Clear instruction guide on implementation</span></div>
            </div>
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center">
              Order Now — $69
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    { title: "Data Audit", desc: "You outline what data you collect and the third-party tools you use." },
    { title: "Drafting", desc: "We structure the policy ensuring full GDPR and CCPA compliance." },
    { title: "Review", desc: "Request adjustments based on specific internal policies." },
    { title: "Finalization", desc: "We finalize the document in an editable format." },
    { title: "Implementation", desc: "Add it to your website footer, signup flow, and app stores." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Drafting Process</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Fast, efficient, and fully customized to your platform's data logic.</p>
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
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Meets strict EU standards for consent, transparency, and the right to be forgotten.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">California CCPA</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Includes required disclosures and "Do Not Sell My Personal Information" provisions for US users.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">UK DPA 2018</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Fully aligned with the UK"s post-Brexit data protection regulations enforced by the ICO.</p>
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
    { title: "Terms of Service", path: "/legal-contract-drafting/terms-of-service", desc: "Protect your platform with robust user terms and conditions." },
    { title: "Data Processing Agreement", path: "/legal-contract-drafting/data-processing-agreement", desc: "Mandatory compliance for B2B data processing." },
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
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">Avoid Regulatory Fines.</h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">Secure your business and build trust with your users through a compliant, professionally drafted Privacy Policy.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm">Draft Policy Now →</Link>
            <a href="https://wa.me/923000925335" target="_blank" rel="noopener noreferrer" className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm">WhatsApp Us Directly</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
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
