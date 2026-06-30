import { identity, contact, metrics, priorityStack } from "@/content/portfolio";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

// Cuadros del grid con latido lento (decorativos)
const pulseSquares = [
  { left: "12%", top: "26%", delay: "0s", max: 0.2 },
  { left: "78%", top: "20%", delay: "1.4s", max: 0.16 },
  { left: "64%", top: "62%", delay: "2.6s", max: 0.18 },
  { left: "26%", top: "68%", delay: "0.8s", max: 0.14 },
  { left: "88%", top: "48%", delay: "3.2s", max: 0.16 },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Fondo: rejilla con máscara radial */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-fade" />
      {/* Cuadros con latido */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {pulseSquares.map((s, i) => (
          <span
            key={i}
            className="absolute size-[54px] rounded-[2px] bg-brand"
            style={{
              left: s.left,
              top: s.top,
              animation: "grid-pulse 4s ease-in-out infinite",
              animationDelay: s.delay,
              ["--pulse-max" as string]: s.max,
              opacity: 0,
            }}
          />
        ))}
      </div>
      {/* Spotlights */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[36rem] w-[44rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brand) 22%, transparent), transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-[30%] -z-10 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brand-2) 16%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <Reveal>
            {identity.available && (
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Disponible para nuevas oportunidades
              </div>
            )}
          </Reveal>

          <Reveal delay={60}>
            <h1 className="text-balance text-[clamp(2.1rem,8vw,2.6rem)] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Hola, soy <span className="text-aurora">{identity.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-2xl text-xl font-medium text-foreground/90 sm:text-2xl">
              {identity.role}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {identity.tagline}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink size="lg" className="h-11 gap-2 px-5 text-base" href="#proyectos">
                Ver proyectos
                <ArrowDown className="size-4" />
              </ButtonLink>
              <ButtonLink
                size="lg"
                variant="outline"
                className="h-11 gap-2 px-5 text-base"
                href={contact.cvUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FileDown className="size-4" />
                Descargar CV
              </ButtonLink>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={`mailto:${contact.email}`}
                  aria-label="Enviar correo"
                  className="grid size-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Mail className="size-5" />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="grid size-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <GithubIcon className="size-5" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="grid size-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Métricas */}
          <Reveal delay={300}>
            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="border-l border-border pl-4">
                  <dt className="text-2xl font-semibold tracking-tight text-foreground">
                    {m.value}
                  </dt>
                  <dd className="mt-0.5 text-sm text-muted-foreground">{m.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Marquee de stack clave */}
      <div className="marquee-mask pointer-events-none absolute inset-x-0 bottom-6 overflow-hidden">
        <div
          className="marquee gap-3 pr-3"
          style={{ ["--marquee-duration" as string]: "55s" }}
          aria-hidden
        >
          {[...priorityStack, ...priorityStack].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap font-mono text-xs text-muted-foreground/70"
            >
              {t}
              <span className="text-brand/50">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
