import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  BadgeAlert,
  Building2,
  Lock,
  Globe,
  Briefcase,
  PenTool,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a W-8BEN form?",
    a: "Form W-8BEN is an IRS form used by foreign individuals (non-US citizens and non-US residents) to certify their foreign status. It establishes that you are not subject to standard US income tax withholding on income earned from US sources, such as freelance work on Upwork or Fiverr.",
  },
  {
    q: "What is the difference between W-8BEN and W-8BEN-E?",
    a: "The W-8BEN is for individuals acting as sole proprietors or independent contractors. The W-8BEN-E is for foreign entities (such as a Pakistani Private Limited company) that earn income from the US. Both serve to claim tax treaty benefits or exempt you from the 30% US withholding tax.",
  },
  {
    q: "What is a W-9 form and who needs to fill it?",
    a: "Form W-9 is for US persons, including US citizens, resident aliens, and US entities (like a Wyoming LLC). It provides your Taxpayer Identification Number (SSN or EIN) to clients or platforms so they can report payments made to you to the IRS via a 1099 form.",
  },
  {
    q: "Do I need to file a W-8BEN if I work on Upwork from Pakistan?",
    a: "Yes. Upwork and other global freelancing platforms require you to submit a W-8BEN form (usually digitally) to confirm you are a non-US resident. If you don't provide this, they are legally required to withhold 30% of your earnings for US taxes.",
  },
  {
    q: "Do I need an SSN or ITIN to fill out a W-8BEN?",
    a: "Generally, no. As a foreign freelancer performing services outside the US, you can usually complete the W-8BEN using your local foreign tax identifying number (like your CNIC or NTN in Pakistan) without needing a US SSN or ITIN.",
  },
  {
    q: "If I have a US LLC, do I fill out a W-8 or W-9?",
    a: "If your US LLC is a single-member LLC and treated as a disregarded entity, it takes on the tax status of its owner. If the owner is a non-US resident, you generally provide a W-8BEN. However, in some situations (like opening a US bank account), a W-9 may be requested using the LLC's EIN. We advise on exactly which form is correct based on the requester.",
  },
  {
    q: "How often do I need to renew my W-8BEN form?",
    a: "Form W-8BEN is generally valid for three calendar years after the year it is signed. You will need to submit a new one when it expires or if any of your information (like your address or entity status) changes.",
  },
  {
    q: "What happens if I make a mistake on the W-8BEN or W-9?",
    a: "These forms are signed under penalty of perjury. Providing incorrect information can lead to tax complications, rejection of your accounts by platforms, or unnecessary 30% withholding on your earnings. Professional assistance ensures accurate submission.",
  },
  {
    q: "Can you help me fill out the tax details section on Amazon KDP or YouTube?",
    a: "Yes. The tax interviews on platforms like Amazon KDP, YouTube, Google AdSense, and Deel are essentially digital versions of the W-8BEN or W-8BEN-E forms. We guide you exactly on what options to select based on your status.",
  },
  {
    q: "How long does your assistance service take?",
    a: "Our assistance is prompt. We typically review your situation and provide you with the exact details or a filled PDF form within 24-48 business hours after receiving your order.",
  },
  {
    q: "Is there any US-Pakistan Tax Treaty benefit I can claim?",
    a: "Pakistan and the US do have an income tax treaty. By correctly citing the treaty article on your W-8BEN, you may be eligible to reduce the statutory 30% withholding tax on certain types of passive income (like royalties from software or books) to a lower rate, often 0% for personal services performed in Pakistan.",
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
  serviceType: "Tax Form Preparation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "W-8BEN & W-9 Tax Form Assistance for Freelancers",
  description:
    "Professional guidance on completing IRS Forms W-8BEN, W-8BEN-E, and W-9 to claim tax treaty benefits and avoid 30% withholding on freelancing platforms like Upwork and Fiverr.",
  areaServed: "Global",
  url: "https://[yourdomain.com]/us-services/w8-w9-assistance",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "One-time fee for accurate W-8 or W-9 form completion guidance.",
  },
};

export const Route = createFileRoute("/us-services/w8-w9-assistance")({
  head: () => ({
    meta: [
      { title: "W-8BEN & W-9 Form Assistance for Freelancers | ADVAQ" },
      {
        name: "description",
        content:
          "Professional guidance on completing IRS Forms W-8BEN, W-8BEN-E, and W-9. Avoid 30% US withholding tax on platforms like Upwork, Fiverr, and Deel.",
      },
      {
        name: "keywords",
        content:
          "w-8ben form assistance, w-8ben-e, w9 form for pakistani freelancers, upwork w-8ben, fiverr tax details, us tax compliance, avoid 30 withholding",
      },
      {
        property: "og:title",
        content: "W-8BEN & W-9 Form Assistance for Freelancers | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional guidance on completing IRS Forms W-8BEN, W-8BEN-E, and W-9. Avoid 30% US withholding tax on platforms like Upwork, Fiverr, and Deel.",
      },
      { property: "og:url", content: "/us-services/w8-w9-assistance" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/w8-w9-assistance" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: W8W9Assistance,
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
            📄 US TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            W-8BEN & W-9 Form
            <br />
            Assistance Service
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Avoid the mandatory 30% US withholding tax on platforms like Upwork, Fiverr, Amazon KDP, and Deel. Ensure accurate filing under penalty of perjury.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Get Tax Form Help
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
              <Check size={16} className="text-gold-500" /> W-8BEN for Individuals
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> W-8BEN-E for Entities
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> W-9 for US LLCs
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
                What are these Tax Forms?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Any US company making payments to independent contractors or foreign entities must collect specific IRS tax forms to document the tax status of the payee. For non-US residents working remotely, this form is typically the **W-8BEN** (for individuals) or **W-8BEN-E** (for corporate entities).
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                These forms certify that you are not a US tax resident and that your services are performed outside the US. By correctly submitting these forms, you claim tax treaty benefits or general exemptions, preventing the client or platform from withholding a massive 30% of your hard-earned income for the IRS. If you have a US LLC, you may alternatively need to submit a **W-9**.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Accuracy Matters</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Penalty of Perjury:** Forms are signed legally under perjury laws.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Tax Withholding:** A wrong checkmark can instantly trigger 30% tax deductions on payouts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Account Suspension:** Major platforms freeze accounts for inconsistent tax information.</span>
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

/* ---------- SECTION 3: THE RISK ---------- */
function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Guessing on IRS Tax Forms
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Freelance platforms and direct clients take US tax laws seriously. Filling out these forms incorrectly carries immediate financial and legal consequences.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                30% Withholding Loss
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                If you fail to provide a valid W-8BEN, US companies must withhold 30% of your gross earnings and send it to the IRS. Recovering this money later requires filing a US tax return, which is costly and complex.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Incorrect Treaty Claims
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Claiming the wrong tax treaty article or claiming a treaty when you don't qualify is a federal offense. Misinterpreting the US-Pakistan tax treaty can lead to audits or compliance bans.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Platform Lockouts
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Upwork, Fiverr, Amazon KDP, and Deel use automated systems to verify W-8 and W-9 data. Inconsistent names, addresses, or entity types lead to permanent withdrawal locks.
              </p>
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
      title: "Tax Status Analysis",
      desc: "We analyze whether you need a W-8BEN, W-8BEN-E, or W-9 based on your structure and client requirements.",
    },
    {
      title: "Digital Form Walkthrough",
      desc: "If your platform (like Upwork) uses a digital tax interview, we provide the exact answers to select for compliance.",
    },
    {
      title: "PDF Form Preparation",
      desc: "If your direct client requests a physical PDF, we fill out the official IRS forms correctly for you to sign.",
    },
    {
      title: "Treaty Benefit Review",
      desc: "We help you properly cite the US-Pakistan income tax treaty articles for royalties or services if applicable.",
    },
    {
      title: "Entity vs Individual",
      desc: "Clear distinction and guidance if you operate as a sole proprietor versus through your US LLC.",
    },
    {
      title: "Compliance Verification",
      desc: "Final review of your document before you submit to ensure there are no red flags that could trigger withholding.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Form Assistance Process
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Get it done right the first time and keep 100% of your earnings.
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
            One-Time Consultation Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Form Support
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ACCURATE & COMPLIANT</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$49</span>
              <span className="text-sm text-gray-500">flat fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Includes comprehensive guidance for one specific platform tax interview or one completed IRS PDF form.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Form type determination (W-8BEN, BEN-E, or W-9)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Line-by-line instructions or prepared PDF</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Tax treaty benefit analysis</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Support for Upwork, Fiverr, Deel, and KDP</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — $49
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
      title: "Provide Context",
      desc: "Tell us about your business structure (Individual or LLC) and the platform or client requesting the form.",
    },
    {
      title: "Document Review",
      desc: "We evaluate your current setup and decide the appropriate form and treaty claims applicable to your situation.",
    },
    {
      title: "Form Drafting",
      desc: "We provide the exact answers for your digital tax interview or send you a filled-out official PDF.",
    },
    {
      title: "Client Review",
      desc: "You review the answers, sign digitally or physically, and understand what you are declaring under perjury.",
    },
    {
      title: "Submission",
      desc: "Submit the form to your platform or client to stop withholding taxes immediately.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Get You Setup
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Fast, secure, and hassle-free tax compliance.
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

/* ---------- SECTION 7: PLATFORMS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>SUPPORTED PLATFORMS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Where You Need These Forms
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            We guide you through the specific digital tax interviews of global platforms.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Briefcase className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Freelance Networks</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Upwork, Fiverr, Toptal, and Freelancer require W-8BEN forms before you can withdraw your earnings. We ensure you fill their digital interviews perfectly.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <PenTool className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Digital Creators</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Amazon KDP, YouTube (AdSense), and Apple App Store mandate tax documentation to avoid 30% withholding on your global royalties.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Direct US Clients</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                If you have B2B clients in the US (or use Deel/Ontop), their accounting departments will request official W-8BEN, W-8BEN-E, or W-9 PDFs before paying invoices.
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
      title: "Wyoming LLC Formation",
      path: "/us-services/wyoming-llc-formation",
      desc: "Register a formal US company to elevate your business presence and simplify B2B US contracts.",
    },
    {
      title: "1099-NEC Filing",
      path: "/us-services/1099-filing",
      desc: "If your US LLC pays contractors $600 or more, you must file 1099-NEC forms with the IRS.",
    },
    {
      title: "US EIN Registration",
      path: "/us-services/ein-registration",
      desc: "Get an Employer Identification Number if you form a US entity, essential for the W-9 form.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Compliance Services
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
                  to={s.path}
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
            DON'T LOSE 30% TO TAXES
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Get Your IRS Forms Right.
            <br />
            Stop the Withholding Immediately.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your Upwork, Fiverr, or direct client payouts aren't slashed by the IRS due to paperwork errors. We provide exact guidance for your W-8BEN or W-9.
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
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function W8W9Assistance() {
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
