import { identity, contact } from "@/content/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm font-semibold text-foreground">
              {identity.name}
              <span className="text-brand"> · {contact.domain}</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{identity.shortRole}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Correo"
              className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {identity.name}. Todos los derechos reservados.
          </p>
          <p>Diseñado y desarrollado por {identity.name}.</p>
        </div>
      </div>
    </footer>
  );
}
