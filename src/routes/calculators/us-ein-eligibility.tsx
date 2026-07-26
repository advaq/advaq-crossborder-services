import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Clock,
  Shield,
  ArrowRight,
  Sparkles,
  FileCheck,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-ein-eligibility")({
  head: () => ({
    meta: [
      { title: "US EIN Application Eligibility & Timeline Tool (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US EIN tax ID application timeline & eligibility tool for foreign LLC owners without SSN/ITIN. Compare SS-4 Fax vs 147C verification.",
      },
      {
        name: "keywords",
        content:
          "how to get ein without ssn 2026, foreign non resident ein application timeline, irs ss-4 fax 147c letter non-us resident",
      },
      {
        property: "og:title",
        content: "US EIN Application Eligibility & Timeline Tool | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Find out how foreign founders get an official IRS EIN tax ID without an SSN or ITIN.",
      },
      { property: "og:url", content: "/calculators/us-ein-eligibility" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-ein-eligibility" }],
  }),
  component: USEINEligibilityToolPage,
});

function USEINEligibilityToolPage() {
  const [hasSSN, setHasSSN] = useState<boolean>(false);
  const [isLlcApproved, setIsLlcApproved] = useState<boolean>(true);
  const [hasUsAddress, setHasUsAddress] = useState<boolean>(true);
  const [selectedMethod, setSelectedMethod] = useState<string>("advaq");

  // Methods
  const methodTimelines: Record<string, { days: string; cost: string; rate: string; note: string }> = {
    advaq: {
      days: "5–10 Business Days",
      cost: "$75",
      rate: "99.8% Guaranteed",
      note: "ADVAQ direct IRS agent filing with pre-validated Responsible Party representation.",
    },
    fax: {
      days: "4–6 Weeks",
      cost: "Free (Self-Filing)",
      rate: "70% Success Rate",
      note: "Manual Form SS-4 fax to IRS non-resident line (+1 855-641-6935). Rejections common if address formatted wrong.",
    },
    phone: {
      days: "1 Day (US Residents Only)",
      cost: "Free",
      rate: "N/A for Non-SSN",
      note: "IRS phone line requires valid US SSN/ITIN. International callers without SSN are routed to fax.",
    },
  };

  const currentMethod = methodTimelines[selectedMethod] || methodTimelines.advaq;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US EIN Timeline & Eligibility</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            IRS EIN Tax ID Timeline & Eligibility Tool (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check eligibility and estimated processing time for obtaining an IRS EIN Tax ID as a Non-US Resident founder without SSN or ITIN.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* METHOD SELECTOR */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-3">
                Select EIN Application Filing Method:
              </label>
              <div className="space-y-3 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedMethod("advaq")}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedMethod === "advaq"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <div>
                    <strong className="block text-sm font-semibold">ADVAQ Managed IRS Fast-Track (Recommended)</strong>
                    <span className="text-gray-400 text-[11px]">No SSN required. IRS Form 147C & CP575 verification letter.</span>
                  </div>
                  <span className="font-mono text-gold-400 font-bold shrink-0 ml-2">5–10 Days</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod("fax")}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedMethod === "fax"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <div>
                    <strong className="block text-sm font-semibold">Self-Filing via IRS Form SS-4 Fax</strong>
                    <span className="text-gray-400 text-[11px]">Manual submission to IRS international fax line.</span>
                  </div>
                  <span className="font-mono text-amber-400 font-bold shrink-0 ml-2">4–6 Weeks</span>
                </button>
              </div>
            </div>

            {/* CHECKLIST */}
            <div className="space-y-3 text-xs border-t border-border pt-4">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={isLlcApproved}
                  onChange={(e) => setIsLlcApproved(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <span className="text-navy-950 font-semibold">Approved State Articles of Organization (Wyoming/Delaware LLC)</span>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasUsAddress}
                  onChange={(e) => setHasUsAddress(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <span className="text-navy-950 font-semibold">US Registered Agent & Physical Business Address Available</span>
              </label>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>EIN Timeline Estimate</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Estimated Processing Time:</span>
                  <span className="font-mono text-emerald-400 font-bold text-sm">{currentMethod.days}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Approval Success Probability:</span>
                  <span className="font-mono text-gold-400 font-semibold">{currentMethod.rate}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Official IRS Output Documents:</span>
                  <span className="font-mono text-white">Form 147C & CP575</span>
                </div>
              </div>

              {/* DESCRIPTION BOX */}
              <div className="bg-navy-900 border border-gold-500/40 p-4 rounded-xl mb-4 text-xs text-navy-200 leading-relaxed">
                {currentMethod.note}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/ein-registration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Get IRS EIN Tax ID with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
