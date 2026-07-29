import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  Building2,
  Mail,
  MapPin,
  Lock,
  Globe,
  FileText,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Why do I need a Registered Office Address in the UK?",
    a: "Every UK Limited Company must have an official Registered Office Address in the UK. This address is public and is used by Companies House and HMRC for all official statutory mail. Without a UK address, you cannot register a company.",
  },
  {
    q: "Can I use my residential address in Pakistan as my Registered Office?",
    a: "No. The Registered Office Address must be a physical address located within the UK (England, Wales, Scotland, or Northern Ireland). P.O. Boxes are also not accepted without a physical street address.",
  },
  {
    q: "Is this address visible to the public?",
    a: "Yes, the Registered Office Address is published on the Companies House public register. Using our premium London address protects your personal residential address from being available to the general public.",
  },
  {
    q: "What kind of mail will be forwarded to me?",
    a: "We receive, scan, and email you all official statutory mail. This includes letters from Companies House, HMRC, Government Gateway, and the Information Commissioner's Office (ICO). We do not forward general business or personal mail.",
  },
  {
    q: "How soon do I receive my scanned mail?",
    a: "We aim to scan and forward all official statutory mail to your registered email address within 24 working hours of receiving it at our London office.",
  },
  {
    q: "Does this service include a Director's Service Address?",
    a: "Yes, our package includes the Director's Service Address. This means company directors can also use our London address on the public register, keeping their personal home addresses entirely private.",
  },
  {
    q: "Can I use this address for my bank account applications like Wise or Stripe?",
    a: "Yes, this address acts as your official corporate address. It can be used when applying for business bank accounts, payment gateways like Stripe, and other digital financial services requiring your registered company address.",
  },
  {
    q: "How long is the Registered Office Address service valid for?",
    a: "The service is billed annually at £99/year. This covers 12 months of address usage and official mail forwarding.",
  },
  {
    q: "Can I use this address for my website and invoices?",
    a: "Yes, as it is your official registered office, you should display it on your company website, professional invoices, business cards, and corporate letterheads as required by UK law.",
  },
  {
    q: "What happens if I don't renew my address service?",
    a: "If you choose not to renew, you must provide Companies House with an alternative UK registered address. Failure to maintain a valid registered office can result in your company being struck off the register.",
  },
  {
    q: "Is it a real physical building in London?",
    a: "Yes, it is a prestigious, real commercial building in central London, enhancing your corporate image. It is not a generic P.O. Box.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "UK Registered Office Address",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Premium London Registered Office Address",
  description:
    "Prestigious central London registered office address for UK Limited companies. Includes official statutory mail scanning and Director Service Address to protect your privacy.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uk-services/registered-office-address",
  offers: {
    "@type": "Offer",
    price: "89.00",
    priceCurrency: "GBP",
    description: "Annual fee for Registered Office Address and official mail scanning.",
  },
};

export const Route = createFileRoute("/uk-services/registered-office-address")({
  head: () => ({
    meta: [
      { title: "Premium London Registered Office Address | ADVAQ" },
      {
        name: "description",
        content:
          "Secure a prestigious central London registered office address for your UK LTD. Includes official mail scanning and Director Service Address. Only £89/year.",
      },
      {
        name: "keywords",
        content:
          "uk registered office address, london business address, statutory mail forwarding uk, director service address, companies house address pakistani residents",
      },
      {
        property: "og:title",
        content: "Premium London Registered Office Address | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Secure a prestigious central London registered office address for your UK LTD. Includes official mail scanning and Director Service Address.",
      },
      { property: "og:url", content: "/uk-services/registered-office-address" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/registered-office-address" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: RegisteredOfficeAddress,
});

/* ---------- SECTION 1: HERO ---------- */
function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">
            🇬🇧 CORPORATE ADDRESS
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Premium London
            <br />
            Registered Office Address
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Establish a prestigious corporate presence in the UK. We provide a legal registered office in central London, protecting your privacy and managing all official government correspondence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Secure Your Address
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Ask on WhatsApp
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Same-Day Setup
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Digital Mail Scanning
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Director Privacy Included
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Real London Location
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 2: WHAT IS IT ---------- */
function ServiceOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>THE ESSENTIALS</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is a Registered Office Address?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                By UK law, every limited company must have a Registered Office Address located within the United Kingdom. This is the official destination for all statutory communications from government bodies like Companies House and HMRC.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Crucially, this address is placed on the **public record**, meaning anyone can look it up. Using our premium London address not only fulfills your legal obligation but also provides a professional corporate image for your business while keeping your residential details completely private.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <MapPin size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Core Benefits</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Legal Compliance:</strong> Meets all Companies House requirements for UK LTDs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Privacy Protection:</strong> Shields your personal home address from public registers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Professional Image:</strong> Impress international clients with a central London footprint.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 3: THE DANGER ---------- */
function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Danger of Using Your Home Address
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Using a residential address for your UK LTD exposes you to several critical risks.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Loss of Privacy
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Your address becomes permanently searchable on the internet via the Companies House public register, making your personal residence known to everyone.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Unsolicited Junk Mail
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Publicly listed addresses become immediate targets for aggressive marketing campaigns, accountants, and scammers sending endless junk mail to your home.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Unprofessional Image
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  High-ticket clients and B2B partners often verify company credentials. A residential address can make your business appear small or illegitimate.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 4: WHAT IS INCLUDED ---------- */
function WhatIsIncluded() {
  const inclusions = [
    {
      title: "Prestigious London Address",
      desc: "A highly sought-after commercial address in central London that you can display on your website and invoices.",
    },
    {
      title: "Director Service Address",
      desc: "Protect the personal addresses of all company directors by using our address on the public register.",
    },
    {
      title: "Same-Day Mail Scanning",
      desc: "All official statutory mail from HMRC and Companies House is opened, scanned, and emailed to you securely.",
    },
    {
      title: "Unlimited Statutory Mail",
      desc: "We process and forward all your official government correspondence without any hidden per-item fees.",
    },
    {
      title: "Legal Compliance",
      desc: "Ensures your company remains in perfect standing with UK registry laws requiring a physical presence.",
    },
    {
      title: "Bank Setup Friendly",
      desc: "Use this address as your corporate footprint when applying for digital banking and payment gateways.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Comprehensive Address Services
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Everything you need for a compliant and professional corporate presence in the UK.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <CheckCircle className="text-gold-500 mb-4" size={24} />
                <h3 className="font-sans text-[18px] font-semibold text-dark-text">{inc.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{inc.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 5: PRICING ---------- */
function Pricing() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Annual Address Subscription
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Annual Renewal
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">PREMIUM LONDON PRESENCE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£89</span>
              <span className="text-sm text-gray-500">/ year</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Flat annual fee. No hidden mail forwarding charges or unexpected costs.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Prestigious Central London Address</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Director Service Address Included</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Unlimited Statutory Mail Scanning</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Email Delivery of All Important Notices</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Secure Address — £89/yr
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: PROCESS ---------- */
function ProcessSteps() {
  const steps = [
    {
      title: "Place Order",
      desc: "Submit your details and complete the annual payment for the address service.",
    },
    {
      title: "Address Assigned",
      desc: "We instantly assign your new premium London address and provide formatting instructions.",
    },
    {
      title: "Update Registry",
      desc: "Use the address for your new company formation, or we help update your existing Companies House record.",
    },
    {
      title: "Mail Received",
      desc: "Official correspondence from HMRC and Companies House arrives at our secure London facility.",
    },
    {
      title: "Digital Delivery",
      desc: "Our team securely opens, scans, and emails the official documents directly to your inbox.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How Mail Forwarding Works
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A seamless, digital-first approach to handling your corporate mail.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8 mt-12">
          {steps.map((st, idx) => (
            <Reveal key={st.title}>
              <div className="text-center px-2">
                <div className="w-16 h-16 rounded-full border border-gold-500 flex items-center justify-center mx-auto mb-4 bg-gold-500/5">
                  <span className="font-serif text-2xl text-gold-500">{idx + 1}</span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-dark-text mt-2">{st.title}</h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 7: BANKING PARTNERS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>CORPORATE PRESENCE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Essential for Global Operations
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Your registered office is more than just a legal requirement; it's your business hub.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Companies House</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Maintain 100% compliance with UK registry laws. Our address ensures you never miss a filing deadline notice or statutory update.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">HMRC Communications</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Crucial tax documents, VAT certificates, and Corporation Tax reminders are securely handled and delivered to you digitally.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Client Trust</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Displaying a central London address on your website, contracts, and invoices builds immediate trust with international enterprise clients.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 8: FAQ ---------- */
function FAQAccordionItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left text-lg font-medium text-white hover:text-gold-500 transition-colors focus:outline-none"
      >
        <span className="pr-6">{q}</span>
        <ChevronDown
          size={20}
          className={`text-gold-500 shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-navy-200 text-base leading-relaxed font-sans">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <section className="bg-navy-950 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>FAQ</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-white mt-4">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal>
          <div className="w-full divide-y divide-white/10">
            {faqs.map((f, i) => (
              <FAQAccordionItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 9: RELATED SERVICES ---------- */
function RelatedServices() {
  const services = [
    {
      title: "UK LTD Formation",
      path: "/uk-services/ltd-formation",
      desc: "Complete your company registration including this premium address.",
    },
    {
      title: "Confirmation Statement",
      path: "/uk-services/confirmation-statement",
      desc: "Mandatory annual filing to confirm your address and company details are correct.",
    },
    {
      title: "VAT Registration",
      path: "/uk-services/vat-registration",
      desc: "Register for UK VAT using your official corporate address.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related UK Compliance Services
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <Link
                  to="/uk-services"
                  className="mt-6 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest hover:gap-2.5 transition-all"
                >
                  View Service Details <ArrowRight size={12} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 10: CTA BANNER ---------- */
function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            READY TO UPGRADE?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Protect Your Privacy Today.
            <br />
            Secure Your London Address.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Don't leave your personal residential address on the public register. Get a premium London corporate address with unlimited statutory mail scanning.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Get Started Now →
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              WhatsApp Us Directly
            </a>
          </div>
          <p className="mt-6 text-[13px] text-navy-200">
            Instant Setup · Real Commercial Building · Daily Mail Scanning
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function RegisteredOfficeAddress() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <BankingIntegrations />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
