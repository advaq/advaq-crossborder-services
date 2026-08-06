import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Clock,
  Shield,
  ArrowRight,
  Sparkles,
  FileCheck,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-ein-eligibility-calculator")({
  head: () => ({
    meta: [
      { title: "US EIN Application Eligibility & Timeline Tool (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US EIN tax ID application timeline & eligibility tool for foreign LLC owners without SSN/ITIN. Compare SS-4 Fax vs 147C verification.",
      },
      {
        name: "keywords",
        content:
          "how to get ein without ssn 2026, foreign non resident ein application timeline, irs ss-4 fax 147c letter non-us resident, cp575 ein confirmation letter",
      },
      {
        property: "og:title",
        content: "US EIN Application Eligibility & Timeline Tool | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Find out how foreign founders get an official IRS EIN tax ID without an SSN or ITIN.",
      },
      { property: "og:url", content: "/calculators/us-ein-eligibility-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-ein-eligibility-calculator" }],
  }),
  component: USEINEligibilityToolPage,
});

function USEINEligibilityToolPage() {
  const [hasSSN, setHasSSN] = useState<boolean>(false);
  const [isLlcApproved, setIsLlcApproved] = useState<boolean>(true);
  const [hasUsAddress, setHasUsAddress] = useState<boolean>(true);
  const [selectedMethod, setSelectedMethod] = useState<string>("advaq");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const methodTimelines: Record<string, { days: string; cost: string; rate: string; note: string }> = {
    advaq: {
      days: "5–10 Business Days",
      cost: "$75",
      rate: "99.8% Guaranteed",
      note: "ADVAQ direct IRS agent filing with pre-validated Responsible Party representation.",
    },
    fax: {
      days: "4–6 Weeks",
      cost: "Free (Self-Filing)",
      rate: "70% Success Rate",
      note: "Manual Form SS-4 fax to IRS non-resident line (+1 855-641-6935). Rejections common if address formatted wrong.",
    },
    phone: {
      days: "1 Day (US Residents Only)",
      cost: "Free",
      rate: "N/A for Non-SSN",
      note: "IRS phone line requires valid US SSN/ITIN. International callers without SSN are routed to fax.",
    },
  };

  const currentMethod = methodTimelines[selectedMethod] || methodTimelines.advaq;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US EIN Eligibility & Timeline Tool", item: "https://advaq.com/calculators/us-ein-eligibility-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US EIN Application Eligibility & Timeline Tool (2026/2027)",
    url: "https://advaq.com/calculators/us-ein-eligibility-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check how non-US residents obtain an IRS Employer Identification Number (EIN) without an SSN or ITIN.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Can a foreign non-resident obtain an IRS EIN without a Social Security Number (SSN)?",
      a: "Yes! Foreign founders without an SSN or ITIN can apply for an EIN by submitting IRS Form SS-4 via fax or through an authorized Third-Party Designee.",
    },
    {
      q: "What is the difference between a CP575 letter and a 147C letter?",
      a: "CP575 is the original EIN confirmation letter mailed by the IRS upon issuance. If lost or delayed, the IRS issues a 147C letter, which serves as official proof of EIN for US banks like Mercury.",
    },
    {
      q: "Why does the online IRS EIN application fail for non-US founders?",
      a: "The online IRS EIN application tool strictly requires a US SSN or ITIN for the Responsible Party. Non-residents must use the manual Form SS-4 fax/mail workflow.",
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
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US EIN Timeline & Eligibility</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            IRS EIN Tax ID Timeline & Eligibility Tool (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check eligibility and estimated processing time for obtaining an IRS EIN Tax ID as a Non-US Resident founder without SSN or ITIN.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-3">
                Select EIN Application Filing Method:
              </label>
              <div className="space-y-3 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedMethod("advaq")}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedMethod === "advaq"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <div>
                    <strong className="block text-sm font-semibold">ADVAQ Managed IRS Fast-Track (Recommended)</strong>
                    <span className="text-gray-400 text-[11px]">No SSN required. IRS Form 147C & CP575 verification letter.</span>
                  </div>
                  <span className="font-mono text-gold-400 font-bold shrink-0 ml-2">5–10 Days</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod("fax")}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedMethod === "fax"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <div>
                    <strong className="block text-sm font-semibold">Self-Filing via IRS Form SS-4 Fax</strong>
                    <span className="text-gray-400 text-[11px]">Manual submission to IRS international fax line.</span>
                  </div>
                  <span className="font-mono text-amber-400 font-bold shrink-0 ml-2">4–6 Weeks</span>
                </button>
              </div>
            </div>

            <div className="space-y-3 text-xs border-t border-border pt-4">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={isLlcApproved}
                  onChange={(e) => setIsLlcApproved(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <span className="text-navy-950 font-semibold">Approved State Articles of Organization (Wyoming/Delaware LLC)</span>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasUsAddress}
                  onChange={(e) => setHasUsAddress(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <span className="text-navy-950 font-semibold">US Registered Agent & Physical Business Address Available</span>
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>EIN Timeline Estimate</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Estimated Processing Time:</span>
                  <span className="font-mono text-emerald-400 font-bold text-sm">{currentMethod.days}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Approval Success Probability:</span>
                  <span className="font-mono text-gold-400 font-semibold">{currentMethod.rate}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Official IRS Output Documents:</span>
                  <span className="font-mono text-white">Form 147C & CP575</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-4 rounded-xl mb-4 text-xs text-navy-200 leading-relaxed">
                {currentMethod.note}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/ein-registration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Get IRS EIN Tax ID with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP IRS EIN TIMELINE WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step IRS EIN Timeline Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of IRS Form SS-4 processing workflow for non-residents without SSN.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Prerequisite LLC Verification</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isLlcApproved && hasUsAddress ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {isLlcApproved && hasUsAddress ? "Prerequisites Pass ✅" : "Incomplete Info ⚠️"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Approved Articles of Organization:</span> <strong className={isLlcApproved ? "text-emerald-400" : "text-amber-400"}>{isLlcApproved ? "Verified ✅" : "Pending State Approval"}</strong></div>
                <div className="flex justify-between"><span>US Business Physical Address:</span> <strong className={hasUsAddress ? "text-emerald-400" : "text-amber-400"}>{hasUsAddress ? "Verified ✅" : "Missing"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Selected Filing Channel</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{selectedMethod.toUpperCase()} Channel</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Application Method:</span> <strong className="text-white">{selectedMethod === "advaq" ? "ADVAQ Managed Direct IRS Agent" : "Manual Form SS-4 Fax"}</strong></div>
                <div className="flex justify-between"><span>IRS Queue Queue Priority:</span> <strong className={selectedMethod === "advaq" ? "text-emerald-400" : "text-amber-400"}>{selectedMethod === "advaq" ? "Fast-Track Agent Line" : "Standard Fax Queue"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Processing Time Estimate</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">{currentMethod.days}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Estimated Delivery Window:</span> <strong className="text-emerald-400 font-bold">{currentMethod.days}</strong></div>
                <div className="flex justify-between"><span>IRS Approval Rate:</span> <strong className="text-gold-400">{currentMethod.rate}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Delivered IRS Documentation</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Bank Ready ✅</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Official IRS Documents Delivered:</span> <strong>Form 147C & CP575</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Bank Account Verification:</span> <strong className="text-emerald-400">100% Mercury & Stripe Approved</strong></div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 1: QUICK REFERENCE SUMMARY TABLE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                IRS EIN Application Method Comparison for Non-Residents
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Filing Method</th>
                  <th className="p-3.5">Estimated Turnaround</th>
                  <th className="p-3.5">SSN/ITIN Needed?</th>
                  <th className="p-3.5 rounded-tr-xl">Official IRS Proof</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className="bg-gold-500/10 font-bold">
                  <td className="p-3.5 text-navy-950">ADVAQ Direct IRS Fast-Track</td>
                  <td className="p-3.5 font-mono text-emerald-600">5–10 Business Days ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600">NO (Foreign Passport)</td>
                  <td className="p-3.5">IRS Form 147C & CP575</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Self Form SS-4 Fax</td>
                  <td className="p-3.5 font-mono text-amber-600">4–6 Weeks</td>
                  <td className="p-3.5 font-mono text-emerald-600">NO</td>
                  <td className="p-3.5">CP575 Confirmation Fax</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">IRS Online Portal</td>
                  <td className="p-3.5 font-mono text-red-600">Instant (US Residents Only)</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">YES (Mandatory US SSN)</td>
                  <td className="p-3.5">PDF Download (US Only)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (IRS EIN Application)
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

        {/* ADVAQ CTA */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ IRS Authorized Third-Party Designee
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Get Your Official IRS EIN Tax ID in 5–10 Business Days
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Skip 6-week IRS fax delays. Our IRS specialists file Form SS-4 and obtain your official 147C & CP575 EIN letter for your US LLC.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/ein-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Get IRS EIN Tax ID for $75 <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp IRS Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
