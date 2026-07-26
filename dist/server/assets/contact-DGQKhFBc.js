import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Send, Mail, MessageCircle, Clock, Languages, MapPin } from "lucide-react";
import { toast } from "sonner";
import { R as Reveal } from "./router-D17Z8zgN.js";
import "@tanstack/react-router";
function PageHero({
  eyebrow,
  title,
  subtitle,
  pattern = "grid"
}) {
  return /* @__PURE__ */ jsxs("section", { className: "relative bg-navy-900 pt-40 pb-24 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute inset-0 ${pattern === "star" ? "star-pattern" : pattern === "diagonal" ? "diagonal-pattern" : "grid-pattern"}`
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gold-glow opacity-60" }),
    /* @__PURE__ */ jsx("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-white text-4xl md:text-6xl mt-5 leading-[1.1]", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-lg max-w-2xl mx-auto leading-relaxed", children: subtitle })
    ] }) })
  ] });
}
const services = ["UK LTD Incorporation", "Self Assessment Tax Return", "Company Annual Accounts", "Confirmation Statement", "Payroll Services", "VAT Registration", "USA LLC Incorporation", "EIN Number Registration", "BOI Report (FinCEN)", "ITIN Application", "US Tax Return (1040/1065/1120)", "SECP Company Registration", "NTN & FBR Registration", "PSEB Registration", "Income Tax Return Filing (Pakistan)", "FBR Notice Response", "Freelancer Certificate (MoITT)", "NDA / Non-Disclosure Agreement", "Freelance Service Agreement", "IP Assignment Agreement", "Master Service Agreement (MSA)", "IT Outsourcing Agreement", "Privacy Policy & Terms of Service", "Legal Consultation", "Other / Not Sure"];
function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you within 24 hours.");
      e.target.reset();
      setSubmitting(false);
    }, 700);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Contact", title: "Let's Build Your Business Together", subtitle: "Tell us what you need and Muhammad Abdullah will personally respond within a few hours. Free initial consultation for all new enquiries." }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border rounded-2xl p-9", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl text-dark-text", children: "Send us a message" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-500 text-sm", children: "All fields required. We never share your details." }),
        /* @__PURE__ */ jsxs("form", { onSubmit, className: "mt-8 space-y-5", children: [
          /* @__PURE__ */ jsx(Field, { label: "Full Name", children: /* @__PURE__ */ jsx("input", { required: true, name: "name", type: "text", className: "form-input", placeholder: "John Smith" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsx(Field, { label: "Email Address", children: /* @__PURE__ */ jsx("input", { required: true, name: "email", type: "email", className: "form-input", placeholder: "you@example.com" }) }),
            /* @__PURE__ */ jsx(Field, { label: "WhatsApp Number", children: /* @__PURE__ */ jsx("input", { required: true, name: "phone", type: "tel", className: "form-input", placeholder: "+92 300 1234567" }) })
          ] }),
          /* @__PURE__ */ jsx(Field, { label: "Service Interested In", children: /* @__PURE__ */ jsxs("select", { required: true, name: "service", className: "form-input", defaultValue: "", children: [
            /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Choose a service…" }),
            services.map((s) => /* @__PURE__ */ jsx("option", { children: s }, s))
          ] }) }),
          /* @__PURE__ */ jsx(Field, { label: "Your Message", children: /* @__PURE__ */ jsx("textarea", { required: true, name: "message", rows: 5, className: "form-input", placeholder: "Tell us a bit about your business and what you need." }) }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: submitting, className: "btn-gold w-full disabled:opacity-70", children: submitting ? "Sending…" : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Send Message ",
            /* @__PURE__ */ jsx(Send, { size: 16 })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-[13px] text-gray-500 mt-3", children: "🔒 Your information is confidential and never shared. Muhammad Abdullah responds personally to every enquiry." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 150, className: "lg:col-span-2 space-y-5", children: [{
        Icon: Mail,
        t: "Email",
        v: "contact@advaq.com",
        a: "mailto:contact@advaq.com",
        cta: "Send email"
      }, {
        Icon: MessageCircle,
        t: "WhatsApp",
        v: "+92 3000 925335",
        a: "https://wa.me/923000925335",
        cta: "Chat on WhatsApp"
      }, {
        Icon: Clock,
        t: "Hours",
        v: "Mon–Sat, 9am–9pm PKT"
      }, {
        Icon: Languages,
        t: "Language Support",
        v: "English & Urdu — we serve clients worldwide"
      }, {
        Icon: MapPin,
        t: "Based In",
        v: "Lahore, Pakistan",
        sub: "Serving clients in UK, US & worldwide"
      }].map((c) => /* @__PURE__ */ jsx("div", { className: "bg-navy-900 text-white rounded-2xl p-7 border border-white/5 hover:border-gold-500/40 transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-11 h-11 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-lg text-gold-500 shrink-0", children: /* @__PURE__ */ jsx(c.Icon, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "label-eyebrow !text-navy-200/80 !text-[11px]", children: c.t }),
          /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-white", children: c.v }),
          c.sub && /* @__PURE__ */ jsx("p", { className: "mt-1 text-navy-200 text-sm", children: c.sub }),
          c.a && /* @__PURE__ */ jsxs("a", { href: c.a, className: "mt-3 inline-block text-gold-500 text-sm font-semibold uppercase tracking-widest border-b border-transparent hover:border-gold-500 pb-0.5", children: [
            c.cta,
            " →"
          ] })
        ] })
      ] }) }, c.t)) })
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
  Contact as component
};
