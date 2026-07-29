import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Building2,
  Lock,
  Globe,
  Award,
  Search,
  FileSignature,
  FileCheck2,
  Stamp,
  Gavel,
  PenTool,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a trademark and why do I need one in Pakistan?",
    a: "A trademark is a legally registered symbol, word, logo, or phrase that represents your brand or company. In Pakistan, registering your trademark with IPO-Pakistan gives you exclusive rights to use that mark, preventing competitors or counterfeiters from stealing your brand identity or confusing your customers.",
  },
  {
    q: "How long does the trademark registration process take in Pakistan?",
    a: "The entire trademark registration process with IPO-Pakistan generally takes 12 to 18 months from the date of filing to the issuance of the final certificate. However, once you file the application (Form TM-1), your brand name is legally protected under 'TM' status, and you get an application number immediately.",
  },
  {
    q: "What is the difference between TM and ® symbols?",
    a: "The 'TM' symbol can be used as soon as your trademark application is filed with IPO-Pakistan to indicate that you claim rights over the mark. The '®' (Registered) symbol can only be used legally once the final Trademark Registration Certificate is officially issued by the IPO.",
  },
  {
    q: "Do I need to register a trademark for every category of products I sell?",
    a: "Trademarks are filed in specific 'Classes' based on the NICE Classification system (Classes 1-45). You only need to register in the classes that correspond to your products or services. If you sell software (Class 9) and clothing (Class 25), you will need two separate filings.",
  },
  {
    q: "What happens if someone is already using my brand name?",
    a: "Before filing, we conduct a comprehensive trademark search in the IPO database. If an identical or highly similar mark is already registered in your desired class, your application will likely be rejected. We will advise you to modify your logo or brand name to ensure successful registration.",
  },
  {
    q: "Does registering my company with SECP automatically protect my trademark?",
    a: "No. SECP registration only registers your corporate name as a legal entity. It does not give you intellectual property rights over the brand name or logo for your products/services. Only IPO-Pakistan grants trademark protection.",
  },
  {
    q: "What documents are required to file a trademark application?",
    a: "We require: a clear image of your logo/brand name, CNIC of the applicant (if individual) or SECP incorporation certificate (if company), a list of products/services you offer, and a signed Power of Attorney authorizing us to file on your behalf.",
  },
  {
    q: "Are government fees included in your pricing?",
    a: "Our professional fee covers the legal search, drafting, filing, and standard processing. The official government fees charged by IPO-Pakistan (such as TM-1 filing fees, publication fees, and final certificate fees) are billed separately as per actual government challans.",
  },
  {
    q: "What is the publication phase (Journal) in the trademark process?",
    a: "Once IPO examines and accepts your trademark, it is published in the monthly Trade Marks Journal for 2 months. This allows the public or existing brands to raise any 'Opposition' if they believe your mark infringes on theirs. If no opposition is filed, you proceed to the final certificate stage.",
  },
  {
    q: "How long is a registered trademark valid for?",
    a: "In Pakistan, a registered trademark is valid for 10 years from the date of the initial filing. It can be renewed indefinitely for subsequent 10-year periods by paying the renewal fee before the expiration date.",
  },
  {
    q: "What happens if my trademark application gets an objection?",
    a: "If the IPO Registrar issues an objection (e.g., claiming the mark is descriptive or similar to another mark), we will prepare and file a legal reply (Show Cause reply) and attend the hearing to defend your application. Additional fees may apply for extensive hearings.",
  },
  {
    q: "Can I register a trademark internationally through IPO-Pakistan?",
    a: "IPO-Pakistan registration only protects your brand within Pakistan. However, Pakistan is a member of the Madrid Protocol, which means once you have a base application in Pakistan, we can help you file an international trademark application to protect your brand in over 120 member countries.",
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
  serviceType: "Trademark Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Trademark Registration in Pakistan",
  description:
    "Register your brand name, logo, or slogan with IPO-Pakistan. Complete legal trademark search, TM-1 application filing, and intellectual property protection managed by licensed IP attorneys.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/trademark-registration",
  offers: {
    "@type": "Offer",
    price: "299.00",
    priceCurrency: "USD",
    description: "Professional fee for single-class trademark registration filing.",
  },
};

export const Route = createFileRoute("/pakistan-services/trademark-registration")({
  head: () => ({
    meta: [
      { title: "Trademark Registration in Pakistan (IPO) | ADVAQ" },
      {
        name: "description",
        content:
          "Register your brand, logo, and IP with IPO-Pakistan. Managed by licensed trademark attorneys. Includes trademark search, filing, and prosecution.",
      },
      {
        name: "keywords",
        content:
          "trademark registration pakistan, ipo pakistan, register logo pakistan, brand registration fee pakistan, intellectual property lawyer",
      },
      {
        property: "og:title",
        content: "Trademark Registration in Pakistan (IPO) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your brand, logo, and IP with IPO-Pakistan. Managed by licensed trademark attorneys. Includes trademark search, filing, and prosecution.",
      },
      { property: "og:url", content: "/pakistan-services/trademark-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/trademark-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: TrademarkRegistration,
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
            🇵🇰 INTELLECTUAL PROPERTY PAKISTAN
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Trademark Registration
            <br />
            in Pakistan
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Protect your brand identity, logo, and business name from theft and infringement. Complete Intellectual Property Organization (IPO) filing and prosecution handled by expert IP attorneys.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start Trademark Filing
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
              <Check size={16} className="text-gold-500" /> Registered IP Attorneys
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Pre-Filing Clearance Search
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 10-Year Legal Protection
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
                Why Register Your Trademark?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A trademark is your brand's most valuable asset. Registering it with IPO-Pakistan grants you the exclusive, legally enforceable right to use your brand name, logo, or slogan nationwide. It prevents competitors from capitalizing on your reputation and confusing your customers.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For tech startups, e-commerce stores, and software agencies, a registered trademark is crucial. It gives you the legal grounds to take down copycats on app stores, social media, and local markets, while securing the core asset that investors look for.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Award size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">The Benefits of IP</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Exclusive Ownership:</strong> Legal monopoly over your brand name in your industry sector.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Franchising & Licensing:</strong> Ability to monetize your brand by legally licensing it to others.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Enforcement Power:</strong> Send cease & desist notices and pursue infringement lawsuits effectively.</span>
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
            Operating Without Trademark Protection
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Building a brand without registering its trademark is like building a house on unowned land.
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
                  Brand Hijacking
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Competitors can legally register your unregistered brand name and force you to rebrand your entire business, throwing away years of marketing efforts and goodwill.
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
                  Revenue Loss to Copycats
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a trademark certificate, you have no legal basis to stop counterfeiters from selling fake products or impersonating your business online, eating into your profits.
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
                  Domain & Social Media Disputes
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Tech platforms (Meta, Apple App Store, Google) require a registered trademark to resolve IP disputes or take down pages that are squatting on your brand's name.
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
      icon: Search,
      title: "Comprehensive IP Search",
      desc: "We perform a thorough clearance search in the IPO-Pakistan database to ensure your mark is available and doesn't infringe on existing registrations.",
    },
    {
      icon: FileSignature,
      title: "Class Classification",
      desc: "Our attorneys analyze your business activities and select the correct NICE classifications to ensure maximum protection.",
    },
    {
      icon: PenTool,
      title: "Application Drafting",
      desc: "We draft and prepare the official TM-1 application form with precise legal descriptions of your goods or services.",
    },
    {
      icon: FileCheck2,
      title: "IPO Filing & Submission",
      desc: "We submit your application directly to the Intellectual Property Organization (IPO) and obtain your TM application number.",
    },
    {
      icon: Gavel,
      title: "Legal Representation",
      desc: "We act as your authorized trademark agents, handling all official correspondence and notices from the Trademark Registry.",
    },
    {
      icon: Stamp,
      title: "Certificate Tracking",
      desc: "We monitor the publication journal and track your application's status until the final Registration Certificate is issued.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Trademark Registration Service
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            End-to-end intellectual property protection managed by expert IP lawyers.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <inc.icon className="text-gold-500 mb-4" size={24} />
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
            Trademark Filing Package
          </h2>
        </Reveal>

        <div className="max-w-lg mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between h-full relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                SINGLE CLASS FILING
              </span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest text-center">BRAND PROTECTION</p>
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2 text-center">Standard Trademark</h3>
                <div className="mt-6 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 25,000</span>
                </div>
                <p className="text-center text-xs text-gray-500 mt-2">+ actual government IPO fees per class</p>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Pre-filing TM Database Search</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Preparation & Drafting of Form TM-1</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Immediate use of the 'TM' symbol</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Ongoing IPO Status Tracking</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Representation by Licensed IP Attorney</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Start Trademark Filing — Rs. 25,000
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
      title: "Clearance Search",
      desc: "We search the IPO registry to ensure your name or logo is not already taken.",
    },
    {
      title: "Document Setup",
      desc: "We prepare the TM-1 application and authorize our firm via Power of Attorney.",
    },
    {
      title: "Official Filing",
      desc: "We file the application with IPO-Pakistan. You can now legally use the ™ symbol.",
    },
    {
      title: "Examination & Journal",
      desc: "IPO examines the mark. If accepted, it is published in the TM Journal for public opposition.",
    },
    {
      title: "Registration Issued",
      desc: "After clearing the opposition period, the final Registration Certificate (®) is issued.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Trademark Timeline
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Protecting your brand is a legal process that requires patience and expertise.
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
      desc: "Incorporate your company as a Private Limited or Single Member Company.",
    },
    {
      title: "Shareholder Agreement",
      path: "/pakistan-services/shareholder-agreement",
      desc: "Draft a solid legal agreement between co-founders to protect equity and voting rights.",
    },
    {
      title: "Copyright Registration",
      path: "/pakistan-services/trademark-registration",
      desc: "Protect your source code, software, literature, or artistic work with copyright registration.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Legal Services
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
            READY TO PROTECT YOUR BRAND?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Let Competitors
            <br />
            Steal Your Identity.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Secure exclusive legal rights to your business name and logo today. Our expert intellectual property attorneys will handle the entire trademark process.
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
          <p className="mt-6 text-[13px] text-navy-200">
            Free initial clearance check · Registered IP Attorneys · Nationwide Service
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function TrademarkRegistration() {
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
