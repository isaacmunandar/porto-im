import Link from "next/link";
import React from "react";

type Variant = "solid" | "outline" | "yellow";

interface ButtonProps {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  classname?: string;
}

const base =
  "inline-block font-condensed text-[14px] font-bold tracking-[0.15em] uppercase transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid: "bg-brand-black text-white px-9 py-[15px] hover:bg-brand-blue",
  outline:
    "border border-[1.5px] border-brand-black text-brand-black px-9 py-[14px] hover:bg-brand-black hover:text-white",
  yellow:
    "bg-brand-yellow text-brand-black px-9 py-[15px] font-extrabold hover:bg-white",
};

export default function Button({
  href,
  variant = "solid",
  children,
  classname = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${classname}`}>
      {children}
    </Link>
  );
}
