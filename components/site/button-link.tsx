import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type ButtonLinkProps = ComponentProps<"a"> & VariantProps<typeof buttonVariants>;

// Ancla estilada como botón (Base UI Button no soporta asChild).
export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
