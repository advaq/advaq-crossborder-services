import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  Search,
  Users,
  AlertOctagon,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is the FinCEN BOI Report?",
    a: "The Beneficial Ownership Information (BOI) Report is a mandatory federal filing under the Corporate Transparency Act. It requires companies to disclose the individuals who ultimately own or control the business to FinCEN (Financial Crimes Enforcement Network).",
  },
  {
    q: "Who is required to file a BOI Report?",
    a: "Almost all LLCs, Corporations, and other entities created by filing a document with a Secretary of State in the US must file, including companies owned entirely by non-US residents.",
  },
  {
    q: "What is the deadline to file?",
    a: "For companies formed in 2024 or later, the report must be filed within 90 days of formation. For companies formed before 2024, the deadline was January 1, 2025.",
  },
  {
    q: "What happens if I don't file the BOI report?",
    a: "Failing to file on time or providing false information can result in severe civil penalties of $500 per day (up to $10,000) and criminal penalties including up to 2 years in prison.",
  },
  {
    q: "Who is considered a Beneficial Owner?",
    a: "A beneficial owner is any individual who, directly or indirectly, exercises 'substantial control' over the reporting company or owns/controls at least 25% of its ownership interests.",
  },
  {
    q: "What information must be reported?",
    a: "You must provide the company's legal name, EIN, and address, along with each beneficial owner's full legal name, date of birth, residential address, and an image of an identifying document (like a Passport).",
  },
  {
    q: "Will this information be public?",
    a: "No. The BOI database is strictly confidential and not accessible to the general public. FinCEN only shares it with authorized government agencies for law enforcement and national security purposes.",
  },
  {
    q: "Do I have to file this every year?",
    a: "No, it is not an annual filing. You only file the initial report once. However, if any reported information changes (like a new address, new passport, or change in ownership), you must file an updated report within 30 days.",
  },
  {
    q: "Can non-US residents file this?",
    a: "Yes. Non-US residents who own US companies are absolutely subject to this law and must file using their foreign passport and foreign residential address.",
  },
  {
    q: "Does ADVAQ handle this for me?",
    a: "Yes. If you form your LLC with us, the initial BOI filing is included. If you formed your LLC elsewhere, we offer this standalone BOI reporting service to ensure you are compliant.",
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
  serviceType: "FinCEN BOI Reporting",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "FinCEN BOI Report Filing Service",
  description:
    "Mandatory FinCEN BOI Report filing for US LLCs and Corporations to avoid daily federal penalties under the CTA.",
  areaServed: "United States",
  url: "https://[yourdomain.com]/us-services/boi-report",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "USD",
    description: "One-time fee for FinCEN BOI Report preparation and filing.",
  },
};

export const Route = createFileRoute("/us-services/boi-report")({
  head: () => ({
    meta: [
      { title: "FinCEN BOI Report Filing Service | ADVAQ" },
      {
        name: "description",
        content:
          "File your mandatory Beneficial Ownership Information (BOI) Report with FinCEN. Avoid $500/day penalties. Expert filing service for US LLCs.",
      },
      {
        name: "keywords",
        content:
          "boi report, fincen filing, beneficial ownership information, cta compliance, corporate transparency act, us llc compliance",
      },
      {
        property: "og:title",
        content: "FinCEN BOI Report Filing Service | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "File your mandatory Beneficial Ownership Information (BOI) Report with FinCEN. Avoid $500/day penalties. Expert filing service for US LLCs.",
      },
      { property: "og:url", content: "/us-services/boi-report" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/boi-report" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: BoiReportService,
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
            🇺🇸 FEDERAL COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            FinCEN BOI Report
            <br />
            Filing Service
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Ensure compliance with the Corporate Transparency Act. Let us handle your mandatory federal Beneficial Ownership filing before the 90-day deadline expires.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              File My BOI Report
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
              <Check size={16} className="text-gold-500" /> 100% Accuracy Guaranteed
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Avoid $500/Day Fines
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Fast FinCEN E-Filing
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
                What is the BOI Report?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Enacted by the US Congress, the Corporate Transparency Act (CTA) mandates that all small businesses (including LLCs and Corporations) disclose their 'Beneficial Owners' to the Financial Crimes Enforcement Network (FinCEN), a bureau of the US Treasury.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                A beneficial owner is any individual who owns at least 25% of the company or exercises substantial control over it. This applies strictly to foreign owners of US LLCs as well. The goal is to prevent financial crimes, but the burden of filing falls squarely on the business owner.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Strict Deadlines</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">New Companies:</strong> Must file within 90 days of receiving formation confirmation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Updates:</strong> Must file within 30 days if any owner information changes (e.g., new passport).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">No Exceptions:</strong> Missing these deadlines triggers automatic severe penalties.</span>
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

/* ---------- SECTION 3: THE RISK ---------- */
function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Cost of Ignoring the CTA
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The federal government is enforcing this new law with unprecedented severity. Ignorance of the law is not an accepted defense.
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
                  $500 Daily Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Civil penalties accrue at $500 for every single day the report is late, up to a maximum of $10,000. Just being 20 days late costs $10,000.
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
                  Criminal Liability
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Willful failure to report, or willfully providing false information, can result in criminal penalties including up to two years of federal imprisonment.
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
                  Data Rejection
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  FinCEN requires exact formatting for foreign addresses and ID uploads. Simple formatting errors can cause rejections, eating up your 90-day grace period.
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
      title: "Data Audit",
      desc: "We review your company documents and passports to determine exactly who qualifies as a beneficial owner and company applicant.",
    },
    {
      title: "FinCEN E-Filing",
      desc: "We manually input all required corporate and personal data into the FinCEN secure portal, ensuring exact compliance with their formatting rules.",
    },
    {
      title: "ID Document Verification",
      desc: "We verify and format your foreign passports or IDs to ensure they meet FinCEN's strict upload criteria.",
    },
    {
      title: "Filing Confirmation",
      desc: "We provide the official FinCEN transcript and confirmation receipt proving you have met your federal obligations.",
    },
    {
      title: "FinCEN ID Creation",
      desc: "Optional creation of individual FinCEN IDs to make future reporting and updates significantly easier.",
    },
    {
      title: "Deadline Tracking",
      desc: "We monitor your formation dates and ensure the report is filed well before the 90-day limit expires.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Stress-Free BOI Filing
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the complexities of the FinCEN portal so you don't have to.
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
            One-Time Filing Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              BOI Reporting
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">INITIAL REPORT FILING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$119</span>
              <span className="text-sm text-gray-500">one time</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Flat fee for single-member and multi-member LLCs. Avoids $500/day penalties.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Beneficial Owner determination</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Document formatting & FinCEN E-Filing</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Delivery of official FinCEN receipt</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Support for foreign addresses & IDs</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              File Report Now — $119
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
      title: "Data Submission",
      desc: "Complete our secure intake form with your LLC details and owner passport images.",
    },
    {
      title: "Compliance Review",
      desc: "We review the data to ensure it meets FinCEN's strict formatting guidelines.",
    },
    {
      title: "Drafting",
      desc: "We compile the official BOI report based on your provided information.",
    },
    {
      title: "FinCEN Transmission",
      desc: "We securely e-file the report directly to the federal FinCEN database.",
    },
    {
      title: "Confirmation",
      desc: "You receive the official FinCEN transcript proving you are legally compliant.",
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
            Fast, secure, and fully compliant.
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

/* ---------- SECTION 7: FEATURE HIGHLIGHTS ---------- */
function SpecialSection() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>DATA SECURITY</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Your Privacy & The Federal Government
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Understanding who sees your BOI data and how we protect it.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <AlertOctagon className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Not Public Record</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Unlike State LLC registries, FinCEN BOI data is completely private. It is not searchable on Google or any public state database.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Search className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Law Enforcement Only</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                The data is housed in a secure federal database accessible only to authorized law enforcement agencies, tax authorities, and national security officials.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Users className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Bank Verification</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                With your explicit consent, financial institutions (like Mercury or Stripe) may request access to your BOI data to fulfill their Customer Due Diligence (CDD) requirements.
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
      title: "Wyoming LLC Formation",
      path: "/us-services/wyoming-llc-formation",
      desc: "Our complete formation package includes the initial FinCEN BOI filing for free.",
    },
    {
      title: "US EIN Registration",
      path: "/us-services/ein-registration",
      desc: "You must have an EIN from the IRS before you can file your BOI Report with FinCEN.",
    },
    {
      title: "US Registered Agent",
      path: "/us-services/registered-agent",
      desc: "Maintain your mandatory state compliance alongside your federal FinCEN compliance.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related US Compliance Services
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
                  to="/us-services"
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
            AVOID FEDERAL PENALTIES
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            The 90-Day Clock is Ticking.
            <br />
            File Your Report Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Don't risk $500/day penalties or criminal liability. Let our experts handle the FinCEN bureaucracy and secure your compliance receipt.
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
export default function BoiReportService() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <SpecialSection />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
