import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  FileText,
  Calculator,
  PoundSterling,
  TrendingDown,
  Briefcase,
  PiggyBank,
  Landmark,
  FileSignature
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What are dividends in a UK Limited Company?",
    a: "Dividends are payments made by a company to its shareholders out of its 'distributable profits' (profits left after paying Corporation Tax). They are the most tax-efficient way to extract money from your company.",
  },
  {
    q: "What is Dividend Planning?",
    a: "Dividend planning is the strategic structuring of your income (salary vs. dividends) to maximize your personal take-home pay while legally minimizing your Income Tax and National Insurance liabilities.",
  },
  {
    q: "Can I just transfer money from the business to my personal account?",
    a: "No. Arbitrarily moving money from your corporate account to your personal account is treated as a 'Director's Loan' which can incur a heavy 33.75% tax penalty (S455 tax) if not repaid. Money must be extracted legally via declared dividends or payroll.",
  },
  {
    q: "Do I have to pay tax on dividends in the UK?",
    a: "Yes, dividends are subject to personal Income Tax. However, the UK offers a tax-free Dividend Allowance, and the tax rates for dividends are significantly lower than standard Income Tax rates on salaries.",
  },
  {
    q: "How does my residency status affect dividend tax?",
    a: "If you live in Pakistan (or elsewhere outside the UK), your UK dividend income is often treated favorably. The UK does not generally withhold tax on dividends paid to non-residents, though you may need to report it locally depending on Double Taxation Agreements.",
  },
  {
    q: "What is the most tax-efficient salary/dividend split?",
    a: "A common strategy is taking a low salary (up to the National Insurance threshold) to qualify for state benefits without paying NI tax, and taking the rest of your income as dividends up to the basic rate tax band limit. We calculate the exact optimal figures for your situation.",
  },
  {
    q: "What paperwork is required to declare a dividend?",
    a: "Legally, to declare a dividend, you must hold a directors' meeting, record the decision in 'Board Minutes', and issue a 'Dividend Voucher' to each shareholder. Without this paperwork, HMRC can reclassify the payment as a salary, subjecting it to higher taxes.",
  },
  {
    q: "How often can I take dividends?",
    a: "You can declare 'interim' dividends as often as you like (e.g., monthly or quarterly), provided the company has sufficient retained profits to cover them. A 'final' dividend is declared at the end of the financial year.",
  },
  {
    q: "What happens if I declare a dividend without enough profit?",
    a: "This is known as an 'illegal dividend'. You will be personally required to repay the money to the company. If the company goes into liquidation, creditors can demand you repay illegal dividends.",
  },
  {
    q: "Can I pay different dividends to different shareholders?",
    a: "Normally, dividends must be paid strictly in proportion to the number of shares held. However, if you set up different 'alphabet shares' (e.g., Class A and Class B), you can declare different dividend amounts for different shareholders.",
  },
  {
    q: "Do dividends affect my Corporation Tax?",
    a: "No. Dividends are paid out of post-tax profits. They are not a business expense, so they do not reduce your company's Corporation Tax bill.",
  },
  {
    q: "When do I pay the tax on my dividends?",
    a: "Any personal tax owed on your dividends is calculated and paid through your annual HMRC Self Assessment tax return, due by January 31st each year.",
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
  serviceType: "Dividend Tax Planning",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Dividend Planning & Structuring for UK LTD Directors",
  description:
    "Strategic dividend and salary planning for UK company directors. Legally minimize tax liabilities, ensure correct board documentation, and maximize personal take-home pay.",
  areaServed: "United Kingdom & International",
  url: "https://[yourdomain.com]/uk-services/dividend-planning",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "GBP",
    description: "Dividend strategy calculation and documentation fee.",
  },
};

export const Route = createFileRoute("/uk-services/dividend-planning")({
  head: () => ({
    meta: [
      { title: "Dividend Tax Planning for UK Directors | ADVAQ" },
      {
        name: "description",
        content:
          "Optimize your salary and dividend split to minimize personal tax. We provide legal structuring, board minutes, and dividend vouchers for UK LTD directors.",
      },
      {
        name: "keywords",
        content:
          "dividend tax planning uk, optimal salary and dividend, uk ltd extract profits, dividend vouchers, board minutes, non resident uk dividend tax",
      },
      {
        property: "og:title",
        content: "Dividend Tax Planning for UK Directors | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Optimize your salary and dividend split to minimize personal tax. Legal structuring and documentation provided.",
      },
      { property: "og:url", content: "/uk-services/dividend-planning" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/dividend-planning" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: DividendPlanning,
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
            🇬🇧 WEALTH EXTRACTION STRATEGY
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Dividend Tax Planning
            <br />
            & Structuring
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Extract profits from your UK Limited Company legally and tax-efficiently. We map the optimal salary-to-dividend ratio, ensuring maximum take-home pay while fulfilling all HMRC documentation requirements.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Plan My Dividends
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Consult an Expert
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Tax Minimization
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Legal Compliance
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Board Minutes Drafted
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Dividend Vouchers
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
                What is Dividend Planning?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Once your UK Limited Company generates profit and pays Corporation Tax, the remaining money belongs to the company, not you personally. To access this money, you must extract it legally — usually via a salary, dividends, or a combination of both.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                <strong>Dividend Planning</strong> is the financial strategy of balancing your income sources. By utilizing tax-free personal allowances, lower dividend tax rates, and avoiding high National Insurance thresholds, we structure your payouts to keep the absolute maximum amount of money in your pocket rather than giving it to HMRC.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <PiggyBank size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Structure It?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Lower Taxes:</strong> Dividend tax rates are much lower than standard Income Tax rates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">No National Insurance:</strong> Dividends are completely exempt from National Insurance contributions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Stay Legal:</strong> Proper documentation prevents HMRC from reclassifying withdrawals as salary.</span>
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
            The Danger of Informal Withdrawals
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Treating your corporate bank account like a personal piggy bank is illegal and carries severe tax consequences.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Director's Loan Tax Penalty
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you withdraw money without formally declaring it as a dividend or salary, HMRC classifies it as a Director's Loan. If not repaid within 9 months of year-end, the company faces a punitive 33.75% tax charge.
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
                  Illegal Dividends
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Declaring a dividend when the company does not have sufficient retained profits is unlawful. You will be held personally liable to repay the funds, particularly if the business faces insolvency.
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
                  HMRC Reclassification
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you fail to generate the legal paperwork (Board Minutes and Vouchers), HMRC can reclassify your dividends as salary, forcing you to pay massive back-dated Income Tax and National Insurance.
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
      title: "Profit Availability Review",
      desc: "We analyze your management accounts to ensure the company has sufficient legal retained profits to issue dividends safely.",
    },
    {
      title: "Tax Threshold Mapping",
      desc: "We calculate the exact figures for the optimal salary/dividend split, keeping you below the higher-rate tax bands wherever possible.",
    },
    {
      title: "Board Minutes Creation",
      desc: "We draft the legally required corporate Board Minutes documenting the directors' formal decision to declare the dividend.",
    },
    {
      title: "Dividend Vouchers",
      desc: "We generate official Dividend Vouchers for each shareholder, which serve as proof of income for personal tax returns.",
    },
    {
      title: "Non-Resident Optimization",
      desc: "We apply Double Taxation Agreements and specific non-resident rules to ensure you don't overpay when extracting wealth to Pakistan.",
    },
    {
      title: "Self Assessment Integration",
      desc: "We provide clear summaries of your dividend income, making it perfectly ready for your annual HMRC Self Assessment.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Dividend Planning Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Strategic calculations backed by bulletproof legal documentation.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300 h-full">
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
            Strategy & Documentation Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              DIVIDEND STRATEGY
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ONE-TIME OR ANNUAL PLAN</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£99</span>
              <span className="text-sm text-gray-500">flat fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Covers a full financial review, optimal tax split calculation, and all legal documentation required for a dividend declaration.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Salary vs. Dividend Optimization</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Profit Availability Check</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Drafting of Corporate Board Minutes</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Issuance of Official Dividend Vouchers</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Strategy Session
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
      title: "Financial Review",
      desc: "We analyze your latest corporate accounts to determine your exact distributable profit margins safely available for extraction.",
    },
    {
      title: "Strategy Formulation",
      desc: "We calculate the most tax-efficient mix of salary and dividends based on current HMRC thresholds and your personal tax position.",
    },
    {
      title: "Drafting Papers",
      desc: "Our team drafts the formal Board Minutes and specific Dividend Vouchers required by corporate law.",
    },
    {
      title: "Director Approval",
      desc: "You review and sign the digital documentation, legally authorizing the distribution of funds.",
    },
    {
      title: "Execution",
      desc: "You execute the bank transfer from your business to your personal account, backed by solid, compliant paperwork.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Execute the Plan
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A precise, legal process to extract your hard-earned money safely.
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

/* ---------- SECTION 7: KEY BENEFITS ---------- */
function KeyBenefits() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>STRATEGIC ADVANTAGES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Why Plan Your Dividends?
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Proper structuring is the difference between retaining wealth and surrendering it to tax.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <TrendingDown className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Maximize Take-Home Pay</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                By carefully navigating tax bands and allowances, we reduce the percentage of your hard-earned profits that go to HMRC.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Bulletproof Legal Compliance</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                With proper Board Minutes and Vouchers, your withdrawals are protected from HMRC audits and reclassification penalties.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <FileSignature className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Clear Audit Trail</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Should you ever sell the business, seek investment, or apply for a mortgage, proper dividend paperwork proves formal, legal income generation.
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
      title: "HMRC Self Assessment",
      path: "/uk-services/self-assessment",
      desc: "Annual personal tax filing required to declare your dividend income to HMRC.",
    },
    {
      title: "UK LTD Company Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a new UK corporate entity to separate business from personal liabilities.",
    },
    {
      title: "Annual Accounts & Filing",
      path: "/uk-services/annual-accounts",
      desc: "Full year-end corporate filing establishing the retained profits used for dividends.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related UK Compliance Services
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
            OPTIMIZE YOUR INCOME
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Stop Leaving Money on the Table.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your withdrawals are legally compliant and maximally tax-efficient. Let our experts structure your dividend planning today.
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
            Expert Tax Structuring · Bulletproof Documentation · Wealth Retention
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function DividendPlanning() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <KeyBenefits />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
