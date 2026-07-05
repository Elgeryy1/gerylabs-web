import type { Project, ProjectCategory } from "@/content/portfolio";
import { Smartphone, Globe, BrainCircuit, Server, Monitor, ArrowUpRight, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GithubIcon } from "./icons";
import { SpotlightCard } from "./spotlight-card";
import { StatusBadge } from "./status-badge";

// Paleta contenida: azul de marca para sistemas/web, violeta para IA.
const categoryMeta: Record<ProjectCategory, { icon: LucideIcon; className: string }> = {
  Android: { icon: Smartphone, className: "text-brand bg-brand/10" },
  "Web/Full-stack": { icon: Globe, className: "text-brand bg-brand/10" },
  "IA/Agentes": { icon: BrainCircuit, className: "text-brand-2 bg-brand-2/10" },
  "Infra/DevOps": { icon: Server, className: "text-brand bg-brand/10" },
  Desktop: { icon: Monitor, className: "text-brand bg-brand/10" },
};

function CardLinks({ project }: { project: Project }) {
  if (project.accessHref && project.accessLabel) {
    return (
      <div className="mt-5">
        <a
          href={project.accessHref}
          className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {project.accessLabel}
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    );
  }

  if (project.repoOrLink) {
    return (
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <a
          href={project.repoOrLink}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Ver proyecto
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
        <a
          href={project.repoOrLink}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${project.name} en GitHub`}
          className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <GithubIcon className="size-4" />
        </a>
      </div>
    );
  }
  return (
    <div className="mt-5">
      <span className="inline-flex h-9 items-center rounded-lg border border-dashed border-border px-3.5 text-sm text-muted-foreground">
        Código privado
      </span>
    </div>
  );
}

export function FeaturedProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const meta = categoryMeta[project.category];
  const Icon = meta.icon;
  const tech = project.mainTech ?? project.stack.slice(0, 5);

  return (
    <SpotlightCard
      className={`group glow-border flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:bg-card/70 ${
        large ? "sm:p-8" : ""
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`grid size-11 place-items-center rounded-xl ${meta.className}`}>
            <Icon className="size-5" aria-hidden />
          </span>
          <div>
            <h3 className={`font-semibold text-foreground ${large ? "text-2xl" : "text-xl"}`}>
              {project.name}
            </h3>
            {project.role && (
              <p className="font-mono text-xs text-muted-foreground">{project.role}</p>
            )}
          </div>
        </div>
        {project.status && <StatusBadge status={project.status} />}
      </div>

      <p className={`text-pretty text-muted-foreground ${large ? "text-base" : "text-sm"}`}>
        {project.problem ?? project.oneLiner}
      </p>

      {project.result && (
        <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-brand/20 bg-brand/[0.06] p-3.5">
          <Zap className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
          <p className="text-sm leading-relaxed text-foreground/90">{project.result}</p>
        </div>
      )}

      {project.stats && project.stats.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {project.stats.map((s) => (
            <li key={s} className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="size-1 rounded-full bg-brand" aria-hidden />
              {s}
            </li>
          ))}
        </ul>
      )}

      {large && (
        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" aria-hidden />
              <span className="text-pretty">{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-5">
        <ul className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <CardLinks project={project} />
      </div>
    </SpotlightCard>
  );
}

export function CompactProjectCard({ project }: { project: Project }) {
  const meta = categoryMeta[project.category];
  const Icon = meta.icon;
  return (
    <article className="glow-border group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:bg-card/60">
      <div className="mb-3 flex items-center gap-2.5">
        <span className={`grid size-8 place-items-center rounded-lg ${meta.className}`}>
          <Icon className="size-4" aria-hidden />
        </span>
        <h3 className="font-semibold text-foreground">{project.name}</h3>
        {project.repoOrLink && (
          <a
            href={project.repoOrLink}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${project.name} en GitHub`}
            className="ml-auto text-muted-foreground transition-colors hover:text-brand"
          >
            <GithubIcon className="size-4" />
          </a>
        )}
      </div>
      <p className="text-pretty text-sm text-muted-foreground">{project.oneLiner}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {(project.mainTech ?? project.stack).slice(0, 4).map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-secondary/40 px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
