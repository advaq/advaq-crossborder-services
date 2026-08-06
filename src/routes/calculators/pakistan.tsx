import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, ArrowRight, Sparkles, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/calculators/pakistan")({
  head: () => ({
    meta: [
      { title: "Pakistan SECP & FBR Tax Calculators Suite (2026) | 15 Free Tax & Law Tools" },
      {
        name: "description",
        content:
          "15 free interactive Pakistan FBR & SECP calculators for Active Taxpayers (ATL Filers), IT exporters, freelancers & property buyers. Calculate FBR salary tax, Section 153 WHT, Section 236K/236C property taxes, SECP formation costs, and sales tax.",
      },
      {
        name: "keywords",
        content:
          "pakistan business calculators 2026, 15 pakistan tax calculators, fbr salary tax calculator 2026, section 153 withholding tax calculator, pakistan property transfer tax calculator 236k 236c, secp company registration cost calculator, pakistan freelancer tax calculator",
      },
      {
        property: "og:title",
        content: "Pakistan SECP & FBR Tax Calculators Suite (2026) | 15 Interactive Tools | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "15 free interactive Pakistan FBR tax, withholding tax, property transfer, and SECP compliance calculators. Updated for FBR Iris 2026/2027 rules.",
      },
      { property: "og:url", content: "https://advaq.com/calculators/pakistan" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan" }],
  }),
  component: PakistanCalculatorsHubPage,
});

function PakistanCalculatorsHubPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const keyRates = [
    { label: "IT Export Tax Rate", value: "0.25%", detail: "Section 154A Reduced Rate" },
    { label: "Property Buyer WHT", value: "3% vs 10.5%", detail: "ATL Filer vs Non-Filer" },
    { label: "Services WHT Rate", value: "9% vs 18%", detail: "Section 153 Filer / Non-Filer" },
    { label: "FBR Compliance", value: "2026/2027", detail: "Fully Updated Rules" },
  ];

  const categories = [
    {
      title: "🔴 High Priority FBR Income Tax & Salary Slabs",
      subtitle: "Filer vs Non-Filer savings, FBR salary tax slabs, and Section 153 Withholding Tax rates.",
      tools: [
        {
          name: "Pakistan Filer vs Non-Filer Tax Savings Calculator",
          slug: "/calculators/pakistan-filer-vs-non-filer-tax-calculator",
          desc: "Calculate exact money saved on property purchases (236K), seller WHT (236C), vehicle registration, and cash withdrawals by becoming an Active Filer.",
          badge: "Most Popular",
        },
        {
          name: "FBR Salaried & Business Income Tax Slabs Calculator",
          slug: "/calculators/pakistan-fbr-salary-tax-calculator",
          desc: "Calculate progressive monthly and annual income tax liabilities for salaried employees and sole proprietors under 2026/2027 FBR budget slabs.",
          badge: "Salary Tax",
        },
        {
          name: "FBR Section 153 Withholding Tax (WHT) Calculator",
          slug: "/calculators/pakistan-wht-calculator",
          desc: "Calculate withholding tax rates for Services (9%/18%), Sale of Goods (5%/10%), and Execution of Contracts (7.5%/15%) under Section 153.",
          badge: "Withholding Tax",
        },
      ],
    },
    {
      title: "🟠 IT Export Incentives & Freelance Tax Regimes",
      subtitle: "Section 154A IT export 0.25% tax credit, SBP FCVA USD retention, and PSEB savings.",
      tools: [
        {
          name: "Pakistan Freelancer All-in-One Tax & FCVA Retention Tool",
          slug: "/calculators/pakistan-freelancer-tax-calculator",
          desc: "Calculate net tax under Section 154A (0.25%) for Upwork/Fiverr freelancers and estimate 50% foreign currency retention in SBP FCVA accounts.",
          badge: "Freelancer Special",
        },
        {
          name: "Pakistan IT Exporter 100% Tax Credit & PSEB ROI Tool",
          slug: "/calculators/pakistan-it-export-calculator",
          desc: "Calculate tax reductions and ROI from PSEB registration for IT software houses, web agencies, and BPO call centers.",
          badge: "100% Tax Credit",
        },
        {
          name: "FBR Section 15 Rental Income Tax & Tenant WHT Calculator",
          slug: "/calculators/pakistan-rental-income-tax-calculator",
          desc: "Calculate FBR property rent tax slabs for individual landlords and Section 155 tenant withholding tax deductions.",
          badge: "Property Rent Tax",
        },
      ],
    },
    {
      title: "🟡 Real Estate Property Transfer & Capital Gains",
      subtitle: "Section 236K buyer WHT, Section 236C seller WHT, and Section 37 property CGT.",
      tools: [
        {
          name: "Pakistan Property Transfer Tax Calculator (236K & 236C)",
          slug: "/calculators/pakistan-property-tax-calculator",
          desc: "Calculate Section 236K buyer WHT (3% vs 10.5%) and Section 236C seller WHT (3% vs 10%) based on property FBR valuation.",
          badge: "Property Transfer",
        },
        {
          name: "Pakistan Property Capital Gains Tax (Section 37) Calculator",
          slug: "/calculators/pakistan-capital-gains-tax-calculator",
          desc: "Calculate FBR Capital Gains Tax on plots, houses, and commercial property sales based on holding period (15% down to 0% after 3 years).",
          badge: "Property CGT",
        },
        {
          name: "Provincial Sales Tax on Services (PRA / SRB / KPRA) Calculator",
          slug: "/calculators/pakistan-sales-tax-calculator",
          desc: "Calculate provincial sales tax output across Punjab (PRA 16%), Sindh (SRB 13%), KPRA (15%), and FBR (ICT 15%) for IT & consulting firms.",
          badge: "Sales Tax on Services",
        },
      ],
    },
    {
      title: "🔵 SECP Company Incorporation & Penalty Risk",
      subtitle: "Private Limited setup costs, Form A/9 late filing penalty estimators, and NTN document checkers.",
      tools: [
        {
          name: "SECP Private Limited & SMC Setup Cost Calculator",
          slug: "/calculators/pakistan-secp-cost-calculator",
          desc: "Calculate exact SECP government fees, NIFT digital signatures, authorized capital fees, and NTN registration for Pvt Ltd & SMC companies.",
          badge: "SECP Setup Cost",
        },
        {
          name: "SECP Form A & Form 9 Late Filing Penalty Estimator",
          slug: "/calculators/pakistan-secp-penalty-calculator",
          desc: "Calculate statutory late filing fees and adjudication penalty risks for overdue SECP Form A, Form 9, Form 4, and annual corporate returns.",
          badge: "SECP Penalty Risk",
        },
        {
          name: "FBR NTN Registration Eligibility & Document Checker",
          slug: "/calculators/pakistan-ntn-eligibility-calculator",
          desc: "Check exact document requirements, processing timelines, and registration procedures for Salaried, Business, and SECP Company NTNs.",
          badge: "NTN Checklist",
        },
      ],
    },
    {
      title: "🟢 FBR Filer Verification, Audit Notices & Tax Calendar",
      subtitle: "ATL SMS 9966 guide, Iris notice statutory response timelines, and annual compliance calendar.",
      tools: [
        {
          name: "FBR Filer / Non-Filer Status Checker & SMS 9966 Guide",
          slug: "/calculators/pakistan-filer-status-checker-calculator",
          desc: "Step-by-step guide & checker to verify Active Taxpayer List (ATL) Filer status via SMS 9966 or FBR Iris portal, plus ATL surcharge details.",
          badge: "ATL Verification",
        },
        {
          name: "FBR Tax Notice Response Deadline & Penalty Calculator",
          slug: "/calculators/pakistan-fbr-notice-timeline-calculator",
          desc: "Check statutory response deadlines for FBR Iris notices (Sec 114, 116, 122, 177) and calculate Section 182 non-compliance penalty exposure.",
          badge: "Notice Response",
        },
        {
          name: "Pakistan FBR & SECP Tax Compliance Calendar (2026-2027)",
          slug: "/calculators/pakistan-tax-calendar-calculator",
          desc: "Interactive compliance calendar tracking FBR annual return dates, monthly sales tax filings, quarterly WHT, and SECP annual forms.",
          badge: "Tax Calendar",
        },
      ],
    },
  ];

  const faqs = [
    {
      q: "How does becoming an Active Taxpayer (ATL Filer) in Pakistan reduce withholding tax?",
      a: "FBR imposes double withholding tax rates (up to 100% surcharge) on Non-Filers for property transactions (Sec 236K/236C), vehicle registration, cash withdrawals, and dividend income. Filers enjoy standard lower rates—for instance, 3% vs 10.5% buyer WHT on property purchases under Section 236K.",
    },
    {
      q: "What is the tax rate for IT exporters and freelancers under FBR Section 154A?",
      a: "Registered IT/ITES exporters who register with PSEB and receive export proceeds in foreign currency through formal banking channels qualify for a concessionary 0.25% final tax rate under Section 154A. In addition, exporters can retain 50% of foreign currency earnings in SBP Exporters' Special FCVA accounts.",
    },
    {
      q: "What are the FBR Section 153 Withholding Tax (WHT) rates for services and contracts?",
      a: "Under Section 153 of the Income Tax Ordinance, withholding tax rates for payments to resident persons are: Services (9% for Filers, 18% for Non-Filers), Sale of Goods (5% for Filers, 10% for Non-Filers), and Execution of Contracts (7.5% for Filers, 15% for Non-Filers).",
    },
    {
      q: "How much does it cost and how long does it take to register a Private Limited company with SECP?",
      a: "Official SECP incorporation fees range between PKR 2,500 to PKR 5,000 for standard authorized capital, plus digital signatures (NIFT/e-Crac) and name reservation. Online registration through SECP eServices is typically completed within 2 to 3 working days.",
    },
    {
      q: "What are the tax rates and withholding tax exemptions on property transactions in Pakistan?",
      a: "Under Section 236K (buyer) and Section 236C (seller), Active Taxpayers (Filers) pay 3% WHT on property transfer value, whereas Non-Filers pay up to 10.5% - 12%. In addition, capital gains tax under Section 37 reduces to 0% for Filers after holding immovable property for over 3 years.",
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
        name: "Pakistan Calculators",
        item: "https://advaq.com/calculators/pakistan",
      },
    ],
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pakistan SECP & FBR Tax Calculators Suite",
    description: "15 interactive Pakistan FBR tax, withholding tax, property transfer, and SECP compliance calculators.",
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
            <span className="text-gray-300">Pakistan Calculators</span>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-6">
            <Sparkles size={14} className="text-gold-400" /> FBR & SECP 2026/2027 Tax Rules & Rates Updated
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-4xl mx-auto leading-tight">
            🇵🇰 Pakistan SECP & FBR Tax Calculators Suite (2026)
          </h1>

          <p className="mt-5 text-navy-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed space-y-1">
            <span className="block">15 free interactive tax, compliance, and financial estimators for Active Taxpayers (ATL Filers), IT exporters, property buyers, and SECP companies.</span>
            <span className="block text-gold-400/90 text-xs sm:text-sm font-medium pt-1">Updated for FBR Iris 2026/2027 budget rules, provincial sales tax (PRA/SRB/KPRA), and SECP statutory compliance deadlines.</span>
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
              Frequently Asked Questions (Pakistan SECP & FBR Tax)
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-xl mx-auto">
              Quick authoritative guidance on FBR ATL status, Section 154A IT export tax, Section 153 WHT, and SECP company registration.
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
            Need Personal Guidance from a Pakistan FBR Tax & SECP Specialist?
          </h2>
          <p className="text-navy-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get your FBR Iris tax filings, ATL status activation, SECP Form A/29 annual compliance, and IT export tax exemptions handled directly by licensed advocates and chartered tax advisors.
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
