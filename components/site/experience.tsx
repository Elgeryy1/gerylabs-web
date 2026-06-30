import { experience } from "@/content/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Check } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 border-t border-border/60 bg-card/20 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="02 — Trayectoria"
          title="Experiencia"
          description="Donde he aplicado lo aprendido: soporte real a usuarios y liderazgo técnico de un proyecto en equipo."
        />

        <ol className="relative">
          {/* Línea vertical con gradiente */}
          <span
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand-2/60 to-transparent sm:left-[23px]"
          />

          {experience.map((exp, i) => (
            <li key={exp.org} className="relative pl-14 pb-12 last:pb-0 sm:pl-16">
              {/* Nodo */}
              <span
                aria-hidden
                className={`absolute left-2 top-1 grid size-9 place-items-center rounded-full border sm:left-[6px] ${
                  exp.accent
                    ? "border-brand/50 bg-brand/15 text-brand"
                    : "border-border bg-card text-muted-foreground"
                }`}
              >
                <span
                  className={`size-2.5 rounded-full ${exp.accent ? "bg-brand" : "bg-muted-foreground"}`}
                />
              </span>

              <Reveal delay={i * 100}>
                <div className="glow-border rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:bg-card/70 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 font-mono text-xs font-medium text-brand">
                      {exp.kind}
                    </span>
                  </div>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/90">{exp.org}</span>
                    <span aria-hidden>·</span>
                    <span className="font-mono text-xs">{exp.period}</span>
                    {exp.location && (
                      <>
                        <span aria-hidden>·</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                        <span className="text-pretty">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
