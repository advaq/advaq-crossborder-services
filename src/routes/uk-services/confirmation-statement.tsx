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
  ClipboardCheck,
  Building2,
  Lock,
  Globe
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Confirmation Statement (CS01)?",
    a: "A Confirmation Statement is a mandatory annual filing submitted to Companies House. It confirms that the information held on the public register about your company (directors, registered office, share capital, and PSCs) is accurate and up to date.",
  },
  {
    q: "Is a Confirmation Statement the same as Annual Accounts?",
    a: "No. Annual Accounts contain your company's financial data (profit, loss, assets), while the Confirmation Statement contains only administrative and structural information (who owns and runs the company). Both are separate legal requirements.",
  },
  {
    q: "When is my Confirmation Statement due?",
    a: "You must file at least one Confirmation Statement every 12 months. Your 'review period' usually ends on the anniversary of your company's incorporation. You then have 14 days from that date to file the statement.",
  },
  {
    q: "What happens if I forget to file it?",
    a: "Failing to file your Confirmation Statement is a criminal offense under UK law. Companies House will begin procedures to strike off and dissolve your company. This will also cause your business bank accounts to be frozen.",
  },
  {
    q: "Does the £49 fee include the government filing fee?",
    a: "Yes. Companies House charges an official filing fee (currently £34) to process the Confirmation Statement. Our £49 service fee includes managing the review process, handling the paperwork, and we pay the government fee on your behalf. (For some specific complex structures, the government fee may be handled separately, but for standard LTDs, we keep it simple).",
  },
  {
    q: "My company didn't trade this year. Do I still need to file?",
    a: "Absolutely. Even if your company is completely dormant and has never traded, you are legally required to file a Confirmation Statement every year to maintain its active status on the registry.",
  },
  {
    q: "What is a PSC?",
    a: "PSC stands for 'Person with Significant Control'. This is usually anyone who holds more than 25% of the shares or voting rights in your company. We verify and update your PSC register as part of the statement.",
  },
  {
    q: "What is a SIC code?",
    a: "A Standard Industrial Classification (SIC) code defines your company's main business activity (e.g., software development, retail). You can update your SIC code when you file your Confirmation Statement.",
  },
  {
    q: "Can I change my company's registered address via this filing?",
    a: "While you confirm the registered address on the statement, if it has changed, you must officially notify Companies House using form AD01 before or at the same time as filing the Confirmation Statement. We handle this for you if needed.",
  },
  {
    q: "How long does it take you to file?",
    a: "Once you confirm that all details are correct, we submit the CS01 electronically. Companies House usually accepts it within 24 to 48 hours, and your public record is updated immediately.",
  },
  {
    q: "Will you remind me before it is due?",
    a: "Yes. When you use our service, we track your filing deadlines and will notify you via email and WhatsApp well before the 14-day deadline, ensuring you never face strike-off action.",
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
  serviceType: "UK Confirmation Statement Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UK Confirmation Statement (CS01) Filing",
  description:
    "Mandatory annual Confirmation Statement filing for UK Limited Companies. Prevent strike-off and ensure Companies House compliance.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uk-services/confirmation-statement",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "GBP",
    description: "Confirmation Statement filing fee (£99).",
  },
};

export const Route = createFileRoute("/uk-services/confirmation-statement")({
  head: () => ({
    meta: [
      { title: "UK Confirmation Statement (CS01) Filing | ADVAQ" },
      {
        name: "description",
        content:
          "File your mandatory annual Confirmation Statement with Companies House. We handle the CS01 submission to keep your UK Limited Company active and compliant.",
      },
      {
        name: "keywords",
        content:
          "confirmation statement uk, cs01 filing, companies house confirmation statement, uk company compliance, file cs01 online, annual return uk",
      },
      {
        property: "og:title",
        content: "UK Confirmation Statement (CS01) Filing | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Prevent company strike-off. Let us file your mandatory annual Confirmation Statement with Companies House accurately and on time.",
      },
      { property: "og:url", content: "/uk-services/confirmation-statement" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/confirmation-statement" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: ConfirmationStatement,
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
            📋 ANNUAL COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Confirmation Statement
            <br />
            (CS01) Filing
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Keep your UK company legally active. We prepare, verify, and electronically submit your mandatory annual Confirmation Statement to Companies House, preventing corporate strike-off.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              File Now — £49
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Ask a Question
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Same-Day Submission
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Prevents Strike-Off
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Updates PSC Records
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Govt. Fees Handled
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 2: WHAT IS IT ---------- */
function ServiceOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>THE REQUIREMENT</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is a Confirmation Statement?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Confirmation Statement (form CS01) is a legal document that every UK Limited Company must file at least once a year. It essentially tells Companies House: "The management and structural data you have on file for our company is correct."
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                It confirms who the directors are, where the registered office is located, the distribution of shares, the business activity (SIC codes), and the Persons with Significant Control (PSCs). It is entirely separate from your financial accounts.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <ClipboardCheck size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Is It Critical?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Legal Mandate:</strong> It is a criminal offense for directors to fail to file this document within 14 days of the due date.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Bank Verification:</strong> Digital banks like Wise and Stripe routinely check Companies House. Missing this filing triggers account reviews.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Corporate Existence:</strong> The most common reason companies are forcibly shut down by the UK government is a missing Confirmation Statement.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 3: THE DANGER ---------- */
function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Danger of Ignoring It
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Companies House treats a missing CS01 as an indication that the company is no longer operating.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Compulsory Strike-Off
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If the 14-day deadline passes without filing, Companies House will initiate the process to strike your company off the register, dissolving it entirely.
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
                  Asset Seizure
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If a company is struck off, it ceases to legally exist. Any money left in its bank accounts, or any IP it holds, instantly becomes the property of the Crown (the UK Government).
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
                  Director Prosecution
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Directors who continuously fail to file Confirmation Statements can face personal prosecution, fines, and being disqualified from acting as a company director in the future.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 4: WHAT IS INCLUDED ---------- */
function WhatIsIncluded() {
  const inclusions = [
    {
      title: "Data Verification",
      desc: "We extract your current registry data and provide a simple checklist for you to confirm if anything has changed.",
    },
    {
      title: "PSC Register Update",
      desc: "Ensuring your 'Persons with Significant Control' data is accurate, an area under heavy scrutiny by regulators.",
    },
    {
      title: "SIC Code Adjustments",
      desc: "If your business model has pivoted (e.g., from eCommerce to Software), we will update your industrial codes.",
    },
    {
      title: "Electronic Submission",
      desc: "Direct integration with the Companies House portal for secure, immediate filing of the CS01 form.",
    },
    {
      title: "Government Fee Management",
      desc: "We process and handle the official Companies House submission charge directly as part of our service.",
    },
    {
      title: "Deadline Tracking",
      desc: "Once you are a client, we add you to our compliance calendar to alert you of future deadlines automatically.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR SERVICE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Complete Filing Management
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the paperwork so you can focus on building your business.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <CheckCircle className="text-gold-500 mb-4" size={24} />
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

/* ---------- SECTION 5: PRICING ---------- */
function Pricing() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Flat Filing Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Standard Service
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">CS01 FILING & VERIFICATION</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£49</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *A single, straightforward fee to ensure your company stays active.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Review of current registry data</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Updating of SIC codes or PSCs if required</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Preparation and electronic submission to Companies House</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Submission tracking and confirmation certificate</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — £49
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: PROCESS ---------- */
function ProcessSteps() {
  const steps = [
    {
      title: "Data Pull",
      desc: "We securely fetch your company's existing data from the Companies House public registry.",
    },
    {
      title: "Review",
      desc: "We send you a summary of the current directors, address, and shareholders to review.",
    },
    {
      title: "Updates",
      desc: "If anything has changed (like shares or business activity), we prepare the necessary update forms.",
    },
    {
      title: "Submission",
      desc: "We file the CS01 electronically and pay the associated government fees on your behalf.",
    },
    {
      title: "Confirmation",
      desc: "Within 48 hours, Companies House accepts the filing and we send you the official confirmation receipt.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How The Filing Works
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A fast, digital process that takes less than 5 minutes of your time.
          </p>
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

/* ---------- SECTION 7: ACCURACY MATTERS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>DATA INTEGRITY</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Why Accuracy Matters
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Your public registry profile is the foundation of corporate trust.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Banking Compliance</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Payment processors continuously scrape Companies House data. If your filed business activity (SIC) does not match what you process through Stripe, your account will face severe restrictions.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Anti-Money Laundering</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                The UK government strictly enforces the accuracy of the PSC (Person with Significant Control) register to prevent financial crimes. Errors here trigger immediate HMRC flags.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Public Credibility</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Before large international clients sign contracts or release payments, their finance teams check your public record. A clean, up-to-date registry proves you are a professional entity.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 8: FAQ ---------- */
function FAQAccordionItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left text-lg font-medium text-white hover:text-gold-500 transition-colors focus:outline-none"
      >
        <span className="pr-6">{q}</span>
        <ChevronDown
          size={20}
          className={`text-gold-500 shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-navy-200 text-base leading-relaxed font-sans">{a}</p>
        </div>
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

/* ---------- SECTION 9: RELATED SERVICES ---------- */
function RelatedServices() {
  const services = [
    {
      title: "Annual Accounts",
      path: "/uk-services/annual-accounts",
      desc: "Mandatory financial reporting due 9 months after your financial year end.",
    },
    {
      title: "Corporation Tax Return",
      path: "/uk-services/corporation-tax-return",
      desc: "Filing your CT600 to report your corporate profits to HM Revenue & Customs.",
    },
    {
      title: "UK LTD Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a new UK Limited Company remotely with a premium London address.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related UK Compliance Services
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Reveal key={s.title}>
              <Link to={s.path as any} className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full hover:border-gold-500/50 hover:shadow-lg transition-all duration-300 group block">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text group-hover:text-gold-600 transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">View Service Details <ArrowRight size={12} /></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 10: CTA BANNER ---------- */
function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            PREVENT STRIKE-OFF
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Deadline Approaching?
            <br />
            Let Us Secure Your Company.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Missing the 14-day filing window initiates the dissolution of your company. We handle the paperwork, verify your data, and file electronically to ensure zero downtime.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              File Statement Now →
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              WhatsApp Us Directly
            </a>
          </div>
          <p className="mt-6 text-[13px] text-navy-200">
            Quick processing · Prevents account freezing · Keeps your entity legal
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function ConfirmationStatement() {
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
