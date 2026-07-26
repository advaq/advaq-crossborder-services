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
  Home,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Flexi-Desk in a UAE Freezone?",
    a: "A Flexi-Desk (or Smart Desk / Virtual Desk) is a shared, co-working office space arrangement provided by the Freezone authority. It satisfies statutory legal office requirements for company registration without the high cost of a physical commercial lease.",
  },
  {
    q: "How many UAE Residence Visas can I get with a Flexi-Desk package?",
    a: "Flexi-Desk packages typically allocate between 1 and 3 residence visa quotas depending on the specific Freezone (e.g. Meydan, IFZA, or Shams).",
  },
  {
    q: "When do I need to upgrade from a Flexi-Desk to a Dedicated Physical Office?",
    a: "You must upgrade to a dedicated physical office if: (1) You require more residence visa quotas for employees, (2) You conduct physical manufacturing/warehousing, or (3) Certain tier-1 banks require a physical office lease for high-volume corporate accounts.",
  },
  {
    q: "Can I open a corporate bank account with a Flexi-Desk Freezone license?",
    a: "Yes! Digital business banks (Wio Business, Mashreq NEOBiz) accept Flexi-Desk Freezone licenses for corporate account opening.",
  },
  {
    q: "What is the cost difference between Flexi-Desk and Dedicated Office?",
    a: "A Flexi-Desk is included in standard Freezone packages for ~AED 12,000 - 15,000 per year. A physical commercial office lease in Dubai starts from ~AED 35,000 to AED 80,000+ annually.",
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
  headline: "Flexi-Desk vs Dedicated Office Space in UAE Freezones: Legal Requirements",
  description:
    "Complete 2026 office lease guide for UAE Freezone companies. Compare Flexi-Desk virtual office packages vs dedicated physical commercial office space on visa quotas, Ejari, and banking compliance.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/flexi-desk-vs-office-space-uae-freezone",
};

export const Route = createFileRoute("/blog/flexi-desk-vs-office-space-uae-freezone")({
  head: () => ({
    meta: [
      { title: "Flexi-Desk vs Office Space UAE Freezone (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Flexi-Desk vs dedicated office space comparison for UAE Freezones. Legal office rules, residence visa quotas, Wio bank approval & annual lease costs.",
      },
      {
        name: "keywords",
        content:
          "flexi desk vs office space uae freezone, smart desk virtual office lease dubai freezone, uae residence visa quota office package, wio bank flexi desk compliance",
      },
      {
        property: "og:title",
        content: "Flexi-Desk vs Dedicated Office Space in UAE Freezones: Legal Requirements",
      },
      {
        property: "og:description",
        content:
          "Discover whether a low-cost Flexi-Desk or dedicated physical office lease is required for your UAE Freezone business setup.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/flexi-desk-vs-office-space-uae-freezone" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/flexi-desk-vs-office-space-uae-freezone" }],
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
            Flexi-Desk vs Dedicated Office Space in UAE Freezones: Legal Requirements
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal and operational guide for foreign investors comparing shared Flexi-Desks and dedicated physical office leases on costs, visa quotas, and UAE banking compliance.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE Commercial Office Lease Guidelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Office Option Summary</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Flexi-Desk (Shared Workspace)</strong>
              <p className="text-navy-100 leading-relaxed">
                Cost-effective (~AED 12k–15k license inc.). Grants 1 to 3 residence visas. Perfect for IT consultants, SaaS, & remote agencies.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Dedicated Physical Office</strong>
              <p className="text-navy-100 leading-relaxed">
                Private office lease (~AED 35k–80k+). Unlimited visa quotas based on sq ft. Required for physical retail, warehousing, & large teams.
              </p>
            </div>
          </div>
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
            <li><a href="#what-is-flexi-desk" className="hover:text-gold-600 underline">1. What Is a Flexi-Desk in a UAE Freezone?</a></li>
            <li><a href="#legal-requirements" className="hover:text-gold-600 underline">2. UAE Statutory Office Space Rules for Company Registration</a></li>
            <li><a href="#visa-quota-impact" className="hover:text-gold-600 underline">3. Residence Visa Quotas: Flexi-Desk vs Physical Lease</a></li>
            <li><a href="#banking-compliance" className="hover:text-gold-600 underline">4. Corporate Bank Account Approval & Proof of Address</a></li>
            <li><a href="#cost-comparison" className="hover:text-gold-600 underline">5. Annual Cost Comparison & When to Upgrade</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-flexi-desk" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is a Flexi-Desk in a UAE Freezone?
          </h2>
          <p>
            A <strong>Flexi-Desk</strong> (also known as a Smart Desk or Business Center Desk) is a shared co-working workstation located within the Freezone's business center.
          </p>
          <p>
            It provides your company with a valid corporate address, mail receiving services, and meeting room access without requiring a dedicated private office.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="legal-requirements" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. UAE Statutory Office Space Rules for Company Registration
          </h2>
          <p>
            Under UAE commercial regulations, every registered company must have a physical presence or flexi-desk agreement attached to its trade license.
          </p>
          <p>
            Flexi-desk agreements satisfy this requirement 100% legally for professional, IT, and service-based activities.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE OFFICE LEASING & FLEXI-DESK SETUP
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your UAE Flexi-Desk Business License with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ includes Flexi-Desk agreements in all low-cost Freezone incorporation packages, ensuring instant trade license issuance and visa quota approval.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore Freezone Flexi-Desk Packages <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="visa-quota-impact" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Residence Visa Quotas: Flexi-Desk vs Physical Lease
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>Flexi-Desk Package:</strong> Allocates 1 to 3 investor/employee residence visas.</li>
            <li><strong>Dedicated Office Lease:</strong> Allocates 1 visa per ~80 sq ft of office space (allowing scale up to 10+ employees).</li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="banking-compliance" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Corporate Bank Account Approval & Proof of Address
          </h2>
          <p>
            For digital banks (Wio Business, Mashreq NEOBiz), a Flexi-Desk license is completely sufficient.
          </p>
          <p>
            If your business requires traditional tier-1 physical banking relationships (Emirates NBD, FAB) for complex trade financing or letters of credit, banks may request a physical office inspection.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="cost-comparison" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Annual Cost Comparison & When to Upgrade
          </h2>
          <p>
            Startups should begin with a Flexi-Desk package to minimize overhead. Once your team grows beyond 3 local employees or requires physical stock warehousing, upgrade to a dedicated commercial office lease.
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
            UAE OFFICE LEASING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Set Up Your UAE Office Space with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Flexi-Desk business center packages, dedicated commercial Ejari leases, residence visa allocations, and Wio corporate banking support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Flexi-Desk Freezone Package
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
