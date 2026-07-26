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
  FileCheck,
  IdCard,
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is an FBR NTN (National Tax Number) in Pakistan?",
    a: "An FBR NTN (National Tax Number) is a 7-digit unique tax identification credential issued by the Federal Board of Revenue (FBR) to individuals, sole proprietors, AOP partnerships, and SECP companies for tax identification, return filing, and legal commercial operations.",
  },
  {
    q: "How long does it take to register an FBR NTN online?",
    a: "Personal individual NTN registration on the FBR Iris 2.0 portal takes under 10 minutes. Business NTN addition for sole proprietors or SECP Corporate NTN generation via the SECP single window is instant or completed within 24 hours.",
  },
  {
    q: "What documents are required to register an individual NTN in Pakistan?",
    a: "You need: (1) Valid CNIC / NICOP, (2) Active mobile phone number registered under your own CNIC, (3) Personal email address, and (4) Paid utility bill or commercial property lease agreement proving your business/residential address.",
  },
  {
    q: "What is the difference between a Personal NTN and a Business NTN?",
    a: "A Personal NTN is registered directly against your CNIC for individual salary, freelance earnings, or general tax filing. A Business NTN adds a specific trade name (e.g. Sole Proprietorship or SECP Company) and business activity code to your FBR Iris profile.",
  },
  {
    q: "Is there any official government fee to register an NTN with FBR?",
    a: "No! Official FBR NTN registration and Form 181 business modifications on the Iris 2.0 portal are 100% free of cost.",
  },
  {
    q: "Does SECP company registration automatically issue an FBR Corporate NTN?",
    a: "Yes! Under SECP's single-window integration with FBR Iris, your company's 7-digit Corporate NTN is automatically generated and delivered alongside your SECP Certificate of Incorporation.",
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
  headline: "How to Register Personal & Business NTN (National Tax Number) with FBR Online",
  description:
    "Complete 2026 FBR NTN registration masterclass for Pakistanis & businesses. Detailed guide on registering personal NTN & business NTN on Iris 2.0, modifying business trade names via Form 181, automatic SECP corporate NTN issuance, and Active Taxpayer status.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan FBR Registration Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/how-to-register-ntn-online-for-pakistan",
};

export const Route = createFileRoute("/blog/how-to-register-ntn-online-for-pakistan")({
  head: () => ({
    meta: [
      { title: "Register Personal & Business NTN FBR Online (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "How to register personal & business NTN on FBR Iris 2.0 online. Step-by-step registration for CNIC, sole proprietorship & SECP corporate NTN.",
      },
      {
        name: "keywords",
        content:
          "how to register ntn online for pakistan, fbr iris 2.0 personal ntn registration free, business ntn registration sole proprietorship, secp corporate ntn automatic issuance fbr, fbr form 181 business modification",
      },
      {
        property: "og:title",
        content: "How to Register Personal & Business NTN (National Tax Number) with FBR Online",
      },
      {
        property: "og:description",
        content:
          "Master FBR Iris 2.0 NTN registration to obtain your 7-digit National Tax Number for personal or business tax filing.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-register-ntn-online-for-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-register-ntn-online-for-pakistan" }],
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
            How to Register Personal & Business NTN (National Tax Number) with FBR Online
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive step-by-step tutorial for individuals, sole proprietors, IT freelancers, and SECP companies on registering a National Tax Number (NTN) on FBR Iris 2.0, adding business trade names via Form 181, and establishing compliance.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ FBR Registration Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>11 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FBR Iris 2.0 Official Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>FBR NTN Registration Categories</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Personal Individual NTN</strong>
              <p className="text-navy-100 leading-relaxed">
                Registered directly against your 13-digit CNIC for salaried employment, freelance earnings, or personal asset transactions.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Sole Proprietor Business NTN</strong>
              <p className="text-navy-100 leading-relaxed">
                Adding a trade name and business address to your existing personal NTN profile via FBR Iris Form 181.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">SECP Corporate NTN</strong>
              <p className="text-navy-100 leading-relaxed">
                7-digit corporate NTN automatically generated by FBR API upon SECP company incorporation.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">100% Free FBR Processing</strong>
              <p className="text-navy-100 leading-relaxed">
                Official FBR NTN registration and Form 181 modifications carry zero government fees.
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
            <li><a href="#what-is-ntn" className="hover:text-gold-600 underline">1. What Is an FBR NTN & Its Statutory Importance</a></li>
            <li><a href="#ntn-types-matrix" className="hover:text-gold-600 underline">2. Comparative Matrix of NTN Categories</a></li>
            <li><a href="#personal-ntn-steps" className="hover:text-gold-600 underline">3. Step-by-Step Personal NTN Registration on Iris 2.0</a></li>
            <li><a href="#business-ntn-sole-proprietor" className="hover:text-gold-600 underline">4. Adding a Business Name & Address (Sole Proprietorship NTN)</a></li>
            <li><a href="#secp-corporate-ntn" className="hover:text-gold-600 underline">5. Automatic SECP Corporate NTN Integration</a></li>
            <li><a href="#form181-modifications" className="hover:text-gold-600 underline">6. Form 181 Profile Modifications & Address Updates</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-ntn" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is an FBR NTN & Its Statutory Importance
          </h2>
          <p>
            An <strong>FBR National Tax Number (NTN)</strong> is your primary 7-digit tax identification credential issued by the Federal Board of Revenue in Pakistan.
          </p>
          <p>
            Possessing an active NTN is legally required under the Income Tax Ordinance 2001 for opening business bank accounts, filing annual tax returns, registering commercial real estate, importing goods, and achieving Active Taxpayer List (ATL) "Filer" status.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="ntn-types-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Comparative Matrix of NTN Categories
          </h2>
          <p>
            Understanding which NTN category fits your business structure:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">NTN Category</th>
                  <th className="p-4 text-gold-500">Legal Entity Type</th>
                  <th className="p-4">Key Identifier</th>
                  <th className="p-4">Primary Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Personal Individual NTN</td>
                  <td className="p-4 font-bold text-navy-950">Pakistani Individual Citizen</td>
                  <td className="p-4">13-Digit CNIC Number</td>
                  <td className="p-4">Salaried employment, freelance work, asset filings.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Sole Proprietorship Business NTN</td>
                  <td className="p-4">Unincorporated Single Owner</td>
                  <td className="p-4">CNIC + Trade Name Profile</td>
                  <td className="p-4">Opening sole proprietor business bank accounts.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">SECP Corporate NTN</td>
                  <td className="p-4 text-emerald-700 font-bold">Pvt Ltd / SMC-Pvt Ltd Company</td>
                  <td className="p-4">7-Digit Corporate NTN</td>
                  <td className="p-4">Corporate bank accounts, SECP annual compliance.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">AOP Partnership NTN</td>
                  <td className="p-4">Partnership (Registrar of Firms)</td>
                  <td className="p-4">7-Digit AOP NTN</td>
                  <td className="p-4">Partnership bank accounts & AOP tax returns.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FBR NTN REGISTRATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Register Your FBR NTN with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ registers personal NTNs, sole proprietorship business NTNs, handles FBR Iris 181 modifications, and ensures active taxpayer status.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/ntn-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order NTN Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="personal-ntn-steps" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step Personal NTN Registration on Iris 2.0
          </h2>
          <p>
            Registering a personal NTN on FBR Iris 2.0 takes under 10 minutes:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 1: Access FBR Iris Portal</strong>
              <p className="text-xs text-gray-600">Navigate to the official FBR Iris 2.0 portal and click "Registration for Unregistered Person".</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 2: Enter Identity Credentials</strong>
              <p className="text-xs text-gray-600">Input your 13-digit CNIC, mobile number (registered in your own CNIC), personal email address, and residential property details.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 3: Dual PIN Authentication</strong>
              <p className="text-xs text-gray-600">Enter the 6-digit SMS verification code and 6-digit Email verification code sent by FBR.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 4: Receive Iris Login Credentials</strong>
              <p className="text-xs text-gray-600">FBR dispatches your Iris password and 4-digit PIN via SMS/Email, issuing your personal NTN instantly.</p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="business-ntn-sole-proprietor" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Adding a Business Name & Address (Sole Proprietorship NTN)
          </h2>
          <p>
            To convert your personal NTN into a <strong>Sole Proprietorship Business NTN</strong> for commercial banking:
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <FileCheck size={18} />
              Form 181 Business Addition Workflow:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              1. Log into Iris 2.0 &rarr; Open <strong>Form 181 (Form of Application for Registration / Modification)</strong>.
              <br /><br />
              2. Click <strong>Business Tab</strong> &rarr; Add Business Trade Name (e.g. <em>"Vanguard Tech Solutions"</em>).
              <br /><br />
              3. Select Principal Business Activity Code (e.g. <em>6201 - Software Development</em> or <em>6202 - IT Consultancy</em>).
              <br /><br />
              4. Attach proof of commercial office address (Paid electricity bill, land registry, or lease agreement) & Submit.
            </p>
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
            FBR NTN REGISTRATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Get Your FBR NTN Registered Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Personal CNIC NTN registration, sole proprietorship business NTN modification, and corporate tax profile setup handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/ntn-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order FBR NTN Registration
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
