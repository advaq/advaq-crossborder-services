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
  { q: "What is an Employment Contract?", a: "An Employment Contract is a legally binding agreement between an employer and an employee detailing the terms of employment, compensation, and duties." },
  { q: "Do I need a written Employment Contract?", a: "Yes, a written contract provides clarity, meets statutory requirements in most jurisdictions, and protects both the employer and employee from disputes." },
  { q: "Can I include a probation period?", a: "Yes, our Employment Contracts include customizable probationary period clauses that allow you to assess the employee's performance before confirming permanent status." },
  { q: "Are working hours and overtime covered?", a: "Yes, the contract explicitly defines standard working hours, break times, and the policy regarding overtime compensation." },
  { q: "Does this cover employee benefits?", a: "Absolutely. The agreement includes sections for detailing statutory and supplementary benefits like health insurance and pension contributions." },
  { q: "What about termination and notice periods?", a: "The contract clearly states the required notice periods for resignation or termination, protecting your business from sudden departures." },
  { q: "Is confidentiality included?", a: "Yes, it contains a robust confidentiality clause preventing the employee from sharing trade secrets during and after employment." },
  { q: "What happens to intellectual property created by the employee?", a: "The contract ensures that any IP created during the course of employment automatically belongs to the employer." },
  { q: "Can I use this for remote employees?", a: "Yes, our agreements can be tailored for remote or hybrid work arrangements, including data security requirements for home offices." },
  { q: "How long does it take to prepare the agreement?", a: "Once you purchase and provide your specific details, our legal team typically finalizes your custom agreement within 48 hours." },
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
  name: "Employment Contract",
  description: "Professionally drafted Employment Contract protecting employers while outlining terms, IP, and confidentiality.",
  areaServed: "Global",
  offers: {
    "@type": "Offer",
    price: "59.00",
    priceCurrency: "USD",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/employment-contract")({
  head: () => ({
    meta: [
      { title: "Employment Contract | Professionally Drafted | ADVAQ" },
      { name: "description", content: "Get a legally binding Employment Contract to protect your business. Professionally drafted for $59." },
      { name: "keywords", content: "employment contract, employment agreement, hire employee contract, legal employment document" },
      { property: "og:title", content: "Employment Contract | ADVAQ" },
      { property: "og:description", content: "Professionally drafted Employment Contract. Protect your business interests when hiring." },
      { property: "og:url", content: "/legal-contract-drafting/employment-contract" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/employment-contract" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: EmploymentContract,
});

function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">Legal Contract Drafting</p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">Employment Contract</h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">Secure your business when hiring new staff. Clear terms, strict IP protection, and comprehensive liability limitations expertly drafted by legal professionals.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">Draft My Agreement</Link>
            <a href="https://wa.me/923000925335" target="_blank" rel="noopener noreferrer" className="btn-outline-light rounded-none uppercase tracking-widest">Consult on WhatsApp</a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-gold-500" /> Statutory Compliance</span>
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-gold-500" /> IP Ownership Guaranteed</span>
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
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">What is an Employment Contract?</h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">An Employment Contract establishes the legal framework between your business and a new employee. It explicitly details the job role, working hours, salary, and benefits.</p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">Beyond basic terms, it shields your company from unfair dismissal claims and secures your proprietary information.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20"><Shield size={80} /></div>
                <h3 className="font-serif text-xl text-white mb-4">Key Protections</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span><strong className="font-semibold">IP Ownership:</strong> Automatic transfer of employee creations.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span><strong className="font-semibold">Termination:</strong> Clear terms protecting against unlawful dismissal claims.</span></li>
                  <li className="flex items-start gap-2.5"><CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" /><span><strong className="font-semibold">Confidentiality:</strong> Restricts sharing of internal business data.</span></li>
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
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Hiring Without a Formal Agreement</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Relying on verbal agreements with staff exposes your business to catastrophic employment tribunals.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Tribunal Claims
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without clear terms, employees can claim unfair dismissal or owed benefits, leading to costly legal battles.
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
                  IP Theft
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Employees might claim ownership over the code or processes they developed while on your payroll.
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
                  Data Leaks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Lack of confidentiality clauses allows departing staff to take client lists to competitors.
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
    { title: "Role & Duties", desc: "Clearly defined job description, reporting lines, and expected responsibilities." },
    { title: "Remuneration", desc: "Structured salary, bonus structures, and statutory deductions." },
    { title: "Working Hours", desc: "Explicit definitions of normal working hours, overtime, and remote working policies." },
    { title: "Leave Entitlements", desc: "Detailed provisions for annual leave, sick pay, and maternity/paternity rights." },
    { title: "Notice Periods", desc: "Clear guidelines on resignation and termination procedures." },
    { title: "Post-Employment Restraints", desc: "Non-compete and non-solicitation clauses to protect your business post-departure." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Contract Inclusions</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Every clause is structured to protect your business from common employment disputes.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <Briefcase className="text-gold-500 mb-4" size={24} />
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
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$59</span>
            </div>
            <div className="h-px bg-border my-8" />
            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Tailored to your specific industry</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Delivered in Word & PDF format</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Free revision within 7 days</span></div>
              <div className="flex items-start gap-3 text-sm text-gray-700"><Check className="text-gold-500 shrink-0 mt-0.5" size={18} /><span>Clear instruction guide on usage</span></div>
            </div>
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center">
              Order Now — $59
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    { title: "Briefing", desc: "Provide details about the role and remuneration." },
    { title: "Drafting", desc: "Our team structures the agreement with robust protections." },
    { title: "Review", desc: "Request adjustments based on your needs." },
    { title: "Finalization", desc: "We finalize the document in an editable format." },
    { title: "Execution", desc: "Send it to your employee for signature." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">Drafting Process</h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">Fast, efficient, and fully customized to your specific requirements.</p>
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
              <h3 className="font-sans text-xl font-semibold text-white">Statutory Compliance</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Ensures your business is fully compliant with local labor laws and regulations.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Data Security</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Mandates secure handling of your proprietary assets, databases, and client lists.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Non-Solicitation</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">Prevents employees from poaching your clients or other staff for a defined period after termination.</p>
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
    { title: "Independent Contractor Agreement", path: "/legal-contract-drafting/independent-contractor-agreement", desc: "Secure your business when hiring freelancers." },
    { title: "Employee NDA", path: "/legal-contract-drafting/employee-confidentiality-agreement", desc: "Secure your intellectual property with strict non-disclosure agreements." },
    { title: "Terms of Service", path: "/legal-contract-drafting/terms-of-service", desc: "Protect your platform with robust user terms and conditions." },
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
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">PROTECT YOUR BUSINESS</p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">Don't Hire Without Legal Protection.</h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">Secure your intellectual property, define expectations, and limit liability with our professionally drafted employment contracts.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm">Draft Contract Now →</Link>
            <a href="https://wa.me/923000925335" target="_blank" rel="noopener noreferrer" className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm">WhatsApp Us Directly</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function EmploymentContract() {
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
