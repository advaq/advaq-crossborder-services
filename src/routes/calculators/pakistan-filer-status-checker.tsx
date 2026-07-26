import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Search,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-filer-status-checker")({
  head: () => ({
    meta: [
      { title: "Pakistan Filer or Non-Filer Status Verification Checker (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free step-by-step guide & checker to verify FBR Active Taxpayer List (ATL) Filer status via Iris portal or SMS 9966.",
      },
      {
        name: "keywords",
        content:
          "pakistan filer status checker online 2026, check active taxpayer list atl status cnic sms 9966, how to become active filer fbr iris",
      },
      {
        property: "og:title",
        content: "Pakistan Filer or Non-Filer Status Verification Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Verify your FBR Active Taxpayer List (ATL) Filer status via SMS 9966 or FBR Iris portal.",
      },
      { property: "og:url", content: "/calculators/pakistan-filer-status-checker" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-filer-status-checker" }],
  }),
  component: PakistanFilerStatusCheckerPage,
});

function PakistanFilerStatusCheckerPage() {
  const [cnicInput, setCnicInput] = useState<string>("");

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>Filer Status Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            FBR Filer / Non-Filer Status Checker & Guide (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Verify your Active Taxpayer List (ATL) status instantly using FBR official verification methods.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* SMS METHOD BANNER */}
          <div className="bg-navy-950 text-white p-6 rounded-2xl border border-gold-500/30 space-y-3">
            <div className="flex items-center gap-2 text-gold-500 font-bold uppercase tracking-wider text-xs">
              <Sparkles size={18} />
              <span>Instant SMS Verification (Fastest Method)</span>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed">
              Send an SMS to <strong>9966</strong> from your registered mobile phone with the text:
            </p>
            <div className="bg-navy-900 border border-white/20 p-4 rounded-xl font-mono text-emerald-400 font-bold text-center text-lg">
              ATL [space] 13-Digit-CNIC (e.g. ATL 3520212345671)
            </div>
            <p className="text-[11px] text-navy-300">
              You will receive an instant reply from FBR confirming whether your CNIC is <strong>ACTIVE (Filer)</strong> or <strong>INACTIVE (Non-Filer)</strong>.
            </p>
          </div>

          {/* ONLINE PORTAL GUIDANCE */}
          <div className="space-y-4 text-xs bg-off-white/50 p-6 rounded-2xl border border-border">
            <h3 className="font-serif font-bold text-navy-950 text-base">Method 2: FBR Online Portal Verification</h3>
            <ol className="space-y-2.5 text-gray-700 list-decimal pl-4">
              <li>Visit the official FBR Iris Active Taxpayer List page (e.fbr.gov.pk).</li>
              <li>Select <strong>Active Taxpayer List (Income Tax)</strong> under the Search menu.</li>
              <li>Enter your 13-digit CNIC number (without dashes).</li>
              <li>Click <strong>Verify</strong> to view your current ATL Status & Registration date.</li>
            </ol>
          </div>

          <div className="pt-4 text-center space-y-3">
            <Link to="/pakistan-services/atl-restoration" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Restore Your Filer Status with ADVAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
