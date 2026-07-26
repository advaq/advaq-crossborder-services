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
  AlertTriangle,
  Receipt,
  Users,
  Coins,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "Does an overseas director living outside the UK need to register for UK PAYE payroll?",
    a: "If a non-resident director performs all their work outside the UK and only draws dividends or takes a director salary below the National Insurance Secondary Threshold, PAYE registration is optional. However, if you wish to claim director salary as a tax-deductible Corporation Tax expense, registering a PAYE scheme with HMRC is required.",
  },
  {
    q: "What is the 2026 UK PAYE Personal Allowance & National Insurance threshold?",
    a: "The UK Income Tax Personal Allowance is £12,570 per year. Director salaries up to £12,570 generate zero UK Income Tax liability. The Primary National Insurance Threshold is £12,570 per year.",
  },
  {
    q: "How does HMRC Real Time Information (RTI) reporting work for overseas staff?",
    a: "HMRC requires employers to submit an electronic Full Payment Submission (FPS) on or before every payday via RTI-compliant payroll software (such as Xero Payroll or BrightPay).",
  },
  {
    q: "Do I need to pay UK National Insurance (NIC) for remote employees working overseas?",
    a: "No. Employees who are physically based outside the UK and perform their duties entirely abroad are generally exempt from UK National Insurance Contributions (NIC) under international social security agreements.",
  },
  {
    q: "What happens if I miss an HMRC RTI payroll submission deadline?",
    a: "HMRC issues automated late RTI filing penalties starting at £100 per month for small employers (1 to 9 employees) who fail to submit FPS filings on time.",
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
  headline: "UK PAYE Payroll Guide for Non-Resident Directors & Remote Staff",
  description:
    "Complete 2026 HMRC PAYE payroll guide for foreign directors. Learn tax-free Personal Allowance thresholds, Real Time Information (RTI) FPS submissions, and overseas remote staff rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uk-paye-payroll-non-resident-director",
};

export const Route = createFileRoute("/blog/uk-paye-payroll-non-resident-director")({
  head: () => ({
    meta: [
      { title: "UK PAYE Payroll Non-Resident Director Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "HMRC PAYE payroll guide for non-UK resident company directors and remote international employees. Tax allowances, RTI submissions & National Insurance.",
      },
      {
        name: "keywords",
        content:
          "uk paye payroll non resident director, hmrc rti full payment submission overseas staff, uk director salary personal allowance, foreign company paye scheme registration",
      },
      {
        property: "og:title",
        content: "UK PAYE Payroll Guide for Non-Resident Directors & Remote Staff",
      },
      {
        property: "og:description",
        content:
          "Understand how foreign directors manage UK PAYE payroll, claim tax-deductible salary expenses, and submit HMRC RTI reports.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-paye-payroll-non-resident-director" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-paye-payroll-non-resident-director" }],
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
            <span>UK Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            UK PAYE Payroll Guide for Non-Resident Directors & Remote Staff
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive HMRC compliance guide for foreign directors on PAYE scheme registration, tax-free Personal Allowance limits, Real Time Information (RTI) reporting, and hiring remote global staff.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Payroll & Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>HMRC RTI & PAYE Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>PAYE Payroll Summary at a Glance</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Tax-Deductible Salary Expense:</strong> Paying a director salary reduces your UK Limited Company's net profit, directly lowering your Corporation Tax liability.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Optimal Salary Threshold (£12,570):</strong> Setting a director salary up to the Personal Allowance threshold (£12,570/yr) incurs 0% UK Income Tax.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Real Time Information (RTI):</strong> HMRC mandates digital Full Payment Submission (FPS) filings on or before every payday.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Remote Overseas Workers:</strong> Overseas staff physically performing duties abroad do not pay UK PAYE Income Tax or National Insurance.</span>
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
            <li><a href="#what-is-paye" className="hover:text-gold-600 underline">1. What is HMRC Pay As You Earn (PAYE)?</a></li>
            <li><a href="#salary-tax-efficiency" className="hover:text-gold-600 underline">2. Optimal Tax-Efficient Director Salary Rules (£12,570)</a></li>
            <li><a href="#rti-reporting" className="hover:text-gold-600 underline">3. Real Time Information (RTI) & FPS Submissions</a></li>
            <li><a href="#remote-staff-rules" className="hover:text-gold-600 underline">4. Hiring Remote International Workers (Non-UK Residents)</a></li>
            <li><a href="#national-insurance" className="hover:text-gold-600 underline">5. National Insurance Contributions (NIC) Rules</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-paye" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What is HMRC Pay As You Earn (PAYE)?
          </h2>
          <p>
            <strong>Pay As You Earn (PAYE)</strong> is HM Revenue & Customs' system to collect Income Tax and National Insurance Contributions (NIC) directly from employee wages and director salaries.
          </p>
          <p>
            When a UK Limited Company registers a PAYE scheme, HMRC issues an official <strong>Employer Accounts Reference Number</strong> and <strong>PAYE Reference Code</strong>.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="salary-tax-efficiency" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Optimal Tax-Efficient Director Salary Rules (£12,570)
          </h2>
          <p>
            For foreign directors, combining a small director salary with dividend payments provides the most tax-efficient corporate structure in the UK.
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-4 my-6">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <Coins className="text-gold-500" size={20} />
              The £12,570 Tax Optimization Strategy:
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                1. <strong>Director Salary (£12,570/yr):</strong> Counts as a 100% tax-deductible allowable expense for Corporation Tax, reducing company taxable profit by £12,570.
              </p>
              <p>
                2. <strong>0% Income Tax:</strong> Exactly matches the UK Personal Allowance (£12,570), resulting in zero personal Income Tax due to HMRC.
              </p>
              <p>
                3. <strong>Remaining Profits as Dividends:</strong> Extracted at 0% UK Dividend Withholding Tax for non-residents.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="rti-reporting" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Real Time Information (RTI) & FPS Submissions
          </h2>
          <p>
            HMRC enforces <strong>Real Time Information (RTI)</strong> reporting. Employers must submit an electronic <strong>Full Payment Submission (FPS)</strong> to HMRC on or before every single payday.
          </p>
          <p>
            If no salaries are paid in a given month, an <strong>Employer Payment Summary (EPS)</strong> must be submitted by the 19th of the following month to inform HMRC of zero activity.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            HMRC PAYE PAYROLL SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            HMRC PAYE Registration & Monthly Payroll Service
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ registers your HMRC PAYE employer scheme, issues digital director payslips, and handles monthly RTI Full Payment Submissions (FPS).
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/paye-payroll-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore PAYE Payroll Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="remote-staff-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Hiring Remote International Workers (Non-UK Residents)
          </h2>
          <p>
            Many UK LTD companies operate remote software engineering or marketing teams in Pakistan, India, the UAE, or Eastern Europe.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-base mb-2">
                <Users size={20} />
                <span>Independent Contractors</span>
              </div>
              <p className="text-sm text-gray-600">
                Remote freelancers operating abroad are engaged via Contractor Agreements. They invoice your UK company directly and handle their own local taxes. No UK PAYE applies.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-navy-700 font-semibold text-base mb-2">
                <FileCheck size={20} />
                <span>Direct Remote Employees</span>
              </div>
              <p className="text-sm text-gray-600">
                If hired on UK payroll but working 100% overseas, code `NT` (No Tax) can be requested from HMRC so no UK Income Tax is withheld.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="national-insurance" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. National Insurance Contributions (NIC) Rules
          </h2>
          <p>
            UK National Insurance Contributions (NIC) fund UK state benefits and healthcare. 
          </p>
          <p>
            Non-resident directors and employees who perform zero physical work within the United Kingdom are generally exempt from UK Class 1 Employers and Employees NIC under bilateral social security agreements.
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
            HMRC PAYE PAYROLL SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your UK PAYE Scheme with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            HMRC employer registration, monthly payslip generation, and automated RTI Full Payment Submissions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/paye-payroll-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK PAYE Payroll Registration
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
