import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-2xl items-center text-center"
      : "max-w-2xl items-start text-left";
  return (
    <Reveal className={`mb-12 flex flex-col gap-3 sm:mb-16 ${alignment}`}>
      <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
        <span className="size-1.5 rounded-full bg-brand" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="text-balance font-serif text-4xl font-normal leading-[1.1] text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
