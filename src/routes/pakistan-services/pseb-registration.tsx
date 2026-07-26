import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  BadgeAlert,
  Code,
  Laptop,
  Globe,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is PSEB Registration?",
    a: "Pakistan Software Export Board (PSEB) registration is the official certification for IT companies, software houses, and call centers in Pakistan, recognizing them as verified IT exporters.",
  },
  {
    q: "What are the core benefits of PSEB Registration?",
    a: "The biggest benefit is tax exemption. PSEB registered companies can claim a 100% tax credit (exemption) on their IT export income under Section 65F. It also helps with easy repatriation of profits, subsidised global exhibitions, and smooth corporate banking for foreign remittances.",
  },
  {
    q: "Who is eligible for PSEB Registration?",
    a: "Any IT company, software house, BPO, or call center registered with SECP (Private Limited or SMC) or FBR (Sole Proprietorship) can apply, provided their core business is IT or IT-enabled services (ITeS).",
  },
  {
    q: "Can a Sole Proprietorship register with PSEB?",
    a: "Yes, freelancers and sole proprietors with a valid FBR Business NTN and a business bank account can register with PSEB as an IT startup or freelancer.",
  },
  {
    q: "What documents are needed to apply for PSEB?",
    a: "You need your SECP Incorporation Certificate (or FBR NTN for sole props), Memorandum & Articles of Association, NTN certificate, CNICs of directors, bank account maintenance certificate, and a brief business profile/website.",
  },
  {
    q: "Is a physical office required for PSEB?",
    a: "PSEB generally requires a physical business address in Pakistan. However, many remote-first startups use shared office spaces or legitimate residential addresses to fulfill this requirement.",
  },
  {
    q: "How long does PSEB registration take?",
    a: "Once the application is submitted with all correct documents via the PSEB portal, approval and issuance of the certificate typically take 2 to 3 weeks.",
  },
  {
    q: "What is the government fee for PSEB registration?",
    a: "For startups (registered within the last 1 year), the PSEB government fee is Rs. 5,000. For older companies, the fee is Rs. 20,000. Call centers have different fee structures (around Rs. 20,000 to Rs. 50,000).",
  },
  {
    q: "What is our professional fee for processing this?",
    a: "Our professional fee to manage the entire PSEB registration and documentation process is Rs. 15,000 (excluding the government fee).",
  },
  {
    q: "Do I have to renew my PSEB registration?",
    a: "Yes. PSEB certificates are valid for one year and must be renewed annually by submitting a renewal application, updating export remittance data, and paying the annual renewal fee.",
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
  serviceType: "PSEB Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "PSEB Registration for IT Companies Pakistan",
  description:
    "Register your IT company or software house with the Pakistan Software Export Board (PSEB) to claim 100% tax exemptions on IT exports.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/pseb-registration",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "USD",
    description: "PSEB registration professional fee excluding government fees.",
  },
};

export const Route = createFileRoute("/pakistan-services/pseb-registration")({
  head: () => ({
    meta: [
      { title: "PSEB Registration Pakistan | IT Tax Exemption | ADVAQ" },
      {
        name: "description",
        content:
          "Register your software house with PSEB (Pakistan Software Export Board) to claim 100% IT export tax exemptions. Professional processing for Rs. 15,000.",
      },
      {
        name: "keywords",
        content:
          "pseb registration pakistan, software export board, it tax exemption pakistan, register software house, call center registration pseb",
      },
      {
        property: "og:title",
        content: "PSEB Registration Pakistan | IT Tax Exemption | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your software house with PSEB (Pakistan Software Export Board) to claim 100% IT export tax exemptions.",
      },
      { property: "og:url", content: "/pakistan-services/pseb-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/pseb-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: PSEBRegistration,
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
            🇵🇰 IT & SOFTWARE HOUSES
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            PSEB Registration
            <br />
            in Pakistan
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Register your tech company with the Pakistan Software Export Board to legally claim a 100% tax credit on your IT export income and easily process foreign remittances.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start PSEB Registration
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
              <Check size={16} className="text-gold-500" /> Unlock 100% Tax Exemption
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> For Pvt Ltd, SMC & Sole Props
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Call Center Licensing
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
                What is PSEB Registration?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                The Pakistan Software Export Board (PSEB) is a government agency tasked with promoting the IT industry. Registering with PSEB categorizes your business as an official IT/ITeS exporter.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For software houses, SaaS startups, BPOs, and call centers, PSEB registration is the golden ticket. It is the primary legal requirement under Section 65F of the Income Tax Ordinance to claim a 100% tax credit on income generated from foreign clients.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Code size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Core Benefits</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Tax Exemption:** Zero corporate tax on IT export revenues (subject to bringing funds via banking channels).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Smooth Banking:** Commercial banks immediately clear inward dollar remittances for PSEB companies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Global Credibility:** Official government recognition as a verified tech vendor.</span>
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
            Exporting IT Without PSEB
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            If you run a software agency without PSEB registration, you are leaving massive amounts of money and security on the table.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Heavy Corporate Taxation
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Without PSEB registration, your foreign income is treated as standard local corporate income, subjecting you to normal corporate tax rates (up to 29%).
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Remittance Freezes
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Banks often flag large foreign inward remittances. Without a PSEB certificate to prove you are an IT exporter, they may freeze the funds pending investigation.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Lost Government Perks
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                You lose out on subsidized office spaces in IT parks, grants for international tech exhibitions, and data protection credibility.
              </p>
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
      title: "Document Review",
      desc: "Auditing your SECP/NTN documents and bank certificates to ensure PSEB criteria are met.",
    },
    {
      title: "Portal Submission",
      desc: "Handling the extensive data entry and document uploads on the official PSEB portal.",
    },
    {
      title: "Business Profiling",
      desc: "Assisting in drafting the required business summaries and technical expertise profiles.",
    },
    {
      title: "Application Tracking",
      desc: "Liaising with PSEB officials to resolve any objections and expedite the approval.",
    },
    {
      title: "Certificate Issuance",
      desc: "Securing your official PSEB registration certificate digitally.",
    },
    {
      title: "Tax Exemption Guidance",
      desc: "Providing a roadmap on how to actually claim the tax credit in your annual FBR return.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our PSEB Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A frictionless path to securing your IT export status.
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
            PSEB Registration Fee
          </h2>
        </Reveal>

        <div className="max-w-md mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                IT EXPORTERS
              </span>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest">PSEB REGISTRATION</p>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 15,000</span>
                  <span className="text-xs text-gray-500">+ gov fee</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700 text-left">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Complete Portal Management</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Document Formatting</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Query Handling with PSEB</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Final Certificate Delivery</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Apply Now
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
      title: "Prerequisites",
      desc: "Ensure you have an active NTN and a business bank account first.",
    },
    {
      title: "Documentation",
      desc: "Send us your company profile, incorporation docs, and director details.",
    },
    {
      title: "PSEB Filing",
      desc: "We submit the application and generate the fee challan (Rs. 5,000 for startups).",
    },
    {
      title: "Approval",
      desc: "PSEB reviews the application and issues the formal IT Exporter Certificate.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            From documentation to final certification.
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
      desc: "Form your tech company with SECP before applying for PSEB.",
    },
    {
      title: "IT Export Exemption",
      path: "/pakistan-services/pseb-registration",
      desc: "We file your annual returns to practically claim the 100% tax credit.",
    },
    {
      title: "SMC Registration",
      path: "/pakistan-services/single-member-company",
      desc: "Solo IT founder? Register an SMC to get PSEB compliant.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Prerequisites & Next Steps
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <Link
                  to={s.path}
                  className="mt-6 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest hover:gap-2.5 transition-all"
                >
                  View Service Details <ArrowRight size={12} />
                </Link>
              </div>
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
            CLAIM YOUR TAX BREAK
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Register with PSEB.
            <br />
            Keep 100% of Your Profits.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            The government wants to incentivize IT exports. Let our team secure your PSEB registration so you can take full advantage of these massive tax benefits legally.
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
export default function PSEBRegistration() {
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
