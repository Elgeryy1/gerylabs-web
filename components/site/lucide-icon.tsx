import {
  Monitor,
  Boxes,
  Network,
  Server,
  Code2,
  Bot,
  Wrench,
  Terminal,
  GraduationCap,
  Cpu,
  HardDrive,
  Cloud,
  Smartphone,
  Globe,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Monitor,
  Boxes,
  Network,
  Server,
  Code2,
  Bot,
  Wrench,
  Terminal,
  GraduationCap,
  Cpu,
  HardDrive,
  Cloud,
  Smartphone,
  Globe,
  BrainCircuit,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? Cpu;
  return <Cmp className={className} aria-hidden />;
}
