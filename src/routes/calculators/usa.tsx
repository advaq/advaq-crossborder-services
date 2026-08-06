import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, ArrowRight, Sparkles, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/calculators/usa")({
  head: () => ({
    meta: [
      { title: "USA Business & Tax Calculators Suite (2026) | 15 Free US LLC & IRS Tools" },
      {
        name: "description",
        content:
          "15 free interactive US tax calculators for foreign owners, non-resident LLC founders, Amazon sellers & freelancers. Calculate 0% foreign owner tax, Form 5472 penalties, FinCEN BOI deadlines, sales tax nexus, and state formation costs.",
      },
      {
        name: "keywords",
        content:
          "us business calculators 2026, 15 us tax calculators, us llc tax calculator for non residents, wyoming vs delaware llc calculator, form 5472 penalty calculator, fincen boi deadline checker, us sales tax calculator foreign seller",
      },
      {
        property: "og:title",
        content: "USA Business & Tax Calculators Suite (2026) | 15 Interactive Tools | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "15 free interactive US LLC tax, formation, state comparison, and IRS compliance calculators. Updated for IRS 2026 regulations.",
      },
      { property: "og:url", content: "https://advaq.com/calculators/usa" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/usa" }],
  }),
  component: USACalculatorsHubPage,
});

function USACalculatorsHubPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const keyRates = [
    { label: "Foreign LLC Income Tax", value: "0%", detail: "If Non-ETBUS & Non-US Source" },
    { label: "Form 5472 Late Penalty", value: "$25,000", detail: "Automatic IRS Statutory Fine" },
    { label: "FinCEN BOI Penalty", value: "$590/Day", detail: "Corporate Transparency Act" },
    { label: "IRS Compliance", value: "2026", detail: "Fully Updated Rules" },
  ];

  const categories = [
    {
      title: "🔴 High Priority US Entity & State Selection",
      subtitle: "State comparison, non-resident 0% tax rules, and entity structure decision tools.",
      tools: [
        {
          name: "Wyoming vs Delaware vs New Mexico LLC Comparison Tool",
          slug: "/calculators/us-wyoming-vs-delaware-calculator",
          desc: "Compare formation fees ($60 vs $90), privacy protection, annual report costs, and state income tax rules for non-residents.",
          badge: "Most Popular",
        },
        {
          name: "Non-Resident Alien US Tax & ETBUS Eligibility Checker",
          slug: "/calculators/us-tax-eligibility-calculator",
          desc: "Determine whether your US LLC qualifies for 0% US Federal Income Tax based on physical presence, US employees, and ETBUS rules.",
          badge: "Tax Exemption",
        },
        {
          name: "US LLC vs C-Corporation Decision Matrix Tool",
          slug: "/calculators/us-llc-vs-c-corp-calculator",
          desc: "Compare Single-Member LLC pass-through tax treatment against 21% C-Corp double taxation for VC fundraising vs bootsrapped agencies.",
          badge: "Entity Selection",
        },
      ],
    },
    {
      title: "🟠 IRS Compliance & Late Penalty Exposure",
      subtitle: "Form 5472 $25,000 penalties, FinCEN BOI reporting deadlines, and IRS audit risk estimators.",
      tools: [
        {
          name: "IRS Form 5472 & 1120 Late Filing Penalty Estimator",
          slug: "/calculators/us-penalty-risk-calculator",
          desc: "Calculate statutory IRS penalties ($25,000 per unfiled form) and compounding interest for overdue foreign-owned single-member LLC filings.",
          badge: "IRS Penalty Risk",
        },
        {
          name: "FinCEN BOI Report Deadline & Civil Penalty Checker",
          slug: "/calculators/us-boi-deadline-calculator",
          desc: "Check your exact Beneficial Ownership Information (BOI) filing deadline under Corporate Transparency Act and estimate $590/day non-compliance fines.",
          badge: "FinCEN Deadline",
        },
        {
          name: "US LLC State Annual Compliance & Franchise Tax Estimator",
          slug: "/calculators/us-llc-annual-compliance-calculator",
          desc: "Calculate mandatory annual report fees and franchise taxes across all 50 US states (Wyoming $60, Delaware $300, California $800).",
          badge: "Annual Compliance",
        },
      ],
    },
    {
      title: "🟡 Formation Costs, Banking & EIN Processing",
      subtitle: "Complete LLC setup cost breakdowns, EIN processing timelines, and Mercury bank approval odds.",
      tools: [
        {
          name: "US LLC Formation & Non-Resident Overhead Cost Calculator",
          slug: "/calculators/us-cost-calculator",
          desc: "Calculate total state filing fees, Registered Agent fees, US virtual physical address, EIN processing, and Form 5472 accounting costs.",
          badge: "Setup Cost",
        },
        {
          name: "IRS EIN Application Timeline & Document Checker (Without SSN)",
          slug: "/calculators/us-ein-eligibility-calculator",
          desc: "Estimate processing time for obtaining an Employer Identification Number (EIN) via Form SS-4 for foreign founders without an SSN or ITIN.",
          badge: "EIN Timeline",
        },
        {
          name: "US Business Bank Account Approval Probability Checker",
          slug: "/calculators/us-bank-approval-calculator",
          desc: "Check non-resident approval odds for Mercury Bank, Relay Financial, and Wise Business and receive custom banking recommendations.",
          badge: "Bank Matching",
        },
      ],
    },
    {
      title: "🔵 Federal Income Tax, Self-Employment & Sales Tax",
      subtitle: "Form 1040-NR brackets, 15.3% SE tax exemptions, and e-commerce economic nexus tools.",
      tools: [
        {
          name: "US Federal Income Tax Calculator (Form 1040-NR)",
          slug: "/calculators/us-federal-income-tax-calculator",
          desc: "Calculate progressive US federal tax brackets (10% to 37%) for ECI income derived from US trade or business operations.",
          badge: "Federal Income Tax",
        },
        {
          name: "US Self-Employment Tax (15.3%) Exemption Checker",
          slug: "/calculators/us-self-employment-tax-calculator",
          desc: "Verify statutory exemption from 15.3% Social Security & Medicare Self-Employment Tax for Non-Resident Aliens under IRC Sec 1402.",
          badge: "15.3% SE Exemption",
        },
        {
          name: "US Sales Tax Economic Nexus Calculator for Foreign Sellers",
          slug: "/calculators/us-sales-tax-calculator",
          desc: "Track state revenue thresholds ($100,000 / 200 transactions) across Amazon, Shopify, and Stripe sales to determine sales tax registration duties.",
          badge: "E-Commerce Nexus",
        },
      ],
    },
    {
      title: "🟢 IP Trademarks, FBAR Reporting & Custom Quizzes",
      subtitle: "USPTO trademark registration costs, FBAR/FATCA reporting, and interactive state recommenders.",
      tools: [
        {
          name: "USPTO Federal Trademark Registration Cost Calculator",
          slug: "/calculators/us-trademark-cost-calculator",
          desc: "Calculate total costs for registering a US federal trademark with USPTO including class fees ($250-$350) and TEAS Plus filing options.",
          badge: "USPTO Trademarks",
        },
        {
          name: "FBAR (FinCEN 114) & FATCA Account Exemption Checker",
          slug: "/calculators/us-fbar-fatca-checker-calculator",
          desc: "Check $10,000 foreign bank account threshold for mandatory FBAR filing and calculate non-willful penalty exposure ($15,611+).",
          badge: "FBAR & FATCA",
        },
        {
          name: "Which US State Should You Form Your LLC In? Interactive Quiz",
          slug: "/calculators/us-llc-recommendation-quiz-calculator",
          desc: "Answer 4 simple questions about your business model to get an immediate recommendation between Wyoming, Delaware, New Mexico, or Florida.",
          badge: "State Quiz",
        },
      ],
    },
  ];

  const faqs = [
    {
      q: "Can a foreign non-resident owner pay 0% US Federal Income Tax on a US Single-Member LLC?",
      a: "Yes. A single-member US LLC owned by a non-resident alien is classified as a disregarded entity. If the business has no US physical presence, no US employees, and is not Engaged in Trade or Business in the US (ETBUS), all income is foreign-source and subject to 0% US federal income tax.",
    },
    {
      q: "What is IRS Form 5472 and why is the penalty $25,000 for foreign-owned US LLCs?",
      a: "Form 5472 (Information Return of a 25% Foreign-Owned U.S. Corporation) is mandatory for foreign-owned disregarded US LLCs to report reportable transactions (such as capital contributions or owner funds). Failing to file Form 5472 or Pro Forma 1120 on time triggers an automatic, statutory $25,000 IRS penalty.",
    },
    {
      q: "What is the FinCEN BOI Report deadline and penalty under the Corporate Transparency Act?",
      a: "All US LLCs must report Beneficial Ownership Information (BOI) to FinCEN. LLCs formed in 2024+ must file within 90 calendar days of formation, while existing entities must comply by deadlines. Failing to report can incur civil penalties up to $590 per day.",
    },
    {
      q: "Which US state is best for non-residents: Wyoming, Delaware, or New Mexico?",
      a: "Wyoming is preferred for small businesses, e-commerce, and freelancers due to $0 state income tax, low annual fees ($60), and nominee privacy. Delaware is ideal for startups seeking venture capital. New Mexico offers total member privacy with $0 annual report fees.",
    },
    {
      q: "What is the difference between a Wyoming LLC and a Delaware LLC for foreign non-residents?",
      a: "Wyoming is best for single founders, e-commerce, and agencies seeking $0 state income tax, low annual fees ($60), and enhanced privacy without state tax returns. Delaware is preferred by startups seeking US venture capital funding or institutional investors.",
    },
  ];

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://advaq.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculators",
        item: "https://advaq.com/calculators",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "USA Calculators",
        item: "https://advaq.com/calculators/usa",
      },
    ],
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "USA Business & Tax Calculators Suite",
    description: "15 interactive US LLC tax, formation, state comparison, and IRS compliance calculators.",
    itemListElement: categories.flatMap((cat) => cat.tools).map((t, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: t.name,
      url: `https://advaq.com${t.slug}`,
      description: t.desc,
    })),
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-navy-950">
      {/* Structured JSON-LD Schemas for AEO / AIO / Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4">
            <Link to="/calculators" className="hover:underline transition-colors">Calculators</Link>
            <span>/</span>
            <span className="text-gray-300">USA Calculators</span>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-6">
            <Sparkles size={14} className="text-gold-400" /> IRS & FinCEN 2026 Compliance Rules Updated
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-4xl mx-auto leading-tight">
            🇺🇸 USA Business & Tax Calculators Suite (2026)
          </h1>

          <p className="mt-5 text-navy-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed space-y-1">
            <span className="block">15 free interactive tax, compliance, and financial estimators for foreign-owned US LLCs, non-resident founders, Amazon sellers, and freelancers.</span>
            <span className="block text-gold-400/90 text-xs sm:text-sm font-medium pt-1">Updated for IRS 2026 tax regulations, Form 1040-NR ECI brackets, state annual compliance costs, and Mercury bank account approvals.</span>
          </p>

          {/* KEY TAX METRICS STAT BAR (AEO / AIO Snippet Friendly) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-left max-w-4xl mx-auto">
            {keyRates.map((item, i) => (
              <div key={i} className="bg-navy-900/80 border border-navy-800 rounded-xl p-4 backdrop-blur-sm">
                <span className="text-[11px] font-medium text-gold-400 uppercase tracking-wider block">{item.label}</span>
                <span className="text-xl sm:text-2xl font-bold font-serif text-white mt-1 block">{item.value}</span>
                <span className="text-xs text-gray-400 mt-0.5 block">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR LIST CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <div className="border-b border-border pb-4">
              <h2 className="font-serif text-2xl md:text-3xl text-navy-950 font-bold">
                {cat.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{cat.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.tools.map((t, i) => (
                <div key={i} className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                        {t.badge}
                      </span>
                      <Calculator size={20} className="text-navy-950 group-hover:text-gold-500 transition-colors" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">{t.name}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">{t.desc}</p>
                  </div>

                  <Link
                    to={t.slug}
                    className="btn-gold !py-3 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    Launch Calculator <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ SECTION (AEO & AIO Direct Answer Optimization) */}
      <section className="bg-slate-50 border-t border-border py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-2">
              Frequently Asked Questions (US Business & Tax)
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xl mx-auto">
              Quick authoritative guidance on foreign owner 0% tax rules, IRS Form 5472 $25,000 penalties, FinCEN BOI deadlines, and state selection.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-serif text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
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
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-navy-950 text-white py-16 border-t border-navy-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Need Personal Guidance from a US Corporate Tax & IRS Compliance Specialist?
          </h2>
          <p className="text-navy-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get your foreign-owned US LLC formation, SSN-less EIN application, IRS Form 5472/1120 filing, FinCEN BOI report, and Mercury bank account setup managed by certified US tax advisors.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="btn-gold !py-3.5 !px-8 text-xs font-semibold inline-flex items-center gap-2 uppercase tracking-wider"
            >
              Book a Tax Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
