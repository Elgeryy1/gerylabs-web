"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

// Un único IntersectionObserver compartido por todas las instancias de Reveal.
let sharedObserver: IntersectionObserver | null = null;
function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
  }
  return sharedObserver;
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number; // ms
  id?: string;
};

/**
 * Revela el contenido al entrar en viewport (fade + blur + slide).
 * Estilo base en globals.css (.js [data-reveal]); sin JS el contenido es visible.
 * Respeta prefers-reduced-motion.
 */
export function Reveal({ children, as, className, delay = 0, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    if (!obs) {
      el.classList.add("is-visible");
      return;
    }
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal=""
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
