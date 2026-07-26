import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  PoundSterling,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-payroll-paye")({
  head: () => ({
    meta: [
      { title: "UK Payroll & PAYE Tax Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Payroll & PAYE calculator. Calculate Employer NI (13.8%), Employee NI (8%), PAYE Income Tax, auto-enrolment pension, and net take-home salary.",
      },
      {
        name: "keywords",
        content:
          "uk payroll paye calculator 2026, uk employer national insurance calculator 13.8 percent, uk employee net salary take home calculator",
      },
      {
        property: "og:title",
        content: "UK Payroll & PAYE Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate total employer payroll cost and net employee take-home pay under 2026 HMRC PAYE tax rules.",
      },
      { property: "og:url", content: "/calculators/uk-payroll-paye" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-payroll-paye" }],
  }),
  component: UKPayrollPAYECalculatorPage,
});

function UKPayrollPAYECalculatorPage() {
  const [grossSalary, setGrossSalary] = useState<number>(35000);
  const [pensionPercentage, setPensionPercentage] = useState<number>(3); // Employer Pension (3%)

  // 1. EMPLOYEE PAYE INCOME TAX (Personal Allowance £12,570)
  const taxableSalary = Math.max(0, grossSalary - 12570);
  let employeeIncomeTax = 0;
  if (taxableSalary <= 37700) {
    employeeIncomeTax = taxableSalary * 0.2;
  } else if (taxableSalary <= 112570) {
    employeeIncomeTax = 37700 * 0.2 + (taxableSalary - 37700) * 0.4;
  } else {
    employeeIncomeTax =
      37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableSalary - 112570) * 0.45;
  }

  // 2. EMPLOYEE NATIONAL INSURANCE (8% between £12,570 and £50,270; 2% above £50,270)
  let employeeNI = 0;
  if (grossSalary > 12570) {
    const niBand1 = Math.min(Math.max(0, grossSalary - 12570), 37700);
    const niBand2 = Math.max(0, grossSalary - 50270);
    employeeNI = niBand1 * 0.08 + niBand2 * 0.02;
  }

  // 3. EMPLOYER NATIONAL INSURANCE (13.8% above £9,100 secondary threshold)
  const employerNIBase = Math.max(0, grossSalary - 9100);
  const employerNI = employerNIBase * 0.138;

  // 4. EMPLOYER PENSION (3% of qualifying earnings £6,240 - £50,270)
  const qualifyingPensionEarnings = Math.min(Math.max(0, grossSalary - 6240), 44030);
  const employerPension = qualifyingPensionEarnings * (pensionPercentage / 100);

  const netEmployeeTakeHome = grossSalary - employeeIncomeTax - employeeNI;
  const totalCostToEmployer = grossSalary + employerNI + employerPension;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK Payroll & PAYE</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Payroll & PAYE Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate gross-to-net employee salary, Employer National Insurance (13.8%), Employee NI (8%), PAYE tax, and Workplace Pension.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: SALARY */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Gross Annual Salary (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{grossSalary.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="12000"
                max="120000"
                step="1000"
                value={grossSalary}
                onChange={(e) => setGrossSalary(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* INPUT 2: PENSION */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Employer Pension Contribution (%):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {pensionPercentage}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={pensionPercentage}
                onChange={(e) => setPensionPercentage(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Minimum UK Auto-Enrolment Employer Pension Rate is 3%.
              </span>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Payroll Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Employee Salary:</span>
                  <span className="font-mono text-white font-semibold">£{grossSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Employee PAYE Tax:</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(employeeIncomeTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Employee NI (8%/2%):</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(employeeNI).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200 pt-2 border-t border-white/10">
                  <span>Employer NI (13.8%):</span>
                  <span className="font-mono text-amber-400 font-semibold">+£{Math.round(employerNI).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Employer Pension ({pensionPercentage}%):</span>
                  <span className="font-mono text-amber-400 font-semibold">+£{Math.round(employerPension).toLocaleString()}</span>
                </div>
              </div>

              {/* NET DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4 space-y-3">
                <div>
                  <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                    Net Employee Take-Home Pay
                  </span>
                  <div className="text-3xl font-serif font-bold text-emerald-400">
                    £{Math.round(netEmployeeTakeHome).toLocaleString()} / year
                  </div>
                  <div className="text-xs text-navy-300">
                    (£{Math.round(netEmployeeTakeHome / 12).toLocaleString()} / month)
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                    Total Cost to Employer
                  </span>
                  <div className="text-2xl font-serif font-bold text-white">
                    £{Math.round(totalCostToEmployer).toLocaleString()} / year
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/paye-payroll-registration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Setup UK PAYE Payroll with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
