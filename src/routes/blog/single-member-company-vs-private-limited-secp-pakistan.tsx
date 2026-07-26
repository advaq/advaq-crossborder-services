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
  Briefcase,
  Users,
  Scale,
  HelpCircle,
  BookOpen,
  AlertTriangle,
  Coins,
  FileText,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Single Member Company (SMC-Pvt Ltd) in Pakistan?",
    a: "A Single Member Company (SMC-Private Limited) is a corporate legal structure governed by the Companies Act 2017 and Securities and Exchange Commission of Pakistan (SECP) Single Member Companies Rules 2018. It allows a single individual entrepreneur to incorporate a private limited entity with complete limited liability protection, a distinct corporate personality, and separate Tax ID (NTN), without requiring a second shareholder or co-director.",
  },
  {
    q: "What is the key difference between an SMC-Pvt Ltd and a standard Private Limited company?",
    a: "An SMC-Pvt Ltd has exactly one shareholder who also acts as the sole director. A standard Private Limited company requires a minimum of two shareholders and two directors. Both structures provide identical corporate limited liability protection under Pakistani law, but an SMC requires appointing a non-shareholder Nominee Director for inheritance succession planning.",
  },
  {
    q: "Can an SMC-Pvt Ltd be converted into a multi-member Private Limited company later?",
    a: "Yes. As your startup grows or accepts equity investors, an SMC-Pvt Ltd can easily be converted into a standard multi-member Private Limited company. The process involves passing a Special Resolution, issuing or transferring shares to additional members, updating the Articles of Association, and filing SECP Form 7 (Notice of Increase in Capital/Members) and Form 29 (Notice of Directorship Changes) via eServices.",
  },
  {
    q: "Is an SMC-Pvt Ltd eligible for PSEB IT export tax credits and SBP retention accounts?",
    a: "Yes, absolutely! An SMC-Pvt Ltd enjoys 100% full corporate status in Pakistan. It is fully eligible for Pakistan Software Export Board (PSEB) registration, the 0.25% reduced IT export tax regime under Section 154A of the Income Tax Ordinance 2001, and opening State Bank of Pakistan (SBP) Exporters' Special Foreign Currency Accounts (FCVA) to retain 50% of USD export revenue.",
  },
  {
    q: "What is the minimum authorized and paid-up capital required to register an SMC-Pvt Ltd with SECP?",
    a: "Under current SECP regulations, there is no statutory minimum paid-up capital requirement to register an SMC-Pvt Ltd or Private Limited company. Most tech startups, agencies, and solo founders incorporate with an Authorized Capital of PKR 100,000 divided into 10,000 ordinary shares of PKR 10 each, depositing nominal paid-up capital after opening the corporate bank account.",
  },
  {
    q: "Does an SMC-Pvt Ltd require a mandatory audit by a Chartered Accountant every year?",
    a: "Under Section 223 of the Companies Act 2017, private companies (including SMCs) with a paid-up capital of less than PKR 1,000,000 are exempt from mandatory financial audit by a chartered accountant, provided their financial statements are signed by the director. However, FBR tax return filings and PSEB compliance may recommend audited accounts for higher turnover thresholds.",
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
  headline: "Single Member Company (SMC-Pvt Ltd) vs Private Limited in Pakistan (SECP Guide)",
  description:
    "Complete 2026 SECP corporate structure masterclass comparing Single Member Company (SMC-Pvt Ltd) vs multi-member Private Limited entities under Companies Act 2017. Detailed analysis of limited liability, Nominee Director rules, conversion procedures, FBR tax rates, and PSEB export incentives.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Corporate Legal Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/single-member-company-vs-private-limited-secp-pakistan",
};

export const Route = createFileRoute("/blog/single-member-company-vs-private-limited-secp-pakistan")({
  head: () => ({
    meta: [
      { title: "SMC-Pvt Ltd vs Private Limited SECP Pakistan (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Definitive 2026 SECP corporate guide comparing Single Member Company (SMC-Pvt Ltd) vs Private Limited in Pakistan. Covers Companies Act 2017 rules, Nominee Directors, conversion, FBR tax, and PSEB benefits.",
      },
      {
        name: "keywords",
        content:
          "single member company vs private limited secp pakistan, smc pvt ltd registration process eservices, secp company registration minimum capital, smc pvt ltd vs sole proprietorship pakistan, secp nominee director rule, companies act 2017 corporate governance",
      },
      {
        property: "og:title",
        content: "Single Member Company (SMC-Pvt Ltd) vs Private Limited in Pakistan (SECP Masterclass)",
      },
      {
        property: "og:description",
        content:
          "Detailed legal, tax, and governance evaluation of Single Member Company (SMC-Pvt Ltd) vs Multi-Member Private Limited entities under SECP and FBR regulations.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/single-member-company-vs-private-limited-secp-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/single-member-company-vs-private-limited-secp-pakistan" }],
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
            Single Member Company (SMC-Pvt Ltd) vs Private Limited in Pakistan (SECP Guide)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive legal, tax, and corporate governance blueprint for Pakistani entrepreneurs, IT agency owners, SaaS founders, and solo consultants comparing an SMC-Pvt Ltd and a multi-member Private Limited entity under the Companies Act 2017.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Corporate Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>12 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>SECP Companies Act 2017 & FBR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Executive Legal Comparison Summary</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">Single Member Company (SMC-Pvt Ltd)</strong>
              <p className="text-navy-100 leading-relaxed">
                1 Shareholder & 1 Director. Tailored for solo tech founders, freelancers, and single business owners wanting full corporate limited liability while retaining 100% operational control. Requires nominating a non-shareholder Nominee Director for inheritance succession.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">Private Limited Company (Multi-Member)</strong>
              <p className="text-navy-100 leading-relaxed">
                2 to 50 Shareholders & 2+ Directors. Essential for co-founded startups, equity funding rounds, angel/VC investment, commercial joint ventures, and businesses requiring shared board oversight under SECP regulations.
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
            <li><a href="#statutory-framework" className="hover:text-gold-600 underline">1. Statutory Framework under Companies Act 2017</a></li>
            <li><a href="#comparison-matrix" className="hover:text-gold-600 underline">2. Comprehensive SECP Comparison Matrix</a></li>
            <li><a href="#nominee-director-mandate" className="hover:text-gold-600 underline">3. The Nominee Director Mandate & Succession Rules</a></li>
            <li><a href="#conversion-procedure" className="hover:text-gold-600 underline">4. Step-by-Step Conversion: SMC to Multi-Member</a></li>
            <li><a href="#sample-resolution" className="hover:text-gold-600 underline">5. Sample SECP Conversion Board Resolution Wording</a></li>
            <li><a href="#tax-compliance" className="hover:text-gold-600 underline">6. FBR Taxation & PSEB IT Export Benefits</a></li>
            <li><a href="#secp-annual-filings" className="hover:text-gold-600 underline">7. SECP Annual Filings & Statutory Audits</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="statutory-framework" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Statutory Framework under Companies Act 2017
          </h2>
          <p>
            Historically in Pakistan, incorporating a legal corporate entity required a minimum of two directors and two shareholders under the repealed Companies Ordinance 1984. Solo entrepreneurs, IT agency owners, and independent consultants were forced to either form an unregistered <strong>Sole Proprietorship</strong> (exposing personal assets to unlimited financial liability) or add a dummy second shareholder (such as a spouse or family member) merely to meet regulatory thresholds.
          </p>
          <p>
            To modernize Pakistan's corporate ecosystem, the <strong>Securities and Exchange Commission of Pakistan (SECP)</strong> introduced the concept of the <strong>Single Member Company (SMC-Private Limited)</strong>. Enacted under Section 14 of the <strong>Companies Act 2017</strong> and regulated by the <em>Single Member Companies Rules 2018</em>, an SMC-Pvt Ltd allows a single individual to create a legal entity that enjoys complete corporate status, a perpetual succession identity, a official corporate seal, and a distinct National Tax Number (NTN).
          </p>
          
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Corporate Veil Protection:</strong>
            <p className="text-navy-900 text-sm">
              The primary legal advantage of an SMC-Pvt Ltd over a Sole Proprietorship is the <strong>Corporate Veil</strong>. Under Pakistani corporate law, the company is a separate artificial legal person. If the business encounters commercial debt, breach of contract claims, or legal disputes, liability is strictly limited to the assets owned by the company. The personal house, personal bank accounts, and private assets of the sole shareholder remain 100% legally insulated.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="comparison-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Comprehensive SECP Structure Comparison Matrix
          </h2>
          <p>
            While both an SMC-Pvt Ltd and a standard multi-member Private Limited company hold identical corporate privileges under SECP and FBR regulations, key structural differences dictate which entity fits your business model:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Governance & Statutory Metric</th>
                  <th className="p-4 text-gold-500">Single Member Company (SMC-Pvt Ltd)</th>
                  <th className="p-4">Private Limited Company (Multi-Member)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Number of Shareholders</td>
                  <td className="p-4">Exactly 1 individual shareholder (100% equity).</td>
                  <td className="p-4">Minimum 2 shareholders; Maximum 50 members.</td>
                </tr>
                <tr className="hover:bg-off-white bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Number of Directors</td>
                  <td className="p-4">Exactly 1 Director (the sole shareholder).</td>
                  <td className="p-4">Minimum 2 Directors.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Nominee Director Mandate</td>
                  <td className="p-4 font-semibold text-red-700">Mandatory statutory requirement under Sec 14.</td>
                  <td className="p-4 text-gray-500">Not applicable (automatic board succession).</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Minimum Paid-Up Capital</td>
                  <td className="p-4">No minimum statutory requirement (Default: PKR 100k).</td>
                  <td className="p-4">No minimum statutory requirement (Default: PKR 100k).</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Equity Dilution & VC Investment</td>
                  <td className="p-4 font-semibold text-amber-700">Requires formal SECP conversion to add investors.</td>
                  <td className="p-4 font-semibold text-emerald-700">Seamless share issuance & shareholder agreements.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">FBR Corporate Tax Rate</td>
                  <td className="p-4">Standard 29% (or 0.25% Final Tax for PSEB IT Exporters).</td>
                  <td className="p-4">Standard 29% (or 0.25% Final Tax for PSEB IT Exporters).</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">SECP Annual Compliance</td>
                  <td className="p-4">Form A (Annual Return) & Form 29 (Directorship).</td>
                  <td className="p-4">Form A (Annual Return) & Form 29 (Directorship).</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Suffix Requirement</td>
                  <td className="p-4 font-mono font-bold text-navy-900">Must include "(SMC-Private) Limited"</td>
                  <td className="p-4 font-mono font-bold text-navy-900">Must include "(Private) Limited"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SECP INCORPORATION & CORPORATE ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Register Your SECP Entity with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles name reservation, eServices incorporation filing, digital signatures, corporate NTN issuance, and SECP compliance for SMC-Pvt Ltd and Private Limited entities.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SECP Company Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="nominee-director-mandate" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. The Nominee Director Mandate & Succession Rules
          </h2>
          <p>
            One of the most unique statutory requirements when registering an SMC-Pvt Ltd in Pakistan is the mandatory appointment of a <strong>Nominee Director</strong>. Under Rule 4 of the <em>Single Member Companies Rules 2018</em>, SECP enforces a legal mechanism to prevent the company from becoming orphaned or entering legal paralysis if the sole shareholder passes away or becomes permanently incapacitated.
          </p>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Legal Status & Rights of a Nominee Director:</h3>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Zero Lifetime Rights:</strong> During the lifetime of the primary shareholder, the Nominee Director possesses zero shares, zero voting rights, zero dividend entitlements, and zero operational control over corporate bank accounts or SECP filings.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Statutory Succession Trigger:</strong> In the unfortunate event of the sole shareholder's demise, the Nominee Director instantly assumes legal guardianship of the company's management for a statutory period (typically up to 180 days) to facilitate the transfer of shares to legal heirs under a Court Succession Certificate.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Eligible Nominees:</strong> The primary founder can nominate any adult relative (father, mother, spouse, brother, sister, or adult child) or trusted individual possessing a valid CNIC / NICOP.</span>
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
            <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm mb-1">
              <AlertTriangle size={16} />
              <span>Alternate Nominee Provision:</span>
            </div>
            <p className="text-amber-900 text-xs leading-relaxed">
              SECP Form 24 also allows appointing an <em>Alternate Nominee Director</em> who assumes responsibility if the primary Nominee Director predeceases or becomes unable to act upon the founder's death.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="conversion-procedure" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step Conversion: SMC to Multi-Member Company
          </h2>
          <p>
            A common concern for Pakistani tech founders incorporating an SMC-Pvt Ltd is whether they will be locked into a single-owner structure when pitching to venture capital firms, angel investors, or taking on co-founders.
          </p>
          <p>
            Under Section 46 of the Companies Act 2017, converting an SMC-Pvt Ltd into a standard multi-member Private Limited company is a straightforward regulatory filing with SECP eServices:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-xl bg-off-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <strong className="block text-navy-950 font-semibold text-sm">Step 1: Pass a Special Resolution</strong>
                <p className="text-xs text-gray-600 mt-1">The sole director passes a Special Resolution approving the allotment/transfer of shares and the adoption of revised Articles of Association.</p>
              </div>
              <span className="bg-navy-950 text-gold-500 text-xs px-3 py-1.5 rounded-md font-mono shrink-0">Internal Corporate Record</span>
            </div>

            <div className="p-5 border border-border rounded-xl bg-off-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <strong className="block text-navy-950 font-semibold text-sm">Step 2: File SECP Form 7 & Form 7A</strong>
                <p className="text-xs text-gray-600 mt-1">Submit Form 7 (Notice of Increase in Members/Capital) or Form 7A (Share Transfer Deed) via SECP eServices to register the new incoming shareholder(s).</p>
              </div>
              <span className="bg-navy-950 text-gold-500 text-xs px-3 py-1.5 rounded-md font-mono shrink-0">SECP eServices Portal</span>
            </div>

            <div className="p-5 border border-border rounded-xl bg-off-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <strong className="block text-navy-950 font-semibold text-sm">Step 3: Appoint Second Director (Form 29)</strong>
                <p className="text-xs text-gray-600 mt-1">File SECP Form 29 within 15 days notifying the commission of the appointment of the new second director on the board.</p>
              </div>
              <span className="bg-navy-950 text-gold-500 text-xs px-3 py-1.5 rounded-md font-mono shrink-0">SECP Form 29 Filing</span>
            </div>

            <div className="p-5 border border-border rounded-xl bg-off-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <strong className="block text-navy-950 font-semibold text-sm">Step 4: Update Company Suffix</strong>
                <p className="text-xs text-gray-600 mt-1">SECP issues an updated Certificate of Incorporation dropping the "(SMC-Private)" suffix to "(Private) Limited". Update bank records and letterheads accordingly.</p>
              </div>
              <span className="bg-navy-950 text-gold-500 text-xs px-3 py-1.5 rounded-md font-mono shrink-0">New SECP Certificate</span>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="sample-resolution" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Sample SECP Conversion Board Resolution Wording
          </h2>
          <p>
            When converting an SMC-Pvt Ltd into a multi-member entity, SECP requires submitting a formal resolution. Below is an example of standard corporate wording:
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Special Resolution: Conversion of SMC-Pvt Ltd to Private Limited Entity
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "RESOLVED THAT pursuant to Section 46 of the Companies Act 2017, the status of [Company Name] (SMC-Private) Limited be and is hereby converted from a Single Member Company to a Private Limited Company by transferring [Number of Shares] ordinary shares of PKR 10/- each to [Name of Incoming Investor/Director], holding CNIC No. [CNIC Number], who has consented to act as Director of the Company."
              <br /><br />
              "FURTHER RESOLVED THAT the suffix '(SMC-Private) Limited' in the name of the Company be altered to '(Private) Limited' and that Form 7, Form 29, and altered Memorandum and Articles of Association be submitted to the Registrar of Companies, SECP."
            </p>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="tax-compliance" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. FBR Taxation & PSEB IT Export Benefits
          </h2>
          <p>
            From an FBR (Federal Board of Revenue) tax perspective, both an SMC-Pvt Ltd and a multi-member Private Limited company are classified identically as <strong>Corporate Tax Entities</strong> under Section 80 of the Income Tax Ordinance 2001.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-border p-5 rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-2 flex items-center gap-2">
                <Coins size={16} className="text-gold-600" /> Standard Corporate Tax Rates
              </strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                Standard domestic companies are taxed at a flat rate of <strong>29%</strong> on net taxable income, alongside applicable Super Tax under Section 4C for income exceeding PKR 150 Million.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-emerald-50/50 border-emerald-200">
              <strong className="block text-emerald-950 font-semibold text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" /> IT Export Tax Concession (Sec 154A)
              </strong>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Pakistani software houses, SaaS companies, and IT consultancies registered as SMCs or Private Limited entities qualify for the <strong>0.25% Final Tax Regime</strong> on foreign export proceeds under Section 154A, provided they register with PSEB and retain export remittances through official SBP channels.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="secp-annual-filings" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. SECP Annual Filings & Statutory Audits
          </h2>
          <p>
            Both SMC-Pvt Ltd and multi-member companies must maintain corporate secretarial compliance with SECP:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <FileText className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Form A / Form B (Annual Return):</strong> Must be filed within 30 days of holding the Annual General Meeting (AGM) under Section 130 of the Companies Act 2017.</span>
            </li>
            <li className="flex items-start gap-2">
              <FileText className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Form 29 (Director & Chief Executive Changes):</strong> Must be filed within 15 days whenever there is a change in directorship, chief executive, or registered office address under Section 197.</span>
            </li>
            <li className="flex items-start gap-2">
              <FileText className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Chartered Accountant Audit Threshold (Section 223):</strong> Small private companies and SMCs having a paid-up capital of less than PKR 1,000,000 are legally exempt from mandatory audit by a licensed Chartered Accountant, significantly reducing annual accounting compliance overhead.</span>
            </li>
          </ul>
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
            SECP COMPANY REGISTRATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your SECP Company in Pakistan with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            SMC-Pvt Ltd and Private Limited incorporation, SECP eServices filing, digital signatures, corporate NTN issuance, PSEB registration, and corporate bank account assistance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SECP Incorporation Service
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
