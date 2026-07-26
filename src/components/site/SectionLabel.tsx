export function SectionLabel({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-8 bg-gold-500" />
      <span className="label-eyebrow">{children}</span>
      <span className="h-px w-8 bg-gold-500" />
    </div>
  );
}
