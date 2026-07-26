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
} from "lucide-react";

const faqs = [
  {
    q: "What is a US LLC State Annual Report?",
    a: "A State Annual Report (or Franchise Tax Report) is a mandatory annual filing submitted to the Secretary of State to update your LLC's registered office address, manager details, and pay the state renewal fee to maintain good standing.",
  },
  {
    q: "How much does a Wyoming LLC Annual Report cost?",
    a: "The Wyoming Secretary of State charges a low annual report fee of $62 for LLCs with assets located in Wyoming valued under $300,000.",
  },
  {
    q: "What is the Delaware LLC Annual Franchise Tax fee and deadline?",
    a: "Delaware imposes a flat annual franchise tax fee of $300 for all LLCs, due every year by June 1st.",
  },
  {
    q: "What happens if I miss my US LLC state annual report deadline?",
    a: "Failing to file your annual report results in state late penalty fines, loss of Certificate of Good Standing, and eventual administrative dissolution (cancellation) of your LLC by the Secretary of State.",
  },
  {
    q: "Can a foreign non-resident submit state annual reports online?",
    a: "Yes. All major states (Wyoming, Delaware, New Mexico, Florida) provide online Secretary of State portals where foreign owners or their Registered Agents can submit annual reports electronically.",
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
    "Complete 2026 state annual report guide for US LLC owners. State renewal fees ($62 Wyoming vs $300 Delaware), deadlines, Certificate of Good Standing, and administrative dissolution rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/us-llc-state-annual-report-filing-guide",
};

export const Route = createFileRoute("/blog/us-llc-state-annual-report-filing-guide")({
  head: () => ({
    meta: [
      { title: "US LLC State Annual Reports & Franchise Tax Guide (2026) | ADVAQ" },
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
            A state-by-state compliance guide for foreign non-resident LLC owners on annual report filings, state franchise tax fees, Certificate of Good Standing maintenance, and administrative dissolution risks.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Compliance Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Secretary of State Filing Compliance</span>
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
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Wyoming LLC:</strong> Due on the 1st day of your anniversary incorporation month. Annual fee is $62.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Delaware LLC:</strong> Due by June 1st every year. Flat franchise tax fee is $300.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>New Mexico LLC:</strong> $0 annual state report fee (no annual filing required).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Good Standing Status:</strong> Filing on time preserves your LLC's Certificate of Good Standing for bank accounts.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4">
            Table of Contents
          </h2>
          <ol className="space-y-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#what-is-annual-report" className="hover:text-gold-600 underline">1. What Is a US LLC State Annual Report?</a></li>
            <li><a href="#state-fee-breakdown" className="hover:text-gold-600 underline">2. State-by-State Fee & Deadline Breakdown</a></li>
            <li><a href="#certificate-good-standing" className="hover:text-gold-600 underline">3. Why Maintaining a Certificate of Good Standing Matters</a></li>
            <li><a href="#late-penalties" className="hover:text-gold-600 underline">4. Consequences of Missing Your Annual Report Deadline</a></li>
            <li><a href="#online-filing-steps" className="hover:text-gold-600 underline">5. How to Submit State Reports Online Remotely</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-annual-report" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is a US LLC State Annual Report?
          </h2>
          <p>
            A <strong>State Annual Report</strong> (or Franchise Tax Report) is an annual administrative filing required by state law to keep your Limited Liability Company active and legally compliant.
          </p>
          <p>
            It verifies your current Registered Agent name, physical office address, and manager details with the Secretary of State.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="state-fee-breakdown" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. State-by-State Fee & Deadline Breakdown
          </h2>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-sm border-collapse border border-border">
              <thead>
                <tr className="bg-navy-950 text-white">
                  <th className="p-3 border border-border font-semibold">State</th>
                  <th className="p-3 border border-border font-semibold text-gold-500">Annual Fee</th>
                  <th className="p-3 border border-border font-semibold">Filing Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-gray-700">
                <tr>
                  <td className="p-3 border border-border font-bold">Wyoming</td>
                  <td className="p-3 border border-border text-gold-600 font-bold">$62</td>
                  <td className="p-3 border border-border">1st day of anniversary month</td>
                </tr>
                <tr className="bg-off-white">
                  <td className="p-3 border border-border font-bold">Delaware</td>
                  <td className="p-3 border border-border text-red-600 font-bold">$300</td>
                  <td className="p-3 border border-border">June 1st every year</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-bold">Florida</td>
                  <td className="p-3 border border-border font-bold">$138.75</td>
                  <td className="p-3 border border-border">May 1st every year</td>
                </tr>
                <tr className="bg-off-white">
                  <td className="p-3 border border-border font-bold">New Mexico</td>
                  <td className="p-3 border border-border text-emerald-600 font-bold">$0</td>
                  <td className="p-3 border border-border">No annual report required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
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

        {/* SECTION 3 */}
        <div id="certificate-good-standing" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Why Maintaining a Certificate of Good Standing Matters
          </h2>
          <p>
            A <strong>Certificate of Good Standing</strong> proves that your LLC has paid all state fees and is up to date on filings.
          </p>
          <p>
            Banks (Mercury, Relay), payment gateways (Stripe), and US corporate clients routinely request a Certificate of Good Standing during compliance re-verification.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="late-penalties" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Consequences of Missing Your Annual Report Deadline
          </h2>
          <p>
            If you miss your filing deadline:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>Delaware:</strong> Imposes a $200 late penalty + 1.5% monthly interest.</li>
            <li><strong>Florida:</strong> Imposes a mandatory $400 late fee after May 1.</li>
            <li><strong>Wyoming:</strong> Dissolves the LLC administratively after 60 days of delinquency.</li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div id="online-filing-steps" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How to Submit State Reports Online Remotely
          </h2>
          <p>
            Non-resident founders can submit annual reports via official Secretary of State credit card portals or authorize their Registered Agent to file on their behalf.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div id="faqs" className="pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl bg-white overflow-hidden transition-all"
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
            Wyoming and Delaware annual report filings, franchise tax payments, Certificate of Good Standing issuance, and state compliance tracking.
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
