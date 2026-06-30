"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { identity, contact } from "@/content/portfolio";
import { FileDown, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ButtonLink } from "./button-link";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Condensa el nav al hacer scroll (rAF + solo al cruzar el umbral)
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const s = window.scrollY > 24;
      setScrolled((prev) => (prev === s ? prev : s));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea scroll del body + foco/Escape al abrir el menú móvil
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        aria-label="Principal"
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border border-border bg-background/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link
          href="#inicio"
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold"
          aria-label="Inicio"
        >
          <Image
            src="/hero-stars.jpg"
            alt={identity.name}
            width={36}
            height={36}
            className="size-9 rounded-full object-cover ring-1 ring-border"
          />
          <span className="hidden text-foreground md:inline">
            gerylabs<span className="text-brand">.com</span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="hidden size-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:grid"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="hidden size-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:grid"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <ButtonLink
            size="sm"
            className="hidden h-10 gap-1.5 sm:inline-flex"
            href={contact.cvUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FileDown className="size-4" />
            Descargar CV
          </ButtonLink>

          {/* Toggle móvil */}
          <button
            ref={btnRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="grid size-10 place-items-center rounded-lg border border-border bg-secondary/50 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Panel móvil */}
      {open && (
        <div
          id="menu-movil"
          className="fixed inset-0 top-0 z-40 flex flex-col bg-background/95 px-6 pb-10 pt-24 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Móvil" className="flex flex-col gap-1">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink
              size="lg"
              className="gap-2"
              href={contact.cvUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
            >
              <FileDown className="size-4" /> Descargar CV
            </ButtonLink>
            <div className="flex gap-3">
              <ButtonLink
                variant="outline"
                size="lg"
                className="flex-1 gap-2"
                href={contact.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubIcon className="size-4" /> GitHub
              </ButtonLink>
              <ButtonLink
                variant="outline"
                size="lg"
                className="flex-1 gap-2"
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedinIcon className="size-4" /> LinkedIn
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
