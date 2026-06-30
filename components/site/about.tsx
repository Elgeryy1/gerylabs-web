import Image from "next/image";
import { identity, aboutCards } from "@/content/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Icon } from "./lucide-icon";
import { MapPin, GraduationCap, Rocket } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Ubicación", value: identity.location },
  { icon: GraduationCap, label: "Formación", value: identity.education },
  { icon: Rocket, label: "Próximo paso", value: "ASIX (Administración de Sistemas Informáticos en Red)" },
];

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 border-t border-border/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="01 — Quién soy" title="Sobre mí" />

        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          {/* Columna izquierda: foto + datos */}
          <Reveal className="space-y-5">
            <div className="relative w-fit">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-3xl opacity-50 blur-2xl"
                style={{
                  background:
                    "linear-gradient(140deg, color-mix(in oklch, var(--brand) 40%, transparent), color-mix(in oklch, var(--brand-2) 40%, transparent))",
                }}
              />
              <Image
                src="/hero-stars.jpg"
                alt={`Foto de ${identity.name} bajo la Vía Láctea`}
                width={460}
                height={460}
                sizes="(max-width: 1024px) 60vw, 300px"
                className="aspect-square w-full max-w-[300px] rounded-2xl object-cover ring-1 ring-border"
              />
            </div>
            <ul className="space-y-2.5">
              {facts.map((f) => (
                <li
                  key={f.label}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-3.5"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <f.icon className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {f.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">{f.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Columna derecha: bio + 3 cards */}
          <div className="space-y-8">
            <Reveal delay={80} className="space-y-4">
              {identity.bio.map((p, i) => (
                <p key={i} className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {aboutCards.map((c, i) => (
                <Reveal key={c.title} delay={120 + i * 80}>
                  <div className="glow-border h-full rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:bg-card/70">
                    <span className="mb-3 grid size-10 place-items-center rounded-xl bg-brand/10 text-brand">
                      <Icon name={c.icon} className="size-5" />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
