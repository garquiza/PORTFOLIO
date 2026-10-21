import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-border bg-surface/60 px-3 py-1 text-sm text-fg/90 transition hover:-translate-y-0.5 hover:border-accent">
      {children}
    </span>
  );
}
