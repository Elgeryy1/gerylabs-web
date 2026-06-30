import { contact } from "@/content/portfolio";
import { SectionHeading } from "./section-heading";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden border-t border-border/60 bg-card/20 py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brand) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
        <SectionHeading
          eyebrow="05 — Hablemos"
          title="¿Trabajamos juntos?"
          description="Estoy abierto a oportunidades de soporte IT, sistemas, infraestructura y proyectos tecnológicos en Barcelona o en modalidad híbrida."
        />

        <Reveal className="flex flex-col items-center gap-4">
          <ButtonLink
            size="lg"
            className="h-12 gap-2 px-8 text-base"
            href={`mailto:${contact.email}`}
            aria-label={`Enviar un correo a ${contact.email}`}
          >
            <Mail className="size-5" />
            {contact.email}
          </ButtonLink>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <ButtonLink
              variant="outline"
              size="lg"
              className="gap-2"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </ButtonLink>
            <ButtonLink
              variant="outline"
              size="lg"
              className="gap-2"
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon className="size-4" /> GitHub
            </ButtonLink>
            <ButtonLink
              variant="outline"
              size="lg"
              className="gap-2"
              href={contact.cvUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FileDown className="size-4" /> Descargar CV
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
