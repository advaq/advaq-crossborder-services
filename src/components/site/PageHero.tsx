import { Reveal } from "@/lib/reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  pattern = "grid",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  pattern?: "grid" | "star" | "diagonal";
}) {
  return (
    <section className="relative bg-navy-900 pt-40 pb-24 overflow-hidden">
      <div
        className={`absolute inset-0 ${
          pattern === "star" ? "star-pattern" : pattern === "diagonal" ? "diagonal-pattern" : "grid-pattern"
        }`}
      />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gold-glow opacity-60" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="label-eyebrow">{eyebrow}</p>
          <h1 className="font-serif text-white text-4xl md:text-6xl mt-5 leading-[1.1]">{title}</h1>
          <p className="mt-6 text-navy-200 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
