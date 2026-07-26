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
  FileText,
  Printer,
  Mail,
  Building,
  Scale,
  Percent,
  Receipt,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "Can a foreign non-resident obtain an IRS EIN without a Social Security Number (SSN) or ITIN?",
    a: "Yes, 100%. Under IRC Section 6109, the Internal Revenue Service (IRS) permits foreign business owners without an SSN or ITIN to obtain an Employer Identification Number (EIN) for their US LLC by filing IRS Form SS-4 via international fax or mail.",
  },
  {
    q: "How long does it take for a foreign founder to get an EIN from the IRS?",
    a: "Filing Form SS-4 via international fax to the IRS Cincinnati Operations unit typically takes 4 to 7 business days for the IRS to process and issue the CP575 EIN confirmation letter. Filing by international mail takes 4 to 6 weeks.",
  },
  {
    q: "Can I obtain an IRS EIN for my US LLC online if I don't have an SSN?",
    a: "No. The IRS online EIN portal is restricted strictly to applicants who possess a valid US SSN or ITIN. Non-residents without an SSN MUST apply via Form SS-4 (fax or mail).",
  },
  {
    q: "What is an IRS CP575 letter vs a 147C letter?",
    a: "Form CP575 is the original physical confirmation letter issued by the IRS when your EIN is first generated. A 147C letter is an official replacement verification letter issued by the IRS if you lose your original CP575.",
  },
  {
    q: "Why do I need an EIN for my US LLC?",
    a: "You need an EIN to open US business bank accounts (Mercury, Relay), connect payment gateways (Stripe, PayPal), hire contractors, and file annual IRS tax returns (Form 5472 / 1120).",
  },
  {
    q: "What happens if I lose my original IRS CP575 letter?",
    a: "If your CP575 is lost, you can call the IRS International Tax Unit (`+1 267-941-1099`) to request an official 147C Verification Letter, which is legally accepted by banks as an exact equivalent.",
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
  headline: "How to Get an EIN (Employer Identification Number) Without SSN or ITIN (Step-by-Step)",
  description:
    "Complete 2026 step-by-step masterclass guide for non-US residents on obtaining an IRS EIN without SSN or ITIN. Form SS-4 fax filing instructions, CP575 letter, and common IRS mistakes.",
  author: { "@type": "Organization", name: "ADVAQ US Tax Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/how-to-get-ein-without-ssn-non-us-resident",
};

export const Route = createFileRoute("/blog/how-to-get-ein-without-ssn-non-us-resident")({
  head: () => ({
    meta: [
      { title: "How to Get an EIN Without SSN or ITIN (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Step-by-step guide for foreign non-residents to get an IRS EIN without SSN or ITIN. IRS Form SS-4 international fax instructions, CP575 letter & timelines.",
      },
      {
        name: "keywords",
        content:
          "get ein without ssn non us resident, irs form ss4 international fax instructions, foreign applicant ein CP575 confirmation letter, US LLC tax ID non resident",
      },
      {
        property: "og:title",
        content: "How to Get an EIN (Employer Identification Number) Without SSN or ITIN (Step-by-Step)",
      },
      {
        property: "og:description",
        content:
          "Discover how non-US residents obtain an official IRS EIN tax ID number for a US LLC without having a Social Security Number or ITIN.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-get-ein-without-ssn-non-us-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-get-ein-without-ssn-non-us-resident" }],
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
            How to Get an EIN (Employer Identification Number) Without SSN or ITIN (Step-by-Step)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A complete 2026 step-by-step masterclass for foreign founders on completing IRS Form SS-4, faxing directly to the IRS international unit, receiving your CP575 letter, and avoiding common rejection traps.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Tax Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>IRS Internal Revenue Code Section 6109</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>EIN Application Key Principles</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">No SSN or ITIN Required</strong>
              <p className="text-navy-100 leading-relaxed">
                Foreign non-residents are legally entitled under IRC § 6109 to receive an EIN without an SSN.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Form SS-4 Fax Filing</strong>
              <p className="text-navy-100 leading-relaxed">
                Submit completed IRS Form SS-4 via international fax to the IRS Cincinnati Operations unit.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Line 7b "FOREIGN" Rule</strong>
              <p className="text-navy-100 leading-relaxed">
                Write "FOREIGN" in Line 7b of Form SS-4 to signal to IRS agents that the responsible party has no US SSN.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Processing Timeframe</strong>
              <p className="text-navy-100 leading-relaxed">
                Takes 4 to 7 business days via fax (or 4–6 weeks via international mail).
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
            <li><a href="#what-is-ein" className="hover:text-gold-600 underline">1. What is an IRS EIN and Why Do You Need It?</a></li>
            <li><a href="#application-matrix" className="hover:text-gold-600 underline">2. Comprehensive IRS EIN Application Process Matrix</a></li>
            <li><a href="#ss4-form-filling" className="hover:text-gold-600 underline">3. Step-by-Step Guide to Filling IRS Form SS-4</a></li>
            <li><a href="#faxing-to-irs" className="hover:text-gold-600 underline">4. How to Fax Form SS-4 to the IRS International Unit</a></li>
            <li><a href="#cp575-letter" className="hover:text-gold-600 underline">5. Understanding the IRS CP575 EIN Confirmation Letter vs 147C</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. Top 4 Mistakes That Cause IRS EIN Rejections</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-ein" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What is an IRS EIN and Why Do You Need It?
          </h2>
          <p>
            An <strong>Employer Identification Number (EIN)</strong>, also known as a Federal Tax Identification Number, is a unique 9-digit number assigned by the Internal Revenue Service (IRS) to identify a US business entity.
          </p>
          <p>
            As a non-resident foreign business owner, you cannot operate your US LLC without an EIN. You need it to:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>US Business Banking:</strong> Open USD checking/savings accounts with Mercury Bank or Relay Financial.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Payment Gateways:</strong> Connect Stripe, PayPal US, and Amazon FBA seller accounts.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>IRS Tax Compliance:</strong> File annual IRS Form 5472 and Form 1120 pro-forma tax returns.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div id="application-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Comprehensive IRS EIN Application Process Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of EIN application channels:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Application Method</th>
                  <th className="p-4 text-gold-500">SSN / ITIN Need</th>
                  <th className="p-4 text-emerald-400">Applicant Eligibility</th>
                  <th className="p-4">Processing Timeframe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Online IRS Portal</td>
                  <td className="p-4 text-rose-700 font-bold">Mandatory SSN / ITIN</td>
                  <td className="p-4 text-navy-900">US Citizens & Residents Only</td>
                  <td className="p-4 text-emerald-700 font-bold">Immediate (Instant PDF)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">International Fax (Form SS-4)</td>
                  <td className="p-4 text-emerald-700 font-bold">No SSN / ITIN Required</td>
                  <td className="p-4 text-gold-700 font-bold">Non-Resident Aliens Worldwide</td>
                  <td className="p-4 text-emerald-700 font-bold">4 to 7 Business Days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">International Mail (Form SS-4)</td>
                  <td className="p-4 text-emerald-700 font-bold">No SSN / ITIN Required</td>
                  <td className="p-4 text-navy-900">Non-Resident Aliens Worldwide</td>
                  <td className="p-4 text-rose-700 font-bold">4 to 6 Weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="ss4-form-filling" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step Guide to Filling IRS Form SS-4
          </h2>
          <p>
            IRS Form SS-4 is the official application for an Employer Identification Number.
          </p>

          <div className="bg-off-white p-6 rounded-2xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-950 text-base flex items-center gap-2">
              <FileText className="text-gold-600" size={20} />
              Key Fields for Foreign Applicants:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="text-gold-600 shrink-0 mt-0.5" size={16} />
                <span><strong>Line 1:</strong> Exact legal name of your LLC as shown on state Articles of Organization.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-gold-600 shrink-0 mt-0.5" size={16} />
                <span><strong>Line 7a:</strong> Name of the Responsible Party (your full name as in passport).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-gold-600 shrink-0 mt-0.5" size={16} />
                <span><strong>Line 7b (CRITICAL):</strong> Write <strong>"FOREIGN"</strong>. Do NOT leave blank or enter zeros.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-gold-600 shrink-0 mt-0.5" size={16} />
                <span><strong>Line 9a:</strong> Select "Limited liability company (LLC)" and specify number of members.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="faxing-to-irs" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. How to Fax Form SS-4 to the IRS International Unit
          </h2>
          <p>
            Non-resident applicants filing without an SSN must transmit Form SS-4 to the IRS International Operation unit in Cincinnati, Ohio.
          </p>
          <p>
            <strong>Official IRS International Fax Numbers:</strong> <code>+1 (855) 641-6935</code> or <code>+1 (304) 707-9471</code>.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            IRS EIN REGISTRATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your IRS EIN Fast Without SSN/ITIN
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares Form SS-4, acts as Third Party Designee, faxes directly to the IRS, and delivers your official CP575 EIN letter within days.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/ein-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order IRS EIN Processing Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="cp575-letter" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Understanding the IRS CP575 EIN Confirmation Letter vs 147C
          </h2>
          <p>
            Once approved, the IRS generates <strong>Notice CP575</strong>. This physical document serves as permanent legal proof of your EIN.
          </p>
          <p>
            Banks like Mercury and payment processors like Stripe explicitly require a PDF scan of your CP575 letter during onboarding verification.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Top 4 Mistakes That Cause IRS EIN Rejections
          </h2>
          <div className="space-y-3 my-4">
            <div className="flex items-start gap-3 bg-off-white p-4 rounded-xl border border-border text-sm">
              <Printer className="text-gold-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Leaving Line 7b Blank:</strong> Failing to write "FOREIGN" causes automated system rejection.
              </div>
            </div>
            <div className="flex items-start gap-3 bg-off-white p-4 rounded-xl border border-border text-sm">
              <Mail className="text-gold-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Name Mismatch:</strong> Entering a company name that differs even slightly from your state Articles of Organization.
              </div>
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
            IRS EIN REGISTRATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Obtain Your US EIN Tax ID with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Error-free Form SS-4 preparation, Third Party Designee submission, IRS international faxing, and CP575 letter delivery handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/ein-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order IRS EIN Processing
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
