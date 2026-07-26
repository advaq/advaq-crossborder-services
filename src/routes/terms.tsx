import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, FileText, CheckCircle2, ShieldAlert, Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/lib/reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | ADVAQ Global Advisory" },
      {
        name: "description",
        content:
          "ADVAQ Global Advisory Terms of Service. Review the legal terms, client obligations, fee policies, and service conditions for engaging our corporate services.",
      },
      { property: "og:title", content: "Terms of Service | ADVAQ Global Advisory" },
      {
        property: "og:description",
        content:
          "The official terms and conditions governing company formation, tax registration, annual compliance, and legal drafting services with ADVAQ.",
      },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL TERMS & ENGAGEMENT"
        title="Terms of Service"
        subtitle="The governing terms, conditions, and professional standards for engaging ADVAQ Global Advisory for cross-border company setup, tax compliance, and legal drafting."
      />

      <section className="bg-white py-20 text-gray-800 leading-relaxed">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* TOP HIGHLIGHT BOX */}
          <Reveal>
            <div className="bg-navy-950 text-white rounded-2xl p-8 border border-gold-500/30 shadow-xl">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-2">
                <Scale size={20} />
                <span>Agreement Overview</span>
              </div>
              <p className="text-navy-100 text-sm md:text-base leading-relaxed">
                By ordering or engaging ADVAQ Global Advisory for UK company formation, US LLC setup, UAE Freezone licensing, Pakistan SECP registration, tax filings, or legal contract drafting, you agree to be bound by these Terms of Service.
              </p>
            </div>
          </Reveal>

          {/* SECTION 1 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">1</span>
                Scope of Corporate Advisory Services
              </h2>
              <p>
                <strong>ADVAQ Global Advisory</strong> ("ADVAQ", "we", "us") provides specialized corporate advisory, company incorporation agent services, statutory tax compliance assistance, and legal document drafting for clients worldwide.
              </p>
              <p className="text-sm text-gray-600">
                Services encompass submitting statutory applications to official government authorities (such as UK Companies House, HMRC, US State Secretaries, IRS, FinCEN, UAE Freezone Authorities, UAE FTA, Pakistan SECP, and FBR) on behalf of client directors and beneficial owners.
              </p>
            </div>
          </Reveal>

          {/* SECTION 2 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">2</span>
                Client Obligations & Information Accuracy
              </h2>
              <p>
                Clients engaging ADVAQ must provide accurate, complete, and truthful documentation. The client warrants that:
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold-600 shrink-0 mt-0.5" size={18} />
                  <span><strong>True Documentation:</strong> All passports, national IDs, utility bills, and bank statements submitted for KYC/AML verification are genuine and unaltered.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold-600 shrink-0 mt-0.5" size={18} />
                  <span><strong>Lawful Business Purpose:</strong> The entity being incorporated will be operated for lawful commercial purposes and will not engage in illegal trade, fraudulent activities, or money laundering.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold-600 shrink-0 mt-0.5" size={18} />
                  <span><strong>Timely Responsiveness:</strong> The client will promptly sign statutory forms, verify email notifications, and return government queries within required statutory deadlines.</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* SECTION 3 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">3</span>
                Government Fees & Processing Timelines
              </h2>
              <p>
                Professional service fees paid to ADVAQ cover advisory, document preparation, identity verification, and submission handling.
              </p>
              <div className="bg-off-white p-6 rounded-2xl border border-border space-y-3 text-xs text-gray-700">
                <p><strong>Government Filing Fees:</strong> Official government registry fees (e.g. Companies House £33/£50, UKIPO £170, state filing fees, etc.) are non-refundable once submitted to the respective government authority.</p>
                <p><strong>Government SLAs & Turnarounds:</strong> Processing times quoted (e.g. 24-hour UK incorporation, 5-7 day EIN processing) reflect standard government benchmarks. ADVAQ is not liable for delayed processing caused by unexpected government system downtime, manual registry backlogs, or secondary regulatory audits.</p>
              </div>
            </div>
          </Reveal>

          {/* SECTION 4 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">4</span>
                Payment Terms & Refund Policy
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-2">
                <li><strong>Advance Payment:</strong> All service orders and package fees are due in full prior to commencement of application drafting or filing submission.</li>
                <li><strong>Pre-Submission Cancellations:</strong> If a client cancels an order before government submission or document drafting has begun, a refund minus administrative processing costs will be issued.</li>
                <li><strong>Post-Submission Policy:</strong> Once an application has been formally lodged with a government agency (Companies House, IRS, State Secretary, SECP, FTA), fees are strictly non-refundable.</li>
              </ul>
            </div>
          </Reveal>

          {/* SECTION 5 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">5</span>
                Director Responsibilities & Compliance Disclaimers
              </h2>
              <p>
                While ADVAQ manages filings and corporate registrations with utmost expertise, company directors and beneficial owners retain ultimate legal responsibility for their company's statutory compliance.
              </p>
              <div className="p-5 border border-amber-200 bg-amber-50/50 rounded-2xl text-xs text-amber-900 leading-relaxed">
                <strong>Important Notice:</strong> Directors are legally mandated to maintain active registered addresses, submit annual Confirmation Statements (CS01), file timely accounts with HMRC/IRS/FTA/FBR, and pay all corporate taxes when due. ADVAQ is not liable for statutory penalties or company strike-offs resulting from client failure to renew annual services or supply accurate financial accounting data.
              </div>
            </div>
          </Reveal>

          {/* SECTION 6 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">6</span>
                Intellectual Property & Contract Templates
              </h2>
              <p>
                Custom legal contracts, Master Service Agreements (MSAs), NDAs, and employment templates drafted by ADVAQ are licensed to the purchasing client for their exclusive corporate use. Unattributed public redistribution or resale of ADVAQ legal contract templates is strictly prohibited.
              </p>
            </div>
          </Reveal>

          {/* SECTION 7 */}
          <Reveal>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">7</span>
                Contact & Legal Enquiries
              </h2>
              <p>
                For questions regarding these Terms of Service or to discuss a corporate engagement, contact our team:
              </p>
              <div className="bg-navy-900 text-white p-6 rounded-2xl border border-white/10 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-navy-100">
                  <Mail size={16} className="text-gold-500 shrink-0" />
                  <span>Email: <a href="mailto:contact@advaq.com" className="text-gold-500 underline">contact@advaq.com</a></span>
                </div>
                <div className="flex items-center gap-3 text-navy-100">
                  <Phone size={16} className="text-gold-500 shrink-0" />
                  <span>WhatsApp: <a href="https://wa.me/923000925335" target="_blank" rel="noreferrer" className="text-gold-500 underline">+92 3000 925335</a></span>
                </div>
                <div className="flex items-center gap-3 text-navy-100">
                  <MapPin size={16} className="text-gold-500 shrink-0" />
                  <span>Office: Lahore, Pakistan (Serving clients in UK, USA & UAE)</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
