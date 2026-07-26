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
  Calendar,
  AlertTriangle,
  DollarSign,
  Scale,
  Percent,
  Receipt,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "What is a US LLC State Annual Report?",
    a: "A State Annual Report (or Franchise Tax Report) is a mandatory annual legal filing submitted to the Secretary of State to update your LLC's registered office address, manager details, and pay the state renewal fee to maintain active corporate status and good standing under state law.",
  },
  {
    q: "How much does a Wyoming LLC Annual Report cost and when is it due?",
    a: "The Wyoming Secretary of State charges a low annual report fee of $62 for LLCs with assets located in Wyoming valued under $300,000. It is due on the 1st day of the anniversary month of your LLC's incorporation (e.g. if incorporated on March 15, due by March 1 every following year).",
  },
  {
    q: "What is the Delaware LLC Annual Franchise Tax fee and deadline?",
    a: "The Delaware Secretary of State imposes a flat annual franchise tax fee of $300 for all LLCs, regardless of revenue or asset size. It is due every year by June 1st. Missing June 1st results in an immediate $200 late penalty plus 1.5% monthly compound interest.",
  },
  {
    q: "What happens if I miss my US LLC state annual report deadline?",
    a: "Failing to file your state annual report results in immediate state late penalty fines, loss of your Certificate of Good Standing, bank account compliance holds, and eventual administrative dissolution (cancellation) of your LLC by the Secretary of State.",
  },
  {
    q: "Can a foreign non-resident submit state annual reports online?",
    a: "Yes, 100%. All major incorporation states (Wyoming, Delaware, Florida) provide secure online Secretary of State portals where foreign owners or their appointed Registered Agents can submit annual reports and pay franchise taxes electronically via credit card.",
  },
  {
    q: "How do I get a Certificate of Good Standing for my US LLC?",
    a: "Once your annual report and franchise tax fees are paid up to date, you can request an official Certificate of Good Standing (also known as a Certificate of Existence) directly from the Secretary of State website for a nominal state fee.",
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
  headline: "State Annual Reports for US LLCs: Renewal Fees, Deadlines & Franchise Tax Rules",
  description:
    "Exhaustive 2026 state annual report masterclass guide for US LLC owners. State renewal fees ($62 Wyoming vs $300 Delaware), deadlines, Certificate of Good Standing, and administrative dissolution rules.",
  author: { "@type": "Organization", name: "ADVAQ US State Compliance Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/us-llc-state-annual-report-filing-guide",
};

export const Route = createFileRoute("/blog/us-llc-state-annual-report-filing-guide")({
  head: () => ({
    meta: [
      { title: "US LLC State Annual Reports & Franchise Tax Guide (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "State annual report filing guide for foreign US LLC owners. Wyoming $62 annual fee, Delaware $300 franchise tax, June 1 deadline & Good Standing renewal.",
      },
      {
        name: "keywords",
        content:
          "us llc state annual report filing guide, wyoming llc annual report fee 62, delaware llc franchise tax 300 june 1 deadline, certificate of good standing us llc non resident",
      },
      {
        property: "og:title",
        content: "State Annual Reports for US LLCs: Renewal Fees, Deadlines & Franchise Tax Rules",
      },
      {
        property: "og:description",
        content:
          "Discover state annual report renewal fees, filing deadlines, and franchise tax rules across top US states for foreign non-resident LLC owners.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/us-llc-state-annual-report-filing-guide" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/us-llc-state-annual-report-filing-guide" }],
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
            <span>US Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            State Annual Reports for US LLCs: Renewal Fees, Deadlines & Franchise Tax Rules
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive state-by-state compliance masterclass for foreign non-resident LLC owners on annual report filings, state franchise tax fees, Certificate of Good Standing maintenance, and administrative dissolution risks.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US State Compliance Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>16 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Secretary of State Filing Compliance Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>State Annual Filing Summary</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Wyoming LLC ($62 Fee)</strong>
              <p className="text-navy-100 leading-relaxed">
                Due on the 1st day of your anniversary incorporation month. Low $62 annual report fee.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Delaware LLC ($300 Fee)</strong>
              <p className="text-navy-100 leading-relaxed">
                Due by June 1st every year. Flat $300 annual franchise tax fee across all LLCs.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">New Mexico LLC ($0 Fee)</strong>
              <p className="text-navy-100 leading-relaxed">
                $0 annual state report fee (no annual report filing required under NM state law).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Good Standing Status</strong>
              <p className="text-navy-100 leading-relaxed">
                Filing on time preserves your LLC's Certificate of Good Standing required by US banks & Stripe.
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
            <li><a href="#what-is-annual-report" className="hover:text-gold-600 underline">1. What Is a US LLC State Annual Report & Why Is It Mandatory?</a></li>
            <li><a href="#state-fee-breakdown" className="hover:text-gold-600 underline">2. State-by-State Fee & Deadline Breakdown</a></li>
            <li><a href="#annual-filing-matrix" className="hover:text-gold-600 underline">3. Comprehensive State Annual Filing Comparison Matrix</a></li>
            <li><a href="#certificate-good-standing" className="hover:text-gold-600 underline">4. Why Maintaining a Certificate of Good Standing Matters</a></li>
            <li><a href="#late-penalties" className="hover:text-gold-600 underline">5. Consequences of Missing Your Annual Report Deadline</a></li>
            <li><a href="#online-filing-steps" className="hover:text-gold-600 underline">6. How to Submit State Reports Online Remotely</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-annual-report" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is a US LLC State Annual Report & Why Is It Mandatory?
          </h2>
          <p>
            A <strong>State Annual Report</strong> (known in Delaware as the <em>Annual Franchise Tax Report</em>) is an administrative maintenance filing required by state corporate law to keep your Limited Liability Company active and in good legal standing.
          </p>
          <p>
            The primary purpose of the annual report is to update the Secretary of State's official register with your company's current physical office address, Registered Agent details, and management structure. It is an administrative requirement distinct from federal IRS income tax returns (Form 5472 / 1065).
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="state-fee-breakdown" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. State-by-State Fee & Deadline Breakdown
          </h2>
          <p>
            Annual renewal costs and filing schedules vary significantly depending on your state of formation:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-gold-600" size={18} />
                Wyoming LLC ($62 Annual Report Fee)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Wyoming imposes a low flat annual report fee of <strong>$62</strong> (for LLCs with assets located in Wyoming under $300,000). The report is due on the <strong>first day of your incorporation anniversary month</strong> (e.g. if formed on May 15, due May 1 every year).
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-gold-600" size={18} />
                Delaware LLC ($300 Flat Franchise Tax)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Delaware imposes a flat annual franchise tax fee of <strong>$300</strong> for all LLCs regardless of revenue or asset size. The Delaware franchise tax is due every year by <strong>June 1st</strong>.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <DollarSign className="text-gold-600" size={18} />
                Florida LLC ($138.75 Fee & $400 Late Fine)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Florida requires an annual report fee of <strong>$138.75</strong> due every year between January 1 and <strong>May 1st</strong>. A severe mandatory late fee of $400 is assessed if filed after May 1.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="annual-filing-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive State Annual Filing Comparison Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of state annual report rules:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Incorporation State</th>
                  <th className="p-4 text-gold-500">Annual Renewal Fee</th>
                  <th className="p-4 text-emerald-400">Exact Due Date</th>
                  <th className="p-4">Late Penalty Fine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Wyoming</td>
                  <td className="p-4 text-emerald-700 font-bold">$62 Fee</td>
                  <td className="p-4 text-navy-900">1st day of anniversary month</td>
                  <td className="p-4 text-navy-900">$50 late fee (Dissolved in 60 days)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Delaware</td>
                  <td className="p-4 text-navy-900">$300 Franchise Tax</td>
                  <td className="p-4 text-emerald-700 font-bold">June 1st every year</td>
                  <td className="p-4 text-rose-700 font-bold">$200 fine + 1.5% monthly interest</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Florida</td>
                  <td className="p-4 text-navy-900">$138.75 Fee</td>
                  <td className="p-4 text-emerald-700 font-bold">May 1st every year</td>
                  <td className="p-4 text-rose-700 font-bold">$400 mandatory late fine</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">New Mexico</td>
                  <td className="p-4 text-emerald-700 font-bold">$0 Fee</td>
                  <td className="p-4 text-emerald-700 font-bold">No Annual Report Required</td>
                  <td className="p-4 text-emerald-700 font-bold">None ($0)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            STATE ANNUAL REPORT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your US State Annual Report with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ tracks your state renewal deadlines, prepares annual franchise tax filings, and maintains your Certificate of Good Standing in Wyoming and Delaware.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/state-annual-report"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order State Annual Report Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="certificate-good-standing" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Why Maintaining a Certificate of Good Standing Matters
          </h2>
          <p>
            A <strong>Certificate of Good Standing</strong> (also referred to as a <em>Certificate of Existence</em>) is an official document issued by the Secretary of State certifying that your LLC has satisfied all annual filing requirements, paid its state franchise taxes, and remains legally authorized to transact business.
          </p>
          <p>
            US business banks (Mercury, Relay), payment processors (Stripe, PayPal), and institutional partners conduct annual compliance reviews. Failing to file your annual report revokes your Good Standing status, triggering bank compliance holds and payment gateway restrictions.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="late-penalties" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Consequences of Missing Your Annual Report Deadline
          </h2>
          <p>
            Missing your state annual report deadline leads to cascading legal and financial penalties:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <AlertTriangle className="text-rose-600" size={18} />
                Administrative Dissolution (Entity Cancellation)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                If an annual report remains delinquent past the state grace period (60 days in Wyoming, third Friday of September in Florida), the Secretary of State administratively dissolves your LLC, cancelling your legal charter.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Scale className="text-rose-600" size={18} />
                Loss of Limited Liability Corporate Shield
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Operating an administratively dissolved LLC exposes foreign owners to personal liability for debts, lawsuits, and contracts executed during the period of dissolution.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="online-filing-steps" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. How to Submit State Reports Online Remotely
          </h2>
          <p>
            Non-resident founders can file annual reports online in 3 simple steps:
          </p>
          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Access Portal:</strong> Visit the official Wyoming Secretary of State or Delaware Division of Corporations filing portal.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Verify Info:</strong> Enter your LLC Filing ID and verify your Registered Agent and principal address details.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Electronic Payment:</strong> Submit the state filing fee via international credit card and download your filing confirmation receipt immediately.</span>
            </li>
          </ol>
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
            US STATE RENEWAL SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your State Annual Report with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Wyoming and Delaware annual report filings, franchise tax payments, Certificate of Good Standing issuance, and state compliance tracking handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/state-annual-report"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order State Annual Report Filing
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
