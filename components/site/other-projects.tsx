"use client";

import { useMemo, useState } from "react";
import { otherProjects, projectFilters, type ProjectTag } from "@/content/portfolio";
import { CompactProjectCard } from "./project-card";

type Filter = ProjectTag | "Todos";

export function OtherProjects() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const filters: Filter[] = ["Todos", ...projectFilters];

  const shown = useMemo(
    () => (filter === "Todos" ? otherProjects : otherProjects.filter((p) => p.tags.includes(filter))),
    [filter]
  );

  return (
    <div className="mt-20">
      <div className="mb-8 flex flex-col items-center gap-4 text-center">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">Más proyectos</h3>
        <div
          role="group"
          aria-label="Filtrar proyectos por área"
          className="flex flex-wrap justify-center gap-2"
        >
          {filters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={`inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
                  active
                    ? "border-brand/50 bg-brand/15 text-foreground"
                    : "border-border bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <CompactProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
