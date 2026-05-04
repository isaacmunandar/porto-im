interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`text-[11px] font-medium tracking-[0.2em] uppercase text-brand-blue mb-6 ${className}`}
    >
      {children}
    </div>
  );
}
