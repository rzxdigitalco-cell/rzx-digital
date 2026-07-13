import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconName = keyof typeof Icons;

export function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = Icons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  if (!Icon) return null;
  return <Icon {...props} />;
}
