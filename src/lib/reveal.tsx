import { useEffect, useRef, type ReactNode, type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

export function Reveal({ children, delay = 0, className = "", as = "div", style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const Comp = as as "div";
  return (
    <Comp
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ animationDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
