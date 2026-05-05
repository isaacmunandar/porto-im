"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(loop);

    const hoverEls = document.querySelectorAll(
      "a, button, [data-cursor-hover]",
    );

    const enterHandler = () => {
      dot.style.transform = "translate(-50%, -50%) scale(2.5)";
      ring.style.width = "52px";
      ring.style.height = "52px";
    };

    const leaveHandler = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", enterHandler);
      el.addEventListener("mouseleave", leaveHandler);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", enterHandler);
        el.removeEventListener("mouseleave", leaveHandler);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-[10px] h-[10px] bg-brand-blue rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-9 h-9 border border-[1.5px] border-brand-blue rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        aria-hidden="true"
      />
    </>
  );
}
