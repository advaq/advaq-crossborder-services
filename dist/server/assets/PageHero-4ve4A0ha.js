import { jsxs, jsx } from "react/jsx-runtime";
import { R as Reveal } from "./router-BTtHwbwK.js";
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
export {
  PageHero as P
};
