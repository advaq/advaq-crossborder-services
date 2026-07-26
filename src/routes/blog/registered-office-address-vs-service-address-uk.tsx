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
  MapPin,
  Lock,
  Mail,
  EyeOff,
  Globe2,
} from "lucide-react";

const faqs = [
  {
    q: "Can a non-UK resident use the same virtual address for both Registered Office and Service Address?",
    a: "Yes. In fact, most overseas directors use the same UK commercial virtual address for both the Registered Office Address (company level) and the Directors' Service Address (individual level) to maintain complete privacy and streamline mail forwarding.",
  },
  {
    q: "Can I use a PO Box as my UK Registered Office Address?",
    a: "No. Companies House strictly prohibits using a standalone PO Box without a physical street address. The Registered Office must be a physical address in the UK where legal notices can be delivered.",
  },
  {
    q: "Who can see my home address if I don't use a Service Address?",
    a: "If you register your residential home address as your Service Address, it will be published on the public Companies House website and indexed by search engines globally, making it permanently visible to anyone.",
  },
  {
    q: "What type of mail is received at a Registered Office Address?",
    a: "A Registered Office Address strictly receives official statutory mail from UK government bodies, including Companies House, HM Revenue & Customs (HMRC), the Information Commissioner's Office (ICO), and UK courts.",
  },
  {
    q: "How do I change my Registered Office Address with Companies House?",
    a: "You can change your Registered Office Address at any time by filing Form AD01 with Companies House online. The change usually takes effect within 24 hours.",
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
  headline: "Registered Office Address vs Service Address in the UK: What’s the Difference?",
  description:
    "Comprehensive legal comparison between a UK Registered Office Address and Directors' Service Address for non-resident directors. Learn privacy rules and virtual address compliance.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://advaq.com/blog/registered-office-address-vs-service-address-uk",
};

export const Route = createFileRoute("/blog/registered-office-address-vs-service-address-uk")({
  head: () => ({
    meta: [
      { title: "Registered Office Address vs Service Address UK (2026 Guide) | ADVAQ" },
      {
        name: "description",
        content:
          "Understand the legal differences between a UK Registered Office Address and Service Address for overseas directors. Protect your residential address privacy.",
      },
      {
        name: "keywords",
        content:
          "registered office address vs service address uk, uk company service address non resident, virtual address for uk ltd company, companies house address privacy",
      },
      {
        property: "og:title",
        content: "Registered Office Address vs Service Address in the UK: What’s the Difference?",
      },
      {
        property: "og:description",
        content:
          "Compare statutory mail requirements, public register privacy rules, and virtual office options for non-UK directors.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/registered-office-address-vs-service-address-uk" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/registered-office-address-vs-service-address-uk" }],
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
            Registered Office Address vs Service Address in the UK: What’s the Difference?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal breakdown for non-resident directors on address privacy, Companies House public records, statutory mail handling, and virtual office compliance.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Companies Act 2006 Address Rules</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Key Takeaways (TL;DR)</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Registered Office Address</strong>
              <p className="text-navy-100 leading-relaxed">
                Applies to the <strong>COMPANY</strong>. Must be a physical address in the UK. Receives official government mail from Companies House & HMRC. Visible on public register.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Directors' Service Address</strong>
              <p className="text-navy-100 leading-relaxed">
                Applies to the <strong>INDIVIDUAL DIRECTOR / PSC</strong>. Can be located anywhere in the world, but using a UK virtual address hides your home address from public records.
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
            <li><a href="#registered-office" className="hover:text-gold-600 underline">1. What is a UK Registered Office Address?</a></li>
            <li><a href="#service-address" className="hover:text-gold-600 underline">2. What is a Directors' Service Address?</a></li>
            <li><a href="#comparison-table" className="hover:text-gold-600 underline">3. Side-by-Side Legal Comparison Table</a></li>
            <li><a href="#privacy-risks" className="hover:text-gold-600 underline">4. Why Overseas Directors Must Protect Personal Home Privacy</a></li>
            <li><a href="#virtual-office-solution" className="hover:text-gold-600 underline">5. How ADVAQ's UK Virtual Office Address Package Works</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="registered-office" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What is a UK Registered Office Address?
          </h2>
          <p>
            Under Section 86 of the <em>Companies Act 2006</em>, every UK Limited Company must at all times have an official <strong>Registered Office Address</strong> situated in the jurisdiction of incorporation (England & Wales, Scotland, or Northern Ireland).
          </p>
          <p>
            This address acts as the official legal headquarters of your company. It is where statutory communications, legal notices, court summons, and official letters from UK authorities (Companies House, HMRC, ICO) are delivered.
          </p>

          <div className="bg-off-white p-5 rounded-xl border border-border space-y-2 my-4 text-sm text-gray-700">
            <h4 className="font-bold text-navy-900">Key Rules for Registered Office Addresses:</h4>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Must be a physical street location in the UK (PO Boxes are forbidden).</li>
              <li>Is permanently displayed on the public Companies House online register.</li>
              <li>Must be located in the same UK home jurisdiction as the company's registration.</li>
            </ul>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="service-address" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. What is a Directors' Service Address?
          </h2>
          <p>
            While the Registered Office belongs to the company, a <strong>Service Address</strong> belongs to the individual human beings managing the company — specifically directors, secretaries, and People with Significant Control (PSCs).
          </p>
          <p>
            The Service Address is the official correspondence address for a director where official mail concerning their directorship is sent. 
          </p>
          <p>
            Crucially, Companies House requires every director to provide both their <strong>Usual Residential Address (URA)</strong> and a <strong>Service Address</strong>. The Service Address is published on the public record, while your residential address is kept in a secure, non-public database accessible only to credit reference agencies and law enforcement.
          </p>
        </div>

        {/* SECTION 3: COMPARISON TABLE */}
        <div id="comparison-table" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Side-by-Side Legal Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse border border-border rounded-xl overflow-hidden">
              <thead className="bg-navy-950 text-white font-serif">
                <tr>
                  <th className="p-4 border border-white/10">Feature</th>
                  <th className="p-4 border border-white/10 text-gold-400">Registered Office Address</th>
                  <th className="p-4 border border-white/10 text-navy-200">Directors' Service Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Applies To</td>
                  <td className="p-4">The Corporate Entity (Company)</td>
                  <td className="p-4">Individual Directors, Officers & PSCs</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Location Requirement</td>
                  <td className="p-4 font-semibold text-emerald-700 bg-emerald-50/50">Must be in the UK</td>
                  <td className="p-4">Can be anywhere worldwide (UK or overseas)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Public Register Visibility</td>
                  <td className="p-4">Publicly visible on Companies House</td>
                  <td className="p-4">Publicly visible (keeps home address hidden)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Mail Handled</td>
                  <td className="p-4">Companies House, HMRC & UK Courts mail</td>
                  <td className="p-4">Personal director legal notices & correspondence</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">PO Box Permitted?</td>
                  <td className="p-4 text-red-600 font-semibold">No (Strictly Prohibited)</td>
                  <td className="p-4 text-red-600 font-semibold">No (Requires physical address)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK ADDRESS PRIVACY SOLUTIONS
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get a Premium London Virtual Office Address
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            Protect your personal home address from public registers. ADVAQ provides commercial London Registered Office & Directors' Service Addresses with digital mail scanning and forwarding.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/registered-office-address"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UK Virtual Address Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="privacy-risks" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Why Overseas Directors Must Protect Personal Home Privacy
          </h2>
          <p>
            If a non-resident director registers their personal home address overseas as their Service Address, that address becomes permanently searchable on the internet via Companies House databases and third-party company information aggregators (such as Endole, Duedil, and Google Search).
          </p>

          <div className="space-y-3 my-4">
            <div className="flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm">
              <EyeOff className="text-red-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Spam & Cold Mail Harassment:</strong> Marketing companies harvest public Companies House records daily to send unwanted physical junk mail and cold solicitations.
              </div>
            </div>
            <div className="flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm">
              <Lock className="text-red-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Identity Theft & Security Risks:</strong> Publishing your home location alongside your full legal name and month of birth exposes you to identity fraud.
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="virtual-office-solution" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How ADVAQ's UK Virtual Office Package Works
          </h2>
          <p>
            ADVAQ provides a prestige commercial London street address that covers both your company's Registered Office Address and all directors' Service Addresses simultaneously:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 my-6">
            <div className="bg-white border border-border p-5 rounded-xl text-center shadow-sm">
              <Building2 size={24} className="text-gold-500 mx-auto mb-2" />
              <h4 className="font-bold text-navy-900 text-sm">Prestige Address</h4>
              <p className="text-xs text-gray-600 mt-1">Central London commercial street address for Companies House.</p>
            </div>
            <div className="bg-white border border-border p-5 rounded-xl text-center shadow-sm">
              <Mail size={24} className="text-gold-500 mx-auto mb-2" />
              <h4 className="font-bold text-navy-900 text-sm">Digital Mail Scan</h4>
              <p className="text-xs text-gray-600 mt-1">Statutory letters from HMRC & Companies House scanned and emailed same-day.</p>
            </div>
            <div className="bg-white border border-border p-5 rounded-xl text-center shadow-sm">
              <Shield size={24} className="text-gold-500 mx-auto mb-2" />
              <h4 className="font-bold text-navy-900 text-sm">Complete Privacy</h4>
              <p className="text-xs text-gray-600 mt-1">Keeps your personal home address 100% off public internet databases.</p>
            </div>
          </div>
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
            PROTECT YOUR HOME ADDRESS PRIVACY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Get Your UK Virtual Office Address Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Commercial London registered address with daily digital mail forwarding for non-resident directors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/registered-office-address"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Virtual Office Address
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
