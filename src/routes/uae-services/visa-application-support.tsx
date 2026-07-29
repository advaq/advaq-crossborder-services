import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Clock,
  FileText,
  Briefcase,
  Building2,
  Calendar,
  Wallet,
  Settings,
  UserCheck,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Who is eligible for a UAE Investor/Partner Visa?",
    a: "Anyone who has registered a Freezone or Mainland company in the UAE is eligible to apply for an Investor or Partner Visa. You must hold shares in the company and the company must have an active Trade License and Establishment Card.",
  },
  {
    q: "How long is the UAE Investor Visa valid for?",
    a: "Under the current regulations, an Investor/Partner visa for Freezone or Mainland companies is typically issued with a validity of 2 years. It can be renewed indefinitely as long as your company remains active.",
  },
  {
    q: "Do I need to undergo a medical test for the visa?",
    a: "Yes. All applicants must pass a medical fitness test in the UAE, which screens for communicable diseases (such as HIV, Tuberculosis, and Hepatitis B). This test is mandatory before the final visa stamping.",
  },
  {
    q: "What is an Emirates ID and is it included?",
    a: "The Emirates ID is your official UAE identity card, mandatory for all residents. It is used for opening bank accounts, renting property, and signing contracts. Our visa service includes managing the Emirates ID application and biometrics scheduling.",
  },
  {
    q: "Can I bring my family to the UAE on my Investor Visa?",
    a: "Yes. Once your Investor Visa and Emirates ID are issued, you become eligible to sponsor your immediate family members (spouse, children, and sometimes parents) for UAE dependent visas, provided you meet certain income or accommodation criteria.",
  },
  {
    q: "How long does the entire visa process take?",
    a: "Typically, the process takes 7 to 14 days from the moment your entry permit is issued until your Emirates ID is approved, provided there are no delays in the medical test or biometrics appointments.",
  },
  {
    q: "Do I need to be inside the UAE to apply for the visa?",
    a: "We can initiate the application (Entry Permit/E-visa) while you are outside the UAE. However, you must travel to the UAE to complete the medical test and Emirates ID biometrics before the final visa can be issued.",
  },
  {
    q: "What happens if I stay outside the UAE for too long?",
    a: "For standard 2-year Investor or Employment visas, you must enter the UAE at least once every 180 days (6 months) to keep the visa active. If you stay outside longer, your visa may become automatically invalid.",
  },
  {
    q: "Can ADVAQ assist with employee visas as well?",
    a: "Yes. We manage the entire visa application process for both investors and employees. If your company has a visa allocation, we can process employment visas, medicals, and Emirates IDs for your staff.",
  },
  {
    q: "What is an E-Channel or Establishment Card?",
    a: "Before any visa can be applied for, your company must be registered with the immigration authorities through an Establishment Card and (for some Freezones) an E-Channel registration. We handle these prerequisite registrations.",
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
  serviceType: "UAE Visa Application Support",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE Investor & Employee Visa Processing",
  description:
    "End-to-end management of UAE residency visas, from entry permits to medical tests, Emirates ID biometrics, and final stamping.",
  areaServed: "United Arab Emirates",
  url: "https://[yourdomain.com]/uae-services/visa-application-support",
  offers: {
    "@type": "Offer",
    price: "1499.00",
    priceCurrency: "AED",
    description: "Professional fee for UAE Visa processing management (excluding government/medical fees).",
  },
};

export const Route = createFileRoute("/uae-services/visa-application-support")({
  head: () => ({
    meta: [
      { title: "UAE Visa Application Support | Investor & Employee | ADVAQ" },
      {
        name: "description",
        content:
          "Fast, hassle-free UAE Residency Visa processing. We manage entry permits, medical tests, Emirates ID biometrics, and final visa stamping for investors and staff.",
      },
      {
        name: "keywords",
        content:
          "uae investor visa, dubai residency visa, emirates id processing, dubai employee visa, uae golden visa assistance, freelance visa dubai",
      },
      {
        property: "og:title",
        content: "UAE Visa Application Support | Investor & Employee | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Fast, hassle-free UAE Residency Visa processing. We manage entry permits, medical tests, Emirates ID biometrics, and final visa stamping for investors and staff.",
      },
      { property: "og:url", content: "/uae-services/visa-application-support" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/visa-application-support" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: VisaApplicationSupport,
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
            🇦🇪 RESIDENCY & IMMIGRATION
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UAE Visa Application Support
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure your UAE Residency and Emirates ID with zero stress. We provide VIP, end-to-end management of investor, partner, and employee visas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start Visa Process
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
              <Check size={16} className="text-gold-500" /> Fast-Track Entry Permits
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Medical Test Scheduling
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Emirates ID Processing
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Family Sponsorship Guidance
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
                Navigating UAE Residency
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Obtaining a UAE residency visa requires precise coordination between multiple government departments, including immigration (GDRFA/ICA), health authorities, and the Federal Authority for Identity.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Whether you are a new company founder applying for an Investor Visa, or an established business bringing in talent on Employment Visas, missing a step or failing a document check can cause costly delays. Our VIP service manages the entire timeline, guiding you step-by-step until the physical Emirates ID is in your hands.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <UserCheck size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Visa Categories We Handle</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Investor & Partner Visas:</strong> For company shareholders (2-year validity).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Employment Visas:</strong> For your company's staff members.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Dependent Visas:</strong> Sponsoring family members (spouse, children).</span>
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
            Pitfalls in the Visa Process
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The UAE immigration system is highly digitized but strictly enforced. Mistakes in the application process result in immediate rejections and lost government fees.
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
                  Overstay Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you enter the UAE on a tourist visa and transition to a residency visa, any delays in your medical or biometrics processing could cause you to overstay, incurring daily fines and travel bans.
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
                  Application Rejections
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Incorrect passport formatting, un-attested educational certificates, or failing to meet specific Freezone quota requirements leads to swift application rejection. Government fees are non-refundable.
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
                  Banking Delays
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  You cannot fully activate a UAE personal or corporate bank account until your Emirates ID is issued. A stalled visa process directly stalls your ability to transact and do business.
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
      title: "Establishment Card Processing",
      desc: "We ensure your company is properly registered with immigration (GDRFA/ICA) before starting any visa applications.",
    },
    {
      title: "E-Visa / Entry Permit",
      desc: "We process and issue your digital Entry Permit, allowing you to enter the UAE or change your status if already inside.",
    },
    {
      title: "Medical Test Booking",
      desc: "We schedule your mandatory VIP medical fitness test at an approved government center to avoid long queues.",
    },
    {
      title: "Emirates ID Biometrics",
      desc: "We handle the typing and scheduling for your Emirates ID fingerprinting and biometrics appointment.",
    },
    {
      title: "Status Change Coordination",
      desc: "If you are inside the UAE on a tourist visa, we process the crucial 'Change of Status' legally without you needing to exit.",
    },
    {
      title: "Final Visa Stamping",
      desc: "We track the final approval and digital issuance of your UAE Residency Visa and physical Emirates ID delivery.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our VIP Visa Management
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the typing centers, the portals, and the appointments. You simply show up for your tests.
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
            Professional Management Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Per Applicant
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">VISA PROCESSING SERVICE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 1,499</span>
              <span className="text-sm text-gray-500">+ gov fees</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *This covers our end-to-end professional management. Official government fees (Entry Permit, Medical, Emirates ID, Status Change) vary by Freezone and are paid separately.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Entry permit and e-visa application</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Medical test scheduling and typing</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Emirates ID application management</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>VIP timeline coordination</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start Visa Process — AED 1,499
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
      title: "Application",
      desc: "We collect your passport, photo, and company documents to file for the Entry Permit.",
    },
    {
      title: "Entry & Status",
      desc: "Once the E-Visa is issued, you enter the UAE, or we process a 'Change of Status' if you are already here.",
    },
    {
      title: "Medical Test",
      desc: "You attend a brief, pre-booked medical fitness test (blood test and x-ray) in the UAE.",
    },
    {
      title: "Biometrics",
      desc: "You attend the Federal Authority center to provide your fingerprints for the Emirates ID.",
    },
    {
      title: "Approval",
      desc: "Your digital Residency Visa is issued and your physical Emirates ID is couriered to you.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Your Path to Residency
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A structured, step-by-step process minimizing your time spent in government centers.
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
      title: "Freezone Company Setup",
      path: "/uae-services/freezone-company-formation",
      desc: "You must establish a UAE company before you can apply for an Investor Visa.",
    },
    {
      title: "Trade License Renewal",
      path: "/uae-services/trade-license-renewal",
      desc: "Keep your Trade License active to ensure your residency visas remain valid.",
    },
    {
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Ensure your new company is tax compliant after your visa is issued.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Corporate Services
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
            SECURE YOUR RESIDENCY
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Seamless Visa Processing.
            <br />
            Let Us Handle the Bureaucracy.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Avoid application rejections, long typing center queues, and overstay fines. Our VIP visa service ensures you get your Emirates ID quickly and legally.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Visa Process →
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
            Investor Visas · Employee Visas · Family Sponsorship Guidance
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function VisaApplicationSupport() {
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
