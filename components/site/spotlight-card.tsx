"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Tarjeta con spotlight que sigue al puntero (clase .spotlight en globals.css).
 * Las escrituras de --mx/--my se coalescen a un update por frame con rAF.
 */
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      el.style.setProperty("--mx", `${pos.current.x}px`);
      el.style.setProperty("--my", `${pos.current.y}px`);
    });
  }

  return (
    <div ref={ref} onPointerMove={onMove} className={`spotlight ${className ?? ""}`}>
      {children}
    </div>
  );
}
