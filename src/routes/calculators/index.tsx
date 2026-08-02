import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calculator,
  Globe,
  DollarSign,
  Shield,
  Percent,
  FileCheck,
  Building2,
  Scale,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";

const calculatorCategories = [
  {
    id: "uk",
    flag: "🇬🇧",
    title: "UK Business & Tax Calculators",
    shortName: "UK",
    exploreLink: "/calculators/uk",
    description:
      "Tax efficiency, VAT threshold, and dividend planning calculators for UK Limited Companies & overseas directors.",
    tools: [
      {
        name: "UK Self Assessment Tax Calculator",
        slug: "/calculators/uk-self-assessment",
        desc: "Calculate complete UK tax liability combining salary, freelance profit, rental income, and dividend earnings.",
        badge: "Most Searched",
      },
      {
        name: "UK Corporation Tax & Marginal Relief Calculator",
        slug: "/calculators/uk-corporation-tax",
        desc: "Calculate 19% Small Profits Rate, 25% Main Rate, and exact Marginal Relief discount for £50k–£250k profits.",
        badge: "Director Tax",
      },
      {
        name: "UK Tax & Dividend Optimizer Calculator",
        slug: "/calculators/uk-tax",
        desc: "Calculate optimal director salary (£12,570), dividend tax rates (8.75%), and SIPP pension tax relief.",
        badge: "High Conversion",
      },
    ],
  },
  {
    id: "usa",
    flag: "🇺🇸",
    title: "US Business & Tax Calculators",
    shortName: "US",
    exploreLink: "/calculators/usa",
    description:
      "Interactive tax, state cost, and compliance calculators for non-resident US LLC owners and founders.",
    tools: [
      {
        name: "US Federal Income Tax Calculator (Non-Resident)",
        slug: "/calculators/us-federal-income-tax",
        desc: "Calculate Form 1040-NR progressive tax brackets on Effectively Connected Income (ECI) for foreign LLC owners.",
        badge: "Most Searched",
      },
      {
        name: "US LLC Total State & Setup Cost Calculator",
        slug: "/calculators/us-cost",
        desc: "Compare Wyoming, Delaware, New Mexico & Florida state filing fees, registered agent, EIN & BOI report total costs.",
        badge: "LLC Setup Cost",
      },
      {
        name: "US Foreign Owner 0% Tax Eligibility Checker",
        slug: "/calculators/us-tax-eligibility",
        desc: "Test ETBUS and ECI rules to verify if your foreign single-member LLC pays 0% US income tax.",
        badge: "0% Tax Exemption",
      },
    ],
  },
  {
    id: "uae",
    flag: "🇦🇪",
    title: "UAE Freezone & Corporate Tax Calculators",
    shortName: "UAE",
    exploreLink: "/calculators/uae",
    description:
      "Dubai Freezone visa package costs, 9% Corporate Tax, and Small Business Relief estimators.",
    tools: [
      {
        name: "Dubai Freezone Setup Cost Calculator",
        slug: "/calculators/uae-freezone",
        desc: "Compare IFZA, Meydan, SHAMS & RAKEZ visa package license costs (0 to 4+ visas) vs Dubai Mainland.",
        badge: "Freezone Setup",
      },
      {
        name: "UAE Corporate Tax Registration Deadline Checker",
        slug: "/calculators/uae-corporate-tax-deadline",
        desc: "Check mandatory FTA registration deadlines under Decision No. 3 of 2024 to avoid statutory AED 10,000 late fines.",
        badge: "AED 10k Fine Risk",
      },
      {
        name: "UAE Excise Tax Calculator (50% / 100%)",
        slug: "/calculators/uae-excise-tax",
        desc: "Calculate FTA Excise Tax for tobacco (100%), energy drinks (100%), and carbonated/sweetened beverages (50%).",
        badge: "FTA Excise Tax",
      },
    ],
  },
  {
    id: "pakistan",
    flag: "🇵🇰",
    title: "Pakistan SECP & FBR Services Calculators",
    shortName: "Pakistan",
    exploreLink: "/calculators/pakistan",
    description:
      "ATL Filer savings, IT Exporter 0.25% Tax Rate, and SECP company formation estimators.",
    tools: [
      {
        name: "Pakistan Filer Tax Savings Calculator",
        slug: "/calculators/pakistan-tax",
        desc: "Calculate exact money saved on property purchases, car registration, bank transfers & FBR returns by becoming an ATL Filer.",
        badge: "FBR Savings",
      },
      {
        name: "Pakistan IT Export 0.25% Tax Exemption Calculator",
        slug: "/calculators/pakistan-it-export",
        desc: "Calculate 0.25% reduced withholding tax under Section 154A for IT & ITES export revenue with PSEB registration.",
        badge: "PSEB IT Export",
      },
      {
        name: "Pakistan SECP Company Incorporation Cost Calculator",
        slug: "/calculators/pakistan-secp-cost",
        desc: "Estimate official SECP registration fees, digital signatures, name availability, and legal drafting costs.",
        badge: "SECP Setup",
      },
    ],
  },
];

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ADVAQ Global Business & Tax Calculators Hub",
  url: "https://advaq.com/calculators",
  description:
    "Free interactive business formation, tax optimization, and compliance calculators for US LLCs, UK LTDs, UAE Freezones, and Pakistan SECP companies.",
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
};

export const Route = createFileRoute("/calculators/")({
  head: () => ({
    meta: [
      { title: "Global Business & Tax Calculators Hub (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive business formation, tax optimization, and compliance calculators for US LLCs, UK LTDs, UAE Freezones, and Pakistan SECP companies.",
      },
      {
        name: "keywords",
        content:
          "us llc cost calculator, uk tax dividend calculator, uae freezone cost calculator, pakistan filer tax savings calculator, advaq calculators hub",
      },
      {
        property: "og:title",
        content: "Global Business & Tax Calculators Hub | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Instant real-time calculations for business setup, tax exemptions, and legal compliance.",
      },
      {
        property: "og:type",
        content: "website",
      },
      { property: "og:url", content: "/calculators" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(hubSchema) }],
  }),
  component: CalculatorsHubPage,
});

function CalculatorsHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 px-4 py-1.5 rounded-full text-gold-500 text-xs uppercase tracking-widest font-semibold mb-6">
            <Calculator size={14} />
            <span>Interactive Business & Tax Intelligence</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium max-w-4xl mx-auto leading-tight">
            ADVAQ Global Business & Tax Calculators Hub
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Instant, real-time calculators to estimate corporate setup costs, tax savings, VAT thresholds, and compliance risk scores across the US, UK, UAE, and Pakistan.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-gold-500" />
              <span>100% Free Interactive Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-gold-500" />
              <span>Updated for 2026 Tax Rules</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-gold-500" />
              <span>Instant PDF & WhatsApp Export</span>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATORS CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {calculatorCategories.map((cat) => (
            <div key={cat.id} className="border border-border/80 rounded-2xl p-8 bg-off-white/50">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{cat.flag}</span>
                <h2 className="font-serif text-2xl md:text-3xl text-navy-950 font-semibold">
                  {cat.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm mb-8">{cat.description}</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                          {tool.badge}
                        </span>
                        <Calculator size={18} className="text-navy-900 group-hover:text-gold-500 transition-colors" />
                      </div>
                      <h3 className="font-serif text-lg text-navy-950 font-semibold group-hover:text-gold-600 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60">
                      <Link
                        to={tool.slug}
                        className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
                      >
                        Launch Calculator <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex justify-center">
                <Link
                  to={cat.exploreLink}
                  className="inline-flex items-center gap-2 bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 font-semibold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 group shadow-sm"
                >
                  <span>Explore All {cat.shortName} Calculators</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA BANNER */}
      <section className="bg-navy-950 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 diagonal-pattern opacity-100" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold">
            ADVAQ GLOBAL ADVISORY SERVICES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Need a Custom Tax & Structuring Review?
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Our legal and tax experts provide personalized cross-border structure evaluations for international founders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Book a Advisory Session
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
