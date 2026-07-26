import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/reveal";

export function CTABanner() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 diagonal-pattern" />
      <div className="absolute inset-0 gold-glow opacity-50" />
      <div className="relative max-w-4xl mx-auto px-6 py-28 text-center">
        <Reveal>
          <p className="label-eyebrow">Ready to start?</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-5 leading-tight">
            Launch Your Business Today.
          </h2>
          <p className="mt-5 text-navy-200 max-w-xl mx-auto">
            Join 200+ founders who trusted us with their UK & US company formation and tax filings.
          </p>
          <div className="mt-9">
            <Link to="/contact" className="btn-gold">
              Get Started Now <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
