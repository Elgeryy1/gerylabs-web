import { skills } from "@/content/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Icon } from "./lucide-icon";

// Tecnologías destacadas (se marcan con acento)
const PRIORITY = new Set([
  "Windows Server",
  "Linux",
  "Ubuntu",
  "Hyper-V",
  "QEMU / KVM",
  "Docker",
  "TypeScript",
  "Python",
  "Node.js",
  "Git / GitHub",
  "Cloudflare",
]);

export function Skills() {
  return (
    <section
      id="tecnologias"
      className="scroll-mt-20 border-t border-border/60 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="03 — Stack"
          title="Tecnologías"
          description="Del sistema operativo al despliegue. Lo que uso de verdad, agrupado por área; en color, mi stack principal."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.key} delay={(i % 3) * 80} className="h-full">
              <div className="glow-border h-full rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:bg-card/60">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-lg bg-secondary text-brand">
                    <Icon name={group.icon} className="size-[18px]" />
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {group.label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const priority = PRIORITY.has(item);
                    return (
                      <li
                        key={item}
                        className={`rounded-lg border px-2.5 py-1 text-[13px] font-medium ${
                          priority
                            ? "border-brand/40 bg-brand/10 text-foreground"
                            : "border-border bg-secondary/40 text-muted-foreground"
                        }`}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
