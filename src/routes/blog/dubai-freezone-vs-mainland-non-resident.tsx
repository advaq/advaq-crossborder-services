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
  Landmark,
  Scale,
  Coins,
  Percent,
  Receipt,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
} from "lucide-react";

const faqs = [
  {
    q: "Can a Dubai Freezone company sell products or services directly to clients in Dubai Mainland?",
    a: "Under UAE commercial law and municipal regulations, a Freezone company is legally classified as an offshore or special economic zone entity. Freezone companies can seamlessly render services to international clients outside the UAE, to other entities operating within the same Freezone, or to entities in other UAE Freezones without intermediate restriction. However, to sell physical goods or deliver services directly to end-consumer clients inside the UAE Mainland market, a Freezone entity must utilize one of three legally compliant structures: (1) Appoint a licensed local UAE Mainland commercial distributor or agent, (2) Register an official Mainland Branch Office through the Dubai Department of Economy and Tourism (DET), or (3) Obtain a Dual-License from a Freezone authority that offers dual-licensing arrangements with DET (such as DWTC or DAFZA). Providing services directly to mainland clients without an appropriate license arrangement can trigger municipal penalties and non-compliance fines.",
  },
  {
    q: "Is an Emirates ID required for foreign company owners and bank account signatories?",
    a: "While you can incorporate a UAE Freezone or Mainland company remotely without holding immediate physical residence in Dubai, opening and operating an active business bank account with traditional UAE commercial banks (such as Emirates NBD, Mashreq Bank, First Abu Dhabi Bank, or Commercial Bank of Dubai) or digital corporate platforms (such as Wio Business) legally requires the primary company owner or authorized bank account signatory to hold a valid 2-year UAE Residence Visa and a physical Emirates ID card. Under UAE Central Bank Anti-Money Laundering (AML) and Know-Your-Customer (KYC) regulations, banks must verify the physical residency, biometric records, and local address of account signatories to prevent shell company abuse and maintain international banking compliance.",
  },
  {
    q: "What is the total minimum cost to set up a Dubai Freezone company with 1 residence visa?",
    a: "Setting up a cost-effective 1-visa Freezone package in popular Dubai and Northern Emirates jurisdictions (such as Meydan Free Zone, IFZA Dubai, or Shams Sharjah) generally ranges between AED 12,500 to AED 18,500 ($3,400 to $5,000 USD). This baseline cost includes: (1) The trade license fee for 1 to 3 business activities, (2) Flexi-desk / co-working virtual office allocation, (3) Ministry of Interior Establishment Card issuance, (4) Entry Permit processing, (5) DHA Medical Fitness Test, (6) ICP Emirates ID biometrics capture, and (7) 2-Year UAE Residence Visa stamping. Annual renewal costs for zero-visa or flexi-desk licenses in these jurisdictions typically average AED 11,500 to AED 14,000 per year, excluding optional visa renewal costs.",
  },
  {
    q: "Do Dubai Freezone entities qualify for 0% UAE Corporate Tax in 2026?",
    a: "Yes. Under Federal Decree-Law No. 47 of 2022 and Cabinet Decision No. 55 of 2023, a UAE Freezone entity can maintain a 0% Corporate Tax rate on its 'Qualifying Income' provided it fulfills the statutory conditions of a Qualifying Freezone Person (QFZP). To qualify as a QFZP, the Freezone entity must: (1) Maintain adequate economic substance in the UAE by having physical assets and qualified personnel, (2) Derive income from Qualifying Activities (such as software development, headquarter management, logistics, or overseas trading) or transactions with other Freezone persons, (3) Not elect to be subject to the standard 9% corporate tax rate, (4) Comply with international Transfer Pricing documentation rules under Section 55, and (5) Satisfy the De Minimis requirement (non-qualifying revenue must not exceed 5% of total revenue or AED 5,000,000).",
  },
  {
    q: "Can a foreign non-resident own 100% of a UAE Mainland company?",
    a: "Yes! Following the historical passage of Federal Decree-Law No. 26 of 2020 amending the UAE Commercial Companies Law (Federal Law No. 2 of 2015), the UAE government officially abolished the requirement for a 51% UAE national local sponsor across more than 1,000 commercial and industrial business activities. Foreign non-resident investors can now establish a UAE Mainland Limited Liability Company (LLC) or Sole Establishment with 100% full equity ownership, retaining complete control over company shares, bank accounts, management decisions, and profit distribution without needing a local Emirati shareholder.",
  },
  {
    q: "What is the difference between IFZA, Meydan, and DMCC for IT software houses?",
    a: "IFZA (International Free Zone Authority) and Meydan Free Zone are mid-market economic zones catering to digital agencies, software developers, and remote freelancers. They offer highly competitive license pricing, fast 3-to-5 day remote incorporation, flexible flexi-desk options, and seamless integration with digital corporate banks like Wio Business. DMCC (Dubai Multi Commodities Centre), located in Jumeirah Lakes Towers (JLT), is a top-tier premium Freezone voted Global Free Zone of the Year multiple times. DMCC offers immense corporate prestige, physical office towers, and direct access to multinational enterprise clients, but involves higher initial setup fees, mandatory physical office lease requirements, and stricter annual audit filings.",
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
  headline: "Dubai Freezone vs Mainland Company Formation: Which Option is Best for Foreigners?",
  description:
    "Complete 2026 legal, tax, and operational masterclass for foreign investors setting up a business in Dubai. Compare Freezone vs Mainland on 100% foreign ownership, Cabinet Decision No. 55 corporate tax rules (0% vs 9%), local UAE market access, office leases, and visa allocations.",
  author: { "@type": "Organization", name: "ADVAQ UAE Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/dubai-freezone-vs-mainland-non-resident",
};

export const Route = createFileRoute("/blog/dubai-freezone-vs-mainland-non-resident")({
  head: () => ({
    meta: [
      { title: "Dubai Freezone vs Mainland Comparison for Foreigners (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Dubai Freezone vs Mainland company setup comparison for non-residents. Compare 100% foreign ownership, 0% corporate tax qualifying income, local market trading & visa costs.",
      },
      {
        name: "keywords",
        content:
          "dubai freezone vs mainland non resident, uae company formation foreign investor, 100 percent foreign ownership uae mainland, uae corporate tax freezone qualifying income, cabinet decision 55 of 2023 qfzp",
      },
      {
        property: "og:title",
        content: "Dubai Freezone vs Mainland Company Formation: Which Option is Best for Foreigners?",
      },
      {
        property: "og:description",
        content:
          "Discover whether a Dubai Freezone or UAE Mainland entity is right for your international business, IT agency, or e-commerce venture.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/dubai-freezone-vs-mainland-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/dubai-freezone-vs-mainland-non-resident" }],
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
            <span>UAE Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            Dubai Freezone vs Mainland Company Formation: Which Option is Best for Foreigners?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive, multi-dimensional legal and tax masterclass for international entrepreneurs, software agency founders, e-commerce brands, and global consultants comparing UAE Freezone economic zones against Dubai Mainland (DET) corporate setups under 2026 corporate tax and commercial laws.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Corporate Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE Commercial Companies Law & Cabinet Decision No. 55 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Freezone vs Mainland Strategic Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Freezone Ideal Target</strong>
              <p className="text-navy-100 leading-relaxed">
                Optimal for international IT agencies, SaaS platforms, cross-border e-commerce sellers, marketing consultants, and digital freelancers billing foreign clients outside the UAE.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Mainland Ideal Target</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory for physical retail storefronts, restaurants, local construction, UAE government contracting, and direct onshore B2C services inside the local UAE consumer market.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">100% Foreign Ownership</strong>
              <p className="text-navy-100 leading-relaxed">
                Now available in BOTH Freezones and Mainland for over 1,000 commercial and industrial activities under Federal Decree-Law No. 26 of 2020.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Corporate Tax Slabs</strong>
              <p className="text-navy-100 leading-relaxed">
                Freezones offer 0% Corporate Tax on Qualifying Income (Cabinet Decision No. 55), while Mainland entities pay 9% tax on profits exceeding AED 375,000.
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
            <li><a href="#jurisdiction-overview" className="hover:text-gold-600 underline">1. The Jurisdictional Choice: Defining Freezones vs Mainland</a></li>
            <li><a href="#comparison-matrix" className="hover:text-gold-600 underline">2. Comprehensive 10-Factor Comparison Matrix</a></li>
            <li><a href="#ownership-breakdown" className="hover:text-gold-600 underline">3. 100% Foreign Ownership & Legal Structure Breakdown</a></li>
            <li><a href="#corporate-tax-framework" className="hover:text-gold-600 underline">4. UAE Corporate Tax Framework (Cabinet Decision No. 55)</a></li>
            <li><a href="#office-requirements" className="hover:text-gold-600 underline">5. Operational & Office Requirements (Flexi-Desk vs Ejari Lease)</a></li>
            <li><a href="#visa-banking-workflow" className="hover:text-gold-600 underline">6. Residence Visas, Emirates ID & Corporate Banking Workflow</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="jurisdiction-overview" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Jurisdictional Choice: Defining Freezones vs Mainland
          </h2>
          <p>
            Establishing a commercial corporate entity in the United Arab Emirates requires non-resident international entrepreneurs to navigate a fundamental legal choice: incorporating within a <strong>UAE Free Zone</strong> or establishing a <strong>UAE Mainland</strong> entity.
          </p>
          <p>
            The UAE business landscape is structurally divided into distinct legal jurisdictions, each governed by separate licensing bodies, tax codes, office space mandates, and commercial trading boundaries. Selecting the wrong jurisdiction during company formation can lead to unexpected tax liabilities, restricted commercial activities, bank account rejection, or expensive corporate restructuring later on.
          </p>
          <p>
            Historically, Freezones were created as special economic enclaves designed to attract foreign capital by waiving customs duties and offering 100% foreign equity ownership. Conversely, Mainland companies were designed for domestic onshore commerce, traditionally requiring a local Emirati partner holding 51% of company equity. However, sweeping legislative reforms enacted over recent years have transformed this dynamic, creating a highly modern, globally competitive corporate ecosystem.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-6 rounded-2xl bg-white shadow-sm hover:border-gold-500/50 transition-all">
              <div className="flex items-center gap-2 text-gold-600 font-serif font-semibold text-lg mb-2">
                <Globe2 size={20} />
                <span>UAE Free Zone Jurisdiction</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Special economic zones operating under independent regulatory authorities (e.g., IFZA, DMCC, Meydan, DAFZA, JAFZA). Freezones offer 100% foreign ownership, 0% import/export customs tariffs within the zone, flexi-desk co-working space allocations, and 0% Corporate Tax on Qualifying Income derived from international or inter-freezone trade.
              </p>
            </div>

            <div className="border border-border p-6 rounded-2xl bg-white shadow-sm hover:border-gold-500/50 transition-all">
              <div className="flex items-center gap-2 text-navy-950 font-serif font-semibold text-lg mb-2">
                <Landmark size={20} />
                <span>UAE Mainland Jurisdiction (DET)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Onshore commercial entities licensed directly by the Dubai Department of Economy and Tourism (DET) or equivalent economic departments in Abu Dhabi and Sharjah. Mainland companies enjoy complete freedom to trade directly with end-consumers anywhere across the local UAE market and bid on lucrative federal government contracts.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="comparison-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Comprehensive 10-Factor Comparison Matrix
          </h2>
          <p>
            To evaluate which setup best aligns with your commercial objectives, review the detailed comparative matrix below detailing the 10 core legal, financial, tax, and operational dimensions:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Comparison Dimension</th>
                  <th className="p-4 text-gold-500">UAE Freezone Entity</th>
                  <th className="p-4 text-emerald-400">UAE Mainland Entity (DET)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">1. Foreign Ownership %</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Foreign Equity Guaranteed</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Foreign Ownership (1,000+ Activities)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">2. Corporate Tax Rate</td>
                  <td className="p-4 text-emerald-700 font-bold">0% on Qualifying Income (QFZP)</td>
                  <td className="p-4 text-navy-900">9% on Net Profits &gt; AED 375,000 ($102k USD)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">3. Direct Local UAE Trading</td>
                  <td className="p-4 text-rose-700 font-bold">Requires Local Distributor or Dual License</td>
                  <td className="p-4 text-emerald-700 font-bold">Unrestricted Direct Onshore UAE Access</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">4. Office Space Requirement</td>
                  <td className="p-4 text-emerald-700 font-bold">Virtual Flexi-Desk / Co-working Space</td>
                  <td className="p-4 text-navy-900">Physical Commercial Ejari Lease Mandatory</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">5. Residence Visa Quotas</td>
                  <td className="p-4 text-navy-900">Package Quota (1 to 6+ Visas)</td>
                  <td className="p-4 text-emerald-700 font-bold">Scales with Physical Office Sq Footage</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">6. Customs Duty Tariffs</td>
                  <td className="p-4 text-emerald-700 font-bold">0% Duty inside Zone & International Re-export</td>
                  <td className="p-4 text-navy-900">5% Standard UAE Customs Import Duty</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">7. UAE Government Tenders</td>
                  <td className="p-4 text-rose-700 font-bold">Ineligible for Federal Government Bids</td>
                  <td className="p-4 text-emerald-700 font-bold">Full Rights to Bid on UAE Federal Tenders</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">8. Digital Bank Account Approvals</td>
                  <td className="p-4 text-emerald-700 font-bold">Fast-Track Approvals (Wio, Mashreq NEOBiz)</td>
                  <td className="p-4 text-emerald-700 font-bold">High Approval Rate across Traditional Banks</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">9. Annual Statutory Audit</td>
                  <td className="p-4 text-navy-900">Varies by Freezone (Optional in IFZA/Meydan)</td>
                  <td className="p-4 text-navy-900">Mandatory Annual Audit Submission</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">10. Branch Expansion Freedom</td>
                  <td className="p-4 text-navy-900">Freezone or Foreign Branches Only</td>
                  <td className="p-4 text-emerald-700 font-bold">Open Branches Anywhere Across All 7 Emirates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE CORPORATE FORMATION ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Form Your UAE Business with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ provides end-to-end guidance on selecting Freezone vs Mainland licenses, processing 2-year UAE Residence Visas, and opening Wio business bank accounts.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore Freezone Setup Packages <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="ownership-breakdown" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. 100% Foreign Ownership & Legal Structure Breakdown
          </h2>
          <p>
            One of the most persistent misconceptions among foreign investors is that establishing a Mainland business in Dubai requires giving up 51% of company equity to a local Emirati partner.
          </p>
          <p>
            Following the landmark implementation of <strong>Federal Decree-Law No. 26 of 2020</strong>, which extensively amended Federal Law No. 2 of 2015 on Commercial Companies, the UAE government officially removed the mandatory 51% local sponsor requirement for over 1,000 commercial, consultancy, and industrial business activities. As a result, foreign non-resident founders can now legally hold <strong>100% direct equity control</strong> in both Mainland Limited Liability Companies (LLCs) and Freezone entities.
          </p>
          <p>
            However, key structural distinctions remain based on the license category selected:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Commercial Trading License:</strong> Authorizes buying, importing, exporting, and distributing physical goods. Mainland commercial licenses permit direct distribution inside the UAE market, whereas Freezone commercial licenses restrict direct onshore sales unless conducted through a licensed mainland distributor.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Professional / Consultancy License:</strong> Authorizes rendering service-based expertise, IT development, software architecture, marketing, and management consulting. Professional entities in both jurisdictions permit 100% foreign ownership.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Industrial License:</strong> Requires physical manufacturing facilities, environmental approvals, and industrial warehouse leases, typically established within specialized industrial Freezones (such as JAFZA) or Mainland industrial zones.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="corporate-tax-framework" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. UAE Corporate Tax Framework (Cabinet Decision No. 55)
          </h2>
          <p>
            The introduction of federal corporate tax under Federal Decree-Law No. 47 of 2022 marked a pivotal milestone in the UAE financial landscape. Effective for financial years starting on or after June 1, 2023, all corporate entities in the UAE are subject to the federal tax framework, but tax rates differ significantly between Mainland and Freezone businesses.
          </p>
          
          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Mainland Corporate Tax Architecture</h3>
          <p>
            Mainland entities licensed by the Department of Economy and Tourism (DET) pay a standard <strong>9% Corporate Tax</strong> rate on net taxable business profits exceeding <strong>AED 375,000</strong> ($102,000 USD). Net taxable profits up to AED 375,000 are taxed at a <strong>0% rate</strong> to support small business growth. Furthermore, under Small Business Relief (SBR) provisions under Ministerial Decision No. 73 of 2023, resident entities with gross annual revenues below AED 3,000,000 can elect to be treated as having no taxable income, effectively waiving corporate tax filing liabilities for early-stage companies.
          </p>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Qualifying Freezone Persons (QFZP) 0% Tax Rules</h3>
          <p>
            Under <strong>Cabinet Decision No. 55 of 2023</strong> and Ministerial Decision No. 139 of 2023, Freezone companies can maintain a <strong>0% Corporate Tax rate</strong> on their <em>Qualifying Income</em> provided they are categorized as a Qualifying Freezone Person (QFZP).
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Percent size={18} />
              Statutory Prerequisites for 0% Freezone Corporate Tax:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              1. <strong>Maintain Adequate Economic Substance:</strong> Possess physical assets, adequate operating expenditure, and qualified staff residing in the UAE.
              <br /><br />
              2. <strong>Derive Qualifying Income:</strong> Income derived from transactions with foreign clients outside the UAE, or transactions with other Freezone persons in qualifying activities (e.g. software development, headquarter management, treasury services, or re-export trading).
              <br /><br />
              3. <strong>De Minimis Revenue Threshold:</strong> Non-qualifying revenue derived from mainland UAE consumers must not exceed <strong>5% of total revenue</strong> or <strong>AED 5,000,000</strong> (whichever is lower).
              <br /><br />
              4. <strong>Transfer Pricing Compliance:</strong> Prepare and maintain master files, local files, and arm's-length transfer pricing documentation under Section 55 of the Corporate Tax Law.
            </p>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="office-requirements" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Operational & Office Requirements (Flexi-Desk vs Ejari Lease)
          </h2>
          <p>
            Office space mandates represent one of the most substantial cost differences between setting up in a Freezone versus the Dubai Mainland.
          </p>
          <p>
            For digital agencies, SaaS startups, and IT consultants who operate remotely or bill international clients, office space requirements can drastically alter annual fixed overheads:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-5 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-base mb-1">Freezone Flexi-Desk / Virtual Office</strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                Most Freezone authorities (such as IFZA, Meydan, SHAMS, and RAKEZ) include a virtual <em>Flexi-Desk</em> or co-working desk allocation directly within their annual license packages. This satisfies the legal office requirement for trade license issuance without incurring expensive physical commercial real estate leases, allowing founders to work remotely from anywhere.
              </p>
            </div>
            <div className="p-5 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-base mb-1">Mainland Ejari Commercial Lease</strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mainland entities licensed by the Department of Economy and Tourism (DET) are legally mandated to lease a physical commercial office space, retail shop, or business center office registered in the official <em>Ejari</em> system. Virtual offices are not permitted for mainland commercial licenses, requiring initial annual rents ranging from AED 25,000 to AED 60,000+ per year depending on location.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="visa-banking-workflow" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Residence Visas, Emirates ID & Corporate Banking Workflow
          </h2>
          <p>
            Obtaining a trade license is only the first phase of setting up a business in Dubai. To operate seamlessly, non-resident foreign investors must complete the residence visa processing sequence and secure a business bank account:
          </p>
          
          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Briefcase className="text-gold-600" size={18} />
                Phase 1: Company Incorporation & Establishment Card
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Submit passport copies and security pre-approval details to the Freezone Authority or DET. Upon license issuance, apply for the Ministry of Interior Establishment Card, which opens the company's official immigration file for visa processing.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Layers className="text-gold-600" size={18} />
                Phase 2: Entry Permit & In-Country Status Change
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Generate the electronic 60-day Employment or Investor Entry Permit. If you are already inside the UAE on a visit visa, execute an in-country status change without exiting the country.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Shield className="text-gold-600" size={18} />
                Phase 3: DHA Medical Fitness Test & ICP Biometrics
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Visit a Dubai Health Authority (DHA) Medical Center for blood tests and chest X-rays. Complete thumbprint biometrics capture at a Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) center to process your 2-Year Residence Visa and Emirates ID.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-gold-600" size={18} />
                Phase 4: Corporate Banking Account Approval
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Once your Emirates ID is issued, submit your corporate banking application. Modern digital corporate banks like <strong>Wio Business</strong> and <strong>Mashreq NEOBiz</strong> approve Freezone entities rapidly online within 48 to 72 hours, whereas traditional commercial banks (Emirates NBD, FAB, CBD) require in-person banker interviews, physical proof of business substance, and client invoice records.
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
            UAE CORPORATE SETUP SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your Dubai Company with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Freezone vs Mainland licensing, 2-year UAE Residence Visas, Emirates ID biometrics, and Wio corporate bank account setup handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UAE Freezone Package
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
