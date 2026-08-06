import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  FileText,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-ntn-eligibility-calculator")({
  head: () => ({
    meta: [
      { title: "NTN Registration Eligibility & Document Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FBR NTN registration eligibility checker. Check required documents, timeline & process for Salaried, Business Individual, AOP & SECP Companies.",
      },
      {
        name: "keywords",
        content:
          "fbr ntn registration checker pakistan 2026, how to get ntn number salaried business individual, secp company ntn registration documents checklist, iris fbr 181 ntn registration",
      },
      {
        property: "og:title",
        content: "NTN Registration Eligibility & Document Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Verify required documents and process for obtaining an FBR NTN number in Pakistan.",
      },
      { property: "og:url", content: "/calculators/pakistan-ntn-eligibility-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-ntn-eligibility-calculator" }],
  }),
  component: PakistanNTNEligibilityPage,
});

function PakistanNTNEligibilityPage() {
  const [applicantType, setApplicantType] = useState<string>("salaried");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const details: Record<string, { docs: string[]; timeline: string; fee: string }> = {
    salaried: {
      docs: [
        "CNIC (Color Copy)",
        "Active Mobile Number registered on applicant's CNIC",
        "Personal Email Address",
        "Paid Utility Bill (electricity or gas bill of residence)",
        "Salary Slip / Employment Certificate",
      ],
      timeline: "Instant / Same Day (24 Hours)",
      fee: "Rs. 2,500 (ADVAQ Professional Assistance)",
    },
    business: {
      docs: [
        "CNIC (Color Copy)",
        "Active Mobile Number registered on applicant's CNIC",
        "Business Letterhead & Rubber Stamp",
        "Paid Commercial Utility Bill of business premises",
        "Business Bank Account Maintenance Certificate (IBAN)",
        "Rent Agreement / Ownership Document of Business Office",
      ],
      timeline: "1 - 2 Working Days",
      fee: "Rs. 5,000 (Business NTN & Premises Addition)",
    },
    company: {
      docs: [
        "SECP Incorporation Certificate",
        "Memorandum & Articles of Association (MoA / AoA)",
        "Form A & Form 9 / Incorporation Form",
        "CNIC of all Directors & Chief Executive",
        "Company Business Bank Account Certificate",
        "Board Resolution appointing Principal Officer for FBR",
      ],
      timeline: "2 - 3 Working Days",
      fee: "Rs. 10,000 (Corporate FBR NTN Registration)",
    },
  };

  const currentDetails = details[applicantType] || details.salaried;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "NTN Registration Eligibility Checker", item: "https://advaq.com/calculators/pakistan-ntn-eligibility-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "NTN Registration Eligibility & Document Checker (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-ntn-eligibility-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Verify required documents, processing timelines, and eligibility criteria for FBR National Tax Number (NTN) registration under Section 181 of Income Tax Ordinance 2001.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is an FBR National Tax Number (NTN) in Pakistan?",
      a: "An NTN (National Tax Number) is a unique identification number issued by the Federal Board of Revenue (FBR). For individual Pakistani citizens, the NTN is automatically mapped to their 13-digit CNIC number upon registration.",
    },
    {
      q: "Why is a Business NTN required for opening a business bank account?",
      a: "Commercial banks in Pakistan require an FBR Business NTN Order / Form 181 certificate to open business current accounts for Sole Proprietorships, Partnerships (AOPs), and SECP Private Limited companies.",
    },
    {
      q: "Does obtaining an NTN automatically make me a Filer?",
      a: "NO! Simply registering an NTN does NOT make you an Active Taxpayer (Filer). You become an Active Taxpayer on the FBR Active Taxpayer List (ATL) only AFTER filing your annual income tax return.",
    },
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-navy-950">
      {/* Structured JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>NTN Registration Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            FBR NTN Registration & Document Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check exact document requirements, processing timelines, and registration procedures for FBR NTN numbers in Pakistan.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Applicant Structure:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setApplicantType("salaried")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    applicantType === "salaried" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Salaried Person
                </button>
                <button
                  type="button"
                  onClick={() => setApplicantType("business")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    applicantType === "business" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Sole Proprietor
                </button>
                <button
                  type="button"
                  onClick={() => setApplicantType("company")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    applicantType === "company" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  SECP Company
                </button>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-3">
                Required Documents Checklist:
              </label>
              <div className="space-y-2 text-xs">
                {currentDetails.docs.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 bg-white border border-border rounded-xl">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span className="text-navy-950 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>NTN Processing Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Processing Timeline:</span>
                  <span className="font-mono text-emerald-400 font-bold">{currentDetails.timeline}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Professional Filing Fee:</span>
                  <span className="font-mono text-gold-400 font-bold">{currentDetails.fee}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  ADVAQ Guaranteed NTN Filing
                </span>
                <p className="text-xs text-navy-200 leading-relaxed">
                  Our tax lawyers will handle your complete Iris FBR registration, biometric verification setup, and active taxpayer status.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/ntn-registration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Apply for FBR NTN with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. DYNAMIC STEP-BY-STEP MATHEMATICAL WALKTHROUGH ENGINE */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step NTN & Iris Registration Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of FBR NTN registration steps for {applicantType.toUpperCase()} applicants.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Entity Classification</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Entity Type</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Applicant Category:</span> <strong className="text-white uppercase">{applicantType}</strong></div>
                <div className="flex justify-between"><span>FBR Tax Office:</span> <strong className="text-white">RTO Jurisdiction</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Mandatory NTN:</span> <strong>Required</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Document Verification</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">IRIS Portal</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>CNIC & Mobile OTP:</span> <strong className="text-emerald-400">Verified</strong></div>
                <div className="flex justify-between"><span>Electricity Bill / Rent:</span> <strong className="text-white">Proof of Address</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Docs Checklist:</span> <strong>{currentDetails.docs.length} Documents Ready</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: FBR Biometrics</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">NADRA Biometrics</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>NADRA E-Sahulat:</span> <strong className="text-gold-400">Biometric Verification</strong></div>
                <div className="flex justify-between"><span>Iris Password & PIN:</span> <strong className="text-white">Generated</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>FBR Iris Status:</span> <strong>Active</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Turnkey NTN Issuance</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">NTN Certificate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Processing Timeline:</span> <strong className="text-emerald-400">{currentDetails.timeline}</strong></div>
                <div className="flex justify-between"><span>Filing Service Fee:</span> <strong className="text-white">{currentDetails.fee}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>NTN Order Status:</span> <strong>Ready in 24 Hours</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: QUICK REFERENCE SUMMARY TABLE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                FBR NTN Category Document & Timeline Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">NTN Category</th>
                  <th className="p-3.5">FBR Iris Form</th>
                  <th className="p-3.5">Key Document Required</th>
                  <th className="p-3.5 rounded-tr-xl">Turnaround Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Salaried Individual</td>
                  <td className="p-3.5 font-mono text-gray-600">Form 181 (Salaried)</td>
                  <td className="p-3.5 text-gray-600">CNIC + Salary Slip + Utility Bill</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">Same Day (24 Hours)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Business / Sole Proprietorship</td>
                  <td className="p-3.5 font-mono text-gray-600">Form 181 (Business)</td>
                  <td className="p-3.5 text-gray-600">Letterhead + Commercial Lease + IBAN</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">1 to 2 Working Days</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">SECP Company NTN</td>
                  <td className="p-3.5 font-mono text-gray-600">Form 181 (Corporate)</td>
                  <td className="p-3.5 text-gray-600">SECP Certificate + MOA/AOA + Board Res.</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">2 to 3 Working Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 2: FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (FBR NTN Registration)
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto pt-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-serif text-sm sm:text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: RELATED PAKISTAN CALCULATORS */}
        <section className="space-y-6">
          <div className="border-b border-border pb-4">
            <h2 className="font-serif text-2xl font-bold text-navy-950">
              Explore Related FBR Compliance Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Filer Verification
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Filer or Non-Filer Status Checker
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Step-by-step guide & SMS 9966 checker to verify FBR Active Taxpayer List (ATL) status.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-filer-status-checker-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Checker <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Salary Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Salary & Business Tax Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate progressive monthly and annual income tax slabs for salaried employees.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-fbr-salary-tax-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  SECP Setup
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  SECP Private Limited Company Setup Cost
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate SECP company incorporation fees, NIFT digital signatures, and NTN registration.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-secp-cost-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: ADVAQ ADVISORY BANNER */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ Registered Advocates & FBR Tax Consultants
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Obtain Your FBR NTN & Business Registration
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan tax legal team registers your personal and business NTN on FBR Iris, adds business bank account details, and activates ATL Filer status.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/ntn-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Apply for FBR NTN <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
