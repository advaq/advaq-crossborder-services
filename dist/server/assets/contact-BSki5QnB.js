import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { R as Reveal, f as faqs } from "./router-BTjKdpe0.js";
import { useState } from "react";
import { ArrowRight, Zap, Lock, ClipboardCheck, Mail, MessageCircle, MapPin, ShieldCheck, HelpCircle, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { P as PageHero } from "./PageHero-zZtVy-1p.js";
import "@tanstack/react-router";
const services = ["UK LTD Incorporation", "Self Assessment Tax Return", "Company Annual Accounts", "Confirmation Statement", "Payroll Services", "VAT Registration", "USA LLC Incorporation", "EIN Number Registration", "BOI Report (FinCEN)", "ITIN Application", "US Tax Return (1040/1065/1120)", "SECP Company Registration", "NTN & FBR Registration", "PSEB Registration", "Income Tax Return Filing (Pakistan)", "FBR Notice Response", "Freelancer Certificate (MoITT)", "NDA / Non-Disclosure Agreement", "Freelance Service Agreement", "IP Assignment Agreement", "Master Service Agreement (MSA)", "IT Outsourcing Agreement", "Privacy Policy & Terms of Service", "Legal Consultation", "Other / Not Sure"];
function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! Muhammad Abdullah will respond within 4 business hours.");
      e.target.reset();
      setSubmitting(false);
    }, 700);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "CONTACT & ADVISORY", title: "Ready to Take Your Business Global?", subtitle: "Tell us what you need. Muhammad Abdullah personally reviews every enquiry and responds within 4 hours. Free initial consultation for all new clients." }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-12", children: [
        /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border rounded-2xl p-8 md:p-10 shadow-sm", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "Book Your Free Consultation" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-500 text-sm leading-relaxed", children: "No commitment. No hidden fees. Just straight answers from a licensed advocate." }),
          /* @__PURE__ */ jsxs("form", { onSubmit, className: "mt-8 space-y-5", children: [
            /* @__PURE__ */ jsx(Field, { label: "Full Name", children: /* @__PURE__ */ jsx("input", { required: true, name: "name", type: "text", className: "form-input", placeholder: "Muhammad Abdullah" }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsx(Field, { label: "Email Address", children: /* @__PURE__ */ jsx("input", { required: true, name: "email", type: "email", className: "form-input", placeholder: "yourname@domain.com" }) }),
              /* @__PURE__ */ jsx(Field, { label: "WhatsApp Number", children: /* @__PURE__ */ jsx("input", { required: true, name: "phone", type: "tel", className: "form-input", placeholder: "+92 300 1234567" }) })
            ] }),
            /* @__PURE__ */ jsx(Field, { label: "Service Interested In", children: /* @__PURE__ */ jsxs("select", { required: true, name: "service", className: "form-input", defaultValue: "", children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "What do you need help with?" }),
              services.map((s) => /* @__PURE__ */ jsx("option", { children: s }, s))
            ] }) }),
            /* @__PURE__ */ jsx(Field, { label: "Your Message", children: /* @__PURE__ */ jsx("textarea", { required: true, name: "message", rows: 5, className: "form-input", placeholder: "Tell us about your situation — the more detail, the better we can help" }) }),
            /* @__PURE__ */ jsx("button", { type: "submit", disabled: submitting, className: "btn-gold w-full py-4 text-xs font-semibold uppercase tracking-widest disabled:opacity-70 flex items-center justify-center gap-2", children: submitting ? "Submitting..." : /* @__PURE__ */ jsxs(Fragment, { children: [
              "GET FREE CONSULTATION ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "text-center text-[13px] text-gray-500 mt-3 leading-relaxed", children: "🔒 Your information is confidential and never shared. Muhammad Abdullah responds personally to every enquiry." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(Reveal, { delay: 150, className: "lg:col-span-2 space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-navy-950 text-white rounded-2xl p-6 border border-gold-500/20 shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0", children: /* @__PURE__ */ jsx(Zap, { size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-widest text-gold-500", children: "⚡ RESPONSE TIME" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-white font-semibold text-base", children: "Within 4 Business Hours" }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-navy-200 text-xs", children: "Monday to Saturday (9am–6pm PKT)" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-navy-950 text-white rounded-2xl p-6 border border-gold-500/20 shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0", children: /* @__PURE__ */ jsx(Lock, { size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-widest text-gold-500", children: "🔒 CONFIDENTIAL" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-white font-semibold text-base", children: "All enquiries are 100% confidential" }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-navy-200 text-xs", children: "Protected by advocate-client privilege" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-navy-950 text-white rounded-2xl p-6 border border-gold-500/20 shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0", children: /* @__PURE__ */ jsx(ClipboardCheck, { size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-widest text-gold-500", children: "📋 FREE CONSULTATION" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-white font-semibold text-base", children: "No fees for initial consultation" }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-navy-200 text-xs", children: "Get clarity before you commit" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-navy-900 text-white rounded-2xl p-6 border border-white/10 hover:border-gold-500/40 transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0", children: /* @__PURE__ */ jsx(Mail, { size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-widest text-navy-200/80", children: "EMAIL ADDRESS" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-white font-medium", children: "contact@advaq.com" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:contact@advaq.com", className: "mt-2 inline-block text-gold-500 text-xs font-semibold uppercase tracking-widest hover:underline", children: "Send Email →" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-navy-900 text-white rounded-2xl p-6 border border-white/10 hover:border-gold-500/40 transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0", children: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-widest text-navy-200/80", children: "WHATSAPP NUMBER" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-white font-medium", children: "+92 3000 925335" }),
              /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noreferrer", className: "mt-2 inline-block text-gold-500 text-xs font-semibold uppercase tracking-widest hover:underline", children: "Chat on WhatsApp →" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-navy-900 text-white rounded-2xl p-6 border border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 shrink-0", children: /* @__PURE__ */ jsx(MapPin, { size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-widest text-navy-200/80", children: "BASED IN" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-white font-medium", children: "Lahore, Pakistan" }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-navy-200 text-xs", children: "Serving clients across UK, USA & UAE" })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 border border-gold-500/30 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-4", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { size: 18 }),
          /* @__PURE__ */ jsx("span", { children: "TRUST & ADVOCACY GUARANTEE" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white font-medium mb-6", children: "🛡️ YOUR ENQUIRY IS SAFE WITH US" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-navy-100", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold text-base", children: "✓" }),
            /* @__PURE__ */ jsx("span", { children: "Punjab Bar Council Licensed Advocate" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold text-base", children: "✓" }),
            /* @__PURE__ */ jsx("span", { children: "IRS PTIN Registered Tax Preparer" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold text-base", children: "✓" }),
            /* @__PURE__ */ jsx("span", { children: "SECP & FBR Registered Practitioner" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold text-base", children: "✓" }),
            /* @__PURE__ */ jsx("span", { children: "200+ Businesses Served Worldwide" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-navy-900/90 p-4 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold text-base", children: "✓" }),
            /* @__PURE__ */ jsx("span", { children: "Advocate-Client Privilege Protected" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-gold-600 text-xs font-semibold uppercase tracking-widest mb-2", children: "CLIENT ENQUIRIES" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-serif text-2xl md:text-4xl text-dark-text font-semibold flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx(HelpCircle, { className: "text-gold-600", size: 28 }),
            "Frequently Asked Questions"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm mt-2", children: "Quick answers to common client questions regarding initial consultations and remote engagements." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto space-y-4", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(openFaq === idx ? null : idx), className: "w-full p-5 text-left font-sans font-semibold text-navy-950 flex justify-between items-center gap-4 hover:bg-off-white", children: [
            /* @__PURE__ */ jsx("span", { children: faq.q }),
            /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `text-gold-500 shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}` })
          ] }),
          openFaq === idx && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-border/50 pt-3", children: faq.a })
        ] }, idx)) })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "bg-navy-950 text-white rounded-2xl p-10 text-center relative overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-2xl mx-auto space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "DIRECT CONTACT CHANNELS" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-4xl text-white font-medium", children: "Prefer to chat directly?" }),
        /* @__PURE__ */ jsxs("p", { className: "text-navy-200 text-sm", children: [
          "Average response time: ",
          /* @__PURE__ */ jsx("strong", { children: "Under 4 business hours" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noreferrer", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: "💬 WhatsApp Now" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:contact@advaq.com", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: "📧 Email Us" })
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
        .form-input {
          width: 100%;
          padding: 0.85rem 1rem;
          background: white;
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          font-size: 15px;
          color: var(--color-dark-text);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          font-family: inherit;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-gold-500);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-gold-500) 18%, transparent);
        }
      ` })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[12px] font-semibold uppercase tracking-widest text-dark-text/70", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-2", children })
  ] });
}
export {
  ContactPage as component
};
