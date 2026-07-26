import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
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
} from "lucide-react";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/lib/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ADVAQ — Muhammad Abdullah | Punjab Bar Council Advocate" },
      {
        name: "description",
        content:
          "Punjab Bar Council advocate Muhammad Abdullah offers UK, US & Pakistan company formation, tax compliance, and legal contracts for freelancers and IT firms.",
      },
      { property: "og:title", content: "About ADVAQ — Muhammad Abdullah" },
      {
        property: "og:description",
        content:
          "Led by a Punjab Bar Council licensed advocate. UK, US & Pakistan company formation, tax compliance, and legal contracts.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammad Abdullah",
          jobTitle: "Advocate, Punjab Bar Council",
          worksFor: { "@type": "Organization", name: "ADVAQ Global Advisory" },
          description:
            "Punjab Bar Council licensed advocate specialising in UK and US company formation, Pakistan corporate law, FBR tax compliance, and legal contract drafting for IT companies and freelancers.",
          url: "/about",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative bg-navy-950 pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 star-pattern opacity-70" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gold-glow opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <p className="label-eyebrow">About ADVAQ</p>
            <h1 className="font-serif text-white text-4xl md:text-6xl mt-5 leading-[1.1]">
              We Help Pakistani Entrepreneurs Build Legitimate, Legally Protected
              Businesses in the UK, US, and Pakistan.
            </h1>
            <p className="mt-6 text-navy-200 text-lg max-w-2xl mx-auto leading-relaxed">
              ADVAQ is not a generic online formation service. We are led by a Punjab
              Bar Council licensed advocate who personally handles your UK company,
              US LLC, Pakistan registration, and legal contracts — with full legal
              accountability.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
              {[
                "Punjab Bar Council Licensed Advocate",
                "200+ Companies Formed",
                "UK · US · Pakistan Expertise",
                "100% Remote Service",
              ].map((b) => (
                <span key={b} className="inline-flex items-center gap-2">
                  <span className="text-gold-500">✓</span> {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — PERSONAL INTRODUCTION */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
          <Reveal>
            <SectionLabel>The Founder</SectionLabel>
            <p className="text-[12px] font-medium tracking-widest uppercase text-gold-500 mt-5">Muhammad Abdullah</p>
            <h2 className="font-serif text-4xl text-dark-text mt-2 leading-tight">
              Advocate. Corporate Tax Lawyer. Your UK, US & Pakistan Business Partner.
            </h2>
            <div className="mt-4 space-y-4 text-gray-700 text-base leading-[1.8]">
              <p>
                I am Muhammad Abdullah, a practicing advocate licensed by the Punjab
                Bar Council and a corporate tax lawyer with a focused specialisation
                in UK and US company formation, Pakistan SECP and FBR compliance,
                and international legal contract drafting for Pakistani freelancers
                and IT companies.
              </p>
              <p>
                I founded ADVAQ after seeing too many talented Pakistani developers,
                designers, and IT agency owners struggle to access global payment
                processors and international markets — not because of their skills,
                but because they lacked the right legal and corporate structure. A
                properly formed UK LTD or US LLC, combined with correct Pakistan tax
                compliance, removes every barrier.
              </p>
              <p>
                What makes ADVAQ different is simple: when you work with us, you are
                working directly with a licensed advocate who is legally accountable
                for the advice given — not a virtual assistant or a form-filling
                service. Every company we form, every tax return we file, and every
                contract we draft carries the full weight of professional legal
                responsibility.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <a href="mailto:contact@advaq.com" className="inline-flex items-center gap-2 text-dark-text hover:text-gold-500">
                <Mail size={16} className="text-gold-500" /> contact@advaq.com
              </a>
              <a href="tel:+923000925335" className="inline-flex items-center gap-2 text-dark-text hover:text-gold-500">
                <Phone size={16} className="text-gold-500" /> +92 3000 925335
              </a>
              <a href="https://wa.me/923000925335" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gold-500 font-semibold">
                <MessageCircle size={16} className="text-gold-500" /> WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-[4/5] rounded-2xl bg-navy-900 border border-gold-500/20 overflow-hidden shadow-2xl group">
              <img
                src="/abdullah.png"
                alt="Muhammad Abdullah - Advocate Punjab Bar Council"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="mt-4 flex gap-3 flex-wrap">
              <div className="flex items-center gap-2 bg-white border border-border rounded-xl p-3">
                <Scale size={18} className="text-gold-500" />
                <div>
                  <div className="text-[13px] font-semibold text-dark-text leading-tight">Punjab Bar Council</div>
                  <div className="text-[11px] text-gray-500 leading-tight">Licensed Advocate</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-border rounded-xl p-3">
                <Landmark size={18} className="text-gold-500" />
                <div>
                  <div className="text-[13px] font-semibold text-dark-text leading-tight">SECP & FBR</div>
                  <div className="text-[11px] text-gray-500 leading-tight">Registered Practitioner</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — OUR STORY */}
      <section className="bg-off-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-serif text-4xl text-dark-text mt-5 leading-tight">
              Built to Solve a Real Problem for Pakistani Entrepreneurs
            </h2>
            <div className="mt-4 space-y-4 text-gray-700 text-base leading-[1.8]">
              <p>
                Pakistan is home to some of the world's most talented software
                developers, designers, and digital entrepreneurs. Yet thousands of
                them are earning in dollars and pounds through platforms like Upwork,
                Fiverr, and Toptal without any proper legal structure — no
                registered company, no tax compliance, no legal protection.
              </p>
              <p>
                This creates three serious problems. First, they cannot access
                Stripe, PayPal Business, or Mercury bank accounts without a UK or US
                company. Second, they are missing the 100% income tax exemption on
                IT exports that Pakistani law entitles them to. Third, they have no
                legal protection when clients dispute payments, claim ownership of
                their work, or simply disappear.
              </p>
              <p>
                ADVAQ was founded to fix all three. As a Punjab Bar Council licensed
                advocate, I personally handle UK LTD formation, US LLC registration,
                Pakistan SECP and FBR compliance, and professional contract
                drafting — so that Pakistani entrepreneurs can build legitimate,
                legally protected businesses that compete globally.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { v: "200+", l: "Companies Formed", s: "UK, US & Pakistan", gold: false },
                { v: "3", l: "Jurisdictions Covered", s: "UK · US · Pakistan", gold: false },
                { v: "100%", l: "IT Export Tax Exempt", s: "For registered clients", gold: false },
                { v: "5★", l: "Client Rating", s: "From 200+ clients served", gold: true },
              ].map((s) => (
                <div
                  key={s.l}
                  className={`rounded-2xl p-8 ${s.gold ? "bg-gold-500" : "bg-navy-900"}`}
                >
                  <div className={`font-serif text-[52px] leading-none ${s.gold ? "text-navy-900" : "text-gold-500"}`}>
                    {s.v}
                  </div>
                  <div className={`mt-4 text-sm font-semibold ${s.gold ? "text-navy-900" : "text-white"}`}>
                    {s.l}
                  </div>
                  <div className={`mt-1 text-[13px] ${s.gold ? "text-navy-700" : "text-navy-200"}`}>
                    {s.s}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — CREDENTIALS & EXPERTISE BAR */}
      <section
        className="bg-navy-900 py-10"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.3)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-8">
            <p className="label-eyebrow">Credentials & Expertise</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Scale, t: "Punjab Bar Council", s: "Licensed Practicing Advocate" },
              { Icon: Landmark, t: "Corporate Tax Law", s: "UK, US & Pakistan Jurisdiction" },
              { Icon: Building2, t: "SECP Registered", s: "Company Formation Specialist" },
              { Icon: FileText, t: "FBR Registered", s: "Tax Filing & Compliance Expert" },
              { Icon: Globe, t: "HMRC & IRS", s: "UK & US Tax Compliance" },
              { Icon: Shield, t: "Legal Contract Drafting", s: "NDA, MSA, IP & More" },
            ].map((it, i) => (
              <Reveal key={it.t} delay={i * 70}>
                <div className="flex items-center gap-4">
                  <it.Icon size={28} className="text-gold-500 shrink-0" />
                  <div>
                    <div className="text-white text-[15px] font-semibold">{it.t}</div>
                    <div className="text-navy-200 text-[13px]">{it.s}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT WE STAND FOR */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center">
            <SectionLabel center>Our Values</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-dark-text mt-5">What We Stand For</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Eye,
                t: "Complete Transparency",
                d: "No hidden fees. No surprise charges. Before we start any work, you receive a clear breakdown of exactly what is included, what it costs, and how long it takes. We believe transparent pricing builds lasting client relationships.",
              },
              {
                Icon: Scale,
                t: "Legal Expertise — Not Just Forms",
                d: "ADVAQ is led by a Punjab Bar Council licensed advocate. This means you receive qualified legal advice and professional accountability — not just a form submission service. Your interests are protected by a real lawyer.",
              },
              {
                Icon: Heart,
                t: "Client Success First",
                d: "We measure our success by your business outcomes. When your UK company gets Stripe approved, when your FBR compliance is clean, when your legal contract protects your payment — that is when we consider our job done.",
              },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-white border border-border rounded-2xl p-9 h-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <div className="w-14 h-14 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500">
                    <v.Icon size={24} />
                  </div>
                  <h3 className="font-serif text-2xl text-dark-text mt-6">{v.t}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY CLIENTS CHOOSE ADVAQ */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center">
            <p className="label-eyebrow">Why ADVAQ</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-5 leading-tight">
              Why Hundreds of Pakistani Entrepreneurs Choose ADVAQ
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              {
                Icon: UserCheck,
                t: "You Work With a Real Lawyer",
                d: "Muhammad Abdullah is a Punjab Bar Council licensed advocate. When you work with ADVAQ, you have direct access to qualified legal counsel — not an accountant, not a virtual assistant, not a template service.",
              },
              {
                Icon: Globe,
                t: "Three Jurisdictions, One Firm",
                d: "Most firms handle either UK or Pakistan or US. ADVAQ covers all three — which means if you need a UK LTD, a Wyoming LLC, and a SECP-registered company, we handle everything without you needing to find three separate service providers.",
              },
              {
                Icon: Tag,
                t: "Honest, Affordable Pricing",
                d: "We serve Pakistani entrepreneurs who are building their businesses from the ground up. Our pricing reflects that. No inflated fees, no retainer traps — just fair, transparent prices for professional legal and corporate services.",
              },
              {
                Icon: MessageCircle,
                t: "WhatsApp-First Communication",
                d: "We know our clients are busy. Every service we offer is managed via WhatsApp and email — no lengthy onboarding calls, no complicated portals. Just fast, direct communication in English and Urdu.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <div className="bg-navy-800 border border-white/10 rounded-2xl p-8 h-full hover:-translate-y-1 hover:border-gold-500/40 transition-all duration-300">
                  <c.Icon size={32} className="text-gold-500" />
                  <h3 className="font-serif text-xl text-white mt-5">{c.t}</h3>
                  <p className="mt-3 text-navy-200 text-[15px] leading-[1.7]">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA BANNER */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 diagonal-pattern" />
        <div className="absolute inset-0 gold-glow opacity-50" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <Reveal>
            <p className="label-eyebrow">Work With Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-5 leading-tight">
              Ready to Build Your Business the Right Way?
            </h2>
            <p className="mt-5 text-navy-200 text-lg max-w-xl mx-auto">
              Get in touch today for a free initial consultation. We respond within a few hours.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">
                Get Started <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/923000925335" target="_blank" rel="noreferrer" className="btn-outline-light">
                WhatsApp Muhammad Abdullah
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
