import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function PakistanFBRNoticeTimelinePage() {
  const [noticeType, setNoticeType] = useState("sec114");
  const notices = {
    sec114: {
      days: 30,
      penalty: "Rs 40,000 or 0.1% of tax payable per day (Sec 182)",
      name: "Section 114 (Notice to File Return)",
      desc: "Issued by FBR for non-filing of annual income tax return."
    },
    sec116: {
      days: 30,
      penalty: "Rs 20,000 for unfiled wealth statement",
      name: "Section 116 (Wealth Statement Reconcilation)",
      desc: "Issued to reconcile assets, foreign bank accounts, and wealth discrepancies."
    },
    sec122: {
      days: 15,
      penalty: "Ex-parte Best Judgment Assessment & Default Surcharge (Sec 205)",
      name: "Section 122 (Amendment of Assessment)",
      desc: "Issued when FBR proposes to add concealed income or reject deductions."
    },
    sec177: {
      days: 15,
      penalty: "Rs 50,000 plus automatic ex-parte audit assessment",
      name: "Section 177 / 214C (Audit Notice)",
      desc: "Issued for audit of books of accounts, invoices, and bank statements."
    }
  };
  const currentNotice = notices[noticeType] || notices.sec114;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "FBR Notice Deadline Checker" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FBR Tax Notice Response Deadline Checker (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Check statutory response deadlines for FBR Iris notices (Sec 114, 116, 122, 177) and calculate non-compliance penalty exposure." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Received FBR Notice Section:" }),
          /* @__PURE__ */ jsxs("select", { value: noticeType, onChange: (e) => setNoticeType(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "sec114", children: "Section 114 (Notice to File Return)" }),
            /* @__PURE__ */ jsx("option", { value: "sec116", children: "Section 116 (Wealth Statement Reconciliation)" }),
            /* @__PURE__ */ jsx("option", { value: "sec122", children: "Section 122 (Amendment of Assessment / Show Cause)" }),
            /* @__PURE__ */ jsx("option", { value: "sec177", children: "Section 177 / 214C (Income Tax Audit Notice)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-border rounded-xl text-xs space-y-1 text-navy-950", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-600 font-serif text-sm", children: currentNotice.name }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: currentNotice.desc })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Notice Reply Deadline" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Statutory Response Window:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-bold", children: [
                currentNotice.days,
                " Days from Receipt"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Non-Compliance Penalty:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-red-400 font-bold text-[11px]", children: currentNotice.penalty })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Urgent Legal Advice Needed?" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 leading-relaxed", children: "Our FBR tax advocates draft professional legal replies and handle Iris hearings to prevent default assessments." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/fbr-notice-response", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Reply to FBR Notice with ADVAQ Lawyers" }) })
      ] })
    ] }) })
  ] });
}
export {
  PakistanFBRNoticeTimelinePage as component
};
