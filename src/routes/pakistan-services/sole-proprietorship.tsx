import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  User,
  Briefcase,
  FileText,
  Building,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Sole Proprietorship in Pakistan?",
    a: "A Sole Proprietorship is the simplest form of business structure in Pakistan, owned and managed by a single individual. The owner is personally responsible for all business debts and liabilities. It is highly popular among freelancers, small shop owners, and consultants due to its minimal regulatory compliance.",
  },
  {
    q: "Do I need to register my Sole Proprietorship with SECP?",
    a: "No. Sole Proprietorships are not corporate entities and are not governed by the Securities and Exchange Commission of Pakistan (SECP). They are registered primarily with the Federal Board of Revenue (FBR) by obtaining a National Tax Number (NTN) under a specific business name.",
  },
  {
    q: "What are the requirements to start a Sole Proprietorship?",
    a: "You only need a valid CNIC, an active mobile number registered against your CNIC, an email address, a paid utility bill for the business premises (not older than 3 months), and proof of ownership or a tenancy agreement for the registered address.",
  },
  {
    q: "Can I open a business bank account as a Sole Proprietor?",
    a: "Yes. Once you receive your business NTN certificate from the FBR, you can open a current business account at any commercial bank in Pakistan. You may also need to provide a letterhead and a rubber stamp of your business.",
  },
  {
    q: "How much does it cost to register a Sole Proprietorship?",
    a: "Our professional fee for full registration, including your business NTN and FBR IRIS profile setup, is Rs. 20,000. There are minimal to no direct government fees for basic FBR NTN registration.",
  },
  {
    q: "How long does the registration process take?",
    a: "The registration is very quick. Once we have all your required documents, your Sole Proprietorship NTN can typically be processed and issued within 1 to 2 business days.",
  },
  {
    q: "What tax return filings are required for a Sole Proprietor?",
    a: "A Sole Proprietor must file an annual income tax return with the FBR. The income from the business is treated as the individual's personal income and is taxed according to the individual tax slabs.",
  },
  {
    q: "Is there any protection for my personal assets?",
    a: "No. Unlike a Private Limited Company or an SMC, a Sole Proprietorship does not offer limited liability. If the business incurs debts or is sued, your personal assets (like your house or personal bank accounts) are at risk.",
  },
  {
    q: "Can I upgrade my Sole Proprietorship to an SMC or Pvt Ltd later?",
    a: "Yes. Many businesses start as Sole Proprietorships to keep initial costs low. As your business grows, you can incorporate a new Single Member Company (SMC) or Private Limited Company and transfer your business operations there.",
  },
  {
    q: "Do I need an office to register?",
    a: "Yes, a physical address is required for registration. However, many freelancers and consultants use their home address as their registered business address, which is perfectly acceptable provided you have the property documents or a tenancy agreement.",
  },
  {
    q: "What happens if I stop doing business?",
    a: "If you cease operations, you must notify the FBR to update your tax profile and formally close the business, otherwise, you remain liable to file nil tax returns every year to avoid penalties.",
  },
  {
    q: "Can a foreigner start a Sole Proprietorship in Pakistan?",
    a: "Generally, Sole Proprietorships are for Pakistani residents with a CNIC. Foreigners are usually advised to form a company (like a Pvt Ltd) with SECP and register with the Board of Investment (BOI).",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Sole Proprietorship Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Sole Proprietorship Registration in Pakistan",
  description:
    "Register your Sole Proprietorship business in Pakistan. Fast FBR NTN registration, business bank account setup guidance, and full compliance for freelancers and small business owners.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/sole-proprietorship",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    description: "Sole Proprietorship registration professional fee.",
  },
};

export const Route = createFileRoute("/pakistan-services/sole-proprietorship")({
  head: () => ({
    meta: [
      { title: "Sole Proprietorship Registration Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "Register your Sole Proprietorship in Pakistan. Get your business NTN from FBR in 1-2 days. Complete setup for freelancers and startups. Price: Rs. 20,000.",
      },
      {
        name: "keywords",
        content:
          "sole proprietorship pakistan, business ntn fbr, register business as freelancer pakistan, small business registration cost",
      },
      {
        property: "og:title",
        content: "Sole Proprietorship Registration Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your Sole Proprietorship in Pakistan. Get your business NTN from FBR in 1-2 days. Complete setup for freelancers and startups.",
      },
      { property: "og:url", content: "/pakistan-services/sole-proprietorship" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/sole-proprietorship" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SoleProprietorship,
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
            🇵🇰 PAKISTAN BUSINESS REGISTRATION
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Sole Proprietorship
            <br />
            Registration
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            The fastest and most cost-effective way to start a legal business in Pakistan. Ideal for freelancers, consultants, and small vendors. We handle your FBR Business NTN setup from start to finish.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Register Now
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
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Business NTN Included
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Processed in 1-2 Days
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Opens Business Bank Accounts
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Remote Process
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
              <SectionLabel>THE ESSENTIALS</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is a Sole Proprietorship?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Sole Proprietorship is an unincorporated business with a single owner who pays personal income tax on profits earned from the business. It is the easiest and most popular business structure for new entrepreneurs in Pakistan.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Unlike a Private Limited Company, there is no separate legal distinction between the owner and the business. However, it still allows you to operate under a brand name, issue commercial invoices, and open a dedicated business bank account.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <User size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Choose It?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Low Cost:</strong> Minimal registration fees compared to SECP incorporation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Less Compliance:</strong> Simpler tax filing and no SECP annual returns.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Full Control:</strong> You make all decisions and keep 100% of the profits.</span>
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
            Operating Without Registration
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Even if you are a freelancer or a solo consultant, operating entirely off the radar carries significant drawbacks.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  No Corporate Identity
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Clients may hesitate to issue large payments to personal bank accounts. Without a business name, you appear less professional and lack commercial credibility.
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
                  Bank Account Limitations
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Banks will not allow you to open an account in a business name without an FBR NTN certificate showing that business name. Personal accounts have transaction limits.
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
                  Higher Withholding Taxes
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Unregistered businesses are classified as "non-filers", facing up to 100% higher withholding taxes on banking transactions, property, and vehicle purchases.
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
      title: "Business Name Addition",
      desc: "Registering your chosen brand or trade name officially with the Federal Board of Revenue.",
    },
    {
      title: "FBR NTN Certificate",
      desc: "Issuance of your official National Tax Number (NTN) certificate bearing your business name.",
    },
    {
      title: "Active Taxpayer Listing",
      desc: "Ensuring your status is updated to ATL (Active Taxpayer List) if you file the required returns.",
    },
    {
      title: "Bank Account Guidance",
      desc: "Providing the necessary documentation and support to help you open a business bank account.",
    },
    {
      title: "Tax Profiling",
      desc: "Setting up your FBR IRIS account with the correct business activity codes and details.",
    },
    {
      title: "Legal Advice",
      desc: "Consultation on invoicing, basic compliance, and when to upgrade to a Pvt Ltd company.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Sole Proprietorship Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Everything you need to officially launch your business and start operating.
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
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Simple, Flat Fee
          </h2>
        </Reveal>

        <div className="max-w-md mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                ALL INCLUSIVE
              </span>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest">SOLE PROPRIETORSHIP</p>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 20,000</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">No hidden charges.</p>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700 text-left">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> FBR Business NTN Registration</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Business Profile Setup in IRIS</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Ready in 1-2 Working Days</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Free Bank Account Support</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Start Now
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: PROCESS ---------- */
function ProcessSteps() {
  const steps = [
    {
      title: "Document Collection",
      desc: "Provide your CNIC, electricity bill, and tenancy agreement/ownership proof.",
    },
    {
      title: "FBR Submission",
      desc: "We file your details on the FBR IRIS portal under your chosen business name.",
    },
    {
      title: "NTN Issuance",
      desc: "FBR processes the application and issues your official Business NTN Certificate.",
    },
    {
      title: "Bank Account",
      desc: "Take the NTN certificate, a business letterhead, and stamp to open your bank account.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Fast Registration Process
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the portal filings so you can focus on launching your business.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
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
      title: "SECP Company Registration",
      path: "/pakistan-services/secp-registration",
      desc: "Looking for limited liability? Register an SMC or Private Limited Company.",
    },
    {
      title: "Sales Tax Registration",
      path: "/pakistan-services/sales-tax-registration",
      desc: "Register for Sales Tax (GST) if your turnover exceeds the threshold or for B2B supplies.",
    },
    {
      title: "Tax Return Filing",
      path: "/pakistan-services/individual-tax-return",
      desc: "Ensure you file your annual income tax returns to remain an active taxpayer.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Business Services
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
            READY TO START?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Get Your Business NTN.
            <br />
            Start Operating Legally.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Stop losing out on major contracts and secure your business identity. We will have your Sole Proprietorship registered in no time.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Get Started Now →
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
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function SoleProprietorship() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
