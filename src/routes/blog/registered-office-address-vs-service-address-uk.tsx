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
    q: "Can a non-UK resident use the same virtual address for both Registered Office and Service Address?",
    a: "Yes. In fact, most overseas directors use the same UK commercial virtual address for both the Registered Office Address (company level) and the Directors' Service Address (individual level) to maintain complete home privacy and streamline statutory mail forwarding.",
  },
  {
    q: "Can I use a PO Box as my UK Registered Office Address?",
    a: "No. Under the Economic Crime and Corporate Transparency Act 2023 (ECCTA), Companies House strictly prohibits using a standalone PO Box without a physical street location. The Registered Office must be an 'Appropriate Address' where physical delivery of legal documents by Royal Mail is guaranteed.",
  },
  {
    q: "Who can see my home address if I don't use a Service Address?",
    a: "If you register your personal home address as your Service Address, it will be published on the public Companies House website and indexed by search engines globally, making your residential location permanently visible to anyone online.",
  },
  {
    q: "What type of mail is received at a Registered Office Address?",
    a: "A Registered Office Address strictly receives official statutory mail from UK government bodies, including Companies House, HM Revenue & Customs (HMRC), the Information Commissioner's Office (ICO), and UK courts.",
  },
  {
    q: "How do I change my Registered Office Address with Companies House?",
    a: "You can update your Registered Office Address at any time by filing Form AD01 online via Companies House WebFiling. The change usually takes effect on the public register within 24 hours.",
  },
  {
    q: "Is my Usual Residential Address (URA) ever visible to the public?",
    a: "No. Your Usual Residential Address (URA) is stored in a private, restricted Companies House database accessible only to UK law enforcement agencies and authorized credit reference institutions. It is never published on the public search website if a separate Service Address is provided.",
  },
  {
    q: "What is the difference between a Registered Office and a Trading Address?",
    a: "A Registered Office is the official legal headquarters for government notices. A Trading Address is where your business conducts daily operations or receives commercial customer mail. They can be separate locations.",
  },
  {
    q: "What happens if statutory mail sent to a Registered Office is returned undelivered?",
    a: "If statutory mail is returned undelivered, Companies House may mark your company address as invalid, issue formal compliance warnings, and eventually initiate default strike-off proceedings against the entity.",
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
    "Exhaustive 2026 legal breakdown of UK Registered Office Address vs Directors' Service Address for non-resident directors. Learn Companies House privacy rules and virtual address compliance.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/registered-office-address-vs-service-address-uk",
};

export const Route = createFileRoute("/blog/registered-office-address-vs-service-address-uk")({
  head: () => ({
    meta: [
      { title: "Registered Office Address vs Service Address UK (2026 Masterclass) | ADVAQ" },
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
            An exhaustive legal and privacy masterclass for non-resident directors on Companies House public records, statutory mail handling, address suppression, and virtual office compliance in 2026.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UK Corporate Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>22 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Companies Act 2006 Address Compliance</span>
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
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Understanding the distinction between these two statutory address requirements is essential for non-UK residents maintaining privacy and legal compliance:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Registered Office Address</strong>
              <p className="text-navy-100 leading-relaxed">
                Applies to the <strong>COMPANY ENTITY</strong>. Must be a physical address in the UK. Receives official government mail from Companies House & HMRC. Visible on public register.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Directors' Service Address</strong>
              <p className="text-navy-100 leading-relaxed">
                Applies to the <strong>INDIVIDUAL DIRECTOR / PSC</strong>. Can be located anywhere globally, but using a UK virtual address hides your personal home address from public search records.
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
            <li><a href="#registered-office" className="hover:text-gold-600 underline">1. What is a UK Registered Office Address?</a></li>
            <li><a href="#service-address" className="hover:text-gold-600 underline">2. What is a Directors' Service Address?</a></li>
            <li><a href="#address-matrix" className="hover:text-gold-600 underline">3. Comprehensive Legal Address Comparison Matrix</a></li>
            <li><a href="#privacy-risks" className="hover:text-gold-600 underline">4. Privacy Risks of Exposing Overseas Home Addresses</a></li>
            <li><a href="#virtual-office-solution" className="hover:text-gold-600 underline">5. How ADVAQ's UK Virtual Office Address Package Works</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common Address Mistakes to Avoid</a></li>
            <li><a href="#updating-addresses" className="hover:text-gold-600 underline">7. How to Update Addresses via Form AD01 & CH01</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="registered-office" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What is a UK Registered Office Address?
          </h2>
          <p>
            Under Section 86 of the <em>UK Companies Act 2006</em>, every UK Limited Company must at all times maintain an official <strong>Registered Office Address</strong> situated in its home jurisdiction of incorporation (England & Wales, Scotland, or Northern Ireland).
          </p>
          <p>
            This address functions as the corporate entity's official legal headquarters. It is the designated location where statutory communications, legal notices, court summons, and official correspondence from UK authorities (including Companies House, HM Revenue & Customs, the Information Commissioner's Office, and UK courts) are served by Royal Mail.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Example: Software Agency Legal Delivery
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Tariq, a software founder in Lahore operating a UK LTD. HMRC issues an official Corporation Tax UTR notice to his company. Because Tariq subscribed to ADVAQ's London Virtual Registered Office address, the physical letter is received by ADVAQ's London mailroom, digitally scanned in high resolution, and uploaded to Tariq's secure online client dashboard within 2 hours.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="service-address" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. What is a Directors' Service Address?
          </h2>
          <p>
            While the Registered Office belongs to the corporate entity, a <strong>Service Address</strong> belongs to the individual human beings who manage or own the entity—specifically directors, company secretaries, and Persons with Significant Control (PSCs holding &gt;25% shares).
          </p>
          <p>
            Under Companies Act Sections 163 and 240, every company officer must disclose two separate addresses:
          </p>
          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Usual Residential Address (URA):</strong> Your actual home living address in your country of residence. Stored in a private, non-public database.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Service Address:</strong> Your official public contact address displayed on the Companies House public online register.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 3 */}
        <div id="address-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive Legal Address Comparison Matrix
          </h2>
          <p>
            Detailed side-by-side comparative legal analysis of UK corporate address types:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Address Parameter</th>
                  <th className="p-4 text-gold-500">Registered Office Address</th>
                  <th className="p-4 text-emerald-400">Directors' Service Address</th>
                  <th className="p-4">Trading / Business Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Applies To</td>
                  <td className="p-4 text-navy-900">The Corporate Company Entity</td>
                  <td className="p-4 text-emerald-700 font-bold">Individual Officers & PSCs</td>
                  <td className="p-4 text-navy-900">Commercial Operations & Clients</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Location Mandate</td>
                  <td className="p-4 text-emerald-700 font-bold">Must be inside the UK</td>
                  <td className="p-4 text-navy-900">Anywhere Globally (UK or Overseas)</td>
                  <td className="p-4 text-navy-900">Anywhere Globally</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Public Search Visibility</td>
                  <td className="p-4 text-rose-700 font-bold">100% Public on Companies House</td>
                  <td className="p-4 text-rose-700 font-bold">100% Public (Shields Home Address)</td>
                  <td className="p-4 text-navy-900">Optional / Private</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Mail Received</td>
                  <td className="p-4 text-navy-900">Companies House, HMRC & UK Courts</td>
                  <td className="p-4 text-navy-900">Director Legal Notices</td>
                  <td className="p-4 text-navy-900">Customer Returns & Bank Cards</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">PO Box Permitted?</td>
                  <td className="p-4 text-rose-700 font-bold">Strictly Forbidden (ECCTA 2023)</td>
                  <td className="p-4 text-rose-700 font-bold">Strictly Forbidden</td>
                  <td className="p-4 text-navy-900">Allowed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
              Explore Virtual Address Packages <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="privacy-risks" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Privacy Risks of Exposing Overseas Home Addresses
          </h2>
          <p>
            If a non-resident director lists their personal residential address overseas as their Service Address, that address is permanently published on the public Companies House website and indexed by search engines globally (Google, Bing).
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <EyeOff className="text-red-600" size={18} />
                1. Web Scraping & Public Search Engine Indexing
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Third-party corporate data aggregators (such as Endole, Duedil, and CompanyCheck) automatically harvest Companies House records. Your full home address will be permanently linked to your name in Google search results.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <Lock className="text-red-600" size={18} />
                2. Junk Mail & Identity Theft Exposures
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Exposing your residential address invites unsolicited commercial junk mail, telemarketing, and identity fraud attempts by bad actors misusing public director profiles.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="virtual-office-solution" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How ADVAQ's UK Virtual Office Address Package Works
          </h2>
          <p>
            ADVAQ provides a commercial London street address that covers both your company's Registered Office Address and all directors' Service Addresses under a single subscription:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 my-6">
            <div className="bg-white border border-border p-5 rounded-2xl text-center shadow-sm">
              <Building2 size={28} className="text-gold-600 mx-auto mb-2" />
              <h4 className="font-bold text-navy-950 text-sm">Central London Street Address</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">Prestigious commercial location in London for Companies House compliance.</p>
            </div>
            <div className="bg-white border border-border p-5 rounded-2xl text-center shadow-sm">
              <Mail size={28} className="text-gold-600 mx-auto mb-2" />
              <h4 className="font-bold text-navy-950 text-sm">Same-Day Digital Scanning</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">Statutory letters from HMRC & Companies House scanned and emailed instantly.</p>
            </div>
            <div className="bg-white border border-border p-5 rounded-2xl text-center shadow-sm">
              <Shield size={28} className="text-gold-600 mx-auto mb-2" />
              <h4 className="font-bold text-navy-950 text-sm">Complete Home Privacy</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">Keeps your personal home address 100% hidden from search engines.</p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Address Mistakes to Avoid
          </h2>
          <p>
            Avoid these six frequent errors regarding UK corporate address declarations:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Using a Standalone PO Box Address
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                PO Boxes without physical street locations are forbidden under ECCTA 2023 rules and cause immediate application rejection.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Failing to Update Companies House Within 14 Days
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                If a director moves home or changes service addresses, you must file Form CH01 within 14 days to prevent compliance penalties.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                3. Confusing Registered Office with Customer Trading Address
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Registered office services strictly receive official UK government mail. Customer parcels and trading mail should be routed to a commercial mail forwarding service.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="updating-addresses" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. How to Update Addresses via Form AD01 & CH01
          </h2>
          <p>
            Updating corporate addresses with Companies House is fast and electronic:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Form AD01:</strong> Submit online via WebFiling to update the company's Registered Office Address (takes effect within 24 hours).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Form CH01:</strong> Submit online to update an individual director's Service Address or residential address.</span>
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
