import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Lock, FileText, CheckCircle2, Phone, Clock, MapPin, Scale } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/lib/reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ADVAQ Global Advisory" },
      {
        name: "description",
        content:
          "ADVAQ Global Advisory Privacy Policy. Learn how we collect, store, process, and protect your personal and corporate data in compliance with international privacy laws.",
      },
      { property: "og:title", content: "Privacy Policy | ADVAQ Global Advisory" },
      {
        property: "og:description",
        content:
          "Comprehensive privacy standards, data protection rules, and GDPR compliance for ADVAQ corporate clients across the UK, USA, UAE, and Pakistan.",
      },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL & DATA PROTECTION"
        title="Privacy Policy"
        subtitle="How ADVAQ Global Advisory collects, processes, and safeguards your personal and corporate data in strict compliance with international privacy standards, GDPR, and global AML frameworks."
      />

      <section className="bg-white py-20 text-gray-800 leading-relaxed">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* TOP HIGHLIGHT BOX */}
          <Reveal>
            <div className="bg-navy-950 text-white rounded-2xl p-8 border border-gold-500/30 shadow-xl">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-2">
                <ShieldCheck size={20} />
                <span>Our Data Commitment</span>
              </div>
              <p className="text-navy-100 text-sm md:text-base leading-relaxed">
                At ADVAQ Global Advisory, we recognize that your corporate structures, passport documents, financial records, and tax filings are highly sensitive. We never sell, rent, or monetize client data. Your information is processed solely for executing company incorporations, tax filings, and legal compliance services.
              </p>
            </div>
          </Reveal>

          {/* SECTION 1 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">1</span>
                Data Controller & Scope
              </h2>
              <p>
                This Privacy Policy applies to all services offered by <strong>ADVAQ Global Advisory</strong> ("ADVAQ", "we", "us", or "our"), operating out of Lahore, Pakistan, and serving clients across the United Kingdom (UK), United States (USA), United Arab Emirates (UAE), and Pakistan.
              </p>
              <p className="text-sm text-gray-600">
                For the purposes of data protection legislation, including the UK General Data Protection Regulation (UK GDPR), EU GDPR, and applicable local data security laws, ADVAQ acts as the Data Controller for the personal and corporate information provided directly by clients during consultations and service engagements.
              </p>
            </div>
          </Reveal>

          {/* SECTION 2 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">2</span>
                Information We Collect
              </h2>
              <p>
                To deliver cross-border company formation, tax registrations, annual accounts, and legal contract drafting, we collect the following categories of information:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6 text-xs">
                <div className="bg-off-white p-5 rounded-xl border border-border">
                  <strong className="block text-navy-950 text-sm mb-1 font-bold">Personal Identification Data</strong>
                  <p className="text-gray-600 leading-relaxed">
                    Full legal name, date of birth, nationality, residential address, personal email, phone/WhatsApp number, copy of government-issued passport or national ID card.
                  </p>
                </div>

                <div className="bg-off-white p-5 rounded-xl border border-border">
                  <strong className="block text-navy-950 text-sm mb-1 font-bold">Proof of Address & Financial KYC</strong>
                  <p className="text-gray-600 leading-relaxed">
                    Recent utility bills, personal/business bank statements, tax identification numbers (UTR, EIN, ITIN, NTN, TRN), and proof of funds declarations.
                  </p>
                </div>

                <div className="bg-off-white p-5 rounded-xl border border-border">
                  <strong className="block text-navy-950 text-sm mb-1 font-bold">Corporate Entity Information</strong>
                  <p className="text-gray-600 leading-relaxed">
                    Proposed company names, shareholding structures, Person with Significant Control (PSC) details, Articles of Organization, and statutory registers.
                  </p>
                </div>

                <div className="bg-off-white p-5 rounded-xl border border-border">
                  <strong className="block text-navy-950 text-sm mb-1 font-bold">Technical & Communication Data</strong>
                  <p className="text-gray-600 leading-relaxed">
                    IP address, browser type, device information, email correspondence, WhatsApp messages, and website enquiry submissions.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECTION 3 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">3</span>
                How We Use Your Data
              </h2>
              <p>
                We process personal and corporate data strictly for legitimate legal and commercial purposes:
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700 my-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold-600 shrink-0 mt-0.5" size={18} />
                  <span><strong>Service Execution:</strong> Registering companies with Companies House (UK), State Secretaries (USA), Freezone Authorities/DET (UAE), or SECP (Pakistan).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold-600 shrink-0 mt-0.5" size={18} />
                  <span><strong>Tax Compliance Filings:</strong> Registering for Corporation Tax, VAT, CT600 returns, Form 5472/1120 (IRS), FinCEN BOI reports, and FBR Iris filings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold-600 shrink-0 mt-0.5" size={18} />
                  <span><strong>Statutory KYC & Anti-Money Laundering (AML):</strong> Verifying client identities to fulfill mandatory international AML/CFT statutory duties under UK MLR 2017 and US Corporate Transparency Act.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold-600 shrink-0 mt-0.5" size={18} />
                  <span><strong>Banking & Gateway Assistance:</strong> Facilitating remote corporate bank account onboarding with Wise, Mercury, Relay, Wio, or traditional banks upon client instruction.</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* SECTION 4 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">4</span>
                Third-Party Disclosures & International Transfers
              </h2>
              <p>
                We never sell or disclose client data to third-party marketing companies. Data is shared exclusively with official statutory bodies and essential infrastructure partners:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-2">
                <li><strong>Government Registries & Revenue Authorities:</strong> UK Companies House, HMRC, US State Registrars, IRS, FinCEN, UAE Ministry of Economy/FTA, Pakistan SECP & FBR.</li>
                <li><strong>Statutory Address & Agent Service Partners:</strong> Licensed Registered Agents in Wyoming/Delaware and UK Virtual Office providers.</li>
                <li><strong>Secure Communications & Storage:</strong> Encrypted cloud infrastructure, email servers, and client portal tools.</li>
              </ul>
            </div>
          </Reveal>

          {/* SECTION 5 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">5</span>
                Data Retention & Security Standards
              </h2>
              <p>
                We implement robust physical, administrative, and technical security measures (including end-to-end SSL encryption and restricted access controls) to prevent unauthorized disclosure or access to client records.
              </p>
              <p className="text-sm text-gray-600">
                Under UK Companies Act, HMRC tax rules, and IRS regulations, statutory records and tax submission files must be securely retained for <strong>at least 6 years</strong> following the end of the relevant tax year or company dissolution date.
              </p>
            </div>
          </Reveal>

          {/* SECTION 6 */}
          <Reveal>
            <div className="space-y-4 border-b border-border pb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">6</span>
                Your Privacy Rights
              </h2>
              <p>
                Depending on your location (including under UK/EU GDPR regulations), you enjoy specific data privacy rights:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs my-4">
                <div className="border border-border p-4 rounded-xl bg-white">
                  <strong className="block text-navy-950 font-bold mb-1">Right to Access & Rectification</strong>
                  <p className="text-gray-600">You may request copies of personal data held by ADVAQ or ask us to correct inaccurate records.</p>
                </div>
                <div className="border border-border p-4 rounded-xl bg-white">
                  <strong className="block text-navy-950 font-bold mb-1">Right to Erasure (Right to be Forgotten)</strong>
                  <p className="text-gray-600">You may request deletion of data, subject to mandatory statutory tax and corporate retention obligations.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECTION 7 */}
          <Reveal>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-navy-950 text-gold-500 text-sm font-bold flex items-center justify-center shrink-0">7</span>
                Contact Information
              </h2>
              <p>
                For privacy requests, data access enquiries, or regulatory questions, please contact our Data Protection Lead:
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
