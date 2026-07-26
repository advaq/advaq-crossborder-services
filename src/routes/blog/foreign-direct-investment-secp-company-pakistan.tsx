import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Building2,
  Globe2,
  DollarSign,
  Landmark,
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

const faqs = [
  {
    q: "Can foreign nationals and overseas entities own 100% shares of a SECP company in Pakistan?",
    a: "Yes! Under Pakistan's Foreign Investment Policy administered by the Board of Investment (BOI) and SECP regulations, foreign individuals and foreign corporate bodies can hold up to 100% equity ownership in Pakistani Private Limited companies across most sectors—including IT, software development, SaaS, digital marketing, consulting, and manufacturing.",
  },
  {
    q: "What is the process for foreign nationals to register a company with SECP?",
    a: "Foreign directors provide: (1) Passport copy attested by the Pakistan Embassy / High Commission or Apostille, (2) SECP eServices User ID registration and digital PIN setup, (3) Notarized corporate resolution (if foreign holding company), and (4) Memorandum & Articles of Association filed via eServices. SECP coordinates background security clearance via the Ministry of Interior.",
  },
  {
    q: "Can foreign shareholders repatriate 100% of profits and dividends back to their home country?",
    a: "Yes. Under State Bank of Pakistan (SBP) Foreign Exchange Manual Chapter 19, foreign investors in eligible open sectors are legally entitled to freely repatriate 100% of net profits, dividends, and capital gains back to their foreign bank accounts through designated Authorized Dealer commercial banks.",
  },
  {
    q: "What is an SBP Encashment Certificate for foreign inward remittances?",
    a: "An SBP Encashment Certificate (or Foreign Inward Remittance Certificate / FIRC) is an official certificate issued by a Pakistani commercial bank. It verifies that initial equity capital was wire transferred from a foreign bank account into Pakistan through official banking channels for share subscription.",
  },
  {
    q: "Do foreign directors require a work visa to own a SECP company in Pakistan?",
    a: "Foreign investors who manage their Pakistani company remotely from overseas do NOT require a Pakistan resident visa. However, if a foreign director intends to reside in Pakistan full-time to manage operations, they can apply for an official 2-year Board of Investment (BOI) Business / Work Visa.",
  },
  {
    q: "Are foreign holding companies subject to Double Taxation Treaties in Pakistan?",
    a: "Yes. Pakistan maintains active Double Taxation Treaties (DTAA) with over 66 countries—including the US, UK, UAE, China, Saudi Arabia, and EU nations. Foreign parent entities can leverage treaty provisions to reduce withholding tax rates on dividend remittances under Section 150 of the Income Tax Ordinance 2001.",
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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Foreign Direct Investment (FDI) in Pakistan: 100% Foreign SECP Shareholding",
  description:
    "Complete 2026 FDI legal and foreign exchange masterclass for international investors in Pakistan. Analysis of 100% foreign equity ownership rules, SECP incorporation for non-residents, SBP dividend repatriation protocols, Encashment Certificates, and BOI work visas.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Foreign Investment Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/foreign-direct-investment-secp-company-pakistan",
};

export const Route = createFileRoute("/blog/foreign-direct-investment-secp-company-pakistan")({
  head: () => ({
    meta: [
      { title: "FDI & 100% Foreign SECP Shareholding Pakistan (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Foreign Direct Investment (FDI) guide for SECP incorporation in Pakistan. 100% foreign ownership, SBP profit & dividend repatriation, Encashment Certificate & BOI visa.",
      },
      {
        name: "keywords",
        content:
          "foreign direct investment secp company pakistan, 100 percent foreign shareholding secp pvt ltd, sbp dividend repatriation foreign investor pakistan, boi business work visa foreign director pakistan, foreign inward remittance certificate firc sbp",
      },
      {
        property: "og:title",
        content: "Foreign Direct Investment (FDI) in Pakistan: 100% Foreign SECP Shareholding",
      },
      {
        property: "og:description",
        content:
          "Discover how foreign investors and overseas companies establish 100% foreign-owned SECP subsidiaries in Pakistan.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/foreign-direct-investment-secp-company-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/foreign-direct-investment-secp-company-pakistan" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="min-h-screen bg-white">
      {/* HEADER HERO */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <span>Pakistan Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            Foreign Direct Investment (FDI) in Pakistan: 100% Foreign SECP Shareholding
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive legal, tax, and foreign exchange blueprint for international companies, foreign nationals, and overseas Pakistanis on incorporating 100% foreign-owned SECP subsidiaries, State Bank of Pakistan (SBP) profit repatriation, and Board of Investment (BOI) compliance.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Foreign Investment Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>13 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>State Bank of Pakistan & BOI Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>FDI Framework Key Features</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">100% Foreign Ownership</strong>
              <p className="text-navy-100 leading-relaxed">
                Foreign individuals and overseas corporate bodies can hold 100% equity shares in a Pakistani SECP Private Limited entity without requiring a local Pakistani partner.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Full Dividend Repatriation</strong>
              <p className="text-navy-100 leading-relaxed">
                Under SBP rules, 100% of net profits and dividends can be legally remitted back to foreign home country bank accounts via Authorized Dealer commercial banks.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">SBP Encashment Certificate</strong>
              <p className="text-navy-100 leading-relaxed">
                Official proof issued by recipient Pakistani bank verifying foreign equity capital wire transfer from abroad.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">BOI Work & Business Visas</strong>
              <p className="text-navy-100 leading-relaxed">
                2-year renewable work/business visas issued to foreign directors and executives by the Board of Investment (BOI).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-2xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen size={16} className="text-gold-600" />
            Table of Contents
          </h2>
          <ol className="grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#fdi-policy-overview" className="hover:text-gold-600 underline">1. Pakistan's Foreign Direct Investment (FDI) Policy</a></li>
            <li><a href="#sector-ownership-limits" className="hover:text-gold-600 underline">2. Sector-Wise Foreign Equity Ownership Matrix</a></li>
            <li><a href="#foreign-secp-incorporation" className="hover:text-gold-600 underline">3. SECP eServices Incorporation for Foreign Shareholders</a></li>
            <li><a href="#sbp-encashment" className="hover:text-gold-600 underline">4. SBP Foreign Inward Remittance Certificate (FIRC) Protocol</a></li>
            <li><a href="#repatriation-rules" className="hover:text-gold-600 underline">5. Legal Profit & Dividend Repatriation Mechanisms</a></li>
            <li><a href="#tax-treaties" className="hover:text-gold-600 underline">6. Double Taxation Treaties & Withholding Tax Rules</a></li>
            <li><a href="#boi-visas" className="hover:text-gold-600 underline">7. Board of Investment (BOI) Business & Work Visas</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="fdi-policy-overview" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Pakistan's Foreign Direct Investment (FDI) Policy
          </h2>
          <p>
            Under Pakistan's liberalized Investment Policy administered by the <strong>Board of Investment (BOI)</strong> and the <strong>Securities and Exchange Commission of Pakistan (SECP)</strong>, foreign investors receive statutory equal treatment alongside domestic Pakistani entrepreneurs under the <em>Foreign Private Investment (Promotion and Protection) Act 1976</em>.
          </p>
          <p>
            International software houses, IT consultancies, SaaS platforms, e-commerce brands, and global manufacturing entities can establish 100% foreign-owned Pakistani subsidiaries without needing a local Pakistani sponsor or joint-venture partner.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="sector-ownership-limits" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Sector-Wise Foreign Equity Ownership Matrix
          </h2>
          <p>
            While most commercial sectors in Pakistan allow 100% foreign equity, specific regulated sectors carry ownership caps or regulatory licensing mandates:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Business Sector / Industry</th>
                  <th className="p-4 text-gold-500">Allowed Foreign Equity Limit</th>
                  <th className="p-4">Regulatory Licensing Body</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">IT, Software, SaaS, BPO & Digital Services</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Foreign Ownership Allowed</td>
                  <td className="p-4">SECP & PSEB</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Services, Consulting & E-Commerce Logistics</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Foreign Ownership Allowed</td>
                  <td className="p-4">SECP & BOI</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Manufacturing & Infrastructure Projects</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Foreign Ownership Allowed</td>
                  <td className="p-4">SECP & Ministry of Industries</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Banking, Finance & Microfinance</td>
                  <td className="p-4">Subject to State Bank of Pakistan (SBP) license</td>
                  <td className="p-4">State Bank of Pakistan</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Broadcasting & Media Operations</td>
                  <td className="p-4 text-red-700 font-bold">49% Cap (Majority Local Ownership Required)</td>
                  <td className="p-4">PEMRA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN FDI & SECP ADVISORY SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Establish Your Foreign Entity in Pakistan
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages 100% foreign SECP company registration, document legalization, SBP Encashment Certificate issuance, dividend repatriation protocols, and BOI work visa approvals.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order FDI SECP Setup Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="foreign-secp-incorporation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. SECP eServices Incorporation for Foreign Shareholders
          </h2>
          <p>
            Foreign nationals and international corporate bodies incorporate via SECP eServices 2.0 by providing specialized attested documentation:
          </p>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Documentation Checklist for Foreign Directors & Holding Companies:</h3>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Foreign Individuals:</strong> Valid passport copy attested by the Embassy of Pakistan in your home country or legalized via Apostille (if your country is a Hague Convention signatory).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Foreign Holding Companies:</strong> Notarized and attested Certificate of Incorporation, Memorandum & Articles of Association, and a formal Board Resolution authorizing incorporation of the Pakistani subsidiary and nominating an authorized representative.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Ministry of Interior Security Clearance:</strong> SECP routes foreign directors' credentials for routine background clearance with the Ministry of Interior. In most open tech sectors, provisional incorporation is granted immediately during clearance processing.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="sbp-encashment" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. SBP Foreign Inward Remittance Certificate (FIRC) Protocol
          </h2>
          <p>
            Under State Bank of Pakistan (SBP) Foreign Exchange Manual Chapter 20, foreign equity capital must be wire transferred from abroad:
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Landmark size={18} />
              SBP Encashment Certificate (FIRC) Issuance Workflow:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              1. <strong>Foreign Wire Transfer:</strong> Foreign subscriber wire transfers pledged equity capital in USD, EUR, or GBP from their foreign bank account directly to the company's Pakistani bank account.
              <br /><br />
              2. <strong>Purpose Code Selection:</strong> The swift wire instructions must state SWIFT Purpose Code: <em>"Foreign Direct Investment - Equity Capital"</em>.
              <br /><br />
              3. <strong>Issuance of Encashment Certificate:</strong> The Pakistani commercial bank converts foreign currency to PKR and issues an official <strong>SBP Encashment Certificate (FIRC)</strong>. This certificate serves as primary legal proof of foreign equity investment for SECP Form 22 and future profit repatriation.
            </p>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="repatriation-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Legal Profit & Dividend Repatriation Mechanisms
          </h2>
          <p>
            Foreign investors often worry whether Pakistani exchange controls will trap their profits inside the country.
          </p>
          <p>
            Under Chapter 19 of the State Bank of Pakistan Foreign Exchange Manual, commercial banks designated as <strong>Authorized Dealers (ADs)</strong> are granted general permission to remit foreign shareholders' net dividends and capital liquidation proceeds abroad <strong>without requiring prior individual SBP approval</strong>.
          </p>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Dividend Repatriation Checklist for Authorized Dealers:</h3>
          <ul className="space-y-2 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Audited annual financial statements prepared by a Chartered Accountant firm.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Board Resolution declaring dividend distribution and share of foreign members.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Proof of FBR Withholding Tax payment under Section 150.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Original SBP Encashment Certificate proving initial equity capital arrival.</span></li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div id="tax-treaties" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Double Taxation Treaties & Withholding Tax Rules
          </h2>
          <p>
            Under Section 150 of the Income Tax Ordinance 2001, dividend payouts from a Pakistani company to non-resident shareholders are subject to withholding tax. However, Pakistan's extensive network of <strong>66+ Double Taxation Avoidance Agreements (DTAA)</strong> optimizes tax obligations:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-border p-5 rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-2 flex items-center gap-2">
                <Coins size={16} className="text-gold-600" /> Standard Dividend WHT Rate
              </strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                Standard non-resident dividend withholding tax is <strong>15%</strong> under FBR domestic tax rules.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-2 flex items-center gap-2">
                <Globe2 size={16} className="text-gold-600" /> Tax Treaty Concessions
              </strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                Under tax treaties with jurisdictions like the UAE, UK, US, and EU member states, withholding tax rates on corporate parent dividends can be reduced to <strong>5% to 10%</strong> upon submitting a Tax Residency Certificate (TRC).
              </p>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div id="faqs" className="pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6 flex items-center gap-2">
            <HelpCircle size={22} className="text-gold-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-sans font-semibold text-navy-950 flex justify-between items-center gap-4 hover:bg-off-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gold-500 shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-border/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA BANNER */}
      <section className="bg-navy-950 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 diagonal-pattern opacity-100" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold">
            PAKISTAN FDI & CORPORATE ADVISORY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Establish Your Foreign Subsidiary in Pakistan
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            100% foreign SECP shareholding, SBP Encashment Certificates, dividend repatriation advisory, and BOI business visa assistance handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Foreign SECP Setup Service
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
    </article>
  );
}
