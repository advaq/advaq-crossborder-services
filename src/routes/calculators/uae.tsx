import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, ArrowRight, CheckCircle2, Sparkles, Building2 } from "lucide-react";

export const Route = createFileRoute("/calculators/uae")({
  head: () => ({
    meta: [
      { title: "UAE Freezone & Tax Calculators Suite (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Dubai Freezone setup cost, 9% Corporate Tax, Small Business Relief, Excise Tax, and Golden Visa calculators.",
      },
      {
        name: "keywords",
        content:
          "uae freezone cost calculator 2026, dubai company formation cost calculator, uae corporate tax deadline checker, dubai real estate roi tax calculator",
      },
      {
        property: "og:title",
        content: "UAE Freezone & Tax Calculators Suite | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Complete suite of 14 interactive UAE tax, setup cost, real estate ROI, and Corporate Tax compliance calculators.",
      },
      { property: "og:url", content: "/calculators/uae" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae" }],
  }),
  component: UAECalculatorsHubPage,
});

function UAECalculatorsHubPage() {
  const categories = [
    {
      title: "🔴 High Priority UAE Tax & Setup Tools",
      tools: [
        {
          name: "UAE Excise Tax Calculator (50% / 100%)",
          slug: "/calculators/uae-excise-tax",
          desc: "Calculate FTA Excise Tax for tobacco (100%), energy drinks (100%), and carbonated/sweetened beverages (50%).",
          badge: "FTA Excise Tax",
        },
        {
          name: "UAE Freelance Permit vs Freezone License Cost",
          slug: "/calculators/uae-freelance-vs-freezone",
          desc: "Compare TECOM GoFreelance permit vs full Freezone company license fees & visa packages for remote workers.",
          badge: "Freelance vs LLC",
        },
        {
          name: "UAE Corporate Tax Registration Deadline Checker",
          slug: "/calculators/uae-corporate-tax-deadline",
          desc: "Check mandatory FTA registration deadlines under Decision No. 3 of 2024 to avoid statutory AED 10,000 late fines.",
          badge: "AED 10k Fine Risk",
        },
        {
          name: "Dubai Freezone Setup Cost Calculator",
          slug: "/calculators/uae-freezone",
          desc: "Compare IFZA, Meydan, SHAMS & RAKEZ visa package license costs, renewal costs year 2+, and flexi desk options.",
          badge: "Setup Cost",
        },
        {
          name: "UAE 9% Corporate Tax & Small Business Relief",
          slug: "/calculators/uae-tax",
          desc: "Calculate 0% tax threshold (AED 375k profit / AED 3M revenue SBR relief), QFZP status & 9% Corporate Tax.",
          badge: "Corporate Tax",
        },
      ],
    },
    {
      title: "🟡 Real Estate, Salary Gratuity & Treaties",
      tools: [
        {
          name: "Dubai Real Estate ROI & Tax Calculator",
          slug: "/calculators/uae-real-estate-roi",
          desc: "Calculate 4% DLD transfer fee, 2% agency fee, net rental yield, and 0% capital gains tax savings in Dubai.",
          badge: "Property ROI",
        },
        {
          name: "UAE Salary & End of Service Gratuity Calculator",
          slug: "/calculators/uae-gratuity-calculator",
          desc: "Calculate statutory End of Service severance payout under UAE Labor Law No. 33 of 2021 (21 vs 30 days basic salary).",
          badge: "Gratuity Payout",
        },
        {
          name: "UAE Double Tax Treaty Benefit Calculator",
          slug: "/calculators/uae-double-tax-treaty",
          desc: "Calculate cross-border withholding tax reductions (Pakistan-UAE, India-UAE DTT) & Tax Residency Certificate (TRC) savings.",
          badge: "Tax Treaties",
        },
        {
          name: "UAE 5% VAT Registration Threshold & Return Estimator",
          slug: "/calculators/uae-vat",
          desc: "Check mandatory AED 375,000 VAT limit, partial exemption recovery rate, and FTA late filing penalties.",
          badge: "VAT Registration",
        },
        {
          name: "UAE 2-Year Investor vs 10-Year Golden Visa Cost",
          slug: "/calculators/uae-visa-cost",
          desc: "Compare 2-Year Investor Visa vs 10-Year Golden Visa costs, VIP medical test, Emirates ID & family sponsorship.",
          badge: "Golden Visa",
        },
      ],
    },
    {
      title: "🟢 Decision Quizzes, Banking & Compliance",
      tools: [
        {
          name: "Freezone or Mainland? UAE Decision Quiz",
          slug: "/calculators/uae-freezone-vs-mainland-quiz",
          desc: "Answer quick questions about target clients, physical shopfronts, and tenders for a custom recommendation.",
          badge: "Decision Quiz",
        },
        {
          name: "UAE Tax Residency Certificate (TRC) Eligibility",
          slug: "/calculators/uae-tax-residency",
          desc: "Test Cabinet Decision No. 85 of 2022 physical presence rules (183-day vs 90-day threshold) for FTA TRC certificate.",
          badge: "Tax Residency",
        },
        {
          name: "Dubai Corporate Bank Account Approval Checker",
          slug: "/calculators/uae-bank-approval",
          desc: "Test Wio Bank, Mashreq NeoBiz, Emirates NBD & RAKBANK approval odds for freezone & mainland companies.",
          badge: "Bank Approval",
        },
        {
          name: "UAE ESR & UBO Compliance Risk Checker",
          slug: "/calculators/uae-esr-ubo",
          desc: "Test Economic Substance Regulations (ESR) filing obligations and Ultimate Beneficial Owner (UBO) declaration penalties.",
          badge: "ESR & UBO Compliance",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators" className="hover:underline">Calculators</Link>
            <span>/</span>
            <span>UAE Calculators</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            🇦🇪 UAE Freezone & Tax Calculators Suite (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            14 interactive calculators for Dubai Freezone setup, 9% Corporate Tax, Excise Tax, real estate ROI, and Golden Visas.
          </p>
        </div>
      </section>

      {/* CALCULATOR LIST */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-navy-950 font-bold border-b border-border pb-3">
              {cat.title}
            </h2>

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
    </div>
  );
}
