import { MARQUEE_ITEMS } from "@/lib/data";

export default function MarqueeStrip() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="bg-brand-yellow py-[14px] overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 font-condensed font-bold text-[14px] tracking-[0.15em] uppercase text-brand-black mr-[60px]"
          >
            <span className="text-[18px]">★</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
