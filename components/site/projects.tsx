import { featuredProjects } from "@/content/portfolio";
import { SectionHeading } from "./section-heading";
import { FeaturedProjectCard } from "./project-card";
import { OtherProjects } from "./other-projects";
import { Reveal } from "./reveal";

// HyperGery (primer destacado) ocupa la celda grande del bento.
const bentoSpan = [
  "md:col-span-2 lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 border-t border-border/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="04 — Trabajo"
          title="Proyectos destacados"
          description="De un hipervisor escrito desde cero a sistemas distribuidos en tiempo real. Cada tarjeta, en menos de diez segundos."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:auto-rows-fr lg:grid-flow-dense lg:grid-cols-6">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80} className={bentoSpan[i] ?? "lg:col-span-3"}>
              <FeaturedProjectCard project={p} large={i === 0} />
            </Reveal>
          ))}
        </div>

        <OtherProjects />
      </div>
    </section>
  );
}
