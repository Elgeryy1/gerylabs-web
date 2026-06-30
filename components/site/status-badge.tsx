"use client";

import type { ProjectStatus } from "@/content/portfolio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const META: Record<ProjectStatus, { dot: string; detail: string }> = {
  "En desarrollo": { dot: "bg-amber-400", detail: "Funcional y en evolución activa." },
  Activo: { dot: "bg-emerald-400", detail: "En uso y mantenido." },
  Completado: { dot: "bg-sky-400", detail: "Entregado y funcional." },
  Prototipo: { dot: "bg-violet-400", detail: "Prueba de concepto funcional." },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const m = META[status];
  return (
    <TooltipProvider delay={120}>
      <Tooltip>
        <TooltipTrigger className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-foreground">
          <span className={`size-1.5 rounded-full ${m.dot}`} aria-hidden />
          {status}
        </TooltipTrigger>
        <TooltipContent>{m.detail}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
