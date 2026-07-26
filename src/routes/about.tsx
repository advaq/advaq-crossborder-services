import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Eye,
  Heart,
  Scale,
  Landmark,
  Building2,
  FileText,
  Globe,
  Shield,
  UserCheck,
  Tag,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
  ClipboardCheck,
  Calendar,
  Sparkles,
  CheckCircle2,
  Check,
} from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/lib/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ADVAQ — Muhammad Abdullah | Licensed Advocate & IRS PTIN Tax Preparer" },
      {
        name: "description",
        content:
          "Punjab Bar Council advocate & IRS PTIN tax preparer Muhammad Abdullah provides UK, USA, UAE & Pakistan company formation, tax compliance, and legal contracts.",
      },
      { property: "og:title", content: "About ADVAQ — Muhammad Abdullah" },
      {
        property: "og:description",
        content:
          "Led by a Punjab Bar Council licensed advocate & IRS PTIN tax preparer. Full cross-border coverage across UK, USA, UAE & Pakistan.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammad Abdullah",
          jobTitle: "Advocate & Corporate Tax Lawyer",
          alumniOf: "BS Accounting & Finance, LLB",
          hasCredential: [
            { "@type": "EducationalOccupationalCredential", name: "Punjab Bar Council Licensed Advocate" },
            { "@type": "EducationalOccupationalCredential", name: "IRS PTIN Registered Tax Preparer" },
          ],
          worksFor: { "@type": "Organization", name: "ADVAQ Global Advisory" },
          description:
            "Punjab Bar Council licensed advocate & IRS PTIN registered tax preparer specialising in UK, USA, UAE, and Pakistan company formation, tax compliance, and legal contracts.",
          url: "https://advaq.com/about",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://advaq.com/about" },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2021",
    title: "ADVAQ Founded",
    description: "First UK LTD formed for Pakistani IT agency client.",
  },
  {
    year: "2022",
    title: "US Services Added",
    description: "Wyoming LLC + EIN service launched for foreign owners.",
  },
  {
    year: "2023",
    title: "IRS PTIN Obtained",
    description: "Official US tax preparer authorization & federal filing division.",
  },
  {
    year: "2024",
    title: "UAE Services Added",
    description: "Freezone formation, investor visas & Corporate Tax compliance.",
  },
  {
    year: "2025",
    title: "Legal Contract Division",
    description: "Dedicated contract drafting service for freelancers & tech firms.",
  },
  {
    year: "2026",
    title: "200+ Businesses Served",
    description: "Full cross-border legal coverage across UK, USA, UAE & Pakistan.",
  },
];

function AboutPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
              ABOUT ADVAQ
            </p>
            <h1 className="font-serif text-white text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] mt-5 leading-[1.15] max-w-5xl mx-auto">
              <span>We Help Entrepreneurs Build Legitimate, </span>
              <br className="hidden sm:block" />
              <span>Legally Protected Businesses in the UK, USA, UAE & Pakistan.</span>
            </h1>
            <p className="mt-6 text-navy-200 text-[17px] md:text-[18px] max-w-4xl mx-auto leading-[1.7]">
              We are led by a Licensed Advocate who personally handles your company formation, tax compliance, and legal contracts with full legal accountability across four jurisdictions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
                Book Free Consultation
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase tracking-widest"
              >
                Talk to Us on WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-gold-500" /> Punjab Bar Council Licensed Advocate
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-gold-500" /> IRS PTIN Registered Tax Preparer
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-gold-500" /> UK · USA · UAE · Pakistan Expertise
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-gold-500" /> 200+ Businesses Served Globally
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — PERSONAL INTRODUCTION */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
          <Reveal>
            <SectionLabel>The Founder</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-dark-text mt-5 leading-tight">
              Advocate. Tax & Corporate Lawyer. Your Cross-Border Business Partner Across UK, USA, UAE & Pakistan.
            </h2>
            <div className="mt-5 space-y-4 text-gray-700 text-base leading-[1.8]">
              <p>
                I am Muhammad Abdullah, a practicing advocate licensed by the Punjab Bar Council, an IRS PTIN registered tax preparer. As a tax & corporate lawyer, I am specialising in cross-border company formation, tax compliance, and legal contracts across the UK, USA, UAE, and Pakistan.
              </p>
              <p>
                I founded ADVAQ after seeing too many talented Pakistani developers, designers, and IT agency owners struggle to access global payment processors and international markets. It is not because of their skills, but because they lacked the right legal and corporate structure. A properly formed UK LTD or US LLC, combined with correct Pakistan tax compliance and UAE structure where needed, removes every barrier standing between you and global business.
              </p>
              <p>
                What makes ADVAQ different is simple: when you work with us, you work directly with a licensed advocate who is legally accountable for every piece of advice given, not a virtual assistant, not a form-filling portal, not a template service.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <a href="mailto:contact@advaq.com" className="inline-flex items-center gap-2 text-dark-text hover:text-gold-500">
                <Mail size={16} className="text-gold-500" /> contact@advaq.com
              </a>
              <a href="tel:+923000925335" className="inline-flex items-center gap-2 text-dark-text hover:text-gold-500">
                <Phone size={16} className="text-gold-500" /> +92 3000 925335
              </a>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gold-500 font-semibold"
              >
                <MessageCircle size={16} className="text-gold-500" /> WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-[4/5] rounded-2xl bg-navy-900 border border-gold-500/20 overflow-hidden shadow-2xl group">
              <img
                src="/abdullah.png"
                alt="Muhammad Abdullah - Advocate Punjab Bar Council & IRS PTIN Tax Preparer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="mt-4 flex gap-3 flex-wrap text-xs">
              <div className="flex items-center gap-2 bg-white border border-border rounded-xl p-3 flex-1">
                <Scale size={18} className="text-gold-500 shrink-0" />
                <div>
                  <div className="font-semibold text-dark-text leading-tight">Punjab Bar Council</div>
                  <div className="text-gray-500 text-[11px] leading-tight">Licensed Advocate</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-border rounded-xl p-3 flex-1">
                <ClipboardCheck size={18} className="text-gold-500 shrink-0" />
                <div>
                  <div className="font-semibold text-dark-text leading-tight">IRS PTIN Registered</div>
                  <div className="text-gray-500 text-[11px] leading-tight">US Tax Preparer</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-border rounded-xl p-3 w-full">
                <Landmark size={18} className="text-gold-500 shrink-0" />
                <div>
                  <div className="font-semibold text-dark-text leading-tight">SECP & FBR Practitioner</div>
                  <div className="text-gray-500 text-[11px] leading-tight">Pakistan Tax & Corporate Counsel</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — STATS & JURISDICTIONS */}
      <section className="bg-off-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[50%_50%] gap-12 lg:gap-16 items-start">
          <Reveal>
            <SectionLabel>Our Reach & Impact</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-text mt-5 leading-tight">
              Built to Solve Real Cross-Border Challenges for Entrepreneurs
            </h2>
            <div className="mt-4 space-y-4 text-gray-700 text-base leading-[1.8]">
              <p>
                Pakistan is home to some of the world's most talented software developers, designers, and digital entrepreneurs. Yet thousands of them earn in dollars, pounds, and dirhams through global platforms without proper corporate structures, leaving them vulnerable to payment blocks, client disputes, and tax audits.
              </p>
              <p>
                ADVAQ bridges this gap. By structuring legitimate UK LTDs, US LLCs, UAE Freezone companies, and SECP entities alongside tax-free IT export registrations in Pakistan, we remove every obstacle standing between you and global scale.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { v: "200+", l: "Businesses Served", s: "Across UK, USA, UAE & PK", gold: false },
                { v: "4", l: "Jurisdictions Covered", s: "UK · USA · UAE · Pakistan", gold: false },
                { v: "100%", l: "IT Export Tax Exempt Rate", s: "For registered clients", gold: false },
                { v: "5★", l: "Average Client Rating", s: "48hr Average Turnaround", gold: true },
              ].map((s) => (
                <div
                  key={s.l}
                  className={`rounded-2xl p-7 ${s.gold ? "bg-gold-500 text-navy-900" : "bg-navy-900 text-white"}`}
                >
                  <div className={`font-serif text-[48px] leading-none ${s.gold ? "text-navy-900" : "text-gold-500"}`}>
                    {s.v}
                  </div>
                  <div className={`mt-3 text-sm font-semibold ${s.gold ? "text-navy-900" : "text-white"}`}>
                    {s.l}
                  </div>
                  <div className={`mt-1 text-[12px] ${s.gold ? "text-navy-800" : "text-navy-200"}`}>
                    {s.s}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — CREDENTIALS & EXPERTISE GRID (8 CARDS) */}
      <section
        className="bg-navy-900 py-16"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.3)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <p className="label-eyebrow">Credentials & Authorizations</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-3">
              Full Legal & Regulatory Credentials
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Scale, t: "Punjab Bar Council", s: "Licensed Practicing Advocate" },
              { Icon: ClipboardCheck, t: "IRS PTIN Registered", s: "US Tax Preparer — Official Authorization" },
              { Icon: Building2, t: "SECP Registered", s: "Company Formation Specialist" },
              { Icon: FileText, t: "FBR Registered", s: "Tax Filing & Compliance Expert" },
              { Icon: Globe, t: "HMRC Compliant", s: "UK Corporation Tax & VAT Specialist" },
              { Icon: Landmark, t: "IRS Compliant", s: "US Federal & State Tax Returns" },
              { Icon: Sparkles, t: "UAE Tax Advisory", s: "Corporate Tax & VAT Compliance" },
              { Icon: Shield, t: "Legal Contract Drafting", s: "NDA, MSA, IP Assignment & More" },
            ].map((it, i) => (
              <Reveal key={it.t} delay={i * 60}>
                <div className="bg-navy-950/80 border border-white/10 rounded-2xl p-6 h-full hover:border-gold-500/40 transition-colors flex items-start gap-4">
                  <it.Icon size={26} className="text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white text-sm font-semibold">{it.t}</div>
                    <div className="text-navy-200 text-xs mt-1 leading-relaxed">{it.s}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR VALUES (4 CARDS) */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center">
            <SectionLabel center>Our Core Values</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-dark-text mt-5">What We Stand For</h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              {
                Icon: Eye,
                t: "Complete Transparency",
                d: "No hidden fees. No surprise charges. Before we start any work, you receive a clear breakdown of exactly what is included, what it costs, and how long it takes. Transparent pricing builds lasting client relationships.",
              },
              {
                Icon: Scale,
                t: "Legal Expertise — Not Just Forms",
                d: "ADVAQ is led by a Punjab Bar Council licensed advocate and IRS PTIN registered tax preparer. You receive qualified legal counsel and professional accountability — not just a automated form submission service.",
              },
              {
                Icon: Heart,
                t: "Client Success First",
                d: "We measure our success by your business outcomes. When your UK/US company gets bank approved, when your FBR tax status is active and exempt, when your contract protects your payments — that is when our job is done.",
              },
              {
                Icon: Globe,
                t: "Global Reach, Personal Service",
                d: "From Shakargarh to London, from Lahore to Dubai — we serve clients worldwide while maintaining the personal attention of a boutique legal practice. You always know who is handling your matter.",
              },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white border border-border rounded-2xl p-8 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500">
                    <v.Icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl text-dark-text font-semibold mt-5">{v.t}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY CLIENTS CHOOSE ADVAQ (4 UPGRADED CARDS) */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center">
            <p className="label-eyebrow">Why ADVAQ</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-5 leading-tight">
              Why Hundreds of Entrepreneurs Choose ADVAQ
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              {
                Icon: UserCheck,
                t: "You Work Directly With a Licensed Advocate",
                d: "Muhammad Abdullah is a Punjab Bar Council licensed advocate and IRS PTIN registered tax preparer. When you contact ADVAQ, you reach him directly — not a junior assistant, not a chatbot, not a call centre.",
              },
              {
                Icon: Globe,
                t: "Four Jurisdictions. One Trusted Firm.",
                d: "Most firms handle either UK or Pakistan. ADVAQ covers all four — UK, USA, UAE, and Pakistan. One relationship. Complete cross-border coverage.",
              },
              {
                Icon: Tag,
                t: "Transparent, Affordable Pricing",
                d: "We publish our prices openly. No hidden fees, no retainer traps, no surprise invoices. What you see is what you pay — with the full protection of a licensed advocate behind every service.",
              },
              {
                Icon: MessageCircle,
                t: "WhatsApp & Email — No Complicated Portals",
                d: "We know Pakistani entrepreneurs are busy. Every service is managed via WhatsApp and email in English and Urdu. Fast, direct, personal. No lengthy onboarding calls, no confusing client portals.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 h-full hover:-translate-y-1 hover:border-gold-500/40 transition-all duration-300">
                  <c.Icon size={30} className="text-gold-500" />
                  <h3 className="font-serif text-xl text-white mt-4 font-medium">{c.t}</h3>
                  <p className="mt-3 text-navy-200 text-sm leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — TIMELINE / OUR JOURNEY */}
      <section className="bg-white py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <SectionLabel center>MILESTONES & HISTORY</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-dark-text mt-4">Our Journey</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
              How ADVAQ grew from a specialized boutique advisory into a multi-jurisdiction cross-border firm.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((item, idx) => (
              <Reveal key={item.year} delay={idx * 80}>
                <div className="border border-border rounded-2xl p-6 bg-off-white hover:border-gold-500/40 transition-all">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-950 text-gold-500 rounded-full text-xs font-bold font-mono">
                    <Calendar size={12} /> {item.year}
                  </div>
                  <h3 className="font-serif text-xl text-dark-text font-semibold mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mt-2">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA BANNER */}
      <section className="relative bg-navy-950 overflow-hidden py-24 text-center">
        <div className="absolute inset-0 diagonal-pattern opacity-100" />
        <div className="absolute inset-0 gold-glow opacity-50" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Reveal>
            <p className="label-eyebrow">WORK WITH US</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mt-4 leading-tight">
              Ready to Build Your Business the Right Way?
            </h2>
            <p className="mt-5 text-navy-200 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Book a free initial consultation with Muhammad Abdullah. We respond within 4 business hours — in English or Urdu, whichever you prefer.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
                GET STARTED <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                <MessageCircle size={16} /> WHATSAPP MUHAMMAD ABDULLAH
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gold-500 font-semibold uppercase tracking-wider">
              <span>✓ Free consultation</span>
              <span>✓ No commitment</span>
              <span>✓ Punjab Bar Council Licensed</span>
              <span>✓ 4-hour response</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
