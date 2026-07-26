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
} from "lucide-react";

const faqs = [
  {
    q: "Can I change my US LLC Registered Agent to a new provider at any time?",
    a: "Yes. You can switch your LLC's Registered Agent in Wyoming, Delaware, or any state at any time during the year by submitting a formal Statement of Change of Registered Agent with the Secretary of State.",
  },
  {
    q: "How much does it cost to change a Registered Agent in Wyoming?",
    a: "The Wyoming Secretary of State charges $0 filing fee to change your Registered Agent if submitted online.",
  },
  {
    q: "How much does Delaware charge to change an LLC Registered Agent?",
    a: "The Delaware Division of Corporations charges a $50 filing fee to process a Certificate of Change of Registered Agent.",
  },
  {
    q: "Do I need to notify my old Registered Agent when switching?",
    a: "While not strictly required by state law, it is good business practice to send a courtesy cancellation email to your old provider to stop recurring annual renewal invoices.",
  },
  {
    q: "Will changing my Registered Agent affect my IRS EIN or Mercury bank account?",
    a: "No. Changing your Registered Agent updates statutory legal address records with the Secretary of State. Your EIN, bank account, and tax status remain completely unchanged.",
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
    "Complete 2026 guide on changing your US LLC Registered Agent in Wyoming or Delaware. Learn filing fees ($0 WY vs $50 DE), Secretary of State forms, consent requirements, and seamlessly transferring providers.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/change-registered-agent-wyoming-delaware",
};

export const Route = createFileRoute("/blog/change-registered-agent-wyoming-delaware")({
  head: () => ({
    meta: [
      { title: "How to Change Registered Agent Wyoming & Delaware (2026) | ADVAQ" },
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
            A step-by-step procedural tutorial for foreign LLC owners on changing Registered Agents in Wyoming and Delaware, state filing fees, agent consent forms, and maintaining unbroken Good Standing.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
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
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Wyoming State Fee:</strong> $0 filing fee. Statement of Change submitted online via Wyoming Secretary of State portal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Delaware State Fee:</strong> $50 state filing fee. Certificate of Change submitted to Delaware Division of Corporations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Agent Consent:</strong> New Registered Agent must formally sign a Consent to Appointment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>No Impact on EIN/Bank:</strong> Transferring agents does NOT alter your IRS EIN or bank account details.</span>
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
            <li><a href="#why-change-agent" className="hover:text-gold-600 underline">1. Why Switch Your US Registered Agent Provider?</a></li>
            <li><a href="#wyoming-agent-change" className="hover:text-gold-600 underline">2. Step-by-Step: Changing Registered Agent in Wyoming ($0 Fee)</a></li>
            <li><a href="#delaware-agent-change" className="hover:text-gold-600 underline">3. Step-by-Step: Changing Registered Agent in Delaware ($50 Fee)</a></li>
            <li><a href="#canceling-old-agent" className="hover:text-gold-600 underline">4. Canceling Service with Your Previous Provider</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-change-agent" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Switch Your US Registered Agent Provider?
          </h2>
          <p>
            Foreign founders often decide to switch Registered Agents due to expensive annual renewal fees, poor customer support, or lack of mail forwarding services.
          </p>
          <p>
            State corporate laws allow LLC owners to transfer to a new Registered Agent at any point without re-incorporating the company.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="wyoming-agent-change" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Step-by-Step: Changing Registered Agent in Wyoming ($0 Fee)
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Appoint a new licensed Wyoming Registered Agent who signs a <em>Consent to Appointment by Registered Agent</em>.</li>
            <li>File the <strong>Statement of Change by Business Entity</strong> online at the Wyoming Secretary of State portal.</li>
            <li>Wyoming charges <strong>$0 state filing fee</strong> for agent changes. Approval is instant online.</li>
          </ol>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
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

        {/* SECTION 3 */}
        <div id="delaware-agent-change" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step: Changing Registered Agent in Delaware ($50 Fee)
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Obtain new Delaware Registered Agent details and formal written consent.</li>
            <li>Draft a <strong>Certificate of Change of Registered Agent</strong> under 6 Del. C. § 18-104.</li>
            <li>Submit the executed form to the Delaware Division of Corporations with the <strong>$50 state filing fee</strong>.</li>
          </ol>
        </div>

        {/* SECTION 4 */}
        <div id="canceling-old-agent" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Canceling Service with Your Previous Provider
          </h2>
          <p>
            Once the Secretary of State approves the change, email a copy of the approved filing to your previous provider to officially close your account and prevent unwanted auto-renewal invoices.
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
            REGISTERED AGENT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Transfer Your Registered Agent to ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Wyoming and Delaware Secretary of State change filings, digital legal document forwarding, and annual state compliance tracking.
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
