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
  RefreshCw,
  FileCheck,
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
    q: "Can I change my US LLC Registered Agent to a new provider at any time?",
    a: "Yes. You can switch your LLC's Registered Agent in Wyoming, Delaware, or any state at any time during the year by submitting a formal Statement of Change of Registered Agent with the Secretary of State.",
  },
  {
    q: "How much does it cost to change a Registered Agent in Wyoming?",
    a: "The Wyoming Secretary of State charges $0 filing fee to change your Registered Agent if submitted online through the Secretary of State portal.",
  },
  {
    q: "How much does Delaware charge to change an LLC Registered Agent?",
    a: "The Delaware Division of Corporations charges a $50 official state filing fee to process a Certificate of Change of Registered Agent.",
  },
  {
    q: "Do I need to notify my old Registered Agent when switching?",
    a: "While not strictly required by state law, it is recommended business practice to send a courtesy cancellation email along with your approved state filing receipt to your old provider to terminate billing and prevent recurring invoices.",
  },
  {
    q: "Will changing my Registered Agent affect my IRS EIN or Mercury bank account?",
    a: "No. Changing your Registered Agent updates statutory legal address records with the Secretary of State. Your EIN, federal tax classification, bank account, and internal company operations remain completely unchanged.",
  },
  {
    q: "How long does it take for a Registered Agent change to take effect?",
    a: "In Wyoming, online filings are processed instantly ($0 fee). In Delaware, standard processing takes 2 to 3 business days ($50 fee), or 24 hours with optional expedited service.",
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
  headline: "How to Change Your Registered Agent in Wyoming or Delaware (Step-by-Step)",
  description:
    "Exhaustive 2026 masterclass guide on changing your US LLC Registered Agent in Wyoming or Delaware. Learn filing fees ($0 WY vs $50 DE), Secretary of State forms, consent requirements, and seamlessly transferring providers.",
  author: { "@type": "Organization", name: "ADVAQ US Legal Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/change-registered-agent-wyoming-delaware",
};

export const Route = createFileRoute("/blog/change-registered-agent-wyoming-delaware")({
  head: () => ({
    meta: [
      { title: "How to Change Registered Agent Wyoming & Delaware (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Step-by-step guide to change your US LLC Registered Agent in Wyoming & Delaware. State filing fees ($0 WY vs $50 DE), Secretary of State forms & provider transfer.",
      },
      {
        name: "keywords",
        content:
          "change registered agent wyoming delaware, wyoming llc statement of change registered agent, delaware certificate of change registered agent fee, switch registered agent provider foreign non resident",
      },
      {
        property: "og:title",
        content: "How to Change Your Registered Agent in Wyoming or Delaware (Step-by-Step)",
      },
      {
        property: "og:description",
        content:
          "Discover how foreign LLC owners switch Registered Agents in Wyoming or Delaware smoothly without disruption to company compliance.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/change-registered-agent-wyoming-delaware" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/change-registered-agent-wyoming-delaware" }],
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
            How to Change Your Registered Agent in Wyoming or Delaware (Step-by-Step)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A step-by-step procedural masterclass tutorial for foreign LLC owners on changing Registered Agents in Wyoming and Delaware, state filing fees, agent consent forms, and maintaining unbroken Good Standing.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Legal Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>16 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Secretary of State Agent Transfer Protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Agent Transfer Summary</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Wyoming State Fee ($0)</strong>
              <p className="text-navy-100 leading-relaxed">
                $0 filing fee. Statement of Change submitted online via Wyoming Secretary of State portal.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Delaware State Fee ($50)</strong>
              <p className="text-navy-100 leading-relaxed">
                $50 state filing fee. Certificate of Change submitted to Delaware Division of Corporations.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Mandatory Agent Consent</strong>
              <p className="text-navy-100 leading-relaxed">
                New Registered Agent must formally sign a Consent to Appointment prior to state filing.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">No Impact on EIN/Bank</strong>
              <p className="text-navy-100 leading-relaxed">
                Transferring agents does NOT alter your IRS EIN, tax status, or Mercury/Relay bank accounts.
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
            <li><a href="#why-change-agent" className="hover:text-gold-600 underline">1. Why Switch Your US Registered Agent Provider?</a></li>
            <li><a href="#wyoming-agent-change" className="hover:text-gold-600 underline">2. Step-by-Step: Changing Registered Agent in Wyoming ($0 Fee)</a></li>
            <li><a href="#transfer-matrix" className="hover:text-gold-600 underline">3. Comprehensive State Registered Agent Transfer Matrix</a></li>
            <li><a href="#delaware-agent-change" className="hover:text-gold-600 underline">4. Step-by-Step: Changing Registered Agent in Delaware ($50 Fee)</a></li>
            <li><a href="#canceling-old-agent" className="hover:text-gold-600 underline">5. Canceling Service & Stopping Billing with Previous Providers</a></li>
            <li><a href="#impact-analysis" className="hover:text-gold-600 underline">6. Impact Analysis on IRS EIN, Bank Accounts & State Status</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-change-agent" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Switch Your US Registered Agent Provider?
          </h2>
          <p>
            Every US Limited Liability Company is statutory required by state law (Wyoming Statute § 17-29-113 / 6 Del. C. § 18-104) to continuously maintain a Registered Agent residing in the state of formation to accept service of process and legal summons.
          </p>
          <p>
            Foreign LLC owners frequently decide to switch Registered Agent providers to escape expensive annual renewal price hikes, gain access to digital mail scanning services, or consolidate entity management with a specialized non-resident corporate provider. State law grants business managers absolute freedom to transfer Registered Agents at any point without disrupting company operations.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="wyoming-agent-change" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Step-by-Step: Changing Registered Agent in Wyoming ($0 Fee)
          </h2>
          <p>
            Transferring your Registered Agent in Wyoming is straightforward and incurs <strong>$0 in state filing fees</strong>:
          </p>
          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Agent Consent:</strong> Appoint your new licensed Wyoming Registered Agent who executes a formal <em>Consent to Appointment by Registered Agent</em> (Form WY-RA-1).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Online Portal Filing:</strong> Submit the <em>Statement of Change by Business Entity</em> online via the Wyoming Secretary of State portal.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Instant Approval:</strong> Wyoming processes online agent changes instantly at $0 cost and generates an updated corporate filing receipt.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 3 */}
        <div id="transfer-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive State Registered Agent Transfer Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of state agent change procedures:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Incorporation State</th>
                  <th className="p-4 text-gold-500">Secretary Filing Fee</th>
                  <th className="p-4 text-emerald-400">Processing Time</th>
                  <th className="p-4">Filing Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Wyoming</td>
                  <td className="p-4 text-emerald-700 font-bold">$0 Fee</td>
                  <td className="p-4 text-emerald-700 font-bold">Instant Online Approval</td>
                  <td className="p-4 text-navy-900">Secretary of State Online Portal</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Delaware</td>
                  <td className="p-4 text-navy-900">$50 Filing Fee</td>
                  <td className="p-4 text-navy-900">2-3 Business Days (or 24-hr exp)</td>
                  <td className="p-4 text-navy-900">Division of Corporations Filing</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Florida</td>
                  <td className="p-4 text-navy-900">$25 Filing Fee</td>
                  <td className="p-4 text-navy-900">1-2 Business Days</td>
                  <td className="p-4 text-navy-900">Sunbiz Online Portal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            REGISTERED AGENT TRANSFER SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Switch Your Registered Agent to ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles the entire Secretary of State change of agent filing in Wyoming or Delaware with zero downtime to your compliance.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/registered-agent-renewal"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Agent Transfer Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="delaware-agent-change" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step: Changing Registered Agent in Delaware ($50 Fee)
          </h2>
          <p>
            In Delaware, changing your LLC's Registered Agent requires submitting a formal statutory amendment to the Division of Corporations:
          </p>
          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Execute Certificate of Change:</strong> Execute a <em>Certificate of Change of Registered Agent</em> pursuant to 6 Del. C. § 18-104.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>State Fee Payment:</strong> Submit the Certificate to the Delaware Division of Corporations with the mandatory <strong>$50 state filing fee</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>State Approval Receipt:</strong> Receive an official stamped filing evidence certificate from Dover, Delaware.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 5 */}
        <div id="canceling-old-agent" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Canceling Service & Stopping Billing with Previous Providers
          </h2>
          <p>
            Once your state agent transfer is approved, send a formal cancellation notification email attached with your approved state filing certificate to your previous registered agent.
          </p>
          <p>
            This official notification terminates your service contract and prevents former providers from sending recurring annual renewal invoices or issuing unauthorized resignation filings.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="impact-analysis" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Impact Analysis on IRS EIN, Bank Accounts & State Status
          </h2>
          <p>
            Changing your Registered Agent has <strong>zero negative impact</strong> on your company's federal standing:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>IRS EIN Status:</strong> Your EIN and federal tax ID number remain 100% active and unaffected.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>US Bank Accounts:</strong> Mercury, Relay, and traditional US bank accounts remain fully functional without requiring re-verification.</span>
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
            REGISTERED AGENT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Transfer Your Registered Agent to ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Wyoming and Delaware Secretary of State change filings, digital legal document forwarding, and annual state compliance tracking handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/registered-agent-renewal"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Registered Agent Transfer
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
